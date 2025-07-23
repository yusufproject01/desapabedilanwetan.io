import { IoIosCheckmark } from "react-icons/io";

export default function BtnBerita({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="py-2 px-6 hover:cursor-pointer hover:brightness-95 flex items-center justify-center gap-x-2
            bg-white shadow-sm rounded-sm border border-slate-300 text-center
            hover:outline-1 hover:outline-[#2a9d8f] hover:outline-offset-2 hover:text-[#2a9d8f]"
    >
      {children}
      <span className="">
        <IoIosCheckmark size={28} />
      </span>
    </button>
  );
}
