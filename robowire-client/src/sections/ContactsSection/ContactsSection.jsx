import React from "react";
import "./ContactsSection.scss";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-page-header">
        <h2>Let's work together...</h2>
        <p>Buy me a drink?</p>
      </div>
      <div className="contact-links">
        <a
          href="https://github.com/pluralnode"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://twitter.com/robowire"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="mailto:dachel.akyerefi@amalitech.com"
          className="btn contact-details"
        >
          <i className="fas fa-envelope"></i> Send me a mail
        </a>
        <a href="tel:+233-54-3820-885" className="btn contact-details">
          <i className="fas fa-mobile-alt"></i> Call me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
