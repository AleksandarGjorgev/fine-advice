"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="w-full py-16 bg-gradient-to-br from-darkBg to-gray-900 flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 mb-4">
        Ready to Transform Your Finances?
      </h2>
      <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
        Join FineAdvice today and take control of your financial future with our AI-powered insights and personalized advice.
      </p>
      <motion.button
        className="px-8 py-4 bg-primary text-darkBg rounded-lg font-bold shadow hover:bg-green-400 transition"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Try It For Free
      </motion.button>
    </motion.section>
  );
}
