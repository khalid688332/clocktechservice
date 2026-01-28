import React from "react";

export const Home = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  const orange = "#f97316";
  const orangeRGBA = "rgba(249, 115, 22, ";

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#000000",  // Pure black, no gradient
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 20px 60px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Yeh poora div hata diya — yahi gradient/glow create kar raha tha */}
      {/* 
      <div style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }}>
        ... blurred circles
      </div>
      */}

      {/* Main Title */}
      <h1
        style={{
          fontWeight: "900",
          color: orange,
          letterSpacing: "-0.025em",
          textShadow: `0 0 30px ${orangeRGBA}0.6)`,
          marginBottom: "20px",
          maxWidth: "90%",
          lineHeight: "1",
          fontSize: "clamp(36px, 7vw, 80px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        CLOCK TECH MODERN SOLUTION
      </h1>

      {/* Description */}
      <p
        style={{
          color: "#9ca3af",
          fontSize: "clamp(14px, 2.5vw, 18px)",
          maxWidth: "600px",
          lineHeight: "1.75",
          marginBottom: "40px",
          position: "relative",
          zIndex: 10,
        }}
      >
        Empowering digital innovation with creative solutions, technology, and
        design excellence. Transforming ideas into impactful digital experiences.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <button
          style={{
            padding: "14px 32px",
            backgroundColor: orange,
            border: "none",
            borderRadius: "12px",
            color: "#000",
            fontWeight: "700",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "clamp(15px, 2vw, 17px)",
            boxShadow: `0 6px 25px ${orangeRGBA}0.4)`,
            transform: "translateY(0)",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = `0 0 30px ${orangeRGBA}0.8)`;
            e.target.style.transform = "translateY(-6px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = `0 6px 25px ${orangeRGBA}0.4)`;
            e.target.style.transform = "translateY(0)";
          }}
          onClick={scrollToAbout}
        >
          Explore
        </button>

        <button
          style={{
            padding: "14px 32px",
            background: "transparent",
            border: `2px solid ${orange}`,
            borderRadius: "12px",
            color: "white",
            fontWeight: "700",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "clamp(15px, 2vw, 17px)",
            transform: "translateY(0)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = orange;
            e.target.style.color = "black";
            e.target.style.transform = "translateY(-6px)";
            e.target.style.boxShadow = `0 0 30px ${orangeRGBA}0.8)`;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
          onClick={scrollToContact}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

