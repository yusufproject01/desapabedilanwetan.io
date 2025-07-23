import HeroSection from "@/components/HeroSection";
import Menu from "../layouts/quick-access/menu";
import About from "@/content/about";
import JadwalSholat from "@/components/Cards/Containers/Informasi-umum/jadwalSholatCard";
import MapCard from "@/components/Cards/Containers/Informasi-umum/MapCard";
import JamKerjaCard from "@/components/Cards/Containers/Informasi-umum/JamKerjaCard";
// import dynamic from "next/dynamic";
import InformasiDesa from "@/components/Cards/Containers/Informasi-desa/InformasiDesa";
import HeadText from "@/components/Typography/HeadText";
import { FaFileAlt } from "react-icons/fa";
import BtnBerita from "@/components/buttons/Berita/Btn-Berita";
import BeritaCard from "@/components/Cards/Berita/Cards";

// const MapCard = dynamic(
//   () => import("@/components/Cards/Containers/Informasi-umum/MapCard")
// );

export default function Home() {
  return (
    <main
      id="home"
      className="w-full min-h-screen mb-56 flex flex-col scroll-smooth"
    >
      <HeroSection />
      <Menu />
      <About />
      <section className="w-full overflow-x-auto sm:overflow-visible scrollbar-hide sm:px-0 px-4">
        <div className="flex flex-row sm:items-center sm:justify-center gap-4 px-2 sm:px-4 min-w-[900px] sm:min-w-0 w-full">
          <JadwalSholat />
          <MapCard />
          <JamKerjaCard />
        </div>
      </section>
      <section className="w-full sm:h-[80vh] sm:px-4 sm:py-4 flex items-center justify-center">
        <InformasiDesa />
      </section>
      <section className="w-full h-auto py-4 flex flex-col justify-center">
        <div className="px-4 py-2 flex items-center justify-start gap-4">
          <FaFileAlt size={28} className="text-slate-400" />
          <HeadText>Berita Desa</HeadText>
        </div>
        <div className="px-4 py-2 flex items-center justify-start gap-4">
          <BtnBerita>Terbaru</BtnBerita>
          <BtnBerita>Terbaru</BtnBerita>
          <BtnBerita>Terbaru</BtnBerita>
        </div>
        <div className="w-full h-auto grid items-center justify-items-center grid-cols-3 gap-y-4 gap-x-0 py-2">
          <BeritaCard />
          <BeritaCard />
          <BeritaCard />
          <BeritaCard />
        </div>
      </section>
    </main>
  );
}
