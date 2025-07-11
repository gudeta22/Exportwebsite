import React, { useState, useEffect } from "react";
import { TERipple } from "tw-elements-react";
import { FaChevronUp } from "react-icons/fa"; // New icon

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={backToTop}
            className={`${
              showButton ? "inline-block" : "hidden"
            } fixed bottom-6 lg:right-14  right-10  z-50 p-4 
            bg-gradient-to-r from-cyan-500 to-cyan-500 
            text-white rounded-full shadow-xl backdrop-blur-md 
            hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out`}
          >
            <FaChevronUp className="w-5 h-5" />
          </button>
        </TERipple>
      )}
    </>
  );
}
