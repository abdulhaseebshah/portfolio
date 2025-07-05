import React from "react";

import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { projects } from "@/public/data";

const Projects = () => {
  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        text="Projects 🎨"
        className="flex flex-col justify-center items-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-16 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={`/projects/${project.projectId}`} key={index}>
              <div
                className={cn(
                  "p-2 rounded-md bg-gradient-to-t from-gray-400/30 to-black/10"
                )}
              >
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-2">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
