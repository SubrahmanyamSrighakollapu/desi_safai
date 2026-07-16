"use client";
import { motion } from "framer-motion";
import { Shield, Leaf, Award, Clock, Users, ThumbsUp } from "lucide-react";

const badges = [
  { icon: Shield, label: "Fully Insured" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Award, label: "Award Winning" },
  { icon: Clock, label: "On-Time Always" },
  { icon: Users, label: "Vetted Staff" },
  { icon: ThumbsUp, label: "5-Star Rated" },
];

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 text-slate-700"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <Icon size={18} className="text-blue-600" />
              </div>
              <span className="font-semibold text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
