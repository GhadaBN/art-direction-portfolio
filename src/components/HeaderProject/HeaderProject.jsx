import React from "react";

const HeaderProject = ({
  title,
  type,
  description,
  client,
  agency,
  awards,
  team,
}) => {
  return (
    <div className="header-project w-full px-6 pt-[6vh] h-[80vh]">
      {/* Type (Tags) */}
      {type && (
        <div className="flex justify-end pb-4 px-10">
          <div className="flex gap-2">
            {type.map((tag, index) => (
              <div
                key={index}
                className="font-pangram font-normal leading-snug text-lg px-12 py-1 text-black rounded-full shadow-[-4px_4px_0px_0px_black] border border-black"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <div>
          <h1 className="font-voyage font-normal text-center leading-none text-customH1 pb-12">
            {title}
          </h1>
        </div>
      )}

      {/* Description (Project Information) */}
      <div className="flex w-full px-10">
        <div className="w-1/2"></div>
        {description && (
          <div className="w-1/2 pl-4">
            <h3 className="font-pangram font-medium leading-snug text-lg">
              Project Information
            </h3>
            {description.map((desc, index) => (
              <p
                className="font-pangram font-normal leading-snug text-lg"
                style={{ width: "38vw" }}
                key={index}
              >
                {desc}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Full-Width Line */}
      <div className="w-full border-t border-black my-6"></div>

      {/* Client, Agency, Awards on Left and Team on Right */}
      <div className="flex w-full px-10">
        {/* Left Column */}
        <div className="w-1/2 pr-4">
          {client && (
            <div>
              <h3 className="font-pangram font-medium leading-snug text-lg">
                Client:
              </h3>
              <p className="font-pangram font-normal leading-snug text-lg">
                {client}
              </p>
            </div>
          )}

          {agency && (
            <div>
              <h3 className="font-pangram font-medium leading-snug text-lg">
                Agency:
              </h3>
              <p className="font-pangram font-normal leading-snug text-lg">
                {agency}
              </p>
            </div>
          )}

          {awards && awards.length > 0 && (
            <div>
              <h3 className="font-pangram font-medium leading-snug text-lg">
                Awards:
              </h3>
              {awards.map((award, index) => (
                <p
                  className="font-pangram font-normal leading-snug text-lg"
                  key={index}
                >
                  {award}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-4">
          {team && team.length > 0 && (
            <div>
              <h3 className="font-pangram font-medium leading-snug text-lg">
                Team:
              </h3>
              {team.map((member, index) => (
                <p
                  className="font-pangram font-normal leading-snug text-lg"
                  key={index}
                >
                  {member}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderProject;
