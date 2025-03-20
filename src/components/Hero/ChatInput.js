"use client";

export default function ChatInput({ userInput, setUserInput, onSend }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Ask a question or type a command..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="flex-grow px-4 py-2 rounded-lg focus:outline-none bg-gray-700 text-gray-200 border border-gray-600 break-words"
      />
      <button
        onClick={onSend}
        className="px-6 py-2 bg-accent text-darkBg rounded-lg font-semibold shadow hover:bg-green-400 transition-all"
      >
        Send
      </button>
    </div>
  );
}
