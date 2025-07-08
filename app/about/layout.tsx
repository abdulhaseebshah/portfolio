import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Abdul Haseeb | Front-End Developer from Nashik, India",
  description:
    "Know more about Abdul Haseeb — a passionate frontend developer from Nashik, Maharashtra, India. Skilled in React, JavaScript, Next.js and building accessible web apps.",
  keywords:
    "About Abdul Haseeb, frontend developer Nashik, React developer India, JavaScript developer, Next.js profile, web dev portfolio India",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
