"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  HiLightningBolt,
  HiServer,
  HiCloud,
  HiCog,
  HiTerminal,
} from "react-icons/hi";

const highlights = [
  { icon: HiCog, label: "CI/CD Pipeline Design" },
  { icon: HiServer, label: "Containerized Infrastructure" },
  { icon: HiCloud, label: "Cloud Deployments" },
  { icon: HiLightningBolt, label: "Infrastructure Automation" },
  { icon: HiTerminal, label: "Linux Systems Engineering" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Engineering <span className="gradient-text">Mindset</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I am a DevOps engineer focused on building reliable infrastructure
              and automated deployment systems. My work revolves around making
              software delivery faster, safer, and more predictable.
            </p>
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              My work revolves around CI/CD automation, containerized workloads,
              and scalable cloud deployments. I believe every manual process is a
              bug waiting to happen.
            </p>
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I enjoy designing systems that reduce operational complexity and
              increase system reliability — from zero-downtime deployments to
              self-healing infrastructure.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-xl glass hover:glow-accent transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00f5d4]/10 flex items-center justify-center text-[#00f5d4] group-hover:bg-[#00f5d4]/20 transition-colors">
                  <item.icon size={24} />
                </div>
                <span className="text-[#e2e8f0] font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
