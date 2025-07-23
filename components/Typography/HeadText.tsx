import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function HeadText({ children }: { children: string }) {
  return (
    <h1 className={`${poppins.className} sm:text-4xl text-2xl text-slate-600`}>
      {children}
    </h1>
  );
}
