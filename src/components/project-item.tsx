import Image from "next/image";
import Link from "next/link";
import { GrDeploy } from "react-icons/gr";

interface Props {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  repo: string;
  demo?: string;
  bg: boolean;
  technologies: string[];
}

function ProjectItem({
  name,
  subtitle,
  description,
  image,
  repo,
  demo,
  bg,
  technologies,
}: Props) {
  return (
    <article
      className={`flex max-h-max flex-wrap items-center my-10 py-8 px-2 md:px-8 ${
        bg && "bg-middleColor"
      }`}
    >
      <div className="basis-7/12 md:basis-6/12 flex-grow px-2 md:pl-5 md:pr-10 mb-7 ">
        <h5 className="text-2xl min-w-max md:text-4xl text-primary/90">
          {name}: <br></br>
          <strong className="text-primary">{subtitle}</strong>
        </h5>
        <p className="text-md font-semibold mt-8 text-pretty first-letter:ml-2 text-primary/80">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-[12px] font-bold rounded-full ${
                bg
                  ? "bg-basicBackground/90 text-primary/80"
                  : "bg-primary/70 text-basicBackground"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="pt-6 flex gap-2">
          <Link
            href={repo}
            target="_blank"
            className="flex gap-2 items-center shadow bg-white px-2 py-1 rounded-xl"
          >
            <img src="/icons/github.svg" alt="github" width={25} height={25} />
            <p className="font-semibold">Repo</p>
          </Link>
          {demo && (
            <Link
              href={demo}
              target="_blank"
              className="shadow flex gap-2 items-center bg-cta px-2 py-1 rounded-xl text-basicBackground"
            >
              <GrDeploy size={22} className="rotate-6" />
              <p className="font-semibold">Demo</p>
            </Link>
          )}
        </div>
      </div>
      <Link
        href={demo ? demo : repo}
        target="_blank"
        className="basis-6/12 flex-grow md:h-96 px-2 md:p-5 pb-0"
      >
        <Image
          alt="imagen del articulo"
          src={image}
          className={`object-cover w-full h-full rounded-xl shadow-lg shadow-primary/55`}
          width={720}
          height={360}
        />
      </Link>
    </article>
  );
}

export default ProjectItem;
