import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import { tools } from "../../../../data";
import ToolItem from "@/components/tool-item";

function AboutPage() {
  return (
    <>
      <TransitionPage />
      <main className="pt-5 pb-24">
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
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.frontend.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold opacity-80">
              Backend:
            </h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.backend.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold opacity-80">
              Mobile:
            </h3>
            <div className="grid grid-cols-4 gap-2 py-2 px-3 md:px-64 xl:px-96">
              {tools.mobile.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-xl text-center py-1 font-bold opacity-80">
              Other:
            </h3>
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
