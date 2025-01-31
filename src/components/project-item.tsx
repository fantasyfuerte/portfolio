import Image from "next/image";
import Link from "next/link";
import { GrDeploy } from "react-icons/gr";

interface Props {
  name: string;
  description: string;
  image: string;
  repo: string;
  demo?: string;
}

function ProjectItem({ name, description, image, repo, demo }: Props) {
  return (
    <article className="bg-secondary/80 rounded-xl mx-4 p-4 text-primary h-fit">
      <Image
        src={image}
        alt={name}
        className="w-full rounded-xl mb-2"
        width={300}
        height={300}
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm opacity-80 font-medium">{description}</p>
      <div className="pt-4  flex gap-2 mt-auto">
        <Link
          href={repo}
          className="flex gap-2 items-center bg-basicBackground px-2 py-1 rounded-xl"
        >
          <img src="/icons/github.svg" alt="github" width={25} height={25} />
          <p className="font-semibold">Repo</p>
        </Link>
        {demo && (
          <Link
            href={demo}
            className="flex gap-2 items-center bg-cta px-2 py-1 rounded-xl text-basicBackground"
          >
            <GrDeploy size={22} className="rotate-6" />
            <p className="font-semibold">Demo</p>
          </Link>
        )}
      </div>
    </article>
  );
}

export default ProjectItem;
