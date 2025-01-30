import { socialLinks } from "../../data";

function ContactMe() {
  return (
    <article className="bg-secondary/60 m-5 p-4 rounded-2xl" id="contact">
      <h3 className="text-2xl text-center pb-2 mb-2 font-bold opacity-80">
        Contact Me
      </h3>
      <div className="flex gap-4 flex-wrap justify-center">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.name}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            className="basis-[40%]"
          >
            <img
              alt={socialLink.name}
              src={socialLink.icon}
              width={50}
              height={50}
              className="mx-auto"
            />
          </a>
        ))}
      </div>
    </article>
  );
}

export default ContactMe;
