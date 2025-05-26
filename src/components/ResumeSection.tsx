
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.2
      }
    },
  };

  return (
    <motion.section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 text-center relative z-10"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h2 
        className="pb-2 text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        variants={itemVariants}
      >
        My Resume
      </motion.h2>
      <motion.p 
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
        variants={itemVariants}
      >
        Interested in learning more about my professional experience and skills? Download my resume to get a comprehensive overview.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <a
            href="/Mathavan.pdf" // Make sure to place your resume.pdf in the public folder
            download="Mathavan_Resume.pdf" // Suggested filename for download
            target="_blank" // Opens in new tab, helpful if browser tries to display PDF
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </motion.div>
      <motion.p 
        className="mt-8 text-sm text-gray-500"
        variants={itemVariants}
      >
        (PDF Format)
      </motion.p>
    </motion.section>
  );
};

export default ResumeSection;
