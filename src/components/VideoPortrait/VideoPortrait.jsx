import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IoIosPlay } from "react-icons/io";

const VideoPortrait = ({ videoPortrait }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handlePlayToggle = (index) => {
    if (activeVideoIndex === index) {
      setActiveVideoIndex(null);
    } else {
      setActiveVideoIndex(index);
    }
  };

  const handleVideoEnd = () => {
    setActiveVideoIndex(null);
  };

  return (
    <div className="w-[92vw] min-h-screen bg-black flex justify-center items-center py-12 mx-auto">
      <div className="flex gap-12 w-[90vw] justify-center items-center">
        {videoPortrait.map((video, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center overflow-hidden w-[20vw] aspect-[9/16]"
            onClick={() => handlePlayToggle(index)}
          >
            <ReactPlayer
              url={video}
              playing={activeVideoIndex === index}
              controls={false}
              width="100%"
              height="100%"
              onEnded={handleVideoEnd}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload nofullscreen",
                    disablePictureInPicture: true,
                  },
                },
              }}
              className="w-full h-full object-cover"
            />

            {activeVideoIndex !== index && (
              <div className="absolute inset-0 flex justify-center items-center bg-black/50 cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
                <IoIosPlay className="text-gray-200 text-[3.5rem]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPortrait;
