import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '@/constants/constants.js';
import { Box, Avatar, Button, Typography } from '@mui/material';
import { navbarSx, navLeftSx, navRightSx, navUsernameSx, navLogoutButtonSx } from '../Home.styles.js';
import useAuth from '@/context/useAuth.js';

export default function Navbar() {

    const navigate = useNavigate();
    const { setStatus, setUser, user } = useAuth();

    const [visible, setVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            setVisible(false);

            clearTimeout(timeout); // Clears the previous timer to prevent multiple scroll events from stacking up

            timeout = setTimeout(() => {
                setVisible(true);
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll, { passive: true }); // With passive: true, browser thinks scrolling is safe, keep scrolling immediately.

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await fetch(`${API_URL}/api/auth/Logout`, {
                method: 'POST',
                credentials: 'include',
            });
        } catch (error) {
            console.error('Logout Failed:', error);
        }

        setStatus('guest');
        setUser(null);
        navigate('/login');
    }

    return (
        <Box component="nav" sx={navbarSx(visible, mounted)}>

            <Box sx={navLeftSx}>
                <Avatar/>
                <Typography sx={navUsernameSx}>
                    {user}
                </Typography>
            </Box>

            {/* Right — logout */}
            <Box sx={navRightSx}>
                <Button onClick={handleLogout} sx={navLogoutButtonSx}>
                    Log out
                </Button>
            </Box>

        </Box>
    );
}