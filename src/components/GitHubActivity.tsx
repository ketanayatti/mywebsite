"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";

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
    { label: "repos", value: data?.publicRepos ?? 0 },
    { label: "followers", value: data?.followers ?? 0 },
  ];

  return (
    <SectionWrapper id="github">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-[#484f58] font-mono text-xs mb-6"># github</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="terminal">
            <div className="terminal-bar">
              <span className="text-[#8b949e] font-mono text-sm">
                gh — activity
              </span>
            </div>
            <div className="terminal-body space-y-6">
              <p className="text-[#484f58]">
                # fetched from api.github.com/users/{GITHUB_USERNAME}
              </p>

              {/* Stats inline */}
              <div className="flex gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#00f5d4]">
                      <AnimatedNumber value={s.value} />
                    </span>
                    <span className="text-xs text-[#484f58]">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Contribution Graph */}
              <div className="overflow-x-auto">
                <p className="text-[#8b949e] text-xs mb-3">
                  $ gh contrib-graph --user {GITHUB_USERNAME}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://ghchart.rshah.org/00f5d4/${GITHUB_USERNAME}`}
                  alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
                  className="w-full max-w-[720px] opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-[#8b949e] hover:text-[#00f5d4] transition-colors"
              >
                → github.com/{GITHUB_USERNAME}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
