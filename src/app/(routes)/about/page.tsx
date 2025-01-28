import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import { tools } from "../../../../data";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="pt-5">
        <Image
          className="mx-auto"
          alt="about-photo"
          src="/about-avatar.png"
          width={200}
          height={200}
        />
        <section className="text-primary">
          <h3 className="text-2xl text-center py-1 font-bold opacity-80">
            Tools & Skills
          </h3>
          <article>
            <h3 className="text-xl text-center py-1 font-bold opacity-80">
              Frontend:
            </h3>
            <div className="grid grid-cols-4 gap-2 p-2 md:px-64 xl:px-96">
              {tools.frontend.map((tool) => (
                <div key={tool.name} className="border-2 border-red-950 h-20">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
