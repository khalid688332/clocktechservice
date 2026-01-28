import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Base style – NO background, NO shadow, NO color override
  const baseStyle = {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  };

  const visibleStyle = {
    opacity: 1,
    transform: "translateY(0)",
  };

  return (
    <div
      ref={ref}
      style={{
        ...baseStyle,
        ...(isVisible ? visibleStyle : {}),
      }}
    >
      {children}
    </div>
  );
};





