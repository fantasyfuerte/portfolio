import Link from "next/link";
import { navbarLinks } from "../../data";

function NavBar() {
  return (
    <nav className="flex justify-center w-full fixed bottom-5 ">
      <div className="flex bg-middleColor rounded-2xl p-4 px-6 gap-8 text-primary">
        {navbarLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
