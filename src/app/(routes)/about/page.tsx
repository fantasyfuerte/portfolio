import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import { tools } from "../../../../data";
import ToolItem from "@/components/tool-item";
import Link from "next/link";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="pt-5 pb-24 text-primary bg-basicBackground">
        <section className="flex flex-col items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-middleColor shadow-md shadow-secondary">
            <Image
              src="/about.png"
              alt="avatar"
              width={300}
              height={300}
              className="object-cover scale-125 -ml-[9px]"
            />
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-primary">
              Hello, I&apos;m Fuerte
            </h2>
            <div className="h-1 w-20 md:w-32 mx-auto mb-6 bg-cta"></div>
            <div className="mb-3 mx-4 text-lg md:text-lg font-semibold italic text-primary/80">
              &quot;Turning ideas into code, and code into experiences.&quot;
            </div>
            <p className="mb-6 mx-2 px-3 md:px-12 xl:px-20 text-[16px] lg:mx-72 text-secondary font-medium">
              Every project is a step toward creating something impactful
              because great design isn&apos;t just seen, it&apos;s felt.
            </p>
            <Link
              href="mailto:leandrofuerte75@gmail.com?subject=Hello%2C%20I%20am%20eager%20to%20join%20forces%20with%20you%21"
              className="px-4 py-2 rounded-full text-basicBackground text-lg bg-cta hover:bg-cta/80 active:bg-cta/70 transition-opacity font-semibold"
            >
              Get in touch
            </Link>
          </div>
        </section>

        <section className="mt-14">
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
