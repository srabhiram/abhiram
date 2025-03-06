import React, { FC } from "react";

interface EducationItemProps {
  edu: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
  };
}
const EducationItem: FC<EducationItemProps> = ({ edu }) => {
  return (
    <section>
      <h3 className="inline-flex items-center gap-1.5 font-semibold text-lg mb-">
        <span>{edu.institution}</span>
      </h3>
      <p className="mb-4 dark:text-white/50 text-sm">
        {edu.degree} | {edu.location} | {edu.duration}
      </p>
    </section>
  );
};

export default EducationItem;
