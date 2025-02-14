import TransitionPage from "@/components/transition-page";
import { projects } from "../../../../data";
import ProjectItem from "@/components/project-item";

function ProjectsPage() {
  return (
    <>
      <TransitionPage />
      <main className="bg-basicBackground min-h-screen pb-24">
        <h3 className="text-2xl font-bold text-primary text-center py-4">
          Projects
        </h3>
        <section className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {projects.map((project) => (
            <ProjectItem
              name={project.name}
              description={project.description}
              image={project.image}
              repo={project.repo}
              demo={project.demo}
              key={project.name}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default ProjectsPage;
