import React from "react";
import "./ProjectTile.scss";

const ProjectTile = ({ link, imgSrc, title }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project project-tile"
    >
      <img className="project-image" src={imgSrc} alt={title} />
      <p className="project-title">
        <span className="code">&lt;</span>
        {title}
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
  );
};

export default ProjectTile;
