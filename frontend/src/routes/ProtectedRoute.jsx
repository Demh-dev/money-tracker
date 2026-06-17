import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/context/useAuth.js';

export default function ProtectedRoute() {
    const { status } = useAuth();

    if (status === 'checking') return null;
    if (status === 'guest') return <Navigate to="/login" replace/> // What replace does is replace the current page in the browser history, meaning if the user goes back or forward, it will be redirected only to /login.

    return <Outlet/> // Render the protected file
}