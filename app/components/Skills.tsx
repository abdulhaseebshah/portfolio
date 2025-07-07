"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { skills } from "@/public/data";
export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto">
      <HoverEffect items={skills} />
    </div>
  );
}
