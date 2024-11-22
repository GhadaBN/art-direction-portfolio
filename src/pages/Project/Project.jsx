import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../assets/projectsData.json";
import HeaderProject from "../../components/HeaderProject/HeaderProject";

const Project = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="project-page h-screen flex items-center justify-center">
      <HeaderProject
        title={project.title}
        type={project.type}
        description={project.description}
        client={project.client}
        agency={project.agency}
        team={project.team}
        awards={project.awards}
      />
    </div>
  );
};

export default Project;
