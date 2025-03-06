import React from "react";
import { Metadata } from "next";
import ExperienceItem from "@/components/experience_comp";
import Separator from "@/components/Seperator";
import EducationItem from "@/components/education-comp"

export const metadata: Metadata = {
	title: "Resume |Abhiram",
	description:
		"A summary of Abhiram's corporate contributions, skills, and experience as a Full-Stack Developer, including work with GlobalLogic and 10000 Coders",
	openGraph: {
   
		title: "Abhiram's Resume",
		description:
			"Detailed resume of Abhiram, Full-Stack Developer, with work experience, projects and educational background.",
		url: "https://abhiramsriramoji.vercel.app/resume",
		siteName: "Abhiram's Portfolio",
		images: [
			{
				url: "/resume_preview.png",
				height: 630,
				alt: "Abhiram's Resume",
			},
		],
		type: "website",
	}
};
function ResumePage() {
  const resumeData = {
    workExerience: [
      {
        company: "GlobalLogic Technologies",
        role: "Analyst",
        duration: "July 2024 - Present",
        website: "https://www.globallogic.com/",
        logo: "/GlLogo.png",
        location: "Hyderabad",
        worktype: "Full time",
        technologies: ["Excel", "SQL"],
        responsibilities: [
          "Delivered Comprhensive data to support the development of machine learning models an AI technologies ",
          "Designed and implemented detailed quality assurance processes, ensuring accuracy, consistency and compliance with project guidelines",
          "Maintained high standards of data accuracy, resulting in improved model performance and successful project outcomes.",
        ],
      },
      {
        company: "10kcoders",
        role: "Frontend Developer Intern",
        duration: "Aug 2023 - July 2024",
        website: "https://www.10000coders.in/",
        logo: "/logo_coders.png",
        location: "Hyderabad",
        worktype: "Internship",
        technologies: [
          "React",
          "Next.JS",
          "TailwindCSS",
          "Node",
          "Express",
          "MongoDB",
          "REST API",
        ],
        responsibilities: [
          "Implemented front-end frameworks such as React to create interactive user interfaces. ",
          "Optimized website performance by minimizing load times and improving overall responsiveness.",
          "Integrated RESTful APIs to fetch data from server-side systems and display it on the UI.",
          "Created reusable components and libraries to streamline development processes.",
        ],
      },
    ],
    education: [
      {
        degree: "B.Tech, Computer Science",
        institution: "Siddahrtha institute of technology and science",
        duration: "2019 - 2023",
        location: "Hyderabad, India",
      },
      {
        degree: "Intermediate",
        institution: "Vasishta junior college",
        duration: "2017 - 2019",
        location: "Kamareddy, India",
      },
      {
        degree: "SSC",
        institution: "Z P Gunj High School Kamareddy",
        duration: "2017",
        location: "Kamareddy, India",
      },
    ],
  };
  return (
    <section>
      <div>
        <h2 className="text-xl tracking-tight font-semibold mb-4 font-serif">My Resume 📝</h2>
      </div>

      <div>
        <h2 className="text-xl tracking-tight font-semibold mb-4 font-sans">Work Experinece</h2>
        {resumeData.workExerience.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </div>

      <Separator/>

      <div>
        <h2 className="text-xl tracking-tight font-semibold mb-4 font-sans">Education</h2>
        {resumeData.education.map((edu, index) => (
          <EducationItem key={index} edu={edu} />
        ))}
      </div>
    </section>
  );
}

export default ResumePage;
