"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiReactrouter,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
export default function Skills() {
  const skills = [
    {
      text: "Javascript",
      icon: SiJavascript,
    },
    {
      text: "React.js",
      icon: SiReact,
    },
    {
      text: "Next.js",
      icon: SiNextdotjs,
    },
    {
      text: "React Router",
      icon: SiReactrouter,
    },
    {
      text: "HTML",
      icon: SiHtml5,
    },
    {
      text: "CSS",
      icon: SiCss3,
    },
    {
      text: "Tailwind",
      icon: SiTailwindcss,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto">
      <Title
        text="Skills 🔪"
        className="flex flex-col justify-center items-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
