import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiCopy,
  FiDownload,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { Reveal } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contactOptions, profile } from "../data/portfolio";

const fieldClass =
  "w-full rounded-xl border border-white/[0.09] bg-ink/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition-all duration-300 focus:border-accent/60 focus:bg-ink focus:outline-none focus:ring-2 focus:ring-accent/20";

const initialForm = { name: "", email: "", project: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "sent") setStatus("idle");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please tell me your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please add an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Please use a valid email address.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "A little more detail would help (10+ characters).";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }

    const subject = `Portfolio enquiry — ${form.project || "New project"}`;
    const body = [
      `Hi Alimuzzaman,`,
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.project ? `Project: ${form.project}` : null,
      "",
      form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="section relative overflow-hidden border-t border-white/[0.05]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-grid opacity-[0.13] mask-fade"
      />

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-20">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Have a project{" "}
                  <span className="text-gradient">in mind?</span>
                </>
              }
              description="Tell me what you're building, what's stuck, or what you wish existed. I read every message myself."
              note="don't be a stranger"
            />

            <Reveal delay={0.08} className="mt-10">
              <div className="rounded-2xl border border-white/[0.08] bg-surface/40 p-4 backdrop-blur">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Email me directly
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="min-w-0 break-all text-[13px] font-medium text-slate-200 transition-colors hover:text-accent-cyan sm:text-[15px]"
                  >
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400 transition-colors hover:border-accent/40 hover:text-white"
                    aria-live="polite"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="h-3 w-3 text-accent-lime" />
                        Copied
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-4 grid gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.05]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300">
                    <SiGithub className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                      GitHub
                    </span>
                    <span className="block truncate text-[13px] text-slate-300">
                      alimuzzaman-zamaddar
                    </span>
                  </span>
                </span>
                <FiArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan" />
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300">
                  <FiMapPin className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                    Based in
                  </span>
                  <span className="block truncate text-[13px] text-slate-300">
                    {profile.location}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-auto flex flex-wrap items-center gap-4 pt-8">
              <a
                href={profile.resume}
                download="Md-Alimuzzaman-Zamaddar-CV.pdf"
                className="inline-flex items-center gap-2 text-[13px] text-slate-400 transition-colors hover:text-white"
              >
                <FiDownload className="h-3.5 w-3.5" />
                Download my CV
              </a>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-lime" />
                </span>
                {profile.availability}
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-white/[0.09] bg-surface/50 p-5 shadow-lift backdrop-blur-2xl sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Send me a note
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500">
                    I usually reply by email — no auto-responders.
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03] text-accent-cyan">
                  <FiMail className="h-4 w-4" />
                </span>
              </div>

              {status === "sent" ? (
                <div
                  role="status"
                  className="mt-6 rounded-2xl border border-accent-lime/25 bg-accent-lime/[0.06] p-5"
                >
                  <p className="flex items-center gap-2 text-sm font-medium text-accent-lime">
                    <FiCheck className="h-4 w-4" />
                    Your email draft is ready
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                    Your email client should have opened with the message filled in. If it
                    didn&apos;t, email me directly at{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-accent-cyan"
                    >
                      {profile.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm);
                      setStatus("idle");
                    }}
                    className="mt-4 text-[12px] text-slate-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500"
                      >
                        Your name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Cooper"
                        className={`${fieldClass} ${errors.name ? "border-red-400/60" : ""}`}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-1.5 text-[11px] text-red-300">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500"
                      >
                        Your email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={`${fieldClass} ${errors.email ? "border-red-400/60" : ""}`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="mt-1.5 text-[11px] text-red-300">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-project"
                      className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500"
                    >
                      What do you need?
                    </label>
                    <div className="relative">
                      <select
                        id="contact-project"
                        name="project"
                        value={form.project}
                        onChange={handleChange}
                        className={`${fieldClass} appearance-none pr-10`}
                      >
                        <option value="" className="bg-ink">
                          Select a service
                        </option>
                        {contactOptions.map((option) => (
                          <option key={option} value={option} className="bg-ink">
                            {option}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500"
                    >
                      Project details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the project, timeline and what success looks like."
                      className={`${fieldClass} resize-none ${errors.message ? "border-red-400/60" : ""}`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message ? (
                      <p id="contact-message-error" className="mt-1.5 text-[11px] text-red-300">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] leading-relaxed text-slate-500">
                      No backend, no database — this opens a real email draft in your
                      own mail app.
                    </p>
                    <button type="submit" className="btn-primary shrink-0 !px-5">
                      Open email draft
                      <FiSend className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
