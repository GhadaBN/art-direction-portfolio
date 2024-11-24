import React from "react";
import ReactPlayer from "react-player";

const DemoVideo = ({ demoVideo }) => {
  return (
    <div className="cover-project-container pt-20 mb-8 mx-auto relative flex justify-center items-center overflow-hidden w-full h-full">
      {demoVideo?.map((video, index) => (
        <div key={index} className="cover-item w-[92%] h-auto">
          <ReactPlayer
            url={video}
            playing
            loop
            muted
            controls={false}
            width="100%"
            height="100%"
            className="project-video w-full h-full object-cover block mt-0 p-0 overflow-hidden aspect-[16/9]"
          />
        </div>
      ))}
    </div>
  );
};

export default DemoVideo;
