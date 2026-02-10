"use client";

export default function Features() {
  const items = [
    {
      title: "Savify Save",
      text: "Effortlessly save with Round-Up Savings, Track Expenses, and achieve your financial goals with AI-driven insights and personalized tools.",
      gradient: "from-brand-lightblue/20 to-brand-navy/20",
    },
    {
      title: "Savify Split",
      text: "Ideal for managing shared finances in a hassle-free way.",
      gradient: "from-brand-blue/20 to-brand-lightblue/20",
    },
    {
      title: "Savify Score",
      text: "Make saving fun and rewarding. Earn points, track progress, and unlock perks while reaching your financial goals.",
      gradient: "from-brand-navy/20 to-brand-charcoal/20",
    },
  ];

  return (
    <section id="why-savify" className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-brand-navy to-brand-charcoal overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(216, 222, 233, 0.3) 0%, transparent 50%)',
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Savify?</h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          We make saving effortless by turning your financial goals into
          achievable, fun, and rewarding experiences.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((f, i) => (
          <div
            key={i}
            className={`group p-8 rounded-2xl bg-gradient-to-br ${f.gradient} backdrop-blur-sm border border-white/10 hover:border-brand-lightblue/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-lightblue/20`}
          >
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-lightblue transition-colors">
              {f.title}
            </h3>
            <p className="text-white/70 leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
