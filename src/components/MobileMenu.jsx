import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleLinkClick = (sectionId) => {
    // Menu band karo
    setMenuOpen(false);
    
    // Thoda wait karo animation ke liye
    setTimeout(() => {
      // Pehle check karo section exist karta hai ya nahi
      const element = document.getElementById(sectionId);
      
      if (!element) {
        console.log(`Section #${sectionId} not found`);
        return;
      }
      
      // Smooth scroll
      window.scrollTo({
        top: element.offsetTop - 80, // Navbar height adjust
        behavior: 'smooth'
      });
      
      // URL update karo (optional)
      window.history.pushState({}, '', `#${sectionId}`);
    }, 300);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#ff8c00] text-3xl focus:outline-none cursor-pointer hover:text-[#ffae42] transition-colors duration-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      <button
        onClick={() => handleLinkClick("home")}
        className={`text-2xl font-semibold text-[#ff8c00] my-4 transform transition-all duration-300 
                    hover:text-[#ffae42] bg-transparent border-none cursor-pointer px-4 py-2
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
      >
        Home
      </button>

      <button
        onClick={() => handleLinkClick("about")}
        className={`text-2xl font-semibold text-[#ff8c00] my-4 transform transition-all duration-300 
                    hover:text-[#ffae42] bg-transparent border-none cursor-pointer px-4 py-2
                    ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
      >
        About
      </button>

      <button
        onClick={() => handleLinkClick("projects")}
        className={`text-2xl font-semibold text-[#ff8c00] my-4 transform transition-all duration-300 
                    hover:text-[#ffae42] bg-transparent border-none cursor-pointer px-4 py-2
                    ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
      >
        Projects
      </button>

      <button
        onClick={() => handleLinkClick("contact")}
        className={`text-2xl font-semibold text-[#ff8c00] my-4 transform transition-all duration-300 
                    hover:text-[#ffae42] bg-transparent border-none cursor-pointer px-4 py-2
                    ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
      >
        Contact
      </button>
    </div>
  );
};



