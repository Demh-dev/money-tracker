import ScrollToTop from './utils/ScrollToTop.jsx';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';

import { AuthProvider } from '@/context/AuthProvider.jsx';

import theme from './theme/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline/>
      <GlobalStyles styles={{
        'html, body': {
          overflowX: 'hidden',
        }
      }} />
      <ScrollToTop/>

      <AuthProvider>
        <App />
      </AuthProvider>

    </BrowserRouter>
  </ThemeProvider>
);