import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'; 

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink exact to="/" activeClassName="active-link">About Me</NavLink>
            <NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
            <NavLink to="/resume" activeClassName="active-link">Resume</NavLink>
        </nav>
    );
};

export default Navigation;
