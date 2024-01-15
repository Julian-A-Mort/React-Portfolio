import React from 'react';
import './Resume.css'; 

const Resume = () => {
    return (
        <div className="resume">
            <h2>My Resume</h2>
            <a href="path/to/your/resume.pdf" download>Download My Resume</a>
            <h3>Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML & CSS</li>
                <li>Node.js</li>
            </ul>

            <h3>Education</h3>
            <ul>
                <li>Diploma in Wine from the international Wine & Spirits Education Trust</li>
                <li>React</li>
            </ul>

            <h3>History</h3>
            <ul>
                <li>Owner and Founder of Where's Nick Wine Bar & Goblin Wine Shop</li>
            </ul>


            {/* anything else? */}
        </div>
    );
};

export default Resume;
