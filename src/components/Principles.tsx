"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiLightningBolt, HiShieldCheck, HiTrendingUp, HiEye } from "react-icons/hi";

const principles = [
  {
    icon: HiLightningBolt,
    title: "Automation First",
    description:
      "Everything should be reproducible and automated. Manual processes are bugs waiting to happen.",
    accent: "#00f5d4",
  },
  {
    icon: HiShieldCheck,
    title: "Reliability",
    description:
      "Infrastructure should be resilient and self-healing. Systems recover without human intervention.",
    accent: "#6366f1",
  },
  {
    icon: HiTrendingUp,
    title: "Scalability",
    description:
      "Systems should handle growth without redesign. Architecture decisions compound over time.",
    accent: "#f59e0b",
  },
  {
    icon: HiEye,
    title: "Observability",
    description:
      "Systems must be measurable and monitored. You can't fix what you can't see.",
    accent: "#ef4444",
  },
];

export default function Principles() {
  return (
    <SectionWrapper id="principles">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Engineering <span className="gradient-text">Principles</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center hover:glow-accent transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${p.accent}15` }}
              >
                <p.icon size={28} style={{ color: p.accent }} />
              </div>
              <h3 className="text-lg font-bold text-[#e2e8f0] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
