import { useState } from "react";

const CategoryConfig = {
  "Web & System Engineering": {
    accentColor: "text-sky-400",
    hoverBorder: "hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)]",
    bulletColor: "text-sky-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sky-400 shrink-0"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M6 8h.01" />
        <path d="M10 8h.01" />
        <path d="M14 8h.01" />
      </svg>
    ),
  },
  "AI, Machine Learning & NLP": {
    accentColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
    bulletColor: "text-emerald-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-400 shrink-0"
      >
        <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a4 4 0 0 0 8 0v-1h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9 15c.5.5 1.5 1 3 1s2.5-.5 3-1" />
      </svg>
    ),
  },
  "Cloud, Architecture & Tools": {
    accentColor: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]",
    bulletColor: "text-indigo-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-indigo-400 shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
};

export const SkillsList = () => {
  const [openItem, setOpenItem] = useState("Web & System Engineering");

  const skills = {
    "Web & System Engineering": [
      "Fullstack Web Applications (Laravel 11 & 12, Livewire, Filament)",
      "Interactive Frontend Systems (React JS, Tailwind CSS, Vite)",
      "Database Architecture & API Integration (MySQL, Midtrans Gateway)",
    ],
    "AI, Machine Learning & NLP": [
      "Natural Language Processing architectures and tokenization",
      "Model training & data analysis with Python, PyTorch & Pandas",
      "Generative AI, Prompt Engineering & Spec-Driven Development",
    ],
    "Cloud, Architecture & Tools": [
      "Cloud Infrastructure fundamentals (AWS Cloud Practitioner & Gen AI)",
      "Version Control, CI/CD and Git/GitHub collaborative workflows",
      "Software Design Principles, MVC Pattern & Clean Code Standards",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left w-full">
      <h2 className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
        Core Capabilities
      </h2>
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
        What I do
      </h3>
      <ul className="space-y-3.5 text-base">
        {Object.entries(skills).map(([category, items]) => {
          const config = CategoryConfig[category];
          const isOpen = openItem === category;
          return (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className={`w-full bg-[#131417] rounded-2xl text-left transition-all duration-300 border border-white/10 hover:-translate-y-0.5 cursor-pointer overflow-hidden shadow-sm ${config.hoverBorder}`}
              >
                <div className="flex items-center gap-3.5 p-4 sm:p-5">
                  <div className="p-2 rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                    {config.icon}
                  </div>
                  <div className="flex items-center gap-2 flex-grow justify-between">
                    <span className={`text-sm sm:text-base font-medium transition-colors ${isOpen ? "text-white font-semibold" : "text-zinc-200"}`}>
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-4 h-4 text-zinc-400 transform transition-transform duration-300 shrink-0 ${
                        isOpen ? `rotate-180 ${config.accentColor}` : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                    </svg>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                    isOpen ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm border-t border-white/5 pt-3">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className={`${config.bulletColor} text-xs mt-1 shrink-0`}>◆</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
