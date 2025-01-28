import TransitionPage from "@/components/transition-page";
import Image from "next/image";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="flex flex-col items-center">
        <Image
          alt="about-photo"
          src="/about-avatar.png"
          width={250}
          height={250}
        />
      </main>
    </>
  );
}

export default AboutPage;
