"use client"

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Footer from '../../components/Footer';

// const fadeInUp = {
//   initial: {
//     y: 60,
//     opacity: 0
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };


export default function Home() {
  return (
    <div
      className="min-h-screen bg-black"
      // initial="initial"
      // animate="animate"
    >
      <Navbar />
      <main >
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer/>
      </main>
    </div>
  );
}
