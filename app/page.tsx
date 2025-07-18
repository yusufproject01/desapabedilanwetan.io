import HeroSection from "@/components/HeroSection";
import Menu from "../layouts/quick-access/menu";
import About from "@/content/about";
import JadwalSholat from "@/components/Cards/Containers/Informasi-umum/jadwalSholatCard";
// import MapCard from "@/components/Cards/Containers/MapCard";
import JamKerjaCard from "@/components/Cards/Containers/Informasi-umum/JamKerjaCard";
import dynamic from "next/dynamic";
import InformasiDesa from "@/components/Cards/Containers/Informasi-desa/InformasiDesa";

const MapCard = dynamic(
  () => import("@/components/Cards/Containers/Informasi-umum/MapCard")
);

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
      <section className="w-full sm:h-[80vh] sm:px-4 sm:py-4 flex items-center justify-center border border-slate-300">
        <InformasiDesa />
      </section>
    </main>
  );
}
