import Proejct_card from "@/components/Project-card";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Abhiram",
    description: "Projects",
    openGraph : {
        title: "Projects",
    }
}
function Projects() {
  const Projects_data = [
    {
      project_name: "ShopNest",
      logo: "/shopnest.png",
      description:
        "A E-commerce Platform where user can buy vast varity of products",
      technologies: [
        "React",
        "Node",
        "Express",
        "NeonDB",
        "AWS",
        "Firebase AUTH",
        "TailwindCSS",
      ],
      website: "https://shopnnest.netlify.app/",
    },
    {
      project_name: "Stickywall",
      logo: "./stickywall.svg",
      description:
        "A Productivy management appplication, where user can manage your tasks",
      technologies: ["Next.JS", "TailwindCSS", "Node", "Express", "MongoDB"],
      website: "",
    },
    {
      project_name: "E-Prathibha",

      description: "A UPSC Exam Preaparation Web App, where user can practice for UPSC exam",
      technologies: ["React", "Bootstrap", "Redux","RestAPI"],
      website: "",
    },
    {
      project_name: "SecureAUTH",

      description: "A secure Authentication system, featuring Signup and Signin with dynamic and responsive outputs.",
      technologies: ["Node", "Express", "EJS", "JWT", "MongoDB"],
      website: "",
    },
    {
      project_name: "QR code Generator",
      
      description: "A QR Code Generator, where user can generate QR codes for any URL/Text",
      technologies: ["React", "Javascript", "TailwindCSS"],
      website: "",
    }
  ];
  return (
    <main>
      <div>
        <h2 className="font-sans text-2xl mb-6 font-semibold">Projects 🚀</h2>
        <div>
          {Projects_data.map((project, index) => (
            <Proejct_card
              key={index}
              title={project.project_name}
              logo={project.logo}
              description={project.description}
              technologies={project.technologies}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
