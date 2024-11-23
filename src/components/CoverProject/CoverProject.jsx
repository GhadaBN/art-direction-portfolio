import React from "react";
import ReactPlayer from "react-player";

const CoverProject = ({ coverProject }) => {
  return (
    <div className="cover-project-container">
      {coverProject?.map((item, index) => (
        <div key={index} className="cover-item">
          {item.type === "video" ? (
            <ReactPlayer
              url={item.src}
              playing
              loop
              muted
              controls={false}
              width="100%"
              height="100%"
              className="project-video"
            />
          ) : (
            <img src={item.src} alt="Cover" className="cover-project-img" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CoverProject;
