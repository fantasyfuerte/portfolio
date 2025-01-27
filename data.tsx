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
