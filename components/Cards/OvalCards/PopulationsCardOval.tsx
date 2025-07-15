import CountDatas from "@/fiture/calculation/CountDatas"
import { DatasDesa } from "@/public/public-datas/datasDesa"
import Image from "next/image"
import { Inter } from 'next/font/google'    

const inter = Inter({
    subsets: ["latin"],
    weight: "500",
})

export default function PopulationsCardOval() {
    
    function RenderDatas() {
        return DatasDesa.map((data, index) => (
            <div key={index} className={`sm:max-w-[35rem] max-w-[16rem] w-full sm:h-60 h-48 flex flex-col items-center justify-center`}>
                <section className="w-full h-2/3 flex justify-center items-center">
                    <Image
                        src={data.image}
                        alt={data.type}
                        width={100}
                        height={100}
                        className="sm:w-32 w-20 sm:h-32 h-20 object-contain"
                    />
                </section>
                <section className={`${inter.className} w-full h-1/3 flex flex-col justify-center items-center`}>
                    <div className="w-full h-1/2 flex justify-center items-center">
                        <h1 className="sm:text-5xl text-4xl font-semibold">
                            <CountDatas value={data.value} />
                        </h1>
                    </div>
                    <div className="w-full h-1/2 flex justify-center items-center">
                        <h1 className="sm:text-lg text-sm">
                            {data.type}
                        </h1>
                    </div>
                </section>
            </div>
        ))
    }
    
    return (<>{RenderDatas()}</>)
}