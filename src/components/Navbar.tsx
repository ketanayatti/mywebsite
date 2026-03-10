"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "home", href: "#home" },
  { name: "projects", href: "#projects" },
  { name: "infra", href: "#infrastructure" },
  { name: "experience", href: "#experience" },
  { name: "stack", href: "#techstack" },
  { name: "blog", href: "#blog" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#1b2230]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Prompt logo */}
          <a href="#home" className="text-sm tracking-tight">
            <span className="text-[#00f5d4]">ketan</span>
            <span className="text-[#484f58]">@</span>
            <span className="text-[#8b949e]">devops</span>
            <span className="text-[#484f58]">:~$</span>
            <span className="blink text-[#00f5d4] ml-0.5">_</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs transition-all duration-200 rounded ${
                  activeSection === link.href
                    ? "text-[#00f5d4] bg-[#00f5d4]/8"
                    : "text-[#484f58] hover:text-[#8b949e]"
                }`}
              >
                /{link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#484f58] hover:text-[#8b949e] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117] border-t border-[#1b2230]"
          >
            <div className="px-4 py-2 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 text-xs rounded transition-colors ${
                    activeSection === link.href
                      ? "text-[#00f5d4] bg-[#00f5d4]/8"
                      : "text-[#484f58] hover:text-[#8b949e]"
                  }`}
                >
                  /{link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
