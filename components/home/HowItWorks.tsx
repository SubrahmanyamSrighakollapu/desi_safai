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
    <section className="py-24 section-gradient-alt relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[80px] opacity-60" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-green-50 blur-[80px] opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Simple Process"
          title="How It Works"
          highlight="Works"
          subtitle="Getting a spotless space has never been easier. Four simple steps to a cleaner life."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-px">
            <div className="w-full h-full border-t-2 border-dashed border-slate-200" />
          </div>

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = iconMap[step.icon] || CalendarCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-blue-200">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
