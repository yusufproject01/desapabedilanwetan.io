import Image from "next/image";
import { Poppins } from "next/font/google";
import { MdDateRange } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export default function BeritaCard() {
  return (
    <button className="bg-white w-[25rem] hover:cursor-pointer h-96 border border-slate-300 rounded-sm shadow-sm p-3 flex flex-col gap-y-3">
      <Image
        src={"/img/material/pemerintah-desa.jpeg"}
        alt="logo"
        width={100}
        height={100}
        className="w-full h-1/2 object-cover rounded-t-sm"
      />
      <div className="w-full h-1/2 gap-y-2 flex flex-col">
        <h1
          className={`${poppins.className} font-bold text-xl text-teal-700 text-justify hover:cursor-pointer hover:brightness-150`}
        >
          Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
        </h1>
        <p className="flex items-center gap-x-2 text-xs hover:cursor-text">
          <span className="flex gap-x-1">
            <MdDateRange size={16} className="text-teal-700" />
            01 Januari 2023
          </span>
          <span className="flex gap-x-1">
            <CiUser size={16} className="text-teal-700" />
            Admin
          </span>
        </p>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          delectus iure voluptatem, iusto enim blanditiis. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Porro delectus iure
          voluptatem, iusto enim blanditiis.
        </p>
      </div>
    </button>
  );
}
