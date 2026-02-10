"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
      <nav
          className="
        fixed top-0 left-0 w-full z-50
        px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5
        flex items-center justify-between
        text-white
        pointer-events-auto
      "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
              src="/logo-savify-no-background.png"
              alt="Savify logo"
              width={60}
              height={60}
              priority
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-90"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg">
          {/* Login - Ghost/Outline Button */}
          <Link
              href="/auth/login"
              className="
            px-3 sm:px-4 md:px-6 py-1.5 sm:py-2
            rounded-full
            bg-transparent
            border-2 border-white/80
            text-white
            font-medium
            hover:bg-white/10
            hover:border-white
            transition-all duration-200
            text-xs sm:text-sm md:text-base
          "
          >
            Login
          </Link>

          {/* Sign Up - Primary CTA */}
          <Link
              href="/auth/signup"
              className="
            px-3 sm:px-4 md:px-6 py-1.5 sm:py-2
            rounded-full
            bg-brand-lightblue/20
            text-white
            font-medium
            hover:bg-brand-lightblue/30
            hover:scale-105
            transition-all duration-200
            shadow-lg
            text-xs sm:text-sm md:text-base
          "
          >
            Sign Up
          </Link>
        </div>
      </nav>
  );
}