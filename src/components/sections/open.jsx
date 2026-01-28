import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

// Same 9 images yahan bhi import
import client1 from "../../assets/client-1.jpeg";
import client2 from "../../assets/uiux.jpeg";
import client3 from "../../assets/graphic.jpeg";
import client4 from "../../assets/client-1.jpeg";
import client5 from "../../assets/client-1.jpeg";
import client6 from "../../assets/client-1.jpeg";
import client7 from "../../assets/client-1.jpeg";
import client8 from "../../assets/client-1.jpeg";
import client9 from "../../assets/client-1.jpeg";

const designs = [client1, client2, client3, client4, client5, client6, client7, client8, client9];

export const Open = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageId = parseInt(id);

  const image = designs[imageId] || designs[0];
  const displayNumber = (imageId >= 0 && imageId <= 8) ? imageId + 1 : 1;

  return (
    <div className="fixed inset-0 bg-black z-[999999] flex flex-col items-center justify-center">

      {/* BADA ORANGE CLOSE BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-[9999999] 
                   bg-orange-600 hover:bg-red-600 text-white 
                   w-16 h-16 md:w-20 md:h-20 rounded-full 
                   flex items-center justify-center shadow-2xl 
                   border-4 border-orange-300 
                   transition-all duration-300 hover:scale-110"
      >
        <FaTimes size={40} />
      </button>

      {/* FULL IMAGE — Perfect Responsive */}
      <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
        <img
          src={image}
          alt={`Design ${displayNumber}`}
          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
        />
      </div>

      {/* Bottom Caption */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 
                      bg-black/80 px-8 py-4 rounded-full text-orange-400 font-bold text-xl md:text-2xl">
        Design 0{displayNumber} • Click × to close
      </div>
    </div>
  );
}

