import React from 'react';
import './AboutMe.css'; 
import yourPhoto from '../../assets/yourPhoto.jpg';

const AboutMe = () => {
    return (
        <div className="about-me"> 
            <img src={yourPhoto} alt="Julian Photo" className="about-me-photo" /> 
            <h2>About Me</h2>
            <p>Hello! I am a brand spanking new web developer. As a business owner for 10+ years my focus is squarely on making website that look good and work even good...er.</p>
            {/* Add more here */}
        </div>
    );
};

export default AboutMe;

// add photo//