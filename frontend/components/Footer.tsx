"use client";

import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <section className="relative py-24 px-6 text-center bg-gradient-to-b from-brand-blue to-brand-navy overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-lightblue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/full-logo-no-bg.png"
            alt="Savify"
            width={250}
            height={75}
            className="mx-auto"
          />
        </div>

        {/* Slogan */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-snug">
          Simplify Your Finances.
          <br />
          Savify Your Future.
        </h2>

        {/* Social Icons & Email */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/savify.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 text-white/80 group-hover:text-brand-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/savifyca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 text-white/80 group-hover:text-brand-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:business@savify.com"
            className="group p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-white/80 group-hover:text-brand-blue transition-colors" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <a
            href="/auth/signup"
            className="px-10 py-4 bg-brand-blue text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-brand-lightblue hover:text-brand-navy hover:scale-105 transition-all inline-block"
          >
            Join Savify
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/50">
          Copyright © {new Date().getFullYear()}, Savify. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
