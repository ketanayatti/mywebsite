"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaServer } from "react-icons/fa";

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
    <div className="min-h-screen bg-[#0d1117] flex flex-col">
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
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#c9d1d9] leading-tight tracking-tight">
                    Ketan
                    <br />
                    <span className="text-amber-100">Ayatti</span>
                  </h1>
                </div>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg text-amber-100 font-semibold">DevOps Engineer Intern</p>
                  <div className="w-16 h-1 bg-amber-100"></div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed max-w-md">
                Building production-grade infrastructure, automating deployment pipelines, and architecting scalable systems that power modern applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/dev"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-100 text-[#0d1117] font-semibold text-sm hover:bg-amber-200 transition-colors rounded"
                >
                  Development
                  <FaCode size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/ops"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-100 text-amber-100 font-semibold text-sm hover:bg-amber-100/10 transition-colors rounded"
                >
                  DevOps & Infra
                  <FaServer size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Featured Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Info Card 1 */}
              <div className="bg-[#161b22] border border-[#1b2230] rounded p-6 space-y-4">
                <h3 className="text-amber-100 font-bold text-sm">Current Role</h3>
                <div className="space-y-2">
                  <p className="text-[#c9d1d9] font-semibold text-sm">DevOps Engineer Intern</p>
                  <p className="text-[#8b949e] text-xs">Ionidea • Jan 2025 - Present</p>
                </div>
                <p className="text-[#8b949e] text-xs leading-relaxed">
                  Architecting CI/CD pipelines, infrastructure automation, and cloud deployment strategies to ensure production reliability.
                </p>
              </div>

              {/* Info Card 2 */}
              <div className="bg-[#161b22] border border-[#1b2230] rounded p-6 space-y-4">
                <h3 className="text-amber-100 font-bold text-sm">Philosophy</h3>
                <ul className="space-y-2">
                  {[
                    "Automation eliminates technical debt",
                    "Infrastructure as code always",
                    "Security integrated, not bolted on",
                    "Monitor and alert from day one",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#8b949e]">
                      <span className="text-amber-100 flex-shrink-0 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Philosophy Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-t border-[#1b2230] px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-3">Philosophy & Approach</h2>
              <div className="h-1 w-12 bg-amber-100"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Automation First",
                  points: [
                    "Manual processes = technical debt",
                    "Everything should be version controlled",
                    "Infrastructure as code is non-negotiable",
                    "Eliminate repetitive tasks systematically",
                  ],
                },
                {
                  title: "Production-Ready Mindset",
                  points: [
                    "Assume failure will happen",
                    "Monitoring and alerting from day one",
                    "Security integrated, not bolted on",
                    "Performance optimization continuous",
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-[#161b22] border border-[#1b2230] rounded p-6 space-y-4">
                  <h3 className="text-amber-100 font-bold text-sm">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#8b949e]">
                        <span className="text-amber-100 flex-shrink-0 mt-1">→</span>
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

      {/* Contact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-t border-[#1b2230] px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-3">Connect</h2>
              <div className="h-1 w-12 bg-amber-100"></div>
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
                    whileHover={{ y: -2 }}
                    className="bg-[#161b22] border border-[#1b2230] rounded p-6 hover:border-amber-100 transition-colors group"
                  >
                    <Icon className="text-amber-100 text-xl mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-[#8b949e] text-xs mb-1">{contact.label}</p>
                    <p className="text-[#c9d1d9] text-xs font-mono font-semibold break-all hover:text-amber-100 transition-colors">
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
        className="border-t border-[#1b2230] px-4 sm:px-6 py-8 mt-auto"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p variants={itemVariants} className="text-[#484f58] text-xs font-mono text-center">
            © 2026 Ketan Ayatti. Engineering reliable systems.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
