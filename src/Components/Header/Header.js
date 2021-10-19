import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="bg-dark">
            <div className="container d-flex align-items-center">
                <div className="logo-container">
                <h1 className="logo text-white text-start text-uppercase">Heart<span className="logo-part-two">care</span></h1>
                </div>
                <div className="menu">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/departments'>Departments</NavLink>
                    <NavLink to='/login'>Register/Login</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;