import React, { useState, useEffect } from "react";
import background from "/LandingBackground.gif"; // Import the background image

const Page1 = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const generateFireflies = () => {
      const numFireflies = 15;
      const newFireflies = Array.from({ length: numFireflies }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // Random horizontal position
        size: Math.random() * 6 + 4, // Random size between 4px to 10px
        duration: Math.random() * 4 + 2, // Animation duration between 2s to 6s
        delay: Math.random() * 2, // Random delay for smooth appearance
      }));
      setFireflies(newFireflies);
    };

    generateFireflies();
  }, []);

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

      {/* Fireflies Animation */}
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="absolute z-50"
          style={{
            left: `${fly.left}%`,
            bottom: "-10px",
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            backgroundColor: "#fecc59",
            borderRadius: "50%",
            boxShadow: "0 0 10px #fecc59, 0 0 20px #fecc59",
            animation: `firefly ${fly.duration}s ease-in-out ${fly.delay}s infinite`,
          }}
        />
      ))}

      {/* Firefly Animation Keyframes */}
      <style>
        {`
          @keyframes firefly {
            0% { transform: translateY(0) translateX(0); opacity: 1; }
            25% { transform: translateY(-20vh) translateX(-10px); opacity: 0.8; }
            50% { transform: translateY(-40vh) translateX(10px); opacity: 0.6; }
            75% { transform: translateY(-60vh) translateX(-10px); opacity: 0.4; }
            100% { transform: translateY(-100vh) translateX(0); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Page1;
