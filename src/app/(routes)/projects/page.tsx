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
        <section className="-mt-8">
          {projects.map((project, index) => (
            <ProjectItem
              bg={index % 2 !== 0}
              name={project.name}
              subtitle={project.subtitle}
              description={project.description}
              image={project.image}
              repo={project.repo}
              demo={project.demo}
              key={project.name}
              technologies={project.technologies}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default ProjectsPage;
