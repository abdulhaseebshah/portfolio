"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { skills } from "@/public/data";
export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto">
      <Title
        text="Skills 🔪"
        className="flex flex-col justify-center items-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
