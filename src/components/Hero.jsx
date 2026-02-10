import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
    { value: "10+", label: "Years of Service" },
    { value: "6", label: "Branches" },
    { value: "1k+", label: "Customers" },
    { value: "2", label: "Cities" }
];

function Hero() {
    const glowRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${e.pageX - 100}px, ${e.pageY - 100}px)`;
                glowRef.current.style.opacity = "1";
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-7xl w-full py-12 md:py-0 flex-1">
                
                {/* Text Content */}
                <div className={`flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold w-fit mx-auto md:mx-0 border border-blue-100 dark:border-blue-800/50">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        Trusted Since 2014
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                        Supporting the <br className="hidden sm:block" />
                        Growth of <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Sudurpashchim</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Leading the way in automotive and electronics excellence across Western Nepal. We connect communities with quality products and trusted service.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                        <a 
                            href="#business"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-7 py-3.5 rounded-full shadow-xl shadow-blue-500/25 hover:shadow-blue-600/35 font-semibold text-base hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Our Businesses
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a 
                            href="#locations"
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-7 py-3.5 rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold text-base hover:-translate-y-1 transition-all duration-300"
                        >
                            View Locations
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className={`w-full md:w-1/2 flex items-center justify-center relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                    {/* Decorative blobs */}
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    
                    <img 
                        src="/hero_img.png" 
                        alt="Bageswori Group" 
                        className="relative w-full max-w-md lg:max-w-lg h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10 hover:scale-[1.02] transition-transform duration-500" 
                    />
                </div>
            </div>

            {/* Stats Marquee */}
            <div className="w-full py-10 z-20">
                <div className="max-w-7xl mx-auto px-4 relative">
                    
                    <div className="relative overflow-hidden bg-white/60 dark:bg-gray-900/20 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/80 rounded-2xl py-3 shadow-sm">
                        <div className="flex animate-scroll hover:[animation-play-state:paused] cursor-default w-max">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex items-center gap-16 px-8">
                                    {STATS.map((stat, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">{stat.value}</span>
                                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <a href="#business" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors animate-bounce">
                <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
                <ChevronDown className="w-5 h-5" />
            </a> */}

            {/* Background Glow Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    ref={glowRef}
                    className="absolute w-52 h-52 bg-blue-400/20 dark:bg-blue-500/15 rounded-full blur-[100px] transition-opacity duration-200 will-change-transform opacity-0"
                />
            </div>
            
            {/* Bottom Gradient */}
            {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" /> */}
        </section>
    )
}

export default Hero
