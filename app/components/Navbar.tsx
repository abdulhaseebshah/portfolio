import Link from "next/link";
import React from "react";
export default function Navbar() {
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
          return (
            <Link
              href={item.link}
              key={index}
              aria-label={item.label}
              className="font-medium hover:scale-105 duration-100"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
