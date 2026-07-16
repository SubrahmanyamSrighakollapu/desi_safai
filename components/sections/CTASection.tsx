"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Ready for a Spotlessly Clean Space?",
  subtitle = "Book your cleaning service today and experience the Desi Safai difference. First-time customers get 15% off!",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`py-20 relative overflow-hidden ${dark ? "bg-gradient-to-br from-blue-700 to-blue-900" : "bg-gradient-to-br from-blue-600 to-green-600"}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white mb-5">
            🎉 15% Off for First-Time Customers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">{title}</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Get Free Quote <ArrowRight size={20} />
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
