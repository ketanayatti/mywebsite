"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";
import {
  SiDocker,
  SiJenkins,
  SiNginx,
  SiMongodb,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const projects = [
  {
    title: "DevOps Engineering Portfolio",
    subtitle: "Central Project Hub & Documentation",
    description:
      "A central repository showcasing all DevOps engineering projects with detailed architecture documentation, deployment workflows, and infrastructure diagrams.",
    features: [
      "Centralized project documentation",
      "Architecture diagrams & workflows",
      "DevOps internship experience",
      "Infrastructure design references",
    ],
    tech: [SiDocker, SiJenkins, FaAws],
    techLabels: ["Docker", "Jenkins", "AWS"],
    github: "https://github.com/ketanayatti/devops-engineering-portfolio",
    gradient: "from-[#ec4899]/20 to-[#f59e0b]/20",
    accentColor: "#ec4899",
  },
  {
    title: "Communiatec",
    subtitle: "DevOps-Driven Full-Stack Communication Platform",
    description:
      "End-to-end CI/CD pipeline powering a containerized MERN stack application deployed on AWS EC2 with NGINX reverse proxy, branch-based deployment strategy, and Docker Hub registry integration.",
    features: [
      "Jenkins CI/CD pipeline automation",
      "Docker containerized deployment",
      "AWS EC2 cloud infrastructure",
      "NGINX reverse proxy routing",
      "Branch-based deployment (develop/main)",
      "Automated health checks on deploy",
    ],
    tech: [SiJenkins, SiDocker, FaAws, SiNginx],
    techLabels: ["Jenkins", "Docker", "AWS", "Nginx"],
    github: "https://github.com/ketanayatti/communiatec-devops-platform",
    gradient: "from-[#00f5d4]/20 to-[#6366f1]/20",
    accentColor: "#00f5d4",
  },
  {
    title: "Self-Healing Deploy Platform",
    subtitle: "Autonomous Zero-Downtime Deployments",
    description:
      "Production-style Blue-Green deployment platform with automated health validation, intelligent rollback mechanism, and NGINX-based traffic switching — all running on Linux infrastructure.",
    features: [
      "Blue-Green zero-downtime deployments",
      "Automated health validation",
      "Intelligent self-healing rollback",
      "NGINX reverse proxy traffic routing",
      "Watchdog monitoring system",
      "Docker containerized environments",
    ],
    tech: [SiDocker, SiNginx],
    techLabels: ["Docker", "Nginx"],
    github: "https://github.com/ketanayatti/Autonomous-Self-Healing-Deployment-Platform",
    gradient: "from-[#6366f1]/20 to-[#ec4899]/20",
    accentColor: "#6366f1",
  },
  {
    title: "AI Mock Interview Platform",
    subtitle: "DevOps CI/CD Implementation",
    description:
      "Full DevOps implementation for an AI-powered interview platform with Jenkins multi-branch CI/CD, Docker Compose orchestration, Apache reverse proxy, and automated staging/production deployments.",
    features: [
      "Multi-branch CI/CD with Jenkins",
      "Docker Compose service orchestration",
      "GitHub webhook automation",
      "Apache reverse proxy configuration",
      "Persistent MongoDB container storage",
      "Staging & production environments",
    ],
    tech: [SiDocker, SiJenkins, SiMongodb],
    techLabels: ["Docker", "Jenkins", "MongoDB"],
    github: "https://github.com/ketanayatti/ai-mock-interview",
    gradient: "from-[#f59e0b]/20 to-[#00f5d4]/20",
    accentColor: "#f59e0b",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            DevOps <span className="gradient-text">Projects</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-2xl overflow-hidden hover:glow-accent transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Architecture Placeholder */}
                <div
                  className={`lg:col-span-2 p-8 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center min-h-[240px]`}
                >
                  <div className="w-full max-w-[280px] space-y-3">
                    <div className="flex items-center justify-center gap-2 text-xs text-[#94a3b8] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Architecture Diagram
                    </div>
                    {/* Mini architecture visualization */}
                    <div className="space-y-2">
                      {["Developer Push", "CI/CD Pipeline", "Docker Build", "Deploy → Prod"].map(
                        (step, si) => (
                          <motion.div
                            key={step}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + si * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                              style={{
                                background: `${project.accentColor}20`,
                                color: project.accentColor,
                              }}
                            >
                              {si + 1}
                            </div>
                            <div className="flex-1 h-8 rounded-lg bg-white/5 flex items-center px-3 text-xs text-[#94a3b8] font-mono">
                              {step}
                            </div>
                            {si < 3 && (
                              <span
                                className="text-xs"
                                style={{ color: project.accentColor }}
                              >
                                →
                              </span>
                            )}
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-1">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-mono"
                        style={{ color: project.accentColor }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/10 text-[#94a3b8] hover:text-[#00f5d4] transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>

                  <p className="text-[#94a3b8] mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <p className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-2">
                      Key Features
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-[#94a3b8]"
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: project.accentColor }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((Icon, ti) => (
                      <div
                        key={project.techLabels[ti]}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-[#94a3b8]"
                      >
                        <Icon size={14} />
                        {project.techLabels[ti]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
