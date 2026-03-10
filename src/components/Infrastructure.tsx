"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiArrowRight } from "react-icons/hi";

const pipelineSteps = [
  { label: "Developer Push", icon: "👨‍💻" },
  { label: "GitHub", icon: "📦" },
  { label: "Jenkins", icon: "⚙️" },
  { label: "Build", icon: "🔨" },
  { label: "Docker", icon: "🐳" },
  { label: "Deploy", icon: "🚀" },
  { label: "Nginx", icon: "🌐" },
  { label: "Production", icon: "✅" },
];

const architectureCards = [
  {
    title: "CI/CD Pipeline Architecture",
    description:
      "Automated delivery from code commit to production deployment with validation gates at every stage.",
    details: [
      "Source control integration",
      "Automated build & test",
      "Container image registry",
      "Staged deployments",
      "Post-deploy validation",
    ],
    accent: "#00f5d4",
  },
  {
    title: "Container Infrastructure",
    description:
      "Docker Compose orchestration with service isolation, networking, and persistent storage.",
    details: [
      "Multi-service composition",
      "Custom bridge networking",
      "Volume persistence",
      "Health checks",
      "Resource limits",
    ],
    accent: "#6366f1",
  },
  {
    title: "Cloud Architecture",
    description:
      "AWS EC2 deployment with security groups, load balancing, and infrastructure as code practices.",
    details: [
      "EC2 instance management",
      "Security group configuration",
      "S3 artifact storage",
      "IAM role-based access",
      "Automated provisioning",
    ],
    accent: "#f59e0b",
  },
];

export default function Infrastructure() {
  return (
    <SectionWrapper id="infrastructure">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Systems Design
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            How I Build{" "}
            <span className="gradient-text">Production Systems</span>
          </motion.h2>
        </div>

        {/* Pipeline Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 sm:p-8 mb-12"
        >
          <h3 className="text-lg font-semibold text-[#e2e8f0] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f5d4]" />
            CI/CD Pipeline Flow
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all min-w-[80px]"
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-xs text-[#94a3b8] font-mono text-center whitespace-nowrap">
                    {step.label}
                  </span>
                </motion.div>
                {i < pipelineSteps.length - 1 && (
                  <HiArrowRight className="text-[#00f5d4] flex-shrink-0 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {architectureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 hover:glow-accent transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                style={{ background: `${card.accent}15` }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: card.accent }}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: card.accent }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
                {card.description}
              </p>
              <ul className="space-y-1.5">
                {card.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2 text-xs text-[#64748b]"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: card.accent }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
