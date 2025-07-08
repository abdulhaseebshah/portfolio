import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Abdul Haseeb - Front-End Developer in Nashik, India",
  description:
    "View Abdul Haseeb's top frontend projects like Netflix Clone, Weather App, Portfolio – built using React, Next.js, APIs, and Tailwind CSS. Based in Nashik, Maharashtra.",
  keywords:
    "React projects India, frontend projects Nashik, Abdul Haseeb portfolio, web developer Maharashtra, Netflix clone, Next.js projects India",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
