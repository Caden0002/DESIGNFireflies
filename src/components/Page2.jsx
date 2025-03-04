import React, { useState, useEffect } from "react";
import background from "/LandingBackground.gif"; // Import the background image

const Page2 = () => {
  return (
    <div
      className="relative min-h-screen flex bg-stone-200"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl font-serif text-black"
        style={{
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)", // Glow effect
        }}
      >
        Golden Horizon
      </div>
    </div>
  );
};

export default Page2;
