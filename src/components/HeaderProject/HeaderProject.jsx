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
      {type && (
        <div className="font-pangram font-normal leading-snug text-lg pl-2 pb-6">
          {type.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
      )}

      {title && (
        <div>
          <h1 className="font-voyage font-normal text-center leading-none text-customH1 pb-12">
            {title}
          </h1>
        </div>
      )}

      {client && (
        <div>
          <h3>Client:</h3>
          <div>{client}</div>
        </div>
      )}

      {agency && (
        <div>
          <h3>Agency:</h3>
          <div>{agency}</div>
        </div>
      )}

      {awards && awards.length > 0 && (
        <div>
          <h3>Awards:</h3>
          {awards.map((award, index) => (
            <div key={index}>{award}</div>
          ))}
        </div>
      )}

      {team && team.length > 0 && (
        <div>
          <h3>Team:</h3>
          {team.map((member, index) => (
            <div key={index}>{member}</div>
          ))}
        </div>
      )}

      {description && (
        <div>
          <h3>Project Information</h3>
          {description.map((desc, index) => (
            <p
              className="font-pangram font-normal leading-snug text-lg py-16 pl-2"
              style={{ width: "38vw" }}
              key={index}
            >
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderProject;
