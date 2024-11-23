import React, { useState } from "react";
import "./VideoPortrait.css";
import ReactPlayer from "react-player";
import { IoIosPlay } from "react-icons/io";

const VideoPortrait = ({ videoPortrait }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = (index) => {
    setActiveVideoIndex(index);
  };

  const handleVideoEnd = () => {
    setActiveVideoIndex(null);
  };

  return (
    <div className="section-portrait">
      <div className="video-portrait-container">
        {videoPortrait.map((video, index) => (
          <div
            key={index}
            className="video-portrait-wrapper"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <ReactPlayer
              url={video}
              playing={activeVideoIndex === index}
              controls={showControls}
              width="100%"
              height="100%"
              onPlay={() => handlePlay(index)}
              onEnded={handleVideoEnd}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload nofullscreen",
                    disablePictureInPicture: true,
                  },
                },
              }}
              className="minimalist-player"
            />
            {activeVideoIndex !== index && (
              <div
                className="play-button-overlay"
                onClick={() => handlePlay(index)}
              >
                <IoIosPlay className="play-icon" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPortrait;
