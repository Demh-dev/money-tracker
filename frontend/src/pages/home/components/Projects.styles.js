/* Device Preview */
export const previewContainer = (widthMap, device) => ({
    width: widthMap[device],
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const devicePairSx = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    animation: 'fadeInPreview 0.3s ease',

    '@keyframes fadeInPreview': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
};

export const deviceFrame = (aspectMap, radiusMap, device) => ({
    width: '100%',
    aspectRatio: aspectMap[device],
    borderRadius: radiusMap[device],

    border: '1px solid rgba(255, 255, 255, 0.15)',
    backgroundImage: 'linear-gradient(130deg, #000025 0%, #080038 50%, #000025 100%)',
    overflow: 'hidden',

    animation: 'fadeInPreview 0.3s ease',

    '@keyframes fadeInPreview': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
});

export const devicePairFrameSx = (aspectMap, radiusMap, device, side) => {
    const isMobile = device === 'mobile';

    const transforms = {
        left: isMobile
            ? 'translateX(-54%) translateY(-4%) rotate(-10deg)'
            : 'translateX(-28%) translateY(-8%) rotate(-10deg)',
        right: isMobile
            ? 'translateX(54%) translateY(4%) rotate(-10deg)'
            : 'translateX(28%) translateY(8%) rotate(-10deg)',
    };

    return {
        position: 'absolute',
        width: '100%',
        aspectRatio: aspectMap[device],
        borderRadius: radiusMap[device],

        border: '1px solid rgba(255, 255, 255, 0.15)',
        backgroundImage: 'linear-gradient(130deg, #000025 0%, #080038 50%, #000025 100%)',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',

        transform: transforms[side],
        zIndex: side === 'right' ? 1 : 2,
    };
};

export const imageSx = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    display: 'block',
};

export const laptopBase = {
    width: '108%',
    height: '8px',

    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '0 0 8px 8px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
};

/* Project Card */
export const projectCard = {
    width: '100%',
    height: '100%',

    backgroundColor: '#0f0f1a',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '20px',

    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    overflow: 'hidden',
    userSelect: 'none',
};

export const projectInfoPanel = {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1.5, sm: 2, md: 2.5 },
    p: { xs: 2.5, sm: 3, md: 3.5},
    width: { xs: '100%', sm: '46%', md: '38%' },

    backgroundColor: '#111120',
    borderRight: { md: '1px solid rgba(255, 255, 255, 0.08)' },
    borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.08)', sm: 'none' },
};

export const projectTitle = {
    fontSize: { xs: '1.3rem', sm: '1.45rem', md: '1.7rem' },
    fontWeight: 700,
    letterSpacing: 0.5,
    color: 'rgba(255, 255, 255, 0.92)',
    lineHeight: 1.2,
};

export const projectDescription = {
    fontSize: '0.82rem',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 1.7,
    // Check this properties
    display: { xs: '-webkit-box', sm: 'block' },
    WebkitLineClamp: { xs: 3, sm: 'unset' },
    WebkitBoxOrient: 'vertical',
    overflow: { xs: 'hidden', sm: 'visible' },
};

export const deviceSelector = {
    display: 'flex',
    flexDirection: { xs: 'row', sm: 'column' },
    gap: 0.6,
};

export const deviceToggleButton = (active) => ({
    display: 'flex',
    alignItems: 'center',
    flex: { xs: 1, sm: 'unset' },
    gap: { xs: 0.6, sm: 1.2 },
    px: { xs: 0.8, sm: 1.5, md: 1.8 },
    py: 0.8,

    borderRadius: '8px',
    border: `1px solid ${active
        ? '#a78bfa'
        : 'rgba(255, 255, 255, 0.1)'}`,
    backgroundColor: active
        ? 'rgba(167, 139, 250, 0.15)'
        : 'transparent',
    color: active
        ? '#e0d4ff'
        : 'rgba(255, 255, 255, 0.35)',

    fontSize: { xs: '0.65rem', sm: '0.68rem', md: '0.72rem' },
    fontWeight: active ? 600 : 400,
    letterSpacing: '0.05rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        borderColor: '#a78bfa',
        color: '#e0d4ff',
        backgroundColor: 'rgba(167, 139, 250, 0.1)',
    },
});

export const actionButtonsContainer = {
    display: 'flex',
    gap: 1.5,
};

export const actionButton = (style) => ({
    flex: 1, // Share available width equally
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.8,
    py: 0.9,
    borderRadius: '8px',
    textDecoration: 'none',

    border: style
        ? '1px solid rgba(190, 130, 250, 0.6)'
        : '1px solid rgba(255, 255, 255, 0.6)',
    color: style
        ? '#c4b5fd'
        : 'rgba(255, 255, 255, 0.75)',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.04rem',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
    '&:hover': style ? {
        backgroundColor: 'rgba(167, 139, 250, 0.15)',
        borderColor: '#a78bfa',
        color: '#e0d4ff',
    } : {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        color: 'rgba(255, 255, 255, 1)',
    },
    '&:active': {
        transform: 'scale(0.96)'
    },
});

export const techTagsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.7,
    mt: 'auto',
};

export const techTag = {
    px: 1,
    py: 0.4,
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: 'rgb(255, 255, 255, 0.65)',
    fontSize: '0.75rem',
    letterSpacing: '0.02rem',
};

export const previewPanel = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    p: { xs: 2, sm: 2.5, md: 4 },
    minHeight: { xs: '180px', sm: 0 },
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
};

/* Projects Section */
export const projectsCarousel = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
};

export const projectsTrack = {
    position: 'relative',
    width: '100%',

    height: { xs: '34rem', sm: '32rem', md: '32rem' },
    overflow: 'hidden',
};

export const projectsTrackInner = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',

    width: { xs: 'calc(100% - 2rem)', sm: 'calc(100% - 3rem)', md: '54rem' },
    height: '100%',
    overflow: 'visible',
};

export const projectCardWrapper = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    willChange: 'transform, opacity', // Prevents paint jank on the xPercent/scale transitions
};

export const carouselNavigation = {
    display: 'flex',
    gap: { xs: 2, md: 3 },
};

export const carouselNavigationButton = {
    width: { xs: '3.2rem', md: '2.8rem' },
    height: { xs: '3.2rem', md: '2.8rem' },
    borderRadius: '50%',

    border: '1px solid rgba(255, 255, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'all 0.2s ease',
    '&:hover': {
        borderColor: '#a78bfa',
        color: '#e0d4ff',
        backgroundColor: 'rgba(167, 139, 250, 0.15)',
    },
    '&:active': {
        transform: 'scale(0.90)',
    },
};

export const carouselIndicators = {
    display: 'flex',
    gap: 0.8,
    mt: -0.5,
};

export const carouselIndicator = (current, next) => ({
    width: current === next ? 24 : 8,
    height: 5,
    borderRadius: '3px',

    backgroundColor: current === next
        ? '#a78bfa'
        : 'rgba(255, 255, 255, 0.25)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
});