import TransitionPage from "@/components/transition-page";
import { Ephesis } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const brandFont = Ephesis({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <TransitionPage />
      <main className="pt-6 bg-basicBackground h-screen">
        <div className="text-primary">
          <h3 className={`text-lg text-center -ml-4`}>Welcome To</h3>
          <h1 className={`text-lg text-center py-2`}>
            <span className={`${brandFont.className} text-6xl`}>Fuerte</span>{" "}
            &apos;s Showcase
          </h1>
        </div>
        <div className="flex flex-col items-center -mt-8">
          <Image
            priority
            alt="homepage-photo"
            src="/home-icon.png"
            width={250}
            height={250}
            className="py-20"
          />
          <p className="text-primary/80 text-center -mt-8 px-1">
            As a full-stack developer and designer, I specialize in creating
            unforgettable digital experiences.
          </p>
          <div className="flex justify-center gap-2 mt-8">
            <Link
              href="mailto:leandrofuerte75@gmail.com?subject=Hello%2C%20I%20am%20eager%20to%20join%20forces%20with%20you%21"
              target="_blank"
              className="bg-cta rounded-2xl px-4 py-2 text-basicBackground font-bold hover:opacity-90 active:scale-105 active:transition"
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="border-2 border-primary/80 rounded-2xl px-3 py-1 text-primary/80 font-semibold active:text-primary active:border-primary flex items-center"
            >
              See my projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
