"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const bootLines = [
  { text: "[  OK  ] Started container runtime", delay: 0 },
  { text: "[  OK  ] Mounted /dev/portfolio", delay: 0.15 },
  { text: "[  OK  ] Loaded CI/CD pipeline modules", delay: 0.3 },
  { text: "[  OK  ] Networking configured — port 443 open", delay: 0.45 },
  { text: "[  OK  ] Infrastructure provisioned", delay: 0.6 },
  { text: "[  OK  ] System operational — welcome", delay: 0.75 },
];

function useUptime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const m = Math.floor(diff / 60);
      const s = diff % 60;
      setTime(`${m}m ${s}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const uptime = useUptime();
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-32">
        {/* Top status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 mb-10 text-xs text-[#484f58]"
        >
          <span className="flex items-center gap-2">
            <span className="status-dot online status-pulse" />
            <span className="text-[#3fb950]">OPERATIONAL</span>
          </span>
          <span>UPTIME {uptime}</span>
          <span>PID 1337</span>
          <span>LOAD 0.42</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Identity */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c9d1d9] tracking-tight mb-2"
            >
              Ketan Ayatti
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl text-[#00f5d4] mb-6"
            >
              DevOps Engineer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-[#8b949e] leading-relaxed mb-8 max-w-md"
            >
              Building production CI/CD pipelines, containerized infrastructure,
              and automated cloud deployments. Every manual process is a bug
              waiting to happen.
            </motion.p>

            {/* System info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-2 text-xs mb-10"
            >
              {[
                { key: "LOCATION", val: "Bangalore, IN" },
                { key: "ROLE", val: "DevOps Engineer @ IonIdea" },
                { key: "STACK", val: "Docker · Jenkins · Ansible · AWS" },
                { key: "STATUS", val: "Open to opportunities" },
              ].map((item) => (
                <div key={item.key} className="flex gap-3">
                  <span className="text-[#484f58] w-20 flex-shrink-0">{item.key}</span>
                  <span className="text-[#8b949e]">{item.val}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00f5d4] text-[#0d1117] text-sm font-semibold rounded hover:bg-[#00f5d4]/85 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 panel text-sm text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#2d3748] transition-all"
              >
                <HiDownload size={14} />
                Resume
              </a>
              <a
                href="https://github.com/ketanayatti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 panel text-sm text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#2d3748] transition-all"
              >
                <FaGithub size={14} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: Boot terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="terminal scanlines"
          >
            <div className="terminal-bar">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[11px] text-[#484f58] ml-2">
                system.boot — bash
              </span>
            </div>
            <div className="terminal-body">
              {bootLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay + 0.5 }}
                >
                  <span className="text-[#3fb950]">{line.text.slice(0, 8)}</span>
                  <span className="text-[#8b949e]">{line.text.slice(8)}</span>
                </motion.p>
              ))}

              {booted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 pt-3 border-t border-[#1b2230]"
                >
                  <p>
                    <span className="prompt">$ </span>
                    <span className="cmd">docker ps --format &quot;table {'{{'}.Names\t{'{{'}.Status&quot;</span>
                  </p>
                  <p className="text-[#484f58] mt-1">NAMES{"\t\t"}STATUS</p>
                  <p><span className="text-[#c9d1d9]">portfolio</span>{"\t"}<span className="output">Up 99.9%</span></p>
                  <p><span className="text-[#c9d1d9]">pipeline</span>{"\t"}<span className="output">Up 99.9%</span></p>
                  <p><span className="text-[#c9d1d9]">monitoring</span>{"\t"}<span className="output">Up 99.9%</span></p>
                  <p className="mt-2">
                    <span className="prompt">$ </span>
                    <span className="blink text-[#00f5d4]">_</span>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#484f58]"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-block"
          >
            scroll ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
