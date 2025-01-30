import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import { tools } from "../../../../data";
import ToolItem from "@/components/tool-item";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="pt-5 pb-24 text-primary bg-basicBackground">
        <section>
          <h3 className="text-3xl text-center py-3 font-bold opacity-80">
            Tools & Skills
          </h3>
          <article>
            <h3 className="text-xl text-center py-1 font-bold">Frontend:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.frontend.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold">Backend:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.backend.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold">Languages:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.laguages.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold">Mobile:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.mobile.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold">Other:</h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.other.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
        </section>
        <section className="text-primary mt-10">
          <h3 className="text-2xl text-center py-2 font-bold opacity-80">
            Who am I?
          </h3>
          <Image
            className="mx-auto"
            alt="about-photo"
            src="/about-avatar.png"
            width={200}
            height={200}
          />
          <p className="text-center p-4 opacity-80 font-semibold">
            My name is{" "}
            <span className="font-bold text-cta">Leandro Fuerte</span>. I am a{" "}
            <span className="font-bold text-cta">Fullstack Developer</span> with
            a specialized focus on{" "}
            <span className="font-bold text-cta">frontend development</span>.
            <br></br> I have a strong passion for creating{" "}
            <span className="font-bold text-cta">
              intuitive and user-friendly interfaces{" "}
            </span>
            that enhance the{" "}
            <span className="font-bold text-cta">user experience</span>. My goal
            is to continuously learn and innovate in order to build{" "}
            <span className="font-bold text-cta">efficient and scalable</span>{" "}
            applications that make a difference.
          </p>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
