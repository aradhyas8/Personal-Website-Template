import React from "react";
import "./experiencemob.scss";
import download from "../../assets/download.png"
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceMob = () => {
  return (
    <section id="experience">
      <div className="container exp-mob">
        <div className="exp-header">
          <h1 data-aos="fade-up">/Experience</h1>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Company1
                <img className="exp-logo-white" src={download}></img>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div className="role-title" data-aos="fade-up">
                  <p>
                  Chief Happiness Officer @{" "}
                    <a href="https://google.com/">Company1</a>
                  </p>
                </div>
                <div className="role-time" data-aos="fade-up">
                  <p> January 1, 2000.-Present</p>
                </div>
                <div className="role-description">
                  <ul>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-right">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Company2
                <img src={download}></img>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
              <div className="role-title" data-aos="fade-up">
                  <p>
                  Chief Happiness Officer @{" "}
                    <a href="https://google.com/">Company2</a>
                  </p>
                </div>
                <div className="role-time">
                  <p> January 1, 2000.-Present</p>
                </div>
                <div className="role-description">
                  <ul>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Company3
                <img className="exp-logo-white" src={download}></img>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <div className="role-title">
                  <p>
                  Chief Happiness Officer @{" "}
                    <a href="https://google.com/">
                    Company3
                    </a>
                  </p>
                </div>
                <div className="role-time">
                  <p> January 1, 2000.-Present</p>
                </div>
                <div className="role-description">
                  <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item" data-aos="fade-right">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Company4
                <img src={download}></img>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                <div className="role-title">
                  <p>
                  Chief Happiness Officer @{" "}
                    <a href="https://google.com/">Company4</a>
                  </p>
                </div>
                <div className="role-time">
                  <p> January 1, 2000.-Present</p>
                </div>
                <div className="role-description">
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  </p>
                  <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Company5
                <img src={download}></img>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                <div className="role-title">
                  <p>
                  Chief Happiness Officer @{" "}
                    <a href="https://google.com/">
                      Company5
                    </a>
                  </p>
                </div>
                <div className="role-time">
                  <p> January 1, 2000.-Present</p>
                </div>
                <div className="role-description">
                  <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMob;
