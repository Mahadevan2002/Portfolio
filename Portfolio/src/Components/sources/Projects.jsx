import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Resort Booking Application",
    description: "A full-stack hotel booking application using React, Java, MySQL, and Spring Boot.",
    image: "E:\Mahadevan-FullstackDeveloper\Portfolio\src\assets\Deva_ressort frontened.png",
    github: "https://github.com/yourgithub/hotel-booking",
    demo: "#",
  },
  {
    title: "Weather Application",
    description: "A weather forecast app using HTML, CSS, JavaScript, and APIs.",
    image: "https://source.unsplash.com/featured/?weather,forecast",
    github: "https://github.com/yourgithub/weather-app",
    demo: "#",
  },
  {
    title: "To-Do Application",
    description: "It is a simple task management app built with React.js.",
    image: "https://source.unsplash.com/featured/?todo,task",
    github: "https://github.com/yourgithub/todo-app",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section container py-5">
      <h2 className="section-title text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="project-card shadow-lg">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details p-4">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                {/* <div className="d-flex justify-content-between align-items-center"> */}
                  <a href="https://github.com/Mahadevan2002?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                    <FaGithub /> GitHub
                  </a>
                  {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <FaExternalLinkAlt /> Demo
                  </a> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
