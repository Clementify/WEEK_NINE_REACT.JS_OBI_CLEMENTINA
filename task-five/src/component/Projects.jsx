// Render an array of objects
// Create a new file called "Projects.jsx" and define a functional component.
// Inside the component, create an array of 6 objects that contain projectName, technologies, description, demoLink and GithubLink.
// Use array.map() to loop through the array of Objects and render each project as a card.





// Projects.jsx

import React from 'react';

const projects = [
  {
    projectName: 'Project 1',
    technologies: ['HTML', 'CSS'],
    description: 'Description for Project 1',
    demoLink: 'https://example.com/demo1',
    githubLink: 'https://clementify.github.io/LESS0N3_TASK5_OBI_CLEMENTINA/',
  },
  {
    projectName: 'Project 2',
    technologies: ['HTML', 'CSS'],
    description: 'Description for Project 2',
    demoLink: 'https://example.com/demo2',
    githubLink: 'https://clementify.github.io/LESSON3_FINAL_TASK_OBI_CLEMENTINA/',
  },
  {
    projectName: 'Project 3',
    technologies: ['HTML', 'css'],
    description: 'Description for Project 3',
    demoLink: 'https://example.com/demo3',
    githubLink: 'https://clementify.github.io/Chat-App/',
  },
  {
    projectName: 'Project 4',
    technologies: ['React', 'Ruby on Rails'],
    description: 'Description for Project 4',
    demoLink: 'https://example.com/demo4',
    githubLink: ' https://clementify.github.io/covid-19_Tracker_App/',
  },
  {
    projectName: 'Project 5',
    technologies: ['HTML', 'CSS'],
    description: 'Description for Project 5',
    demoLink: 'https://example.com/demo5',
    githubLink: 'https://clementify.github.io/PORTFOLIO_WEBSITE_OBI_CLEMENTINA/',
  },
  {
    projectName: 'Project 6',
    technologies: ['HTML', 'CSS'],
    description: 'Description for Project 6',
    demoLink: 'https://example.com/demo6',
    githubLink: 'https://clementify.github.io/LESSON1_AND_2_TASK6_OBI_CLEMENTINA/',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.projectName}</h2>
          <p>Technologies: {project.technologies.join(', ')}</p>
          <p>{project.description}</p>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
