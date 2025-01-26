import type { Metadata } from "next";
import { Geo } from "next/font/google";
import "./globals.css";

const geoFont = Geo({
  subsets: ["latin"],
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
      <body className={`${geoFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
