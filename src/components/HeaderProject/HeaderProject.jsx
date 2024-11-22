import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const HeaderProject = ({
  title,
  type,
  description,
  client,
  agency,
  awards,
  team,
}) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="header-project-container flex flex-col justify-center w-full mb-0 flex-grow">
      {type && (
        <div className="tags-container flex gap-4 py-2 px-4">
          {type.map((tag, index) => (
            <h3
              key={index}
              className="type-tag flex justify-center items-center px-2 rounded-full whitespace-nowrap text-center w-[17.5vw] border-[1.5px] border-black shadow-[-3px_4px_0px_black]"
            >
              {tag}
            </h3>
          ))}
        </div>
      )}
      {title && (
        <div className="project-title-container flex justify-center items-center w-full py-8 px-2 border-b-2 border-black">
          <h2 className="project-title mx-auto uppercase overflow-hidden inline-block text-left text-[12vw] leading-[0.85]">
            {title}
          </h2>
        </div>
      )}
      <div className="details-wrapper w-full flex border-b-2 border-black">
        <div className="details-left w-[60%] flex items-start justify-start relative">
          <div className="accordion w-full bg-gradient-to-t from-[#fbfbf6] to-[#fa97d8]">
            {client && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(0)}
                >
                  <p className="accordion-title">Client</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 0 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 0 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 0 && (
                  <p className="accordion-text">{client}</p>
                )}
              </div>
            )}

            {agency && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(1)}
                >
                  <p className="accordion-title">Agency</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 1 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 1 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 1 && (
                  <p className="accordion-text">{agency}</p>
                )}
              </div>
            )}

            {awards && awards.length > 0 && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(2)}
                >
                  <p className="accordion-title">Awards</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 2 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 2 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 2 && (
                  <div className="accordion-text">
                    {awards.map((award, index) => (
                      <p key={index}>{award}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {team && team.length > 0 && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(3)}
                >
                  <p className="accordion-title">Team</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 3 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 3 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 3 && (
                  <div className="accordion-text">
                    {team.map((member, index) => (
                      <p key={index} className="">
                        {member}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {description && (
          <div className="details-right">
            <p className="project-info-title">Project Info</p>
            <div className="description-text w-[98%] p-4 pb-4">
              {description.map((desc, index) => (
                <p key={index} className="paragraph-text-header">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderProject;
