import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, ChevronRight } from "lucide-react";

const LOCATIONS = [
    { id: "dhangadhi", name: "Dhangadhi Main Hub", address: "Traffic Chowk, Main Road, Dhangadhi", description: "Headquarters featuring Bhageswari Electronics, Automotives, and Ebikes showroom.", phone: "+977-91-521000", hours: "Sun - Fri: 9:30 AM - 6:30 PM", mapUrl: "https://maps.google.com/maps?q=Dhangadhi&t=&z=14&ie=UTF8&iwloc=&output=embed" },
    { id: "attariya", name: "Attariya Branch", address: "Mahakali Highway, Attariya Chowk", description: "Specialized showroom for Multimotors and certified service center.", phone: "+977-91-550200", hours: "Sun - Fri: 10:00 AM - 6:00 PM", mapUrl: "https://maps.google.com/maps?q=Attariya&t=&z=14&ie=UTF8&iwloc=&output=embed" }
];

const InfoItem = ({ icon: Icon, children }) => (
    <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
        <Icon className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
        <span>{children}</span>
    </div>
);

function Locations() {
    const [active, setActive] = useState(LOCATIONS[0]);

    return (
        <section id="locations" className="py-24 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mb-14">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Visit Us</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-5 tracking-tight">Find Us</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Visit our showrooms and service centers across Sudurpashchim.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 h-auto lg:h-[550px]">
                    {/* Location Cards */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {LOCATIONS.map((loc) => (
                            <button
                                key={loc.id}
                                onClick={() => setActive(loc)}
                                className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                                    active.id === loc.id
                                        ? "bg-white dark:bg-gray-900 border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]"
                                        : "bg-gray-50 dark:bg-gray-900/50 border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md"
                                }`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`text-lg font-bold transition-colors ${active.id === loc.id ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>
                                        {loc.name}
                                    </h3>
                                    {active.id === loc.id && (
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                                        </span>
                                    )}
                                </div>
                                
                                <div className="space-y-2">
                                    <InfoItem icon={MapPin}>{loc.address}</InfoItem>
                                    <InfoItem icon={Phone}>{loc.phone}</InfoItem>
                                    <InfoItem icon={Clock}>{loc.hours}</InfoItem>
                                </div>
                            </button>
                        ))}

                        {/* Quick Contact */}
                        {/* <div className="mt-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl overflow-hidden relative group">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            
                            <div className="relative z-10">
                                <h4 className="text-lg font-bold mb-1.5">Need Assistance?</h4>
                                <p className="text-blue-100 text-sm mb-4">Our support team is ready to help.</p>
                                <a 
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
                                >
                                    <Navigation className="w-4 h-4" />
                                    Get Directions
                                    <ChevronRight className="w-4 h-4 -ml-0.5" />
                                </a>
                            </div>
                        </div> */}
                    </div>

                    {/* Map */}
                    <div className="w-full lg:w-2/3 h-[400px] lg:h-full bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative">
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                        
                        <iframe
                            key={active.id}
                            title="Location Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={active.mapUrl}
                            className="absolute inset-0 w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Info Badge */}
                        <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
                            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Currently Viewing</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{active.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Locations
