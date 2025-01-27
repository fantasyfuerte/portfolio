"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  icon: React.ReactNode;
}

function NavBarItem({ href, icon }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname !== href ? "text-secondary" : "text-primary"}
    >
      {icon}
    </Link>
  );
}

export default NavBarItem;
