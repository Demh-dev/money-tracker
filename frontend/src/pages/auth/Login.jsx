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
} from "@mui/material";

import {
    AccountCircle
} from "@mui/icons-material";

import {
    authLayoutSx,
    authModalSx,
    authTitleSx,
    authAlertSuccessSx,
    authAlertErrorSx,
    authUsernameAndEmailSx,
    authButtonSx,
    authLinkSx,
    authLoadingLayoutSx,
    authLoadingBarSx
} from './Auth.styles.js';

import useLogin from '@/hooks/useLogin.js';

import { PasswordField } from './components/PasswordField.jsx';

export default function Login() {

    const {
        // form state
        loginForm,
        messages,
        serverMessages,
        isLoading,

        // field setters
        setUsername,
        setPassword,

        // password visibility
        showPassword,
        togglePassword,

        // form submission
        handleSubmitLogin
    } = useLogin();

    return (
        <Box sx={authLayoutSx}>

            <Box component="form" onSubmit={handleSubmitLogin} sx={authModalSx}>
                <Typography
                    sx={authTitleSx}
                    variant="h4"
                >
                    Login
                </Typography>

                {serverMessages.success && (
                    <Alert
                        variant="filled"
                        severity="success"
                        sx={authAlertSuccessSx}
                    >
                        {serverMessages.success}
                    </Alert>
                )}

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
                    value={loginForm.username}
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

                <PasswordField
                    error={messages.password}
                    label='Password'
                    value={loginForm.password}
                    onChange={e => setPassword(e.target.value)}
                    togglePassword={togglePassword}
                    showPassword={showPassword}
                    helperText={messages.password}
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={authButtonSx}
                >
                    Login
                </Button>

                <Typography>
                    Don&apos;t have an account?{" "}
                    <MuiLink
                        component={RouterLink}
                        to="/register"
                        sx={authLinkSx}
                    >
                        Register
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