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

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = (sectionName) => {
        return `transition-all duration-300 font-medium ${
            activeSection === sectionName
                ? "text-purple-400"
                : "text-gray-300 hover:text-white"
        }`;
    };

    return (
        <>
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
                <div
                    className={`rounded-2xl transition-all duration-300 ${
                        active
                            ? "bg-[#121212]/90 backdrop-blur-xl border border-white/10 shadow-xl"
                            : "bg-[#121212]/60 backdrop-blur-xl border border-white/5"
                    }`}
                >
                    <div className="flex items-center justify-between px-5 md:px-8 py-3">

                        {/* Logo */}
                        <a
                            href="#home"
                            className="text-xl md:text-2xl font-bold text-white"
                        >
                            Portfolio
                        </a>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center gap-8 lg:gap-10">

                            <li>
                                <a
                                    href="#home"
                                    className={`text-base ${getLinkClass("home")}`}
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className={`text-base ${getLinkClass("about")}`}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className={`text-base ${getLinkClass("projects")}`}
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#certificate"
                                    className={`text-base ${getLinkClass(
                                        "certificate"
                                    )}`}
                                >
                                    Certificates
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className={`text-base ${getLinkClass("contact")}`}
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10"
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
                            isMenuOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <ul className="px-5 pb-5 flex flex-col gap-4">

                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={getLinkClass("home")}
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={getLinkClass("about")}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={getLinkClass("projects")}
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#certificate"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={getLinkClass("certificate")}
                                >
                                    Certificates
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={getLinkClass("contact")}
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};