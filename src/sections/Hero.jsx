import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import {
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Magnetic from "../components/Magnetic";
import { profile } from "../data/portfolio";
import { useSmoothScroll } from "../lib/scroll-context";

const EASE = [0.22, 1, 0.36, 1];

const NAME_LINE_ONE = "Md. Alimuzzaman";
const NAME_LINE_TWO = "Zamaddar";

const floatingChips = [
  { icon: SiReact, label: "React", color: "#61DAFB", className: "-left-4 -top-4", delay: 0 },
  { icon: SiNextdotjs, label: "Next.js", color: "#F8FAFC", className: "-right-3 -top-4", delay: 0.6 },
  { icon: SiNodedotjs, label: "Node.js", color: "#539E43", className: "-right-5 top-[42%]", delay: 1.1, compact: true },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1", className: "-left-5 top-[34%]", delay: 1.6, compact: true },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8", className: "-bottom-8 right-10", delay: 2.1 },
];

function AnimatedNameLine({ text, reduceMotion }) {
  let charIndex = 0;
  const words = text.split(" ");

  return (
    <span className="block">
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split("").map((character, index) => {
            const delayIndex = charIndex;
            charIndex += 1;
            return (
              <span
                key={`${character}-${index}`}
                className="inline-block overflow-hidden align-bottom"
              >
                <motion.span
                  className="inline-block"
                  initial={reduceMotion ? false : { y: "115%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.15 + delayIndex * 0.022,
                    ease: EASE,
                  }}
                >
                  {character}
                </motion.span>
              </span>
            );
          })}
          {wordIndex < words.length - 1 ? (
            <span className="inline-block w-[0.24em]" aria-hidden="true" />
          ) : null}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollTo } = useSmoothScroll();
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 140, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 140, damping: 18 });

  const handleTilt = (event) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(-py * 12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines mask-fade opacity-40" />
        <div className="absolute -top-24 right-[8%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-6%] h-[380px] w-[380px] rounded-full bg-accent-cyan/10 blur-[140px]" />
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className={`absolute h-1 w-1 rounded-full ${
              index % 3 === 0
                ? "bg-accent-cyan/70"
                : index % 3 === 1
                  ? "bg-accent/70"
                  : "bg-accent-lime/60"
            }`}
            style={{ left: `${(index * 37) % 100}%`, top: `${(index * 53) % 100}%` }}
            animate={{ y: [0, -14 - (index % 3) * 8, 0], opacity: [0.15, 0.65, 0.15] }}
            transition={{
              duration: 5 + (index % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (index % 7) * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.035] py-1.5 pl-2 pr-4 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-lime" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
                {profile.availability}
              </span>
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 flex items-center gap-3 font-hand text-[1.65rem] leading-none text-slate-400"
            >
              <span className="text-accent-soft">hello</span>, I&apos;m
              <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent" />
            </motion.p>

            <h1
              aria-label={profile.name}
              className="mt-4 font-display text-[clamp(2.3rem,5.2vw,4rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-white"
            >
              <span aria-hidden="true">
                <AnimatedNameLine text={NAME_LINE_ONE} reduceMotion={reduceMotion} />
                <span className="block overflow-hidden align-bottom">
                  <motion.span
                    className="text-gradient inline-block"
                    initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.85, delay: 0.62, ease: EASE }}
                  >
                    {NAME_LINE_TWO}
                  </motion.span>
                </span>
              </span>
            </h1>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
              className="mt-6 max-w-xl font-display text-[clamp(1.4rem,3.2vw,2.1rem)] font-medium leading-[1.2] text-slate-200"
            >
              I make the web feel{" "}
              <span className="text-gradient-accent">a little more human.</span>
            </motion.h2>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base"
            >
              {profile.description}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.22}>
                <a
                  href="#projects"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollTo("projects");
                  }}
                  className="btn-primary"
                >
                  View my work
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a
                  href={profile.resume}
                  download="Md-Alimuzzaman-Zamaddar-CV.pdf"
                  className="btn-outline"
                >
                  <FiDownload className="h-4 w-4" />
                  Download CV
                </a>
              </Magnetic>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo("contact");
                }}
                className="btn-quiet"
              >
                Contact me
                <FiArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="icon-button"
                  aria-label="GitHub profile"
                >
                  <SiGithub className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="icon-button"
                  aria-label="Email me"
                >
                  <FiMail className="h-4 w-4" />
                </a>
              </div>
              <span className="flex items-center gap-2 text-[13px] text-slate-500">
                <FiMapPin className="h-3.5 w-3.5 text-slate-600" />
                {profile.location}
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:inline">
                Working worldwide
              </span>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-2 rounded-full border border-white/[0.06] animate-spin-slow"
            >
              <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-cyan shadow-glow-cyan" />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full border border-dashed border-white/[0.08]"
            />

            {floatingChips.map((chip) => (
              <motion.div
                key={chip.label}
                title={chip.label}
                aria-label={chip.label}
                className={`absolute z-20 hidden items-center gap-2 rounded-2xl border border-white/[0.09] bg-ink/90 py-2 backdrop-blur-xl md:flex ${
                  chip.compact ? "h-10 w-10 justify-center px-0" : "px-3"
                } ${chip.className}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: chip.delay,
                }}
              >
                <chip.icon className="h-4 w-4" style={{ color: chip.color }} />
                {chip.compact ? null : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-300">
                    {chip.label}
                  </span>
                )}
              </motion.div>
            ))}

            <div className="perspective-1000 relative">
              <motion.div
                ref={cardRef}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ rotateX: springX, rotateY: springY }}
                className="preserve-3d relative"
              >
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0B1120]/95 shadow-lift backdrop-blur-2xl"
                >
                  <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 font-mono text-[11px] text-slate-500">
                      developer.tsx
                    </span>
                    <span className="ml-auto rounded-full border border-white/[0.08] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
                      React
                    </span>
                  </div>

                  <div className="space-y-2 p-5 font-mono text-[11.5px] leading-relaxed sm:p-6 sm:text-[13px]">
                    <p className="text-slate-500">1&nbsp;&nbsp;{"// profile"}</p>
                    <p>
                      2&nbsp;&nbsp;<span className="text-accent-soft">const</span>{" "}
                      <span className="text-accent-cyan">developer</span>{" "}
                      <span className="text-slate-500">=</span> <span className="text-slate-400">{"{"}</span>
                    </p>
                    <p className="pl-5">
                      3&nbsp;&nbsp;<span className="text-slate-300">name</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-accent-lime">&quot;Alimuzzaman&quot;</span>
                      <span className="text-slate-500">,</span>
                    </p>
                    <p className="pl-5">
                      4&nbsp;&nbsp;<span className="text-slate-300">role</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-accent-lime">&quot;Frontend Developer&quot;</span>
                      <span className="text-slate-500">,</span>
                    </p>
                    <p className="pl-5">
                      5&nbsp;&nbsp;<span className="text-slate-300">stack</span>
                      <span className="text-slate-500">:</span> <span className="text-slate-400">[</span>
                      <span className="text-accent-lime">&quot;React&quot;</span>
                      <span className="text-slate-500">,</span>{" "}
                      <span className="text-accent-lime">&quot;Next.js&quot;</span>
                      <span className="text-slate-500">,</span>{" "}
                      <span className="text-accent-lime">&quot;Node&quot;</span>
                      <span className="text-slate-400">]</span>
                      <span className="text-slate-500">,</span>
                    </p>
                    <p className="pl-5">
                      6&nbsp;&nbsp;<span className="text-slate-300">focus</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-accent-lime">
                        &quot;clean, responsive interfaces&quot;
                      </span>
                      <span className="text-slate-500">,</span>
                    </p>
                    <p className="pl-5">
                      7&nbsp;&nbsp;<span className="text-slate-300">available</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-accent-soft">true</span>
                      <span className="text-slate-500">,</span>
                    </p>
                    <p>
                      8&nbsp;&nbsp;<span className="text-slate-400">{"};"}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-4 py-2.5 font-mono text-[10px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
                      main
                    </span>
                    <span>UTF-8</span>
                    <span className="hidden sm:inline">TypeScript React</span>
                  </div>
                </motion.div>

                <motion.div
                  className="paper-note absolute -bottom-8 -left-4 z-20 hidden w-[220px] -rotate-2 rounded-[3px_12px_4px_10px] p-3.5 sm:block"
                  animate={reduceMotion ? {} : { y: [0, 9, 0], rotate: [-2, -1.2, -2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2 bg-white/45 shadow-sm backdrop-blur-[2px]"
                  />
                  <p className="font-hand text-[1.35rem] leading-tight text-[#3c3222]">
                    still satisfying, every time.
                  </p>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#3c3222]/60">
                    $ npm run build — passed
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="font-hand text-lg text-slate-500">
          keep going
        </span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/[0.12] p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
