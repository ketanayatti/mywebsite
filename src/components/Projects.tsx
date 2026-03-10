"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "devops-engineering-portfolio",
    description:
      "Central repository showcasing all DevOps engineering projects with detailed architecture documentation, deployment workflows, and infrastructure diagrams.",
    features: [
      "Centralized project documentation",
      "Architecture diagrams & workflows",
      "DevOps internship experience",
      "Infrastructure design references",
    ],
    tech: ["Docker", "Jenkins", "AWS"],
    github: "https://github.com/ketanayatti/devops-engineering-portfolio",
    status: "active",
  },
  {
    name: "communiatec-devops-platform",
    description:
      "End-to-end CI/CD pipeline powering a containerized MERN stack application deployed on AWS EC2 with NGINX reverse proxy and branch-based deployment strategy.",
    features: [
      "Jenkins CI/CD pipeline automation",
      "Docker containerized deployment",
      "AWS EC2 cloud infrastructure",
      "NGINX reverse proxy routing",
      "Branch-based deploy (develop/main)",
      "Automated health checks on deploy",
    ],
    tech: ["Jenkins", "Docker", "AWS", "Nginx"],
    github: "https://github.com/ketanayatti/communiatec-devops-platform",
    status: "active",
  },
  {
    name: "self-healing-deploy-platform",
    description:
      "Production-style Blue-Green deployment platform with automated health validation, intelligent rollback mechanism, and NGINX-based traffic switching.",
    features: [
      "Blue-Green zero-downtime deployments",
      "Automated health validation",
      "Intelligent self-healing rollback",
      "NGINX reverse proxy traffic routing",
      "Watchdog monitoring system",
      "Docker containerized environments",
    ],
    tech: ["Docker", "Nginx", "Bash"],
    github: "https://github.com/ketanayatti/Autonomous-Self-Healing-Deployment-Platform",
    status: "active",
  },
  {
    name: "ai-mock-interview",
    description:
      "Full DevOps implementation for an AI-powered interview platform with Jenkins multi-branch CI/CD, Docker Compose orchestration, and Apache reverse proxy.",
    features: [
      "Multi-branch CI/CD with Jenkins",
      "Docker Compose service orchestration",
      "GitHub webhook automation",
      "Apache reverse proxy configuration",
      "Persistent MongoDB container storage",
      "Staging & production environments",
    ],
    tech: ["Docker", "Jenkins", "MongoDB"],
    github: "https://github.com/ketanayatti/ai-mock-interview",
    status: "active",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> projects
        </motion.div>

        {/* Command */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#484f58] mb-6"
        >
          $ ls -la ~/repos/
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel group hover:border-[#2d3748] transition-colors"
            >
              {/* Repo header */}
              <div className="panel-header justify-between">
                <div className="flex items-center gap-2">
                  <span className="status-dot online" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00f5d4] hover:underline underline-offset-2 normal-case text-sm"
                  >
                    {project.name}
                  </a>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#484f58] hover:text-[#8b949e] transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <FaGithub size={16} />
                </a>
              </div>

              <div className="p-5">
                <p className="text-sm text-[#8b949e] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features as file tree */}
                <div className="mb-4 text-xs">
                  <p className="text-[#484f58] mb-1">Features:</p>
                  {project.features.map((f, fi) => (
                    <p key={fi} className="text-[#8b949e] pl-2">
                      <span className="text-[#484f58]">
                        {fi === project.features.length - 1 ? "└── " : "├── "}
                      </span>
                      {f}
                    </p>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="metric"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
