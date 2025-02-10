import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; //importation de bootstrap
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //le point d'entrée React
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);