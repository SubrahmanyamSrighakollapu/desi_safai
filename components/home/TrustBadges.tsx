"use client";
import { motion } from "framer-motion";
import { Shield, Leaf, Award, Clock, Users, ThumbsUp } from "lucide-react";

const badges = [
  { icon: Shield, label: "Fully Insured", sub: "All staff covered" },
  { icon: Leaf, label: "Eco-Friendly", sub: "Safe for kids & pets" },
  { icon: Award, label: "Award Winning", sub: "Best in Hyderabad" },
  { icon: Clock, label: "Always On Time", sub: "Punctuality guaranteed" },
  { icon: Users, label: "Vetted Staff", sub: "Background checked" },
  { icon: ThumbsUp, label: "5-Star Rated", sub: "4.9 avg rating" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white flex flex-col items-center justify-center gap-2 py-6 px-4 text-center hover:bg-blue-50/60 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <Icon size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
