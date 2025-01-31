import TransitionPage from "@/components/transition-page";
import { projects } from "../../../../data";
import ProjectItem from "@/components/project-item";

function ProjectsPage() {
  return (
    <>
      <TransitionPage />
      <main className="bg-basicBackground min-h-screen">
        <section>
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
