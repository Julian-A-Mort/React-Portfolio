import React from 'react';
import Project from '../../components/Project/index';
import './Portfolio.css';
import textEditorImage from '../../assets/images/texteditor.jpeg';
import movieQuestImage from '../../assets/images/moviequest.jpg';

const projectsData = [
    {
        title: "PWA Text Editor",
        image: textEditorImage,
        liveLink: "https://pwa-text-editor-5nlh.onrender.com/",
        repoLink: "https://github.com/Julian-A-Mort/PWA-Text-Editor"
    },
    {
        title: "Movie Quest",
        image: movieQuestImage,
        liveLink: "https://ajayshans.github.io/moviequest/",
        repoLink: "https://github.com/ajayshans/moviequest"
    },
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
