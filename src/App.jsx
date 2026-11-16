import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Menu,
  X,
  FileText,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
import profilePhoto from "./assets/WhatsApp Image 2026-11-13 at 7.09.35 PM.jpeg";
import resume from "./assets/Huzaifa_Ejaz_CV_Updated.pdf";

const githubUrl = "https://github.com/Zaifi-786";
const linkedinUrl = "https://www.linkedin.com/in/huzaifa-ejaz-a1a6a7226/";
const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Github({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.69-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.44 3.73 1.73.1-.73.39-1.23.7-1.52-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.63 5.28-5.14 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

function Linkedin({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.08H5.66V18h2.68v-7.92ZM7 6a1.56 1.56 0 1 0 0 3.12A1.56 1.56 0 0 0 7 6Zm11.34 7.46c0-2.39-1.28-3.5-2.98-3.5a2.58 2.58 0 0 0-2.33 1.28v-1.1h-2.68V18h2.68v-4.28c0-1.13.21-2.22 1.61-2.22 1.38 0 1.4 1.29 1.4 2.29V18h2.68v-4.54Z" />
    </svg>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      glow: "from-cyan-500/20 to-blue-500/5",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Component-Based UI",
      ],
    },
    {
      title: "Authentication & APIs",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      glow: "from-indigo-500/20 to-purple-500/5",
      skills: [
        "REST API Integration",
        "Token-Based (JWT) Auth",
        "Protected Routes",
        "Session Handling",
      ],
    },
    {
      title: "UI/UX & Workflow Tools",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      glow: "from-emerald-500/20 to-teal-500/5",
      skills: [
        "Mobile-First Layouts",
        "Clean User Interfaces",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Programming Foundations",
      icon: <Terminal className="w-5 h-5 text-fuchsia-400" />,
      glow: "from-fuchsia-500/20 to-pink-500/5",
      skills: ["C / C++", "Object-Oriented Programming (OOP)", "Python (Basics)"],
    },
  ];

  const experiences = [
    {
      role: "Frontend Intern",
      company: "Cube Healthcare Limited",
      period: "Present",
      badge: "Current Role",
      points: [
        "Building and improving responsive web pages using HTML, CSS, and React.js for desktop and mobile devices.",
        "Developing reusable React components while applying clean, consistent UI/UX best practices.",
        "Connecting frontend interfaces to REST APIs and implementing authentication workflows including sign-in, JWT token handling, and protected routes.",
      ],
    },
    {
      role: "Customer Sales Representative (CSR)",
      company: "J Telemarketing",
      period: "Dec 2023 – Dec 2025",
      badge: "2 Years",
      points: [
        "Managed high-volume customer interactions and sales calls, consistently meeting performance and sales targets.",
        "Developed strong communication, persuasion, and real-time problem-solving skills in a fast-paced environment.",
        "Demonstrated strong discipline, time-management, and teamwork by balancing full-time work alongside university studies.",
      ],
    },
  ];

  const projects = [
    {
      title: "Online Examination System with Anti-Cheating Detection",
      tag: "Featured Full-Stack Project",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
      github: "https://github.com/Zaifi-786/Online-Examination-with-Anti-cheating-System",
      highlights: [
        "Developed a full-stack web-based online examination platform enabling secure test creation and delivery.",
        "Implemented an automated anti-cheating detection module to monitor and flag suspicious candidate activity during live exams.",
        "Built scalable RESTful APIs with Express and Node.js paired with a dynamic, responsive React.js frontend.",
      ],
    },
    {
      title: "React & Modern Web Learning Projects",
      tag: "Frontend Collection",
      stack: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
      github: "https://github.com/Zaifi-786",
      highlights: [
        "Collection of interactive practice applications built while mastering React component architecture and state management.",
        "Focused on responsive layouts, smooth user interactions, and clean frontend code structure.",
        "Open-source repositories available publicly on GitHub.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient Glossy Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Glossy Glass Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#about"
            className="text-lg font-bold tracking-tight flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-extrabold shadow-lg shadow-cyan-500/25">
              H
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Huzaifa Ejaz
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all flex items-center gap-2 shadow-inner"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/25 text-cyan-200 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-white/10 bg-[#070d1f]/95 backdrop-blur-2xl px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`block py-2 text-sm font-medium ${
                  activeSection === link.id
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-sm font-medium text-cyan-300"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section
          id="about"
          className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open to MERN Stack & React.js Frontend Roles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Huzaifa Ejaz
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
              Web Developer &amp; React.js Frontend Engineer
            </h2>

            <p className="text-slate-400 leading-relaxed text-base sm:text-lg max-w-2xl">
              Motivated Computer Science graduate skilled in building responsive,
              user-focused web applications with modern JavaScript technologies.
              Currently building production frontend interfaces and JWT-secured API
              integrations as a Frontend Intern at{" "}
              <span className="text-slate-200 font-medium">
                Cube Healthcare Limited
              </span>
              .
            </p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Islamabad, Pakistan
              </span>
              <a
                href="mailto:ehuzaifa16@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                ehuzaifa16@gmail.com
              </a>
              <a
                href="tel:+923245338276"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                +92 324 5338276
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
              >
                Explore Projects
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/25 text-cyan-100 flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md text-slate-100 flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (Zaifi-786)</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: EMPTY PROFILE PHOTO SLOT (Glossy Glass Frame) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Neon Gloss Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-60 blur-md group-hover:opacity-90 transition duration-500" />

              {/* Main Glass Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-slate-900/80 border border-white/20 backdrop-blur-2xl p-4 flex flex-col items-center justify-between shadow-2xl overflow-hidden">
                {/* Top Gloss Sheen */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

                <div className="relative w-full h-full rounded-2xl border border-white/15 overflow-hidden bg-white/[0.03]">
                  <img
                    src={profilePhoto}
                    alt="Huzaifa Ejaz"
                    className="w-full h-full object-cover object-top"
                    fetchPriority="high"
                  />
                </div>

                {/* Bottom Glass Caption Bar */}
                <div className="w-full pt-3 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Huzaifa Ejaz</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="py-16 border-t border-white/10">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Technical Skills
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Core frontend stack, authentication workflows, and development tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className={`relative rounded-2xl bg-gradient-to-br ${cat.glow} border border-white/15 backdrop-blur-xl p-6 shadow-xl hover:border-white/30 transition-all`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white/[0.06] border border-white/10 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-16 border-t border-white/10">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Experience
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Industry frontend internship and professional customer communication background.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="relative rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl p-6 sm:p-8 shadow-xl hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <p className="text-cyan-300 font-medium text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
                      {exp.badge}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 border-t border-white/10">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Full-stack MERN and React.js applications built with clean architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-cyan-400/40 transition-all group"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                      {project.tag}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <span>View Code</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <ul className="space-y-2 mt-4 text-sm text-slate-300">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/70 border border-white/10 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <section id="education" className="py-16 border-t border-white/10">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Education &amp; Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="relative rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl p-6 shadow-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400/30">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    BS Computer Science
                  </h3>
                  <p className="text-xs text-cyan-300 font-medium">
                    Session 2022 – 2026
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                University of Azad Jammu and Kashmir
              </p>
            </div>

            {/* Certification Card */}
            <div className="relative rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl p-6 shadow-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-400/30">
                  <Award className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    MERN Stack Development
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium">
                    Completed: July 23, 2026
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Zynex Solutions
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FOOTER */}
        <footer id="contact" className="py-16 border-t border-white/10">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 border border-white/15 backdrop-blur-2xl p-8 sm:p-10 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Let's Build Something Great Together
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Looking for a dedicated React.js Frontend or MERN Stack Developer?
              Feel free to reach out directly via email, phone, or GitHub.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="mailto:ehuzaifa16@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>ehuzaifa16@gmail.com</span>
              </a>
              <a
                href="tel:+923245338276"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+92 324 5338276</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Zaifi-786</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/25 text-cyan-200 flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-4">
              © {new Date().getFullYear()} Huzaifa Ejaz • Islamabad, Pakistan
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}