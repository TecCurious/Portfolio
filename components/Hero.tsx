import React from 'react';
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import Image from 'next/image';

interface SocialLink {
  Icon: React.ElementType;
  href: string;
  label: string;
  download?: boolean;
}

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX: MotionValue = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY: MotionValue = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig: { damping: number; stiffness: number } = { damping: 15, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = (): void => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks: SocialLink[] = [
    { Icon: Github, href: "https://github.com/TecCurious", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/prakash-kumar-963878257/", label: "LinkedIn" },
    { Icon: FileText, href: "/resume.pdf", label: "Download Resume", download: true }
  ];

  return (
    <motion.section
      className="min-h-screen pt-20 flex items-center  bg-gradient-to-t from-gray-950 to-gray-900"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Enhanced 3D Profile Image Container */}
          <motion.div
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: 'preserve-3d',
              rotateX: springRotateX,
              rotateY: springRotateY
            }}
          >
            {/* Circular container with fixed aspect ratio */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Glow effects */}
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse blur-xl opacity-50" /> */}
              {/* <div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-md" 
                style={{ transform: 'translateZ(-20px)' }} 
              /> */}
              
              {/* Profile image container with mask */}
              <div 
                className="relative w-full h-full rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gray-900"
                style={{ transform: 'translateZ(20px)' }}
              >
                {/* Image container with absolute positioning for perfect circle */}
                <div className="absolute inset-0 shadow-md">
                  <Image
                    src="/profile-re.png"
                    alt="Profile Picture"
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover bg-gradient-to-r from-blue-700 to-purple-800 "
                    priority
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                
                {/* Border overlay */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30" />
              </div>
            </div>
          </motion.div>

          <div className="text-center md:text-left max-w-lg">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4"
            >
              Prakash Kumar
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Full Stack Developer | Software Development  Enthusiast | Final Year Student
            </motion.h2>
{/* 
            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              
            </motion.p> */}
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 mb-6 text-gray-300"
            >
              <motion.p 
                className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>pr271167@gmail.com</span>
              </motion.p>
              <motion.p 
                className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5" />
                <span>Ghaziabad, India</span>
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start"
            >
              {socialLinks.map(({ Icon, href, label, download }) => (
                <motion.a
                  key={label}
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-full hover:bg-gray-700 transition-all duration-300
                           hover:shadow-lg hover:shadow-blue-500/20 relative group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 text-blue-400" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;