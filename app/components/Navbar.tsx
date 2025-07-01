import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/abdulhaseeb26/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/abdulhaseebshah/",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "https://www.twitter.com/_abdulhaseeb26_/",
      label: "X",
      Icon: SiX,
    },
  ];

  const menuItems = [
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/blogs",
      label: "Blogs",
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 hover:-rotate-3 transition-all cursor-pointer">
       <Link href={"/"}>abdulhaseeb 🧑🏻‍💻</Link>
      </h1>
      <div className="flex items-center gap-5">
        {menuItems.map((item, index) => {
          // const Icon = item.Icon;
          return (
            <Link href={item.link} key={index} aria-label={item.label} className="font-medium hover:scale-105 duration-100">
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
