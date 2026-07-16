import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact Us" };

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE_CONFIG.phone,
    sub: "Mon–Sat, 8AM–8PM",
    href: `tel:${SITE_CONFIG.phone}`,
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with Us",
    sub: "Quick responses",
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE_CONFIG.email,
    sub: "We reply within 2 hours",
    href: `mailto:${SITE_CONFIG.email}`,
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Hyderabad, Telangana",
    sub: SITE_CONFIG.address,
    href: "#map",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Let's Get Your Space Sparkling Clean"
        highlight="Sparkling Clean"
        subtitle="Book a service, get a free quote, or just ask us anything. We're here to help!"
      />

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${card.color}`}>
                  <card.icon size={22} />
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">{card.label}</p>
                <p className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{card.value}</p>
                <p className="text-xs text-slate-500 mt-1">{card.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Quote</h2>
            <p className="text-slate-600 mb-6">Fill in the details below and we'll get back to you within 30 minutes.</p>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monday – Saturday</span>
                  <span className="font-semibold text-slate-900">8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 5:00 PM</span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-xs">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Currently Open
                  </span>
                </div>
              </div>
            </div>

            {/* Why Contact */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Why Choose Desi Safai?</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Free consultation & quote",
                  "Same-day service available",
                  "100% satisfaction guarantee",
                  "Eco-friendly products",
                  "Fully insured & vetted staff",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-blue-100">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <MapPin size={20} className="text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-900">Our Address</h3>
              </div>
              <p className="text-sm text-slate-600">{SITE_CONFIG.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section id="map" className="h-80 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
          <div className="text-center">
            <div className="text-5xl mb-3">🗺️</div>
            <p className="font-semibold text-slate-700">Google Maps</p>
            <p className="text-sm text-slate-500">Hyderabad, Telangana</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
