"use client";

import useScrollImage from "@/hook/useScrollHero";
import { herosDatas } from "@/public/public-datas/hero";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "600",
});

export default function InformasiDesa() {
  const [currentIndex] = useScrollImage({ time: 8000 });

  return (
    <main className="sm:w-full h-full border border-slate-300">
      <section className="sm:w-2/3 sm:h-full overflow-hidden">
        <div
          className="flex sm:w-full sm:h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {herosDatas.map((slide, idx) => (
            <div
              key={idx}
              className="w-full sm:h-full h-[400px] relative flex-shrink-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="sm:object-cover object-center brightness-75"
                priority
              />
              {/* Overlay */}
              <div className="absolute bg-black/60 bottom-0 left-0 flex items-center justify-start sm:py-6 sm:w-full w-80">
                <h1 className={`${poppins.className} text-white text-2xl px-6`}>
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
