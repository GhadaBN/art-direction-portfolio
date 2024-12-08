import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../../assets/projectsData.json";

const Header = () => {
  const filteredProjects = Array.isArray(projectsData)
    ? projectsData.filter((project) => project.title !== "About")
    : [];
  const aboutProject = Array.isArray(projectsData)
    ? projectsData.find((project) => project.title === "About")
    : null;

  const getPositionStyles = (title) => {
    if (title === "About") return { marginBottom: "20rem" };
    if (title === "Gorillas eoy") return { marginBottom: "6rem" };
    if (title === "Tinder") return { marginBottom: "-14rem" };
    if (title === "Mini Cooper") return { marginBottom: "-6rem" };
    return {};
  };

  return (
    <div className="header absolute bottom-0 h-[80vh] w-full px-6 pb-4">
      <div
        className="h-full w-full grid"
        style={{
          gridTemplateColumns: `repeat(${
            filteredProjects.length + (aboutProject ? 1 : 0) || 1
          }, minmax(0, 1fr))`,
        }}
      >
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center h-full"
          >
            <div
              className={`absolute bottom-0 left-0 w-full border-black h-0 origin-bottom animate-growBorder ${
                index === 0 ? "border-l border-r" : "border-r"
              }`}
            ></div>

            <Link
              to={`/projects/${project.id}`}
              className="font-voyage font-400 text-customLg transform -rotate-90 whitespace-nowrap opacity-0 animate-fadeInFromLeft"
              style={getPositionStyles(project.title)}
            >
              <div className="flex items-start">
                <span>{project.title}</span>
                {project.number && (
                  <span
                    className="text-customSm ml-2 align-text-top"
                    style={{ verticalAlign: "top", marginTop: "2rem" }}
                  >
                    {project.number}
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}

        {aboutProject && (
          <div
            key="about"
            className="relative flex items-center justify-center h-full"
          >
            <div
              className={`absolute bottom-0 left-0 w-full border-black h-0 origin-bottom animate-growBorder ${
                filteredProjects.length === 0 ? "border-l border-r" : "border-r"
              }`}
            ></div>

            <Link
              to="/about"
              className="font-voyage font-400 text-customLg transform -rotate-90 whitespace-nowrap opacity-0 animate-fadeInFromLeft"
              style={getPositionStyles(aboutProject.title)}
            >
              <div className="flex items-start">
                <span>{aboutProject.title}</span>
                {aboutProject.number && (
                  <span
                    className="text-customSm ml-2 align-text-top"
                    style={{ verticalAlign: "top", marginTop: "2rem" }}
                  >
                    {aboutProject.number}
                  </span>
                )}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
