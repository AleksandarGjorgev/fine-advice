"use client";

export default function ChatHistory({ chatHistory, loading }) {
  return (
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
  );
}
