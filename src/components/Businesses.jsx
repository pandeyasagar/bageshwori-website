import { MapPin, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BRANCHES from "../data/branches";

// ─── Color Variants ───────────────────────────────────────
const COLORS = {
  blue: {
    icon: "text-brand-600 dark:text-brand-400",
    bg: "bg-brand-50 dark:bg-brand-900/20",
    border: "border-brand-100 dark:border-brand-800/50",
    hover: "group-hover:ring-brand-500/20",
  },
  green: {
    icon: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-100 dark:border-green-800/50",
    hover: "group-hover:ring-green-500/20",
  },
  orange: {
    icon: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-800/50",
    hover: "group-hover:ring-orange-500/20",
  },
};

function Businesses() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  // ─── Intersection Observer for scroll animations ──────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="business" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ───────────────────────────── */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-brand-600 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-6 tracking-tight">
            Our Businesses
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A diverse portfolio of companies dedicated to serving Sudurpashchim with integrity and quality.
          </p>
        </div>

        {/* ── Cards Grid ───────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {BRANCHES.map((biz, i) => {
            const c = COLORS[biz.color];
            const isCardVisible = visibleCards.includes(i);
            const Icon = biz.icon;

            return (
              <div
                key={biz.slug}
                ref={(el) => (cardsRef.current[i] = el)}
                data-index={i}
                className={`group relative bg-white dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-gray-100 dark:border-gray-800 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/5 dark:hover:shadow-black/20 hover:-translate-y-1 hover:ring-1 ${c.hover} dark:ring-offset-gray-900 ${isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${c.bg} ${c.icon} flex items-center justify-center mb-3 sm:mb-5 border ${c.border} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>

                {/* Location Badge */}
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wider">
                  <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  {biz.location}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-tight leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {biz.name}
                </h3>

                {/* Description - responsive variants */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 flex-grow text-xs sm:text-sm leading-relaxed hidden sm:block">
                  {biz.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-xs leading-relaxed sm:hidden line-clamp-2">
                  {biz.description}
                </p>

                {/* Action Button — now a Link */}
                <Link
                  to={`/branch/${biz.slug}`}
                  className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl border-2 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/50 dark:hover:bg-brand-900/10 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm group/btn"
                >
                  <span className="hidden sm:inline">View Branch</span>
                  <span className="sm:hidden">View</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Businesses;
