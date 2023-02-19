import React from "react";
import "./contact.scss";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="parent contact-father">
        <div className="container contact">
          <div className="contact-header">
            <h1 data-aos="fade-up">/Contact</h1>
          </div>
          <div className="contact-description">
            <div className="row">
              <div className="title">
                <h2 data-aos="fade-up">Lorem ipsum</h2>
              </div>
            </div>
            <div className="row">
              <div className="get-touch">
                <p data-aos="fade-up">Lorem ipsum</p>
              </div>
            </div>
            <div className="row">
              <div className="statement">
                <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="hello-button">
                <a href="mailto:aradhya@my.yorku.ca">
                  <button
                    className="btn btn-outline-primary"
                    data-aos="fade-up"
                  >
                    Lorem ipsum.
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
