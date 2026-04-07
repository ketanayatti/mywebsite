"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "@/components/Landing";

const INTRO_DURATION_MS = 3600;

export default function AnimatedPortfolioExperience() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    const hasSeenIntro = window.sessionStorage.getItem("portfolio_intro_seen") === "1";
    const initTimer = window.setTimeout(() => {
      setShowIntro(!hasSeenIntro);
    }, 0);

    if (hasSeenIntro) {
      return () => window.clearTimeout(initTimer);
    }

    const autoExitTimer = window.setTimeout(() => {
      window.sessionStorage.setItem("portfolio_intro_seen", "1");
      setShowIntro(false);
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(initTimer);
      window.clearTimeout(autoExitTimer);
    };
  }, []);

  const title = useMemo(() => "WELCOME".split(""), []);

  const skipIntro = () => {
    window.sessionStorage.setItem("portfolio_intro_seen", "1");
    setShowIntro(false);
  };

  if (showIntro === null) {
    return <div className="min-h-screen bg-slate-950" aria-hidden="true" />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative flex min-h-screen items-center justify-center px-6"
          >
            <div className="intro-grid absolute inset-0" />
            <div className="intro-orb intro-orb-one" />
            <div className="intro-orb intro-orb-two" />
            <div className="intro-orb intro-orb-three" />

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative z-10 mx-auto w-full max-w-4xl text-center"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-emerald-300/70 sm:text-sm">
                Ketan Ayatti Portfolio
              </p>

              <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {title.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={{ opacity: 0, y: 28, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.12 + index * 0.08,
                      duration: 0.55,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="intro-title text-4xl font-black text-emerald-200 drop-shadow-[0_0_18px_rgba(16,185,129,0.32)] sm:text-6xl md:text-7xl"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.8 }}
                className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base"
              >
                Open to work on product features, implementation, and delivery-focused engineering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="mx-auto mt-8 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-slate-700/70"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 3.2, ease: "easeInOut" }}
                  className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300"
                />
              </motion.div>

              <motion.button
                type="button"
                onClick={skipIntro}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.4 }}
                className="mt-8 rounded-md border border-emerald-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/90 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Skip Intro
              </motion.button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.main
            key="landing"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <Landing />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
