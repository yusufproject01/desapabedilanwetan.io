import { FaClock, FaMosque } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Inter } from "next/font/google";
import Image from "next/image";
import { DatasJadwalSholat } from "@/public/public-datas/data-jadwal-sholat";
import { DatasJamKerja } from "@/public/public-datas/data-jam-kerja";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export default function JamKerjaCard() {
  return (
    <main className="sm:w-96 w-full rounded-lg border-2 border-slate-200 shadow-md overflow-hidden mb-4">
      {/* Header */}
      <section className="w-full sm:h-[4rem] border-b border-slate-300 bg-teal-700 flex items-center justify-center">
        <div className="w-12 h-12 flex justify-center items-center">
          <FaClock size={28} className="text-white" />
        </div>
        <h1 className="font-semibold text-2xl text-white">Jam Kerja</h1>
      </section>

      {/* Tabel Jam Kerja */}
      <section className="w-full overflow-x-auto p-4">
        <table className="w-full border-collapse text-sm text-slate-800">
          <thead>
            <tr className="bg-teal-800 text-white text-left">
              <th className="py-2 px-3 border">Hari</th>
              <th className="py-2 px-3 border">Mulai</th>
              <th className="py-2 px-3 border">Selesai</th>
            </tr>
          </thead>
          <tbody>
            {DatasJamKerja.map((data, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
              >
                <td className="py-2 px-3 border border-slate-200 font-medium">
                  {data.hari}
                </td>

                {/* Jika libur, tampilkan tombol merah */}
                {data.libur ? (
                  <>
                    <td
                      colSpan={2}
                      className="py-2 px-3 border border-slate-200"
                    >
                      <span className="inline-block px-3 py-1 bg-red-500 text-white rounded text-center text-sm">
                        Libur
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-2 px-3 border border-slate-200">
                      {data.mulai}
                    </td>
                    <td className="py-2 px-3 border border-slate-200">
                      {data.selesai}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
