// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Savify
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-4">
        <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
          Pricing
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>

        {/* Auth Buttons */}
        <Link
          href="/auth/login"
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Log In
        </Link>
        <Link
          href="/auth/signup"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
