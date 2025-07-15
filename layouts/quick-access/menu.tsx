import CardMenuQA from "@/components/Cards/Menu-QA";

export default function Menu() {
    return (
        <main className="w-full h-40 absolute sm:top-[28rem] top-[26rem] flex items-center justify-around sm:px-0 px-4">
            <section className="w-full h-full sm:flex sm:items-center sm:justify-center sm:gap-6 grid grid-cols-4 gap-4">
                <CardMenuQA MenuOptions="Location" NavigationLink="/" Icons={'/Icons/Menu/map.png'}/>
                <CardMenuQA MenuOptions="Informasi Publik" NavigationLink="/" Icons={'/Icons/Menu/documentation.png'}/>
                <CardMenuQA MenuOptions="BUMDES" NavigationLink="/" Icons={'/Icons/Menu/shops.png'}/>
                <CardMenuQA MenuOptions="Arship Berita" NavigationLink="/" Icons={'/Icons/Menu/folders.png'}/>
                <CardMenuQA MenuOptions="Galeri Desa" NavigationLink="/" Icons={'/Icons/Menu/gallery.png'}/>
                <CardMenuQA MenuOptions="Pengaduan" NavigationLink="/" Icons={'/Icons/Menu/speaker.png'}/>
                <CardMenuQA MenuOptions="Pembangunan" NavigationLink="/" Icons={'/Icons/Menu/architerture.png'}/>
                <CardMenuQA MenuOptions="Status IDM" NavigationLink="/" Icons={'/Icons/Menu/graph.png'}/>
            </section>
        </main>
    )
}