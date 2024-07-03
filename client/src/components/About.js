import React from 'react';
import { FaChartBar, FaCloud, FaCode, FaCogs, FaBrain, FaProjectDiagram, FaServer, FaNetworkWired, FaPython, FaRobot, FaChartPie, FaDatabase, FaHome, FaChartLine, FaTools, FaCodeBranch, FaBook } from 'react-icons/fa';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-subtitle1">About Me</h2>
        <p className="about-description">
          Hello, I'm Burak Kanber. I have a robust background in data science, IoT, SAP, and software development. My passion is solving complex problems with innovative solutions. With years of experience, I have honed my skills in delivering high-quality projects that drive business success.
        </p>
        <p className="about-description">
          My journey in technology started with a curiosity for how things work, leading me to explore and excel in various fields. I thrive on creating impactful solutions that address real-world challenges, leveraging my expertise in data analysis, machine learning, and software engineering.
        </p>
        <h3 className="section-subtitle">Skills & Expertise</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <FaChartBar className="skill-icon" />
            <h4 className="skill-title">Data Analysis & Interpretation</h4>
          </div>
          <div className="skill-item">
            <FaCloud className="skill-icon" />
            <h4 className="skill-title">IoT Solutions Development</h4>
          </div>
          <div className="skill-item">
            <FaCode className="skill-icon" />
            <h4 className="skill-title">Software Engineering</h4>
          </div>
          <div className="skill-item">
            <FaCogs className="skill-icon" />
            <h4 className="skill-title">SAP Integration</h4>
          </div>
          <div className="skill-item">
            <FaBrain className="skill-icon" />
            <h4 className="skill-title">Machine Learning & AI</h4>
          </div>
          <div className="skill-item">
            <FaProjectDiagram className="skill-icon" />
            <h4 className="skill-title">Project Management</h4>
          </div>
          <div className="skill-item">
            <FaServer className="skill-icon" />
            <h4 className="skill-title">Cloud Computing & DevOps</h4>
          </div>
          <div className="skill-item">
            <FaNetworkWired className="skill-icon" />
            <h4 className="skill-title">Algorithm Design & Optimization</h4>
          </div>
          <div className="skill-item">
            <FaPython className="skill-icon" />
            <h4 className="skill-title">TensorFlow & OpenCV</h4>
          </div>
          <div className="skill-item">
            <FaRobot className="skill-icon" />
            <h4 className="skill-title">Robotic Process Automation (RPA)</h4>
          </div>
          <div className="skill-item">
            <FaChartPie className="skill-icon" />
            <h4 className="skill-title">Advanced Data Visualization</h4>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" />
            <h4 className="skill-title">Big Data Technologies</h4>
          </div>
        </div>
        <h3 className="section-subtitle">Recent Projects</h3>
        <div className="projects-grid">
          <div className="project-item">
            <h4 className="project-title"><FaHome className="project-icon" /> IoT Smart Home System</h4>
            <p className="project-description">
              Developed a comprehensive IoT solution for smart home automation, integrating various sensors and devices to provide a seamless user experience. This project included the use of Raspberry Pi for controlling home appliances and security systems.
            </p>
          </div>
          <div className="project-item">
            <h4 className="project-title"><FaChartLine className="project-icon" /> Data Analytics Platform</h4>
            <p className="project-description">
              Led the development of a data analytics platform that helps businesses make data-driven decisions through real-time insights and predictive analytics. Utilized tools like Python, Pandas, and Power BI for data visualization and analysis.
            </p>
          </div>
          <div className="project-item">
            <h4 className="project-title"><FaRobot className="project-icon" /> AI-Based Captcha Solver</h4>
            <p className="project-description">
              Created an AI-based solution for solving complex captcha challenges, improving automation processes for various applications. Leveraged TensorFlow and deep learning techniques for high accuracy.
            </p>
          </div>
          <div className="project-item">
            <h4 className="project-title"><FaTools className="project-icon" /> Robotic Arm Control System</h4>
            <p className="project-description">
              Designed and implemented a control system for a robotic arm using Python and TensorFlow, enabling advanced image processing and object manipulation tasks. This included integration with a camera for visual recognition tasks.
            </p>
          </div>
          <div className="project-item">
            <h4 className="project-title"><FaCodeBranch className="project-icon" /> SAP Add-On Development Kit</h4>
            <p className="project-description">
              Developed an SAP Add-on Development Kit using JavaScript and Python, providing tools and libraries for creating custom SAP applications. This kit addresses common problems on SAP platforms with ready-to-use code snippets and development examples.
            </p>
          </div>
          <div className="project-item">
            <h4 className="project-title"><FaChartLine className="project-icon" /> Machine Learning Model for Predictive Maintenance</h4>
            <p className="project-description">
              Implemented a machine learning model for predictive maintenance in industrial settings. Used algorithms like Random Forest and SVM to predict equipment failures and reduce downtime, leading to significant cost savings.
            </p>
          </div>
        </div>
        <h3 className="section-subtitle">Publications & Contributions</h3>
        <div className="contributions-grid">
          <div className="contribution-item">
            <h4 className="contribution-title"><FaBook className="contribution-icon" /> Research on Machine Learning Algorithms</h4>
            <p className="contribution-description">
              Published several research papers on the application of machine learning algorithms such as Random Forest, SVM, and Neural Networks in solving real-world problems.
            </p>
          </div>
          <div className="contribution-item">
            <h4 className="contribution-title"><FaCodeBranch className="contribution-icon" /> Open Source Contributions</h4>
            <p className="contribution-description">
              Actively contribute to open-source projects in the fields of data science and IoT, helping to build tools and libraries that empower developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
