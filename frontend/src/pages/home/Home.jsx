/* eslint-disable react-hooks/purity */
import { useState, useMemo, useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Box, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { useStarField } from './components/useStarField.js';
import Navbar from './components/Navbar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';

import { MENU_PHRASES } from '@/constants/constants.js';

import heroBg from '@/projects-images/blackHoleImg.webp';
import projectsBg from '@/projects-images/purpleBackgroundImg.webp';

import * as styles from './Home.styles.js';

gsap.registerPlugin(ScrollTrigger); // Loads the ScrollTrigger functionality so I can use it

export default function Menu() {

    const heroRef = useRef(null);
    const wipePanelRef = useRef(null);

    const starSectionRef = useRef(null);
    const canvasRef = useRef(null);
    const spaceBgRef = useRef(null);
    const projectsSectionRef = useRef(null);

    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setHeroVisible(false), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {

        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches; // Detecting input type

        const ctx = gsap.context(() => { // Creates a container (ctx) that tracks every GSAP animation created inside

            // Create an animation sequence
            gsap.timeline({
                scrollTrigger: {
                    // Use the hero section to determine the animation progress
                    trigger: heroRef.current,
                    start: 'top top', // The animation starts when the top of the hero reaches the top of the viewport
                    end: 'bottom top', // First top is the trigger and the second top is the viewport, which means the animation finishes when the bottom of the hero reaches the top of the viewport
                    scrub: true, // Ties animation progress directly to scroll
                }
            })
            .to(heroRef.current, {
                ...(isTouch ? {} : {
                    filter: 'blur(6px)',
                    scale: 1.2,
                }),
                ease: 'none', // Ease controls acceleration
            });

            // Create another animation sequence
            gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            })
            .to(wipePanelRef.current, {
                translateY: '0%',// Moves the panel up until it covers the screen
                skewY: '8deg',
                ease: 'none',
            })
            .to(wipePanelRef.current, {
                skewY: '0deg',// Angle flattens as it finishes covering
                ease: 'none',
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: starSectionRef.current,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            })
            .to(wipePanelRef.current, {
                translateY: '-100%',
                ease: 'none',
            });

        });

        return () => ctx.revert(); // Cleanup — removes all ScrollTriggers on unmount

    }, []);

    useStarField(starSectionRef, canvasRef, spaceBgRef, projectsSectionRef);

    const randomPhrase = useMemo(() => {
        return MENU_PHRASES[Math.floor(Math.random() * MENU_PHRASES.length)];
    }, []);

    const scrollToProjects = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <Box>
            <Navbar/>

            <Box ref={heroRef} sx={styles.homeLayoutSx}>
                <Box component="img" src={heroBg} sx={styles.heroImgSx(heroVisible)}/>

                <Box sx={styles.heroGradientOverlaySx}/>

                <Box sx={styles.homeContentSx}>
                    <Box sx={styles.homeTitleGroupSx(heroVisible)}>
                        <Box sx={styles.homeTitleWrapperSx}>
                            <Typography variant="h1" sx={styles.homeTitleSx}>
                                Projects
                            </Typography>
                        </Box>
                        <Typography variant="h5" sx={styles.homePhraseSx}>
                            {randomPhrase}
                        </Typography>
                        <KeyboardDoubleArrowDownIcon onClick={scrollToProjects} sx={styles.arrowUpSx}/>
                    </Box>
                </Box>
            </Box>

            <Box ref={wipePanelRef} sx={styles.wipePanelSx}/>

            <Box ref={starSectionRef} sx={styles.starSectionSx}>
                <canvas ref={canvasRef} style={{
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'block',
                    backgroundColor: 'transparent',
                }} />

                <Box
                    ref={spaceBgRef}
                    component="img"
                    src={projectsBg}
                    sx={styles.projectsImgSx}
                />

                <Box sx={styles.projectsContainer}>
                    <Box
                        ref={projectsSectionRef}
                        sx={styles.projectsRevealSx}
                    >
                        <ProjectsSection />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}