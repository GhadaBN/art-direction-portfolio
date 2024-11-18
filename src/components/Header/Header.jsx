import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/src/assets/projectsData.json") // Adjust the path if needed
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  return (
    <div className="header h-screen w-full overflow-hidden">
      {/* Dynamic Projects Grid */}
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
            className="border-r-2 border-black flex items-center justify-center h-full"
          >
            <Link
              to={`/projects/${project.id}`}
              className="text-black text-4xl font-bold transform -rotate-90 whitespace-nowrap"
            >
              {project.title}
            </Link>
          </div>
        ))}
      </div>

      {/* Static Grid for Debugging */}
      <div className="grid grid-cols-2 grid-rows-2 h-screen w-full">
        <div className="border border-black flex items-center justify-center">
          Cell 1
        </div>
        <div className="border border-black flex items-center justify-center">
          Cell 2
        </div>
        <div className="border border-black flex items-center justify-center">
          Cell 3
        </div>
        <div className="border border-black flex items-center justify-center">
          Cell 4
        </div>
      </div>
    </div>
  );
};

export default Header;
