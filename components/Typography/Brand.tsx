import Image from "next/image";
import { ADLaM_Display } from "next/font/google";
import useScrollContext from "@/hook/useScrollNav";

const abeezee = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
});

export default function Brand({Text} : {Text : string}) {
  const [scroll] = useScrollContext()  

  return (
    <main className="flex items-center">
      <Image
        src={"/logo1.png"}
        alt="logo"
        width={100}
        height={100}
        className="w-12 h-12 object-contain"
      />
      <p className={`${abeezee.className} ${scroll ? "bg-gradient-to-r from-[#2F5249] via-[#437057] to-[#97B067] text-transparent" : "text-white" } sm:text-3xl text-2xl font-bold bg-clip-text`}>
        {Text}
      </p>
    </main>
  );
}
