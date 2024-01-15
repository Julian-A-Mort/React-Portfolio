import React from 'react';
import './styles.css'; 

const Project = ({ title, image, description, liveLink, repoLink }) => {
    return (
        <div className="project">
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Project;
