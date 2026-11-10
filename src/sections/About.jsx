import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { aboutHighlights, profile, stats } from "../data/portfolio";
import { useSmoothScroll } from "../lib/scroll-context";
import portrait from "../assets/img/portfolio (2).jpg";

function Counter({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || typeof value !== "number") return undefined;
    if (reduceMotion) {
      setDisplay(value);
      return undefined;
    }

    const duration = 1500;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  const formatted =
    typeof value === "number"
      ? display.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : value;

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function About() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="about" className="section border-t border-white/[0.05]">
      <div className="container-page">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              I care about the details{" "}
              <span className="text-gradient">you&apos;ll probably never notice.</span>
            </>
          }
          description="Frontend developer with full-stack range and a WordPress past. I like quiet interfaces that do exactly what you expect — and a little bit more."
          note="the short version"
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-[380px]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-accent/25 via-transparent to-accent-cyan/20 blur-2xl"
            />
            <div className="absolute -top-4 left-7 z-20 -rotate-2">
              <div className="paper-note relative rounded-[2px_8px_3px_7px] px-3 py-1.5">
                <span
                  aria-hidden="true"
                  className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rotate-1 bg-white/45 shadow-sm backdrop-blur-[2px]"
                />
                <p className="font-hand text-xl leading-none text-[#3c3222]">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-surface">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-accent/45 via-surface to-accent-cyan/35"
              />
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width="480"
                height="600"
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover object-top saturate-[0.92]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink via-ink/80 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-semibold text-white">
                  {profile.shortName}
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {profile.role}
                </p>
              </div>
            </div>

          </Reveal>

          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-slate-300 sm:text-[17px]">
                I&apos;m <span className="text-white">{profile.name}</span>, a frontend
                developer at Softvence Agency with a background in WordPress development.
                I enjoy the moment a complex requirement turns into an interface that
                feels obvious to use.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                My work spans React and Next.js frontends, REST API integration and
                Node/Express backends — plus 1.6+ years of WordPress development where I
                worked on 1,000+ web solutions for clients, including international Fiverr
                projects. I focus on clean code, responsive detail and experiences that
                solve real problems.
              </p>
            </Reveal>

            <RevealGroup className="mt-9 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <RevealItem key={item.title}>
                  <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.06]">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent-cyan transition-colors duration-300 group-hover:text-accent-soft">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-slate-400">
                        {item.description}
                      </span>
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo("contact");
                }}
                className="btn-primary"
              >
                Let&apos;s work together
                <FiArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#skills"
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo("skills");
                }}
                className="btn-outline"
              >
                Explore my skills
              </a>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4" stagger={0.08}>
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.14]">
                <p className="font-display text-[2rem] font-semibold tracking-[-0.04em] text-white sm:text-[2.4rem]">
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix ?? ""}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">{stat.label}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                  {stat.detail}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </section>
  );
}
