interface Props {
  name: string;
  description: string;
  image: string;
  repo: string;
  demo: string;
}

function ProjectItem({ name, description, image, repo, demo }: Props) {
  return <article>ProjectItem</article>;
}

export default ProjectItem;
