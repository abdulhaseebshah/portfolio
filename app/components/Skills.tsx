"use client";
import React from "react";
import Title from "../components/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { skills } from "@/public/data";
export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold">Skills</h3>
      <HoverEffect items={skills} />
    </div>
  );
}
