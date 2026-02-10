import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#business", label: "Our Businesses" },
    { href: "#locations", label: "Locations" },
    { href: "#contact", label: "Contact" }
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
    const closeMenu = () => setIsOpen(false);
    
    return (
        <>
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled 
                ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-gray-900/5 dark:shadow-black/20" 
                : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
        } border-b border-gray-200/50 dark:border-gray-800/50`}>
            <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2.5 group">
                    {/* <img src="/vite.svg" alt="Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />  */}
                    <span className="text-lg md:text-xl font-bold tracking-tight">
                        <span className="text-gray-900 dark:text-white">Bageswori</span>
                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">groups</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors group">
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>
                
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden relative p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 z-50"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                    {/* CTA Button */}
                    <a 
                        href="#contact"
                        className="hidden md:inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

        </nav>

            {/* Mobile Menu - Outside nav for proper blur stacking */}
            <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
                {/* Overlay with blur */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={closeMenu}
                />
                
                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 w-72 h-full bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Close Button inside panel */}
                    <button 
                        onClick={closeMenu}
                        className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>


                    <div className="pt-16 px-6 pb-8 flex flex-col gap-4">
                        <ul className="space-y-2">
                            {NAV_LINKS.map(({ href, label }, i) => (
                                <li key={href} style={{ animationDelay: `${i * 100}ms` }} className={`${isOpen ? "animate-fade-up" : ""}`}>
                                    <a 
                                        href={href} 
                                        onClick={closeMenu}
                                        className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl font-medium transition-all duration-300"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        <a 
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
