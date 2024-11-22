import React from "react";

const About = () => {
  return (
    <div className="about-page w-full px-6 py-28 flex justify-center items-start">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-voyage font-normal text-center leading-none text-customH1">
          Art Direction & Graphic Design
        </h1>
        <div className="w-[90%] flex justify-end mt-6">
          <p
            className="font-voyage font-normal leading-normal py-16 px-6"
            style={{ width: "35vw" }}
          >
            I’m a multidisciplinary creative with a strong foundation in Art
            Direction and graphic design, enriched by diverse experiences across
            agencies, design studios, and in-house teams. I’ve worked on a wide
            range of projects—from social media campaigns to branding
            initiatives for renowned brands like Adidas, BMW, YouTube, and
            Gorillas Delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
