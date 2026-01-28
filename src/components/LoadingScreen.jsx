import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Clock Tech";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length + 1) {
        clearInterval(timer);
        setTimeout(onComplete, 800);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      
      {/* Compact Logo Section */}
      <div className="relative mb-6">
        {/* Main Circle - CT */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/60 border-4 border-black">
          <span className="text-3xl font-black text-black">CT</span>
        </div>

        {/* Thin Rotating Ring */}
        <div className="absolute inset-0 -m-3 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border-2 border-orange-500 animate-spin"></div>
        </div>

        {/* Pulsing Glow */}
        <div className="absolute inset-0 -m-6 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-orange-500/30 blur-xl animate-ping"></div>
        </div>
      </div>

      {/* Tight Typewriter Text */}
      <h1 className="text-4xl font-black text-orange-500 tracking-tighter">
        {text}
        <span className="inline-block w-0.5 h-10 bg-orange-500 ml-1 animate-pulse"></span>
      </h1>

      {/* Tiny Tagline */}
      <p className="text-xs text-gray-500 tracking-widest mt-2">
        EMPOWERING INNOVATION
      </p>

      {/* Super Minimal Progress Bar */}
      <div className="mt-6 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-orange-500 rounded-full relative">
          <div className="absolute inset-0 bg-white/40 animate-shine"></div>
        </div>
      </div>

      {/* Clean CSS - jsx={true} ki jagah jsx="true" */}
      <style jsx="true">{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 3s linear infinite; }

        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse { animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shine 1.8s infinite;
        }
      `}</style>
    </div>
  );
};





