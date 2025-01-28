import TransitionPage from "@/components/transition-page";
import { Monsieur_La_Doulaise } from "next/font/google";
import Image from "next/image";

const brandFont = Monsieur_La_Doulaise({
  weight: ["400"],
  subsets: ["latin"],
});

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="flex flex-col items-center">
        <Image
          alt="about-photo"
          src="/about-avatar.png"
          width={200}
          height={200}
        />
        <section className="text-primary">
          <h3 className="text-lg text-center py-2 mr-3">
            <span className={`${brandFont.className} text-5xl`}>Fuerte</span>
            &apos;s Skills
          </h3>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
