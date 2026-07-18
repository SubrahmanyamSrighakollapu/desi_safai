import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact Us" };

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
    icon: WhatsAppIcon,
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
