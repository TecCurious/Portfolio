import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiDrizzle,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

interface Skill {
  name: string;
  level: number;
}

interface TechStack {
  name: string;
  Icon: React.ElementType;
  color: string;
}

const Skills: React.FC = () => {
  const developmentSkills: Skill[] = [
    { name: "Full-Stack Web Development", level: 90 },
    { name: "Java", level: 85 },
    { name: "Data Structures & Algorithms", level: 88 },
  ];

  const techStack: TechStack[] = [
    { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
    { name: "React.js", Icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", Icon: FaNode, color: "text-green-500" },
    { name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-400" },
    { name: "Drizzle ORM", Icon: SiDrizzle, color: "text-yellow-400" },
    { name: "GitHub", Icon: FaGithub, color: "text-gray-300" },
    { name: "REST APIs", Icon: TbApi, color: "text-purple-400" },
    { name: "Postman", Icon: SiPostman, color: "text-orange-500" },
  ];

  const achievements = [
    "Finalist in the GFG Hackathon's HackFest (2024)",
    "2nd Place in College-organized DSA-based Coding Competition",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
            <div className="flex justify-center mb-12">
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-white">
              Skills
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Development Skills Card */}
          <motion.div
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse" />
            <div className="relative bg-gray-900/90 rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
              <div className="space-y-4">
                {developmentSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 animate-pulse" />
            <div className="relative bg-gray-900/90 rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <tech.Icon
                      className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-xs text-gray-300 text-center group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse" />
            <div className="relative bg-gray-900/90 rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="min-w-4 h-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    </div>
                    <p className="flex-1">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
