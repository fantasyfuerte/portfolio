import { Monsieur_La_Doulaise } from "next/font/google";
import Image from "next/image";

const playwritevn = Monsieur_La_Doulaise({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="pt-6 bg-basicBackground h-screen">
      <div className="text-primary">
        <h3 className={`text-lg text-center -ml-4`}>Welcome To</h3>
        <h3 className="text-lg text-center py-2">
          <span className={`${playwritevn.className} text-6xl`}>Fuerte</span>
          &apos;s Showcase
        </h3>
      </div>
      <div className="flex flex-col items-center -mt-8">
        <Image
          alt="homepage-photo"
          src="/avatar.png"
          width={250}
          height={250}
        />
        <p className="text-primary/80 text-center -mt-8">As a full-stack developer and designer, I specialize in creating unforgettable digital experiences.</p>
      </div>
    </main>
  );
}
