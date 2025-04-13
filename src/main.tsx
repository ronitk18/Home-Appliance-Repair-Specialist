
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css';

// Console log for debugging
console.log('Application initialized successfully');

// Find root element
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

// Render with strict mode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals if available in production
if (import.meta.env.PROD) {
  console.log('Running in production mode');
}
