import { useState, useEffect } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 50);

            const sections = [
                "home",
                "about",
                "projects",
                "certificate",
                "contact",
            ];

            let current = "home";

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (element) {
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

    const getLinkClass = (sectionName) => {
        return `font-medium transition-all duration-300 ${
            activeSection === sectionName
                ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                : "text-gray-300 hover:text-white"
        }`;
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${
                active
                    ? "py-3 md:py-4 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    : "py-4 md:py-5 lg:py-6 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <div className="logo">
                    <a
                        href="#home"
                        className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-white"
                    >
                        Portfolio
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-10">
                    <li>
                        <a
                            href="#home"
                            className={`text-base lg:text-lg ${getLinkClass("home")}`}
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className={`text-base lg:text-lg ${getLinkClass("about")}`}
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className={`text-base lg:text-lg ${getLinkClass("projects")}`}
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#certificate"
                            className={`text-base lg:text-lg ${getLinkClass("certificate")}`}
                        >
                            Certificates
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className={`text-base lg:text-lg ${getLinkClass("contact")}`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
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
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-[#1A1A1A]/95 backdrop-blur-lg border-t border-white/10">
                    <ul className="flex flex-col px-5 py-5 gap-4">

                        <li>
                            <a
                                href="#home"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base ${getLinkClass("home")}`}
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base ${getLinkClass("about")}`}
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base ${getLinkClass("projects")}`}
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#certificate"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base ${getLinkClass("certificate")}`}
                            >
                                Certificates
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base ${getLinkClass("contact")}`}
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};