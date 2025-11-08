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

        {/* Right: Phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-96 h-[620px] sm:w-[28rem] sm:h-[680px] lg:w-[32rem] lg:h-[720px]">
            {/* App screen overlay (optional for future) */}
            {/* <img
              src="/images/savify-app-preview.png"
              alt="Savify App Preview"
              className="absolute top-[7%] left-[7%] w-[86%] h-[86%] rounded-[32px] object-cover z-10"
            /> */}

            {/* Transparent phone frame */}
            <img
              src="/images/phone-mockup.png"
              alt="Phone Mockup"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_10px_60px_rgba(0,0,0,0.6)] animate-float opacity-95"
            />

            {/* Gradient glow */}
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