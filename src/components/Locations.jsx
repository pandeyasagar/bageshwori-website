import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

// ─── Location Data ────────────────────────────────────────
const LOCATIONS = [
  {
    id: "dhangadhi",
    name: "Dhangadhi Main Hub",
    address: "Traffic Chowk, Main Road, Dhangadhi",
    description: "Headquarters featuring Bhageswari Electronics, Automotives, and Ebikes showroom.",
    phone: "+977-91-521000",
    hours: "Sun - Fri: 9:30 AM - 6:30 PM",
    mapUrl: "https://maps.google.com/maps?q=Dhangadhi&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "attariya",
    name: "Attariya Branch",
    address: "Mahakali Highway, Attariya Chowk",
    description: "Specialized showroom for Multimotors and certified service center.",
    phone: "+977-91-550200",
    hours: "Sun - Fri: 10:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com/maps?q=Attariya&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
];

// ─── Reusable Info Row ────────────────────────────────────
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
        {/* ── Section Header ───────────────────────────── */}
        <div className="max-w-2xl mb-14">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-5 tracking-tight">
            Find Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Visit our showrooms and service centers across Sudurpashchim.
          </p>
        </div>

        {/* ── Content: Cards + Map ─────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 h-auto lg:h-[550px]">
          {/* Location Selector Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {LOCATIONS.map((loc) => {
              const isActive = active.id === loc.id;

              return (
                <button
                  key={loc.id}
                  onClick={() => setActive(loc)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-white dark:bg-gray-900 border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]"
                      : "bg-gray-50 dark:bg-gray-900/50 border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>
                      {loc.name}
                    </h3>
                    {isActive && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                      </span>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="space-y-2">
                    <InfoItem icon={MapPin}>{loc.address}</InfoItem>
                    <InfoItem icon={Phone}>{loc.phone}</InfoItem>
                    <InfoItem icon={Clock}>{loc.hours}</InfoItem>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-full bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative">
            {/* Loading Skeleton */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />

            {/* Embedded Map */}
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

            {/* Active Location Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">
                Currently Viewing
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{active.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
