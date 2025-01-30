import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import { tools } from "../../../../data";
import ToolItem from "@/components/tool-item";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="pt-5 pb-24 text-primary">
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
          <p className="text-center p-2 opacity-80">I am a Fullstack Developer with a specialized focus on frontend development. I have a strong passion for creating intuitive, user-friendly interfaces that enhance the user experience. With a solid foundation in both frontend and backend technologies, I have the versatility to tackle diverse project requirements and deliver seamless, high-quality solutions. My goal is to continuously learn and innovate in order to build efficient and scalable applications that make a difference.</p>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
