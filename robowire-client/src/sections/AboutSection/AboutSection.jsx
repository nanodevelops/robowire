import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section id="about" className="about-page">
      <h1 className="intro">
        Hi, I am <span>robowire</span>
      </h1>
      <p className="jobrole">
        a <span>MERN</span>stack developer
      </p>
    </section>
  );
};

export default AboutSection;
