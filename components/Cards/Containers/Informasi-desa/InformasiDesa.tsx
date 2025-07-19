"use client";

import useScrollImage from "@/hook/useScrollHero";
import { herosDatas } from "@/public/public-datas/hero";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
    <main className="w-full h-full border border-slate-200 rounded-sm shadow-sm flex sm:flex-row flex-col">
      <section className="sm:w-2/3 sm:h-full overflow-hidden border-4 border-slate-100">
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
              <div className="absolute bg-black/60 bottom-0 left-0 flex items-center justify-start sm:py-6 py-4 w-full">
                <h1
                  className={`${poppins.className} text-white sm:text-2xl text-xl px-6`}
                >
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="sm:w-1/3 sm:h-full overflow-hidden flex flex-col justify-center items-center border-4 border-slate-100">
        <div className="w-full h-1/2 flex justify-center items-center">
          <Image
            src={"/img/material/pemerintah-desa.jpeg"}
            alt="alt"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <h1 className={`${inter.className} text-lg text-slate-600`}>
            Sejarah Desa Panembakan
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium quis nostrum esse blanditiis dolor sit amet quisquam
            ipsam aliquam accusamus unde possimus perspiciatis quis nostrum
            esse.
          </p>
          <Link
            href={"/"}
            className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg"
          >
            Selengkapnya
          </Link>
        </div>
      </section>
    </main>
  );
}
