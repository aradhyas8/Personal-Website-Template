import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import DummyDoc from "../../assets/DummyDoc.txt"
import "./header.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    new Typewriter(headingRef.current, {
      loop: false,
      cursor: "|",
    })
      .pauseFor(300)
      .typeString("hi, I am ")
      .typeString('<span style="color: #64ffda;">John Doe.</span>')
      .start();
  }, []);

  return (
    <section id="home-page">
      <div className="parent landing-par ">
        <div className="container landing-page">
          <div className="header-page">
            <div className="row header-title" data-aos="fade-up">
              <h1 ref={headingRef} />
            </div>
            <div className="row header-two" data-aos="fade-up">
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className="row landing-description" data-aos="fade-up">
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut{" "}
                <a className="work-link" href="https://www.thescore.com/">
                  Company1
                </a>{" "}
                Lorem ipsum dolor{" "}
                <a className="work-link" href="https://fibra.com/">
                  Company2
                </a>
                , Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
              </p>
            </div>
            <div className="resume-btn" data-aos="fade-up">
              <button class="btn btn-outline-primary btn-lg resume-tag" data-aos="fade-up">
                <a href={DummyDoc}>Lorem</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
