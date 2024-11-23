import React from "react";
import ReactPlayer from "react-player";

const Boards = ({ boards }) => {
  return (
    <div className="boards-wrapper">
      {boards?.map((board, index) => (
        <div key={index} className="board-item">
          {board.type === "image" ? (
            <img src={board.src} alt={`Board ${index + 1}`} className="board" />
          ) : board.type === "video" ? (
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
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Boards;
