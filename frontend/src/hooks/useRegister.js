import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { sanitizeUsername, sanitizeEmail, sanitizePassword } from '@/helpers/sanitizeInput.js';
import { usernameRules, emailRules, passwordRules } from '@/helpers/InputRules.js';
import useApi from '@/utils/useApi.js';

// constants
const INITIAL_REGISTER_FORM = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const INITIAL_MESSAGES = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null
}

export default function useRegister() {

    // router hooks
    const navigate = useNavigate();

    // external hooks
    const { serverMessages, isLoading, makeRequest } = useApi();

    // state
    const [registerForm, setRegisterForm] = useState(INITIAL_REGISTER_FORM);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);

    // password visibility
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);

    // field setters
    const setUsername = (username) => {
        setRegisterForm(prev => ({
            ...prev,
            username: sanitizeUsername(username)
        }));
    }
    const setEmail = (email) => {
        setRegisterForm(prev => ({
            ...prev,
            email: sanitizeEmail(email)
        }));
    }
    const setPassword = (password) => {
        setRegisterForm(prev => ({
            ...prev,
            password: sanitizePassword(password)
        }));
    }
    const setConfirmPassword = (confirmPassword) => {
        setRegisterForm(prev => ({
            ...prev,
            confirmPassword: sanitizePassword(confirmPassword)
        }));
    }

    // validations
    const usernameValidation = (value) => {
        const error = usernameRules(value);
        setMessages(prev => ({ ...prev, username: error }));
        return !error;
    }
    const emailValidation = (value) => {
        const error = emailRules(value);
        setMessages(prev => ({ ...prev, email: error }));
        return !error;
    }
    const passwordValidation = (value) => {
        const error = passwordRules(value, 'Password');
        setMessages(prev => ({ ...prev, password: error }));
        return !error;
    }
    const confirmPasswordValidation = (value) => {
        const error = passwordRules(value, 'Confirm Password') || (value !== registerForm.password ? 'Passwords must match' : null);
        setMessages(prev => ({ ...prev, confirmPassword: error }));
        return !error;
    }
    const registerValidation = () => {
        const isUsernameValid = usernameValidation(registerForm.username);
        const isEmailValid = emailValidation(registerForm.email);
        const isPasswordValid = passwordValidation(registerForm.password);
        const isConfirmPasswordValid = confirmPasswordValidation(registerForm.confirmPassword);

        return isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    }

    // form reset
    const clearForm = () => {
        setRegisterForm(INITIAL_REGISTER_FORM);
        setMessages(INITIAL_MESSAGES);
    }

    // form submission
    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        if (!registerValidation()) return;

        const result = await makeRequest('/api/auth/RegisterUser', {
            method: 'POST',
            body: JSON.stringify({
                username: registerForm.username,
                email: registerForm.email,
                password: registerForm.password
            })
        });

        if (!result.success) return;

        clearForm();
        navigate('/login', {
            state: { message: result.message }
        });
    }

    return {
        // state
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
    };
}