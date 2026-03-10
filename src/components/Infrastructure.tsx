"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const pipelineSteps = [
  { label: "git push", status: "passed" as const },
  { label: "build", status: "passed" as const },
  { label: "test", status: "passed" as const },
  { label: "docker build", status: "passed" as const },
  { label: "push registry", status: "passed" as const },
  { label: "deploy staging", status: "passed" as const },
  { label: "health check", status: "passed" as const },
  { label: "deploy prod", status: "passed" as const },
];

const architectureNodes = [
  {
    title: "CI/CD Pipeline",
    config: [
      { key: "trigger", val: "push to main" },
      { key: "stages", val: "build → test → deploy" },
      { key: "registry", val: "Docker Hub" },
      { key: "rollback", val: "automated" },
      { key: "validation", val: "health-check post-deploy" },
    ],
  },
  {
    title: "Container Infrastructure",
    config: [
      { key: "runtime", val: "Docker + Compose" },
      { key: "network", val: "custom bridge" },
      { key: "volumes", val: "persistent bind mounts" },
      { key: "health", val: "http probes / 10s interval" },
      { key: "limits", val: "CPU + memory constrained" },
    ],
  },
  {
    title: "Cloud Architecture",
    config: [
      { key: "provider", val: "AWS (EC2)" },
      { key: "access", val: "IAM role-based" },
      { key: "firewall", val: "security groups" },
      { key: "storage", val: "S3 + EBS" },
      { key: "provisioning", val: "Ansible" },
    ],
  },
];

export default function Infrastructure() {
  return (
    <SectionWrapper id="infrastructure">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> infrastructure
        </motion.div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel mb-8"
        >
          <div className="panel-header">
            <span className="status-dot online" />
            <span>Pipeline #247 — main</span>
            <span className="ml-auto text-[#3fb950]">passed</span>
          </div>
          <div className="p-5">
            <div className="flex flex-wrap gap-2">
              {pipelineSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#161b22] rounded border border-[#1b2230] text-xs">
                    <span className="text-[#3fb950]">✓</span>
                    <span className="text-[#8b949e]">{step.label}</span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <span className="text-[#484f58] hidden sm:inline">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Architecture configs */}
        <div className="grid md:grid-cols-3 gap-4">
          {architectureNodes.map((node, i) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel hover:border-[#2d3748] transition-colors"
            >
              <div className="panel-header">
                <span className="status-dot accent" />
                {node.title}
              </div>
              <div className="p-4 space-y-2 text-xs">
                {node.config.map((c) => (
                  <div key={c.key} className="flex gap-2">
                    <span className="text-[#484f58] w-24 flex-shrink-0">{c.key}</span>
                    <span className="text-[#8b949e]">{c.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
