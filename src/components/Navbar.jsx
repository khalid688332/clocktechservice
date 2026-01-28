import { useState, useEffect } from "react";
import logo from "../assets/service-1.png"; // ✅ Link import HATAYA

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Journey", "Projects", "Contact"]; // ✅ Journey add

  const orange = "#f97316";
  const orangeRGBA = "rgba(249, 115, 22, ";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: isScrolled ? "rgba(0,0,0,0.95)" : "black",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${orangeRGBA}0.3)`,
        boxShadow: isScrolled 
          ? `0 8px 32px ${orangeRGBA}0.2)` 
          : `0 2px 10px ${orangeRGBA}0.15)`,
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logo}
            alt="ClockTech"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${orange}`,
              boxShadow: `0 0 20px ${orangeRGBA}0.5)`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.12) rotate(8deg)";
              e.target.style.boxShadow = `0 0 30px ${orangeRGBA}0.8)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) rotate(0)";
              e.target.style.boxShadow = `0 0 20px ${orangeRGBA}0.5)`;
            }}
          />
          <h1
            style={{
              fontSize: "clamp(20px, 4vw, 26px)",
              fontWeight: "900",
              color: orange,
              letterSpacing: "1.5px",
              textShadow: `0 0 15px ${orangeRGBA}0.5)`,
            }}
          >
            CLOCK TECH
          </h1>
        </div>

        {/* Desktop Links - ANCHOR LINKS (SCROLL) */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}  // ✅ SCROLL LINKS
              style={{
                color: "#e5e7eb",
                fontWeight: "600",
                fontSize: "15px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "8px 0",
                position: "relative",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = orange;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#e5e7eb";
              }}
            >
              {link}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: 0,
                  height: "2px",
                  backgroundColor: orange,
                  transition: "all 0.3s ease",
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={(e) => (e.target.style.width = "100%")}
                onMouseLeave={(e) => (e.target.style.width = "0%")}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "block md:hidden", // ✅ MOBILE KE LIYE
            fontSize: "28px",
            color: orange,
            background: `${orangeRGBA}0.1)`,
            border: `2px solid ${orangeRGBA}0.3)`,
            borderRadius: "8px",
            cursor: "pointer",
            padding: "8px 12px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = `${orangeRGBA}0.2)`;
            e.target.style.borderColor = orange;
            e.target.style.boxShadow = `0 0 15px ${orangeRGBA}0.4)`;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = `${orangeRGBA}0.1)`;
            e.target.style.borderColor = `${orangeRGBA}0.3)`;
            e.target.style.boxShadow = "none";
          }}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown - ANCHOR LINKS */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: `1px solid ${orange}`,
            padding: "20px 0",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}  // ✅ SCROLL LINKS
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "14px 20px",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
                opacity: 0,
                animation: `fadeInDown 0.4s ease forwards ${i * 0.1}s`,
                transition: "all 0.3s ease",
                position: "relative",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = orange;
                e.target.style.background = `${orangeRGBA}0.1)`;
                e.target.style.borderLeft = `4px solid ${orange}`;
                e.target.style.borderRight = `4px solid ${orange}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff";
                e.target.style.background = "transparent";
                e.target.style.borderLeft = "none";
                e.target.style.borderRight = "none";
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};
;











