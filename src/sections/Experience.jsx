import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Reveal } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <section id="experience" className="section border-y border-white/[0.05] bg-surface/[0.18]">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                Building for the web,{" "}
                <span className="text-gradient">one release at a time.</span>
              </>
            }
            description="From high-volume WordPress work to production React frontends — and a lot of lessons in between."
          />
          <Reveal delay={0.1} className="shrink-0">
            <p className="max-w-[240px] -rotate-2 font-hand text-2xl leading-tight text-slate-500 lg:text-right">
              two teams, both taught me a lot.
            </p>
          </Reveal>
        </div>

        <div ref={timelineRef} className="relative mt-16">
          <div className="absolute bottom-6 left-[11px] top-6 w-px bg-white/[0.07]">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-cyan to-accent-lime"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="space-y-7">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.08}>
                <article className="relative pl-10 sm:pl-14">
                  <span
                    aria-hidden="true"
                    className="absolute left-[3px] top-8 grid h-[18px] w-[18px] place-items-center rounded-full border border-white/[0.14] bg-ink"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        job.current ? "bg-accent-lime" : "bg-slate-500"
                      }`}
                    />
                  </span>

                  <div className="group rounded-3xl border border-white/[0.07] bg-ink/40 p-6 transition-colors duration-500 hover:border-white/[0.14] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          {job.current ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-lime/25 bg-accent-lime/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-lime">
                              <span className="h-1 w-1 rounded-full bg-accent-lime" />
                              Current
                            </span>
                          ) : null}
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                            {job.period}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                          <span className="text-slate-200">{job.company}</span>
                          {job.parent ? ` · ${job.parent}` : ""}
                        </p>
                      </div>
                      <span className="number-label">0{index + 1}</span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                      {job.summary}
                    </p>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-400"
                        >
                          <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-cyan" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
