import React from 'react';
import './AboutMe.css';
import yourPhoto from '../../assets/images/profilepic.jpeg';


const AboutMe = () => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <h2>About Me</h2>
            <img src={yourPhoto} alt="Julian" className="profile-photo" />
                <p>Hello! I am a brand-new web developer based in Sydney, Australia.</p>
                <p>I have recently completed the Sydney University coding and website design bootcamp and am keen to keep learning and further my development.</p>
                <p>I have strong grasp of the fundamentals in cluding Javascript, React etc. Blah.</p>
                <p>As a current business owner for 10+ years, my focus is squarely on making websites that look good and work even better.</p>
        </div>
    );
};

export default AboutMe;