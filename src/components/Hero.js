"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  // State for demo inputs and chat simulation
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  // State for toggled side panel (null, "investment", "budget", "debt")
  const [activeSideAction, setActiveSideAction] = useState(null);

  // Toggle side panel: if already active, close it; otherwise, open it.
  const handleToggleSideAction = (actionType) => {
    setActiveSideAction((prev) => (prev === actionType ? null : actionType));
  };

  // Dummy savings calculation – replace with API integration later
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

  // Dummy additional chat query – placeholder response for now
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
      className="relative w-full h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-card to-secondary overflow-hidden p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
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
      {/* Chat Interface Container */}
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-3xl shadow-2xl">
        {/* App Title and Dynamic Subtitle */}


        {/* Chat History Display */}
        <div className="h-48 overflow-y-auto mb-4 p-3 border border-gray-700 rounded-lg space-y-2">
          {chatHistory.length === 0 ? (
            <p className="text-gray-400 text-center">
              Your AI financial assistant will respond here...
            </p>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg shadow-sm break-words ${
                  chat.sender === "ai"
                    ? "bg-gray-700 text-gray-200 self-start"
                    : "bg-accent text-darkBg self-end"
                } max-w-full`}
              >
                {chat.message}
              </div>
            ))
          )}
          {loading && (
            <div className="text-gray-400 text-center">Loading response...</div>
          )}
        </div>

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

        {/* Additional Chat Input */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Ask a question or type a command..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow px-4 py-2 rounded-lg focus:outline-none bg-gray-700 text-gray-200 border border-gray-600 break-words"
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-2 bg-accent text-darkBg rounded-lg font-semibold shadow hover:bg-green-400 transition-all"
          >
            Send
          </button>
        </div>
      </div>

      {/* Toggled Side Panel for Additional Functions */}
      {activeSideAction && (
        <div className="absolute right-0 top-0 h-full w-80 bg-gray-800 shadow-2xl p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300 mb-4">
            {activeSideAction === "investment"
              ? "Investment Advice"
              : activeSideAction === "budget"
              ? "Budget Tips"
              : "Debt Management"}
          </h2>
          <p className="text-gray-200">
            {/* Placeholder content for each side action */}
            {activeSideAction === "investment" &&
              "Here you can find expert investment advice."}
            {activeSideAction === "budget" &&
              "Explore tips to optimize your monthly budget."}
            {activeSideAction === "debt" &&
              "Discover strategies for effective debt management."}
          </p>
          <button
            onClick={() => setActiveSideAction(null)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all"
          >
            Close
          </button>
        </div>
      )}

      {/* Side Toggle Buttons */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <button
          onClick={() => handleToggleSideAction("investment")}
          className={`px-4 py-2 rounded-lg shadow transition-all ${
            activeSideAction === "investment"
              ? "bg-green-400 text-darkBg"
              : "bg-accent text-darkBg hover:bg-green-400"
          }`}
        >
          Investment Advice
        </button>
        <button
          onClick={() => handleToggleSideAction("budget")}
          className={`px-4 py-2 rounded-lg shadow transition-all ${
            activeSideAction === "budget"
              ? "bg-green-400 text-darkBg"
              : "bg-accent text-darkBg hover:bg-green-400"
          }`}
        >
          Budget Tips
        </button>
        <button
          onClick={() => handleToggleSideAction("debt")}
          className={`px-4 py-2 rounded-lg shadow transition-all ${
            activeSideAction === "debt"
              ? "bg-green-400 text-darkBg"
              : "bg-accent text-darkBg hover:bg-green-400"
          }`}
        >
          Debt Management
        </button>
      </div>

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
