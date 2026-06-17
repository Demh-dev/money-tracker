export const moneyTrackerContainerSx = {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#0a0a14',
};

// Header
export const moneyTrackerHeaderSx = {
    display: 'flex',
    flexDirection: 'column',

    px: { xs: 3, sm: 4 },
    pt: { xs: 3, sm: 3.4 },
    pb: { xs: 2.5, sm: 2.8 },

    backgroundColor: '#0f0f1e',
    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
};

export const moneyTrackerHeaderLabelSx = {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    mb: 0.8,
};

export const moneyTrackerAmountSx = {
    fontSize: { xs: '1.6rem', sm: '2.16rem' },
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.92)',
    letterSpacing: '-0.4px',
};

export const moneyTrackerBalanceGridSx = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: { xs: '8px', sm: '16px' },
    mt: { xs: 1.5, sm: 2 },
};

export const moneyTrackerBalanceCardSx = {
    backgroundColor: '#16162a',
    borderRadius: '10px',
    p: { xs: '10px 8px', sm: '12px 16px' },
    border: '1px solid rgba(255, 255, 255, 0.06)',
};

export const moneyTrackerBalanceCardLabelSx = {
    fontSize: '0.86rem',
    color: 'rgba(255, 255, 255, 0.35)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    mb: '4px',
};

export const moneyTrackerBalanceCardValueSx = (type) => ({
    fontSize: { xs: '0.85rem', sm: '1.2rem' },
    fontWeight: 600,
    color: type === 'income'
        ? '#4ade80'
        : type === 'expense'
            ? '#f87171'
            : '#a78bfa',
});

// Content area
export const moneyTrackerContentSx = {
    px: { xs: 2, sm: 3 },
    pt: { xs: 2, sm: 3.6 },
    pb: { xs: 10, sm: 6 },
};

// FAB
export const moneyTrackerAddFabSx = {
    position: 'fixed',

    bottom: { xs: 20, sm: 22, md: 28 },
    right: { xs: 20, sm: 22, md: 28 },

    width: { xs: 52, md: 66 },
    height: { xs: 52, md: 66 },

    backgroundColor: '#724ce6',
    color: '#fff',

    '&:hover': {
        backgroundColor: '#8953ff',
        transform: 'scale(1.04)',
    },

    transition: 'transform 0.2s ease, background-color 0.2s ease',
};

// Alert
export const moneyTrackerAlertSx = {
    position: 'fixed',
    zIndex: 1051,
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',

    width: { xs: '90%', sm: '55%', md: '40%' },
    maxWidth: '37.5rem',

    bottom: { xs: 80, sm: 20 },
    borderRadius: 2,
    border: 'none',

    '& .MuiAlert-icon': {
        color: 'white',
        fontSize: { xs: '1.4rem' },
    },
    '& .MuiAlert-message': {
        color: 'white',
        fontWeight: 700,
        fontSize: '1rem',
    },
};

// Loading
export const moneyTrackerLoadingLayoutSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',

    inset: 0,
    zIndex: 1200,

    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    pointerEvents: 'all',
};

export const moneyTrackerLoadingBarSx = {
    position: 'absolute',
    width: '100%',
    height: { xs: '0.3rem', sm: '0.35rem' },
    top: 0,
    left: 0,

    backgroundColor: 'rgba(167, 139, 250, 0.2)',

    '& .MuiLinearProgress-bar': {
        backgroundColor: '#a78bfa',
    },
};