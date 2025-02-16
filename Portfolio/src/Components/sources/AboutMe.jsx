import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";
import profileImage from "../../assets/profile.png"; 

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section container py-5">
      <div className="row align-items-center">
        <div className="col-lg-5 text-center">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="profile-img img-fluid rounded-circle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="col-lg-7">
          <motion.h2
            className="section-title"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="about-text"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello! I’m Maha Devan, a passionate Full-Stack Developer with expertise in React.js, Java, Spring Boot, MySQL, and modern web technologies. I have a strong foundation in both frontend and backend development, enabling me to build scalable, efficient, and user-friendly applications.

I completed my B.Tech in Information Technology from Mookambikai College of Engineering, where I developed a keen interest in problem-solving, software architecture, and clean coding practices. My experience includes a Java Full-Stack Developer internship at Massmind, T. Nagar, Chennai, where I gained hands-on exposure to real-world applications and industry best practices.

I have worked on several personal and academic projects, including:

Hotel Booking Application – A complete booking system using React, Java, and MySQL.
Weather Application – A dynamic weather forecasting app using APIs.
To-Do Application – A productivity tool built with React.js.
Touchless Gaming – My UG project, integrating OpenCV hand tracking with Unity3D to create a touch-free gaming experience.
I am always eager to learn new technologies and keep up with the latest industry trends. My goal is to develop applications that enhance user experiences and solve real-world problems efficiently.

If you’re looking for a dedicated and skilled developer to collaborate on exciting projects, feel free to reach out to me! 🚀
          </motion.p>
          <motion.a
            href="/contact"
            className="btn btn-primary mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
