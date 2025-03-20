"use client";

export default function ActionButtons({ activeAction, onToggle }) {
  const buttons = [
    { id: "investment", label: "Investment Advice" },
    { id: "budget", label: "Budget Tips" },
    { id: "debt", label: "Debt Management" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onToggle(btn.id)}
          className={`px-4 py-2 rounded-lg shadow transition-all ${
            activeAction === btn.id
              ? "bg-green-400 text-white"
              : "bg-accent text-white hover:bg-green-400"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
