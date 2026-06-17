// Overlay
export const confirmDeletionModalOverlaySx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'fixed',
    inset: 0,
    zIndex: 1300,

    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: { xs: 'none', md: 'blur(2px)' },
};

// Dialog Box
export const confirmDeletionBoxSx = {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '#111122',
    borderRadius: '16px',
    border: '1px solid rgba(248, 113, 113, 0.14)',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.6)',
    overflow: 'hidden',

    width: '95%',
    maxWidth: '380px',
};

// Top section — icon + text
export const confirmDeletionTopSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1.5,

    px: 3,
    pt: 3,
    pb: 2.5,
};

export const confirmDeletionIconWrapSx = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',

    backgroundColor: 'rgba(248, 113, 113, 0.1)',
    border: '1px solid rgba(248, 113, 113, 0.2)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const confirmDeletionTitleSx = {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: 1.5,
};

export const confirmDeletionSubtitleSx = {
    fontSize: '0.78rem',
    color: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
};

// Footer — split buttons
export const confirmDeletionFooterSx = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
};

export const cancelButtonDeletionSx = {
    py: 1.6,
    borderRadius: 0,
    borderRight: '1px solid rgba(255, 255, 255, 0.06)',

    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '0.85rem',
    textTransform: 'none',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        color: 'rgba(255, 255, 255, 0.7)',
    },
};

export const confirmButtonDeletionSx = {
    py: 1.6,
    borderRadius: 0,

    color: '#f87171',
    fontSize: '0.85rem',
    fontWeight: 500,
    textTransform: 'none',

    '&:hover': {
        backgroundColor: 'rgba(248, 113, 113, 0.08)',
    },
};