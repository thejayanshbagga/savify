"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// Feature Slideshow Component
const FeatureSlideshow = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const features = [
    {
      title: "Streamline your financial management with Savify's AI-driven tools.",
      text: "From automated savings to machine learning-powered insights, we simplify your finances and help you stay on track effortlessly.",
      image: "images/Button1.png"
    },
    {
      title: "Experience the future of fintech with Savify.",
      text: "Our advanced features, like expense tracking, gamified savings, and data-driven recommendations, ensure a smarter and more rewarding financial journey.",
      image: "images/Button2.png"
    },
    {
      title: "Achieve your financial goals with Savify's powerful tools.",
      text: "From round-up savings to goal-oriented planning and personalized insights, we empower you to grow your wealth strategically.",
      image: "images/Button3.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
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

      <div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-opacity duration-400 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {features[activeFeature].title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {features[activeFeature].text}
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
            <img 
              src={features[activeFeature].image} 
              alt="Feature" 
              className="w-full h-auto max-w-xs"
            />
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setFadeOut(true);
              setTimeout(() => {
                setActiveFeature(idx);
                setFadeOut(false);
              }, 400);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === activeFeature ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

// Side Scroll Features Component
const SideScrollFeatures = () => { // get rid of and move up to the earlier buttons
  const features = [
    {
      title: "Savify Save",
      short: "Effortlessly save with Round-Up Savings, Track Expenses, and achieve your financial goals with AI-driven insights and personalized tools.",
      details: [
        { label: "Round-Up Savings", desc: "Save spare change by rounding up purchases and scheduling transfers. Get insights into your savings habits." },
        { label: "Expense Tracking and Budgeting", desc: "Track spending in real-time. Set budgets and receive helpful recommendations." },
        { label: "Savings Insights and Goal-Oriented Savings", desc: "Set savings goals and track progress. Get personalized strategies to achieve them." }
      ]
    },
    {
      title: "Savify Split",
      short: "Ideal for managing shared finances in a hassle-free way.",
      details: [
        { label: "Split Bills and Expenses", desc: "Seamlessly split bills and expenses with friends or family directly through the app." },
        { label: "Track Payments", desc: "Keep a record of who owes what to avoid confusion." },
        { label: "Send Reminders", desc: "Send payment reminders within the app to settle balances quickly and efficiently." }
      ]
    },
    {
      title: "Savify Score",
      short: "Make saving fun and rewarding! Earn points, track progress, and unlock perks while reaching your financial goals.",
      details: [
        { label: "Savify Score", desc: "Earn points by maintaining savings streaks, completing challenges, and referring friends." },
        { label: "Custom Rewards System", desc: "Unlock exclusive discounts and offers from partnered brands as you hit milestones." },
        { label: "Gamification", desc: "Enjoy savings challenges, earn badges, and customize avatars that evolve with your achievements." }
      ]
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white hidden md:block">
      <div className="flex overflow-x-auto gap-8 px-6 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[600px] bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">{feature.title}</h4>
            <p className="text-gray-700">{feature.short}</p>
            
            {hoveredIndex === idx && (
              <div className="absolute inset-0 bg-white p-6 overflow-y-auto">
                <h5 className="text-xl font-semibold text-blue-600 mb-4">{feature.title}</h5>
                {feature.details.map((detail, i) => (
                  <p key={i} className="mb-3 text-gray-700">
                    <strong>{i + 1}. {detail.label}:</strong> {detail.desc}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Mobile Feature Cards
const MobileFeatureCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    {
      title: "Savify Save",
      short: "Save automatically, track expenses, and hit goals smartly.",
      details: [
        "Round-Up Savings: Auto-save spare change and gain insights.",
        "Expense Tracking: Monitor spend, set budgets, and get tips.",
        "Goal-Based Saving: Set targets and track them easily."
      ]
    },
    {
      title: "Savify Split",
      short: "Split bills, track dues, and remind friends easily.",
      details: [
        "Split Bills: Share costs with friends right in the app.",
        "Track Payments: Know who owes what.",
        "Send Reminders: Prompt others to settle up."
      ]
    },
    {
      title: "Savify Score",
      short: "Earn, unlock, and grow your savings game.",
      details: [
        "Earn Points: For saving, challenges, and referrals.",
        "Custom Rewards: Get brand perks as you save more.",
        "Gamification: Take challenges, earn badges, and upgrade avatars."
      ]
    }
  ];

  return (
    <section className="py-12 px-6 bg-white md:hidden">
      <div className="flex flex-col gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            onClick={() => setActiveCard(activeCard === idx ? null : idx)}
            className="bg-gray-50 rounded-xl p-6 shadow-md cursor-pointer transition-all"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h4>
            <p className="text-gray-700 text-sm mb-3">{feature.short}</p>
            {activeCard === idx && (
              <ul className="space-y-2 mt-4">
                {feature.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-600">• {detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Savings Calculator Component
const SavingsCalculator = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(100);
  const [contribution, setContribution] = useState<number>(20);
  const [frequency, setFrequency] = useState<string>('Weekly');
  const [years, setYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(4);
  const [futureBalance, setFutureBalance] = useState<number>(0);
  const [chartData, setChartData] = useState<number[]>([]);

  const calculate = () => {
    const periodsPerYear = frequency === 'Weekly' ? 52 : 12;
    const rate = interestRate / 100;
    let balance = initialDeposit;
    const yearlyData = [balance];

    for (let year = 1; year <= years; year++) {
      for (let period = 1; period <= periodsPerYear; period++) {
        balance += contribution;
        balance *= (1 + rate / periodsPerYear);
      }
      yearlyData.push(balance);
    }

    setFutureBalance(Number(balance.toFixed(2)));
    setChartData(yearlyData);
  };

  useEffect(() => {
    calculate();
  }, [initialDeposit, contribution, frequency, years, interestRate]);

  const maxValue = Math.max(...chartData);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Savings Growth Calculator
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Initial Deposit</label>
                <input
                  type="number"
                  value={initialDeposit}
                  onChange={(e) => setInitialDeposit(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Contributions</label>
                <input
                  type="number"
                  value={contribution}
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Contribution Frequency</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Weekly"
                      checked={frequency === 'Weekly'}
                      onChange={(e) => setFrequency(e.target.value)}
                    />
                    Weekly
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Monthly"
                      checked={frequency === 'Monthly'}
                      onChange={(e) => setFrequency(e.target.value)}
                    />
                    Monthly
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Years to Grow</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Average Annual Return (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
              Potential Future Balance:
            </h3>
            <p className="text-5xl font-bold text-gray-900 text-center mb-8">
              ${futureBalance.toFixed(2)}
            </p>
            
            {/* Simple Chart */}
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 50}
                    x2="400"
                    y2={i * 50}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Chart line */}
                <polyline
                  points={chartData
                    .map((val, idx) => {
                      const x = (idx / (chartData.length - 1)) * 400;
                      const y = 200 - (val / maxValue) * 180;
                      return `${x},${y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="#4A90E2"
                  strokeWidth="3"
                />
                
                {/* Fill area */}
                <polygon
                  points={`0,200 ${chartData
                    .map((val, idx) => {
                      const x = (idx / (chartData.length - 1)) * 400;
                      const y = 200 - (val / maxValue) * 180;
                      return `${x},${y}`;
                    })
                    .join(' ')} 400,200`}
                  fill="rgba(74, 144, 226, 0.2)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Savify Marquee
const WhySavifyMarquee = () => { // make it unlimited and not cut off or add etf prices
  return (
    <div className="overflow-hidden bg-gray-50 py-8">
      <div className="whitespace-nowrap animate-marquee">
        <span className="inline-block text-6xl font-semibold text-gray-300 tracking-widest px-8">
          Why Savify — Why Savify — Why Savify — Why Savify — Why Savify —
        </span>
      </div>
    </div>
  );
};

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my data safe with Savify?",
      answer: "Security is our top priority. We use bank-level encryption and follow strict privacy protocols to ensure your personal and financial information is fully protected. We never sell your data to third parties."
    },
    {
      question: "How does the Savify Round-Up feature work?",
      answer: "With every transaction, Savify rounds your purchase to the nearest dollar and invests the spare change into your personalized savings or investment fund. Based on your chosen risk profile—whether conservative, balanced, or aggressive—we allocate your savings accordingly."
    },
    {
      question: "When will Savify features be available?",
      answer: "We're currently developing the backend and preparing for a full app release. Savify is expected to launch in early September 2025. Registered users will receive email updates as features are rolled out."
    },
    {
      question: "Does Savify offer educational content for financial beginners?",
      answer: "Absolutely. Savify features beginner-friendly videos, mini-lessons, and interactive tools focused on budgeting, saving, and investing. We also curate high-quality resources from trusted platforms to help users strengthen their financial knowledge."
    },
    {
      question: "Do I need to connect my bank account to use Savify?",
      answer: "Not right away. You can manually upload your bank's expense reports, and Savify will use its algorithm to analyze and categorize your spending. Direct bank integrations with major Canadian financial institutions will be introduced soon."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex justify-between items-center hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  activeIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {activeIndex === idx && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Page Component with Navbar
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-24 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo-savify-no-background.png"
            alt="Savify Logo"
            className="h-10"
          />
          <span className="text-2xl font-bold text-white">Savify</span>
        </div>
        <div className="flex gap-3">
          <a
            href="/auth/login"
            className="px-5 py-2 rounded-full border border-white text-white hover:bg-white/10 transition font-semibold"
          >
            Log In
          </a>
          <a
            href="/auth/signup"
            className="px-5 py-2 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

// Main Demo Component
export default function HomePage() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white min-h-screen">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thumb-blue-600::-webkit-scrollbar-thumb {
          background-color: #4A90E2;
          border-radius: 10px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #e5e7eb;
        }
      `}</style>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Save Smarter, <br /> Spend Better
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Savify helps you stay on top of your finances with smart insights,
              goals, and tools that actually make saving fun.
            </p>
            <div className="flex gap-4">
              <a
                href="/auth/signup"
                className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get Started
              </a>
              <a
                href="/auth/login"
                className="px-6 py-3 rounded-full border border-white text-white hover:bg-white/10 transition"
              >
                Log In
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-96 h-[620px] sm:w-[28rem] sm:h-[680px] lg:w-[32rem] lg:h-[720px]">
              <img
                src="/images/phone-mockup.png"
                alt="Phone Mockup"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_10px_60px_rgba(0,0,0,0.6)] animate-float opacity-95"
              />
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#4adeed]/40 to-[#120052]/40 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Savify?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We make saving effortless by turning your financial goals into
            achievable, fun, and rewarding experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Insights", // change up to Savify Save and add the scroll feature
              text: "Track spending and get personalized suggestions tailored to you.",
            },
            {
              title: "Goal Setting", // change up to Savify Split and add the scroll feature
              text: "Create savings goals and watch them grow with progress tracking.",
            },
            {
              title: "Rewards", // change up to Savify Score and add the scroll feature
              text: "Earn badges and streaks to keep motivation high along the way.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Slideshow */}
      <div className="bg-white text-gray-900">
        <FeatureSlideshow />
      </div>

      {/* Side Scroll Features */}
      <div className="bg-white text-gray-900">
        <SideScrollFeatures />
        <MobileFeatureCards />
      </div>

      {/* Why Savify Marquee */}
      <WhySavifyMarquee />

      {/* Savings Calculator */}
      <div className="bg-white text-gray-900">
        <SavingsCalculator />
      </div>

      {/* FAQ Section */}
      <div className="bg-white text-gray-900">
        <FAQ />
      </div>

      {/* CTA/Footer Combined Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Socials - Left Top */}
          <div className="absolute top-10 left-20">
            <a href="https://www.instagram.com/savify.official/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src="/images/icon-instagram.png" alt="Instagram" className="w-8 h-8 inline-block hover:opacity-80 transition" />
            </a>
            <a href="https://www.linkedin.com/company/savifyca/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-linkedin.png" alt="LinkedIn" className="w-8 h-8 inline-block hover:opacity-80 transition" />
            </a>
          </div>

          {/* Email - Right Top */}
          <div className="absolute top-10 right-20 text-right">
            <a href="mailto:jbagga3@uwo.ca" className="inline-block mr-2">
              <img src="/images/icon-email.png" alt="Email Icon" className="w-8 h-8 inline-block" />
            </a>
            <a href="mailto:jbagga3@uwo.ca" className="text-white text-lg font-bold no-underline hover:text-blue-200 transition">
              jbagga3@uwo.ca
            </a>
          </div>

          {/* Slogan - Center Top */}
          <div className="text-center absolute top-10 left-1/2 transform -translate-x-1/2">
            <p className="text-2xl font-bold m-0">
              Simplify Your Finances.<br />Savify Your Future.
            </p>
          </div>

          {/* CTA Content - Center */}
          <div className="relative mt-32 mb-16 text-center">
            <img
              src="/logo-savify-no-background.png"
              alt="Savify Logo"
              className="h-12 mb-6 mx-auto"
            />

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Start Saving Smarter Today
            </h2>

            <a
              href="/auth/signup"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition inline-block"
            >
              Join Savify
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/80">
            Copyright © {new Date().getFullYear()}, Savify. All Rights Reserved.
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden text-center px-4 pt-2 pb-3 relative">
          {/* Instagram top left */}
          <div className="absolute top-3 left-4">
            <a href="https://www.instagram.com/savify.official/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-instagram.png" alt="Instagram" className="w-7" />
            </a>
          </div>

          {/* LinkedIn top right */}
          <div className="absolute top-3 right-4">
            <a href="https://www.linkedin.com/company/savifyca/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-linkedin.png" alt="LinkedIn" className="w-7" />
            </a>
          </div>

          {/* Push rest of content down */}
          <div className="pt-12"></div>

          {/* Email */}
          <div className="mb-4">
            <a href="mailto:business@savify.com" className="text-white font-bold text-lg">
              <img src="/images/icon-email.png" alt="Email Icon" className="w-6 inline-block align-middle mr-2" />
              business@savify.com
            </a>
          </div>

          {/* Slogan */}
          <h2 className="text-xl font-bold my-5">
            Simplify Your Finances,<br />Savify Your Future.
          </h2>

          {/* CTA Content */}
          <div className="my-8">
            <img
              src="/logo-savify-no-background.png"
              alt="Savify Logo"
              className="h-10 mb-4 mx-auto"
            />

            <h2 className="text-2xl font-bold mb-6">
              Start Saving Smarter Today
            </h2>

            <a
              href="/auth/signup"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition inline-block"
            >
              Join Savify
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/80 mt-8">
            Copyright © {new Date().getFullYear()}, Savify. All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
}