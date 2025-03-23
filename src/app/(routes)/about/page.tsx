import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import { tools } from "../../../../data";
import ToolItem from "@/components/tool-item";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="pt-5 pb-24 text-primary bg-basicBackground">
        <div className="flex flex-col items-center gap-8">
          <div
            className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4"
            style={{ borderColor: "#d4ceaa" }}
          >
            <Image
              src="/about-avatar.png"
              alt="avatar"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>

          <div className="flex-1 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#2b2823" }}
            >
              Hello, I&apos;m Fuerte
            </h2>

            <div className="h-1 w-20 md:w-32 mx-auto mb-6 bg-cta"></div>

            <div className="mb-3 text-xl md:text-2xl font-semibold italic text-primary/80">
              &quot;Turning ideas into code, and code into experiences.&quot;
            </div>

            <p className="mb-6 text-lg md:mx-44 lg:mx-72 text-secondary font-medium">
              Every project is a step toward creating something impactful
              because great design isn&apos;t just seen, it&apos;s felt.
            </p>

            <button
              className="px-6 py-3 rounded-md text-white font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: "#cc3917" }}
            >
              Get in touch
            </button>
          </div>
        </div>

        <section>
          <h3 className="text-2xl text-center py-3 font-bold opacity-80">
            Tools & Skills
          </h3>
          <article>
            <h3 className="text-lg text-center py-1 font-bold">Frontend:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.frontend.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-lg text-center py-1 font-bold">Backend:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.backend.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-lg text-center py-1 font-bold">Languages:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.laguages.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-lg text-center py-1 font-bold">Mobile:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.mobile.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-lg text-center py-1 font-bold">Other:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.other.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
