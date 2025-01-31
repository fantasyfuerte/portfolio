import TransitionPage from "@/components/transition-page";
import { projects } from "../../../../data";

function ProjectsPage() {
  return (
    <>
      <TransitionPage />
      <main className="bg-basicBackground min-h-screen">
        <div>
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-4 p-4 object-contain"
            >
              <img
                src={project.image}
                alt={project.name}
                width={250}
                height={250}
                className=""
              />
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectsPage;
