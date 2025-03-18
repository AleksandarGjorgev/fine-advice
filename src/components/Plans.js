"use client";

import { motion } from "framer-motion";

export default function Plans() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      features: ["Basic Financial Analysis", "Limited Budget Tools", "Community Support"],
    },
    {
      title: "Premium",
      price: "$19.99/month",
      features: [
        "Advanced AI Insights",
        "Comprehensive Budget Planning",
        "Personalized Investment Advice",
        "Priority Support",
      ],
    },
    {
      title: "Pro",
      price: "$49.99/month",
      features: [
        "All Premium Features",
        "Dedicated Financial Advisor",
        "Exclusive Investment Opportunities",
        "Detailed Financial Reports",
      ],
    },
  ];

  return (
    <motion.section
      className="w-full py-16 bg-gray-800 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 mb-8 text-center">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 mb-4 text-center">
              {plan.title}
            </h3>
            <p className="text-center text-3xl font-bold text-primary mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">✅</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto px-6 py-2 bg-primary text-darkBg rounded-lg font-semibold shadow hover:bg-green-400 transition-all">
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
