"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 }
  },
};

const signalStrip = [
  "Open to Full-Time Roles",
  "Open to Work",
  "Automation-First Engineering",
  "Production Mindset",
];

const capabilityCards = [
  {
    title: "Platform Delivery",
    description:
      "Design and ship end-to-end systems with reliable release flows, observability, and clean developer experience.",
  },
  {
    title: "Backend + APIs",
    description:
      "Build dependable APIs, validation-heavy workflows, and maintainable service boundaries for product teams.",
  },
  {
    title: "DevOps Automation",
    description:
      "Automate build, test, and deployment pipelines to remove repetitive manual steps and improve release confidence.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative isolate flex-1 w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute top-28 -right-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_55%)]" />

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-10">
              {/* Name & Role */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-emerald-400/80 mb-4">
                    Full-Stack and DevOps Expertise
                  </p>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-100 leading-tight tracking-tight">
                    Ketan Ayatti
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 font-semibold mt-3 max-w-xl">
                    Building products with full-stack development and DevOps expertise.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-base sm:text-lg text-emerald-400 font-semibold">Full-Stack and DevOps Expertise</p>
                    <span className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/50 px-2 py-0.5 rounded text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-emerald-300">Full-Stack and DevOps Expertise</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">IonIdea · 2026 Experience</p>
                  <div className="w-16 h-1 bg-emerald-400"></div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                I design and build core product modules across frontend, backend, and deployment workflows.
                <br />
                <span className="text-emerald-400 font-semibold">Focused on strong delivery quality under senior guidance and engineering best practices.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <p className="w-full text-xs uppercase tracking-[0.16em] text-emerald-300/70 sm:mb-1">Explore My Work</p>
                <div className="group">
                  <Link
                    href="/dev"
                    className="inline-flex min-w-70 items-center justify-between gap-3 px-5 py-3.5 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-300 text-slate-950 font-bold text-sm rounded-xl shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_34px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="text-left">Click Here to See Development Work</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/15">
                      <FaCode size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </Link>
                  <p className="text-xs text-emerald-400/60 italic mt-2 text-center group-hover:text-emerald-400 transition-colors duration-300">Core modules and product delivery</p>
                </div>
                <div className="group">
                  <Link
                    href="/ops"
                    className="inline-flex min-w-70 items-center justify-between gap-3 px-5 py-3.5 border border-emerald-300/70 bg-emerald-400/5 text-emerald-200 font-bold text-sm rounded-xl shadow-[0_10px_24px_rgba(16,185,129,0.16)] hover:bg-emerald-400/15 hover:-translate-y-0.5 hover:border-emerald-300 transition-all duration-300"
                  >
                    <span className="text-left">Click Here to See Deployment Work</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/10">
                      <FaServer size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </Link>
                  <p className="text-xs text-emerald-400/60 italic mt-2 text-center group-hover:text-emerald-400 transition-colors duration-300">Pipelines, environments, and release flow</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Featured Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Info Card 1 */}
              <div className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-colors duration-300">
                <h3 className="text-emerald-400 font-bold text-sm">Internship</h3>
                <div className="space-y-3">
                  <p className="text-slate-100 font-semibold text-sm">IonIdea · Product + Delivery Internship</p>
                  <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                    <li className="flex items-start gap-2"><span className="text-emerald-400">•</span><span>Designed and developed core module flows for an Outcome Based Education system using modern web technologies.</span></li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">•</span><span>Worked in a team environment with review-driven collaboration and structured handoffs.</span></li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">•</span><span>Handled end-to-end deployment execution under senior guidance with release-readiness checks.</span></li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">•</span><span>Focused on product quality, maintainable code, and release-readiness discipline.</span></li>
                  </ul>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-colors duration-300">
                <h3 className="text-emerald-400 font-bold text-sm">Design Philosophy</h3>
                <ul className="space-y-2">
                  {[
                    "Reliability starts with architecture",
                    "Automate repetitive work early",
                    "Prefer observable, testable systems",
                    "Build for maintainability, not just speed",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-emerald-400 shrink-0 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {signalStrip.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-200"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Capability Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-slate-700/50 px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">What I Bring</h2>
              <p className="text-slate-400 max-w-2xl">
                A Full-Stack and DevOps expertise profile that connects product engineering with release execution, so features can be shipped and operated with confidence.
              </p>
              <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {capabilityCards.map((item) => (
                <div
                  key={item.title}
                  className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-emerald-400 font-bold text-sm mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-slate-700/50 px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Philosophy & Approach</h2>
              <div className="h-1 w-12 bg-emerald-400"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "What I Actually Believe",
                  points: [
                    "Manual processes are just bugs you haven't automated yet",
                    "If deployment needs a human, your deployment isn't done",
                    "Reliability is an architecture decision — not a monitoring alert",
                    "Works on my machine is not a deployment strategy",
                  ],
                },
                {
                  title: "Currently Building",
                  points: [
                    "Kubernetes & Terraform production foundations",
                    "AWS Solutions Architect Associate (SAA-C03) cert",
                    "Full-stack systems at IonIdea",
                    "Open to full-time roles",
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-colors duration-300">
                  <h3 className="text-emerald-400 font-bold text-sm">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-emerald-400 shrink-0 mt-1">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-slate-700/50 px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Certifications</h2>
              <div className="h-1 w-12 bg-emerald-400"></div>
            </div>

            <div className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
              <ul className="space-y-3">
                {[
                  { cert: "Oracle Cloud Infrastructure 2025 AI Foundations", issuer: "Oracle University", status: "✓" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-emerald-400 shrink-0 mt-0.5">{item.status}</span>
                    <div>
                      <span className="text-slate-100">{item.cert}</span>
                      {item.issuer && <span className="text-slate-500"> — {item.issuer}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-slate-700/50 px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Let&apos;s Connect</h2>
              <div className="h-1 w-12 bg-emerald-400"></div>
            </div>

            <div className="bg-linear-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-6 mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                I&apos;m actively looking for full-time <span className="text-emerald-400 font-semibold">opportunities</span>. Bengaluru, Pune, Hyderabad — or remote.
                <br />
                <span className="text-emerald-400">I respond within 24 hours.</span>
              </p>
              <p className="text-slate-500 text-xs mt-3 font-mono">→ avg response time: &lt; 24 hours</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: FaEnvelope,
                  label: "Email",
                  value: "kethanayatti333@gmail.com",
                  href: "mailto:kethanayatti333@gmail.com",
                },
                {
                  icon: FaGithub,
                  label: "GitHub",
                  value: "ketanayatti",
                  href: "https://github.com/ketanayatti",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  value: "ketanayatti",
                  href: "https://www.linkedin.com/in/ketanayatti/",
                },
              ].map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group"
                  >
                    <Icon className="text-emerald-400 text-xl mb-3 group-hover:scale-125 transition-transform duration-300" />
                    <p className="text-slate-400 text-xs mb-1">{contact.label}</p>
                    <p className="text-slate-100 text-xs font-mono font-semibold break-all hover:text-emerald-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-t border-slate-700/50 px-4 sm:px-6 py-8 mt-auto"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p variants={itemVariants} className="text-slate-500 text-xs font-mono text-center">
            © 2026 Ketan Ayatti. Engineering reliable systems.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

