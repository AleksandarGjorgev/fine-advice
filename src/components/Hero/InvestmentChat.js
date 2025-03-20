"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InvestmentStrategy() {
  // Form states
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [investmentYears, setInvestmentYears] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("balanced");
  const [strategy, setStrategy] = useState("");
  // State to toggle form visibility
  const [showForm, setShowForm] = useState(true);

  const handleCalculateStrategy = () => {
    // Basic validation:
    if (!initialInvestment || !monthlyContribution || !investmentYears) {
      setStrategy("Please fill out all fields to calculate your strategy.");
      return;
    }

    // Fixed expected annual return of 7%
    const fixedAnnualReturn = 7;
    const P = parseFloat(initialInvestment);
    const M = parseFloat(monthlyContribution);
    const years = parseFloat(investmentYears);
    const rAnnual = fixedAnnualReturn / 100;
    const totalMonths = years * 12;
    const rMonthly = rAnnual / 12;

    // Future Value of initial investment: P * (1 + rMonthly)^totalMonths
    const fvInitial = P * Math.pow(1 + rMonthly, totalMonths);
    // Future Value of monthly contributions: M * ((1 + rMonthly)^totalMonths - 1) / rMonthly
    const fvContrib = M * ((Math.pow(1 + rMonthly, totalMonths) - 1) / rMonthly);

    const totalValue = fvInitial + fvContrib;

    // Base strategy message
    let message_first = `Based on your inputs, in ${years} years, your investment could grow to approximately $${totalValue.toFixed(0)}. `;

    let message = "";

    // Tailor message based on risk tolerance
    if (riskTolerance === "conservative") {
      message = message_first +
        "A conservative approach would focus on low-risk bonds and blue-chip stocks for steady, reliable growth. ";
    } else if (riskTolerance === "balanced") {
      message = message_first +
        "A balanced strategy blends growth stocks with stable bonds, aiming for moderate returns while managing risk effectively. ";
    } else if (riskTolerance === "aggressive") {
      message = message_first +
        "An aggressive strategy might target high-growth stocks and emerging markets for potentially higher returns at increased risk. ";
    }

    // Mask a portion of the detailed strategy to encourage sign-up.
    const revealLength = message_first.toString().length;
    const visibleText = message.substring(0, revealLength);
    const hiddenText = message.substring(revealLength);
    const signUpCTA = (
      <motion.span
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="font-bold text-accent cursor-pointer"
      >
        {" "}
        Sign up to see more details.
      </motion.span>
    );
    const maskedMessage = (
      <>
        {visibleText}
        <span className="blur-sm text-gray-400">{hiddenText}</span>
        {signUpCTA}
      </>
    );

    setStrategy(maskedMessage);
    // Hide the form and show only the output chat
    setShowForm(false);
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-2xl my-8">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300 mb-4 text-center">
        Investment Strategy Calculator
      </h2>
      {showForm ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">
              💰 Initial Investment ($):
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
              placeholder="e.g., 5000"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">
              🏦 Monthly Contribution ($):
            </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
              placeholder="e.g., 300"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">
              📅 Investment Period (years):
            </label>
            <input
              type="number"
              value={investmentYears}
              onChange={(e) => setInvestmentYears(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
              placeholder="e.g., 10"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">
              ⚖️ Risk Tolerance:
            </label>
            <select
              value={riskTolerance}
              onChange={(e) => setRiskTolerance(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
            >
              <option value="conservative">Conservative</option>
              <option value="balanced">Balanced</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>
          <button
            onClick={handleCalculateStrategy}
            className="mt-6 w-full px-6 py-3 bg-accent text-darkBg rounded-lg font-semibold shadow hover:bg-green-400 transition-all"
          >
            Calculate Strategy
          </button>
        </div>
      ) : (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600 text-gray-200">
          {strategy}
        </div>
      )}
    </div>
  );
}
