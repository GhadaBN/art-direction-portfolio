import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const Boards = ({ boards }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (boards[index].type === "casevideo") {
              const videoPlayer = videoRef.querySelector("video");
              if (entry.isIntersecting) {
                videoPlayer?.play();
              } else {
                videoPlayer?.pause();
              }
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(videoRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        if (videoRefs.current[index]) {
          observer.unobserve(videoRefs.current[index]);
        }
      });
    };
  }, [boards]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="boards-wrapper flex flex-col items-center w-full">
        {boards?.map((board, index) => (
          <div
            key={index}
            className={`board-item ${
              board.type === "casevideo" ? "flex justify-center" : ""
            } my-4 w-[90vw]`}
            ref={(el) => (videoRefs.current[index] = el)}
          >
            {board.type === "image" && (
              <img
                src={board.src}
                alt={`Board ${index + 1}`}
                className="board w-full h-auto block object-contain"
              />
            )}
            {board.type === "video" && (
              <ReactPlayer
                url={board.src}
                playing
                loop
                muted
                controls={false}
                width="100%"
                height="100%"
                className="board-video"
              />
            )}
            {board.type === "casevideo" && (
              <div className="relative aspect-video overflow-hidden w-[90vw]">
                <ReactPlayer
                  url={board.src}
                  loop
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
