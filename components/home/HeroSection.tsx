"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const trustBadges = [
  "5,000+ Happy Customers",
  "Eco-Friendly Products",
  "Fully Insured & Vetted",
  "100% Satisfaction Guarantee",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-green-100/50 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
          >
            <Star size={14} className="fill-blue-600" />
            Rated #1 Cleaning Service in Hyderabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
          >
            Your Home,{" "}
            <span className="gradient-text">Spotlessly</span>{" "}
            Clean.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg"
          >
            Professional cleaning services for homes, offices & commercial spaces. Trusted by 5,000+ happy customers across Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button href="/contact" size="lg">
              Get Free Quote <ArrowRight size={20} />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-2"
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 aspect-[4/5] shadow-2xl shadow-blue-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-4">🏠</div>
                <p className="text-2xl font-bold">Premium Cleaning</p>
                <p className="text-blue-200 mt-2">For Every Space</p>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full bg-white/10" />
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 glass rounded-2xl p-4 shadow-xl"
          >
            <div className="text-2xl font-bold text-blue-600">5,000+</div>
            <div className="text-xs text-slate-600">Happy Customers</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 bottom-1/4 glass rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
            </div>
            <div className="text-sm font-semibold text-slate-800">98% Satisfaction</div>
          </motion.div>

          {/* Call badge */}
          <motion.a
            href={`tel:${SITE_CONFIG.phone}`}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 hover:shadow-2xl transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Call Us Now</div>
              <div className="text-sm font-bold text-slate-800">{SITE_CONFIG.phone}</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
