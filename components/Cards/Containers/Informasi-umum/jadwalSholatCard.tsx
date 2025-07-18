import { FaMosque } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Inter } from "next/font/google";
import Image from "next/image";
import { DatasJadwalSholat } from "@/public/public-datas/data-jadwal-sholat";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export default function JadwalSholat() {
  return DatasJadwalSholat.map((data, index) => (
    <main
      key={data.id}
      className="sm:w-[400px] w-[300px] flex-shrink-0 sm:h-auto h-auto rounded-lg bg-white border-2 border-slate-200 shadow-md overflow-hidden mb-4"
    >
      {/* Header */}
      <section className="w-full sm:h-[4rem] border-b border-slate-300 bg-teal-700 flex items-center justify-center">
        <div className="w-12 h-12 flex justify-center items-center">
          <FaMosque size={30} className="text-white" />
        </div>
        <h1 className="font-semibold text-2xl text-white">Jadwal Sholat</h1>
      </section>

      {/* Info Kota dan Tanggal */}
      <section className="w-full sm:h-auto h-auto flex flex-col px-4">
        <div
          className={`${inter.className} w-full sm:h-16 h-14 flex flex-col items-center justify-center border-b border-slate-300`}
        >
          <div className="w-full h-1/2 flex items-center gap-x-2">
            <FaCalendarDays size={15} />
            <h1 className="text-xs">Kamis, 17 Juli 2025</h1>
          </div>
          <div className="w-full h-1/2 flex items-center gap-x-2">
            <IoLocationOutline size={15} />
            <h1 className="text-lg font-semibold">{data.kota}</h1>
          </div>
        </div>

        {/* List Jadwal Sholat */}
        {data.jadwal.map((item) => (
          <div
            key={item.id}
            className={`${inter.className} w-full sm:h-14 flex items-center justify-between border-b border-slate-300 px-2 py-2`}
          >
            <div className="py-1 flex items-center justify-start gap-x-2">
              <Image
                src={"/Icons/Jadwal-Sholat/mosque-pin.png"}
                alt={item.nama}
                width={100}
                height={100}
                className="sm:w-6 sm:h-6 w-4 h-4 object-contain"
              />
              <h1 className="text-lg">{item.nama}</h1>
            </div>
            <h1 className="text-xl">{item.waktu}</h1>
          </div>
        ))}
      </section>
    </main>
  ));
}
