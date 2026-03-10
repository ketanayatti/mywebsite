```
 _        _                                _   _   _
| | _____| |_ __ _ _ __     __ _ _   _  __| | | |_| |_(_)
| |/ / _ \ __/ _` | '_ \   / _` | | | |/ _` | | __| __| |
|   <  __/ || (_| | | | | | (_| | |_| | (_| | | |_| |_| |
|_|\_\___|\__\__,_|_| |_|  \__,_|\__, |\__,_|  \__|\__|_|
                                  |___/
```

<div align="center">

# ⚡ DevOps Portfolio — Ops Dashboard UI

**Not your average developer portfolio.**<br/>
A terminal-inspired, ops-dashboard-themed personal website built with Next.js 16, designed to look and feel like a DevOps engineer's workstation — not a generic template.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.35-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## 🖥️ What Makes This Different

This isn't a glass-morphism card grid with gradient headings. Every section is designed around real DevOps tools and workflows:

| Section            | Inspired By                 | What It Looks Like                                                   |
| ------------------ | --------------------------- | -------------------------------------------------------------------- |
| **Hero**           | System boot sequence        | `[  OK  ]` boot lines + `docker ps` output + live uptime counter     |
| **About**          | `neofetch`                  | ASCII penguin + key-value system info (OS, Host, Shell, Packages...) |
| **Experience**     | `git log --oneline`         | Commit hashes, author/date metadata, `feat:`/`fix:` prefixed entries |
| **Tech Stack**     | `systemctl list-units`      | Data table with service names, categories, green status dots         |
| **Projects**       | `ls -la ~/repos/`           | Terminal cards with file-tree features (`├──` `└──`)                 |
| **Infrastructure** | CI/CD Pipeline dashboard    | Pipeline #247 with ✓ step indicators + config panels                 |
| **Principles**     | `cat /etc/engineering.conf` | Config file with `[core]` section and key=value pairs                |
| **GitHub**         | `gh contrib-graph`          | Real contribution chart via GitHub API + animated counters           |
| **Blog**           | `cat CHANGELOG.md`          | Version-tagged entries (v0.1.0, v0.2.0...) with metric badges        |
| **Contact**        | `nmap --open`               | PORT/PROTOCOL/HOST/STATE table for reachable endpoints               |
| **Navbar**         | Terminal prompt             | `ketan@devops:~$` with `/command`-style navigation links             |
| **Footer**         | Minimal status bar          | Plain text, no icons, no fluff                                       |

---

## 🎨 Design System

```
┌──────────────────────────────────────────────┐
│  PALETTE                                      │
├──────────────────────────────────────────────┤
│  Background    #0a0a0a   ████  matte black   │
│  Panel         #0d1117   ████  github-dark    │
│  Border        #1b2230   ████  subtle edge    │
│  Terminal Bar  #161b22   ████  header bg      │
│  Foreground    #c9d1d9   ████  primary text   │
│  Muted         #8b949e   ████  secondary      │
│  Dimmed        #484f58   ████  comments       │
│  Accent        #00f5d4   ████  teal/cyan      │
│  Success       #3fb950   ████  green status   │
│  Secondary     #6366f1   ████  indigo          │
│  Hash          #f0883e   ████  orange commits  │
└──────────────────────────────────────────────┘
```

**Typography:** Monospace-first (`Geist Mono` primary, `Geist Sans` secondary)

**Components:** Panel-based (solid backgrounds, 1px borders) — no glass morphism, no blurs, no gradient text

---

## 🛠️ Tech Stack

```bash
$ systemctl list-units --type=framework

UNIT                    TYPE            STATUS
─────────────────────────────────────────────
next.js@16.1.6         framework       ● running
react@19.2.3           library         ● running
typescript@5.x         language        ● running
tailwindcss@4          styling         ● running
framer-motion@12.35    animation       ● running
react-icons@5.6        icons           ● running
turbopack              bundler         ● running
```

---

## 📂 Project Structure

```
portfolio-site/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css        # Design system (panels, terminals, tables, animations)
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   └── page.tsx           # Main page composing all sections
│   ├── components/
│   │   ├── Navbar.tsx         # Command prompt navigation bar
│   │   ├── Hero.tsx           # System boot + docker ps + live uptime
│   │   ├── About.tsx          # Neofetch terminal with ASCII art
│   │   ├── Experience.tsx     # Git log formatted work history
│   │   ├── TechStack.tsx      # systemctl service table (18 tools)
│   │   ├── Projects.tsx       # Terminal repo cards with file trees
│   │   ├── Infrastructure.tsx # Pipeline dashboard + config panels
│   │   ├── Principles.tsx     # /etc/engineering.conf config file
│   │   ├── GitHubActivity.tsx # Real GitHub API stats + contribution graph
│   │   ├── Blog.tsx           # Changelog-style entries
│   │   ├── Contact.tsx        # nmap endpoint scan table
│   │   ├── Footer.tsx         # Minimal status bar
│   │   ├── SectionWrapper.tsx # Scroll-triggered fade-in wrapper
│   │   └── ScrollToTop.tsx    # Scroll-to-top button
│   └── types/
│       └── css.d.ts           # CSS module type definitions
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tailwind config (inline via @theme in globals.css)
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ketanayatti/mywebsite.git
cd mywebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## ⚙️ Key Features

- **🖤 Dark-only** — Matte black `#0a0a0a` background, no theme toggle. This is a terminal, not a light-mode app.
- **📟 Terminal UI** — Every section uses terminal frames with title bars, prompts (`$`), command output, and monospace text.
- **📊 Real GitHub Data** — Live stats from `api.github.com` + contribution graph via [ghchart](https://ghchart.rshah.org/).
- **🎬 Boot Sequence** — Hero section animates system boot lines with `[  OK  ]` indicators before revealing content.
- **⏱️ Live Uptime** — Real-time counter in the status bar showing session duration.
- **📐 Panel System** — Solid dark panels with subtle borders instead of glass morphism cards.
- **🎯 Scroll Animations** — Framer Motion viewport-triggered fade-ins on every section.
- **📱 Responsive** — Fully responsive layout, terminal content adapts gracefully to mobile.
- **⚡ Static Generation** — Pre-rendered at build time via Next.js for instant page loads.
- **🔤 Monospace First** — Geist Mono as primary font gives the entire site a CLI aesthetic.

---

## 🧰 DevOps Tools Showcased

```
Docker · Jenkins · GitHub Actions · Ansible
AWS · Linux · Nginx · Apache · Bash · Prometheus · Grafana
Python · JavaScript · Node.js · MongoDB · MySQL
```

---

## 📸 Sections Preview

### System Boot (Hero)

```
[  OK  ] Started container runtime
[  OK  ] Mounted /dev/portfolio
[  OK  ] Loaded CI/CD pipeline modules
[  OK  ] Networking configured — port 443 open
[  OK  ] Infrastructure provisioned
[  OK  ] System operational — welcome

$ docker ps --format "table {{.Names}}  {{.Status}}"
NAMES           STATUS
portfolio       Up 99.9%
pipeline        Up 99.9%
monitoring      Up 99.9%
```

### Neofetch (About)

```
ketan@devops
──────────────────
OS:         Linux (Ubuntu 22.04 LTS)
Host:       AWS EC2 / On-Prem
Shell:      bash 5.1
Packages:   Docker, Jenkins, Ansible, AWS
CPU:        CI/CD Pipeline Automation
Memory:     Container Orchestration
GPU:        Infrastructure as Code
Disk:       Cloud Architecture & Monitoring
```

### nmap (Contact)

```
$ nmap --open ketan.ayatti

PORT    PROTOCOL    HOST                          STATE
25      smtp        kethanayatti333@gmail.com     open
443     https       linkedin.com/in/ketanayatti   open
443     https       github.com/ketanayatti        open
```

---

## 🚢 Deployment

Deploy on any platform that supports Next.js:

```bash
# Vercel (recommended)
npx vercel

# Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio

# Any Node.js host
npm run build && npm start
```

---

## 📄 License

This project is open source and available for reference and inspiration.

---

<div align="center">

**Built by [Ketan Ayatti](https://github.com/ketanayatti)** — DevOps Engineer

`ketan@devops:~$ exit 0`

</div>
