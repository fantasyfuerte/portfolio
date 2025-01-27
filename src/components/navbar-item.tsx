import Link from "next/link";

interface Props {
  href: string;
  icon: React.ReactNode;
}

function NavBarItem({ href, icon }: Props) {
  return <Link href={href}>{icon}</Link>;
}

export default NavBarItem;
