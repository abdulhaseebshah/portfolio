import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const page = () => {
  return (
    <div className="min-h-screen bg-[#09090B] overflow-hidden ">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto mt-14 mb-36">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default page;
