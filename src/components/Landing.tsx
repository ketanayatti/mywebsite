"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaServer, FaCheckCircle, FaTasks, FaCodeBranch, FaCube } from "react-icons/fa";
import MetricsSnapshot from "./MetricsSnapshot";
import InternshipTimeline from "./InternshipTimeline";

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 w-full flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-10">
              {/* Name & Role */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-emerald-400/80 mb-4">
                    DevOps Engineer
                  </p>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-100 leading-tight tracking-tight">
                    Ketan Ayatti
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 font-semibold mt-3">
                    Reliable systems, production delivery, and full-stack execution.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-base sm:text-lg text-emerald-400 font-semibold">DevOps Engineer</p>
                    <span className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/50 px-2 py-0.5 rounded text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-emerald-300">Open to Work: Full-Stack / DevOps / Cloud</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">IonIdea · Jan 2026 – Apr 2026 (13 weeks intensive)</p>
                  <div className="w-16 h-1 bg-emerald-400"></div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                At IonIdea, I proved it: zero-downtime deployments via automated CI/CD, production modules with full CRUD + validation, and infrastructure that fails gracefully. 
                <br />
                <span className="text-emerald-400 font-semibold">That&apos;s the kind of problem I enjoy solving.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <div className="group">
                  <Link
                    href="/dev"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg shadow-emerald-500/30"
                  >
                    Dev Work
                    <FaCode size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <p className="text-xs text-emerald-400/60 italic mt-2 text-center group-hover:text-emerald-400/100 transition-colors duration-300">Development foundations</p>
                </div>
                <div className="group">
                  <Link
                    href="/ops"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 font-semibold text-sm hover:bg-emerald-400/10 hover:scale-105 transition-all duration-300 rounded-lg"
                  >
                    DevOps & Infra
                    <FaServer size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <p className="text-xs text-emerald-400/60 italic mt-2 text-center group-hover:text-emerald-400/100 transition-colors duration-300">Production systems</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Featured Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Info Card 1 */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-colors duration-300">
                <h3 className="text-emerald-400 font-bold text-sm">Internship</h3>
                <div className="space-y-3">
                  <p className="text-slate-100 font-semibold text-sm">IonIdea · 13 Weeks</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Three independent projects delivering end-to-end impact: a production module with full lifecycle CRUD, a production-ready DevOps pipeline with zero manual steps, and a full-stack application system.
                  </p>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-colors duration-300">
                <h3 className="text-emerald-400 font-bold text-sm">Design Philosophy</h3>
                <ul className="space-y-2">
                  {[
                    "Reliability is structural, not reactive",
                    "Manual processes = bugs unfixed",
                    "Code review gates prevent incidents",
                    "Measure everything from day one",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-emerald-400 flex-shrink-0 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Internship Snapshot Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-slate-700/50 px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">The Internship in Numbers</h2>
              <p className="text-slate-400 max-w-2xl">
                13 weeks. 3 independent projects. One cohesive full-stack story.
              </p>
              <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
            </div>

            {/* Metrics Grid */}
            <MetricsSnapshot
              metrics={[
                {
                  value: "3",
                  label: "Projects Delivered",
                  description: "Product delivery → DevOps automation → full-stack systems",
                  icon: <FaCheckCircle />,
                },
                {
                  value: "0",
                  label: "Manual Deploys",
                  description: "100% automated CI/CD pipeline",
                  icon: <FaCodeBranch />,
                },
                {
                  value: "100",
                  label: "Lifecycle Coverage",
                  description: "List, Create, Update, Delete, Status",
                  icon: <FaTasks />,
                },
                {
                  value: "3",
                  label: "Environments Live",
                  description: "Dev, Staging, Production",
                  icon: <FaCube />,
                },
              ]}
            />

            {/* Timeline */}
            <div className="mt-12">
              <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-8">Internship Journey</h3>
              <InternshipTimeline
                items={[
                  {
                    week: "Week 1–2",
                    project: "Bloom's Domain Module",
                    description:
                      "Built Bloom's Domain configuration screen with CRUD, Zod validation, AG Grid table, modal forms, and business logic (max 3 active domains).",
                    status: "completed",
                  },
                  {
                    week: "Week 3–5",
                    project: "CI/CD DevOps Pipeline",
                    description:
                      "Architected Jenkins multi-branch pipeline with Docker, Docker Compose, branch protection, staging/production separation, and automated email notifications.",
                    status: "completed",
                  },
                  {
                    week: "Week 6–13",
                    project: "Leave Management System",
                    description:
                      "Full-stack ownership: React UI with RBAC workflows, Node.js REST APIs, MongoDB integration, role-based approvals (employee/manager/HR), and calendar views.",
                    status: "upcoming",
                  },
                ]}
              />
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
                    "Open to full-time Full-Stack / DevOps / Cloud roles",
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-colors duration-300">
                  <h3 className="text-emerald-400 font-bold text-sm">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-emerald-400 flex-shrink-0 mt-1">→</span>
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

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
              <ul className="space-y-3">
                {[
                  { cert: "Oracle Cloud Infrastructure 2025 AI Foundations", issuer: "Oracle University", status: "✓" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-emerald-400 flex-shrink-0 mt-0.5">{item.status}</span>
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

            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-6 mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                I&apos;m actively looking for full-time <span className="text-emerald-400 font-semibold">Full-Stack / DevOps / Cloud</span> roles. Bengaluru, Pune, Hyderabad — or remote.
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
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group"
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

