import { useEffect, useState } from "react";

export default function useScrollContext() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 15);
        });
    }, []);
    return [scroll];
}