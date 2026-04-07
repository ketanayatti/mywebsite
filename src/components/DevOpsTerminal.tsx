"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CommandOutput {
  input: string;
  output: string[];
  type: "success" | "info" | "error";
}

const TERMINAL_COMMANDS: Record<
  string,
  { output: string[]; type: "success" | "info" | "error" }
> = {
  whoami: {
    output: [
      "Ketan Ayatti — Full-Stack and DevOps Expertise",
    ],
    type: "success",
  },
  project: {
    output: [
      "featured projects",
      "[1] autonomous-self-healing-platform  ·  zero-downtime blue-green deployment",
      "[2] self-hosted-aiops-agent           ·  $0 LLM inference on AWS EC2 t2.micro",
      "[3] communiatec-devops-platform       ·  full CI/CD + Docker + NGINX on Linux",
      "[4] ai-mock-interview                 ·  branch-aware Jenkins pipeline",
    ],
    type: "info",
  },
  goal: {
    output: [
      "build reliable product systems",
      "ship features with clean release flow",
      "keep infrastructure observable and repeatable",
      "reduce manual ops work through automation",
    ],
    type: "success",
  },
  works: {
    output: [
      "what I work on",
      "• frontend features and backend APIs",
      "• CI/CD pipelines and deployment automation",
      "• Docker, Linux, NGINX, and AWS EC2 workflows",
      "• monitoring, rollback, and recovery behavior",
    ],
    type: "info",
  },
  think: {
    output: [
      "how I think",
      "• reliability should be designed, not improvised",
      "• manual steps are failure points waiting to happen",
      "• deployment should be predictable and reversible",
      "• infrastructure is part of the product",
    ],
    type: "info",
  },
  status: {
    output: [
      "actively looking · Full-Stack / DevOps / Cloud",
      "Bengaluru or Remote · respond within 24hrs",
    ],
    type: "success",
  },
  "projects --highlight": {
    output: [
      "[1] autonomous-self-healing-platform  ·  zero-downtime blue-green deployment",
      "[2] self-hosted-aiops-agent           ·  $0 LLM inference on AWS EC2 t2.micro",
      "[3] communiatec-devops-platform       ·  full CI/CD + Docker + NGINX on Linux",
      "[4] ai-mock-interview                 ·  branch-aware Jenkins pipeline",
    ],
    type: "info",
  },
  stack: {
    output: [
      "docker · jenkins · github-actions · aws-ec2 · nginx · linux · bash · python",
      "learning: kubernetes · terraform",
    ],
    type: "info",
  },
  contact: {
    output: [
      "kethanayatti333@gmail.com",
      "linkedin.com/in/ketanayatti",
      "github.com/ketanayatti",
    ],
    type: "info",
  },
  aiops: {
    output: [
      "Self-Hosted AIOps Agent on AWS EC2",
      "─────────────────────────────────────",
      "Problem:  Everyone pays OpenAI. What's the cheapest possible AI agent?",
      "Solution: TinyLlama 1.1B via llama.cpp on t2.micro (1GB RAM)",
      "Trick:    2GB swap to fake memory headroom",
      "Result:   $0/month inference cost. Production-ready via systemd.",
      "Endpoints: /metrics /query /exec /health",
      "Repo: github.com/ketanayatti/Self-Hosted-AIOps-Agent-on-AWS",
    ],
    type: "success",
  },
  selfheal: {
    output: [
      "Autonomous Self-Healing Deployment Platform",
      "─────────────────────────────────────────────",
      "Strategy: Blue-Green deployment with automated health validation",
      "Flow:     push → green spins up → health check →",
      "          PASS: nginx flips traffic, blue retired ✓",
      "          FAIL: nginx stays on blue, green killed ✗",
      "Result:   Zero-downtime releases. Zero humans paged at 3am.",
      "Repo: github.com/ketanayatti/Autonomous-Self-Healing-Deployment-Platform",
    ],
    type: "success",
  },
  internship: {
    output: [
      "DevOps Engineer Intern — IonIdea (Jan 2026 – Present)",
      "───────────────────────────────────────────────────────",
      "✓ Hardened Linux servers: SSH key-only, UFW rules, RBAC",
      "  → eliminated password-based login across all dev instances",
      "✓ Jenkins CI/CD pipeline: 8-command manual deploy → 1 git push",
      "✓ Dockerized full-stack app: dev/staging parity achieved",
      "✓ Bash + cron automated backups: manual DBA effort → zero",
      "✓ Centralized log rotation: observability improved, storage reduced",
    ],
    type: "info",
  },
  open: {
    output: [
      "STATUS: Open to Work",
      "─────────────────────",
      "Roles:     Full-Stack Engineer · DevOps Engineer · Cloud Engineer",
      "           Platform Engineer · Infrastructure Engineer",
      "Locations: Bengaluru · Pune · Hyderabad · Remote",
      "Type:      Full-time",
      "Start:     Immediately available",
      "",
      "Reach out: kethanayatti333@gmail.com",
    ],
    type: "success",
  },
  help: {
    output: [
      "╔══════════════════════════════════════════════════════════╗",
      "║          DEVOPS PLAYGROUND COMMAND REFERENCE             ║",
      "╚══════════════════════════════════════════════════════════╝",
      "",
      "📊 QUICK COMMANDS:",
      "  whoami                   About me",
      "  project                  Featured projects",
      "  goal                     What I am aiming for",
      "  contact                  Contact info",
      "  works                    What I work on",
      "  think                    How I think",
      "",
      "🚀 PROJECT DEEP DIVES:",
      "  aiops                    Self-Hosted AIOps Agent",
      "  selfheal                 Self-Healing Platform",
      "  internship               Current internship at IonIdea",
      "  open                     Open to Work details",
      "",
      "📦  DEPLOYMENT COMMANDS:",
      "  deploy --env=prod        Deploy to production",
      "  deploy --env=staging     Deploy to staging",
      "  rollback                 Rollback to previous version",
      "  status                   Check deployment status",
      "",
      "🐳  DOCKER COMMANDS:",
      "  docker ps                List running containers",
      "  docker logs <id>         View container logs",
      "  docker build             Build Docker image",
      "",
      "☸️   INFRASTRUCTURE:",
      "  infra --view             View AWS infrastructure",
      "  monitor                  View real-time metrics",
      "  health-check             Run health checks",
      "",
      "📊 ANALYTICS:",
      "  metrics                  Display performance metrics",
      "  logs --recent            Show recent logs",
      "",
      "🔧  SYSTEM:",
      "  about                    About this portfolio",
      "  clear                    Clear terminal",
      "  help                     Show this help message",
    ],
    type: "info",
  },
  "docker ps": {
    output: [
      "CONTAINER ID   IMAGE              STATUS           PORTS",
      "7d4a2f8c9b1e   communiatec:prod   Up 2 days        0.0.0.0:3000->3000/tcp",
      "5e9c1a3d7b2f   mongodb:6          Up 2 days        27017/tcp",
      "8f2d6c1a4e9h   nginx:latest       Up 2 days        0.0.0.0:443->443/tcp",
      "3b7c9a2d5e1f   redis:7            Up 2 days        6379/tcp",
      "",
      "✓ 4 containers running",
    ],
    type: "success",
  },
  "deploy --env=prod": {
    output: [
      "🚀 Starting production deployment...",
      "Validating code... ✓",
      "Building Docker image...",
      "  Build complete: communiatec:prod",
      "Running tests... ✓ (47 tests passed)",
      "Pushing to registry... ✓",
      "Starting blue-green switch...",
      "  Green environment ready ✓",
      "  Health checks passing ✓",
      "  Switching traffic... ✓",
      "Verifying production... ✓",
      "Monitoring for issues...",
      "",
      "✅ DEPLOYMENT SUCCESSFUL",
      "Release: v1.2.3 → v1.3.0",
      "Deployment time: 2m 34s",
      "Zero downtime achieved ✓",
    ],
    type: "success",
  },
  "deploy --env=staging": {
    output: [
      "🚀 Starting staging deployment...",
      "Validating code... ✓",
      "Building Docker image...",
      "  Build complete: communiatec:staging",
      "Running tests... ✓ (47 tests passed)",
      "Deploying to staging... ✓",
      "Running integration tests... ✓",
      "Health checks: PASSING ✓",
      "",
      "✅ STAGING DEPLOYMENT SUCCESSFUL",
      "Ready for QA testing",
    ],
    type: "success",
  },
  rollback: {
    output: [
      "⚠️  Initiating rollback...",
      "Current version: v1.3.0",
      "Rolling back to: v1.2.3",
      "Stopping current deployment... ✓",
      "Switching traffic to previous version... ✓",
      "Verifying health... ✓",
      "Monitoring in progress...",
      "",
      "✅ ROLLBACK COMPLETE",
      "Service is stable on v1.2.3",
    ],
    type: "success",
  },
  monitor: {
    output: [
      "╔══════════════════════════════════════════════════════════╗",
      "║              REAL-TIME METRICS (Live Sample)             ║",
      "╚══════════════════════════════════════════════════════════╝",
      "",
      "API RESPONSE TIMES:",
      "  p50: 45ms  | p95: 120ms | p99: 340ms",
      "",
      "ERROR RATE:",
      "  2xx: 99.2% | 4xx: 0.6% | 5xx: 0.2%",
      "",
      "RESOURCE USAGE:",
      "  CPU (avg): 28%  | Peak: 56%",
      "  Memory: 1.2GB / 8GB (15%)",
      "  Disk I/O: 120MB/s",
      "",
      "ACTIVE CONNECTIONS: 2,847",
      "REQUESTS/SEC: 342",
      "CACHE HIT RATE: 94.3%",
      "",
      "TYPE: q to quit, or press Enter for live updates",
    ],
    type: "info",
  },
  metrics: {
    output: [
      "╔══════════════════════════════════════════════════════════╗",
      "║         PERFORMANCE METRICS (Last 24 hours)              ║",
      "╚══════════════════════════════════════════════════════════╝",
      "",
      "AVAILABILITY: 99.98% ✓",
      "AVG RESPONSE TIME: 87ms",
      "P99 LATENCY: 342ms",
      "ERROR RATE: 0.02%",
      "CACHE HIT: 94.3%",
      "",
      "DEPLOYMENT STATS:",
      "  Deployments: 12",
      "  Successful: 12 ✓",
      "  Failed: 0",
      "  Rollbacks: 0",
      "  Avg Deploy Time: 2m 15s",
      "",
      "AUTO-HEALING EVENTS:",
      "  Health Check Failures: 3",
      "  Auto-Rollbacks Triggered: 0",
      "  Manual Interventions: 0",
    ],
    type: "success",
  },
  "infra --view": {
    output: [
      "╔══════════════════════════════════════════════════════════╗",
      "║            AWS INFRASTRUCTURE OVERVIEW                   ║",
      "╚══════════════════════════════════════════════════════════╝",
      "",
      "COMPUTE:",
      "  EC2 Instances: 5 (t3.large) — RUNNING",
      "  Load Balancer: Application LB — ACTIVE",
      "  Auto Scaling Group: 3-8 instances — CONFIGURED",
      "",
      "STORAGE & DATABASE:",
      "  RDS (MongoDB Atlas): Replica set (3 nodes) — HEALTHY",
      "  S3 Bucket: communiatec-prod-files — 250GB",
      "  Cache: ElastiCache (Redis) — 6GB — OPERATIONAL",
      "",
      "NETWORKING:",
      "  VPC: 10.0.0.0/16 — ACTIVE",
      "  Security Groups: 3 — CONFIGURED",
      "  Route53: communiatec.dev — ACTIVE",
      "  SSL/TLS: ACM Certificate — VALID",
      "",
      "MONITORING:",
      "  CloudWatch: ENABLED",
      "  Alarms: 8 (all GREEN)",
      "  Logs: CloudWatch Logs — ACTIVE",
    ],
    type: "success",
  },
  about: {
    output: [
      "╔══════════════════════════════════════════════════════════╗",
      "║     KETAN AYATTI — Full-Stack and DevOps Expertise       ║",
      "╚══════════════════════════════════════════════════════════╝",
      "",
      "👤 PERSONAL INFORMATION:",
      "  Name: Ketan Ayatti",
      "  Role: Full-Stack and DevOps",
      "  Company: Ionidea",
      "  Location: Bengaluru, India · Open to Pune, Hyderabad, Remote",
      "  Email: kethanayatti333@gmail.com",
      "",
      "🔗 SOCIAL LINKS:",
      "  GitHub: https://github.com/ketanayatti",
      "  LinkedIn: https://www.linkedin.com/in/ketanayatti",
      "  Portfolio: ketanayatti.netlify.app",
      "",
      "🎯 EXPERTISE:",
      "  • Frontend, backend, and deployment workflows",
      "  • Docker & Container Orchestration",
      "  • CI/CD Pipelines (Jenkins, GitHub Actions)",
      "  • AWS Cloud Infrastructure",
      "  • Linux System Administration",
      "  • Monitoring & Observability",
      "  • Security & Infrastructure Hardening",
      "",
      "🚀 NOTABLE WORK:",
      "  • Autonomous Self-Healing Infrastructure Platform",
      "  • AI Mock Interview Platform (Full DevOps Setup)",
      "  • Self-Hosted AIOps Agent on AWS EC2",
      "  • CI/CD setup at IonIdea",
      "",
      "📬 CONTACT ME:",
      "  Ready to discuss DevOps practices, infrastructure design,",
      "  and CI/CD optimization. Respond within 24 hours.",
    ],
    type: "info",
  },
  clear: {
    output: [],
    type: "info",
  },
};

