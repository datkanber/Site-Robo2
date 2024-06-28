import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "IoT Smart Home System",
      description: "Developed a comprehensive IoT solution for smart home automation, integrating various sensors and devices to provide a seamless user experience. This project included the use of Raspberry Pi for controlling home appliances and security systems.",
      image: "https://www.researchgate.net/publication/342538259/figure/fig1/AS:907931247734784@1593479086400/A-Smart-Home-System-using-Internet-of-Things-IOT.jpg",
      link: "project_iot_smart_home.html"
    },
    {
      title: "Data Analytics Platform",
      description: "Led the development of a data analytics platform that helps businesses make data-driven decisions through real-time insights and predictive analytics. Utilized tools like Python, Pandas, and Power BI for data visualization and analysis.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerstwKANaMvCFGtZnuDG5olS_qiz__aqZEA&s",
      link: "project_data_analytics.html"
    },
    {
      title: "AI-Based Captcha Solver",
      description: "Created an AI-based solution for solving complex captcha challenges, improving automation processes for various applications. Leveraged TensorFlow and deep learning techniques for high accuracy.",
      image: "https://wp-assets.futurism.com/2023/03/openai-gpt-4-fooled-human-solving-captcha.jpg",
      link: "project_ai_captcha.html"
    },
    {
      title: "Robotic Arm Control System",
      description: "Designed and implemented a control system for a robotic arm using Python and TensorFlow, enabling advanced image processing and object manipulation tasks. This included integration with a camera for visual recognition tasks.",
      image: "https://m.media-amazon.com/images/I/71hpzUEnkDL._AC_UF894,1000_QL80_.jpg",
      link: "project_robotic_arm.html"
    },
    {
      title: "SAP Add-On Development Kit",
      description: "Developed an SAP Add-on Development Kit using JavaScript and Python, providing tools and libraries for creating custom SAP applications. This kit addresses common problems on SAP platforms with ready-to-use code snippets and development examples.",
      image: "https://community.sap.com/legacyfs/online/storage/blog_attachments/2016/03/ssdc_entry_screen_913519.png",
      link: "project_sap_addon.html"
    },
    {
      title: "Machine Learning Model for Predictive Maintenance",
      description: "Implemented a machine learning model for predictive maintenance in industrial settings. Used algorithms like Random Forest and SVM to predict equipment failures and reduce downtime, leading to significant cost savings.",
      image: "https://miro.medium.com/v2/resize:fit:739/1*VpW8EC-QLtp7TVtmdQinrg.jpeg",
      link: "project_predictive_maintenance.html"
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundImage: 'linear-gradient(120deg, #0084f0a1, #d9e2ec, #548cc4)' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a href={project.link} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
