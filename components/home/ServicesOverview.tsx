"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sparkles, Truck, Layers, Wind } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Sparkles, Truck, Layers, Wind,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  green: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
  sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
};

export default function ServicesOverview() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Our Services"
          title="Everything Your Space Needs"
          highlight="Everything"
          subtitle="From regular home cleaning to specialized deep cleans, we have a service tailored for every need and budget."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300", colorMap[service.color])}>
                      <Icon size={22} />
                    </div>
                    {service.popular && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">{service.price}</span>
                    <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
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
