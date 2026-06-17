import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        mode: 'dark',

        primary: {
            main: '#000000',
        },

        secondary: {
            main: '#000000',
        },

        background: {
            default: '#000000',
            paper: '#000000',
        },

        text: {
            primary: '#ffffff',
            secondary: '#94a3b8',
        },
    },

    typography: {
        fontFamily: [
            'Inter',
            'sans-serif'
        ].join(','),

        h1: {
            fontWeight: 700,
        },

        h2: {
            fontWeight: 700,
        },

        h3: {
            fontWeight: 700,
        },

        h4: {
            fontWeight: 700,
        },

        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 14,
    },

    spacing: 8,

    components: {

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    padding: '10px 18px',
                    fontWeight: 600,
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});

export default theme;