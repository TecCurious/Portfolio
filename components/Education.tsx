import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  // const { scrollYProgress } = useScroll();
  
  // Enhanced container variants with more dynamic animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Enhanced item variants with more sophisticated animations
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3
      }
    }
  };

  const educationData = [
    {
      title: "Bachelor Of Computer Application",
      institution: "CCS University, Meerut",
      period: "Jul 2022 - Aug 2025",
      skills: ["Computer Science", "Programming", "Software Development"]
    },
    {
      title: "XII (UP Board)",
      institution: "M.M.H Inter College Ghaziabad",
      period: "2022",
      skills: ["Mathematics", "Physics", "Computer Science"]
    }
  ];

  return (
    <section id="education" className="py-8 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br "
        animate={{
        //   background: [
        //     "linear-gradient(to bottom right, rgba(30,64,175,0.3), transparent, rgba(147,51,179,0.3))",
        //     "linear-gradient(to bottom right, rgba(147,51,179,0.3), transparent, rgba(30,64,175,0.3))"
        //   ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Educational Journey
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 md:space-y-10"
        >
          {educationData.map((item, index) => (
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
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.div>

              {/* Education Card */}
              <motion.div 
                className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl hover:bg-gray-800/90 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                }}
              >
                {/* Period Badge */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-1 rounded-full text-sm text-blue-200">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-300 text-lg mb-4">
                  {item.institution}
                </p>

                {/* Skills Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.skills.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-200"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                    >
                      {skill}
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

export default Education;