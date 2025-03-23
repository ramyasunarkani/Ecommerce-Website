import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap properly
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'; // This is optional, as components are imported individually

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>
);
