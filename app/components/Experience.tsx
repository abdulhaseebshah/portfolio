import React from "react";
import Title from "./Title";

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold pb-4">Experience</h3>
      <div className="mt-2 space-y-4">
        <p className="lg:border-l-4 text-lg lg:p-4 lg:px-5 lg:ml-6">
          <h3 className="text-2xl font-bold text-orange-500">
            Manal IT Services & Training Centre
          </h3>
          <p>
            Frontend Developer <br />
            <span className="text-sm text-gray-400">May 2023 - Present</span>
          </p>
          <div className="flex flex-col gap-1 mt-4 text-[16px] ml-4">
            <li>
              Built multiple solo projects using HTML, CSS, JavaScript, and
              React.
            </li>
            <li>
              Integrated RESTful APIs and implemented mobile-first, responsive
              design.
            </li>
            <li> Practiced version control with Git and GitHub.</li>
            <li>
              Translated Figma designs into pixel-perfect, accessible web pages.
            </li>
            <li>
              Maintained a strong focus on accessibility standards across all
              projects.
            </li>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Experience;
