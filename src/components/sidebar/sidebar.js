import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sidebar">
      <a
        href="https://www.linkedin.com/in/aung-khant-thet-naing-82303077"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/aktn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <Link to={process.env.PUBLIC_URL + "projects"}>Projects</Link>
    </div>
  );
};

export default sidebar;
