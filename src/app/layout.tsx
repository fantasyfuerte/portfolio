import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const globalFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fuerte's Portfolio",
  description: "A portfolio of my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${globalFont.className} antialiased`}>
        {children}
        <nav>
          <Link href="/"></Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Projects</Link>
          <Link href="/contact">Testimonial</Link>
        </nav>
      </body>
    </html>
  );
}
