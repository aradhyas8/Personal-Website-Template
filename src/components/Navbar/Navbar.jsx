import React, { useRef } from "react";
import "./navbar.scss";

const Navbar = () => {
  const sections = {
    homePage: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleClick = (section) => {
    sections[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="nav-container">
      <ul class="nav justify-content-end navi-list">
        <li class="nav-item">
          <a
            class="nav-link active navi-top"
            aria-current="page"
            href="#home-page"
            onClick={() => handleClick("homePage")}
          >
            <span class="digit">01.</span> <span class="text">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link navi-top"
            href="#about"
            onClick={() => handleClick("about")}
          >
            <span class="digit">02.</span> <span class="text">About</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link navi-top"
            href="#experience"
            onClick={() => handleClick("experience")}
          >
            <span class="digit">03.</span> <span class="text">Experience</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link navi-top"
            href="#projects"
            onClick={() => handleClick("projects")}
            tabindex="-1"
            aria-disabled="true"
          >
            <span class="digit">04.</span> <span class="text">Projects</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link navi-top"
            href="#contact"
            onClick={() => handleClick("contact")}
            tabindex="-1"
            aria-disabled="true"
          >
            <span class="digit">05.</span> <span class="text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
