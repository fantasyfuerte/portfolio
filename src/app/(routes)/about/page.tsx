import TransitionPage from "@/components/transition-page";
import Image from "next/image";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="flex flex-col items-center pt-5">
        <Image
          alt="about-photo"
          src="/about-avatar.png"
          width={200}
          height={200}
        />
        <section className="text-primary">
          <h3 className="text-2xl text-center py-3 font-bold opacity-80">Tools & Skills</h3>
        
        </section>
      </main>
    </>
  );
}

export default AboutPage;
