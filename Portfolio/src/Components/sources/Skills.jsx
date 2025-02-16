import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaNodeJs, FaCode, FaLeaf, FaServer, FaClipboardList, FaCogs } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
  { name: "React.js", icon: <FaReact className="skill-icon react" /> },
  { name: "Java", icon: <FaJava className="skill-icon java" /> },
  { name: "MySQL", icon: <FaDatabase className="skill-icon mysql" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
  { name: "Spring", icon: <FaLeaf className="skill-icon spring" /> },
  { name: "Spring Boot", icon: <FaServer className="skill-icon springboot" /> },
  { name: "JSP", icon: <FaClipboardList className="skill-icon jsp" /> },
  { name: "Servlet", icon: <FaCogs className="skill-icon servlet" /> },
  { name: "Applet", icon: <FaCode className="skill-icon applet" /> },
];

const Skills = () => {
  return (
    <section className="skills-section container text-center">
      <h2 className="section-title">My Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="skill-card">
              {skill.icon}
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
