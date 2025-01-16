// components/Footer.tsx
"use client"

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/TecCurious',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/prakash-kumar-963878257/',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:pr271167@gmail.com',
    },
    // {
    //   name: 'Resume',
    //   icon: <FileText className="w-5 h-5" />,
    //   href: '/path-to-your-resume.pdf',
    // },
  ];

  return (
    <motion.footer 
      className="relative mt-20 bg-gradient-to-t from-gray-950 to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Praksah Kumar
            </h3>
            <p className="text-gray-400 max-w-xs">
              Full Stack Developer passionate about Problem solving and creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Experience', 'Skills', 'Education'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-300">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300
                           hover:shadow-lg hover:shadow-blue-500/20 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} Prakash Kumar. All rights reserved.
            </motion.p>
            
            <motion.p 
              className="text-gray-400 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using Next.js
            </motion.p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;