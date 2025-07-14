"use client";

import { useEffect, useState } from "react";
import Brand from "../Typography/Brand";
import Link from "next/link";
import { ABeeZee } from "next/font/google"
import { usePathname } from "next/navigation";
import useScrollContext from "@/hook/useScrollNav";

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});

export default function NavbarMenu() {
    const pathname = usePathname();
    const [scroll] = useScrollContext()

  return (
    <main
      className={`w-full h-16  px-40 flex items-center justify-center fixed z-50 transform duration-300 ease-in-out
    ${scroll ? "bg-white shadow-lg" : "bg-white/20 backdrop:blur-lg"}`}
    >
      <section className="w-1/2 h-full flex justify-start items-center px-2">
        <Brand Text="DesaPabedilanWetan"/>
      </section>
      <section className="w-1/2 h-full flex justify-end items-center px-2">
        <ul className={`${abeezee.className} ${scroll ? "text-[#2F5249]" : "text-white"} h-full flex justify-center items-center gap-8`}>
          <Link href="/" className={pathname === "/" ? "h-full flex justify-center items-center border-b-2 border-[#2F5249] font-bold" : "h-full flex justify-center items-center border-0" }>Beranda</Link>
          <Link href="/berita" className={pathname === "/berita" ? "h-full flex justify-center items-center border-b border-[#2F5249] font-bold" : "h-full flex justify-center items-center border-0"}>Berita</Link>
          <Link href="/galeri" className={pathname === "/galeri" ? "h-full flex justify-center items-center border-b border-[#2F5249] font-bold" : "h-full flex justify-center items-center border-0"}>Galeri</Link>
          <Link href="/" className={`h-full w-24 rounded-sm flex justify-center items-center ${scroll ? "bg-[#2F5249] text-white hover:brightness-90" : "hover:text-[#437057]"}`}>Kontak</Link>
        </ul>
      </section>
    </main>
  );
}
