export const homeLayoutSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    minHeight: '100svh',

    // Prevent horizontal scrolling on mobile
    overflow: 'hidden',
}

export const heroImgSx = (heroVisible) => ({
    width: '100%',
    height: '120%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -1,
    top: { xs: '0%', md: '0%' },

    minWidth: '100vh',

    left: { xs: '-50%', sm: '5%', md: '10%' },
    transform: { xs: 'rotate(10deg)', md: 'rotate(10deg) scale(1.2)' },

    opacity: heroVisible ? 0 : 1,
    transition: 'opacity 1s ease',
})

export const heroGradientOverlaySx = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',

    background: {
        xs: `linear-gradient(to right,
            #000000 0%,
            rgba(0, 0, 0, 0.6) 10%,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.7) 90%,
            #000000 100%
        )`,

        md: `linear-gradient(to right,
            #000000 0%,
            #000000 10%,
            rgba(0, 0, 0, 0.4) 20%,
            rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0.4) 80%,
            #000000 100%
        )`,
    }
}

export const homeContentSx = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    background: `linear-gradient(to bottom,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 70%
        )
    `,

    width: '100%',
    minHeight: '100svh',

    // Responsive padding - less on mobile, more on desktop
    pt: { xs: '6rem', md: '28rem' },
    px: { xs: 4, sm: 6 }, // This prevents content from touching edges on small screens
}

export const homeTitleGroupSx = (heroVisible) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2.8, md: 3.8 },
    
    // Prevent text overflow on small screens
    maxWidth: { xs: '90%', md: '50%' }, // On desktop only takes left half
    alignSelf: { xs: 'flex-start' }, // Left on desktop

    opacity: heroVisible ? 0 : 1,
    transform: heroVisible ? 'translateY(80%)' : 'translateY(0)',
    transition: 'opacity 1s ease, transform 0.8s ease',
})

export const homeTitleSx = {
    fontWeight: 700,
    letterSpacing: { xs: 2.5, md: 3 },
    fontSize: { xs: '3.8rem', md: '4.8rem' },

    background: `linear-gradient(100deg, #888888 0%, #ffffff 40%, #ffe4c4 65%, #ff9966 85%, #ffb899 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',

    userSelect: 'none',
    pointerEvents: 'auto',
}

export const homeTitleWrapperSx = {
    filter: `
        drop-shadow(0 0 35px rgb(255, 120, 60, 0.6))
        drop-shadow(0 0 80px rgb(120, 40, 180, 0.35))
    `,
}

export const homePhraseSx = {
    fontStyle: 'italic',
    fontSize: { xs: '1.1rem', md: '1.2rem' },

    color: '#a5a5a5',
    textShadow: '0 0 6px #8d8d8d',
    pointerEvents: 'none',
    userSelect: 'none',
}

export const arrowUpSx = {
    position: 'absolute',
    top: '9rem',
    left: '85rem',
    fontSize: '4rem',
    cursor: 'pointer',
    animation: 'bounce 1.5s infinite',

    '@keyframes bounce': {
        '0%, 100%': {
            transform: 'translateY(0)',
        },
        '50%': {
            transform: 'translateY(-10px)',
        },
    },
}

export const wipePanelSx = {
    position: 'fixed',
    bottom: 0, // Starts just below the viewport
    width: '110%', // Extra width to cover skew gaps on the sides
    height: '100vh',
    backgroundColor: 'rgb(0, 0, 0)',
    zIndex: 2,
    transform: 'skewY(0deg) translateY(100%)', // Starts fully off screen below
    pointerEvents: 'none',
}

export const navbarSx = (visible, mounted) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    px: { xs: 2, md: 4 },
    py: { xs: 1, md: 1.4 },

    opacity: (visible && mounted) ? 1 : 0,
    transform: mounted ? (visible ? 'translateY(0)' : 'translateY(-100%)') : 'translateY(-100%)',
    transition: 'opacity 1s ease, transform 0.8s ease',
})

export const navLeftSx = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
}

export const navRightSx = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
}

export const navUsernameSx = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 600,
    fontSize: { xs: '1rem', md: '1rem' },
    letterSpacing: 1,
    userSelect: 'none',
}

export const navLogoutButtonSx = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: { xs: '0.8rem', md: '0.88rem' },
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '4px',
    px: { xs: 1.6, md: 2 },
    py: 0.6,

    transition: 'border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',

    '&:hover': {
        color: '#c084fc',
        borderColor: 'rgba(192, 132, 252)',
        boxShadow: '0 0 6px rgba(192, 132, 252, 0.8)',
        backgroundColor: 'transparent',
    },

    '&:active': {
        transform: 'scale(0.97)',
    },
}

export const starSectionSx = {
    position: 'relative',
    backgroundColor: '#000000',
    zIndex: 3,
}

export const projectsImgSx = {
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    marginTop: '-100vh', // Overlaps the canvas exactly
    zIndex: 0,
    opacity: 0,
    display: 'block',
    pointerEvents: 'none',
}

export const projectsContainer = {
    position: 'sticky',
    top: 0,
    height: '100vh',
    marginTop: '-100vh',
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
}

export const projectsRevealSx = {
    width: '100%',
    opacity: 0,
    transform: 'translateY(30px)',
}