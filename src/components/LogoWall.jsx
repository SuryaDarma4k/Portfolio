const techItems = [
  { name: "Laravel", icon: "/assets/tools/laravel.png", color: "group-hover:text-red-400" },
  { name: "React", icon: "/svg/react.svg", color: "group-hover:text-sky-400" },
  { name: "Python", icon: "/assets/tools/python.png", color: "group-hover:text-yellow-400" },
  { name: "TailwindCSS", icon: "/svg/tailwindcss.svg", color: "group-hover:text-cyan-400" },
  { name: "JavaScript", icon: "/svg/javaScript.svg", color: "group-hover:text-amber-300" },
  { name: "PHP", icon: "/assets/tools/php.png", color: "group-hover:text-indigo-400" },
  { name: "MySQL", icon: "/svg/mysql.svg", color: "group-hover:text-sky-400" },
  { name: "PyTorch", icon: "/assets/tools/pytorch.png", color: "group-hover:text-orange-400" },
  { name: "Git", icon: "/svg/git.svg", color: "group-hover:text-orange-500" },
  { name: "GitHub", icon: "/assets/tools/github.png", color: "group-hover:text-white" },
  { name: "Filament", icon: "/assets/tools/filament.png", color: "group-hover:text-amber-400" },
  { name: "HTML5", icon: "/svg/HTML5.svg", color: "group-hover:text-orange-400" },
  { name: "CSS3", icon: "/svg/CSS3.svg", color: "group-hover:text-blue-400" },
  { name: "Vercel", icon: "/svg/vercel.svg", color: "group-hover:text-white" },
  { name: "Scikit-Learn", icon: "/assets/tools/scikitlearn.png", color: "group-hover:text-blue-400" },
  { name: "Pandas", icon: "/assets/tools/pandas.png", color: "group-hover:text-indigo-300" },
];

export const LogoWall = () => {
  return (
    <div className="relative overflow-x-hidden py-9 my-4 border-y border-white/5">
      {/* Side Vignette Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0c0d0e] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0c0d0e] to-transparent z-20" />

      {/* Infinite Scrolling Track */}
      <div className="flex animate-scroll w-max will-change-transform">
        {[...techItems, ...techItems].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 pr-10 sm:pr-16 group transition-all duration-300 select-none cursor-pointer"
            aria-hidden={index >= techItems.length ? "true" : "false"}
          >
            <div className="relative">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-7 w-7 object-contain transition-all duration-300 group-hover:scale-125 opacity-75 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                width="28"
                height="28"
                loading="lazy"
              />
            </div>
            <span className={`text-sm sm:text-base font-medium text-zinc-400 transition-colors duration-200 whitespace-nowrap ${tech.color}`}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWall;
