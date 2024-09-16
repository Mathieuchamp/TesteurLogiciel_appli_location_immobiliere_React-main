import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <NavLink to="/">
                    <img src={require("../../assets/images/LOGO.png")} alt='Logo' className='logo'/>
                </NavLink>
            </div>
            <div className='lien'>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    to="/about"
                >
                    À Propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;