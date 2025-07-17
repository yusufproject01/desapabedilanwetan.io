import HeroSection from "@/components/HeroSection";
import Menu from "../layouts/quick-access/menu";
import About from "@/content/about";
import JadwalSholat from "@/components/Cards/Containers/jadwal-sholat";

export default function Home() {
  return (
    <main
      id="home"
      className="w-full min-h-screen mb-56 flex flex-col scroll-smooth"
    >
      <HeroSection />
      <Menu />
      <About />
      <section className="w-full h-auto flex sm:flex-row flex-col sm:justify-around items-center sm:gap-y-0 gap-y-4 sm:px-4 px-2">
        <JadwalSholat />
        <JadwalSholat />
        <JadwalSholat />
      </section>
    </main>
  );
}
