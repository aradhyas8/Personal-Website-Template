import React from "react";
import "./projects.scss";
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  return (
    <section>
      <div className="container card-container" id="projects">
        <div className="proj-header">
          <h1 data-aos="fade-up">/Projects</h1>
        </div>
        <div class="card-deck">
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/r">
                  <FiGithub />
                </a>
                <a
                  href="https://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
                <a
                  href="https://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
