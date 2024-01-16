import React from 'react';
import Navigation from '../Navigation/index';
import './styles.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="brand-name">
                <h1>Julian!</h1>
            </div>
            <Navigation />  {}
        </header>
    );
};

export default Header;
