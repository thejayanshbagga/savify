"use client";
import React from "react";

export default function Footer() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-center relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

      {/* Desktop */}
      <div className="hidden md:block">

        {/* Social Icons Left - spaced out */}
        <div className="absolute top-10 left-20 flex items-center space-x-6">
          <a href="https://www.instagram.com/savify.official/" target="_blank">
            <img src="/images/icon-instagram.png" className="w-8 h-8 hover:opacity-80 transition" />
          </a>
          <a href="https://www.linkedin.com/company/savifyca/" target="_blank">
            <img src="/images/icon-linkedin.png" className="w-8 h-8 hover:opacity-80 transition" />
          </a>
        </div>

        {/* Email right */}
        <div className="absolute top-10 right-20 flex items-center space-x-3">
          <img src="/images/icon-email.png" className="w-8 h-8" />
          <a
            href="mailto:jbagga3@uwo.ca"
            className="text-white text-lg font-bold hover:text-blue-200 transition"
          >
            jbagga3@uwo.ca
          </a>
        </div>

        {/* Slogan center */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <p className="text-2xl font-bold leading-snug">
            Simplify Your Finances.
            <br />
            Savify Your Future.
          </p>
        </div>

        {/* Main CTA */}
        <div className="relative mt-32 mb-16 text-center">
          <img src="/logo-savify-no-background.png" className="h-12 mb-6 mx-auto" />
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

      {/* Mobile */}
      <div className="block md:hidden text-center px-4 pt-2 pb-3 relative">

        {/* Social Icons */}
        <div className="absolute top-3 left-4">
          <img src="/images/icon-instagram.png" className="w-7" />
        </div>

        <div className="absolute top-3 right-4">
          <img src="/images/icon-linkedin.png" className="w-7" />
        </div>

        <div className="pt-12"></div>

        {/* Email */}
        <div className="mb-4">
          <img src="/images/icon-email.png" className="w-6 inline-block mr-2" />
          <a href="mailto:business@savify.com" className="text-white font-bold text-lg">
            business@savify.com
          </a>
        </div>

        {/* Slogan */}
        <h2 className="text-xl font-bold my-5">
          Simplify Your Finances,
          <br />
          Savify Your Future.
        </h2>

        {/* CTA */}
        <div className="my-8">
          <img src="/logo-savify-no-background.png" className="h-10 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-6">Start Saving Smarter Today</h2>
          <a
            href="/auth/signup"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition inline-block"
          >
            Join Savify
          </a>
        </div>

        <div className="text-sm text-white/80 mt-8">
          Copyright © {new Date().getFullYear()}, Savify. All Rights Reserved.
        </div>
      </div>

    </section>
  );
}
