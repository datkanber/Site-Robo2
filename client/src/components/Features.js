import React from 'react';
import { FaChartBar, FaCloud, FaCode, FaRobot, FaMicrochip, FaDatabase, FaNetworkWired, FaLaptopCode, FaCogs, FaTools, FaLaptopHouse, FaBook } from 'react-icons/fa';
import './Features.css'; // Import the custom CSS file

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon"><FaChartBar /></div>
            <h3 className="feature-title">Data Science</h3>
            <p className="feature-description">Expertise in analyzing and interpreting complex data. Utilizing machine learning and statistical methods to derive insights and make data-driven decisions.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCloud /></div>
            <h3 className="feature-title">IoT</h3>
            <p className="feature-description">Developing innovative IoT solutions that connect devices and systems to create smart environments and improve efficiency.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCode /></div>
            <h3 className="feature-title">Software Development</h3>
            <p className="feature-description">Creating robust and scalable software applications tailored to meet business needs and drive growth.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaRobot /></div>
            <h3 className="feature-title">Robotics</h3>
            <p className="feature-description">Building intelligent robotic systems that automate tasks, improve productivity, and enhance precision.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaMicrochip /></div>
            <h3 className="feature-title">Embedded Systems</h3>
            <p className="feature-description">Designing and developing embedded systems for a wide range of applications, from consumer electronics to industrial automation.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaDatabase /></div>
            <h3 className="feature-title">Data Management</h3>
            <p className="feature-description">Implementing robust data management solutions to ensure data integrity, availability, and security.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaNetworkWired /></div>
            <h3 className="feature-title">Networking</h3>
            <p className="feature-description">Expertise in designing and managing complex network infrastructures to ensure seamless communication and connectivity.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaLaptopCode /></div>
            <h3 className="feature-title">Web Development</h3>
            <p className="feature-description">Creating dynamic and responsive websites using the latest web technologies to provide an exceptional user experience.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCogs /></div>
            <h3 className="feature-title">Automation</h3>
            <p className="feature-description">Implementing automation solutions to streamline operations, reduce costs, and increase efficiency.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaTools /></div>
            <h3 className="feature-title">SAP Support</h3>
            <p className="feature-description">Providing comprehensive SAP support, including system configuration, troubleshooting, and optimization to ensure smooth operations.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaLaptopHouse /></div>
            <h3 className="feature-title">SAP ABAP Development</h3>
            <p className="feature-description">Specializing in ABAP development to customize and enhance SAP systems, delivering tailored solutions to meet unique business requirements.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaBook /></div>
            <h3 className="feature-title">SAP Training</h3>
            <p className="feature-description">Offering comprehensive training programs for SAP users and administrators to maximize system utilization and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
