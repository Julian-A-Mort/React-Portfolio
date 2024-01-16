import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <h2>My Resume</h2>
            <a href="/assets/documents/temp_resume.docx" download="temp_resume.docx">Download My Resume</a>
    <h3>Skills</h3>
            <ul>
                <li className="resume-text">JavaScript</li>
                <li className="resume-text">React</li>
                <li className="resume-text">HTML & CSS</li>
                <li className="resume-text">Node.js</li>
            </ul>

            <h3>Education</h3>
            <ul>
                <li className="resume-text">Wine & Spirits Education Trust: Diploma (UK)</li>
                <li className="resume-text">Sydney University: Coding and Webdesign</li>
            </ul>

            <h3>History</h3>
            <ul>
                <li className="resume-text">Owner and Founder of Where's Nick Wine Bar & Goblin Wine Shop</li>
            </ul>
        </div>
    );
};

export default Resume;
