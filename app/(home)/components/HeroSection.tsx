import React from "react";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className="min-h-[80vh] flex flex-col-reverse  gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className=" space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />{" "}
          <span className=" underline underline-offset-8 decoration-green-500">
            {"I'm Abdul Haseeb."}
          </span>
        </h1>
        <p className="md:w-[500px] text-lg text-gray-300">
          {
            "I'm a Frontend Developer with a strong eye for detail and a passion for accessibility. I bring a well-rounded skill set, including design expertise, task management, and problem-solving abilities."
          }
        </p>
        <Link
            href="https://github.com/abdulhaseebshah"
            className="inline-block group"
          >
            <Title text="View my Github ➡️" />
          </Link>
      </div>
      <div className="my-8 md:my-0 relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3">
            <Link href={"mailto:haseebwe5@gmail.com"}>📢 Available for Work</Link>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
