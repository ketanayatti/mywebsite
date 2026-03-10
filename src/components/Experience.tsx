"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    hash: "a3f8c21",
    role: "DevOps Engineer Intern",
    company: "IonIdea",
    location: "Bangalore",
    period: "Jan 2026 – Present",
    branch: "main",
    contributions: [
      "feat: built Jenkins CI/CD pipeline automating build and deployment workflows",
      "feat: containerized services using Docker and Docker Compose",
      "fix: configured Apache reverse proxy and virtual hosts",
      "security: implemented Linux hardening and automated backups",
      "feat: implemented centralized logging for production systems",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> experience
        </motion.div>

        {/* Git log header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#484f58] mb-4"
        >
          $ git log --oneline --graph
        </motion.div>

        {/* Commits */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="panel"
            >
              {/* Commit header */}
              <div className="panel-header">
                <span className="status-dot accent" />
                <span className="text-[#f0883e]">{exp.hash}</span>
                <span className="text-[#484f58]">—</span>
                <span className="text-[#c9d1d9]">{exp.role}</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-[#00f5d4]/10 text-[#00f5d4]">
                  {exp.branch}
                </span>
              </div>

              <div className="p-5">
                {/* Meta */}
                <div className="text-xs text-[#484f58] space-y-1 mb-5">
                  <p>
                    <span className="text-[#8b949e]">Author:</span> Ketan Ayatti
                    &lt;kethanayatti333@gmail.com&gt;
                  </p>
                  <p>
                    <span className="text-[#8b949e]">Date:</span> {exp.period}
                  </p>
                  <p>
                    <span className="text-[#8b949e]">Org:</span> {exp.company} •{" "}
                    {exp.location}
                  </p>
                </div>

                {/* Contributions as commit messages */}
                <div className="space-y-2 border-l border-[#1b2230] pl-4">
                  {exp.contributions.map((c, ci) => {
                    const colonIdx = c.indexOf(":");
                    const prefix = c.slice(0, colonIdx);
                    const message = c.slice(colonIdx + 1);
                    return (
                      <motion.div
                        key={ci}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + ci * 0.06 }}
                        className="text-sm flex items-start gap-2"
                      >
                        <span className="text-[#3fb950] flex-shrink-0">+</span>
                        <span>
                          <span className="text-[#6366f1]">{prefix}:</span>
                          <span className="text-[#8b949e]">{message}</span>
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
