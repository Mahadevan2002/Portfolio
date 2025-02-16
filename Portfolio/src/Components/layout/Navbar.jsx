import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="brand-highlight">Mahadevan</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FaHome className="nav-icon" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <FaUser className="nav-icon" /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                <FaCode className="nav-icon" /> Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                <FaProjectDiagram className="nav-icon" /> Projects
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link btn btn-outline-light px-3" to="/resume">
                <FaFileAlt className="nav-icon" /> Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-primary px-4 ms-2" to="/contact">
                <FaEnvelope className="nav-icon" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
