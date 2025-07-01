import React from "react";
import {
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";

const Projects = () => {
  const projects = [
    {
      title: "E-Learning Platform (onlydevkh)",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects " />
    </div>
  );
};

export default Projects;
