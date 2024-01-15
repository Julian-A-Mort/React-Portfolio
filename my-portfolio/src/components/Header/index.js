import React from 'react';
import Navigation from '../Navigation/index';
import { NavLink } from 'react-router-dom';
import './styles.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="brand-name">
                <h1>Your Name</h1>
            </div>
            <Navigation />  {}
        </header>
    );
};

export default Header;
