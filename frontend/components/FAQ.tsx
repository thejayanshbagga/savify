"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
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
          "With every transaction, Savify rounds your purchase to the nearest dollar and invests the spare change into your personalized savings or investment fund. Based on your chosen risk profile—whether conservative, balanced, or aggressive—we allocate your savings accordingly. We're also in talks with Canadian brokerage partners to offer real investment options in the near future.",
    },
    {
      question: "When will Savify features be available?",
      answer:
          "We're currently developing the backend and preparing for a full app release. Savify is expected to launch in early September 2025. Registered users will receive email updates as features are rolled out. Both web and mobile platforms will become available gradually.",
    },
    {
      question: "Does Savify offer educational content for financial beginners?",
      answer:
          "Absolutely. Savify features beginner-friendly videos, mini-lessons, and interactive tools focused on budgeting, saving, and investing. We also curate high-quality resources from trusted platforms to help users strengthen their financial knowledge and grow their money smartly.",
    },
    {
      question: "Do I need to connect my bank to use Savify?",
      answer:
          "Not right away. You can manually upload your bank's expense reports, and Savify will use its algorithm to analyze and categorize your spending. Direct bank integrations with major Canadian financial institutions will be introduced soon to simplify the process.",
    },
  ];

  return (
      <section className="relative py-20 px-6 bg-gradient-to-b from-brand-charcoal to-brand-blue overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lightblue/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
                >
                  <button
                      className="w-full px-6 py-5 text-left font-semibold text-white flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                      onClick={() =>
                          setActiveIndex(activeIndex === idx ? null : idx)
                      }
                  >
                    <span className="text-lg">{faq.question}</span>
                    <ChevronDown
                        className={`transition-transform text-brand-blue ${
                            activeIndex === idx ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === idx && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                          <div className="px-6 py-5 bg-white/5 border-t border-white/10 text-white/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
