import React, { useRef } from "react";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { Float, Text3D, OrbitControls } from "@react-three/drei";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Mesh } from "three"; // Import Mesh type for useRef

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null!); // Typed useRef

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh
        ref={meshRef}
        position={[2.5, 0.2, 0]} // Adjusted position
        castShadow // Cube casts shadows
        receiveShadow // Cube can receive shadows
      >
        <boxGeometry args={[0.9, 0.9, 0.9]} /> {/* Slightly smaller cube */}
        <meshStandardMaterial
          color="#A78BFA" // Lighter, distinct purple
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const handleConnectClick = () => {
    onSectionChange('contact');
  };

  return (
    <div className="relative md:h-screen md:overflow-hidden">
      <div className="-z-10 absolute hidden md:block  -translate-y-40 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-full h-full">

        <Canvas
          shadows // Enable shadows in the scene
          camera={{ position: [10, 1.5, 7], fov: 60 }} // Adjusted camera position and FOV
        >
          <ambientLight intensity={0.5} /> {/* Adjusted ambient light */}
          <directionalLight // Added directional light for better definition
            position={[3, 5, 4]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight // Main interactive light
            position={[-3, 3, -4]}
            intensity={1.8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Float
            speed={3} // Adjusted float animation
            rotationIntensity={1}
            floatIntensity={1.2}
          >
            <Text3D
              font="/fonts/Inter_Bold.json"
              size={0.75} // Slightly adjusted size
              height={0.15} // Thinner text for subtlety
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.025} // Subtle bevel
              bevelSize={0.015}
              bevelOffset={0}
              bevelSegments={5}
              position={[-2.3, 0.3, 0]} // Adjusted position
              rotation={[0, 0.1, 0]} // Slight rotation for dynamic look
              castShadow // Text casts shadows
              receiveShadow // Text can receive shadows
            >
              Portfolio
              <meshStandardMaterial
                color="#8B5CF6"
                metalness={0.6}
                roughness={0.17}
                envMapIntensity={1.2}
              />
            </Text3D>
          </Float>
          <FloatingCube />
          <OrbitControls
            enableZoom={false}
            enablePan={false} // Disable panning
            minPolarAngle={Math.PI / 3.5} // Limit vertical rotation
            maxPolarAngle={Math.PI / 1.9} // Limit vertical rotation
            minAzimuthAngle={-Math.PI / 5} // Limit horizontal rotation
            maxAzimuthAngle={Math.PI / 5}
            target={[0, 0.5, 0]} // Pan target slightly up
          />
        </Canvas>

      </div>

      <div className="min-h-screen flex flex-col justify-center">
        <div className=" mx-auto px-10 py-20 md:py-32 w-full">
          {" "}
          {/* Adjusted padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="flex justify-center w-full" // Increased height for medium screens
            >
              <img className="scale-75" src="./face1.png" alt="Mathavan" />
            </motion.div>

            {/* Left: Text content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className=" text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  Mathavan
                </h1>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-2xl md:text-3xl mt-4 text-gray-300">
                  Full Stack Developer
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="mt-6 md:text-xl text-gray-400">
                  I craft interactive experiences and digital solutions that
                  solve real-world problems. Passionate about creating
                  beautiful, functional software.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-8">
                <motion.button
                  onClick={handleConnectClick}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium text-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Connect
                </motion.button>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="mt-10 flex items-center space-x-6"
              >
                <motion.a
                  href="https://github.com/MaddyDev007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:drop-shadow-glow hover:text-white transition-colors duration-300"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://instagram.com/_red__ruby"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5}}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:drop-shadow-glow hover:text-white transition-colors duration-300"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mathavan-s-38555b367"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400  hover:drop-shadow-glow hover:text-white  transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
