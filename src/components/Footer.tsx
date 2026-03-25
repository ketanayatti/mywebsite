"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#1b2230] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#484f58]">
          <p>
            © 2026 Ketan Ayatti · Engineering reliable systems.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:kethanayatti333@gmail.com"
              className="hover:text-[#8b949e] transition-colors"
            >
              email
            </a>
            <a
              href="https://linkedin.com/in/ketanayatti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8b949e] transition-colors"
            >
              linkedin
            </a>
            <a
              href="https://github.com/ketanayatti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8b949e] transition-colors"
            >
              github
            </a>
          </div>
          <p>
            <a href="https://ketanayatti.netlify.app" className="hover:text-[#8b949e] transition-colors">
              ketanayatti.netlify.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
