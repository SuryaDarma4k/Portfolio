import { useState, useEffect } from "react";

export const Navbar = () => {
    // 1. State untuk background transparan/kaca
    const [active, setActive] = useState(false);
    // 2. State untuk buka-tutup menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // 3. State untuk melacak posisi scroll (Warna Ungu)
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            // Logika background kaca
            if (window.scrollY > 50) { 
                setActive(true);
            } else {
                setActive(false);
            }

            // Logika pendeteksi posisi elemen (Scroll Spy)
            const sections = ["home", "about", "projects", "certificate", "contact"];
            let current = "home"; 
            
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    // Offset 150px agar warna berubah sebelum elemen menyentuh atap
                    if (window.scrollY >= element.offsetTop - 150) {
                        current = section;
                    }
                }
            });
            
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Fungsi pembantu untuk memberikan warna dinamis (Ungu Pendar vs Abu-abu)
    const getLinkClass = (sectionName) => {
        return `font-medium transition-all duration-300 relative ${
            activeSection === sectionName 
            ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
            : "text-gray-300 hover:text-white"
        }`;
    };

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${active 
                ? "py-4 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                : "py-7 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative">
                
                {/* LOGO */}
                <div className="logo">
                    <a href="#home" className="text-3xl font-bold text-white tracking-wide">
                        Portfolio
                    </a>
                </div>
                
                {/* 1. DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-10">
                    <li><a href="#home" className={`text-lg ${getLinkClass("home")}`}>Home</a></li>
                    <li><a href="#about" className={`text-lg ${getLinkClass("about")}`}>About</a></li>
                    <li><a href="#projects" className={`text-lg ${getLinkClass("projects")}`}>Projects</a></li>
                    <li><a href="#certificate" className={`text-lg ${getLinkClass("certificate")}`}>Certificates</a></li>
                    <li><a href="#contact" className={`text-lg ${getLinkClass("contact")}`}>Contact</a></li>
                </ul>

                {/* 2. HAMBURGER BUTTON (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                
            </div>

            {/* 3. MOBILE DROPDOWN */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1A1A]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col px-6 py-6 gap-5">
                        <li>
                            <a href="#home" onClick={() => setIsMenuOpen(false)} className={`block text-base py-1 ${getLinkClass("home")}`}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setIsMenuOpen(false)} className={`block text-base py-1 ${getLinkClass("about")}`}>About</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setIsMenuOpen(false)} className={`block text-base py-1 ${getLinkClass("projects")}`}>Projects</a>
                        </li>
                        <li>
                            <a href="#certificate" onClick={() => setIsMenuOpen(false)} className={`block text-base py-1 ${getLinkClass("certificate")}`}>Certificates</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setIsMenuOpen(false)} className={`block text-base py-1 ${getLinkClass("contact")}`}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};