import { useEffect, useRef, useState } from "react";
import { herosDatas } from "@/public/public-datas/hero";

const useScrollHero = (): [
  number,
  () => void,
  () => void,
  React.Dispatch<React.SetStateAction<number>>
] => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const interval = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === herosDatas.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => resetTimeout();
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? herosDatas.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === herosDatas.length - 1 ? 0 : prev + 1));
  };

  return [currentIndex, prevSlide, nextSlide, setCurrentIndex];
};

export default useScrollHero;
