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
    <div className="header-project w-full px-6 pt-[2vh] h-[80vh]">
      {type && (
        <div className="flex justify-start pb-6 px-4">
          <div className="flex gap-4">
            {type.map((tag, index) => (
              <div
                key={index}
                className="font-pangram font-normal leading-snug text-lg px-12 py-1 text-black
                rounded-full shadow-[-4px_4px_0px_0px_black] border border-black"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}

      {title && (
        <div className="w-full flex justify-center">
          <h1 className="font-voyage font-normal text-center leading-none text-customH2 pb-20">
            {title}
          </h1>
        </div>
      )}

      <div className="flex w-full px-10 pt-12">
        {description && (
          <div className="w-[40vw] ml-auto">
            {/* Line above Project Information */}
            <div
              className="mb-6 h-[1px] bg-black w-[41vw]"
              style={{ marginLeft: "-1vw" }}
            ></div>

            <h3 className="font-pangram font-medium leading-snug text-lg pt-1">
              Project Information
            </h3>
            {description.map((desc, index) => (
              <p
                className="font-pangram font-normal leading-snug text-lg"
                key={index}
              >
                {desc}
              </p>
            ))}

            {/* Line below Project Information */}
            <div
              className="mt-6 h-[1px] bg-black w-[42vw]"
              style={{ marginLeft: "-2vw" }}
            ></div>

            {/* Flexed Wrapper for Additional Details */}
            <div className="mt-6 pt-6 flex">
              {/* Left Side: Client, Agency, Awards */}
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

              {/* Right Side: Team */}
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
        )}
      </div>
    </div>
  );
};

export default HeaderProject;
