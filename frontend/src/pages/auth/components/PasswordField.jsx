import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormHelperText
} from '@mui/material';

import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';

import {
    authPasswordFormControlSx,
    authPasswordSx
} from '@/pages/auth/Auth.styles.js';

export const PasswordField = ({ error, label, value, onChange, togglePassword, showPassword, helperText }) => (
    <FormControl
        sx={authPasswordFormControlSx}
        error={!!error}
    >
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
            label={label}
            value={value}
            onChange={onChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={togglePassword}>
                    {showPassword ? <VisibilityOff/>
                    : <Visibility/>}
                    </IconButton>
                </InputAdornment>
            }
            sx={authPasswordSx}
        />
        <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
)