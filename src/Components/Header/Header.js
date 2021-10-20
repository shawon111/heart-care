import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, handleSignOut} = useAuth();
    return (
        <header className="bg-dark">
            <div className="container header-container d-flex align-items-center">
                <div className="logo-container">
                <h1 className="logo text-white text-start text-uppercase">Heart<span className="logo-part-two">care</span></h1>
                </div>
                <div className="menu">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/departments'>Departments</NavLink>
                    {
                        user?.email ? <NavLink onClick={handleSignOut} to='/login'>Logout</NavLink> : 
                        <NavLink to='/login'>Login</NavLink>    
                    }
                    {
                        user.email && <a href="#" className="red-text">{user.displayName}</a>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;