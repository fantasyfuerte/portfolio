import TransitionPage from "@/components/transition-page";
import { Monsieur_La_Doulaise } from "next/font/google";
import Image from "next/image";

const brandFont = Monsieur_La_Doulaise({
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
          <h3 className="text-lg text-center py-2">
            <span className={`${brandFont.className} text-6xl`}>Fuerte</span>
            &apos;s Showcase
          </h3>
        </div>
        <div className="flex flex-col items-center -mt-8">
          <Image
            priority
            alt="homepage-photo"
            src="/avatar.png"
            width={250}
            height={250}
          />
          <p className="text-primary/80 text-center -mt-8">
            As a full-stack developer and designer, I specialize in creating
            unforgettable digital experiences.
          </p>
          <div className="flex justify-center gap-2 mt-8">
            <button className="bg-cta rounded-2xl px-4 py-2 text-basicBackground font-bold hover:opacity-90 active:scale-105 active:transition">
              Contact Me
            </button>
            <button className="border-2 border-primary/80 rounded-2xl px-3 py-1 text-primary/80 font-semibold active:text-primary active:border-primary">
              See my projects
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
