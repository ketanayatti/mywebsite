"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  status: "shipped" | "upcoming";
  problemSolved: string;
  solutionDelivered: string;
  metrics: string[];
  techStack: string[];
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
  compact?: boolean;
}

export default function ProjectCard({
  title,
  status,
  problemSolved,
  solutionDelivered,
  metrics,
  techStack,
  impact,
  githubUrl,
  compact = false,
}: ProjectCardProps) {
  const visibleMetrics = compact ? metrics.slice(0, 4) : metrics;
  const visibleTechStack = compact ? techStack.slice(0, 8) : techStack;
  const remainingTechCount = compact ? Math.max(techStack.length - visibleTechStack.length, 0) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      {/* Main card */}
      <div className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl h-full flex flex-col ${compact ? "p-4 min-h-[520px]" : "p-6 md:p-8"} group-hover:border-emerald-500/30 transition-all duration-300`}>
        {/* Header with title and status */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={`${compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"} font-bold text-slate-100 group-hover:text-emerald-300 transition-colors duration-300`}>
              {title}
            </h3>
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
              status === "shipped"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                : "bg-slate-700/50 text-slate-400 border border-slate-600"
            }`}
          >
            {status === "shipped" ? "✓ Shipped" : "○ Upcoming"}
          </span>
        </div>

        {/* Problem Solved */}
        <div className="space-y-4 flex-1">
          <div className="space-y-4">
            <div className={`${compact ? "space-y-1.5 bg-slate-950/40 border border-slate-700/40 rounded-lg p-3" : "space-y-2"}`}>
              <p className="text-emerald-400/70 text-xs font-semibold uppercase tracking-wider">
                Problem Solved
              </p>
              <p className={`text-slate-300 text-sm leading-relaxed ${compact ? "line-clamp-3" : "line-clamp-4"}`}>
                {problemSolved}
              </p>
            </div>

            <div className={`${compact ? "space-y-1.5 bg-slate-950/40 border border-slate-700/40 rounded-lg p-3" : "space-y-2"}`}>
              <p className="text-emerald-400/70 text-xs font-semibold uppercase tracking-wider">
                Solution Delivered
              </p>
              <p className={`text-slate-300 text-sm leading-relaxed ${compact ? "line-clamp-3" : "line-clamp-4"}`}>
                {solutionDelivered}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-2 bg-slate-950/50 rounded-lg p-3">
              <p className="text-emerald-400/70 text-xs font-semibold uppercase tracking-wider">
                Key Outcomes
              </p>
              <ul className="space-y-1.5">
                {visibleMetrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-200 text-xs leading-relaxed">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-emerald-400/70 text-xs font-semibold uppercase tracking-wider">
                Tech Used
              </p>
              <div className="flex flex-wrap gap-2">
                {visibleTechStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`bg-slate-950/50 border border-slate-700/50 text-slate-300 font-medium rounded-full hover:border-emerald-500/30 transition-colors duration-300 ${compact ? "text-[11px] px-2.5 py-1" : "text-xs px-3 py-1.5"}`}
                  >
                    {tech}
                  </span>
                ))}
                {remainingTechCount > 0 && (
                  <span className="bg-slate-900/80 border border-slate-700/60 text-slate-400 text-[11px] font-medium px-2.5 py-1 rounded-full">
                    +{remainingTechCount} more
                  </span>
                )}
              </div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
              <p className={`text-slate-300 text-sm leading-relaxed italic ${compact ? "line-clamp-3" : "line-clamp-4"}`}>
                {impact}
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className={`flex gap-3 ${compact ? "pt-2" : "pt-3"}`}>
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-300 ${compact ? "text-xs" : "text-sm"}`}
            >
              <FaGithub size={16} />
              View on GitHub
              <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
