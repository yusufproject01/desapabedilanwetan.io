"use client";

import { useEffect, useState } from "react";
import Brand from "../Typography/Brand";
import Link from "next/link";
import { ABeeZee } from "next/font/google"

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});

export default function NavbarMenu() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <main
      className={`w-full h-16 border-b border-gray-300 px-40 flex items-center justify-center fixed z-50 shadow transform duration-300 ease-in-out
    ${scroll ? "bg-white" : "bg-white/20 backdrop:blur-lg"}`}
    >
      <section className="w-1/2 h-full flex justify-start items-center px-2">
        <Brand Text="DesaPabedilanWetan"/>
      </section>
      <section className="w-1/2 h-full flex justify-end items-center px-2">
        <ul className={`${abeezee.className} flex items-center gap-4  `}>
          <Link href="/">Beranda</Link>
          <Link href="/berita">Berita</Link>
          <Link href="/galeri">Galeri</Link>
        </ul>
      </section>
    </main>
  );
}
