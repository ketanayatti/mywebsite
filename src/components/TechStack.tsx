"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaDocker } from "react-icons/fa";
import { IconType } from "react-icons";

interface Tool {
  name: string;
  icon: IconType;
  description: string;
  proficiency: "Expert" | "Advanced" | "Intermediate";
  usage: string;
}

interface Category {
  name: string;
  id: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    name: "Languages & Frameworks",
    id: "languages",
    tools: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        description: "Typed superset of JavaScript",
        proficiency: "Expert",
        usage: "Type-safe development",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        description: "Dynamic programming for web",
        proficiency: "Expert",
        usage: "Frontend & backend",
      },
      {
        name: "Python",
        icon: SiPython,
        description: "Versatile scripting language",
        proficiency: "Advanced",
        usage: "Backend & automation",
      },
      {
        name: "React",
        icon: SiReact,
        description: "UI library for interactive apps",
        proficiency: "Expert",
        usage: "Frontend development",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "React framework with SSR",
        proficiency: "Expert",
        usage: "Full-stack applications",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        description: "Modern Python web framework",
        proficiency: "Advanced",
        usage: "Backend APIs",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        description: "JavaScript runtime",
        proficiency: "Expert",
        usage: "Server-side execution",
      },
      {
        name: "Bash",
        icon: SiGnubash,
        description: "Shell scripting automation",
        proficiency: "Advanced",
        usage: "System scripts",
      },
    ],
  },
  {
    name: "Databases",
    id: "databases",
    tools: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        description: "NoSQL document database",
        proficiency: "Advanced",
        usage: "Flexible schemas",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        description: "Relational database",
        proficiency: "Advanced",
        usage: "Structured data",
      },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    id: "devops",
    tools: [
      {
        name: "Docker",
        icon: SiDocker,
        description: "Containerization platform",
        proficiency: "Advanced",
        usage: "Container orchestration",
      },
      {
        name: "Ansible",
        icon: SiAnsible,
        description: "Infrastructure automation",
        proficiency: "Advanced",
        usage: "Server provisioning",
      },
      {
        name: "Linux",
        icon: SiLinux,
        description: "Open-source OS",
        proficiency: "Expert",
        usage: "Server environment",
      },
    ],
  },
  {
    name: "CI/CD & Automation",
    id: "cicd",
    tools: [
      {
        name: "Jenkins",
        icon: SiJenkins,
        description: "Automation server",
        proficiency: "Advanced",
        usage: "Build pipelines",
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        description: "Workflow automation",
        proficiency: "Advanced",
        usage: "CI/CD pipelines",
      },
    ],
  },
  {
    name: "Monitoring & Observability",
    id: "monitoring",
    tools: [
      {
        name: "Prometheus",
        icon: SiPrometheus,
        description: "Metrics collection system",
        proficiency: "Intermediate",
        usage: "System monitoring",
      },
      {
        name: "Grafana",
        icon: SiGrafana,
        description: "Visualization platform",
        proficiency: "Intermediate",
        usage: "Performance analytics",
      },
    ],
  },
  {
    name: "Web Servers & Proxy",
    id: "webservers",
    tools: [
      {
        name: "Nginx",
        icon: SiNginx,
        description: "Web server & load balancer",
        proficiency: "Advanced",
        usage: "Reverse proxy",
      },
      {
        name: "Apache",
        icon: SiApache,
        description: "Traditional web server",
        proficiency: "Intermediate",
        usage: "Web hosting",
      },
    ],
  },
  {
    name: "Version Control & Collaboration",
    id: "versioncontrol",
    tools: [
      {
        name: "Git",
        icon: SiGit,
        description: "Distributed version control",
        proficiency: "Expert",
        usage: "Source code management",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        description: "Git hosting platform",
        proficiency: "Expert",
        usage: "Repository hosting",
      },
      {
        name: "GitLab",
        icon: SiGitlab,
        description: "Git platform with CI/CD",
        proficiency: "Advanced",
        usage: "DevOps workflow",
      },
    ],
  },
  {
    name: "Deployment & Hosting",
    id: "deployment",
    tools: [
      {
        name: "Vercel",
        icon: SiVercel,
        description: "Frontend deployment platform",
        proficiency: "Advanced",
        usage: "Next.js deployment",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        description: "Web hosting & CDN",
        proficiency: "Advanced",
        usage: "Static site hosting",
      },
    ],
  },
  {
    name: "Cloud Services",
    id: "cloud",
    tools: [
      {
        name: "AWS",
        icon: FaAws,
        description: "Cloud computing platform",
        proficiency: "Advanced",
        usage: "Cloud infrastructure",
      },
    ],
  },
];

// Typing animation hook
function useTyping(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}

function CategorySection({ category }: { category: Category }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const command = `ls -lah ~/stack/${category.id}/`;
  const typedCommand = useTyping(isExpanded ? command : "", 50);

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-[#30363d] rounded-lg overflow-hidden bg-[#0d1117] hover:border-[#484f58] transition-colors"
    >
      {/* Category Header - Click to expand */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#161b22] transition-colors group"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#00f5d4] font-semibold">$</span>
          <span className="text-[#c9d1d9] font-semibold">{category.name}</span>
          <span className="text-[#484f58] text-sm">({category.tools.length} tools)</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#00f5d4]"
        >
          ▼
        </motion.div>
      </button>

      {/* Expanded Terminal View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="border-t border-[#30363d] bg-[#0d1117] origin-top"
          >
            <div className="px-6 py-4">
              {/* Terminal Command with typing */}
              <div className="bg-[#161b22] rounded p-4 mb-4 font-mono text-sm border border-[#30363d]">
                <div className="text-[#8b949e]">
                  <span className="text-[#00f5d4]">$</span>{" "}
                  <span className="text-[#c9d1d9]">{typedCommand}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="text-[#00f5d4] ml-1"
                  >
                    |
                  </motion.span>
                </div>
              </div>

              {/* Tools output - appears after typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-2"
              >
                {category.tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.08 }}
                    className="flex items-center gap-3 px-4 py-2 font-mono text-sm text-[#8b949e] hover:text-[#00f5d4] transition-colors group"
                  >
                    <tool.icon size={18} className="text-[#00f5d4]" />
                    <span className="group-hover:text-[#c9d1d9]">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <SectionWrapper id="techstack">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> tech stack
        </motion.div>

        {/* Command Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#484f58] mb-6 font-mono"
        >
          <span className="text-[#00f5d4]">$</span> <span className="text-[#8b949e]">cat ~/tools.list</span>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-4">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-6 border-t border-[#30363d] text-xs text-[#484f58]"
        >
          <div className="text-center text-[#8b949e]">
            💡 Click on any category to explore tools in detail
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
