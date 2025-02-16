import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header text-center text-white">
        <div className="overlay d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-uppercase mb-3 fade-in">Welcome 👋</h2>
          <h1 className="display-3 fw-bold slide-in">I am Mahadevan</h1>
          <p className="text-uppercase lead zoom-in">Full Stack Developer</p>
          <a href="/about" className="btn btn-light btn-lg d-flex align-items-center gap-2 mt-3 bounce">
            <FaChevronDown /> More About Me
          </a>
          <div className="social-icons mt-4">
            <a href="https://github.com/Mahadevan2002" target="_blank" rel="noopener noreferrer" className="text-white fs-3 mx-2 hover-effect">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/maha-devan-195799280/" target="_blank" rel="noopener noreferrer" className="text-white fs-3 mx-2 hover-effect">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/deva_offxl_" target="_blank" rel="noopener noreferrer" className="text-white fs-3 mx-2 hover-effect">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-3 mx-2 hover-effect">
              <FaFacebook />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Portfolio;
