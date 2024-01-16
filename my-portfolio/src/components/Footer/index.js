import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './styles.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p>Connect with me:</p>
            <a href="https://github.com/Julian-A-Mort" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
            </a>
            <a href="https://au.linkedin.com/in/julian-abouzeid-9366b533" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
            </a>
        </footer>
    );
};

export default Footer;
