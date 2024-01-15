import React from 'react';
import Project from '../../components/Project/index';
import './Portfolio.css';

// Example data for your projects
const projectsData = [
    {
        title: "Project 1",
        //image: "path/to/image1.jpg", // Replace with actual image path
        description: "Brief description of Project 1.",
        liveLink: "http://live-link-to-project1.com",
        repoLink: "http://github-link-to-project1.com"
    },
    {
        title: "Project 2",
        //image: "path/to/image2.jpg", // Replace with actual image path
        description: "Brief description of Project 2.",
        liveLink: "http://live-link-to-project2.com",
        repoLink: "http://github-link-to-project2.com"
    },
    // Add more projects as needed
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        liveLink={project.liveLink}
                        repoLink={project.repoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
