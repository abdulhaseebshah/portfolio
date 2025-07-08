import React from "react";
import { projects } from "@/public/data";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

type Props = {
  projectId: string;
};

const ProjectDetails = ({ projectId }: Props) => {
  const project = projects.find(
    (proj) => proj.projectId.toString() === projectId
  );

  if (!project) {
    return (
      <div className="py-10 p-5 sm:p-0 text-center text-red-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="p-0 sm:p-5">
      <div className="border-b border-gray-700 pb-5 mb-10 flex items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
      </div>
      <div className="grid grid-cols-1 my-10">
        <Image
          src={project.cover}
          alt={project.title}
          className="w-full mx-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-4 space-y-4">
        <h3 className="text-3xl font-bold text-green-500">Overview</h3>
        <p className="border-l-4 text-lg p-6">
          {project.description}{" "}
          <div className="flex items-center gap-4 mt-4 text-[16px]">
            <Link
              href={project.gitHubLink}
              target="_blank"
              className="bg-white text-black py-3 px-4 font-medium rounded-lg flex items-center gap-1 group"
            >
              Visit GitHub
              <FiArrowUpRight className="h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              className="bg-white text-black py-3 px-4 font-medium rounded-lg flex items-center gap-1 group"
            >
              Visit Live
              <FiArrowUpRight className="h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </p>

        <h3 className="text-3xl font-bold text-indigo-500">Skills</h3>
        <div className="border-l-4 p-6 flex flex-wrap items-center gap-4 mt-4">
          {project.skills.map((skill) => (
            <div key={skill} className="bg-white text-black py-3 px-4 font-medium rounded-lg flex items-center gap-1 group">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
