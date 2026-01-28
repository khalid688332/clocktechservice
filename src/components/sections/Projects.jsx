import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/client-1.jpeg";
import img2 from "../../assets/App.png";
import img3 from "../../assets/graphic.jpeg";
import img4 from "../../assets/uiux.jpeg";
import img5 from "../../assets/cpn-cre.jpeg";
import img6 from "../../assets/chat-bot.jpeg";
import img7 from "../../assets/D-M.jpeg";
import img8 from "../../assets/ecomerce.jpeg";
import img9 from "../../assets/c-s.jpeg";

const projects = [
  { img: img1, title: "WEB DEVELOPMENT" },
  { img: img2, title: "APP DEVELOPMENT" },
  { img: img3, title: "GRAPHIC DESIGNING" },
  { img: img4, title: "UI/UX DESIGN" },
  { img: img5, title: "CONTENT WRITING" },
  { img: img6, title: "AI CHAT BOT DEVELOPMENT" },
  { img: img7, title: "DIGITAL MARKETING AND SEO" },
  { img: img8, title: "E-COMMERCE MANAGEMENT" },
  { img: img9, title: "CUSTOM SOFTWARE" },
];

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-24 lg:py-36 bg-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-orange-500 tracking-tight leading-none">
            OUR SERVICE
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Bold. Modern. Result-Driven Designs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate(`/open/${index}`)}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl 
                         border border-white/10 transition-all duration-700 
                         hover:border-orange-500 hover:bg-orange-500/10 
                         hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-6"
            >
              {/* Image */}
              <div className="overflow-hidden relative pb-[75%]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover 
                             transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-700 flex items-center justify-center"
              >
                <div className="text-center transform scale-75 group-hover:scale-100 transition-transform duration-700">
                  <p className="text-3xl md:text-4xl font-black text-white tracking-wider drop-shadow-2xl">
                    VIEW PROJECT
                  </p>
                  <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </div>
              </div>

              {/* Title BELOW the image */}
              <div className="py-6 bg-black/60 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




