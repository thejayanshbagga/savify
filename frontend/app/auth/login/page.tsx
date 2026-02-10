// app/auth/login/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function LoginPage() {
  return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
          {/* Animated Background */}
          <AnimatedBackground showParticles={true} showOrbs={true} particleCount={30} />

          {/* Login Form */}
          <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 mx-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Login</h2>

            {/* Google Login Button */}
            <a
                href="http://localhost:5001/auth/google"
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </a>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-white/50 bg-transparent">or</span>
              </div>
            </div>

            <form className="space-y-5">
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
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                Forgot password?
              </a>
            </div>
            <div className="mt-4 text-center">
              <p className="text-white/70 text-sm">
                Don't have an account?{" "}
                <a href="/auth/signup" className="text-brand-lightblue hover:text-brand-lightblue/80 font-semibold transition-colors duration-200">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
  );
}