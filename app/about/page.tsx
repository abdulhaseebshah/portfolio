import React from "react";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto p-5 space-y-5 flex gap-6 items-center justify-between flex-col lg:flex-row">
        <div className="max-w-[700px] w-full space-y-5">
          <h3 className="text-4xl font-bold text-green-500">
            Let me introduce myself
          </h3>
          <p className="text-lg">
            I'm a Frontend Developer with a strong eye for detail and a passion
            for accessibility. I bring a well-rounded skill set, including
            design expertise, task management, and problem-solving abilities.
            <br />
            <br />
            I’ve self-taught and developed my skills in HTML, CSS, JavaScript
            (ES6 & Async), React, Next, and more - always with a focus on clean,
            accessible, and responsive design.
          </p>
        </div>
        <div className="max-w-[400px] w-full">
          <img
            src="./abdul-profile.png"
            alt="abdul-profile"
            className="w-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        {/* Tabs */}
        <Skills />
      </div>
    </div>
  );
};

export default page;
