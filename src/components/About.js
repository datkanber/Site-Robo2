import React from 'react';
import { FaChartBar, FaCloud, FaCode, FaCogs, FaBrain, FaProjectDiagram, FaServer, FaNetworkWired, FaPython, FaRobot, FaChartPie, FaDatabase, FaLightbulb, FaHome, FaChartLine, FaTools, FaCodeBranch, FaBook } from 'react-icons/fa';
import './About.css'; // Custom CSS file for additional styles

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
        <img src="profile.jpg" alt="Burak Kanber" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg" />
        <p className="text-lg text-gray-700 mb-6 mx-auto max-w-3xl">
          Hello, I'm Burak Kanber. I have a robust background in data science, IoT, SAP, and software development. My passion is solving complex problems with innovative solutions. With years of experience, I have honed my skills in delivering high-quality projects that drive business success.
        </p>
        <p className="text-lg text-gray-700 mb-6 mx-auto max-w-3xl">
          My journey in technology started with a curiosity for how things work, leading me to explore and excel in various fields. I thrive on creating impactful solutions that address real-world challenges, leveraging my expertise in data analysis, machine learning, and software engineering.
        </p>
        <h3 className="text-2xl font-bold mt-10 text-blue-500">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaChartBar className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Data Analysis & Interpretation</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaCloud className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">IoT Solutions Development</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaCode className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Software Engineering</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaCogs className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">SAP Integration</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaBrain className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Machine Learning & AI</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaProjectDiagram className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Project Management</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaServer className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Cloud Computing & DevOps</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaNetworkWired className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Algorithm Design & Optimization</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaPython className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">TensorFlow & OpenCV</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaRobot className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Robotic Process Automation (RPA)</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaChartPie className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Advanced Data Visualization</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaDatabase className="text-4xl text-blue-600 mb-2" />
            <h4 className="text-xl font-bold text-gray-700">Big Data Technologies</h4>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-10 text-blue-500">Inspirational Quotes</h3>
        <p className="text-lg text-gray-700 mt-4 mx-auto max-w-3xl">
          <FaLightbulb className="inline-block mr-2" /> "The best way to predict the future is to invent it." - Alan Kay
        </p>
        <p className="text-lg text-gray-700 mt-4 mx-auto max-w-3xl">
          <FaLightbulb className="inline-block mr-2" /> "Innovation distinguishes between a leader and a follower." - Steve Jobs
        </p>
        <h3 className="text-2xl font-bold mt-10 text-blue-500">Recent Projects</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaHome className="inline-block mr-2" /> IoT Smart Home System</h4>
            <p className="text-md text-gray-700">
              Developed a comprehensive IoT solution for smart home automation, integrating various sensors and devices to provide a seamless user experience. This project included the use of Raspberry Pi for controlling home appliances and security systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaChartLine className="inline-block mr-2" /> Data Analytics Platform</h4>
            <p className="text-md text-gray-700">
              Led the development of a data analytics platform that helps businesses make data-driven decisions through real-time insights and predictive analytics. Utilized tools like Python, Pandas, and Power BI for data visualization and analysis.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaRobot className="inline-block mr-2" /> AI-Based Captcha Solver</h4>
            <p className="text-md text-gray-700">
              Created an AI-based solution for solving complex captcha challenges, improving automation processes for various applications. Leveraged TensorFlow and deep learning techniques for high accuracy.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaTools className="inline-block mr-2" /> Robotic Arm Control System</h4>
            <p className="text-md text-gray-700">
              Designed and implemented a control system for a robotic arm using Python and TensorFlow, enabling advanced image processing and object manipulation tasks. This included integration with a camera for visual recognition tasks.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaCodeBranch className="inline-block mr-2" /> SAP Add-On Development Kit</h4>
            <p className="text-md text-gray-700">
              Developed an SAP Add-on Development Kit using JavaScript and Python, providing tools and libraries for creating custom SAP applications. This kit addresses common problems on SAP platforms with ready-to-use code snippets and development examples.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaChartLine className="inline-block mr-2" /> Machine Learning Model for Predictive Maintenance</h4>
            <p className="text-md text-gray-700">
              Implemented a machine learning model for predictive maintenance in industrial settings. Used algorithms like Random Forest and SVM to predict equipment failures and reduce downtime, leading to significant cost savings.
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-10 text-blue-500">Publications & Contributions</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaBook className="inline-block mr-2" /> Research on Machine Learning Algorithms</h4>
            <p className="text-md text-gray-700">
              Published several research papers on the application of machine learning algorithms such as Random Forest, SVM, and Neural Networks in solving real-world problems.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700 mb-2"><FaCodeBranch className="inline-block mr-2" /> Open Source Contributions</h4>
            <p className="text-md text-gray-700">
              Actively contribute to open-source projects in the fields of data science and IoT, helping to build tools and libraries that empower developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
