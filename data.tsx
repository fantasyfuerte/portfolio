import {
  PiBookFill,
  // PiChatsFill,
  PiHouseFill,
  PiUserFill,
} from "react-icons/pi";

export const projects = [
  {
    name: "Python School",
    subtitle: "Time to Learn!",
    description:
      "Python School is a platform with a wide range of exercises to help you learn Python. Whether you're a beginner or an experienced developer, Python School has something for everyone.",
    image: "/projects/pythonschool.png",
    repo: "https://github.com/fantasyfuerte/python-school-ui-design",
    demo: "https://pythonschool.vercel.app/",
    technologies: ["NextJS", "React", "TypeScript", "TailwindCSS"],
  },
  {
    name: "DO-IT-PROJECT",
    subtitle: "Accomplishing Goals",
    description:
      "Web application designed to help users achieve their daily objectives effortlessly. The platform offers a suite of simple yet powerful tools that enable users to organize their tasks, track habits, daily inspiration and more.",
    image: "/projects/do-it-project.png",
    repo: "https://github.com/fantasyfuerte/do-it-project",
    demo: "https://do-it-now-project.vercel.app/",
    technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "Motion"],
  },
  {
    name: "Gainz Journal",
    subtitle: "More Than Tracking",
    description:
      "Gainz Journal is your ultimate workout companion, built to ignite your drive and fuel your fitness journey. Log every rep, track every milestone, and stay inspired as you transform effort into results.",
    image: "/projects/gainzjournal.png",
    repo: "https://github.com/fantasyfuerte/gainz-journal",
    demo: "https://gainzjournal.vercel.app/",
    technologies: [
      "NextJS",
      "React",
      "TypeScript",
      "PrismaORM",
      "PostgreSQL",
      "TailwindCSS",
      "Motion",
      "AuthJS",
    ],
  },
  {
    name: "Pocket Ledger",
    subtitle: "Your Finance Freedom",
    description:
      "Finance app designed to track incomes and expenses efficiently. It provides a comprehensive transaction history, enabling users to monitor financial health and make informed decisions.",
    image: "/projects/pocket-ledger.png",
    repo: "https://github.com/fantasyfuerte/pocket-ledger",
    demo: "https://pocket-ledger.vercel.app/",
    technologies: ["React", "NextJS", "TypeScript", "TailwindCSS", "Motion"],
  },
  {
    name: "Typing Test",
    subtitle: "Are You Typing Fast?",
    description:
      "Users type random words in 30 seconds, receiving real-time feedback on accuracy and speed. This is built with vanilla JavaScript, using event listeners, DOM manipulation, and interval timers, demonstrating its power without frameworks.",
    image: "/projects/typing-test.png",
    repo: "https://github.com/fantasyfuerte/typing-test",
    demo: "https://snazzy-mooncake-434a4b.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export const navbarLinks = [
  { name: "Home", href: "/", icon: <PiHouseFill size={28} /> },
  { name: "About", href: "/about", icon: <PiUserFill size={28} /> },
  { name: "Projects", href: "/projects", icon: <PiBookFill size={28} /> },
  // {
  //   name: "Testimonial",
  //   href: "/testimonials",
  //   icon: <PiChatsFill size={28} />,
  // },
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
      name: "Vite",
      icon: "/icons/vitejs.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/icons/tailwindcss.svg",
    },
    {
      name: "Motion",
      icon: "/icons/motion.svg",
    },
    {
      name: "Figma",
      icon: "/icons/figma.svg",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
    },
    {
      name: "HTML",
      icon: "/icons/html.svg",
    },
  ],
  backend: [
    {
      name: "PrismaORM",
      icon: "/icons/prisma.svg",
    },
    {
      name: "NodeJS",
      icon: "/icons/nodejs.svg",
    },
    {
      name: "Express",
      icon: "/icons/expressjs.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgresql.svg",
    },
    {
      name: "SQLite",
      icon: "/icons/sqlite.svg",
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
      name: "Deployment",
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
];
