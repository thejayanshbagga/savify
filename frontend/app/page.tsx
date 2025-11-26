"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";


// Feature Slideshow
const FeatureSlideshow = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const slides = [
    {
      title: "Streamline your financial management with Savify's AI-driven tools.",
      text: "From automated savings to machine learning-powered insights, we simplify your finances and help you stay on track effortlessly.",
      image: "images/Button1.png",
    },
    {
      title: "Experience the future of fintech with Savify.",
      text: "Our advanced features, like expense tracking, gamified savings, and data-driven recommendations, ensure a smarter and more rewarding financial journey.",
      image: "images/Button2.png",
    },
    {
      title: "Achieve your financial goals with Savify's powerful tools.",
      text: "From round-up savings to goal-oriented planning and personalized insights, we empower you to grow your wealth strategically.",
      image: "images/Button3.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % slides.length);
        setFadeOut(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Benefits
        </span>
        <h2 className="text-4xl font-bold text-gray-900">
          Simplify Your Finances, Savify Your Future.
        </h2>
      </div>

      <div
        className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-opacity duration-300 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {slides[activeFeature].title}
            </h3>
            <p className="text-gray-600">{slides[activeFeature].text}</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
            <img
              src={slides[activeFeature].image}
              alt="Feature"
              className="w-full h-auto max-w-xs"
            />
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setFadeOut(true);
              setTimeout(() => {
                setActiveFeature(idx);
                setFadeOut(false);
              }, 400);
            }}
            className={`w-3 h-3 rounded-full ${
              idx === activeFeature ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};


// Marquee
const WhySavifyMarquee = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-10">
      <div className="marquee">
        <div className="track">
          <span>
            Why Savify • Why Savify • Why Savify • Why Savify • Why Savify •
          </span>
          <span>
            Why Savify • Why Savify • Why Savify • Why Savify • Why Savify •
          </span>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .track {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }

        .track span {
          font-size: 3rem;
          font-weight: 600;
          color: #6b7280;
          padding-right: 4rem;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};



// Savings Calculator
const SavingsCalculator = () => {
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
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Savings Growth Calculator
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <label className="block font-semibold">Initial Deposit</label>
            <input
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <label className="block font-semibold">Contributions</label>
            <input
              type="number"
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <label className="block font-semibold">Contribution Frequency</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Weekly"
                  checked={frequency === "Weekly"}
                  onChange={(e) => setFrequency(e.target.value)}
                />
                Weekly
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Monthly"
                  checked={frequency === "Monthly"}
                  onChange={(e) => setFrequency(e.target.value)}
                />
                Monthly
              </label>
            </div>

            <label className="block font-semibold">Years to Grow</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <label className="block font-semibold">Average Annual Return (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Right */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
              Potential Future Balance
            </h3>
            <p className="text-5xl font-bold text-center mb-8">
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
                    stroke="#e5e7eb"
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
                  stroke="#4A90E2"
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
                  fill="rgba(74,144,226,0.2)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// FAQ
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my data safe with Savify?",
      answer:
        "Security is our top priority. We use bank-level encryption and follow strict privacy protocols to ensure your personal and financial information is fully protected. We never sell your data to third parties.",
    },
    {
      question: "How does the Savify Round-Up feature work?",
      answer:
        "With every transaction, Savify rounds your purchase to the nearest dollar and invests the spare change into your personalized savings or investment fund. Based on your chosen risk profile—whether conservative, balanced, or aggressive—we allocate your savings accordingly. We’re also in talks with Canadian brokerage partners to offer real investment options in the near future.",
    },
    {
      question: "When will Savify features be available?",
      answer:
        "We’re currently developing the backend and preparing for a full app release. Savify is expected to launch in early September 2025. Registered users will receive email updates as features are rolled out. Both web and mobile platforms will become available gradually.",
    },
    {
      question: "Does Savify offer educational content for financial beginners?",
      answer:
        "Absolutely. Savify features beginner-friendly videos, mini-lessons, and interactive tools focused on budgeting, saving, and investing. We also curate high-quality resources from trusted platforms to help users strengthen their financial knowledge and grow their money smartly."
    },
    {
      question: "Do I need to connect my bank to use Savify?",
      answer:
        "Not right away. You can manually upload your bank’s expense reports, and Savify will use its algorithm to analyze and categorize your spending. Direct bank integrations with major Canadian financial institutions will be introduced soon to simplify the process",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md">
            <button
              className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform ${
                  activeIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeIndex === idx && (
              <div className="px-6 py-4 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};



// Main Page
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <Navbar />
      <HeroSection />
      <Features />

      <div className="bg-white text-gray-900">
        <FeatureSlideshow />
      </div>

      <WhySavifyMarquee />

      <div className="bg-white text-gray-900">
        <SavingsCalculator />
      </div>

      <div className="bg-white text-gray-900">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
