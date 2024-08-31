import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LogementFiche from './pages/LogementFiche.jsx';
import Error from './pages/Error.jsx';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} errorElement={<Error />} />
                <Route path="/LogementFiche" element={<LogementFiche />} errorElement={<Error />} />
                <Route path="/About" element={<About />} errorElement={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)