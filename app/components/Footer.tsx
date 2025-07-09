import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";

const Footer = () => {
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
  return (
    <div className="max-w-7xl mx-auto p-5 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="flex flex-col gap-6 lg:flex-row  justify-between">
        <div>
          <h4 className="text-xl font-bold pb-2 ">Hello, I&rsquo;m Abdul!</h4>
          <p className="lg:max-w-[80%] text-gray-400">
            I&rsquo;m a Frontend Developer with a strong eye for detail and a passion
            for accessibility. I bring a well-rounded skill set, including
            design expertise, task management, and problem-solving abilities.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold pb-2"> Follow my coding journey</h4>
          <p className="lg:max-w-[80%] text-gray-400">
            I regularly share my latest projects and learning milestones on my
            social accounts. You can find me on LinkedIn and GitHub. If you&rsquo;d
            like to get in touch, feel free to send me an email.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-14 justify-center items-center sm:justify-between pt-10">
        <p className="lg:w-full">All rights reserved. © 2025 Abdul Haseeb. </p>
        <div className="lg:w-full flex items-center gap-5">
          {socials.map((item, index) => {
            const Icon = item.Icon;
            return (
              <Link href={item.link} key={index} aria-label={item.label}>
                <Icon className={"w-5 h-5 hover:scale-125 transition-all"} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
