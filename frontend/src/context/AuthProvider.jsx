/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext.jsx';
import { API_URL } from '@/constants/constants.js';

export const checkAuth = async () => {
    try {
        const response = await fetch(`${API_URL}/api/auth/Me`, {
            credentials: 'include',
        }); // Sending cookie back to the server

        if (!response.ok) return { isAuth: false, username: null }; // The HTTP status code is between 200 and 299

        const data = await response.json();

        return { isAuth: true, username: data.result };
    } catch {
        return { isAuth: false, username: null };
    }
};

export function AuthProvider({ children }) {
    const [status, setStatus] = useState('checking');
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkAuth().then(({ isAuth, username }) => {
            setStatus(isAuth ? 'authed' : 'guest');
            setUser(username);
        });
    }, []);
    // .then() means when this promise finishes, execute this code

    return (
        <AuthContext.Provider value={{ status, setStatus, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}