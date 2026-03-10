"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const endpoints = [
  {
    protocol: "mailto",
    host: "kethanayatti333@gmail.com",
    href: "mailto:kethanayatti333@gmail.com",
    status: "open",
  },
  {
    protocol: "https",
    host: "linkedin.com/in/ketanayatti",
    href: "https://linkedin.com/in/ketanayatti",
    status: "open",
  },
  {
    protocol: "https",
    host: "github.com/ketanayatti",
    href: "https://github.com/ketanayatti",
    status: "open",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> contact
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
              connect — endpoints
            </span>
          </div>
          <div className="terminal-body">
            <p className="comment">
              # Open to discussing DevOps challenges, infrastructure
            </p>
            <p className="comment"># architecture, and new opportunities.</p>
            <p className="mt-3">
              <span className="prompt">$ </span>
              <span className="cmd">nmap --open ketan.ayatti</span>
            </p>
            <p className="mt-2 text-[#484f58] text-xs">
              PORT{"\t\t"}PROTOCOL{"\t"}HOST{"\t\t\t\t\t\t"}STATE
            </p>

            {endpoints.map((ep, i) => (
              <motion.div
                key={ep.host}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <a
                  href={ep.href}
                  target={ep.protocol === "https" ? "_blank" : undefined}
                  rel={ep.protocol === "https" ? "noopener noreferrer" : undefined}
                  className="block hover:bg-[#00f5d4]/5 -mx-2 px-2 py-0.5 rounded transition-colors group"
                >
                  <span className="text-[#484f58]">
                    {ep.protocol === "mailto" ? "25" : "443"}
                  </span>
                  {"\t\t"}
                  <span className="text-[#8b949e]">{ep.protocol}</span>
                  {"\t\t"}
                  <span className="text-[#c9d1d9] group-hover:text-[#00f5d4] transition-colors">
                    {ep.host}
                  </span>
                  {"\t"}
                  <span className="text-[#3fb950]">{ep.status}</span>
                </a>
              </motion.div>
            ))}

            <p className="mt-4">
              <span className="prompt">$ </span>
              <span className="blink text-[#00f5d4]">_</span>
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
