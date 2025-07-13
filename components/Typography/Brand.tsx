import Image from "next/image";
import { Fascinate_Inline } from "next/font/google";

const abeezee = Fascinate_Inline({
    weight: "400",
    subsets: ["latin"],
});

export default function Brand({Text} : {Text : string}) {
  return (
    <main className="flex items-center">
      <Image
        src={"/logo1.png"}
        alt="logo"
        width={100}
        height={100}
        className="w-12 h-12 object-contain"
      />
      <p className={`${abeezee.className} text-3xl font-bold bg-gradient-to-r from-[#2F5249] via-[#437057] to-[#97B067] bg-clip-text text-transparent`}>
        {Text}
      </p>
    </main>
  );
}
