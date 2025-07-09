import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 hover:-rotate-3 transition-all cursor-pointer">
        <Link href={"/"}>abdulhaseeb 🧑🏻‍💻</Link>
      </h1>
      <div className="flex items-center gap-5">
        <Link
          href={"/about"}
          className="font-medium hover:scale-105 duration-100"
        >
          About Me
        </Link>
        <Link
          href={"https://dev.to/devabdul"}
          target="_blank"
          className="font-medium hover:scale-105 duration-100"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
}
