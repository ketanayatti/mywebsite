"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaClock } from "react-icons/fa";

interface TimelineItem {
  week: string;
  project: string;
  description: string;
  status: "completed" | "upcoming";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function InternshipTimeline({
  items,
}: {
  items: TimelineItem[];
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-4"
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent" />

        {/* Timeline items */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  item.status === "completed"
                    ? "bg-emerald-500/20 border border-emerald-500"
                    : "bg-slate-700/50 border border-slate-600"
                }`}
              >
                {item.status === "completed" ? (
                  <FaCheckCircle className="text-emerald-400 text-lg" />
                ) : (
                  <FaClock className="text-slate-400 text-lg" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border rounded-lg p-4 transition-all duration-300 ${
                  item.status === "completed"
                    ? "border-emerald-500/30 hover:border-emerald-500/60"
                    : "border-slate-700/50 hover:border-slate-600"
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    {item.week}
                  </span>
                  {item.status === "upcoming" && (
                    <span className="text-xs font-semibold text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded">
                      Upcoming
                    </span>
                  )}
                </div>
                <h4 className="text-slate-100 font-semibold text-sm md:text-base mb-1">
                  {item.project}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
