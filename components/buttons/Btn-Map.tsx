import Link from "next/link";

export default function ButtonMapOpen({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleClick = () => {
    window.open(
      "https://www.openstreetmap.org/?#map=16/-6.85817/108.75875&layers=N",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-10 flex items-center justify-center text-lg text-white bg-teal-700 
      rounded-lg border border-slate-500 hover:brightness-95 shadow-sm hover:cursor-pointer"
    >
      {children}
    </button>
  );
}
