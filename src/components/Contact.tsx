"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    name: "Email",
    icon: HiMail,
    href: "mailto:kethanayatti333@gmail.com",
    label: "kethanayatti333@gmail.com",
    accent: "#00f5d4",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/ketanayatti",
    label: "linkedin.com/in/ketanayatti",
    accent: "#0077b5",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/ketanayatti",
    label: "github.com/ketanayatti",
    accent: "#e2e8f0",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Let&apos;s Build{" "}
          <span className="gradient-text">Scalable Infrastructure</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-12"
        >
          I&apos;m always open to discussing DevOps challenges, infrastructure
          architecture, and new opportunities. Let&apos;s connect.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target={s.name !== "Email" ? "_blank" : undefined}
              rel={s.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:glow-accent transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors"
                style={{ background: `${s.accent}15` }}
              >
                <s.icon
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                  style={{ color: s.accent }}
                />
              </div>
              <p className="font-semibold text-[#e2e8f0] mb-1">{s.name}</p>
              <p className="text-xs text-[#64748b] break-all">{s.label}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
