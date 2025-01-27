import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <Link href="/"></Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Projects</Link>
      <Link href="/contact">Testimonial</Link>
    </nav>
  );
}

export default NavBar;
