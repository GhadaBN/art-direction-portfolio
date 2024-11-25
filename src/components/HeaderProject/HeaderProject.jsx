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
    <div className="header-project w-full px-6 pb-[5vh] min-h-[80vh]">
      {type && (
        <div className="flex justify-center pb-8 px-4">
          {/* Uncomment this block if you want to display tags */}
          {/* <div className="flex gap-4">
            {type.map((tag, index) => (
              <div
                key={index}
                className="font-pangram font-normal text-xl px-12 py-0.5 text-black rounded-full shadow-[-4px_4px_0px_0px_black] border border-black"
              >
                {tag}
              </div>
            ))}
          </div> */}
        </div>
      )}

      {title && (
        <div className="w-full flex justify-center">
          <h1 className="font-voyage font-normal text-center leading-tight text-customH2 py-8">
            {title}
          </h1>
        </div>
      )}

      <div className="flex w-full pr-32 pt-12 my-12">
        {description && (
          <div className="w-[40vw] ml-auto">
            {/* First Line */}
            <div
              className="mb-12 h-[1px] bg-black w-[41vw]"
              style={{ marginLeft: "-1vw" }}
            ></div>

            {/* Project Information */}
            <div className="mb-12">
              <h3 className="font-pangram font-medium text-lg">
                Project Information
              </h3>
              {description.map((desc, index) => (
                <p className="font-pangram font-normal text-lg" key={index}>
                  {desc}
                </p>
              ))}
            </div>

            {/* Second Line */}
            <div
              className="mb-12 h-[1px] bg-black w-[41vw]"
              style={{ marginLeft: "-1vw" }}
            ></div>

            {/* Additional Details */}
            <div className="flex gap-8">
              {/* Left Side: Client, Agency, Awards */}
              <div className="w-1/2">
                {client && (
                  <div>
                    <h3 className="font-pangram font-medium text-lg">
                      Client:
                    </h3>
                    <p className="font-pangram font-normal text-lg">{client}</p>
                  </div>
                )}

                {agency && (
                  <div>
                    <h3 className="font-pangram font-medium text-lg">
                      Agency:
                    </h3>
                    <p className="font-pangram font-normal text-lg">{agency}</p>
                  </div>
                )}

                {awards && awards.length > 0 && (
                  <div>
                    <h3 className="font-pangram font-medium text-lg">
                      Awards:
                    </h3>
                    {awards.map((award, index) => (
                      <p
                        className="font-pangram font-normal text-lg"
                        key={index}
                      >
                        {award}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-1/2">
                {team && team.length > 0 && (
                  <div>
                    <h3 className="font-pangram font-medium text-lg">Team:</h3>
                    {team.map((member, index) => (
                      <p
                        className="font-pangram font-normal text-lg"
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
