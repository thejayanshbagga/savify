import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar"; 

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white min-h-screen">
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
              <Link
                href="/auth/signup"
                className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get Started
              </Link>
              <Link
                href="/auth/login"
                className="px-6 py-3 rounded-full border border-white text-white hover:bg-white/10 transition"
              >
                Log In
              </Link>
            </div>
          </div>

          {/* Placeholder for mockup/illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-lg shadow-2xl flex items-center justify-center">
              <img
                src="/logo-savify-no-background.png"
                alt="Savify Logo"
                className="h-32 object-contain"
              />
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
              title: "Smart Insights",
              text: "Track spending and get personalized suggestions tailored to you.",
            },
            {
              title: "Goal Setting",
              text: "Create savings goals and watch them grow with progress tracking.",
            },
            {
              title: "Rewards",
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

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 text-center relative">
        <div className="flex flex-col items-center">
          <img
            src="/logo-savify-no-background.png"
            alt="Savify Logo"
            className="h-12 mb-6"
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Start Saving Smarter Today
          </h2>

          <Link
            href="/auth/signup"
            className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition"
          >
            Join Savify
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 bg-black/40 text-gray-200 text-center">
        <p>© {new Date().getFullYear()} Savify. All rights reserved.</p>
      </footer>
    </div>
  );
}