import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section 
      className="resume-section container py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title text-center mb-4">My Resume</h2>
      
      <div className="text-center">
        <motion.p
          className="resume-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Download my resume to learn more about my education, skills, and professional experience.
        </motion.p>

        <motion.a
          href="/assets/resume.pdf"
          download="Mahadevan-FullStackDeveloper.pdf"
          className="btn btn-primary btn-lg d-flex align-items-center gap-2 mx-auto resume-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>

      <div className="resume-content mt-5">
        <h3 className="text-uppercase text-center mb-3">Professional Summary</h3>
        <p>
          I am a passionate Full-Stack Developer with experience in building scalable web applications using React.js, 
          Java, Spring Boot, and MySQL. I focus on creating efficient, high-performance applications with clean architecture.
        </p>

        <h3 className="text-uppercase text-center mt-4 mb-3">Technical Skills</h3>
        <ul className="skills-list">
          <li>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap</li>
          <li>Backend: Java, Spring Boot, Servlet, JSP, Node.js</li>
          <li>Database: MySQL, Database Design</li>
          <li>Version Control: Git, GitHub</li>
          <li>Problem Solving, Debugging, Clean Code</li>
        </ul>

        <h3 className="text-uppercase text-center mt-4 mb-3">Experience & Education</h3>
        <div className="resume-details">
          <h5>Java Full-Stack Developer Internship</h5>
          <p>Massmind, T. Nagar, Chennai | Hands-on experience with full-stack development.</p>
          
          <h5>B.Tech in Information Technology</h5>
          <p>Mookambikai College of Engineering | Strong foundation in software development.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
