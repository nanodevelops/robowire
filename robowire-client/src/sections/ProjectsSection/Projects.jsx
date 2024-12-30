import React from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Projects.scss";

const ProjectsSection = () => {
  const projects = [
    {
      link: "https://codepen.io/pluralnode/pen/rNpBqgP",
      imgSrc: "assets/images/Capture.PNG",
      title: "Tribute Page",
    },
    {
      link: "https://codepen.io/pluralnode/pen/GRyKLWw",
      imgSrc: "assets/images/Capture2.PNG",
      title: "Survey Form",
    },
    {
      link: "https://codepen.io/pluralnode/pen/qBpWwVp",
      imgSrc: "assets/images/Capture3.PNG",
      title: "Product Landing Page",
    },
    {
      link: "https://codepen.io/pluralnode/pen/ZEvYygN",
      imgSrc: "assets/images/Capture4.PNG",
      title: "Product Documentation Page",
    },
  ];

  return (
    <section id="projects" className="projects-page">
      <h2 className="projects-page-header">Check out some of my projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectTile key={index} {...project} />
        ))}
      </div>
      <a
        href="https://codepen.io/pluralnode/"
        className="btn btn-show-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        Show all <i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
};

export default ProjectsSection;
