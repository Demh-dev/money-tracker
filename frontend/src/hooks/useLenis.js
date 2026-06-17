// This hook initializes Lenis smooth scroll and connects it to GSAP ScrollTrigger.
// The connection is critical — without it, ScrollTrigger reads the native scroll

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {

    useEffect(() => {

        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

        if (isTouch) return;

        const lenis = new Lenis({
            duration: 1.2, // How long the inertia lasts — 1.2s feels natural
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease out
            smoothWheel: true, // Smooth mouse wheel
        });

        // Connect Lenis to GSAP ScrollTrigger.
        // Every time Lenis scrolls, it tells ScrollTrigger the current position.
        // Without this, they operate independently and fight each other.
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis to GSAP's ticker so it updates on every animation frame.
        // gsap.ticker is requestAnimationFrame managed by GSAP.
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // GSAP time is in seconds, Lenis expects milliseconds
        });

        // Tell GSAP's ticker not to add its own lag smoothing on top of Lenis.
        gsap.ticker.lagSmoothing(0);

        return () => {
            // Cleanup on unmount — stop Lenis and remove the ticker
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };

    }, []);
}