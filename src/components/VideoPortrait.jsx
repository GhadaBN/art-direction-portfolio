import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoPortrait = ({ videoPortrait }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null); // Start with no active video
  const videoRefs = useRef([]); // Ref for all video containers

  useEffect(() => {
    const observers = [];

    videoRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Play video when it comes into view
            setActiveVideoIndex((prevIndex) =>
              prevIndex === null ? index : prevIndex
            );
          } else if (activeVideoIndex === index) {
            // Stop playing the video when it goes out of view
            setActiveVideoIndex(null);
          }
        },
        { threshold: 0.5 } // Video must be 50% visible to trigger
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleVideoEnd = () => {
    // Automatically move to the next video when the current one ends
    setActiveVideoIndex((prevIndex) =>
      prevIndex !== null && prevIndex < videoPortrait.length - 1
        ? prevIndex + 1
        : null
    );
  };

  return (
    <div className="w-[90vw] min-h-screen bg-gray-100 rounded-xl flex justify-center items-center py-12 my-2 mx-auto">
      <div className="flex gap-8 w-[90vw] justify-center items-center">
        {videoPortrait.map((video, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center overflow-hidden w-[18vw] aspect-[9/16]"
            ref={(el) => (videoRefs.current[index] = el)}
          >
            <ReactPlayer
              url={video}
              playing={activeVideoIndex === index}
              controls={false}
              volume={0.1}
              width="100%"
              height="100%"
              onEnded={handleVideoEnd}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload nofullscreen",
                    disablePictureInPicture: true,
                    className: "rounded-lg",
                  },
                },
              }}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPortrait;
