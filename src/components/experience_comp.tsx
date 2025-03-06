import Image from "next/image";
import React, { FC } from "react";
import Chip from "./Chip";
interface workExperienceProps {
  job: {
    company: string;
    role: string;
    duration: string;
    website: string;
    logo: string;
    location: string;
    worktype: string;
    technologies?: string[];
    responsibilities: string[];
  };
}
const ExperienceItem: FC<workExperienceProps> = ({ job }) => {
  return (
    <div>
      <h3 className="inline-flex items-center gap-1.5 font-semibold text-lg underline mb-2">
        <Image alt={job.company} src={job.logo} height={20} width={20} />
        <a target="_blank" rel="noopener noreferrer" href={job.website}>{job.role}</a>{" "}
      </h3>
      <p className="mb-4 dark:text-white/50 text-sm">
        {job.company} | {job.duration} | {job.location} | {job.worktype}
      </p>
      {job.technologies && (
        <div className="flex  flex-wrap gap-2 mb-4">
          {job.technologies.map((tech: string, index: number) => (
            <Chip key={index} tech={tech} />
          ))}
        </div>
      )}
      <ul className="list-disc list-inside text-justify mb-6">
        {job.responsibilities.map((responiblities: string, rIndex) => (
          <li key={rIndex} className="mb-2 marker:text-white/70">{responiblities}</li>
        ))}
      </ul>
    </div>
  );
};
export default ExperienceItem;
