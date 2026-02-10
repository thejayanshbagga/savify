// app/auth/signup/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function SignupPage() {
  return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
          {/* Animated Background */}
          <AnimatedBackground showParticles={true} showOrbs={true} particleCount={30} />

          {/* Signup Form */}
          <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 mx-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Sign Up</h2>
            <form className="space-y-5">
              <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-lightblue focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-lightblue focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-lightblue focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <button
                  type="submit"
                  className="w-full bg-brand-lightblue/10 text-white py-3 rounded-lg font-semibold hover:bg-brand-lightblue/20 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Create Account
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                Already have an account?{" "}
                <a href="/auth/login" className="text-brand-lightblue hover:text-brand-lightblue/80 font-semibold transition-colors duration-200">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
  );
}