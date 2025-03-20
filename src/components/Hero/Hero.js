"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import ActionButtons from "./ActionButtons";
import InvestmentChat from "./InvestmentChat";
import BudgetChat from "./BudgetChat";
import DebtChat from "./DebtChat";

export default function Hero() {
  // State for the base chat (savings calculation)
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // State for the active action chat: null, "investment", "budget", or "debt"
  const [activeAction, setActiveAction] = useState(null);

  // Toggle action chat: if same action clicked, close it; otherwise, open respective chat
  const handleToggleAction = (actionType) => {
    if (activeAction === actionType) {
      setActiveAction(null);
    } else {
      setActiveAction(actionType);
    }
  };

  // Dummy savings calculation for base chat
  const handleCalculateSavings = () => {
    if (!income || !expenses) {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "Please enter both your monthly income and expenses.",
        },
      ]);
      return;
    }
    const savings = Number(income) - Number(expenses);
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: `Income: $${income}, Expenses: $${expenses}` },
      {
        sender: "ai",
        message:
          savings >= 0
            ? `Based on your inputs, you save approximately $${savings} per month.`
            : "It seems your expenses exceed your income. Let's work on reducing costs or increasing income.",
      },
    ]);
    setIncome("");
    setExpenses("");
  };

  // Dummy additional chat query for base chat
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: userInput },
      {
        sender: "ai",
        message:
          "Thank you for your message! Our system is processing your request.",
      },
    ]);
    setUserInput("");
  };

  return (
    <motion.section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-card to-secondary overflow-hidden p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Title and Subtitle */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300 mb-4 text-center">
        FineAdvice
      </h1>
      <div className="text-center text-lg md:text-xl text-gray-300 mb-6">
        <TypeAnimation
          sequence={[
            "Your AI-powered financial partner.",
            1500,
            "Personalized advice at your fingertips.",
            1500,
            "Optimize your savings effortlessly.",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Base Chat Interface (shown when no action chat is active) */}
      {!activeAction && (
        <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-3xl shadow-2xl">
          <ChatHistory chatHistory={chatHistory} loading={loading} />
          {/* Input Section for Savings Calculation */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <input
              type="number"
              placeholder="Monthly Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 rounded-lg focus:outline-none bg-gray-700 text-gray-200 border border-gray-600"
            />
            <input
              type="number"
              placeholder="Monthly Expenses"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 rounded-lg focus:outline-none bg-gray-700 text-gray-200 border border-gray-600"
            />
            <button
              onClick={handleCalculateSavings}
              className="w-full md:w-auto px-6 py-2 bg-accent text-darkBg rounded-lg font-semibold shadow hover:bg-green-400 transition-all"
            >
              Calculate Savings
            </button>
          </div>
          {/* Additional Chat Input for Base Chat */}
          <ChatInput
            userInput={userInput}
            setUserInput={setUserInput}
            onSend={handleSendMessage}
          />
        </div>
      )}

      {/* Specialized Action Chats */}
      {activeAction === "investment" && <InvestmentChat />}
      {activeAction === "budget" && <BudgetChat />}
      {activeAction === "debt" && <DebtChat />}

      {/* Action Buttons below Chat */}
      <ActionButtons activeAction={activeAction} onToggle={handleToggleAction} />

      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[150px]"
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
