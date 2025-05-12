import Proejct_card from "@/components/Project-card";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abhiram",
  description:
    "Explore Abhiram's projects, including frontend and fullstack web apps",
  openGraph: {
    title: "Abhiram's Projects",
    description:
      "Discover the latest projects built by Abhiram, including frontend and fullstack web apps.",
    url: "https://abhiramsriramoji.vercel.app/projects",
    siteName: "Abhiram's Portfolio",
    images: [
      {
        url: "/project_preview.png",
        height: 630,
        alt: "Abhiram's Projects",
      },
    ],
    type: "website",
  },
};
function Projects() {
  const Projects_data = [
    {
       project_name: "SRS News(400+ active users)",
      logo: "/srs-news.png",
      description:
        "A Regional News blog",
      technologies: [
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "Cloudinary",
        "JWT",
        "Redux"
      ],
      website: "https://srs-news.vercel.app/",
    },
    {
       project_name: "json-purify",
      logo: "/json.webp",
      description:
        "A npm package to remove null values empty strings and empty array/objects.",
      technologies: [
        "Node.js",
        "TypeScript",
        "npm package development",
      ],
      website: "https://www.npmjs.com/package/json-purify",
    },
    {
      project_name: "ShopNest",
      logo: "/shopnest.png",
      description:
        "A E-commerce Platform where user can buy vast varity of products",
      technologies: [
        "React.js",
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
      website: "https://stickywalls.vercel.app/",
    },
    {
      project_name: "E-Prathibha",

      description:
        "A UPSC Exam Preaparation Web App, where user can practice for UPSC exam",
      technologies: ["React", "Bootstrap", "Redux", "RestAPI"],
      website: "https://github.com/srabhiram/e-prathibha-app",
    },
    {
      project_name: "SecureAUTH",

      description:
        "A secure Authentication system, featuring Signup and Signin with dynamic and responsive outputs.",
      technologies: ["Node", "Express", "EJS", "JWT", "MongoDB"],
      website: "https://github.com/srabhiram/SecureAuth",
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
