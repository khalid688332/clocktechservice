// src/components/sections/Contact.jsx
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/ClockTechModernSolution" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/clocktechmodernsolution/" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/clock-tech/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@ClockTechCom" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@clocktechs" },
    { icon: <FaTwitter />, url: "https://x.com/clocktechcom" },
    { icon: <FaEnvelope />, url: "mailto:support@clocktech.com" },
  ];

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 lg:py-36 bg-black text-white relative overflow-hidden">
        {/* Background Orange Glow */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-32 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-orange-500 tracking-tight leading-none">
              LET'S WORK TOGETHER
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to turn your ideas into reality? Drop a message — we reply fast.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* FORM */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                           transition-all duration-700 hover:border-orange-500 hover:bg-orange-500/10 
                           hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-4 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="acae741f-53c6-4ea1-b94f-e0cc2d2fb741" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 
                               focus:border-orange-500 focus:ring-0 outline-none hover:bg-white/10 transition"
                  />

                  <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 
                               focus:border-orange-500 focus:ring-0 outline-none hover:bg-white/10 transition"
                  />
                </div>

                <input 
                  type="text"
                  name="budget"
                  placeholder="Budget (optional)"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 
                             focus:border-orange-500 hover:bg-white/10 transition"
                />

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 
                             focus:border-orange-500 resize-none hover:bg-white/10 transition"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 rounded-2xl bg-orange-500 text-black font-bold text-lg 
                             hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 active:scale-95 transition"
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>

              {/* Glow */}
              <div className="absolute top-6 right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl 
                              opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* RIGHT SIDE: CONTACT + FOLLOW US */}
            <div className="space-y-8">
              {/* CONTACT INFO */}
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                              transition-all duration-700 hover:border-orange-500 hover:bg-orange-500/10 
                              hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-4 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-8">GET IN TOUCH</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-orange-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Karachi, Pakistan</p>
                      <p className="text-gray-400 text-sm">House#65 Shahwaliullah Nagar Orangi Town</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-orange-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">London, United Kingdom</p>
                      <p className="text-gray-400 text-sm">
                        Address: 103, Oxford House, Oxford Rd, Manchester M1 7ED
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <FaPhone className="text-orange-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">UK Phone</p>
                      <p className="text-gray-400 text-sm">+44 7716 676600</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <FaPhone className="text-orange-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Pakistan Phone</p>
                      <p className="text-gray-400 text-sm">+92 319 6888574</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <FaEnvelope className="text-orange-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <p className="text-gray-400 text-sm">clocktechcom@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl 
                                opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* FOLLOW US */}
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                              transition-all duration-700 hover:border-orange-500 hover:bg-orange-500/10 
                              hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-4 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-8">FOLLOW US</h3>

                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 
                                 text-gray-300 hover:text-white hover:scale-110 transition"
                      target="_blank"
                    >
                      <span className="text-2xl">{s.icon}</span>
                    </a>
                  ))}
                </div>

                <div className="absolute top-6 right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl 
                                opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          </div>
        </div>

        {submitted && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl bg-orange-500 text-black font-bold z-50">
            Message Sent Successfully!
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-400">
            <div>
              <h1 className="text-3xl font-black text-orange-500 mb-6">CLOCKTECH</h1>
              <p className="text-gray-400 text-sm mb-6">
                Founded in 2025, ClockTech Modern Solutions delivers innovative web, mobile, AI, and design solutions globally.
              </p>

              <div className="flex gap-4">
                {socialLinks.slice(0, 5).map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 
                               hover:text-orange-400 hover:border-orange-500 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-orange-400 mb-6">QUICK LINKS</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#home" className="hover:text-orange-400">Home</a></li>
                <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
                <li><a href="#projects" className="hover:text-orange-400">Services</a></li>
                <li><a href="#clients" className="hover:text-orange-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-orange-400">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-orange-400 mb-6">OUR SERVICES</h3>
              <ul className="space-y-4 text-sm">
                <li>Web Development</li>
                <li>App Development</li>
                <li>AI Chat Bots</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-orange-400 mb-6">NEWSLETTER</h3>
              <p className="text-gray-400 text-sm mb-6">Stay updated with ClockTech.</p>

              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl placeholder-gray-500 text-white"
              />

              <button className="mt-3 px-6 py-3 rounded-xl bg-orange-500 text-black font-bold hover:-translate-y-1 transition">
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ClockTech. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};









