"use client";

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
    { name: "Zod", icon: SiZod, tag: "Validation" },
    { name: "Socket.io", icon: SiSocketdotio, tag: "Realtime" },
    { name: "TailwindCSS", icon: SiTailwindcss, tag: "Design System" },
    { name: "REST Architecture", icon: FaLayerGroup, tag: "Service Contracts" },
  ];

  const buildPillars = [
    {
      title: "Product-First Development",
      description:
        "Build features around user workflows, not isolated screens, so every release improves real product outcomes.",
      icon: FaCode,
    },
    {
      title: "Structured Engineering",
      description:
        "Design explicit state, validation, and service boundaries to keep systems maintainable as complexity grows.",
      icon: FaLayerGroup,
    },
    {
      title: "Delivery Discipline",
      description:
        "Keep code delivery-ready from day one using review gates, measurable quality checks, and reliable release habits.",
      icon: FaShieldAlt,
    },
  ];

  const quickFacts = [
    "TypeScript",
    "React",
    "Node.js",
    "Open to Work",
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      <div className="intro-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="intro-orb intro-orb-one pointer-events-none" />
      <div className="intro-orb intro-orb-two pointer-events-none" />
      <div className="intro-orb intro-orb-three pointer-events-none" />

      <div className="relative z-10">
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
          className="border-b border-slate-700/50 px-4 sm:px-6 py-14"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-7">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-400/80">Development Portfolio</p>
              <p className="text-slate-300 max-w-3xl text-base leading-relaxed">
                I build product features with clear structure, validation, and implementation discipline.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-200"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-slate-700/50 px-4 sm:px-6 py-14"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">How I Engineer</h2>
                <p className="text-slate-400 max-w-2xl">A practical approach focused on maintainability, API structure, and implementation quality.</p>
                <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {buildPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/30 mb-4">
                        <Icon className="text-emerald-300" />
                      </div>
                      <h3 className="text-slate-100 font-bold text-base mb-2">{pillar.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
                <p className="text-sm text-slate-300 flex items-start gap-3">
                  <FaBolt className="text-emerald-400 mt-0.5" />
                  <span>
                    Working standard: readable architecture, review gates, measurable quality, and release awareness from the first commit.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-slate-700/50 px-4 sm:px-6 py-14"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">Selected Development Projects</h2>
                <p className="text-slate-400">Problem-led builds with implementation notes and measured outcomes.</p>
                <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                {projects.map((project) => (
                  <motion.div key={project.title} variants={itemVariants} className="h-full">
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
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-slate-700/50 px-4 sm:px-6 py-14"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">Toolbox</h2>
                <p className="text-slate-400">Core technologies used across backend, API, and systems work.</p>
                <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {devToolbox.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/40 transition-colors duration-300"
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
          className="px-4 sm:px-6 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="bg-linear-to-r from-emerald-500/15 via-cyan-500/10 to-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 md:p-10 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">Project Overview</h2>
              <p className="text-slate-300 mb-7 max-w-2xl mx-auto">
                These projects show the stack, implementation approach, and outcomes in a straightforward format.
              </p>
              <Link
                href="/#connect"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition-colors duration-300"
              >
                View Contact
                <FaArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </motion.main>
  );
}
