"use client";

import useScrollHero from "@/hook/useScrollHero";
import { herosDatas } from "@/public/public-datas/hero";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Outfit } from "next/font/google";

const anton = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const HeroSection = () => {
  const [currentIndex, prevSlide, nextSlide, setCurrentIndex] = useScrollHero();

  return (
    <div className="relative w-full sm:h-[550px] h-[450px] overflow-hidden rounded-b-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {herosDatas.map((slide, idx) => (
          <div
            key={idx}
            className="w-full sm:h-[550px] h-[450px] relative flex-shrink-0 rounded-b-2xl overflow-hidden"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="sm:object-cover object-center brightness-75"
              priority
            />
            {/* Overlay */}
            <div className="absolute sm:top-28 top-20 sm:left-14 left-6 flex items-center justify-start max-w-xl w-full">
              <div className={`${anton.className} text-white text-left px-6 py-4 rounded-xl`}>
                <h2 
                  className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-wide"
                  style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }}>
                  {slide.title}
                </h2>
                <p 
                  className="text-lg md:text-xl text-white"
                  style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }}
                >
                  {slide.subtitles}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Panah */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-10"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-10"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indikator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {herosDatas.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
