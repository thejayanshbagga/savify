import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo-savify-no-background.png"
            alt="Savify Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-white font-bold text-lg">Savify</span>
        </div>
      </Link>

      {/* Nav links */}
      <div className="flex space-x-6">
        <Link href="/pricing" className=" px-4 py-2 text-white hover:text-blue-400 transition">
          Pricing
        </Link>
        <Link href="/auth/login" className=" px-4 py-2 text-white hover:text-blue-400 transition">
          Log In
        </Link>
        <Link
          href="/auth/signup" className=" px-4 py-2 text-white hover:text-blue-400 transition">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
