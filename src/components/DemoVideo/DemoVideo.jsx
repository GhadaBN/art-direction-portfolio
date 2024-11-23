import React from "react";
import ReactPlayer from "react-player";

const DemoVideo = ({ demoVideo }) => {
  return (
    <div className="cover-project-container">
      {demoVideo?.map((video, index) => (
        <div key={index} className="cover-item">
          <ReactPlayer
            url={video}
            playing
            loop
            muted
            controls={false}
            width="100%"
            height="100%"
            className="project-video"
          />
        </div>
      ))}
    </div>
  );
};

export default DemoVideo;
