import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create React root and render JSX to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render JSX to DOM using ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
