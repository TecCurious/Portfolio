import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Define interfaces for type safety
interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string; // Optional since some projects might not have a github link
  live?: string; // Optional since some projects might not have a live demo
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      id="projects"
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/90 to-purple-900/90 p-1 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="relative h-full rounded-lg bg-gray-900 p-4 sm:p-6">
        {/* Project Image */}
        <div className="relative mb-4 h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden rounded-lg">
          <img
            src={project.image || "/api/placeholder/400/320"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Project Content */}
        <h3 className="mb-2 text-lg sm:text-xl font-bold text-white line-clamp-1">
          {project.title}
        </h3>
        <p className="mb-4 text-sm sm:text-base text-gray-300 line-clamp-3 sm:line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-indigo-500/20 px-2 py-1 text-xs sm:text-sm text-indigo-200 backdrop-blur-sm transition-colors duration-300 hover:bg-indigo-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 sm:mt-6 flex gap-4 text-sm sm:text-base">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
            >
              <ExternalLink size={18} className="sm:w-5 sm:h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Btour - Travel Expense Splitting",
      description:
        "End-to-end full-stack web application for group expense tracking. Users can register, create or join teams, manage expenses, and view expense history.",
      image: "/btour.png",
      techStack: [
        "Next.js",
        "React.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
      ],
      github: "https://github.com/TecCurious/Btour",
      live: "https://btour.vercel.app/",
    },
    {
      title: "Learners.com",
      description:
        "Full-stack web app for managing interns. Interns can register, track their learning, and download certificates. Admins can track all students, verify interns, and generate certificates.",
      image: "/interntrack.png",
      techStack: ["React.js", "JavaScript", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/TecCurious/Learners.com",
      // live: "#",
    },
    {
      title: "Get me a chai",
      description:
        "Web app for give money online to their favorite creator and artist to appreciate their work and creators can register and create their account.",
      image: "chai.png",
      techStack: ["JavaScript", "Next.js", "MongoDB", "Razorpay",  ],
      github: "https://github.com/TecCurious/Get-me_a_Chai",
      live: "https://get-me-a-chai-lac.vercel.app/",
    },
  ];

  return (
    <section className="py-12 sm:py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-12">
          <motion.div 
            className="relative"
            // variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-white">
              Projects
            </h2>
            <motion.div
              className="absolute h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-full left-0 -bottom-2"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
