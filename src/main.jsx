import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ConProvider } from './context/ConProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ConProvider>
        <App />
        <Toaster />
      </ConProvider>
    </HelmetProvider>
  </StrictMode>
);
