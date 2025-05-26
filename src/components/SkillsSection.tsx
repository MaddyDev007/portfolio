
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Three.js', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'GraphQL', level: 65 },
  { name: 'UI/UX', level: 80 },
];

const SkillsSection = () => {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Skills
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Technical expertise and competencies I've developed throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-white font-medium">{skill.name}</span>
                    <span className="text-lg text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.4 + index * 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-8">
              {skills.slice(4).map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-white font-medium">{skill.name}</span>
                    <span className="text-lg text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.4 + (index + 4) * 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['AWS', 'Docker', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redux', 'Next.js'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)"
                }}
                className="px-6 py-3 bg-white/10 rounded-full text-white font-medium border border-white/20 backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
