import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const SOCIALS = [
    { icon: Facebook, href: "#", label: "Facebook", hoverBg: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", hoverBg: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
    { icon: Twitter, href: "#", label: "Twitter", hoverBg: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", hoverBg: "hover:bg-blue-700" }
];

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Locations", href: "#locations" },
    { label: "Our Businesses", href: "#business" },
    { label: "Contact Support", href: "#contact" }
];

const BUSINESSES = [
    "Bhageswari Electronics",
    "Bhageswori Automotives",
    "Bhageswori Multimotors",
    "Bhageswori Ebikes",
    "Recondition House"
];

const POLICIES = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand */}
                    <div className="space-y-5">
                        <a href="#home" className="flex items-center gap-2.5 group">
                            {/* <img src="/vite.svg" alt="Logo" className="h-8 w-auto transition-transform group-hover:scale-110 duration-300" /> */}
                            <span className="text-xl font-bold tracking-tight">
                                Bageswori<span className="text-blue-400">groups</span>
                            </span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering Sudurpashchim with quality automotive, electronics, and lifestyle solutions. Your trusted partner in progress.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIALS.map(({ icon: Icon, href, label, hoverBg }) => (
                                <a 
                                    key={label}
                                    href={href} 
                                    aria-label={label}
                                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${hoverBg} transition-all duration-300`}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-bold mb-5 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 group">
                                        {label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Businesses */}
                    <div>
                        <h3 className="text-base font-bold mb-5 text-white">Our Businesses</h3>
                        <ul className="space-y-3">
                            {BUSINESSES.map((name) => (
                                <li key={name}>
                                    <a href="#business" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 group">
                                        {name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-bold mb-5 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                <span>Traffic Chowk, Main Road,<br/>Dhangadhi, Kailali</span>
                            </li>
                            <li>
                                <a href="tel:+97791521000" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                                    +977-91-521000
                                </a>
                            </li>
                            <li>
                                <a href="mailto:bageshworigroups@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                                    bageshworigroups@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Bageswori Groups. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {POLICIES.map((policy) => (
                            <a key={policy} href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                                {policy}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
