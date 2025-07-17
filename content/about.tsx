import { AboutDatas } from "@/public/public-datas/about";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Populations from "./populations";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  weight: "600",
});

export default function About() {
  return (
    <main className="w-full sm:h-[400px] h-auto sm:py-8 py-4 sm:px-0 px-5 sm:mt-[7rem] mt-[17rem] flex sm:flex-row flex-col justify-center items-center sm:gap-0 gap-y-12">
      <section className="sm:w-1/2 w-full h-full flex sm:flex-row flex-col justify-center items-center">
        <div className="sm:w-1/3 sm:h-full flex items-center justify-center">
          <Image
            src={"/Avatar/Avatar-KepDa.png"}
            alt="Kepala Desa"
            width={100}
            height={100}
            className="sm:w-56 sm:h-56 w-44 h-44 object-contain"
          />
        </div>
        {AboutDatas.map((data, index) => (
          <div
            key={index}
            className={`${inter.className} sm:w-2/3 sm:h-full flex flex-col items-center justify-center sm:gap-4 gap-4 sm:px-2`}
          >
            <h1 className="font-semibold">{data.headText}</h1>
            <p className="text-justify">{data.bodyText}</p>
            <h2 className="font-semibold">{data.endText}</h2>
          </div>
        ))}
      </section>
      <section className="sm:w-1/2 w-full h-full 300 flex flex-col justify-center items-center gap-y-2">
        <h1
          className={`${poppins.className} sm:text-4xl text-2xl text-slate-600`}
        >
          Statistik Penduduk Desa
        </h1>
        <div className="w-full h-full flex justify-around items-center gap-2">
          <Populations />
        </div>
      </section>
    </main>
  );
}
