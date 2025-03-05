import React from "react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
function Footer() {
  const footer = [
    {
      icon: EnvelopeSimple,
      link: "mailto:sriramoji.abhiram@gmail.com",
      name: "x",
    },
    {
      icon: XLogo,
      link: "https://x.com/abhisriramojii",
      name: "X",
    },
    {
      icon: GithubLogo,
      link: "https://github.com/srabhiram",
      name: "GitHub",
    },
    {
      icon: LinkedinLogo,
      link: "https://www.linkedin.com/in/abhiramsr/",
      name: "Linkedin",
    },
  ];
  return (
    <footer>
      <ul className="flex justify-center items-center gap-2 text-2xl mt-4 sm:mt-8">
        {footer.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="text-white/75 p-3 text-2xl  hover:text-white hover:bg-white/10 rounded-full"
          >
            <item.icon />
          </a>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
