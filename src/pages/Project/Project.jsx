import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../assets/projectsData.json";
import HeaderProject from "../../components/HeaderProject/HeaderProject";
import CoverProject from "../../components/CoverProject/CoverProject";
import Boards from "../../components/Boards/Boards";
import CaseVideo from "../../components/CaseVideo/CaseVideo";
import DemoVideo from "../../components/DemoVideo/DemoVideo";
import VideoPortrait from "../../components/VideoPortrait/VideoPortrait";
const Project = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="project-page h-screen">
      <HeaderProject
        title={project.title}
        type={project.type}
        description={project.description}
        client={project.client}
        agency={project.agency}
        team={project.team}
        awards={project.awards}
      />
      {project.coverProject && (
        <CoverProject coverProject={project.coverProject} />
      )}
      {project.caseVideo && <CaseVideo caseVideo={project.caseVideo} />}
      {project.videoPortrait && (
        <VideoPortrait videoPortrait={project.videoPortrait} />
      )}
      {project.demoVideo && <DemoVideo demoVideo={project.demoVideo} />}
      {project.boards && <Boards boards={project.boards} />}
    </div>
  );
};

export default Project;
