"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiExternalLink, HiPencilAlt } from "react-icons/hi";

const blogPosts = [
  {
    title: "Building Zero-Downtime Deployment Pipelines",
    excerpt:
      "How to architect blue-green deployments with automatic health validation and instant rollback capabilities.",
    tags: ["CI/CD", "Docker", "DevOps"],
    date: "Coming Soon",
  },
  {
    title: "Docker Compose for Production Workloads",
    excerpt:
      "Lessons learned running Docker Compose in production — networking, volumes, health checks, and resource management.",
    tags: ["Docker", "Infrastructure"],
    date: "Coming Soon",
  },
  {
    title: "Jenkins Pipeline as Code: Best Practices",
    excerpt:
      "Writing maintainable Jenkinsfiles with shared libraries, parallel stages, and proper error handling.",
    tags: ["Jenkins", "Automation"],
    date: "Coming Soon",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Writing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Technical <span className="gradient-text">Blog</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 hover:glow-accent transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <HiPencilAlt className="text-[#6366f1]" size={16} />
                <span className="text-xs text-[#64748b] font-mono">
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-[#94a3b8] mb-4 flex-1 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-[#94a3b8] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
