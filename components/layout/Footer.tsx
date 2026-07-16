import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white block leading-none">Desi Safai</span>
                <span className="text-xs text-slate-400 leading-none">Premium Cleaning</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">{SITE_CONFIG.description}</p>
            <div className="flex gap-3">
              {[
                { label: "IG", href: SITE_CONFIG.social.instagram },
                { label: "FB", href: SITE_CONFIG.social.facebook },
                { label: "TW", href: SITE_CONFIG.social.twitter },
                { label: "YT", href: SITE_CONFIG.social.youtube },
              ].map(({ label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-blue-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-start gap-3 text-sm hover:text-blue-400 transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-3 text-sm hover:text-blue-400 transition-colors">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                {SITE_CONFIG.address}
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-slate-800 text-xs space-y-1">
              <p className="text-slate-400 font-medium">Working Hours</p>
              <p>{SITE_CONFIG.workingHours.weekdays}</p>
              <p>{SITE_CONFIG.workingHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Desi Safai. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
