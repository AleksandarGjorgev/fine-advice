"use client";

import { useState } from "react";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";

export default function BudgetChat() {
  const [chatHistory, setChatHistory] = useState([
    { sender: "ai", message: "Welcome to Budget Tips. Please share your income and expenses for a tailored budget plan." }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: userInput },
      { sender: "ai", message: "Tracking every expense is vital. Have you tried using expense categories?" }
    ]);
    setUserInput("");
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
      <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300 mb-4 text-center">
        Budget Tips
      </h2>
      <ChatHistory chatHistory={chatHistory} loading={loading} />
      <ChatInput userInput={userInput} setUserInput={setUserInput} onSend={handleSendMessage} />
    </div>
  );
}
