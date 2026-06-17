export const authLayoutSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    minHeight: '100dvh',
    background: 'linear-gradient(210deg, rgba(72, 75, 139) 15%, rgb(60, 35, 97) 30%, rgb(48, 24, 74) 40%, rgb(38, 18, 60) 60%, rgb(32, 15, 52) 80%, rgb(30, 8, 42) 100% )',

    // Padding for phones, tablets, and laptops
    p: {
        xs: 2,
        sm: 3,
        md: 4
    },
}

export const authModalSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    // Responsive width - adapts to screen size
    width: {
        xs: '95%',      // Mobile: almost full width
        sm: '80%',      // Tablet portrait: 80%
        md: '60%',      // Tablet landscape: 60%
    },
    
    maxWidth: 480, // Never grow bigger than this
    
    // Responsive padding
    py: { xs: 4, sm: 5 },
    px: { xs: 3, sm: 5 },
    
    borderRadius: { xs: 2 },
    gap: { xs: 2 },

    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    
    // Prevent overflow on very small screens
    overflow: 'hidden',
}

export const authTitleSx = {
    color: 'white',
    fontWeight: 700,
    letterSpacing: { xs: 2, sm: 3 },
    fontSize: { xs: '2.25rem', sm: '2.5rem' },
    textAlign: 'center',
    
    textShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
}

const authAlertBaseSx = {
    width: '100%',
    borderRadius: 2,
    py: 0.5,
    px: 2.5,
    fontSize: { xs: '0.89rem', sm: '0.98rem' },
    fontWeight: 500,
    alignItems: 'center',

    '& .MuiAlert-icon': {
        fontSize: '1.25rem',
        mr: 1,
    },
};

export const authAlertErrorSx = {
    ...authAlertBaseSx,
 
    backgroundColor: 'rgba(160, 40, 40, 0.2)',
    border: '1px solid rgba(255, 60, 60, 0.6)',

    '& .MuiAlert-icon': {
        ...authAlertBaseSx['& .MuiAlert-icon'],
        color: 'rgb(255, 60, 60)',
    },
    '& .MuiAlert-message': {
        ...authAlertBaseSx['& .MuiAlert-message'],
        color: 'rgb(255, 60, 60)',
    },
};

export const authAlertSuccessSx = {
    ...authAlertBaseSx,
 
    backgroundColor: 'rgba(100, 220, 130, 0.2)',
    border: '1px solid rgba(0, 255, 42, 0.6)',
 
    '& .MuiAlert-icon': {
        ...authAlertBaseSx['& .MuiAlert-icon'],
        color: 'rgb(80, 250, 110)',
    },
    '& .MuiAlert-message': {
        ...authAlertBaseSx['& .MuiAlert-message'],
        color: 'rgb(80, 250, 110)',
    },
};

export const authUsernameAndEmailSx = {
    width: '100%',

    '& .MuiOutlinedInput-root': {
        borderRadius: 1,

        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.6)',
            transition: 'border-color 0.3s ease',
        },
        '&:hover fieldset': {
            borderColor: 'rgb(255, 255, 255)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(255, 255, 255)',
        },
    },

    '& .MuiInputBase-input': {
        color: 'rgb(255, 255, 255)',
        fontSize: { xs: '1rem' },
        padding: { xs: '0.9rem', sm: '1rem' },
    },

    '& .MuiInputLabel-root': {
        color: 'rgb(255, 255, 255)',
        fontSize: { xs: '0.9rem', sm: '1rem' },
    },

    '& .MuiInputLabel-root.Mui-focused': {
        color: 'rgb(255, 255, 255)',
    },

    '& .MuiInputAdornment-root': {
        color: 'rgb(255, 255, 255)',
    },

    '& .MuiOutlinedInput-root.Mui-error .MuiInputAdornment-root': {
        color: 'rgb(255, 60, 60)',
    },
}

export const authPasswordFormControlSx = {
    width: '100%',

    '& .MuiInputLabel-root': {
        color: 'rgb(255, 255, 255)',
        fontSize: { xs: '0.9rem', sm: '1rem' },
    },

    '& .MuiInputLabel-root.Mui-focused': {
        color: 'rgb(255, 255, 255)',
    },

    '& .MuiInputLabel-root.Mui-error': {
        color: 'rgb(255, 60, 60)',
    },
}

export const authPasswordSx = {
    borderRadius: 1,

    '& .MuiInputBase-input': {
        color: 'rgb(255, 255, 255)',
        fontSize: { xs: '1rem' },
        padding: { xs: '0.9rem', sm: '1rem' },
    },

    '& .MuiIconButton-root': {
        color: 'rgb(255, 255, 255)',
        padding: { xs: 0 },
    },

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
        transition: 'border-color 0.3s ease',
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(255, 255, 255)',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(255, 255, 255)',
    },

    '&.Mui-error .MuiIconButton-root': {
        color: 'rgb(255, 60, 60)',
    },
}

export const authButtonSx = {
    width: '100%',
    borderRadius: { xs: 2 },
    
    // Responsive button size
    p: { xs: '0.6rem' },
    fontSize: '1rem',
    fontWeight: 600,

    color: 'rgba(0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255)',
    border: 'none',

    transition: 'transform 0.3s ease',

    '&:hover': {
        transform: 'scale(1.01)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },

    '&:active': {
        transform: 'scale(0.99)',
    },
}

export const authLinkSx = {
    display: 'inline-block',
    color: 'rgb(255, 255, 255)',
    fontWeight: 700,
    fontSize: { xs: '1rem', sm: '1.04rem' },
    textDecoration: 'none',

    transition: 'transform 0.3s ease, text-shadow 0.3s ease',

    '&:hover': {
        textShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
        transform: 'scale(1.06)',
    },
}

export const authLoadingLayoutSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',

    inset: 0,
    zIndex: 1200,

    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    pointerEvents: 'all',
}

export const authLoadingBarSx = {
    position: 'absolute',
    width: '100%',
    height: { xs: '0.3rem', sm: '0.35rem' },
    top: 0,
    left: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.2)',

    '.MuiLinearProgress-bar': {
        backgroundColor: '#a78bfa',
    },
}