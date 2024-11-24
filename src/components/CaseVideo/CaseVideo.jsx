import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IoIosPlay } from "react-icons/io";

const CaseVideo = ({ caseVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full h-auto flex justify-center items-center my-4">
      <div
        className="relative w-4/5 h-full aspect-video rounded-md overflow-hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <ReactPlayer
          url={caseVideo}
          playing={isPlaying}
          controls={showControls}
          width="100%"
          height="100%"
          onPlay={handlePlay}
          onEnded={handleVideoEnd}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload nofullscreen",
                disablePictureInPicture: true,
              },
            },
          }}
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
        />
        {!isPlaying && (
          <div
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer"
            onClick={handlePlay}
          >
            <IoIosPlay className="text-gray-200 text-[3.5rem]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseVideo;
