import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import {
    Box,
    TextField,
    InputAdornment,
    Button,
    Typography,
    Alert,
    LinearProgress
} from '@mui/material';

import {
    AccountCircle
} from '@mui/icons-material';

import EmailIcon from '@mui/icons-material/Email';

import {
    authLayoutSx,
    authModalSx,
    authTitleSx,
    authAlertErrorSx,
    authUsernameAndEmailSx,
    authButtonSx,
    authLinkSx,
    authLoadingLayoutSx,
    authLoadingBarSx
} from './Auth.styles.js';

import useRegister from '@/hooks/useRegister.js';

import { PasswordField } from './components/PasswordField.jsx';

export default function Register() {

    const {
        // form state
        registerForm,
        messages,
        serverMessages,
        isLoading,

        // field setters
        setUsername,
        setEmail,
        setPassword,
        setConfirmPassword,

        // password visibility
        showPassword,
        togglePassword,

        // form submission
        handleSubmitRegister
    } = useRegister();

    return (
        <Box sx={authLayoutSx}>
            <Box component="form" onSubmit={handleSubmitRegister} sx={authModalSx}>
                <Typography
                    sx={authTitleSx}
                    variant="h4"
                >
                    Register
                </Typography>

                {serverMessages.error && (
                    <Alert
                        variant="filled"
                        severity="error"
                        sx={authAlertErrorSx}
                    >
                        {serverMessages.error}
                    </Alert>
                )}

                <TextField
                    label="Username"
                    value={registerForm.username}
                    onChange={e => setUsername(e.target.value)}
                    variant="outlined"
                    error={!!messages.username}
                    helperText={messages.username}
                    slotProps={{
                        input: {
                            endAdornment:
                            <InputAdornment position="end">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                    }}
                    sx={authUsernameAndEmailSx}
                />

                <TextField
                    label="Email"
                    value={registerForm.email}
                    onChange={e => setEmail(e.target.value)}
                    variant="outlined"
                    error={!!messages.email}
                    helperText={messages.email}
                    slotProps={{
                        input: {
                            endAdornment:
                            <InputAdornment position="end">
                                <EmailIcon/>
                            </InputAdornment>
                        },
                    }}
                    sx={authUsernameAndEmailSx}
                />

                <PasswordField
                    error={messages.password}
                    label='Password'
                    value={registerForm.password}
                    onChange={e => setPassword(e.target.value)}
                    togglePassword={togglePassword}
                    showPassword={showPassword}
                    helperText={messages.password}
                />

                <PasswordField
                    error={messages.confirmPassword}
                    label='Confirm Password'
                    value={registerForm.confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    togglePassword={togglePassword}
                    showPassword={showPassword}
                    helperText={messages.confirmPassword}
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={authButtonSx}
                >
                    Register
                </Button>

                <Typography>
                    Already have an account?{" "}
                    <MuiLink
                        component={RouterLink}
                        to="/login"
                        sx={authLinkSx}
                    >
                        Login
                    </MuiLink>
                </Typography>
            </Box>

            {isLoading && (
                <Box sx={authLoadingLayoutSx}>
                    <LinearProgress sx={authLoadingBarSx}/>
                </Box>
            )}

        </Box>
    );
}