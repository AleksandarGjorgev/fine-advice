"use client";

import { motion } from "framer-motion";

export default function WhatsThePoint() {
  return (
    <motion.section
      className="w-full py-16 bg-gray-800 flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 mb-6">
        What's the Point?
      </h2>
      <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-3xl">
        FineAdvice leverages cutting-edge AI technology to analyze your financial habits, provide personalized advice, and help you save more effectively. Whether you're looking to optimize your budget, manage debt, or invest smartly, our platform has you covered.
      </p>
      <ul className="text-left max-w-md space-y-4 text-gray-300">
        <li>✅ Personalized Financial Analysis</li>
        <li>✅ Smart Budget Planning</li>
        <li>✅ Investment Guidance</li>
        <li>✅ Debt Management Strategies</li>
      </ul>
    </motion.section>
  );
}
