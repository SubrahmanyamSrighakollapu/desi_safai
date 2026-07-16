"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const perks = ["Free consultation", "Same-day available", "100% satisfaction guarantee"];

export default function CTASection({
  title = "Ready for a Spotlessly Clean Space?",
  subtitle = "Book your cleaning service today and experience the Desi Safai difference. First-time customers get 15% off!",
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-green-500/10 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            15% Off for First-Time Customers
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            {title}
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

          {/* Perks */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle size={15} className="text-green-500" />
                {p}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Get Free Quote <ArrowRight size={18} />
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-colors text-base"
            >
              <Phone size={18} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
