/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { sanitizeUsername, sanitizePassword } from '@/helpers/sanitizeInput.js';
import { usernameRules, passwordRules } from '@/helpers/InputRules.js';
import useApi from '@/utils/useApi.js';
import useAuth from '@/context/useAuth.js';

// constants
const INITIAL_LOGIN_FORM = {
    username: '',
    password: ''
}
const INITIAL_MESSAGES = {
    username: null,
    password: null
}

export default function useLogin() {

    // router hooks
    const navigate = useNavigate();
    const location = useLocation();
    const { setStatus, setUser } = useAuth();

    // external hooks
    const { serverMessages, isLoading, makeRequest, showMessage } = useApi();

    // state
    const [loginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);

    // password visibility
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);

    // effects
    useEffect(() => {
        if (location.state?.message) {

            showMessage(
                'success',
                location.state.message,
                3000
            );

            navigate('/login', {
                replace: true,
                state: {}
            });
        }
    }, [location.state, navigate]);

    // field setters
    const setUsername = (username) => {
        setLoginForm(prev => ({
            ...prev,
            username: sanitizeUsername(username)
        }));
    }
    const setPassword = (password) => {
        setLoginForm(prev => ({
            ...prev,
            password: sanitizePassword(password)
        }));
    }

    // validations
    const usernameValidation = (value) => {
        const error = usernameRules(value);
        setMessages(prev => ({ ...prev, username: error }));
        return !error;
    }
    const passwordValidation = (value) => {
        const error = passwordRules(value, 'Password');
        setMessages(prev => ({ ...prev, password: error }));
        return !error;
    }
    const loginValidation = () => {
        const isUsernameValid = usernameValidation(loginForm.username);
        const isPasswordValid = passwordValidation(loginForm.password);

        return isUsernameValid && isPasswordValid;
    }

    // form reset
    const resetForm = () => {
        setLoginForm(INITIAL_LOGIN_FORM);
        setMessages(INITIAL_MESSAGES);
    }

    // form submission
    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        if (!loginValidation()) return;

        const result = await makeRequest('/api/auth/Login', {
            method: 'POST',
            body: JSON.stringify({
                username: loginForm.username,
                password: loginForm.password
            })
        });

        if (!result.success) return;

        setStatus('authed');
        setUser(result.data.user.username);

        resetForm();
        navigate('/home');
    };

    return {
        // state
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
    };
}