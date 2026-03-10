"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748b]">
            <span className="text-[#94a3b8] font-medium">Ketan Ayatti</span>{" "}
            &bull; DevOps Engineer
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:kethanayatti333@gmail.com"
              className="text-[#64748b] hover:text-[#00f5d4] transition-colors"
              aria-label="Email"
            >
              <HiMail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ketanayatti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00f5d4] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://github.com/ketanayatti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00f5d4] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
          </div>
          <p className="text-xs text-[#475569]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
