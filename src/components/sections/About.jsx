// src/components/sections/About.jsx
import { useEffect, useState } from "react";
import missionImg from "../../assets/mission-1.jpg";
import visionImg from "../../assets/vision.jpeg";
import storyImg from "../../assets/story.jpeg";
// 👇 Icons imports
import expertiseIcon from "../../assets/expertise.jpeg";
import innovationIcon from "../../assets/innovation.png";
import commitmentIcon from "../../assets/commit.png";

const whyItems = [
  {
    title: "Expertise",
    desc: "Years of full‑stack experience, UI/UX and performance optimization.",
    img: expertiseIcon,
  },
  {
    title: "Innovation",
    desc: "Always ahead with React, Next.js, Tailwind, Framer Motion, GSAP.",
    img: innovationIcon,
  },
  {
    title: "Commitment",
    desc: "On‑time delivery, clean code and long‑term partnerships.",
    img: commitmentIcon,
  },
];

export const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const fadeStyle = (i) => ({
    opacity: visibleSections.includes(i) ? 1 : 0,
    transform: visibleSections.includes(i)
      ? "translateY(0)"
      : "translateY(40px)",
    transition: "all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1)",
    willChange: "opacity, transform",
  });

  return (
    <section id="about" className="relative bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16 pb-20 text-center">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-10 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight">
            {"DISCOVER".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block text-white"
                style={{
                  animation: `fadeUp 1s forwards ${i * 70}ms`,
                  opacity: 0,
                  transform: "translateY(50px)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mt-3 xs:mt-4 sm:mt-5 leading-none">
            {"CLOCKTECH".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block text-orange-500"
                style={{
                  animation: `fadeUpGlow 1.3s forwards ${600 + i * 90}ms`,
                  opacity: 0,
                  transform: "translateY(60px)",
                  textShadow:
                    "0 0 25px rgba(249, 115, 22, 0.5), 0 0 50px rgba(249, 115, 22, 0.3)",
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <p
            className="mt-8 sm:mt-10 text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "fadeIn 1.8s forwards 1.8s", opacity: 0 }}
          >
            We craft digital experiences that dominate.
          </p>

          <div
            className="mt-8 w-24 h-1 bg-orange-500 mx-auto rounded-full"
            style={{ animation: "fadeIn 2s forwards 2.3s", opacity: 0 }}
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-4 border-orange-500 rounded-full flex justify-center">
            <div className="w-2 h-6 bg-orange-500 rounded-full mt-3" />
          </div>
        </div>
      </div>

      {/* WHY CLOCKTECH */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 mb-4 uppercase tracking-tight leading-none">
            WHY CLOCKTECH?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            We deliver excellence through expertise, innovation, and commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="fade-section"
                data-index={i}
                style={fadeStyle(i)}
              >
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/40 flex flex-col group cursor-pointer hover:-translate-y-2">
                  {/* ICON BOX – orange ring patla feel ke liye */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-orange-500 mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-1 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 mb-4 uppercase tracking-tight leading-none">
            OUR TECH STACK
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Cutting‑edge tools powering your success.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8">
            {[
              "react",
              "nextjs",
              "tailwind",
              "framer",
              "gsap",
              "nodejs",
              "mongodb",
              "firebase",
              "supabase",
              "prisma",
              "vscode",
              "figma",
              "git",
              "github",
              "vercel",
              "netlify",
            ].map((tech, i) => (
              <div
                key={tech}
                className="fade-section group"
                data-index={i + 3}
                style={fadeStyle(i + 3)}
              >
                <div className="relative h-28 sm:h-32 md:h-36 bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-orange-500 transition-all duration-500 ease-out flex flex-col items-center justify-center group-hover:shadow-2xl group-hover:shadow-orange-500/40 group-hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl shadow-black/50 p-4 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={`/tech/${tech}.png`}
                      alt={tech}
                      className="w-full h-full object-contain drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-xs sm:text-sm md:text-base text-orange-500 font-medium tracking-wider capitalize transition-colors duration-300">
                    {tech.replace("js", ".js")}
                  </p>
                  <div className="absolute top-6 right-6 w-20 h-20 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION / VISION / STORY */}
      <div className="py-20 px-6 md:py-32">
        <div className="max-w-7xl mx-auto space-y-28 md:space-y-40">
          <FadeBlock index={20} fadeStyle={fadeStyle}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <ImageBlock src={missionImg} alt="Mission" />
              <div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 uppercase tracking-tight leading-none">
                  OUR MISSION
                </h2>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  To empower brands with bold, high‑performance digital solutions that stand out, convert better, and grow faster.
                </p>
              </div>
            </div>
          </FadeBlock>

          <FadeBlock index={21} fadeStyle={fadeStyle}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 uppercase tracking-tight leading-none">
                  OUR VISION
                </h2>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  A digital world where every business has access to premium design, strategy, and results‑driven execution.
                </p>
              </div>
              <ImageBlock
                src={visionImg}
                alt="Vision"
                extraClass="order-1 md:order-2"
              />
            </div>
          </FadeBlock>

          <FadeBlock index={22} fadeStyle={fadeStyle}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <ImageBlock src={storyImg} alt="Story" />
              <div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 uppercase tracking-tight leading-none">
                  OUR STORY
                </h2>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  From a small idea to a dedicated digital studio, ClockTech has grown by building long‑term partnerships and shipping work that actually performs.
                </p>
              </div>
            </div>
          </FadeBlock>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeUpGlow {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

const FadeBlock = ({ index, fadeStyle, children }) => (
  <div className="fade-section" data-index={index} style={fadeStyle(index)}>
    {children}
  </div>
);

const ImageBlock = ({ src, alt, extraClass = "" }) => (
  <div className={`relative group cursor-pointer ${extraClass}`}>
    <img
      src={src}
      alt={alt}
      className="rounded-3xl shadow-2xl border border-white/10 w-full h-80 md:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-700 group-hover:border-orange-500 group-hover:shadow-orange-500/40"
      loading="lazy"
    />
    <div className="absolute top-6 right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
  </div>
);
