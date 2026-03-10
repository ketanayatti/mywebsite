"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const posts = [
  {
    id: "v0.3.0",
    title: "Building Zero-Downtime Deployment Pipelines",
    summary:
      "How to architect blue-green deployments with automatic health validation and instant rollback capabilities.",
    tags: ["ci-cd", "docker", "devops"],
    date: "upcoming",
  },
  {
    id: "v0.2.0",
    title: "Docker Compose for Production Workloads",
    summary:
      "Lessons learned running Docker Compose in production — networking, volumes, health checks, and resource management.",
    tags: ["docker", "infrastructure"],
    date: "upcoming",
  },
  {
    id: "v0.1.0",
    title: "Jenkins Pipeline as Code: Best Practices",
    summary:
      "Writing maintainable Jenkinsfiles with shared libraries, parallel stages, and proper error handling.",
    tags: ["jenkins", "automation"],
    date: "upcoming",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-[#484f58] uppercase tracking-wider"
        >
          <span className="text-[#00f5d4]">#</span> blog
        </motion.div>

        {/* Changelog style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#484f58] mb-4"
        >
          $ cat CHANGELOG.md
        </motion.div>

        <div className="space-y-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="panel hover:border-[#2d3748] transition-colors"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-[#161b22] border border-[#1b2230] text-[#f0883e]">
                    {post.id}
                  </span>
                  <span className="text-xs text-[#484f58]">{post.date}</span>
                </div>
                <h3 className="text-sm text-[#c9d1d9] font-medium mb-1">
                  {post.title}
                </h3>
                <p className="text-xs text-[#8b949e] leading-relaxed mb-3">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="metric">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
