"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "FineAdvice has completely transformed how I manage my finances. The personalized insights are a game changer!",
      name: "Emily R.",
    },
    {
      quote: "I never knew budgeting could be this easy and fun. Thanks to FineAdvice, I'm saving more than ever!",
      name: "Michael T.",
    },
    {
      quote: "The AI recommendations are spot on. I've seen real improvements in my investment strategy.",
      name: "Sophia L.",
    },
  ];

  return (
    <motion.section
      className="w-full py-16 bg-gradient-to-br from-gray-900 to-darkBg flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 mb-8 text-center">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-gray-200 italic mb-4">"{item.quote}"</p>
            <p className="text-primary font-bold text-right">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
