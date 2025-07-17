import HeroSection from "@/components/HeroSection";
import Menu from "../layouts/quick-access/menu";
import About from "@/content/about";
import JadwalSholat from "@/components/Cards/Containers/jadwal-sholat";
import MapCard from "@/components/Cards/Containers/MapCard";
import JamKerjaCard from "@/components/Cards/Containers/JamKerjaCard";
// import dynamic from "next/dynamic";

// const MapCard = dynamic(() => import("@/components/Cards/Containers/MapCard"));

export default function Home() {
  return (
    <main
      id="home"
      className="w-full min-h-screen mb-56 flex flex-col scroll-smooth"
    >
      <HeroSection />
      <Menu />
      <About />
      <section className="w-full h-auto flex sm:flex-row flex-col sm:justify-around items-start sm:gap-y-0 gap-y-4 sm:px-4 px-2">
        <JadwalSholat />
        <MapCard />
        <JamKerjaCard />
      </section>
    </main>
  );
}
