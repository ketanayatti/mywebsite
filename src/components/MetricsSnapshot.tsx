"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Metric {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const numberVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
};

interface CountUpProps {
  target: number;
  duration?: number;
}

function CountUp({ target, duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function MetricsSnapshot({
  metrics,
}: {
  metrics: Metric[];
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {metrics.map((metric, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="relative group"
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-emerald-500/20 rounded-lg p-5 md:p-6 space-y-3 hover:border-emerald-500/40 transition-colors duration-300">
            {/* Icon */}
            <div className="text-emerald-400/80 text-2xl md:text-3xl group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-300">
              {metric.icon}
            </div>

            {/* Value - Animated Counter */}
            <motion.div
              variants={numberVariants}
              className="space-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 font-mono">
                <CountUp target={parseInt(metric.value.replace(/\D/g, ""))} />
                {metric.value.includes("+") && "+"}
              </div>
            </motion.div>

            {/* Label */}
            <p className="text-slate-300 text-xs md:text-sm font-semibold">
              {metric.label}
            </p>

            {/* Description */}
            <p className="text-slate-400 text-xs leading-relaxed">
              {metric.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
