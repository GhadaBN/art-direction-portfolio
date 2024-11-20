import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/src/assets/projectsData.json")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);
  const getPositionStyles = (title) => {
    if (title === "About") return { marginBottom: "24rem" };
    if (title === "Gorillas eoy") return { marginBottom: "7rem" };
    if (title === "Tinder") return { marginBottom: "10rem" };
    if (title === "Bundesliga") return { marginBottom: "-9rem" };
    return {};
  };

  return (
    <div className="header absolute bottom-0 h-[84vh] w-full overflow-hidden px-6 pb-4">
      <div
        className="h-full w-full grid"
        style={{
          gridTemplateColumns: `repeat(${
            projects.length || 1
          }, minmax(0, 1fr))`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-r border-black first:border-l flex items-center justify-center h-full"
          >
            <Link
              to={`/projects/${project.id}`}
              className={`font-voyage font-400 text-customLg transform -rotate-90 whitespace-nowrap`}
              style={getPositionStyles(project.title)}
            >
              <div className="flex items-start">
                <span>{project.title}</span>

                {project.number && (
                  <span
                    className="text-customSm ml-4 align-text-top"
                    style={{ verticalAlign: "top", marginTop: "2rem" }}
                  >
                    {project.number}
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Header;
