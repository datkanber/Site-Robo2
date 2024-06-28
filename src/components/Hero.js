import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center text-black"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(1.0)', // Hafifçe büyüterek daha iyi görünüm elde edebiliriz
      }}
    >
      <h1 className="text-6xl font-bold">Data Science</h1>
      <p className="text-2xl mt-4">Data Science, IoT, SAP & Software Development Specialist</p>
      <p className="text-xl mt-2">Passionate about leveraging technology to solve real-world problems</p>
      <div className="mt-6 space-x-4">
        <a href="#about" className="bg-blue-700 text-white py-2 px-4 rounded">Learn More</a>
        <a href="#projects" className="bg-blue-700 text-white py-2 px-4 rounded">My Projects</a>
      </div>
      <div className="mt-8 space-y-4">
        <p className="text-lg">
          <strong>Current Focus:</strong> Building smart solutions with AI and IoT
        </p>
        <p className="text-lg">
          <strong>Recent Project:</strong> Developing a robotic arm with advanced image processing capabilities
        </p>
        <p className="text-lg">
          <strong>Upcoming Event:</strong> Speaking at the Tech Innovators Conference 2024
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-lg">
          <strong>Contact Me:</strong>
        </p>
        <div className="mt-4 flex space-x-4">
          <a 
            href="mailto:burakkanber@gmail.com" 
            className="bg-blue-700 text-white py-2 px-4 rounded"
          >
            E-mail Me
          </a>
          <a 
            href="#contact" 
            className="bg-blue-700 text-white py-2 px-4 rounded"
          >
            Contact Form
          </a>
        </div>
      </div>
      
    </section>
  );
};


export default Hero;
