"use client";

import Brand from "../components/Typography/Brand";
import Link from "next/link";
import { ABeeZee } from "next/font/google";
import { usePathname } from "next/navigation";
import useScrollContext from "@/hook/useScrollNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});

export default function NavbarMenu() {
  const pathname = usePathname();
  const [scroll] = useScrollContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main
      className={`w-full h-16 sm:px-40 flex items-center justify-center fixed z-50 transform duration-300 ease-in-out
      ${scroll ? "bg-white shadow-lg" : "bg-white/20 backdrop-blur-md"}`}
    >
      <section className="w-1/2 h-full flex justify-start items-center px-2">
        <Brand Text="DesaPanembakan" />
      </section>
      {/* Device Desktop */}
      <section className="w-1/2 h-full hidden sm:flex justify-end items-center px-2">
        <ul
          className={`${abeezee.className} ${
            scroll ? "text-[#2F5249]" : "text-white"
          } h-full flex justify-center items-center sm:gap-8 gap-2`}
        >
          <Link
            href="/"
            className={
              pathname === "/"
                ? "h-full flex justify-center items-center border-b-2 border-[#2F5249] font-bold"
                : "h-full flex justify-center items-center border-0"
            }
          >
            Beranda
          </Link>
          <Link
            onClick={toggleMenu}
            href="/profile"
            className={
              pathname === "/profile"
                ? "h-full flex justify-center items-center border-b-2 border-[#2F5249] font-bold"
                : "h-full flex justify-center items-center border-0"
            }
          >
            Profil
          </Link>
          <Link
            href="/berita"
            className={
              pathname === "/berita"
                ? "h-full flex justify-center items-center border-b border-[#2F5249] font-bold"
                : "h-full flex justify-center items-center border-0"
            }
          >
            Berita
          </Link>
          <Link
            href="/galeri"
            className={
              pathname === "/galeri"
                ? "h-full flex justify-center items-center border-b border-[#2F5249] font-bold"
                : "h-full flex justify-center items-center border-0"
            }
          >
            Galeri
          </Link>
          <Link
            href="/"
            className={`h-full w-24 rounded-sm flex justify-center items-center ${
              scroll
                ? "bg-[#2F5249] text-white hover:brightness-90"
                : "hover:text-[#437057]"
            }`}
          >
            Kontak
          </Link>
        </ul>
      </section>
      {/* Mobile */}
      <section className="w-1/2 h-full flex justify-end items-center sm:hidden pr-2">
        <button onClick={toggleMenu}>
          <span
            className={`
                inline-block transition-transform duration-500 ease-in-out
                ${isOpen ? "rotate-[-180deg]" : "rotate-[180deg]"}
              `}
          >
            {isOpen ? (
              <IoClose
                size={28}
                className={`${scroll ? "text-[#2F5249]" : "text-white"}`}
              />
            ) : (
              <GiHamburgerMenu
                size={25}
                className={`${scroll ? "text-[#2F5249]" : "text-white"}`}
              />
            )}
          </span>
        </button>
      </section>
      {isOpen && (
        <section
          className={`${
            scroll
              ? "bg-white border border-slate-300 shadow-sm"
              : "bg-black/70 backdrop-blur-md"
          } pb-2 sm:hidden w-full h-[300px] absolute top-16 flex justify-center items-center`}
        >
          <ul
            className={`${abeezee.className} ${
              scroll ? "text-[#2F5249]" : "text-white"
            } h-full flex flex-col justify-center items-center sm:gap-8 gap-2`}
          >
            <Link
              onClick={toggleMenu}
              href="/"
              className={
                pathname === "/"
                  ? "h-full flex justify-center items-center border-b-2 border-[#2F5249] font-bold"
                  : "h-full flex justify-center items-center border-0"
              }
            >
              Beranda
            </Link>
            <Link
              onClick={toggleMenu}
              href="/profile"
              className={
                pathname === "/profile"
                  ? "h-full flex justify-center items-center border-b-2 border-[#2F5249] font-bold"
                  : "h-full flex justify-center items-center border-0"
              }
            >
              Profil
            </Link>
            <Link
              onClick={toggleMenu}
              href="/berita"
              className={
                pathname === "/berita"
                  ? "h-full flex justify-center items-center border-b border-[#2F5249] font-bold"
                  : "h-full flex justify-center items-center border-0"
              }
            >
              Berita
            </Link>
            <Link
              onClick={toggleMenu}
              href="/galeri"
              className={
                pathname === "/galeri"
                  ? "h-full flex justify-center items-center border-b border-[#2F5249] font-bold"
                  : "h-full flex justify-center items-center border-0"
              }
            >
              Galeri
            </Link>
            <Link
              onClick={toggleMenu}
              href="/"
              className={`h-full w-24 rounded-sm flex justify-center items-center ${
                scroll
                  ? "bg-[#2F5249] text-white hover:brightness-90"
                  : "hover:text-[#437057]"
              }`}
            >
              Kontak
            </Link>
          </ul>
        </section>
      )}
    </main>
  );
}
