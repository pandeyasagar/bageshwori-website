import { useState } from "react";
import { Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

// ─── Contact Info Data ────────────────────────────────────
const CONTACT_INFO = [
  { icon: Mail, title: "Email Us", content: "bageshworigroups@gmail.com", link: "mailto:bageshworigroups@gmail.com", color: "blue" },
  { icon: Clock, title: "Business Hours", content: "Sunday - Friday", subtext: "09:30 AM - 06:30 PM", color: "orange" },
];

const COLORS = {
  blue: "bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
};

const SUBJECTS = ["General Inquiry", "Sales & Products", "Service & Support", "Feedback"];

// ─── Reusable Input Component ─────────────────────────────
const Input = ({ label, type = "text", id, placeholder, ...props }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all dark:text-white placeholder:text-gray-400"
      {...props}
    />
  </div>
);

// ─── Contact Component ────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ── Contact Form ─────────────────────────────── */}
          <div className="w-full lg:w-3/5">
            {/* Section Header */}
            <div className="mb-10">
              <span className="text-brand-600 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-5 tracking-tight">
                We'd Love to Hear from You
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Have a question about our products or services? Fill out the form and our team will get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input label="Full Name" id="name" placeholder="John Doe" required />
                <Input label="Email Address" type="email" id="email" placeholder="john@example.com" required />
              </div>

              {/* Subject Select */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all dark:text-white"
                >
                  {SUBJECTS.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full md:w-auto font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 ${
                  submitted
                    ? "bg-green-500 text-white shadow-green-500/25"
                    : "bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white shadow-brand-500/25 hover:shadow-brand-600/30 hover:-translate-y-0.5"
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Right Side Info ───────────────────────────── */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6 lg:pt-16">
            {/* Call Now Card */}
            <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 rounded-2xl p-7 text-white shadow-2xl shadow-brand-600/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-brand-100 mb-6 text-sm leading-relaxed">
                  Our support team is available during business hours to assist you.
                </p>

                <a
                  href="tel:+97791521000"
                  className="flex items-center justify-between bg-white text-brand-700 p-4 rounded-xl font-bold hover:bg-brand-50 transition-all group/call"
                >
                  <span className="text-lg">+977-91-521000</span>
                  <div className="w-9 h-9 bg-brand-100 rounded-full flex items-center justify-center group-hover/call:bg-brand-200 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>

                <p className="text-center text-xs text-brand-200 mt-3 font-medium tracking-wide uppercase">
                  Available Sun-Fri, 9AM-6PM
                </p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-6">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${COLORS[item.color]}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm"
                      >
                        {item.linkText || item.content}
                      </a>
                    ) : (
                      <>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.content}</p>
                        {item.subtext && (
                          <p className="text-gray-900 dark:text-white font-medium text-sm">{item.subtext}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
