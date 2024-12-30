import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>**This portfolio is powered by nano. All rights reserved.</p>
      <p>
        &copy; Created for{" "}
        <a
          href="https://www.github.com/nanodevelops"
          target="_blank"
          rel="noopener noreferrer"
        >
          ((( N 4 N 0 ))) <i className="fab fa-github"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
