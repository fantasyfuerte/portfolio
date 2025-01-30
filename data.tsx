import {
  PiBookFill,
  PiChatsFill,
  PiHouseFill,
  PiUserFill,
} from "react-icons/pi";

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
    name:"Instagram",
    href: "www.instagram.com/fuerte.ts",
    icon: "/social-icons/instagram.svg"
  },
  {
    name:"Github",
    href: "www.github.com/fantasyfuerte",
    icon: "/social-icons/github.svg"
  },
  {
    name:"Gmail",
    href: "www.gmail.com",
    icon: "/social-icons/gmail.svg"
  },
]