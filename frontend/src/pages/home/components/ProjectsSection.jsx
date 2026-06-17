/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';

import { PROJECTS_DATA, DEVICE_OPTIONS, TOTAL } from '@/constants/constants.js';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import * as styles from './Projects.styles.js';

function DevicePreview({ device, previews }) {
    const widthMap  = {
        laptop: '100%',
        tablet: '60%',
        mobile: '40%'
    };
    const aspectMap = {
        laptop: '16/10',
        tablet: '3/4',
        mobile: '40/84'
    };
    const radiusMap = {
        laptop: '12px 12px 0 0',
        tablet: '16px',
        mobile: '24px'
    };

    const img = previews?.[device];
    const isPair = Array.isArray(img); // Returns true or false, whether is an array or not

    return (
        <Box sx={styles.previewContainer(widthMap, device)}>
            {isPair ? (
                <Box key={device} sx={styles.devicePairSx}>
                    <Box sx={styles.devicePairFrameSx(aspectMap, radiusMap, device, 'left')}>
                        <Box
                            component="img"
                            src={img[0]}
                            alt={`${device} preview - 1`}
                            sx={styles.imageSx}
                        />
                    </Box>
                    <Box sx={styles.devicePairFrameSx(aspectMap, radiusMap, device, 'right')}>
                        <Box
                            component="img"
                            src={img[1]}
                            alt={`${device} preview - 2`}
                            sx={styles.imageSx}
                        />
                    </Box>
                </Box>
            ) : (
                <Box key={device} sx={styles.deviceFrame(aspectMap, radiusMap, device)}>
                    {img && (
                        <Box
                            component="img"
                            src={img}
                            alt={`${device} preview`}
                            sx={styles.imageSx}
                        />
                    )}
                </Box>
            )}
            {device === 'laptop' && <Box sx={styles.laptopBase}/>}
        </Box>
    );
}

function ProjectCard({ project }) {
    const [device, setDevice] = useState('laptop');

    const buttons = [
        {
            href: project.githubUrl,
            label: 'Code',
            Icon: GitHubIcon,
            style: false,
        },
        {
            href: project.demoUrl,
            label: 'Demo',
            Icon: OpenInNewIcon,
            style: true
        },
    ];

    return (
        <Box sx={styles.projectCard}>
            <Box sx={styles.projectInfoPanel}>
                <Typography sx={styles.projectTitle}>
                    {project.title}
                </Typography>

                <Box sx={styles.deviceSelector}>
                    {DEVICE_OPTIONS.map(({ key, label, Icon }) => {

                        const active = device === key;

                        return (
                            <Box
                                key={key}
                                onClick={() => setDevice(key)}
                                sx={styles.deviceToggleButton(active)}
                            >
                                <Icon sx={{ fontSize: '1.1rem' }}/>
                                {label}
                            </Box>
                        );
                    })}
                </Box>

                <Box sx={styles.actionButtonsContainer}>

                    {buttons.map(({ href, label, Icon, style }) => (
                        <Box
                            key={label}
                            component="a"
                            href={href}
                            target="_blank" // Don't replace current page
                            rel="noopener noreferrer" // Prevents sending information about where the visitor came from
                            sx={styles.actionButton(style)}
                        >
                            <Icon sx={{ fontSize: '1.18rem' }}/> {label}
                        </Box>
                    ))}
                </Box>

                <Typography sx={styles.projectDescription}>
                    {project.description}
                </Typography>

                <Box sx={styles.techTagsContainer}>
                    {project.techs.map((tech) => (
                        <Box key={tech} sx={styles.techTag}>
                            {tech}
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={styles.previewPanel}>
                <DevicePreview device={device} previews={project.previews}/>
            </Box>
        </Box>
    );
}

export default function ProjectsSection() {
    const [indexCard, setIndexCard] = useState(0);
    const isAnimating = useRef(false);
    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((currentCard, currentIndex) => {
            if (!currentCard) return;
            const x = currentIndex - indexCard;

            gsap.set(currentCard, {
                xPercent: x * 110,
                scale: x === 0 ? 1 : 0.88,
                opacity: x === 0 ? 1 : 0.35,
                zIndex: x === 0 ? 10 : 5,
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goTo = (next) => {
        if (isAnimating.current) return;
        if (next < 0 || next >= TOTAL) return;

        isAnimating.current = true;
        setIndexCard(next);

        cardRefs.current.forEach((currentCard, currentIndex) => {
            if (!currentCard) return;

            const x = currentIndex - next;

            gsap.to(currentCard, {
                xPercent: x * 110,
                scale:   x === 0 ? 1 : 0.88,
                opacity: x === 0 ? 1 : 0.35,
                zIndex:  x === 0 ? 10 : 5,
                duration: 0.65,
                ease: 'power2.inOut',
                onComplete: () => {
                    if (currentIndex === next) isAnimating.current = false;
                },
            });
        });
    };

    const goPrev = () => goTo(indexCard - 1);
    const goNext = () => goTo(indexCard + 1);

    return (
        <Box sx={styles.projectsCarousel}>
            <Box sx={styles.projectsTrack}>
                <Box sx={styles.projectsTrackInner}>
                    {PROJECTS_DATA.map((project, projectIndex) => (
                        <Box
                            key={project.id}
                            ref={currentCard => cardRefs.current[projectIndex] = currentCard}
                            sx={styles.projectCardWrapper}
                        >
                            <ProjectCard project={project}/>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={styles.carouselNavigation}>
                {[
                    { action: goPrev, Icon: ArrowBackIosNewIcon },
                    { action: goNext, Icon: ArrowForwardIosIcon },
                ].map(({ action, Icon }, buttonIndex) => (
                    <Box
                        key={buttonIndex}
                        onClick={action}
                        sx={styles.carouselNavigationButton}
                    >
                        <Icon sx={{ fontSize: '1.18rem' }}/>
                    </Box>
                ))}
            </Box>

            <Box sx={styles.carouselIndicators}>
                {PROJECTS_DATA.map((_, next) => (
                    <Box
                        key={next}
                        onClick={() => goTo(next)}
                        sx={styles.carouselIndicator(indexCard, next)}
                    />
                ))}
            </Box>
        </Box>
    );
}