import { useState, useEffect } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    mobileLabel: "Home",
    href: "#home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    mobileLabel: "About",
    href: "#about",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    mobileLabel: "Skills",
    href: "#skills",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    mobileLabel: "Projects",
    href: "#projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
      </svg>
    ),
  },
  {
    id: "certificate",
    label: "Certificates",
    mobileLabel: "Certs",
    href: "#certificate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    mobileLabel: "Contact",
    href: "#contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z" />
      </svg>
    ),
  },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "certificate", "contact"];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <div className="hidden md:flex justify-center w-full fixed top-5 left-0 right-0 z-[100] px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-fit max-w-full mx-auto flex items-center justify-between gap-4 lg:gap-7 rounded-full py-2 px-4 sm:px-6 border transition-all duration-300 backdrop-blur-xl ${
            isScrolled
              ? "bg-[#111215]/90 border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
              : "bg-[#131418]/85 border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-sm font-semibold tracking-tight text-white flex items-center gap-2 group shrink-0 pr-3 border-r border-white/10"
          >
            <span className="font-mono tracking-wider">Portfolio</span>
          </a>

          {/* Links list: flex-nowrap to guarantee NO wrapping */}
          <ul className="flex items-center flex-nowrap gap-1 lg:gap-1.5 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold"
                        : "text-zinc-400 hover:text-sky-300 hover:bg-sky-500/10"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#111215]/95 backdrop-blur-xl border-t border-white/10 py-2 px-2 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
        <ul className="grid grid-cols-6 items-center w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="w-full flex justify-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex flex-col items-center justify-center py-1 px-1 w-full rounded-lg transition-colors ${
                    isActive
                      ? "text-sky-400 font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <div
                    className={`transition-transform duration-200 ${
                      isActive ? "scale-110 text-sky-400" : "opacity-80"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] tracking-tight mt-1 truncate max-w-full">
                    {item.mobileLabel}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;