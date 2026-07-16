"use client";
import { motion } from "framer-motion";
import { Shield, Leaf, Clock, Star, CreditCard, Headphones } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Shield, Leaf, Clock, Star, CreditCard, Headphones,
};

const accents = [
  { bg: "bg-blue-600",   light: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-100" },
  { bg: "bg-green-600",  light: "bg-green-50",  text: "text-green-600",  border: "border-green-100" },
  { bg: "bg-violet-600", light: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
  { bg: "bg-amber-500",  light: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-100" },
  { bg: "bg-teal-600",   light: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-100" },
  { bg: "bg-rose-600",   light: "bg-rose-50",   text: "text-rose-600",   border: "border-rose-100" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Desi Safai"
          title="The Desi Safai Difference"
          highlight="Difference"
          subtitle="We don't just clean — we care. Here's what sets us apart from every other cleaning service."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            const a = accents[i % accents.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Hover colour wash */}
                <div className={`absolute inset-0 ${a.light} opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${a.light} ${a.text} flex items-center justify-center mb-4 border ${a.border}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${a.bg} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
