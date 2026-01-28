import React, { useState } from "react";

export const Client = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: "Lellina",
      role: "Content Creator",
      feedback:
        "ClockTech delivered a clean, modern logo that perfectly fit my brand! Super fast and professional.",
      rating: 5,
    },
    {
      name: "Aemila",
      role: "Twitch Streamer",
      feedback:
        "Best experience ever! Creative, fast replies, and the final result was beyond my expectations.",
      rating: 5,
    },
    {
      name: "Elly",
      role: "YouTube Influencer",
      feedback:
        "Lightning-fast delivery, amazing creativity, and top-notch quality. Highly recommend ClockTech!",
      rating: 5,
    },
  ];

  return (
    <section
      id="clients"
      className="py-24 lg:py-36 bg-black text-white relative overflow-hidden"
    >
      {/* Background Glow - SAME AS PROJECTS */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-orange-500 tracking-tight leading-none">
            WHAT CLIENTS SAY
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real feedback from creators who trusted ClockTech with their brand.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((client, index) => (
            <div
              key={index}
              onClick={() => setSelectedTestimonial(client)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl 
            border border-white/10 transition-all duration-700 
            hover:border-orange-500 hover:bg-orange-500/10 
            hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-8 p-10"
            >
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl text-orange-500 drop-shadow-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed italic mb-10 min-h-40">
                "{client.feedback}"
              </p>

              {/* Name & Role */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h4 className="text-xl md:text-2xl font-bold text-orange-500 text-center tracking-wide drop-shadow-lg">
                  {client.name}
                </h4>
                <p className="text-sm md:text-base text-gray-500 uppercase tracking-wider mt-2 text-center">
                  {client.role}
                </p>
              </div>

              {/* Orange Glow */}
              <div className="absolute top-6 right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl 
            opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL - SAME ORANGE THEME */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-8"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 max-w-2xl mx-auto text-center
          hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 text-orange-500 text-4xl font-bold hover:scale-125 transition"
            >
              X
            </button>

            {/* Modal Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-5xl text-orange-500 drop-shadow-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Feedback */}
            <p className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed mb-10">
              "{selectedTestimonial.feedback}"
            </p>

            {/* Client Name / Role */}
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
              {selectedTestimonial.name}
            </h3>
            <p className="text-lg md:text-xl text-gray-400 uppercase tracking-wider mt-2">
              {selectedTestimonial.role}
            </p>

            {/* Glow */}
            <div className="absolute top-6 right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}
    </section>
  );
};









