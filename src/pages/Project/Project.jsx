import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../assets/projectsData.json";

const Project = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{project.title}</h1>
    </div>
  );
};

export default Project;
