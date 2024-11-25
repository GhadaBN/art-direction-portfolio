import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../assets/projectsData.json";
import HeaderProject from "../../components/HeaderProject/HeaderProject";
import Boards from "../../components/Boards/Boards";
import DemoVideo from "../../components/DemoVideo/DemoVideo";
import VideoPortrait from "../../components/VideoPortrait/VideoPortrait";

const Project = () => {
  const { projectId } = useParams();
  const projectIndex = projectsData.findIndex((p) => p.id === projectId);
  const project = projectsData[projectIndex];

  if (!project) {
    return <div>Something went wrong</div>;
  }

  const prevIndex =
    (projectIndex - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (projectIndex + 1) % projectsData.length;

  const prevProject = projectsData[prevIndex];
  const nextProject = projectsData[nextIndex];

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
      {project.boards && <Boards boards={project.boards} />}
      {project.videoPortrait && (
        <VideoPortrait videoPortrait={project.videoPortrait} />
      )}
      {project.demoVideo && <DemoVideo demoVideo={project.demoVideo} />}

      <div className="project-navigation my-8 py-8 px-8 flex justify-between">
        <Link
          to={`/projects/${prevProject.id}`}
          className="prev-project font-pangram font-normal leading-snug text-lg"
        >
          ← Previous project
        </Link>
        <Link
          to={
            nextProject.id === "about"
              ? "/about" // Link to `/about` if the next project is "about"
              : `/projects/${nextProject.id}`
          }
          className="next-project font-pangram font-normal leading-snug text-lg"
        >
          {nextProject.id === "about" ? "About" : "Next Project"} →
        </Link>
      </div>
    </div>
  );
};

export default Project;
