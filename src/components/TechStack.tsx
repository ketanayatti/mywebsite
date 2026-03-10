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
  status: "running" | "ready";
  category: string;
}

const tools: Tool[] = [
  { name: "Docker", icon: SiDocker, status: "running", category: "container" },
  { name: "Kubernetes", icon: SiKubernetes, status: "running", category: "orchestration" },
  { name: "Jenkins", icon: SiJenkins, status: "running", category: "ci/cd" },
  { name: "GitHub Actions", icon: SiGithubactions, status: "running", category: "ci/cd" },
  { name: "Terraform", icon: SiTerraform, status: "running", category: "iac" },
  { name: "Ansible", icon: SiAnsible, status: "running", category: "config" },
  { name: "AWS", icon: FaAws, status: "running", category: "cloud" },
  { name: "Linux", icon: SiLinux, status: "running", category: "os" },
  { name: "Nginx", icon: SiNginx, status: "running", category: "proxy" },
  { name: "Apache", icon: SiApache, status: "ready", category: "proxy" },
  { name: "Bash", icon: SiGnubash, status: "running", category: "scripting" },
  { name: "Prometheus", icon: SiPrometheus, status: "running", category: "monitoring" },
  { name: "Grafana", icon: SiGrafana, status: "running", category: "monitoring" },
  { name: "Python", icon: SiPython, status: "running", category: "lang" },
  { name: "JavaScript", icon: SiJavascript, status: "ready", category: "lang" },
  { name: "Node.js", icon: SiNodedotjs, status: "ready", category: "runtime" },
  { name: "MongoDB", icon: SiMongodb, status: "running", category: "database" },
  { name: "MySQL", icon: SiMysql, status: "ready", category: "database" },
];

export default function TechStack() {
  return (
    <SectionWrapper id="techstack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> stack
        </motion.div>

        {/* Command */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#484f58] mb-4"
        >
          $ systemctl list-units --type=service --state=active
        </motion.div>

        {/* Service table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel overflow-hidden"
        >
          <div className="panel-header">
            <span className="status-dot online" />
            <span>{tools.filter((t) => t.status === "running").length} services active</span>
            <span className="ml-auto text-[#484f58]">{tools.length} loaded</span>
          </div>

          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="w-8"></th>
                  <th>Service</th>
                  <th className="hidden sm:table-cell">Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, i) => (
                  <motion.tr
                    key={tool.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="group"
                  >
                    <td className="!py-3">
                      <tool.icon
                        size={16}
                        className="text-[#484f58] group-hover:text-[#8b949e] transition-colors"
                      />
                    </td>
                    <td className="!py-3 text-[#c9d1d9] group-hover:text-[#00f5d4] transition-colors">
                      {tool.name}
                    </td>
                    <td className="!py-3 hidden sm:table-cell text-[#484f58]">
                      {tool.category}
                    </td>
                    <td className="!py-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs ${
                        tool.status === "running" ? "text-[#3fb950]" : "text-[#8b949e]"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          tool.status === "running" ? "bg-[#3fb950]" : "bg-[#484f58]"
                        }`} />
                        {tool.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
