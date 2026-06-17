import { useState, useRef } from 'react';
import { API_URL, INITIAL_SERVER_MESSAGES } from '@/constants/constants.js';

export default function useApi() {

    const [serverMessages, setServerMessages] = useState(INITIAL_SERVER_MESSAGES);
    const [isLoading, setIsLoading] = useState(false);

    const timersRef = useRef([]);

    const showMessage = (type, message, duration = 4000) => {

        timersRef.current.forEach(timer => clearTimeout(timer));
        timersRef.current = [];

        setServerMessages(prev => ({
            ...prev,
            [type]: message
        }));

        const timer = setTimeout(() => {
            setServerMessages(prev => ({
                ...prev,
                [type]: null
            }));
        }, duration);

        timersRef.current.push(timer);

    };

    const makeRequest = async (endpoint, options = {}) => {

        setIsLoading(true);

        try {

            const response = await fetch(`${API_URL}${endpoint}`, {
                ...options,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {}),
                },
            });

            const data = await response.json();

            if (data.typeResult !== 0) {
                showMessage('error', data.message || 'Request failed');
                return { success: false, data: null };
            }

            return { success: true, message: data.message, data: data.result };

        } catch (error) {

            console.error('Request error:', error);

            showMessage('error', 'Network error. Please try again.');
            return { success: false, data: null };

        } finally {
            setIsLoading(false);
        }
    };

    return {
        serverMessages,
        isLoading,
        makeRequest,
        showMessage
    };
};