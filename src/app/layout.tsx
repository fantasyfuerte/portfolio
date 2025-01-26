import type { Metadata } from "next";
import { Aboreto } from "next/font/google";
import "./globals.css";

const aboretoFont = Aboreto({
  subsets: ["latin"],
  variable: "--font-aboreto",
  weight: ["400"],
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
      <body className={`${aboretoFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
