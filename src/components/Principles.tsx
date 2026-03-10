"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const config = [
  {
    key: "automation_first",
    val: "true",
    comment: "Everything should be reproducible. Manual processes are bugs waiting to happen.",
  },
  {
    key: "reliability",
    val: "self-healing",
    comment: "Infrastructure should be resilient. Systems recover without human intervention.",
  },
  {
    key: "scalability",
    val: "horizontal",
    comment: "Systems should handle growth without redesign. Architecture decisions compound.",
  },
  {
    key: "observability",
    val: "full-stack",
    comment: "Systems must be measurable and monitored. You can't fix what you can't see.",
  },
];

export default function Principles() {
  return (
    <SectionWrapper id="principles">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> principles
        </motion.div>

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
              cat /etc/engineering.conf
            </span>
          </div>
          <div className="terminal-body">
            <p className="comment"># Engineering principles configuration</p>
            <p className="comment"># /etc/engineering.conf</p>
            <p className="mt-3 comment">[core]</p>
            {config.map((c, i) => (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="mt-3"
              >
                <p className="comment"># {c.comment}</p>
                <p>
                  <span className="text-[#c9d1d9]">{c.key}</span>
                  <span className="text-[#484f58]"> = </span>
                  <span className="text-[#00f5d4]">{c.val}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
