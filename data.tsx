import {
  PiBookFill,
  PiChatsFill,
  PiHouseFill,
  PiUserFill,
} from "react-icons/pi";

export const projects = [
  {
    name: "DO-IT-PROJECT",
    description:
      "DO-IT-NOW is a web application designed to help users achieve their daily objectives effortlessly. The platform offers a suite of simple yet powerful tools that enable users to organize their tasks, track habits, daily inspiration and more.",
    image: "/images/projects/do-it-project.png",
    repo: "https://github.com/fantasyfuerte/do-it-project",
    demo: "https://do-it-now-project.vercel.app/",
  },
  {
    name: "Pocket Ledger",
    description:
      "Pocket Ledger is a finance app designed to track incomes and expenses efficiently. It provides a comprehensive transaction history, enabling users to monitor financial health and make informed decisions. Pocket Ledger simplifies financial management. 💸📱",
    image: "/images/projects/pocket-ledger.png",
    repo: "https://github.com/fantasyfuerte/pocket-ledger",
    demo: "https://pocket-ledger.vercel.app/",
  },
];

export const navbarLinks = [
  { name: "Home", href: "/", icon: <PiHouseFill size={28} /> },
  { name: "About", href: "/about", icon: <PiUserFill size={28} /> },
  { name: "Projects", href: "/projects", icon: <PiBookFill size={28} /> },
  {
    name: "Testimonial",
    href: "/testimonial",
    icon: <PiChatsFill size={28} />,
  },
];

export const tools = {
  frontend: [
    {
      name: "React",
      icon: "/icons/react.svg",
    },
    {
      name: "NextJS",
      icon: "/icons/nextjs.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/icons/tailwindcss.svg",
    },
    {
      name: "Vite",
      icon: "/icons/vitejs.svg",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
    },
    {
      name: "HTML",
      icon: "/icons/html.svg",
    },
    {
      name: "Motion",
      icon: "/icons/motion.svg",
    },
    {
      name: "Figma",
      icon: "/icons/figma.svg",
    },
  ],
  backend: [
    {
      name: "NodeJS",
      icon: "/icons/nodejs.svg",
    },
    {
      name: "Express",
      icon: "/icons/expressjs.svg",
    },
    {
      name: "Sqlite",
      icon: "/icons/sqlite.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgresql.svg",
    },
    {
      name: "Prisma",
      icon: "/icons/prisma.svg",
    },
  ],
  laguages: [
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
    },
  ],
  mobile: [
    {
      name: "React Native",
      icon: "/icons/reactnative.svg",
    },
    {
      name: "Expo",
      icon: "/icons/expo.svg",
    },
  ],
  other: [
    {
      name: "Git",
      icon: "/icons/git.svg",
    },
    {
      name: "GitHub",
      icon: "/icons/github.svg",
    },
    {
      name: "Deployment & CI/CD",
      icon: "/icons/deployment.svg",
    },
  ],
};

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/fuerte.ts",
    icon: "/social-icons/instagram.svg",
  },
  {
    name: "Github",
    href: "https://www.github.com/fantasyfuerte",
    icon: "/social-icons/github.svg",
  },
  {
    name: "Gmail",
    href: "mailto:leandrofuerte75@gmail.com?subject=Hello%20I%20came%20from%20your%20portfolio%20website",
    icon: "/social-icons/gmail.svg",
  },
];
