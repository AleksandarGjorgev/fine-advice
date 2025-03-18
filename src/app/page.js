"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Testimonials";
import Skills from "@/components/Plans";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero />
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <About />
      </motion.section>
      <hr className="m-10 border-t border-muted my-12" />
      <motion.section
        id="journey"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Journey />
      </motion.section>
      <hr className="m-10 border-t border-muted my-12" />
      <motion.section
        id="skills"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Skills />
      </motion.section>
      <hr className="m-10 border-t border-muted my-12" />
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Contact />
      </motion.section>
    </motion.div>
  );
}
