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
            // Only set activeVideoIndex if no video is currently playing
            if (activeVideoIndex === null) {
              setActiveVideoIndex(index);
            }
          } else {
            // Pause the video if it scrolls out of view
            if (activeVideoIndex === index) {
              setActiveVideoIndex(null);
            }
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
  }, [activeVideoIndex]);

  const handleVideoEnd = () => {
    // Automatically move to the next video when the current one ends
    if (
      activeVideoIndex !== null &&
      activeVideoIndex < videoPortrait.length - 1
    ) {
      setActiveVideoIndex(activeVideoIndex + 1);
    } else {
      setActiveVideoIndex(null); // Reset to no video if it's the last one
    }
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
              volume={0.2}
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
