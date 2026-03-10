"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiBriefcase } from "react-icons/hi";

const experiences = [
  {
    role: "DevOps Engineer Intern",
    company: "IonIdea",
    location: "Bangalore",
    period: "Jan 2026 – Present",
    contributions: [
      "Built Jenkins CI/CD pipeline automating build and deployment workflows",
      "Containerized services using Docker and Docker Compose",
      "Configured Apache reverse proxy and virtual hosts",
      "Implemented Linux hardening and automated backups",
      "Implemented centralized logging for production systems",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Career
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5d4] via-[#6366f1] to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[22px] top-1 w-[13px] h-[13px] rounded-full border-2 border-[#00f5d4] bg-[#0a0a0a]">
                <div className="absolute inset-1 rounded-full bg-[#00f5d4] animate-pulse" />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 hover:glow-accent transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <HiBriefcase className="text-[#00f5d4]" />
                    <h3 className="text-lg font-bold text-[#e2e8f0]">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#00f5d4]/10 text-[#00f5d4] text-xs font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#94a3b8] text-sm mb-4">
                  {exp.company} • {exp.location}
                </p>

                <div className="space-y-2">
                  {exp.contributions.map((c, ci) => (
                    <motion.div
                      key={ci}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + ci * 0.08 }}
                      className="flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-[#94a3b8]">{c}</span>
                    </motion.div>
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
