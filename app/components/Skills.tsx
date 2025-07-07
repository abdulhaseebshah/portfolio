"use client";
import React from "react";
import Title from "../components/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { skills } from "@/public/data";
export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto">
      <Title text="Skills 🔪" className="flex flex-col items-center -rotate-6" />
      <HoverEffect items={skills} />
    </div>
  );
}
