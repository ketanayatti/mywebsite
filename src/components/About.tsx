"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const sysInfo = [
  { key: "OS", val: "Linux (Ubuntu 22.04 LTS)" },
  { key: "Host", val: "AWS EC2 / On-Prem" },
  { key: "Shell", val: "bash 5.1" },
  { key: "Packages", val: "Docker, Jenkins, Ansible, AWS" },
  { key: "Uptime", val: "Jan 2026 – present" },
  { key: "Resolution", val: "Production-grade" },
  { key: "CPU", val: "CI/CD Pipeline Automation" },
  { key: "Memory", val: "Container Orchestration" },
  { key: "GPU", val: "Infrastructure as Code" },
  { key: "Disk", val: "Cloud Architecture & Monitoring" },
];

const asciiArt = `
    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/`;

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> about
        </motion.div>

        {/* Neofetch terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal"
        >
          <div className="terminal-bar">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[11px] text-[#484f58] ml-2">
              ketan@devops ~ neofetch
            </span>
          </div>
          <div className="terminal-body">
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10">
              {/* ASCII art */}
              <pre className="text-[#00f5d4] text-xs leading-tight hidden md:block select-none">
                {asciiArt}
              </pre>

              {/* Info */}
              <div>
                <p className="text-[#c9d1d9] font-bold mb-0.5">
                  ketan@devops
                </p>
                <p className="text-[#484f58] mb-3">
                  ─────────────
                </p>
                <div className="space-y-1">
                  {sysInfo.map((item, i) => (
                    <motion.p
                      key={item.key}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <span className="text-[#00f5d4]">{item.key}</span>
                      <span className="text-[#484f58]">: </span>
                      <span className="text-[#8b949e]">{item.val}</span>
                    </motion.p>
                  ))}
                </div>

                {/* Color blocks */}
                <div className="flex gap-1 mt-4">
                  {["#0d1117", "#1b2230", "#484f58", "#8b949e", "#c9d1d9", "#00f5d4", "#3fb950", "#6366f1"].map(
                    (c) => (
                      <div
                        key={c}
                        className="w-4 h-4 rounded-sm"
                        style={{ background: c }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Description below */}
            <div className="mt-6 pt-4 border-t border-[#1b2230] space-y-2">
              <p className="text-[#8b949e] text-sm leading-relaxed">
                DevOps engineer focused on building reliable infrastructure
                and automated deployment systems. My work revolves around making
                software delivery faster, safer, and more predictable.
              </p>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                I believe every manual process is a bug waiting to happen. I design
                systems that reduce operational complexity — from zero-downtime
                deployments to self-healing infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
