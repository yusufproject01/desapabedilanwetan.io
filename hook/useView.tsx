"use client"

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";


export default function useView() {
  const { ref: refView, inView } = useInView({
    triggerOnce: true, // animasi hanya sekali saat pertama muncul
    threshold: 0.2, // 20% terlihat di layar sudah cukup
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);
  return [show, refView]
}