export default function DevOpsTerminal() {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [booted, setBooted] = useState(false);

  // Auto-boot sequence on first load
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isBooted = sessionStorage.getItem('terminal-booted');
    if (!isBooted && !booted) {
      const bootSequence = [
        { input: 'whoami', delay: 0 },
        { input: 'project', delay: 400 },
        { input: 'goal', delay: 400 },
        { input: 'contact', delay: 400 },
        { input: 'works', delay: 400 },
        { input: 'think', delay: 400 },
      ];

      let currentIndex = 0;
      const runBootSequence = () => {
        if (currentIndex < bootSequence.length) {
          const cmd = bootSequence[currentIndex];
          setTimeout(() => {
            const command = cmd.input.toLowerCase();
            const result =
              TERMINAL_COMMANDS[command] || {
                output: [`command not found: ${cmd.input}`],
                type: "error" as const,
              };

            setHistory((prev) => [
              ...prev,
              { input: cmd.input, output: result.output, type: result.type },
            ]);

            currentIndex++;
            runBootSequence();
          }, cmd.delay);
        } else {
          sessionStorage.setItem('terminal-booted', 'true');
          setBooted(true);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }
      };

      // Start boot sequence after a short delay
      setTimeout(() => {
        runBootSequence();
      }, 300);
    }
  }, [booted]);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = () => {
    if (!input.trim()) return;

    const command = input.trim().toLowerCase();
    const result =
      TERMINAL_COMMANDS[command] || {
        output: [
          `command not found: ${input}`,
          `Type 'help' for available commands.`,
        ],
        type: "error" as const,
      };

    setHistory((prev) => [
      ...prev,
      { input, output: result.output, type: result.type },
    ]);

    setInput("");

    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus());
    }
  };

  const clearHistory = () => {
    setHistory([]);
    setInput("");
    sessionStorage.removeItem('terminal-booted');
  };

  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Interactive DevOps Playground</h2>
          <p className="text-muted mb-8">
            Explore the terminal prompts. Type <span className="text-accent font-mono">help</span> for available commands.
          </p>

          {/* Terminal Window */}
          <div className="bg-background border border-border rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-panel border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f0883e]" />
                <span className="w-3 h-3 rounded-full bg-[#f0883e]" />
                <span className="w-3 h-3 rounded-full bg-[#f0883e]" />
              </div>
              <span className="text-xs text-dimmed font-mono">ketan@devops:~$</span>
              <button
                onClick={clearHistory}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Terminal Output */}
            <div
              ref={terminalRef}
              className="bg-background px-6 py-4 font-mono text-sm h-96 overflow-y-auto"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border) var(--background)' }}
            >
              {history.length === 0 ? (
                <div className="text-dimmed">
                  <p>Welcome to the DevOps Playground</p>
                  <p className="mt-2">Type <span className="text-accent">help</span> to see available commands</p>
                </div>
              ) : (
                history.map((cmd, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="text-accent-secondary">$ {cmd.input}</div>
                    <div className={cmd.type === "error" ? "text-[#ff6b6b]" : cmd.type === "success" ? "text-[#3fb950]" : "text-muted"}>
                      {cmd.output.length === 0 ? (
                        <span> </span>
                      ) : (
                        cmd.output.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input Area */}
            <div className="bg-background border-t border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-accent-secondary font-mono">$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand();
                    }
                  }}
                  placeholder="Enter a command..."
                  className="flex-1 bg-transparent text-foreground font-mono text-sm focus:outline-none placeholder-dimmed"
                  autoFocus
                />
                {input === "" && (
                  <span className="text-[#00FF41] font-mono text-sm animate-pulse">█</span>
                )}
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-panel border border-border rounded-lg">
            <p className="text-xs text-muted font-mono">
              # try: <span className="text-accent">whoami</span> · <span className="text-accent">project</span> · <span className="text-accent">goal</span> · <span className="text-accent">contact</span> · <span className="text-accent">works</span> · <span className="text-accent">think</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
