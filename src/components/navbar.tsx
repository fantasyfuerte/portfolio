import { navbarLinks } from "../../data";
import NavBarItem from "./navbar-item";

function NavBar() {
  return (
    <nav className="flex justify-center w-full fixed bottom-0 pb-5 bg-gradient-to-t from-basicBackground via-10% via-basicBackground to-transparent">
      <div className="flex bg-middleColor rounded-2xl p-4 px-6 gap-8 shadow-lg shadow-primary/60">
        {navbarLinks.map((link) => (
          <NavBarItem key={link.name} href={link.href} icon={link.icon} />
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
