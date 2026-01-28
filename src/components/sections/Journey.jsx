import React from "react";
import { FaFlag, FaRocket, FaUsers } from "react-icons/fa6";

export const Journey = () => {
  const milestones = [
    {
      year: "2024",
      title: "ClockTech Founded",
      text: "Started with a mission to deliver modern, performance-driven digital solutions.",
      icon: <FaFlag />,
      align: "left",
    },
    {
      year: "2025",
      title: "First Major Success",
      text: "Delivered a custom solution for a global client, setting a new quality benchmark.",
      icon: <FaRocket />,
      align: "right",
    },
    {
      year: "2025",
      title: "Team Expansion",
      text: "Expanded our expert team to offer complete design, development & marketing services.",
      icon: <FaUsers />,
      align: "left",
    },
  ];

  return (
    <section id="journey" className="min-h-screen bg-black text-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6 border-b border-white/10 pb-10">
          <div className="max-w-xl">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm">Our Evolution</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-2">
              The <span className="text-orange-500">Journey</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed italic">
            "Turning digital concepts into industrial-grade reality, one milestone at a time."
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Solid & Minimal) */}
          <div className="absolute left-0 md:left-1/2 w-[1px] h-full bg-white/10 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-0 md:mb-16 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <JourneyCard item={item} />
                </div>

                {/* Center Indicator */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 transform md:-translate-y-1/2 z-20">
                   <div className="w-3 h-3 bg-black border-2 border-orange-500 rotate-45 group-hover:bg-orange-500 transition-colors duration-300" />
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const JourneyCard = ({ item }) => {
  return (
    <div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-orange-500 transition-all duration-500 ease-in-out">
      {/* Year Badge - Floating Style */}
      <div className="absolute -top-4 left-6 bg-orange-500 text-black px-4 py-1 text-xs font-black tracking-widest uppercase">
        {item.year}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-orange-500 transition-colors italic">
            {item.title}
          </h3>
          <span className="text-2xl text-orange-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
            {item.icon}
          </span>
        </div>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
          {item.text}
        </p>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-style-solid border-t-[20px] border-t-transparent border-r-[20px] border-r-orange-500/0 group-hover:border-r-orange-500/50 transition-all" />
    </div>
  );
};