import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter =  Inter({ 
    subsets: ["latin"],
});

export default function CardMenuQA({MenuOptions, NavigationLink, Icons} : {MenuOptions : string, NavigationLink : string, Icons? : any}) {
    return(
        <Link 
            href={NavigationLink} 
            className="sm:w-[8rem] sm:h-[8rem] w-[5rem] h-[7rem] bg-white border border-slate-200 shadow-lg rounded-lg flex flex-col items-center justify-center
            hover:scale-105 transition duration-300 ease-in-out hover:brightness-95 px-2"
        >
            <div className="w-full h-2/3 flex items-center justify-center border-b border-gray-300">
                <Image
                    src={Icons}
                    alt="Icons"
                    width={100}
                    height={100}
                    className="sm:w-12 sm:h-12 w-8 h-8 object-contain"
                />
            </div>
            <div className="w-full h-1/3 flex items-center justify-center p-2">
                <h1 className={`${inter.className} sm:text-sm text-[10px] sm:font-normal font-semibold flex items-center justify-center`}>{MenuOptions}</h1>
            </div>
        </Link>
    )
}