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
}

function ProjectItem({
  name,
  subtitle,
  description,
  image,
  repo,
  demo,
  bg,
}: Props) {
  return (
    <article
      className={`flex max-h-max flex-wrap items-center my-16 py-8 px-2 md:px-8 ${
        bg && "bg-middleColor"
      }`}
    >
      <div className="basis-6/12 flex-grow px-2 md:pl-5 md:pr-10 mb-7 ">
        <h5 className="text-2xl min-w-max md:text-5xl text-primary/90">
          {name}: <br></br>
          <strong className="text-primary">{subtitle}</strong>
        </h5>
        <p className="text-md font-semibold mt-8 text-pretty first-letter:ml-2 text-primary/80">
          {description}
        </p>
      </div>
      <Link
        href={demo ? demo : repo}
        target="_blank"
        className="basis-6/12 flex-grow md:h-96 px-2 md:p-5 pb-0"
      >
        <Image
          alt="imagen del articulo"
          src={image}
          className={`object-cover w-full h-full rounded-xl`}
          width={720}
          height={360}
        />
      </Link>
    </article>
  );
}

export default ProjectItem;
