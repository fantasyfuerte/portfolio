import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const globalFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fuerte's Portfolio",
  description: "A portfolio of my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${globalFont.className} antialiased select-none`}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
