import { socialLinks as links } from "../../data";

export default function SocialLinks() {
  return (
    <article>
      <ul className="flex gap-2 justify-center">
        {links.map((link, index) => (
          <li key={index} className="hover:opacity-65 transition-opacity">
            <a href={link.href} target="_blank">
              <img alt={link.name} width={20} height={20} src={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
