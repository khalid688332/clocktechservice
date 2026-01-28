// src/components/sections/Logo.jsx
import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Logo = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "Premium logos, animated banners, full branding, social media kits — delivered in record time.",
    },
    {
      q: "How long have you been in business?",
      a: "5+ years dominating the design industry. Thousands of happy clients worldwide.",
    },
    {
      q: "What's your design process?",
      a: "Brief → Research → First concepts in 24h → Unlimited revisions → Final files instantly.",
    },
    {
      q: "Which tools do you use?",
      a: "Adobe Suite, Figma, After Effects + latest AI tools — professional grade only.",
    },
    {
      q: "How much does it cost?",
      a: "Transparent pricing. Express 12–48hr packages available. No hidden charges.",
    },
    {
      q: "How fast can you deliver?",
      a: "Express: 12–48 hours\nStandard: 2–5 days\nWe work 24×7!",
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-black text-white relative overflow-hidden">
      {/* Background (no gradient utilities, sirf solid orange glows) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-orange-500 tracking-tight leading-none">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Speed meets perfection — every single time
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl 
                         border border-white/10 transition-all duration-700 
                         hover:border-orange-500 hover:bg-orange-500/10 
                         hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-2"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left p-8"
              >
                {/* Question */}
                <span className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide">
                  {item.q}
                </span>

                {/* Icon Box */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                    openIndex === i
                      ? "bg-orange-500 rotate-180"
                      : "bg-orange-500/20 group-hover:bg-orange-500"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  openIndex === i ? "max-h-96 mt-0 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8">
                  <p className="text-gray-300 text-lg leading-relaxed pt-4 border-t border-orange-500/30">
                    {item.a}
                  </p>
                </div>
              </div>

              {/* Bottom Orange Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-700 group-hover:w-full"></div>

              {/* Corner Glow */}
              <div className="absolute top-6 right-6 w-24 h-24 bg-orange-500/25 rounded-full blur-3xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
export { Logo };

















