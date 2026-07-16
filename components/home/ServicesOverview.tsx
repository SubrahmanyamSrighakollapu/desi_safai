"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sparkles, Truck, Layers, Wind, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Sparkles, Truck, Layers, Wind,
};

const colorMap: Record<string, { icon: string; badge: string; border: string; glow: string }> = {
  blue:   { icon: "bg-blue-600",   badge: "bg-blue-50 text-blue-700 border-blue-100",   border: "hover:border-blue-200",   glow: "hover:shadow-blue-100" },
  green:  { icon: "bg-green-600",  badge: "bg-green-50 text-green-700 border-green-100", border: "hover:border-green-200",  glow: "hover:shadow-green-100" },
  purple: { icon: "bg-purple-600", badge: "bg-purple-50 text-purple-700 border-purple-100", border: "hover:border-purple-200", glow: "hover:shadow-purple-100" },
  orange: { icon: "bg-orange-500", badge: "bg-orange-50 text-orange-700 border-orange-100", border: "hover:border-orange-200", glow: "hover:shadow-orange-100" },
  teal:   { icon: "bg-teal-600",   badge: "bg-teal-50 text-teal-700 border-teal-100",   border: "hover:border-teal-200",   glow: "hover:shadow-teal-100" },
  sky:    { icon: "bg-sky-600",    badge: "bg-sky-50 text-sky-700 border-sky-100",      border: "hover:border-sky-200",    glow: "hover:shadow-sky-100" },
};

export default function ServicesOverview() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Our Services"
          title="Everything Your Space Needs"
          highlight="Everything"
          subtitle="From regular home cleaning to specialised deep cleans — a service tailored for every need and budget."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            const c = colorMap[service.color];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex flex-col bg-white rounded-2xl p-6 border border-slate-100 shadow-sm",
                    "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full",
                    c.border, c.glow
                  )}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shadow-sm", c.icon)}>
                      <Icon size={20} className="text-white" />
                    </div>
                    {service.popular && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100">
                        ⭐ Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{service.shortDesc}</p>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-900">{service.price}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={11} /> {service.duration}
                      </span>
                    </div>
                    <span className={cn("w-7 h-7 rounded-lg flex items-center justify-center transition-all", c.badge, "border")}>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
