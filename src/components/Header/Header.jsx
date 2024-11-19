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

  const getTranslateY = (title) => {
    if (title === "About") return "-translate-y-60";
    if (title.length <= 6) return "-translate-y-10"; // Short titles move up
    if (title.length <= 8) return "-translate-y-20"; // Medium titles move slightly up
    return "translate-y-4"; // Long titles stay centered
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
              className={`font-voyage font-400 text-custom transform -rotate-90 whitespace-nowrap ${getTranslateY(
                project.title
              )}`}
            >
              {project.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
