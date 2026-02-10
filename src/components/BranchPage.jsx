import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import BRANCHES from "../data/branches";

// ─── Color Config ─────────────────────────────────────────
const COLOR_MAP = {
  blue: {
    gradient: "from-blue-600 via-blue-700 to-indigo-700",
    light: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800/50",
    badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    ring: "ring-blue-500/20",
    shadow: "shadow-blue-500/20",
    accent: "bg-blue-600",
  },
  green: {
    gradient: "from-green-600 via-emerald-700 to-teal-700",
    light: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800/50",
    badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    ring: "ring-green-500/20",
    shadow: "shadow-green-500/20",
    accent: "bg-green-600",
  },
  orange: {
    gradient: "from-orange-600 via-orange-700 to-amber-700",
    light: "bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800/50",
    badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    ring: "ring-orange-500/20",
    shadow: "shadow-orange-500/20",
    accent: "bg-orange-600",
  },
};

// ─── Scroll animation hook ────────────────────────────────
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// ─── Section wrapper with reveal animation ────────────────
const RevealSection = ({ children, className = "", delay = 0 }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── Branch Page Component ────────────────────────────────
function BranchPage() {
  const { slug } = useParams();
  const branch = BRANCHES.find((b) => b.slug === slug);
  const [selectedImg, setSelectedImg] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // 404 — branch not found
  if (!branch) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4">
        <h1 className="text-6xl font-extrabold text-gray-200 dark:text-gray-800 mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Branch not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  const c = COLOR_MAP[branch.color];
  const Icon = branch.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* ── Hero Section ──────────────────────────────────── */}
      <section
        className={`relative bg-gradient-to-br ${c.gradient} text-white overflow-hidden`}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 ring-1 ring-white/20">
              <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </div>

            <div>
              {/* Location badge */}
              <div className="flex items-center gap-2 text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                {branch.location}
              </div>
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3">
                {branch.name}
              </h1>
              {/* Tagline */}
              <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl">
                {branch.tagline}
              </p>
            </div>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium ring-1 ring-white/10">
              <Clock className="w-4 h-4" />
              {branch.hours}
            </span>
            <a
              href={`tel:${branch.contact.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium ring-1 ring-white/10 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {branch.contact.phone}
            </a>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-12 md:h-16 fill-white dark:fill-gray-950"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── About & Features ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* About text */}
            <RevealSection className="w-full lg:w-1/2">
              <span className={`${c.text} font-semibold tracking-wider uppercase text-sm`}>
                About
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-6 tracking-tight">
                What We Offer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {branch.description}
              </p>
            </RevealSection>

            {/* Features list */}
            <RevealSection className="w-full lg:w-1/2" delay={150}>
              <div className={`${c.light} rounded-2xl p-8 border ${c.border}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Highlights
                </h3>
                <ul className="space-y-4">
                  {branch.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${c.text} shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Image Gallery ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <span className={`${c.text} font-semibold tracking-wider uppercase text-sm`}>
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-10 tracking-tight">
              Take a Look Inside
            </h2>
          </RevealSection>

          {/* Main image */}
          <RevealSection delay={100}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 aspect-[16/9] bg-gray-200 dark:bg-gray-800 group">
              <img
                src={branch.gallery[selectedImg]}
                alt={`${branch.name} gallery ${selectedImg + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </RevealSection>

          {/* Thumbnails */}
          <RevealSection delay={200}>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {branch.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`relative rounded-xl overflow-hidden aspect-[16/9] bg-gray-200 dark:bg-gray-800 transition-all duration-300 
                    ${
                      selectedImg === i
                        ? `ring-3 ${c.ring} ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900 scale-[1.02] shadow-lg`
                        : "opacity-60 hover:opacity-100 hover:shadow-md"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${branch.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Contact & Location ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <span className={`${c.text} font-semibold tracking-wider uppercase text-sm`}>
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-12 tracking-tight">
              Contact & Location
            </h2>
          </RevealSection>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact card */}
            <RevealSection className="w-full lg:w-2/5 flex flex-col gap-6">
              {/* Phone CTA */}
              <div
                className={`bg-gradient-to-br ${c.gradient} rounded-2xl p-7 text-white shadow-2xl ${c.shadow} relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us Today</h3>
                  <p className="text-white/80 mb-6 text-sm leading-relaxed">
                    Speak with our team for bookings, inquiries, or assistance.
                  </p>
                  <a
                    href={`tel:${branch.contact.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center justify-between bg-white text-gray-900 p-4 rounded-xl font-bold hover:bg-gray-50 transition-all group/call"
                  >
                    <span className="text-lg">{branch.contact.phone}</span>
                    <div
                      className={`w-9 h-9 ${c.light} rounded-full flex items-center justify-center group-hover/call:scale-110 transition-transform`}
                    >
                      <Phone className={`w-4 h-4 ${c.text}`} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Info items */}
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 space-y-5">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.badge}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${branch.contact.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      {branch.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.badge}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {branch.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.badge}`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {branch.hours}
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Map */}
            <RevealSection className="w-full lg:w-3/5" delay={150}>
              <div className="h-full min-h-[400px] lg:min-h-[500px] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative">
                {/* Loading skeleton */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />

                <iframe
                  title={`${branch.name} Location`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={branch.mapUrl}
                  className="absolute inset-0 w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />

                {/* Location badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
                  <p className={`text-xs font-bold ${c.text} uppercase tracking-wider mb-0.5`}>
                    {branch.location}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {branch.contact.address}
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Explore Other Branches CTA ───────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Explore Other Branches
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                Discover our full portfolio of businesses across Sudurpashchim.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRANCHES.filter((b) => b.slug !== slug).map((b, i) => {
              const bc = COLOR_MAP[b.color];
              const BIcon = b.icon;
              return (
                <RevealSection key={b.slug} delay={i * 80}>
                  <Link
                    to={`/branch/${b.slug}`}
                    className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${bc.light} ${bc.text} flex items-center justify-center shrink-0 border ${bc.border} group-hover:scale-110 transition-transform`}
                    >
                      <BIcon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {b.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {b.location}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BranchPage;
