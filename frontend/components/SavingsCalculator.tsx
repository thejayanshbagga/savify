"use client";

import { useState, useEffect } from "react";

export default function SavingsCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(100);
  const [contribution, setContribution] = useState(20);
  const [frequency, setFrequency] = useState("Weekly");
  const [years, setYears] = useState(20);
  const [interestRate, setInterestRate] = useState(4);
  const [futureBalance, setFutureBalance] = useState(0);
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    const calculate = () => {
      const periodsPerYear = frequency === "Weekly" ? 52 : 12;
      const rate = interestRate / 100;
      let balance = initialDeposit;
      const yearlyData = [balance];

      for (let year = 1; year <= years; year++) {
        for (let period = 1; period <= periodsPerYear; period++) {
          balance += contribution;
          balance *= 1 + rate / periodsPerYear;
        }
        yearlyData.push(balance);
      }

      setChartData(yearlyData);
      setFutureBalance(Number(balance.toFixed(2)));
    };

    calculate();
  }, [initialDeposit, contribution, frequency, years, interestRate]);

  const maxValue = Math.max(...chartData, 1);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-blue to-brand-charcoal overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lightblue/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
          Savings Growth Calculator
        </h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left */}
          <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl space-y-4">
            <label className="block font-semibold text-white text-sm">Initial Deposit</label>
            <input
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />

            <label className="block font-semibold text-white text-sm">Contributions</label>
            <input
              type="number"
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />

            <label className="block font-semibold text-white text-sm">Contribution Frequency</label>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 text-white cursor-pointer">
                <input
                  type="radio"
                  value="Weekly"
                  checked={frequency === "Weekly"}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-4 h-4 accent-brand-blue"
                />
                Weekly
              </label>
              <label className="flex items-center gap-3 text-white cursor-pointer">
                <input
                  type="radio"
                  value="Monthly"
                  checked={frequency === "Monthly"}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-4 h-4 accent-brand-blue"
                />
                Monthly
              </label>
            </div>

            <label className="block font-semibold text-white text-sm">Years to Grow</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />

            <label className="block font-semibold text-white text-sm">Average Annual Return (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Right */}
          <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-blue text-center mb-4">
              Potential Future Balance
            </h3>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8">
              ${futureBalance.toFixed(2)}
            </p>

            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 50}
                    x2="400"
                    y2={i * 50}
                    stroke="rgba(255,255,255,0.1)"
                  />
                ))}

                <polyline
                  points={chartData
                    .map((val, idx) => {
                      const x = (idx / (chartData.length - 1)) * 400;
                      const y = 200 - (val / maxValue) * 180;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="#4A6FA5"
                  strokeWidth="3"
                />

                <polygon
                  points={`0,200 ${chartData
                    .map((val, idx) => {
                      const x = (idx / (chartData.length - 1)) * 400;
                      const y = 200 - (val / maxValue) * 180;
                      return `${x},${y}`;
                    })
                    .join(" ")} 400,200`}
                  fill="rgba(74, 111, 165, 0.15)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
