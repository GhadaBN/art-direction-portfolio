import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const CaseVideo = ({ caseVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting); 
      },
      {
        threshold: 0.5, 
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="w-full h-auto flex justify-center items-center my-4"
    >
      <div className="relative w-[92vw] h-full aspect-video overflow-hidden">
        <ReactPlayer
          url={caseVideo}
          playing={isPlaying}
          loop={true}
          volume={0.2}
          muted={false}
          controls={false}
          width="100%"
          height="100%"
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
      </div>
    </div>
  );
};

export default CaseVideo;
