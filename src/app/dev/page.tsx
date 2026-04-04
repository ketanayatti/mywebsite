"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaReact,
  FaNode,
  FaBolt,
  FaShieldAlt,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiSocketdotio, SiTailwindcss, SiZod } from "react-icons/si";
import ProjectCard from "@/components/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DevPage() {
  const projectRailRef = useRef<HTMLDivElement | null>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const offset = direction === "left" ? -420 : 420;
    projectRailRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const projects = [
    {
      title: "Communiatec Dev Platform",
      status: "shipped" as const,
      problemSolved:
        "Developers were losing focus by switching between chat, code, AI help, and file tools, while ad-hoc sharing created security risks.",
      solutionDelivered:
        "Built a unified collaboration platform with real-time messaging, Monaco code editing, GenAI assistance, and a secure audited vault.",
      metrics: [
        "~35% less context switching",
        "< 1.2s AI response target",
        "$500+ annual SaaS savings",
        "Sub-50ms live sync target",
      ],
      techStack: [
        "React 18",
        "Vite",
        "Zustand",
        "TailwindCSS",
        "Monaco Editor",
        "Node.js",
        "Express",
        "Socket.io",
        "MongoDB",
        "Redis",
        "Docker Compose",
        "PM2",
        "Jenkins",
      ],
      impact:
        "Consolidated collaboration, code editing, AI help, and secure file sharing into one production-style workflow with measurable efficiency gains.",
      githubUrl: "https://github.com/ketanayatti/communiatec",
    },
    {
      title: "AI Mock Interview Platform",
      status: "shipped" as const,
      problemSolved:
        "Job seekers needed realistic, tailored interview practice without depending on human availability or generic question banks.",
      solutionDelivered:
        "Built a 24/7 AI interviewer that adapts to resume uploads, role context, and experience level with multi-round interview flows.",
      metrics: [
        "40% lower AI response latency",
        "65% higher initial conversion",
        "< 2s resume parsing",
        "Adaptive multi-round interview flow",
      ],
      techStack: [
        "EJS",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Gemini",
        "OpenAI",
        "Cohere",
        "pdf-parse",
      ],
      impact:
        "Transformed interview prep into a contextual product experience with measurable user improvement and lower interaction friction.",
      githubUrl: "https://github.com/ketanayatti/ai-mock-interview",
    },
  ];

  const devToolbox = [
    { name: "TypeScript", icon: SiTypescript, tag: "Type Safety" },
    { name: "React", icon: FaReact, tag: "UI Systems" },
    { name: "Node.js", icon: FaNode, tag: "Backend APIs" },
    { name: "MongoDB", icon: SiMongodb, tag: "Data Layer" },
    { name: "Socket.io", icon: SiSocketdotio, tag: "Realtime" },
    { name: "TailwindCSS", icon: SiTailwindcss, tag: "Design System" },
    { name: "Zod", icon: SiZod, tag: "Validation" },
    { name: "REST Architecture", icon: FaLayerGroup, tag: "Service Contracts" },
  ];

  return (
    <>
      <section className="border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition text-xs font-mono">
            ← back home
          </Link>
        </div>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400/80">Ketan Ayatti</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
              Dev Projects
              <br />
              <span className="text-emerald-400">for real product delivery</span>
            </h1>
            <p className="text-slate-400 max-w-3xl">
              I design and build product features with the same mindset used in DevOps: clear contracts,
              automation-first workflows, and measurable reliability in production.
            </p>
            <div className="h-1 w-12 bg-emerald-400"></div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">How I Build</h2>
              <div className="h-1 w-12 bg-emerald-400"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4">
                <h3 className="text-emerald-400 font-bold text-base">Engineering Principles</h3>
                <ul className="space-y-3">
                  {[
                    "Build for maintainability before feature velocity",
                    "Treat validation and edge-cases as first-class",
                    "Design APIs and UI state transitions explicitly",
                    "Ship in small, observable increments",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-emerald-400 flex-shrink-0 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4">
                <h3 className="text-emerald-400 font-bold text-base">Delivery Standard</h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <p className="flex items-start gap-3">
                    <FaCode className="text-emerald-400 mt-0.5" />
                    <span>Readable architecture over brittle shortcuts.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <FaBolt className="text-emerald-400 mt-0.5" />
                    <span>Fast feedback loops with tight validation and review gates.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <FaShieldAlt className="text-emerald-400 mt-0.5" />
                    <span>Production readiness considered from the first commit.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">Development Toolbox</h2>
              <p className="text-slate-400">Tools and frameworks I use to deliver clean, scalable product features.</p>
              <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {devToolbox.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/40 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-emerald-400" size={16} />
                      <p className="text-slate-100 font-semibold text-sm">{tool.name}</p>
                    </div>
                    <p className="text-slate-400 text-xs">{tool.tag}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">Development Report Cards</h2>
                <p className="text-slate-400">Small report cards with problem, solution, impact, tech, and measurable outcomes.</p>
                <p className="text-emerald-400/80 text-xs mt-2">Scroll horizontally to explore projects.</p>
                <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <motion.button
                  type="button"
                  onClick={() => scrollProjects("left")}
                  whileHover={{ scale: 1.05, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition-colors flex items-center justify-center"
                  aria-label="Scroll projects left"
                >
                  <FaChevronLeft size={12} />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => scrollProjects("right")}
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition-colors flex items-center justify-center"
                  aria-label="Scroll projects right"
                >
                  <FaChevronRight size={12} />
                </motion.button>
              </div>
            </div>

            <div ref={projectRailRef} className="overflow-x-auto pb-4 scroll-smooth">
              <div className="flex gap-6 min-w-max snap-x snap-mandatory">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="snap-start shrink-0 w-[88vw] sm:w-[360px] md:w-[390px]"
                  >
                    <ProjectCard
                      title={project.title}
                      status={project.status}
                      problemSolved={project.problemSolved}
                      solutionDelivered={project.solutionDelivered}
                      metrics={project.metrics}
                      techStack={project.techStack}
                      impact={project.impact}
                      githubUrl={project.githubUrl}
                      compact
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 sm:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-2">Need dev work that behaves like production software?</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I build product systems that are fast, maintainable, and aligned with backend and DevOps realities from day one.
            </p>
            <Link
              href="/#connect"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition-colors duration-300"
            >
              Let&apos;s Build
              <FaArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
