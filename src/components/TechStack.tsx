"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiApache,
  SiGnubash,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

interface Tool {
  name: string;
  icon: IconType;
  color: string;
}

interface Category {
  title: string;
  tools: Tool[];
  accent: string;
}

const categories: Category[] = [
  {
    title: "DevOps & Cloud",
    accent: "#00f5d4",
    tools: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    title: "Infrastructure & Monitoring",
    accent: "#6366f1",
    tools: [
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Apache", icon: SiApache, color: "#D22128" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
    ],
  },
  {
    title: "Programming",
    accent: "#f59e0b",
    tools: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    title: "Databases",
    accent: "#ef4444",
    tools: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="techstack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Technologies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Tech <span className="gradient-text">Stack</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-accent transition-all duration-300"
            >
              <h3
                className="text-lg font-semibold mb-5 flex items-center gap-2"
                style={{ color: cat.accent }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.accent }}
                />
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.tools.map((tool, ti) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + ti * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-default"
                  >
                    <tool.icon size={24} style={{ color: tool.color }} />
                    <span className="text-sm text-[#e2e8f0] font-medium">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
