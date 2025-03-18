import { motion } from "framer-motion";
import Image from 'next/image';
import {
  FaBicycle,
  FaBrain,
  FaChess,
  FaDumbbell,
  FaFutbol,
  FaHandsHelping,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      className="py-8 px-4 bg-background text-center md:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-accent mb-6 text-center">About Me</h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          className="relative group w-40 h-48 md:w-56 md:h-72 rounded-full border-4 border-accent shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/images/profile.png"
            alt="Aleksandar Gjorgev"
            width={224}
            height={224}
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-accent opacity-0 transition-all duration-300 rounded-full"></div>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          className="flex-1 text-muted space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm md:text-lg">
            Hello! I&apos;m <span className="text-accent font-bold">Aleksandar Gjorgev</span>, a Fullstack Developer with a
            passion for crafting efficient and scalable software solutions. My expertise spans modern frontend and
            backend technologies, focusing on clean and maintainable code.
          </p>
          <p className="text-sm md:text-lg">
            I love collaborating with teams to build user-friendly applications and learning new tools to improve my
            development skills.
          </p>
        </motion.div>
      </div>

      {/* Key Strengths */}
      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {[
          { icon: FaBrain, label: "Problem-Solving", color: "text-yellow-400" },
          { icon: FaHandsHelping, label: "Team Collaboration", color: "text-green-500" },
          { icon: FaTrophy, label: "Adaptability", color: "text-blue-500" },
          { icon: FaStar, label: "Self-Motivation", color: "text-accent" }
        ].map((strength, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all"
          >
            <strength.icon className={`text-5xl ${strength.color} mb-3`} />
            <span className="text-md md:text-lg font-bold text-white">{strength.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Fun Facts and Hobbies */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {/* Fun Facts */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-accent mb-4">Fun Facts</h3>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted space-y-2">
            <li>Started coding at 13 years old and haven&apos;t stopped since.</li>
            <li>Always excited to learn new technologies and frameworks.</li>
            <li>I have developed multiple personal projects for fun and learning.</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-accent mb-4">Hobbies</h3>
          <ul className="pl-5 text-md md:text-lg text-muted space-y-3">
            <li>
              <FaFutbol className="inline text-accent mr-2" />
              Soccer
            </li>
            <li>
              <FaChess className="inline text-accent mr-2" />
              Chess
            </li>
            <li>
              <FaDumbbell className="inline text-accent mr-2" />
              Fitness
            </li>
            <li>
              <FaBicycle className="inline text-accent mr-2" />
              Cycling
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
