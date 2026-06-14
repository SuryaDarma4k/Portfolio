import { useState, useEffect } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);
    // State baru untuk melacak bagian mana yang sedang dilihat
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() =>{
        const handleScroll = () => {
            // 1. Logika untuk background kaca Navbar
            if(window.scrollY > 50) { 
                setActive(true);
            } else {
                setActive(false);
            }

            // 2. Logika "Scroll Spy" untuk mendeteksi posisi elemen
            const sections = ["home", "about", "projects", "certificate", "contact"];
            let current = "home"; // Default awal
            
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    // Angka 150 adalah "offset" agar state berubah sesaat sebelum elemen menyentuh atap layar
                    if (window.scrollY >= element.offsetTop - 150) {
                        current = section;
                    }
                }
            });
            
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    // Fungsi pembantu untuk memberikan warna dinamis pada teks menu
    const getLinkClass = (sectionName) => {
        return `sm:text-lg text-base font-medium transition-all duration-300 relative ${
            activeSection === sectionName 
            // Gaya saat AKTIF: Warna ungu terang & efek pendar
            ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
            // Gaya saat PASIF: Abu-abu redup
            : "text-gray-400 hover:text-white"
        }`;
    };

    return (
        <div 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${active 
                ? "py-4 bg-[#121212]/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                : "py-7 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                <div className="logo">
                    <h1 className="text-3xl font-bold text-white tracking-wide">
                        Portfolio
                    </h1>
                </div>
                
                <ul className="menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 transition-all z-40">
                    <li>
                        <a href="#home" className={getLinkClass("home")}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={getLinkClass("about")}>About</a>
                    </li>
                    <li>
                        <a href="#projects" className={getLinkClass("projects")}>Projects</a>
                    </li>
                    <li>
                        <a href="#certificate" className={getLinkClass("certificate")}>Certificates</a>
                    </li>
                    <li>
                        <a href="#contact" className={getLinkClass("contact")}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}