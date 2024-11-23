import React from "react";
import ReactPlayer from "react-player";

const CoverProject = ({ coverProject }) => {
  return (
    <div className="cover-project-container pt-20 pb-2 mx-auto relative flex justify-center items-center overflow-hidden w-full h-full">
      {coverProject?.map((item, index) => (
        <div key={index} className="cover-item w-[92%] h-auto">
          {item.type === "video" ? (
            <ReactPlayer
              url={item.src}
              playing
              loop
              muted
              controls={false}
              width="100%"
              height="100%"
              className="project-video w-full h-full object-cover block mt-0 p-0 overflow-hidden rounded-md aspect-[16/9]"
            />
          ) : (
            <img
              src={item.src}
              alt="Cover"
              className="cover-project-img w-full h-full object-cover block mt-0 p-0 overflow-hidden rounded-md aspect-[16/9]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CoverProject;
