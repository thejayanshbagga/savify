"use client";

import { useState, useEffect } from "react";

export default function FeatureSlideshow() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const slides = [
    {
      title: "Streamline your financial management with Savify's AI-driven tools.",
      text: "From automated savings to machine learning-powered insights, we simplify your finances and help you stay on track effortlessly.",
      image: "/images/Button1.png",
    },
    {
      title: "Experience the future of fintech with Savify.",
      text: "Our advanced features, like expense tracking, gamified savings, and data-driven recommendations, ensure a smarter and more rewarding financial journey.",
      image: "/images/Button2.png",
    },
    {
      title: "Achieve your financial goals with Savify's powerful tools.",
      text: "From round-up savings to goal-oriented planning and personalized insights, we empower you to grow your wealth strategically.",
      image: "/images/Button3.png",
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
  }, [slides.length]);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-brand-charcoal to-brand-blue overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lightblue/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <span className="inline-block bg-brand-lightblue/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-4 shadow-lg hover:bg-brand-lightblue/30 transition-all duration-200">
          Benefits
        </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                Simplify Your Finances, Savify Your Future.
            </h2>
        </div>

        <div
            className={`relative z-10 max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-10 transition-opacity duration-300 ${
                fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {slides[activeFeature].title}
            </h3>
            <p className="text-white/70 leading-relaxed">{slides[activeFeature].text}</p>
          </div>

          <div className="bg-gradient-to-br from-brand-lightblue/10 to-brand-navy/10 rounded-2xl p-8 flex items-center justify-center border border-white/10">
            <img
              src={slides[activeFeature].image}
              alt="Feature"
              className="w-full h-auto max-w-xs"
            />
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="relative z-10 flex justify-center gap-3 mt-8">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === activeFeature ? "bg-brand-blue w-8" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
