import { useEffect } from "react";
import Lenis from "lenis";

export let lenisInstance: Lenis | null = null;

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenisInstance = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
