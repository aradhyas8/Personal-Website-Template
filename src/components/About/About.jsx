import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";

export const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section>
      <div className="container about" id="about">
        <div className="row">
          <div className="about-header" data-aos="fade-up">
            <h1>/About me</h1>
          </div>
        </div>
        <div className="row about-description" data-aos="fade-up">
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat{" "}
            <a className="work-link" href="https://www.thescore.com/">
              Company1
            </a>{" "}
            Lorem ipsum dolor sit amet{" "}
            <a className="work-link" href="https://fibra.io/">
              Company2
            </a>
            .Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy{" "}
            <a className="work-link" href="https://cshub.ca/">
              Company3
            </a>{" "}
            at{" "}
            <a className="work-link" href="https://www.yorku.ca/">
              Location
            </a>
            ,Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="row about-description" >
          <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetuer adipiscing elit:</p>
        </div>
        <ul className="skills">
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem 
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Lorem
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
