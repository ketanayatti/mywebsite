"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";

interface GitHubData {
  publicRepos: number;
  followers: number;
}

const GITHUB_USERNAME = "ketanayatti";

function AnimatedNumber({ value }: { value: number | string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof value !== "number") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  if (typeof value !== "number") return <>{value}</>;
  return <span ref={ref}>{display}</span>;
}

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData({
          publicRepos: json.public_repos ?? 0,
          followers: json.followers ?? 0,
        });
      })
      .catch(() => {
        setData({ publicRepos: 10, followers: 0 });
      });
  }, []);

  const stats = [
    { label: "Public Repos", value: data?.publicRepos ?? 0 },
    { label: "Followers", value: data?.followers ?? 0 },
  ];

  return (
    <SectionWrapper id="github">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00f5d4] text-sm font-mono tracking-wider uppercase mb-3"
          >
            Open Source
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            GitHub <span className="gradient-text">Activity</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/5"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[#00f5d4] mb-1">
                  <AnimatedNumber value={s.value} />
                </p>
                <p className="text-xs text-[#64748b] font-mono uppercase tracking-wider">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Real GitHub Contribution Graph */}
          <div className="rounded-xl bg-white/5 p-6 mb-6 overflow-x-auto">
            <p className="text-xs text-[#64748b] font-mono uppercase tracking-wider mb-4">
              Contribution Activity
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/00f5d4/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
              className="w-full max-w-[720px] mx-auto opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>

          <div className="text-center">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-[#94a3b8] hover:text-[#00f5d4] transition-all text-sm font-medium"
            >
              <FaGithub size={18} />
              View Full Profile on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
