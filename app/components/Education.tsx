import React from "react";
import Title from "./Title";

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h3 className="text-4xl font-bold pb-4">Education</h3>
      <div className="mt-2 space-y-4">
        <p className="lg:border-l-4 text-lg lg:p-4 lg:px-5 lg:ml-6">
          <h3 className="text-2xl font-bold text-green-500">
            Bachelor of Science - Computer Science
          </h3>
          <p>
            Savitribai Phule Pune University <br />
            <span className="text-sm text-gray-400">2021 - 2024</span>
          </p>
          <div className="flex flex-col gap-1 mt-4 text-[16px] ml-4">
            <li>Grade: 5.62 CGPA</li>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Education;
