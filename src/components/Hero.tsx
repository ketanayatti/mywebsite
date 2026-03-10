"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const roles = [
  "DevOps Engineer",
  "Cloud Architect",
  "Infrastructure Builder",
  "CI/CD Specialist",
  "Automation Engineer",
];

function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length - 1 === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export default function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern">
        <div className="absolute inset-0 animated-grid grid-pattern opacity-50" />
      </div>

      {/* Gradient orbs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f5d4]/10 rounded-full blur-[128px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[128px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-[#00f5d4] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Ketan Ayatti</span>
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto mb-4 font-light"
        >
          <span className="text-[#00f5d4] font-mono">{typed}</span>
          <span className="text-[#00f5d4] animate-pulse">|</span>
          {" "}building scalable infrastructure, automated deployment
          systems, and resilient cloud platforms.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto mb-10"
        >
          I specialize in building production-grade CI/CD pipelines, containerized
          infrastructure, and cloud deployments using modern DevOps tooling.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#00f5d4] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#00f5d4]/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,245,212,0.3)]"
          >
            View Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 glass text-[#e2e8f0] font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <HiDownload />
            Download Resume
          </a>
          <a
            href="https://github.com/ketanayatti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass text-[#e2e8f0] font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <FaGithub />
            GitHub
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#111111]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-[#64748b] font-mono ml-2">~/deploy — bash</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-1.5 text-left">
              <p><span className="text-[#00f5d4]">$</span> <span className="text-[#94a3b8]">docker build -t app:latest .</span></p>
              <p><span className="text-[#00f5d4]">$</span> <span className="text-[#94a3b8]">docker push registry/app:latest</span></p>
              <p><span className="text-[#00f5d4]">$</span> <span className="text-[#94a3b8]">ansible-playbook deploy.yml</span></p>
              <p className="text-green-400/80">{"✓ deployment \"app\" successfully rolled out"}</p>
              <p><span className="text-[#00f5d4]">$</span> <span className="text-[#94a3b8] animate-pulse">_</span></p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-[#00f5d4] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
