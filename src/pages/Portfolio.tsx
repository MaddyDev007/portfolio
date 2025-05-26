import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ResumeSection from '@/components/ResumeSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import MouseTracker from '@/components/MouseTracker';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const sections = {
    hero: <HeroSection onSectionChange={handleSectionChange} />,
    projects: <ProjectsSection />,
    skills: <SkillsSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden relative">
      <ParticlesBackground />
      <MouseTracker />
      
      {/* Animated gradient blur backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            {sections[currentSection as keyof typeof sections]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Portfolio;
