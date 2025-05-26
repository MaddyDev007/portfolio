
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Web app that uses machine learning to generate various types of content.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Python', 'TensorFlow', 'React']
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    description: 'Interactive dashboard for tracking investments and financial analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Vue.js', 'D3.js', 'Firebase']
  },
  {
    id: 4,
    title: 'Social Network App',
    description: 'Mobile-first social platform with real-time messaging and content sharing.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['React Native', 'GraphQL', 'AWS']
  }
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent pb-2 bg-gradient-to-r from-purple-400 to-blue-500">
            My Projects
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Selected works showcasing my skills and experience in creating digital solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 8px 10px -6px rgba(139, 92, 246, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-lg border border-white/20"
            >
              <div className="relative overflow-hidden">
                <div className="hover:scale-105  duration-500 hover:shadow-inner relative aspect-video overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className=" absolute inset-0 hover:shadow-inner duration-500 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-3 py-1 text-sm bg-white/10 rounded-full text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40"
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
