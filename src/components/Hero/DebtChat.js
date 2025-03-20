"use client";

import { useState } from "react";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";

export default function DebtChat() {
  const [chatHistory, setChatHistory] = useState([
    { sender: "ai", message: "Welcome to Debt Management. Do you have any loans or credit card debts you're working on?" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: userInput },
      { sender: "ai", message: "Consolidating debt and prioritizing high-interest rates can help improve your situation." }
    ]);
    setUserInput("");
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
      <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300 mb-4 text-center">
        Debt Management
      </h2>
      <ChatHistory chatHistory={chatHistory} loading={loading} />
      <ChatInput userInput={userInput} setUserInput={setUserInput} onSend={handleSendMessage} />
    </div>
  );
}
