import HeroSection from "@/components/HeroSection";
import Menu from "../layouts/quick-access/menu";

export default function Home() {
  return (
    <main id="home" className="w-full min-h-screen mb-56 flex flex-col scroll-smooth">
      <HeroSection />
      <Menu/>
    </main>
  );
}
