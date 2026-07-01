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

        handleScroll();

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                active
                    ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
                    : "bg-transparent py-4 md:py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white"
                >
                    Portfolio
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
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

                {/* Mobile Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition"
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

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-[#121212]/95 backdrop-blur-md border-t border-white/10">
                    <ul className="flex flex-col gap-4 px-5 py-5">

                        <li>
                            <a
                                href="#home"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block ${getLinkClass("home")}`}
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block ${getLinkClass("about")}`}
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block ${getLinkClass("projects")}`}
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#certificate"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block ${getLinkClass("certificate")}`}
                            >
                                Certificates
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block ${getLinkClass("contact")}`}
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}