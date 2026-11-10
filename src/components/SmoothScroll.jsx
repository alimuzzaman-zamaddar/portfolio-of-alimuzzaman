import { useCallback, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { ScrollContext } from "../lib/scroll-context";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  const scrollTo = useCallback((target, options = {}) => {
    const element =
      typeof target === "string"
        ? document.getElementById(target.replace("#", ""))
        : target;

    if (!element) return;

    if (target === "home" || target === "#home") {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { duration: 1.15 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -88,
        duration: 1.25,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        ...options,
      });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo(() => ({ lenisRef, scrollTo }), [scrollTo]);

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}
