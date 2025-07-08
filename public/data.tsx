import {
  SiAxios,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const projects = [
  {
    projectId: 1,
    title: "Netttflix - Movie App",
    description:
      "A movie browsing app inspired by IMDb, powered by The Movie Database (TMDB) API. Discover trending movies, view detailed information, and navigate seamlessly with a clean UI built using React, Axios, and React Router.",
    tech: [SiReact, SiAxios, SiReactrouter, SiCss3],
    skills: [
      "React",
      "Axios",
      "CSS",
      "React Router",
      "TMDB API",
      "Responsive Design",
    ],
    cover: "/project-1.jpg",
    gitHubLink: "https://github.com/abdulhaseebshah/netflix-clone",
    liveLink: "https://netttflix.netlify.app/",
  },
  {
    projectId: 2,
    title: "WeatherBite - Weather Forecast App",
    description:
      "Stay updated with accurate weather forecasts in real-time. This app fetches data from a weather API and displays it in a beautifully styled UI using React, Axios, and Tailwind CSS.",
    tech: [SiReact, SiAxios, SiHtml5, SiTailwindcss],
    skills: [
      "React",
      "Axios",
      "Tailwind CSS",
      "Weather API",
      "Responsive Design",
    ],
    cover: "/project-2.jpg",
    gitHubLink: "https://github.com/abdulhaseebshah/weatherApp",
    liveLink: "https://weather-bite.netlify.app/",
  },
  {
    projectId: 3,
    title: "Quote5 - Quote Generator",
    description:
      "A clean and elegant random quote generator powered by an external API. Each refresh fetches a new inspirational quote in real-time. Users can also download their favorite quotes with a single click. Built using React and styled with CSS for a smooth and minimal experience.",
    tech: [SiReact, TbApi, SiJavascript, SiCss3],
    skills: ["JavaScript", "React", "API's", "CSS", "Responsive Design"],
    cover: "/project-3.jpg",
    gitHubLink: "https://github.com/abdulhaseebshah/Quotify",
    liveLink: "https://quote5.netlify.app/",
  },
];

export const skills = [
  {
    text: "Javascript",
    icon: SiJavascript,
  },
  {
    text: "React.js",
    icon: SiReact,
  },
  {
    text: "Next.js",
    icon: SiNextdotjs,
  },
  {
    text: "React Router",
    icon: SiReactrouter,
  },
  {
    text: "HTML",
    icon: SiHtml5,
  },
  {
    text: "CSS",
    icon: SiCss3,
  },
  {
    text: "Tailwind",
    icon: SiTailwindcss,
  },
];
