"use client";
import React from "react";

export default function HeroSection() {
  return (
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

        {/* Phone image */}
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
  );
}
