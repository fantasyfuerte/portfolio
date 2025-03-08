import { socialLinks } from "../../data";

function ContactMe() {
  return (
    <article
      className="bg-middleColor/60 m-5 p-4 pb-6 rounded-2xl max-w-80 mx-auto"
      id="contact"
    >
      <h3 className="text-2xl text-center pb-2 mb-2 font-bold opacity-80">
        Contact Me
      </h3>
      <div className="flex flex-col gap-2 pl-10">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.name}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            className="flex gap-2"
          >
            <img
              alt={socialLink.name}
              src={socialLink.icon}
              width={30}
              height={30}
              className=""
            />
            <h4 className="text-primary font-semibold text-2xl -mb-1">
              {socialLink.name}
            </h4>
          </a>
        ))}
      </div>
    </article>
  );
}

export default ContactMe;
