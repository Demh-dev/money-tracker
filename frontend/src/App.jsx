import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Home from './pages/home/Home.jsx';
import MoneyTracker from './pages/money-tracker/MoneyTracker.jsx';

import useLenis from '@/hooks/useLenis';

import ProtectedRoute from './routes/ProtectedRoute.jsx';
import PublicLayout from './routes/PublicLayout.jsx';

import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from '@/context/useAuth.js';

export default function App() {

  useLenis();

  const { status } = useAuth();

  return (
    <Routes>

      <Route
        path="/"
        element={
          status === 'checking'
            ? null
            : <Navigate to={status === 'authed' ? '/home' : '/login'} replace />
        }
      />

      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/money-tracker"
          element={<MoneyTracker />}
        />
      </Route>

    </Routes>
  );
};