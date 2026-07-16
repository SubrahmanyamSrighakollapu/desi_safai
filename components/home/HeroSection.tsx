"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Phone, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const trustBadges = [
  "5,000+ Happy Customers",
  "Eco-Friendly Products",
  "Fully Insured & Vetted",
  "100% Satisfaction Guarantee",
];

const floatingStats = [
  { value: "5,000+", label: "Happy Customers", color: "text-blue-600" },
  { value: "98%", label: "Satisfaction Rate", color: "text-green-600" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 hero-gradient">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1d4ed8 1px, transparent 1px), linear-gradient(90deg, #1d4ed8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-blue-400/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-green-400/10 blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Rated #1 Cleaning Service in Hyderabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
          >
            Your Home,{" "}
            <span className="gradient-text">Spotlessly</span>
            <br />Clean.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed mb-9 max-w-md"
          >
            Professional cleaning for homes, offices & commercial spaces.
            Trusted by <span className="text-slate-700 font-semibold">5,000+ happy customers</span> across Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Button href="/contact" size="lg" className="shadow-lg shadow-blue-200">
              Get Free Quote <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["PS", "RM", "AR", "VN"].map((init, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-xs font-bold shadow-sm"
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                <span className="text-sm font-semibold text-slate-800 ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500">From 2,400+ verified reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Right — professional visual panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex flex-col gap-4"
        >
          {/* Main panel */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 shadow-2xl overflow-hidden">
            {/* Subtle grid inside panel */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Desi Safai</p>
                  <p className="text-blue-300 text-xs">Premium Cleaning</p>
                </div>
                <span className="ml-auto px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/20">
                  ● Live
                </span>
              </div>

              {/* Service cards inside panel */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Home Cleaning", price: "₹999", icon: "🏠" },
                  { label: "Deep Cleaning", price: "₹2,499", icon: "✨" },
                  { label: "Office Clean", price: "₹1,999", icon: "🏢" },
                  { label: "Carpet Clean", price: "₹799", icon: "🪣" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors">
                    <div className="text-xl mb-1.5">{s.icon}</div>
                    <p className="text-white text-xs font-medium">{s.label}</p>
                    <p className="text-blue-300 text-xs mt-0.5">{s.price}</p>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex items-center gap-3 bg-blue-600/20 border border-blue-500/20 rounded-xl p-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-blue-200 text-xs">Call to book now</p>
                  <p className="text-white text-sm font-bold truncate">{SITE_CONFIG.phone}</p>
                </div>
                <ArrowRight size={16} className="text-blue-400 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Bottom stat pills */}
          <div className="grid grid-cols-2 gap-4">
            {floatingStats.map((s, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <CheckCircle size={20} className={s.color} />
                </div>
                <div>
                  <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
