/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { gsap } from 'gsap';

export const useStarField = (starSectionRef, canvasRef, spaceBgRef, projectsSectionRef) => {

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d'); // Gives the tools to draw in 2D

        // Make the drawing surface match the visible size
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize); // Whenever the browser window changes size, run resize again

        const STAR_COUNT = 250;
        // Give me the current center of the canvas using CENTER_X and CENTER_Y
        const CENTER_X = () => canvas.width / 2;
        const CENTER_Y = () => canvas.height / 2;

        // It creates an array 250 times with those properties
        const stars = Array.from({ length: STAR_COUNT }, () => ({
            // Horizontal position of the star
            x: Math.random() * canvas.width - canvas.width / 2,
            // Vertical position of the star
            y: Math.random() * canvas.height - canvas.height / 2,
            // How far away the star starts from the viewer
            z: Math.random() * canvas.width,
            // It keeps track of the stars previous position/depth so the animation can compare where it was before and where it is now
            pz: 0,
        }));

        const state = {
            speed: 0.5,
        };

        const scrollAnim = gsap.timeline({
            scrollTrigger: {
                trigger: starSectionRef.current,
                start: 'top top',
                end: '+=6000', // Animation will take 6000px worth of scrolling
                scrub: true,
                pin: true, // Freeze this section in place while the animation plays
                pinSpacing: true, // Reserve enough room so the rest of the page still flows correctly
            }
        });

        scrollAnim
            .to(state, {
                speed: 4,
                ease: 'power1.in',
                duration: 6,
            })
            .to(state, {
                speed: 10,
                ease: 'power1.in',
                duration: 2,
            })
            .to(spaceBgRef.current, {
                opacity: 0.6,
                ease: 'power1.in',
                duration: 4,
            }, '+=16') // Wait another 16 timeline units before starting this reveal
            .to(projectsSectionRef.current, {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                pointerEvents: 'auto',
            }, '+=4'); // Wait another 4 timeline units before starting this reveal

        let animId;
        let isVisible = false;

        const draw = () => {
            animId = requestAnimationFrame(draw);

            if (!isVisible) return;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Filled shapes use white
            ctx.fillStyle = 'white';
            // Lines/outlines use white
            ctx.strokeStyle = 'white';

            for (const star of stars) {
                // pz remembers where the star was
                star.pz = star.z;
                star.z -= state.speed;

                if (star.z <= 0) {
                    star.x = Math.random() * canvas.width - canvas.width / 2;
                    star.y = Math.random() * canvas.height - canvas.height / 2;
                    star.z = canvas.width;
                    star.pz = star.z;
                }

                const sx = (star.x / star.z) * canvas.width + CENTER_X();
                const sy = (star.y / star.z) * canvas.height + CENTER_Y();

                const size = Math.max(0.5, (1 - star.z / canvas.width) * 3);

                const px = (star.x / star.pz) * canvas.width + CENTER_X();
                const py = (star.y / star.pz) * canvas.height + CENTER_Y();

                const opacity = 1 - star.z / canvas.width;

                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.lineWidth = size;
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
        };

        // Tells when this element enters or leaves the screen
        const observer = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; },
            { threshold: 0 }
        );
        observer.observe(canvas);

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            observer.disconnect();
            scrollAnim.scrollTrigger?.kill();
        };

    }, []);
}