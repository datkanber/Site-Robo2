import React, { useState } from 'react';
import './Hero.css';

const projects = [
  {
    name: "Project 1: POS Application with React JSX",
    video: `${process.env.PUBLIC_URL}/iposs.mp4`,
    description: "This project demonstrates a POS system built with React JSX. It includes features such as user authentication, transaction management, and reporting."
  },
  {
    name: "Project 2: AI and IoT Solutions",
    video: `${process.env.PUBLIC_URL}/video2.mp4`,
    description: "This project showcases AI and IoT solutions for smart home automation. It integrates various sensors and devices to create a seamless user experience."
  }
  // Add more projects as needed
];

const Hero = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section
      id="home"
      className="hero-section h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.gif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="overlay">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Data Science</h1>
        <p className="text-xl mb-4 animate-slide-up">Data Science, IoT, SAP & Software Development Specialist</p>
        <p className="text-xl mb-6 animate-slide-up">Passionate about leveraging technology to solve real-world problems</p>
        
        <div className="projects-container mb-8 animate-fade-in">
          <div className="projects-list">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-btn ${selectedProject.name === project.name ? 'active' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </button>
            ))}
          </div>
          <div className="video-container">
            <video controls className="w-full h-auto">
              <source src={selectedProject.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="project-description text-white mt-4">{selectedProject.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
