import Link from "next/link";
import { FaGithub, FaNode, FaReact } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPython, SiCplusplus } from "react-icons/si";

export const metadata = {
  title: "Ketan Ayatti | Development",
  description: "Full-stack development skills, projects, and approach.",
};

export default function DevPage() {
  const devProjects = [
    {
      title: "Communiatec - Full-Stack Collaboration Platform",
      description: "Real-time messaging, collaborative code editor, file vault, and AI suggestions.",
      techs: ["React 18", "Node.js", "Socket.io", "MongoDB", "Google Gemini AI"],
      deployed: "Jenkins CI/CD · Docker · NGINX · Linux EC2",
      github: "https://github.com/ketanayatti/communiatec",
      highlights: [
        "Real-time messaging with typing indicators",
        "Multi-user code editor with live sync",
        "Secure file vault with role-based access",
        "AI-powered suggestions",
        "Admin dashboard with audit logs",
      ],
    },
    {
      title: "AI Mock Interview Platform",
      description: "Adaptive interview questions, resume parsing, and performance analytics.",
      techs: ["Node.js", "Express", "MongoDB", "Google Gemini", "PDF Parsing"],
      deployed: "Branch-aware Jenkins · Docker Compose · Staging + Prod envs",
      github: "https://github.com/ketanayatti/ai-mock-interview",
      highlights: [
        "Adaptive question generation based on experience",
        "Resume parsing (PDF & DOCX)",
        "Multi-model AI evaluation",
        "Session persistence and analytics",
        "Score trends and performance insights",
      ],
    },
  ];

  const skills = [
    { name: "JavaScript/TypeScript", icon: SiTypescript },
    { name: "React / Next.js", icon: FaReact },
    { name: "Node.js / Express", icon: FaNode },
    { name: "MongoDB / Mongoose", icon: SiMongodb },
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "RESTful APIs", icon: FaNode },
    { name: "Real-time (Socket.io)", icon: FaNode },
  ];

  return (
    <>
      {/* Back Button */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <Link href="/" className="text-[#00ff41] hover:text-[#00ff41]/80 transition text-xs font-mono">
            ← back
          </Link>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-2">Full-Stack Developer</h2>
          <p className="text-[#8b949e] text-sm mb-6">Full-stack foundations that inform how I think about infrastructure. Every system I deploy, I've also built.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4 space-y-3">
              <h3 className="text-[#00ff41] font-bold text-sm">Core Principles</h3>
              <ul className="space-y-2 text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">✓</span>
                  <span>Write code for humans to read, not just machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">✓</span>
                  <span>Understand the problem before writing solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">✓</span>
                  <span>Embrace simplicity over clever hacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">✓</span>
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4 space-y-3">
              <h3 className="text-[#00ff41] font-bold text-sm">Problem-Solving Approach</h3>
              <ol className="space-y-2 text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">①</span>
                  <span>Understand requirements thoroughly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">②</span>
                  <span>Break down into smaller tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">③</span>
                  <span>Design before implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">④</span>
                  <span>Test continuously & refactor</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="bg-[#0d1117] border border-[#1b2230] rounded p-3">
                  <div className="flex items-center gap-2">
                    <Icon className="text-[#00ff41]" size={16} />
                    <span className="font-bold text-[#c9d1d9] text-sm">{skill.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">Featured Projects</h2>
          <div className="space-y-6">
            {devProjects.map((project, idx) => (
              <div key={idx} className="bg-[#0d1117] border border-[#1b2230] rounded overflow-hidden hover:border-[#00ff41]/50 transition-all">
                <div className="bg-[#161b22] px-4 py-3 border-b border-[#1b2230]">
                  <h3 className="text-base md:text-lg font-bold text-[#c9d1d9] mb-1">{project.title}</h3>
                  <p className="text-xs md:text-sm text-[#8b949e]">{project.description}</p>
                </div>
                <div className="p-4">
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-[#00ff41] font-bold mb-2 text-xs">Key Features</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-[#8b949e] flex items-center gap-2">
                          <span className="text-[#00ff41]">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-[#00ff41] font-bold mb-2 text-xs">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techs.map((tech, i) => (
                        <span key={i} className="bg-[#1b2230] text-[#00ff41] px-2 py-0.5 text-xs rounded border border-[#00ff41]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deployment Info */}
                  <div className="mb-4">
                    <p className="text-[#8b949e] text-xs">
                      <span className="text-[#00ff41] font-bold">Deployed via:</span> {project.deployed}
                    </p>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#00ff41]/80 transition text-xs"
                  >
                    <FaGithub size={14} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Networking Section */}
      <section className="border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-6">Security & Networking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4 space-y-3">
              <h3 className="text-[#00ff41] font-bold text-sm">Application Security</h3>
              <ul className="space-y-2 text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>JWT Authentication:</strong> Stateless token-based auth for API requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Password Hashing:</strong> bcrypt with unique salts for user credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Input Validation:</strong> NoSQL Injection & XSS prevention middleware</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>HTTP-Only Cookies:</strong> Secure token storage with SameSite protection</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0d1117] border border-[#1b2230] rounded p-4 space-y-3">
              <h3 className="text-[#00ff41] font-bold text-sm">Network & API Security</h3>
              <ul className="space-y-2 text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>TLS 1.2+:</strong> HTTPS for all data in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Rate Limiting:</strong> DDoS & brute-force attack mitigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>Security Headers:</strong> CSP, X-Frame-Options via Helmet.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] flex-shrink-0 mt-0.5">•</span>
                  <span><strong>RBAC:</strong> Fine-grained access control by user roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0d1117] border-t border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-lg md:text-xl font-bold text-[#c9d1d9] mb-3">Let's Connect</h2>
          <p className="text-xs text-[#8b949e] mb-4 max-w-lg mx-auto">
            Interested in chatting about development, architecture, or collaboration? I'm actively looking for full-time DevOps / SRE / Cloud roles.
          </p>
          <a
            href="mailto:kethanayatti333@gmail.com"
            className="inline-block px-4 py-2 border border-[#00ff41] text-[#00ff41] rounded text-xs font-mono hover:bg-[#00ff41] hover:text-[#0f1419] transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
