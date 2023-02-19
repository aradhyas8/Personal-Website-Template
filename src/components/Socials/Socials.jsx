import React from "react";
import './socials.scss'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://linkedin.com/" data-aos="fade-left">
        <FiLinkedin />
      </a>
      <a href="https://github.com/" data-aos="fade-right">
        <FiGithub />
      </a>
      <a href="mailto:example@gmail.com" data-aos="fade-left">
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default Socials;
