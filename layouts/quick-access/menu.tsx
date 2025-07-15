import CardMenuQA from "@/components/Cards/Menu-QA";

export default function Menu() {
  return (
    <main className="w-full sm:h-40 h-72 absolute sm:top-[28rem] top-[26rem] flex items-center justify-around sm:px-0 px-4 sm:py-0 py-2 overflow-hidden">
      <section className="w-full h-full sm:flex sm:items-center sm:justify-center sm:gap-x-6 gap-x-2 sm:gap-y-0 gap-y-2 grid grid-cols-4">
        <CardMenuQA
          animationsDelay={"2.3s"}
          MenuOptions="Location"
          NavigationLink="/"
          Icons={"/Icons/Menu/map.png"}
        />
        <CardMenuQA
          animationsDelay={"2s"}
          MenuOptions="Informasi Publik"
          NavigationLink="/"
          Icons={"/Icons/Menu/documentation.png"}
        />
        <CardMenuQA
          animationsDelay={"1.7s"}
          MenuOptions="BUMDES"
          NavigationLink="/"
          Icons={"/Icons/Menu/shops.png"}
        />
        <CardMenuQA
          animationsDelay={"1.4s"}
          MenuOptions="Arship Berita"
          NavigationLink="/"
          Icons={"/Icons/Menu/folders.png"}
        />
        <CardMenuQA
          animationsDelay={"1.1s"}
          MenuOptions="Galeri Desa"
          NavigationLink="/"
          Icons={"/Icons/Menu/gallery.png"}
        />
        <CardMenuQA
          animationsDelay={"0.8s"}
          MenuOptions="Pengaduan"
          NavigationLink="/"
          Icons={"/Icons/Menu/speaker.png"}
        />
        <CardMenuQA
          animationsDelay={"0.5s"}
          MenuOptions="Pembangunan"
          NavigationLink="/"
          Icons={"/Icons/Menu/architerture.png"}
        />
        <CardMenuQA
          animationsDelay={"0.2s"}
          MenuOptions="Status IDM"
          NavigationLink="/"
          Icons={"/Icons/Menu/graph.png"}
        />
      </section>
    </main>
  );
}
