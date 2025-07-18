"use client";

import ButtonMapOpen from "@/components/buttons/Btn-Map";
import dynamic from "next/dynamic";
// import Map from "@/components/Map";
import { FaMosque } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function MapCard() {
  return (
    <main className="sm:w-[400px] w-[300px] flex-shrink-0 h-auto rounded-lg bg-white border-2 border-slate-200 shadow-md overflow-hidden mb-4">
      {/* Header */}
      <section className="w-full h-16 border-b border-slate-300 bg-teal-700 flex items-center justify-center gap-x-2">
        <div className="w-10 h-10 flex justify-center items-center">
          <FaLocationDot size={24} className="text-white" />
        </div>
        <h1 className="font-semibold text-2xl text-white">Lokasi Desa</h1>
      </section>

      {/* Map */}
      <section className="w-full sm:px-4 px-6 py-2">
        <Map />
      </section>
      <section className="w-full py-4 sm:px-4 px-6 gap-y-2">
        <ButtonMapOpen>Buka Peta</ButtonMapOpen>
      </section>
    </main>
  );
}
