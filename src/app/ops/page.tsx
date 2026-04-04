"use client";

import { useEffect } from "react";
import { useRef } from "react";
import DevOpsTerminal from "@/components/DevOpsTerminal";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function OpsPage() {
  const projectRailRef = useRef<HTMLDivElement | null>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const offset = direction === "left" ? -420 : 420;
    projectRailRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const projects = [
    {
      title: "Communiatec Dev Platform",
      status: "shipped" as const,
      problemSolved:
        "A complex real-time collaboration product needed reliable multi-environment deployment, safe rollouts, and repeatable operations without manual release risk.",
      solutionDelivered:
        "Implemented branch-aware CI/CD with Jenkins, containerized services, NGINX reverse proxy routing, PM2 process controls, and production deployment on AWS EC2.",
      metrics: [
        "Deployments in < 3 minutes",
        "99.9% uptime target",
        "Zero-downtime rolling updates",
        "Build success rate around 98%",
      ],
      techStack: [
        "Jenkins",
        "Docker",
        "Docker Compose",
        "NGINX",
        "PM2",
        "AWS EC2",
        "GitHub",
      ],
      impact:
        "Converted Communiatec from an app-only build into a deployment-ready production system with repeatable release reliability.",
      githubUrl: "https://github.com/ketanayatti/communiatec",
    },
    {
      title: "Autonomous Self-Healing Deployment Platform",
      status: "shipped" as const,
      problemSolved:
        "Traditional release workflows can fail silently after cutover, leaving teams with downtime, slow rollback, and manual recovery work.",
      solutionDelivered:
        "Built a blue-green deployment platform with an automated watchdog loop, NGINX upstream switching, deterministic state tracking, and rollback on repeated failures.",
      metrics: [
        "0 seconds downtime",
        "< 5 seconds rollback action",
        "15-20 second failure detection",
        "Near-zero MTTR",
      ],
      techStack: [
        "Fastify",
        "Docker",
        "NGINX",
        "Bash",
        "Linux",
        "State file orchestration",
      ],
      impact:
        "Turned release safety into an automated system property with deterministic rollback, zero cutover downtime, and auditable recovery behavior.",
      githubUrl: "https://github.com/ketanayatti/Autonomous-Self-Healing-Deployment-Platform",
    },
    {
      title: "AI Mock Interview Platform",
      status: "shipped" as const,
      problemSolved:
        "The AI platform required resilient production deployment with reliable branch-based promotion and minimal downtime under frequent updates.",
      solutionDelivered:
        "Implemented multi-branch Jenkins pipelines, Docker Compose environments, and Apache reverse proxy deployment with rolling update behavior.",
      metrics: [
        "Deployment time < 3 minutes",
        "Downtime on update near 0",
        "Rollback under 1 minute",
        "Build success rate 98%",
      ],
      techStack: [
        "Jenkins",
        "Docker",
        "Docker Compose",
        "Apache",
        "Linux",
        "GitHub",
        "MongoDB",
      ],
      impact:
        "Delivered a stable AI product release pipeline that supports fast iterations while maintaining high operational reliability.",
      githubUrl: "https://github.com/ketanayatti/ai-mock-interview",
    },
    {
      title: "Self-Hosted AIOps Agent on AWS EC2",
      status: "shipped" as const,
      problemSolved:
        "Operations teams needed a lightweight incident assistant that could run locally instead of depending on paid hosted AI services.",
      solutionDelivered:
        "Built a self-hosted AIOps agent on AWS EC2 with FastAPI endpoints, controlled command execution, and local llama.cpp inference.",
      metrics: [
        "Runs on AWS EC2 t2.micro",
        "$0 external AI API cost",
        "Whitelisted command execution",
        "Live CPU and memory monitoring",
      ],
      techStack: [
        "AWS EC2",
        "FastAPI",
        "Python",
        "llama.cpp",
        "Linux",
        "Bash",
      ],
      impact:
        "Proved that practical AIOps workflows can run in a self-hosted free-tier cloud setup with no paid model dependency.",
      githubUrl: "https://github.com/ketanayatti/Self-Hosted-AIOps-Agent-on-AWS",
    },
  ];

  const devopsTools = [
    { name: "Jenkins", category: "CI/CD Automation" },
    { name: "Docker", category: "Containerization" },
    { name: "Docker Compose", category: "Orchestration" },
    { name: "GitHub", category: "Version Control" },
    { name: "Apache", category: "Reverse Proxy" },
    { name: "MongoDB", category: "Database" },
    { name: "Bash / Scripting", category: "Infrastructure as Code" },
    { name: "Linux", category: "System Administration" },
  ];

  return (
    <>
      {/* Back Button */}
      <section className="border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="text-emerald-400 hover:text-emerald-300 transition text-xs font-mono"
          >
            ← back home
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
                DevOps Report Cards
              </h1>
              <p className="text-slate-400 max-w-2xl">
                Small report cards with problem, solution, impact, tech, and measurable release reliability.
              </p>
            </div>
            <div className="h-1 w-12 bg-emerald-400"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                Core Philosophy
              </h2>
              <div className="h-1 w-12 bg-emerald-400"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4">
                <h3 className="text-emerald-400 font-bold text-base">What I Believe</h3>
                <ul className="space-y-3">
                  {[
                    "Automation eliminates technical debt",
                    "Infrastructure as code always",
                    "Reliability is architecture, not ops heroics",
                    "Monitor everything from day one",
                    "Failures should be automatic, not manual",
                  ].map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="text-emerald-400 flex-shrink-0 mt-1 font-bold">
                        →
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 space-y-4">
                <h3 className="text-emerald-400 font-bold text-base">
                  DevOps Mindset
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every deployment should be reproducible. Every alert should be
                  actionable. Every incident should lead to learning and
                  automation.
                  <br />
                  <br />
                  Infrastructure isn't separate from code—it's part of the
                  product.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
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
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                  Featured Ops Projects
                </h2>
                <p className="text-slate-400">
                  Deployment and infrastructure execution across all major projects.
                </p>
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
                    viewport={{ once: true, amount: 0.2 }}
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

      {/* DevOps Toolkit */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                DevOps Toolkit
              </h2>
              <div className="h-1 w-12 bg-emerald-400"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {devopsTools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/30 transition-colors duration-300"
                >
                  <p className="text-emerald-400 font-bold text-sm">
                    {tool.name}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{tool.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Terminal */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-700/50 px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                DevOps Terminal
              </h2>
              <p className="text-slate-400 text-sm">
                Interactive commands: type{" "}
                <span className="font-mono text-emerald-400">help</span> for
                available commands
              </p>
              <div className="h-1 w-12 bg-emerald-400 mt-4"></div>
            </div>
            <DevOpsTerminal />
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 sm:px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-2">
              Ready to build reliable systems together?
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm open to full-time Full-Stack / DevOps / Cloud roles.
              Let's talk about infrastructure that scales.
            </p>
            <Link
              href="/#connect"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    

    </>
  );
}
