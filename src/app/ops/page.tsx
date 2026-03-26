"use client";

import { useEffect } from "react";
import DevOpsTerminal from "@/components/DevOpsTerminal";
import Link from "next/link";
import { FaGithub, FaDocker, FaLinux, FaAws } from "react-icons/fa";
import { SiJenkins, SiPrometheus } from "react-icons/si";

export default function OpsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const opsProjects = [
    {
      title: "Self-Hosted AIOps Agent on AWS EC2",
      description: "$0/month LLM inference. No OpenAI. No API keys. No cloud AI bill.",
      techs: ["Python", "FastAPI", "llama.cpp", "AWS EC2", "systemd", "Linux"],
      github: "https://github.com/ketanayatti/Self-Hosted-AIOps-Agent-on-AWS",
      highlights: [
        "On-instance LLM inference — zero external AI API costs",
        "Stable inference within 1GB RAM via 2GB swap + quantized model",
        "REST endpoints: /metrics /query /exec /health",
        "systemd service — survives reboots, production-ready startup",
      ],
    },
    {
      title: "Autonomous Self-Healing Deployment Platform",
      description: "Deployment platform that detects failure and rolls back automatically. Blue-green strategy. NGINX traffic switching. No humans required at 3am.",
      techs: ["Docker", "Jenkins", "Python", "AWS", "Prometheus"],
      github: "https://github.com/ketanayatti/auto-healing-infra",
      highlights: [
        "Automated deployment with zero-downtime blue-green strategy",
        "Health check FAILS → nginx stays on blue, green container killed",
        "Real-time health monitoring and alerting",
        "Infrastructure as Code (Terraform/CloudFormation)",
        "Multi-region high availability setup",
      ],
    },
    {
      title: "Communiatec Infrastructure Automation",
      description: "End-to-end DevOps for multi-service real-time platform.",
      techs: ["Docker Compose", "Jenkins", "MongoDB Atlas", "AWS", "Linux"],
      github: "https://github.com/ketanayatti/communiatec-devops",
      highlights: [
        "Service orchestration with Docker Compose",
        "Automated database backup and recovery",
        "Load balancing and reverse proxy setup with NGINX",
        "Monitoring with logs and metrics aggregation",
        "Secure credential management",
      ],
    },
    {
      title: "AI Mock Interview CI/CD Pipeline",
      description: "Complete DevOps setup for containerized application with automated testing.",
      techs: ["Docker", "Jenkins", "AWS ECR", "pytest"],
      github: "https://github.com/ketanayatti/ai-mock-interview-devops",
      highlights: [
        "Containerized microservices with Docker",
        "Branch-aware Jenkins pipeline for dev/staging/prod",
        "Automated unit and integration testing",
        "Container registry and image management",
        "Deployment orchestration and health checks",
      ],
    },
  ];

  const devops_principles = [
    "Automate everything - manual work is debt",
    "Infrastructure as Code - version control for infrastructure",
    "Continuous integration & deployment - fast feedback",
    "Monitoring & observability - if you can't measure it, you can't improve it",
    "Security by default - shift-left on security",
  ];

  const tools = [
    { name: "Docker", category: "Containerization", icon: FaDocker },
    { name: "Jenkins", category: "CI/CD", icon: SiJenkins },
    { name: "AWS", category: "Cloud", icon: FaAws },
    { name: "Linux/Bash", category: "Scripting", icon: FaLinux },
    { name: "Prometheus", category: "Monitoring", icon: SiPrometheus },
    { name: "Terraform", category: "Infrastructure as Code", icon: FaGithub },
  ];

  return (
    <>
      {/* Back Button */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <Link href="/" className="text-[#00ff41] hover:text-[#00ff41]/80 transition text-xs font-mono">
            ← back
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">DevOps Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4">
              <h3 className="text-[#00ff41] font-bold mb-3 text-sm">Core Principles</h3>
              <ul className="space-y-2">
                {devops_principles.map((principle, idx) => (
                  <li key={idx} className="text-xs text-[#8b949e] flex gap-2">
                    <span className="text-[#00ff41] flex-shrink-0">→</span>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4">
              <h3 className="text-[#00ff41] font-bold mb-3 text-sm">DevOps Mindset</h3>
              <p className="text-xs text-[#8b949e] leading-relaxed">
                Infrastructure as code, observability-first design, and continuous improvement. Every deployment should be reproducible, every alert should be actionable, and every incident should lead to learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">DevOps Toolkit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div key={idx} className="bg-[#0d1117] border border-[#1b2230] rounded p-4 hover:border-[#00ff41]/50 transition">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-[#00ff41]" size={16} />
                    <div>
                      <div className="font-bold text-[#c9d1d9] text-sm">{tool.name}</div>
                      <div className="text-xs text-[#8b949e]">{tool.category}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">Infrastructure Projects</h2>
          <div className="space-y-4">
            {opsProjects.map((project, idx) => (
              <div key={idx} className="bg-[#0d1117] border border-[#1b2230] rounded overflow-hidden hover:border-[#00ff41]/50 transition-all">
                <div className="bg-[#161b22] px-4 py-3 border-b border-[#1b2230]">
                  <h3 className="text-sm font-bold text-[#c9d1d9]">{project.title}</h3>
                  <p className="text-xs text-[#8b949e]">{project.description}</p>
                </div>
                <div className="p-4">
                  {/* Highlights */}
                  <div className="mb-3">
                    <h4 className="text-[#00ff41] font-bold mb-2 text-xs">Key Features</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-[#8b949e] flex items-center gap-2">
                          <span className="text-[#00ff41]">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    <h4 className="text-[#00ff41] font-bold mb-2 text-xs">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, i) => (
                        <span key={i} className="bg-[#1b2230] text-[#00ff41] px-2 py-1 text-xs rounded border border-[#00ff41]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#00ff41]/80 transition text-xs"
                  >
                    <FaGithub size={14} />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">DevOps Terminal</h2>
          <DevOpsTerminal />
        </div>
      </section>

      {/* Security & Infrastructure Hardening */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">Security & Infrastructure Hardening</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4 space-y-3">
              <h3 className="text-[#00ff41] font-bold text-sm">Infrastructure Security</h3>
              <ul className="space-y-2 text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Network Isolation:</strong> Containerized services with network policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Reverse Proxy:</strong> Nginx-based traffic filtering & SSL termination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Data Encryption:</strong> AES-256-GCM for sensitive vault data at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>TLS 1.2+:</strong> Encrypted communication across all services</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4 space-y-3">
              <h3 className="text-[#00ff41] font-bold text-sm">CI/CD Security & Compliance</h3>
              <ul className="space-y-2 text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Secrets Management:</strong> Environment-based credential isolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Automated Security Scanning:</strong> Dependency & vulnerability checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Container Scanning:</strong> Image vulnerability detection before deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Audit Logging:</strong> Deployment & configuration change tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0d1117] border-t border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-3">Open to Full-Time Roles</h2>
          <p className="text-xs text-[#8b949e] mb-4 max-w-lg mx-auto">
            Looking for DevOps Engineer / SRE / Cloud Engineer opportunities. Bengaluru, Pune, Hyderabad — or remote. I respond within 24 hours.
          </p>
          <a
            href="https://linkedin.com/in/ketanayatti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border border-[#00ff41] text-[#00ff41] rounded text-xs font-mono hover:bg-[#00ff41] hover:text-[#0f1419] transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
