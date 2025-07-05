import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectDetails from "@/app/components/ProjectDetails";
import React from "react";

const page = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  return (
    <div className="min-h-screen bg-[#09090B] overflow-hidden ">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto p-5 sm:p-0">
        <ProjectDetails projectId={projectId} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
