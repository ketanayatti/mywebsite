"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Philosophy() {
  const philosophyText = `Systems don&apos;t fail. They reveal what design missed. 
I build systems that survive chaos, not ones that run 
until they break. Failure isn&apos;t an exception—it&apos;s the 
blueprint. Automation isn&apos;t clicking less, it&apos;s embedding 
intelligence. Maintenance is reading the system&apos;s story 
in reverse. That&apos;s where real engineering lives.`;

  const principles = [
    { title: "Design for Failure", desc: "Build what survives, not what runs" },
    { title: "Chaos is Data", desc: "Every failure teaches what's missing" },
    { title: "Embed Intelligence", desc: "Automation has a heartbeat, a design" },
    { title: "Read Backwards", desc: "Operations reveals what design assumed" },
    { title: "Scale Responsibly", desc: "Growth multiplies both solutions and problems" },
  ];

  return (
    <SectionWrapper id="philosophy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> philosophy
        </motion.div>

        {/* Main Philosophy Card */}
        <div className="space-y-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#c9d1d9] leading-tight">
              <span className="text-[#00f5d4]">Philosophy One:</span>
              <span className="text-[#8b949e] font-normal text-base ml-2">
                Systems Survive, They Don&apos;t Just Run
              </span>
            </h2>
          </motion.div>

          {/* Terminal View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="terminal border border-[#30363d] rounded-lg overflow-hidden bg-[#0d1117] shadow-2xl"
          >
            <div className="terminal-bar border-b border-[#30363d] bg-[#161b22] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[11px] text-[#484f58] ml-2">
                ketan@devops ~ philosophy_01.md
              </span>
            </div>

            <div className="terminal-body px-6 py-6">
              <div className="space-y-4">
                {/* Command */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs text-[#8b949e] font-mono"
                >
                  <span className="text-[#00f5d4]">$</span> cat philosophy_01.md
                </motion.div>

                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-[#161b22] to-[#0d1117] rounded-lg p-4 border border-[#30363d] hover:border-[#484f58] transition-colors"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-[#c9d1d9] text-sm leading-relaxed font-mono whitespace-pre-wrap"
                  >
                    {philosophyText}
                  </motion.p>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="h-px bg-gradient-to-r from-[#00f5d4] via-[#30363d] to-transparent origin-left"
                />

                {/* Key Principles */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="space-y-3"
                >
                  <p className="text-[#00f5d4] text-xs font-bold uppercase tracking-wide">
                    → Core Principles:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {principles.map((principle, i) => (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.08 }}
                        className="group bg-[#0d1117] border border-[#30363d] rounded p-3 hover:border-[#00f5d4]/50 hover:bg-[#161b22] transition-all duration-200"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-[#00f5d4] text-xs font-bold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#c9d1d9] text-xs font-semibold group-hover:text-[#00f5d4] transition-colors">
                              {principle.title}
                            </div>
                            <div className="text-[#8b949e] text-[10px] mt-1 leading-tight">
                              {principle.desc}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Footer Status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="text-xs text-[#484f58] font-mono pt-2"
                >
                  <span className="text-[#00f5d4]">→</span> This is how I think
                  about systems, operations, and engineering
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-4 p-3 border border-dashed border-[#30363d] rounded bg-[#0d1117]/50 hover:border-[#00f5d4]/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-[#00f5d4] text-base mt-0.5">∞</span>
              <div>
                <p className="text-[#c9d1d9] text-xs font-semibold mb-1">
                  More philosophies coming
                </p>
                <p className="text-[#8b949e] text-[11px] leading-relaxed">
                  Philosophy 2, 3, and beyond. Each one a deeper perspective on how I approach problems, design solutions, and scale systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
