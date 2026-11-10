import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 170, damping: 22, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 170, damping: 22, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || reduceMotion) return undefined;
    setEnabled(true);

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onOver = (event) => {
      const target = event.target;
      setHovering(
        Boolean(target.closest?.("a, button, [data-cursor='hover'], input, textarea, select"))
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] hidden lg:block">
      <motion.span
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-cyan"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.span
        className="absolute rounded-full border border-accent/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 46 : 28,
          height: hovering ? 46 : 28,
          opacity: hovering ? 0.9 : 0.5,
          backgroundColor: hovering
            ? "rgba(139, 92, 246, 0.12)"
            : "rgba(139, 92, 246, 0)",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
