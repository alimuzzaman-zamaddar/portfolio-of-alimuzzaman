import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { FiArrowUpRight, FiCode, FiExternalLink } from "react-icons/fi";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { archiveProjects, featuredProjects } from "../data/portfolio";

function getDomain(url) {
  if (!url) return "client dashboard";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "client project";
  }
}

function ProjectVisual({ project }) {
  const CoverIcon = project.cover.icon;
  const domain = getDomain(project.live);

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-ink shadow-lift">
      <div className="relative flex items-center gap-2 border-b border-white/[0.08] bg-ink/70 px-4 py-3 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-[9px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.cover.accent }} />
          {domain}
        </span>
        <span className="w-8" />
      </div>

      <div
        className="group/cover relative aspect-[16/11] overflow-hidden"
        style={{ background: project.cover.background }}
      >
        <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-[0.16]" />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-[70px] transition-transform duration-700 group-hover/cover:scale-125"
          style={{ backgroundColor: project.cover.accent }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-black/40 blur-[60px]"
        />

        <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              {project.category}
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              {project.number}
            </span>
          </div>

          <div className="flex flex-1 items-center">
            <div className="flex items-center gap-4 transition-transform duration-700 ease-smooth group-hover/cover:translate-x-1.5 sm:gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur sm:h-16 sm:w-16">
                <CoverIcon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: project.cover.accent }} />
              </span>
              <div>
                <p className="font-display text-[clamp(1.9rem,4.6vw,3rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                  {project.cover.wordmark}
                </p>
                <p className="font-display text-[clamp(1.9rem,4.6vw,3rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white/45">
                  {project.cover.subline}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <p className="max-w-[240px] text-[11px] leading-relaxed text-white/55 sm:text-xs">
              {project.cover.tagline}
            </p>
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-all duration-500 group-hover/cover:rotate-45"
            >
              <FiArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TiltCard({ children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMove = (event) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 6);
    rotateX.set(-py * 6);
  };

  return (
    <div className="perspective-1000" onMouseMove={handleMove} onMouseLeave={() => {
      rotateX.set(0);
      rotateY.set(0);
    }}>
      <motion.div ref={ref} style={{ rotateX: springX, rotateY: springY }} className="preserve-3d">
        {children}
      </motion.div>
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
          <TiltCard>
            <ProjectVisual project={project} />
          </TiltCard>
        </div>

        <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-cyan">
              Featured project
            </span>
            <span className="h-px flex-1 bg-white/[0.08]" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">
              {project.number}
            </span>
          </div>

          <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {project.category} · {project.role}
          </p>

          <p className="mt-5 text-[15px] leading-relaxed text-slate-400">
            {project.description}
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-400"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-outline !px-4 !py-2.5 !text-[13px]"
              >
                <FiExternalLink className="h-3.5 w-3.5" />
                Visit live site
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-quiet !px-3 !py-2 !text-[13px]"
              >
                <FiCode className="h-3.5 w-3.5" />
                Source
              </a>
            ) : null}
            {project.clientWork ? (
              <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                Client project
              </span>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-accent-cyan/[0.05] blur-[130px]"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Work I&apos;ve{" "}
              <span className="text-gradient">actually shipped.</span>
            </>
          }
          description="Client and personal builds, with an honest note about my role and the part I touched."
          note="real clients, real deadlines"
        />

        <div className="mt-16 space-y-20 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 border-t border-white/[0.06] pt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-cyan" />
                More builds
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                Earlier work &amp; side projects
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Full-stack and frontend builds from my earlier development work — each one
              links to its live demo and source.
            </p>
          </div>

          <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2" stagger={0.08}>
            {archiveProjects.map((project) => (
              <RevealItem key={project.name}>
                <article className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/40 transition-colors duration-500 hover:border-white/[0.14]">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative block aspect-[16/10] overflow-hidden bg-ink"
                    aria-label={`Open ${project.name} live site`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} website preview`}
                      width="1000"
                      height="625"
                      loading="lazy"
                      className="h-full w-full object-cover object-top opacity-80 transition-all duration-700 ease-smooth group-hover:scale-[1.04] group-hover:opacity-100"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                    />
                    <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white/70 backdrop-blur transition-transform duration-500 group-hover:rotate-45">
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>

                  <div className="p-5">
                    <h4 className="font-display text-lg font-semibold text-white">
                      {project.name}
                    </h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
                        {project.tech}
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 transition-colors hover:text-white"
                          aria-label={`${project.name} source code`}
                        >
                          <FiCode className="h-3.5 w-3.5" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 transition-colors hover:text-white"
                          aria-label={`${project.name} live site`}
                        >
                          <FiExternalLink className="h-3.5 w-3.5" />
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
