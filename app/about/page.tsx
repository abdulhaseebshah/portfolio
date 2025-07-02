import React from "react";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
      </div>
    </div>
  );
};

export default page;
