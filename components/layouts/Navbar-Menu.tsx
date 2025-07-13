"use client";

import { useEffect, useState } from "react";
import Brand from "../Typography/Brand";
import Link from "next/link";
import { ABeeZee } from "next/font/google"
import { usePathname } from "next/navigation";

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});

export default function NavbarMenu() {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <main
      className={`w-full h-16  px-40 flex items-center justify-center fixed z-50 transform duration-300 ease-in-out
    ${scroll ? "bg-white shadow-lg" : "backdrop:blur-lg"}`}
    >
      <section className="w-1/2 h-full flex justify-start items-center px-2">
        <Brand Text="DesaPabedilanWetan"/>
      </section>
      <section className="w-1/2 h-full flex justify-end items-center px-2">
        <ul className={`${abeezee.className} h-full flex justify-center items-center gap-8  text-[#2F5249]`}>
          <Link href="/" className={pathname === "/" ? "font-bold border-b-2 border-[#2F5249] h-full flex justify-center items-center" : "" }>Beranda</Link>
          <Link href="/berita" className={pathname === "/berita" ? "font-bold border-b border-[#2F5249] h-full flex justify-center items-center" : ""}>Berita</Link>
          <Link href="/galeri" className={pathname === "/galeri" ? "font-bold border-b border-[#2F5249] h-full flex justify-center items-center" : ""}>Galeri</Link>
          <Link href="/" className={`h-full w-24 rounded-sm flex justify-center items-center ${scroll ? "bg-[#2F5249] text-white hover:brightness-90" : "hover:text-[#437057]"}`}>Kontak</Link>
        </ul>
      </section>
    </main>
  );
}
