"use client";
import React from "react";

export default function Features() {
  const items = [
    {
      title: "Savify Save",
      text: "Effortlessly save with Round-Up Savings, Track Expenses, and achieve your financial goals with AI-driven insights and personalized tools.",
    },
    {
      title: "Savify Split",
      text: "Ideal for managing shared finances in a hassle-free way.",
    },
    {
      title: "Savify Score",
      text: "Make saving fun and rewarding. Earn points, track progress, and unlock perks while reaching your financial goals.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Savify?</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          We make saving effortless by turning your financial goals into
          achievable, fun, and rewarding experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {items.map((f, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition max-h-48 overflow-hidden hover:overflow-y-auto"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-200">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
