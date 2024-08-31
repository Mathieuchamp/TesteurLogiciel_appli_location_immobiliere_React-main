import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <NavLink to="/home">
                    <img src={require("../../assets/images/LOGO.png")} alt='Logo' className='logo'/>
                </NavLink>
            </div>
            <div className='lien'>
                <NavLink className="nav-link" to="/home" activeClassName="active">
                    Accueil
                </NavLink>
                <NavLink className="nav-link" to="/about" activeClassName="active">
                    À Propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;