import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ConProvider } from './context/ConProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConProvider>
      <App />
    </ConProvider>
  </StrictMode>
);
