"use client";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

export default function HeroProjects() {
  return (
    <motion.section
      className="relative w-full h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-card to-secondary text-white text-center overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Explore My Projects
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Dive into a collection of projects where creativity meets code. From web applications to tailored solutions, see how I bring ideas to life.
      </motion.p>

      <motion.div
        className="flex gap-6 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex flex-col items-center">
          <FaProjectDiagram className="text-6xl mb-2 text-gray-300" />
          <span>Innovative Ideas</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCode className="text-6xl mb-2 text-green-400" />
          <span>Clean Code</span>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptopCode className="text-6xl mb-2 text-blue-400" />
          <span>Modern Technologies</span>
        </div>
      </motion.div>

      {/* Decorative Background Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160L120,186.7C240,213,480,267,720,266.7C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
}
