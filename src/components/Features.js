import React from 'react';
import { FaChartBar, FaCloud, FaCode, FaRobot, FaMicrochip, FaDatabase, FaNetworkWired, FaLaptopCode, FaCogs, FaTools, FaLaptopHouse, FaBook } from 'react-icons/fa';
import './Features.css'; // Custom CSS file for additional styles

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-700">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaChartBar /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Data Science</h3>
            <p>Expertise in analyzing and interpreting complex data. Utilizing machine learning and statistical methods to derive insights and make data-driven decisions.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaCloud /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">IoT</h3>
            <p>Developing innovative IoT solutions that connect devices and systems to create smart environments and improve efficiency.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaCode /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Software Development</h3>
            <p>Creating robust and scalable software applications tailored to meet business needs and drive growth.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaRobot /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Robotics</h3>
            <p>Building intelligent robotic systems that automate tasks, improve productivity, and enhance precision.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaMicrochip /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Embedded Systems</h3>
            <p>Designing and developing embedded systems for a wide range of applications, from consumer electronics to industrial automation.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaDatabase /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Data Management</h3>
            <p>Implementing robust data management solutions to ensure data integrity, availability, and security.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaNetworkWired /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Networking</h3>
            <p>Expertise in designing and managing complex network infrastructures to ensure seamless communication and connectivity.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaLaptopCode /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Web Development</h3>
            <p>Creating dynamic and responsive websites using the latest web technologies to provide an exceptional user experience.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaCogs /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Automation</h3>
            <p>Implementing automation solutions to streamline operations, reduce costs, and increase efficiency.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaTools /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">SAP Support</h3>
            <p>Providing comprehensive SAP support, including system configuration, troubleshooting, and optimization to ensure smooth operations.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaLaptopHouse /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">SAP ABAP Development</h3>
            <p>Specializing in ABAP development to customize and enhance SAP systems, delivering tailored solutions to meet unique business requirements.</p>
          </div>
          <div className="feature-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-4 text-blue-600"><FaBook /></div>
            <h3 className="text-2xl font-bold mb-2 text-gray-700">SAP Training</h3>
            <p>Offering comprehensive training programs for SAP users and administrators to maximize system utilization and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
