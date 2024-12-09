import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverImage = ({ image, position, isVisible }) => {
  if (!image) return null;

  const { x, y } = position;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Smooth fade in
          exit={{ opacity: 0 }} // Smooth fade out
          transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
          style={{
            position: "absolute",
            top: `${y}px`,
            left: `${x}px`,
            width: "15rem", // Adjust size as needed
            height: "20rem",
            pointerEvents: "none",
            zIndex: 1, // Ensure it appears below text and above the background
            transform: "translate(-50%, -50%)", // Center the hover image
          }}
        >
          <img
            src={image}
            alt="Hover preview"
            className="w-full h-full object-cover rounded-md shadow-lg" // Add styling for a polished look
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverImage;
