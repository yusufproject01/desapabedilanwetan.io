// components/HeroSection.tsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-[url('/bg-1.jpeg')] bg-cover bg-center flex justify-center items-center relative"
    >
      <div className="text-white text-5xl font-bold drop-shadow-xl">
        Hero Section
      </div>
    </section>
  );
};

export default HeroSection;
