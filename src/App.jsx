import { useState } from "react";
import DataImage, { listTools, listProyek, listSertif } from "./data";
import cv from "./assets/CV_HarelSuryaDarma.pdf";
import LogoWall from "./components/LogoWall";
import SkillsList from "./components/SkillsList";
import LetterGlitch from "./components/LetterGlitch";

function App() {
  const [selectedSertif, setSelectedSertif] = useState(null);
  const [selectedProyek, setSelectedProyek] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeToolTab, setActiveToolTab] = useState("all");

  const displayedSertif = showAll ? listSertif : listSertif.slice(0, 8);

  const filteredTools =
    activeToolTab === "all"
      ? listTools
      : listTools.filter((t) => t.kategori === activeToolTab);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/suryadarma4k@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert("There was a problem sending your message. Please reach out via WhatsApp or email directly.");
      }
    } catch {
      alert("Message could not be sent. Please contact via WhatsApp or email directly.");
    }
  };

  // Dynamic color theme configurations for hover interactions
  const getToolTheme = (kategori) => {
    if (kategori === "web") {
      return {
        card: "hover:border-sky-500/50 hover:bg-[#0c1622] hover:shadow-[0_12px_28px_rgba(14,165,233,0.22)] hover:-translate-y-2",
        text: "group-hover:text-sky-300",
        icon: "group-hover:scale-120 group-hover:rotate-3",
        glow: "group-hover:bg-sky-500/10",
      };
    }
    if (kategori === "data") {
      return {
        card: "hover:border-emerald-500/50 hover:bg-[#0c1d15] hover:shadow-[0_12px_28px_rgba(16,185,129,0.22)] hover:-translate-y-2",
        text: "group-hover:text-emerald-300",
        icon: "group-hover:scale-120 group-hover:-rotate-3",
        glow: "group-hover:bg-emerald-500/10",
      };
    }
    return {
      card: "hover:border-amber-500/50 hover:bg-[#1a1408] hover:shadow-[0_12px_28px_rgba(245,158,11,0.22)] hover:-translate-y-2",
      text: "group-hover:text-amber-300",
      icon: "group-hover:scale-120 group-hover:rotate-6",
      glow: "group-hover:bg-amber-500/10",
    };
  };

  const getProjectTheme = (id) => {
    if (id === 1) {
      return {
        border: "hover:border-sky-500/60 hover:shadow-[0_16px_40px_rgba(14,165,233,0.25)] hover:-translate-y-2",
        badge: "text-sky-300 bg-sky-950/60 border-sky-800/80",
        titleHover: "group-hover:text-sky-300",
        btn: "bg-sky-500/15 hover:bg-sky-500 text-sky-200 hover:text-white border border-sky-500/40 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]",
      };
    }
    if (id === 2) {
      return {
        border: "hover:border-emerald-500/60 hover:shadow-[0_16px_40px_rgba(16,185,129,0.25)] hover:-translate-y-2",
        badge: "text-emerald-300 bg-emerald-950/60 border-emerald-800/80",
        titleHover: "group-hover:text-emerald-300",
        btn: "bg-emerald-500/15 hover:bg-emerald-500 text-emerald-200 hover:text-white border border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]",
      };
    }
    return {
      border: "hover:border-indigo-500/60 hover:shadow-[0_16px_40px_rgba(99,102,241,0.25)] hover:-translate-y-2",
      badge: "text-indigo-300 bg-indigo-950/60 border-indigo-800/80",
      titleHover: "group-hover:text-indigo-300",
      btn: "bg-indigo-500/15 hover:bg-indigo-500 text-indigo-200 hover:text-white border border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]",
    };
  };

  const getCertTheme = (penerbit) => {
    const pub = penerbit.toLowerCase();
    if (pub.includes("dicoding")) {
      return {
        border: "hover:border-emerald-500/50 hover:bg-[#0c1a14] hover:shadow-[0_12px_32px_rgba(16,185,129,0.2)] hover:-translate-y-2",
        badge: "text-emerald-400 group-hover:text-emerald-300",
        titleHover: "group-hover:text-emerald-100",
        overlayBtn: "bg-emerald-500/20 text-white border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
      };
    }
    if (pub.includes("ibm")) {
      return {
        border: "hover:border-cyan-500/50 hover:bg-[#0a1822] hover:shadow-[0_12px_32px_rgba(6,182,212,0.2)] hover:-translate-y-2",
        badge: "text-cyan-400 group-hover:text-cyan-300",
        titleHover: "group-hover:text-cyan-100",
        overlayBtn: "bg-cyan-500/20 text-white border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
      };
    }
    if (pub.includes("aws")) {
      return {
        border: "hover:border-amber-500/50 hover:bg-[#1a1408] hover:shadow-[0_12px_32px_rgba(245,158,11,0.2)] hover:-translate-y-2",
        badge: "text-amber-400 group-hover:text-amber-300",
        titleHover: "group-hover:text-amber-100",
        overlayBtn: "bg-amber-500/20 text-white border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
      };
    }
    return {
      border: "hover:border-sky-500/50 hover:bg-[#0a1422] hover:shadow-[0_12px_32px_rgba(14,165,233,0.2)] hover:-translate-y-2",
      badge: "text-sky-400 group-hover:text-sky-300",
      titleHover: "group-hover:text-sky-100",
      overlayBtn: "bg-sky-500/20 text-white border-sky-400/40 shadow-[0_0_15px_rgba(14,165,233,0.3)]",
    };
  };

  return (
    <main className="w-full bg-[#0c0d0e] text-[#e4e4e7] min-h-screen">
      {/* ========================================================
          1. HERO SECTION (With Tasteful Color Harmonies & Micro-Animations)
      ======================================================== */}
      <section
        id="home"
        className="w-full pt-32 md:pt-40 pb-16 max-w-6xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs text-sky-400 font-mono">
              <span>Fullstack Developer &bull; AI Enthusiast</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
              Hi, I'm Harel Surya Darma. <br />
              <span className="text-sky-400 font-semibold">
                Web &amp; AI Engineer
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Informatics Engineering student passionate about crafting
              production-grade web platforms with{" "}
              <span className="text-sky-300 font-medium hover:underline cursor-pointer">
                Laravel &amp; React
              </span>,
              and developing practical{" "}
              <span className="text-emerald-300 font-medium hover:underline cursor-pointer">
                Machine Learning &amp; NLP
              </span>{" "}
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full text-slate-950 bg-sky-500 hover:bg-sky-400 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:shadow-[0_6px_25px_rgba(56,189,248,0.45)] hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href={cv}
                download="CV_HarelSuryaDarma.pdf"
                className="px-6 py-3 rounded-full text-zinc-300 bg-white/5 hover:bg-sky-500/10 border border-white/15 hover:border-sky-500/50 hover:text-sky-300 font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(56,189,248,0.15)]"
              >
                Download CV
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            {/* Social Icons with Interactive Hover Colors */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/SuryaDarma4k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-400 hover:text-white transition-all duration-300 border border-white/10 p-2.5 rounded-xl bg-white/5 hover:bg-zinc-800 hover:border-zinc-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/harelsuryadarma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 hover:text-sky-400 transition-all duration-300 border border-white/10 p-2.5 rounded-xl bg-white/5 hover:bg-sky-950/40 hover:border-sky-500/70 hover:shadow-[0_0_18px_rgba(14,165,233,0.3)] hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z" />
                </svg>
              </a>

              <a
                href="mailto:suryadarma4k@gmail.com"
                aria-label="Email"
                className="text-zinc-400 hover:text-amber-400 transition-all duration-300 border border-white/10 p-2.5 rounded-xl bg-white/5 hover:bg-amber-950/40 hover:border-amber-500/70 hover:shadow-[0_0_18px_rgba(245,158,11,0.3)] hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64" />
                </svg>
              </a>

              <a
                href="https://wa.me/6285765932825"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 border border-white/10 p-2.5 rounded-xl bg-white/5 hover:bg-emerald-950/40 hover:border-emerald-500/70 hover:shadow-[0_0_18px_rgba(16,185,129,0.3)] hover:-translate-y-1"
              >
                <i className="ri-whatsapp-fill ri-base"></i>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card with Multi-tone Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle ambient aura */}
              <div className="absolute -inset-1 bg-sky-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#141518] p-2.5 shadow-xl max-w-[310px] sm:max-w-[340px] group-hover:border-sky-500/40 group-hover:shadow-[0_15px_45px_rgba(14,165,233,0.2)] transition-all duration-300">
                <img
                  src={DataImage.Profil}
                  alt="Harel Surya Darma"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-medium text-emerald-400">
                    Available for Work
                  </span>
                  <span className="font-mono text-zinc-400">Pekanbaru, ID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LOGO WALL (Infinite Horizontal Marquee)
      ======================================================== */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <LogoWall />
      </section>

      {/* ========================================================
          3. ABOUT & "WHAT I DO" SECTION
      ======================================================== */}
      <section
        id="about"
        className="w-full py-16 max-w-6xl mx-auto px-6 lg:px-8 border-t border-white/5"
      >
        <div className="space-y-12">
          {/* Bio statement card with hover illumination */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#131417] border border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-md">
            <h2 className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
              About me
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light mb-8">
              I am an Informatics Engineering student at{" "}
              <span className="font-medium text-white">Politeknik Caltex Riau</span>,
              dedicated to developing efficient, reliable, and intelligent software
              solutions. My focus centers around two primary pillars: crafting
              production-grade web platforms with{" "}
              <span className="text-sky-300 font-medium">Laravel &amp; React</span>,
              and implementing practical{" "}
              <span className="text-emerald-300 font-medium">
                Natural Language Processing (NLP)
              </span>{" "}
              models using Python.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="group">
                <span className="text-2xl sm:text-3xl font-semibold text-sky-400 group-hover:scale-105 inline-block transition-transform">11+</span>
                <p className="text-xs text-zinc-400 mt-1">
                  Certificates &amp; Credentials
                </p>
              </div>
              <div className="group">
                <span className="text-2xl sm:text-3xl font-semibold text-emerald-400 group-hover:scale-105 inline-block transition-transform">3</span>
                <p className="text-xs text-zinc-400 mt-1">
                  Core Disciplines (Web, AI, Cloud)
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1 group">
                <span className="text-2xl sm:text-3xl font-semibold text-indigo-400 group-hover:scale-105 inline-block transition-transform">
                  Production
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  Quality &amp; Standards
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Split: SkillsList Accordion + LetterGlitch (Cyber matrix) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7">
              <SkillsList />
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[360px] h-[340px] shadow-xl rounded-2xl overflow-hidden hover:shadow-[0_10px_35px_rgba(56,189,248,0.2)] transition-shadow duration-300">
                <LetterGlitch
                  glitchColors={["#0f172a", "#0284c7", "#059669", "#38bdf8", "#34d399", "#818cf8", "#94a3b8"]}
                  glitchSpeed={40}
                  outerVignette={true}
                  smooth={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TECH STACK & TOOLS (Color-Coded Hover Animations)
      ======================================================== */}
      <section
        id="skills"
        className="w-full py-16 max-w-6xl mx-auto px-6 lg:px-8 border-t border-white/5"
      >
        <div className="mb-10 text-left">
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
            Stack &amp; Tools
          </h2>
          <h3 className="text-2xl sm:text-4xl font-semibold text-white mb-3">
            Technologies
          </h3>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            The core programming languages, frameworks, libraries, and tools I use to
            architect scalable applications and engineer machine learning workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {[
              { id: "all", label: "All Technologies", activeBg: "bg-sky-500 text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.35)]" },
              { id: "web", label: "Web & Backend", activeBg: "bg-sky-400 text-slate-950 shadow-[0_0_18px_rgba(14,165,233,0.35)]" },
              { id: "data", label: "Data Science & AI", activeBg: "bg-emerald-400 text-slate-950 shadow-[0_0_18px_rgba(16,185,129,0.35)]" },
              { id: "tools", label: "Developer Tools", activeBg: "bg-amber-400 text-slate-950 shadow-[0_0_18px_rgba(245,158,11,0.35)]" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveToolTab(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeToolTab === tab.id
                    ? `${tab.activeBg} text-white font-semibold`
                    : "bg-[#131417] text-zinc-400 border border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid with Micro-Animations & Glow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredTools.map((tool) => {
            const theme = getToolTheme(tool.kategori);
            return (
              <div
                key={tool.id}
                className={`bg-[#131417] border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 group cursor-default shadow-sm ${theme.card}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-white/5 mb-3 transition-all duration-300 ${theme.icon} ${theme.glow}`}>
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className={`font-medium text-xs sm:text-sm text-zinc-200 transition-colors duration-200 ${theme.text}`}>
                  {tool.nama}
                </h4>
                <span className="text-[10px] text-zinc-400 mt-0.5">
                  {tool.ket}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          5. PROJECTS SECTION (Color Identity & Dynamic Hover)
      ======================================================== */}
      <section
        id="projects"
        className="w-full py-16 max-w-6xl mx-auto px-6 lg:px-8 border-t border-white/5"
      >
        <div className="mb-10 text-left">
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
            Selected Works
          </h2>
          <h3 className="text-2xl sm:text-4xl font-semibold text-white mb-3">
            Featured Projects
          </h3>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Selected applications and system architectures built with real-world business logic,
            clean data flow, and modern interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {listProyek.map((proyek) => {
            const theme = getProjectTheme(proyek.id);
            return (
              <div
                key={proyek.id}
                className={`group flex flex-col bg-[#131417] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-md ${theme.border}`}
              >
                {/* Project Image Container */}
                <div
                  onClick={() =>
                    proyek.id === 3
                      ? window.open(proyek.live_link, "_blank")
                      : setSelectedProyek(proyek)
                  }
                  className="relative overflow-hidden aspect-[16/10] bg-[#0c0c0c] cursor-pointer"
                >
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      proyek.id === 2 ? "object-contain py-2 bg-[#121212]" : "object-cover"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#141414]/90 text-white border border-white/20 flex items-center gap-1.5 shadow-lg">
                      {proyek.id === 3 ? "Open Live Site" : "View Gallery"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className={`text-base font-semibold text-white transition-colors duration-200 ${theme.titleHover}`}>
                      {proyek.nama}
                    </h4>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 border ${theme.badge}`}>
                      {proyek.id === 1
                        ? "System"
                        : proyek.id === 2
                        ? "Mobile-First"
                        : "Portfolio"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 flex-grow">
                    {proyek.desk}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-[10px] font-medium text-zinc-300 bg-white/5 border border-white/5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons with Dynamic Color Themes */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-white/5 mt-auto">
                    {proyek.id === 3 ? (
                      <a
                        href={proyek.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition-all duration-300 ${theme.btn}`}
                      >
                        <span>Live Site</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                        </svg>
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProyek(proyek)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer ${theme.btn}`}
                      >
                        <span>Showcase Gallery</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-3.5 h-3.5"
                        >
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                    )}

                    <a
                      href={proyek.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Repository on GitHub"
                      className="p-2.5 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-zinc-800 border border-white/10 hover:border-zinc-300 transition-all hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub link with hover color */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SuryaDarma4k?tab=repositories"
          aria-label="More projects on GitHub"
          className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 mt-12 text-zinc-400 hover:text-sky-300 transition duration-300 border border-white/10 hover:border-sky-500/50 p-3 rounded-full bg-[#131417] hover:bg-sky-500/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <span className="text-xs font-medium">Explore repositories on GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
          </svg>
        </a>
      </section>

      {/* ========================================================
          6. CERTIFICATES & CREDENTIALS SECTION (Publisher Themes)
      ======================================================== */}
      <section
        id="certificate"
        className="w-full py-16 max-w-6xl mx-auto px-6 lg:px-8 border-t border-white/5"
      >
        <div className="mb-10 text-left">
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
            Credentials
          </h2>
          <h3 className="text-2xl sm:text-4xl font-semibold text-white mb-3">
            Licenses &amp; Certifications
          </h3>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Validated technical coursework and professional certifications across Web Engineering,
            Machine Learning, Artificial Intelligence, and Cloud Architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedSertif.map((sertif) => {
            const theme = getCertTheme(sertif.penerbit);
            return (
              <div
                key={sertif.id}
                onClick={() => setSelectedSertif(sertif)}
                className={`group flex flex-col bg-[#131417] border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm ${theme.border}`}
              >
                {/* Image Preview with Hover Overlay */}
                <div className="relative h-44 overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src={sertif.gambar}
                    alt={`${sertif.nama} Certificate`}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105 ${theme.overlayBtn}`}>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Credential
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <p className={`text-[10px] font-semibold tracking-wider uppercase mb-1 transition-colors ${theme.badge}`}>
                    {sertif.penerbit}
                  </p>
                  <h4 className={`text-white font-medium text-xs sm:text-sm leading-snug mb-3 transition-colors ${theme.titleHover}`}>
                    {sertif.nama}
                  </h4>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {sertif.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-[10px] font-medium text-zinc-400 bg-white/5 border border-white/5 rounded group-hover:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Pill */}
        {listSertif.length > 8 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full text-xs font-medium text-zinc-300 bg-[#131417] hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/50 hover:text-sky-300 transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <span>{showAll ? "Show Less" : "View All Certifications"}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* ========================================================
          7. CONTACT SECTION (Interactive Glow Cards)
      ======================================================== */}
      <section
        id="contact"
        className="w-full py-16 max-w-6xl mx-auto px-6 lg:px-8 border-t border-white/5"
      >
        <div className="mb-10 text-left">
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
            Let's talk
          </h2>
          <h3 className="text-2xl sm:text-4xl font-semibold text-white mb-3">
            Contact
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Direct Info Cards with Color Hover Glow */}
          <div className="space-y-4">
            <p className="text-sm text-zinc-400 leading-relaxed">
              Have an internship opportunity, a web project, or an innovative AI collaboration in
              mind? Feel free to reach out via direct message or send a note through the contact form.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="mailto:suryadarma4k@gmail.com"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl border border-white/10 bg-[#131417] hover:border-amber-500/60 hover:bg-[#1c1810] hover:shadow-[0_8px_25px_rgba(245,158,11,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-zinc-400 group-hover:text-amber-400 font-medium transition-colors">Email</h4>
                  <p className="text-xs sm:text-sm text-white font-medium break-all">
                    suryadarma4k@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/6285765932825"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl border border-white/10 bg-[#131417] hover:border-emerald-500/60 hover:bg-[#101c15] hover:shadow-[0_8px_25px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <i className="ri-whatsapp-fill ri-lg"></i>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-zinc-400 group-hover:text-emerald-400 font-medium transition-colors">WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    +62 857-6593-2825
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/harelsuryadarma/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl border border-white/10 bg-[#131417] hover:border-sky-500/60 hover:bg-[#101824] hover:shadow-[0_8px_25px_rgba(14,165,233,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                  <i className="ri-linkedin-fill ri-lg"></i>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-zinc-400 group-hover:text-sky-400 font-medium transition-colors">LinkedIn</h4>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    Harel Surya Darma
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-2 pt-1 px-1 text-xs text-zinc-400">
                <span>Based in Pekanbaru, Riau, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Focused Glow */}
          <div className="bg-[#131417] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg">
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 bg-[#0a0a0c] text-white border border-white/10 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#0a0a0c] text-white border border-white/10 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 bg-[#0a0a0c] text-white border border-white/10 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 text-xs sm:text-sm transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-sky-500 hover:bg-sky-400 transition-all duration-300 shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:shadow-[0_6px_25px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 cursor-pointer"
              >
                Send Message
              </button>

              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center text-xs text-emerald-300">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. SMART MODAL: PROJECT GALLERY (Showcase Pop-up)
      ======================================================== */}
      {selectedProyek && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-200"
          onClick={() => setSelectedProyek(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#131417] border border-white/15 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0e0f12]">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {selectedProyek.nama}
                </h3>
                <p className="text-[11px] text-sky-400 font-mono mt-0.5">
                  Screenshots &amp; UI Architecture Showcase
                </p>
              </div>
              <button
                onClick={() => setSelectedProyek(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Gallery */}
            <div className="w-full overflow-y-auto bg-black/40 flex-grow flex flex-col items-center p-4 sm:p-8 gap-6 custom-scrollbar">
              {selectedProyek.gallery && selectedProyek.gallery.length > 0 ? (
                selectedProyek.gallery.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${selectedProyek.nama} screenshot ${index + 1}`}
                    className={`object-contain rounded-xl shadow-xl border border-white/10 ${
                      selectedProyek.id === 2
                        ? "h-[70vh] w-auto mx-auto"
                        : "w-full h-auto max-w-4xl"
                    }`}
                  />
                ))
              ) : (
                <img
                  src={selectedProyek.gambar}
                  alt={selectedProyek.nama}
                  className="w-full h-auto max-w-4xl object-contain rounded-xl shadow-xl border border-white/10"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          9. SMART MODAL: CERTIFICATE VIEWER
      ======================================================== */}
      {selectedSertif && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-200"
          onClick={() => setSelectedSertif(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#131417] border border-white/15 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0e0f12]">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {selectedSertif.nama}
                </h3>
                <p className="text-[11px] text-sky-400 font-mono mt-0.5">
                  Issued by {selectedSertif.penerbit}
                </p>
              </div>
              <button
                onClick={() => setSelectedSertif(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full overflow-y-auto bg-black/40 flex-grow flex flex-col items-center p-4 sm:p-8 gap-5 custom-scrollbar">
              {selectedSertif.halaman && selectedSertif.halaman.length > 0 ? (
                selectedSertif.halaman.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${selectedSertif.nama} page ${index + 1}`}
                    className="w-full h-auto object-contain rounded-xl shadow-xl border border-white/10"
                  />
                ))
              ) : (
                <img
                  src={selectedSertif.gambar}
                  alt={selectedSertif.nama}
                  className="w-full h-auto object-contain rounded-xl shadow-xl border border-white/10"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
