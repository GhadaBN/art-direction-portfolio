import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios
      .get("/src/assets/projectsData.json")
      .then((response) => {
        const filteredProjects = response.data.filter(
          (project) => project.title !== "About"
        );
        const aboutProject = response.data.find(
          (project) => project.title === "About"
        );
        setProjects(filteredProjects);
        setAbout(aboutProject);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const getPositionStyles = (title) => {
    if (title === "About") return { marginBottom: "20rem" };
    if (title === "Gorillas eoy") return { marginBottom: "7rem" };
    if (title === "Tinder") return { marginBottom: "10rem" };
    if (title === "Bundesliga") return { marginBottom: "-9rem" };
    return {};
  };

  return (
    <div className="header absolute bottom-0 h-[80vh] w-full px-6 pb-4">
      <div
        className="h-full w-full grid"
        style={{
          gridTemplateColumns: `repeat(${
            projects.length + (about ? 1 : 0) || 1
          }, minmax(0, 1fr))`,
        }}
      >
        {projects.map((project, index) => (
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

        {about && (
          <div
            key="about"
            className="relative flex items-center justify-center h-full"
          >
            {/* Ensure about section has consistent borders */}
            <div
              className={`absolute bottom-0 left-0 w-full border-black h-0 origin-bottom animate-growBorder ${
                projects.length === 0 ? "border-l border-r" : "border-r"
              }`}
            ></div>

            <Link
              to="/about"
              className="font-voyage font-400 text-customLg transform -rotate-90 whitespace-nowrap opacity-0 animate-fadeInFromLeft"
              style={getPositionStyles(about.title)}
            >
              <div className="flex items-start">
                <span>{about.title}</span>
                {about.number && (
                  <span
                    className="text-customSm ml-2 align-text-top"
                    style={{ verticalAlign: "top", marginTop: "2rem" }}
                  >
                    {about.number}
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
