import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// ─── Navigation Links ─────────────────────────────────────
const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#business", label: "Our Businesses" },
  { href: "/#locations", label: "Locations" },
  // { href: "/#contact", label: "Contact" },
];

function Navbar() {
  // ─── State ──────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // ─── Theme Toggle ───────────────────────────────────────
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ─── Scroll: Hide on scroll-down, show on scroll-up ────
  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;

      if (currentY > 100) {
        setIsVisible(currentY < lastScrollY); // show on scroll-up
      } else {
        setIsVisible(true); // always visible at top
      }

      setScrolled(currentY > 20);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // ─── Close mobile menu on desktop resize ────────────────
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ─── Handlers ───────────────────────────────────────────
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const closeMenu = () => setIsOpen(false);

  // ─── Handle navigation with hash scrolling ─────────────
  const handleNavClick = (e, href) => {
    closeMenu();

    // If on home page and href has a hash, smooth-scroll to it
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    // If NOT on home page, navigate to /#section (handled by Link)
  };

  // ─── Dynamic Classes ────────────────────────────────────
  const navClasses = [
    "fixed top-0 w-full z-50 transition-transform duration-300",
    isVisible ? "translate-y-0" : "-translate-y-full",
    scrolled
      ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-gray-900/5 dark:shadow-black/20"
      : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md",
    "border-b border-gray-200/50 dark:border-gray-800/50",
  ].join(" ");

  // ─── Render ─────────────────────────────────────────────
  return (
    <>
      {/* ── Desktop Navbar ─────────────────────────────── */}
      <nav className={navClasses}>
        <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="./Bg_Logo.png" alt="Logo" className="h-8" />
            <span className="text-lg md:text-xl font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white">Bageswori</span>
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">groups</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-brand-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
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

            {/* CTA Button (Desktop only) */}
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="hidden md:inline-flex items-center bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-600/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ────────────────────────── */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
        />

        {/* Slide-in Panel */}
        <div className={`absolute top-0 right-0 w-72 h-full bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Menu Content */}
          <div className="pt-16 px-6 pb-8 flex flex-col gap-4">
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }, i) => (
                <li
                  key={href}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className={isOpen ? "animate-fade-up" : ""}
                >
                  <Link
                    to={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl font-medium transition-all duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="mt-auto bg-gradient-to-r from-brand-600 to-brand-700 text-white text-center py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
