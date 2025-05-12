import React from "react";
import Image from "next/image";
import Separator from "./Seperator";
import Chip from "./Chip";

interface Project_cardProps {
  title: string;
  logo?: string;
  description: string;
  technologies: string[];
  website?: string;
}
function Proejct_card({
  title,
  logo,
  description,
  technologies,
  website,
}: Project_cardProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2 text-xl font-mono tracking-tight">
        {logo ? (
          <Image
            alt={title}
            src={logo}
            height={20}
            width={20}
            className="mr-1"
          />
        ) : (
          <span className="mb-0 mr-1">{"->"}</span>
        )}
        <a href={website} className="underline font-semibold">{title}</a>
      </div>
      <p className="mb-4 dark:text-white/50 text-sm">{description}</p>
      <div className="flex  flex-wrap gap-2">
        {technologies.map((tech: string) => (
          <Chip key={tech} tech={tech} />
        ))}
      </div>
      <Separator />
    </div>
  );
}

export default Proejct_card;
