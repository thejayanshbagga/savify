import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white fixed w-full top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/logo-savify-no-background.png"
            alt="Savify Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold text-brand-blue">Savify</span>
        </div>
        <nav className="hidden md:flex gap-6 text-brand-indigo">
          <a href="#about" className="hover:text-brand-cyan">About Us</a>
          <a href="#learn" className="hover:text-brand-cyan">Learn</a>
          <a href="#prices" className="hover:text-brand-cyan">Prices</a>
        </nav>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-brand-indigo hover:text-brand-cyan">Login</button>
          <button className="px-4 py-2 bg-brand-cyan text-black rounded-lg hover:bg-cyan-400">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center px-6 pt-40 pb-32 bg-brand-gradient text-white">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Simplify Your Finances
        </h2>
        <p className="text-2xl md:text-3xl mb-8">
          Savify Your Future
        </p>
        <button className="px-8 py-4 bg-pastel-orange text-black rounded-lg text-lg font-semibold hover:opacity-90">
          Get Started
        </button>
      </section>

      {/* About Us */}
      <section id="about" className="py-32 bg-lightgray-3 text-center">
        <h3 className="text-4xl font-bold mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-grayblue-2 text-lg">
          Savify helps students and young adults build better saving habits with
          tools that are simple, engaging, and effective.
        </p>
      </section>

      {/* Learn */}
      <section id="learn" className="py-32 bg-white text-center">
        <h3 className="text-4xl font-bold mb-6">Learn</h3>
        <p className="max-w-3xl mx-auto text-grayblue-2 text-lg">
          Financial literacy resources designed to make money management easier.
        </p>
      </section>

      {/* Prices */}
      <section id="prices" className="py-32 bg-lightgray-3 text-center">
        <h3 className="text-4xl font-bold mb-6">Prices</h3>
        <p className="max-w-3xl mx-auto text-grayblue-2 text-lg">
          Simple, transparent pricing. No hidden fees.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-lightgray-1 text-sm">
        © {new Date().getFullYear()} Savify. All rights reserved.
      </footer>
    </main>
  );
}