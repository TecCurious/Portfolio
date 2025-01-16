import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    }
  };

  const experiences = [
    {
      title: "Full-Stack Web Developer Intern",
      company: "Gennext IT, Noida",
      period: "Sep 2024 – Dec 2024",
      responsibilities: [
        "Built full-stack applications using Next.js, React.js, Node.js, and TypeScript",
        "Managed databases with PostgreSQL and MongoDB",
        "Developed RESTful APIs and integrated third-party services",
        "Used Git for version control and collaborated with teams"
      ],
      tags: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 relative overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br "
        animate={{
        //   background: [
        //     "linear-gradient(to bottom right, rgba(30,64,175,0.2), transparent, rgba(147,51,179,0.2))",
        //     "linear-gradient(to bottom right, rgba(147,51,179,0.2), transparent, rgba(30,64,175,0.2))"
        //   ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Line */}
              <motion.div
                className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.8 }}
              />

              {/* Timeline Dot */}
              <motion.div 
                className="absolute w-4 h-4 md:w-5 md:h-5 -left-[8px] md:-left-[10px] top-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0px rgba(59, 130, 246, 0.5)",
                      "0 0 0 10px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
              </motion.div>

              {/* Experience Card */}
              <motion.div 
                className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700/50"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                  backgroundColor: "rgba(31, 41, 55, 0.9)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {experience.title}
                  </h3>
                  <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-1 rounded-full text-sm text-blue-200">
                    {experience.period}
                  </span>
                </div>

                <p className="text-lg text-gray-300 mb-4">
                  {experience.company}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-3 text-gray-300 mb-6">
                  {experience.responsibilities.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="mr-2 mt-1.5">
                        <motion.svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ rotate: -90, opacity: 0 }}
                          whileInView={{ rotate: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {experience.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-200"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;