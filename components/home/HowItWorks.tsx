"use client";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle, Users, Smile } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck, CheckCircle, Users, Smile,
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Simple Process"
          title="How It Works"
          highlight="Works"
          subtitle="Getting a spotless space has never been easier. Four simple steps to a cleaner life."
          light
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = iconMap[step.icon] || CalendarCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 mb-5 mx-auto">
                  <Icon size={28} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green-400 text-slate-900 text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
