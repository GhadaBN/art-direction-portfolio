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
            if (boards[index].type === "video") {
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
              board.type === "video" ? "flex justify-center" : ""
            } my-2 w-[90vw]`}
            ref={(el) => (videoRefs.current[index] = el)}
          >
            {board.type === "image" && (
              <img
                src={board.src}
                alt={`Board ${index + 1}`}
                className="board w-full h-auto block object-contain rounded-lg"
              />
            )}
            {board.type === "video" && (
              <div className="bg-gray-100 flex justify-center items-center rounded-xl w-[90vw] h-auto px-10 py-10 overflow-hidden">
                <ReactPlayer
                  url={board.src}
                  loop
                  volume={0.2}
                  controls={false}
                  muted={false}
                  width="90vw"
                  height="auto"
                  config={{
                    file: {
                      attributes: {
                        className: "rounded-xl",
                      },
                    },
                  }}
                />
              </div>
            )}
            {board.type === "videoFull" && (
              <div className="relative w-[90vw] rounded-xl overflow-hidden">
                <ReactPlayer
                  url={board.src}
                  loop
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
                  className="rounded-xl"
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
