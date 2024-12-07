import React from "react";

const About = () => {
  return (
    <div className="about-page w-full px-6 flex justify-center items-start">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-voyage font-normal text-center leading-none text-customH1">
          Art Direction & Graphic Design
        </h1>

        <div className="flex w-full pr-32 pt-12 my-12">
          <div className="w-[40vw] ml-auto">
            <div
              className="mb-12 h-[1px] bg-black w-[41vw]"
              style={{ marginLeft: "-1vw" }}
            ></div>

            <div className="mb-12">
              <p className="font-pangram font-normal text-lg">
                A multidisciplinary creative with a strong foundation in Art
                Direction and graphic design, enriched by diverse experiences
                across agencies, design studios, and in-house teams. I’ve worked
                on a wide range of projects from social media campaigns to
                branding initiatives for renowned brands like Adidas, BMW,
                YouTube, and Gorillas Delivery. Originally from Tunisia and now
                based in Berlin, my work is shaped by a blend of cultural
                influences and a fresh, adaptable approach to design and
                storytelling.
              </p>
            </div>

            <div
              className="mb-12 h-[1px] bg-black w-[41vw]"
              style={{ marginLeft: "-1vw" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
