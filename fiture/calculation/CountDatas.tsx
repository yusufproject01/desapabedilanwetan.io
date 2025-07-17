"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function CountDatas({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, value, { duration: 5 });
    return () => controls.stop();
  }, []);

  return <motion.pre style={text}>{rounded}</motion.pre>;
}

/**
 * ==============   Styles   ================
 */

const text = {
  color: "#45556c",
};
