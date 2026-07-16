"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Customer Reviews"
          title="Loved by Thousands of Customers"
          highlight="Thousands"
          subtitle="Don't just take our word for it — here's what our customers say after every clean."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-4 flex-shrink-0">
                <Quote size={16} className="text-blue-500" />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-4" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm leading-tight">{t.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={t.rating} size={12} />
                  <p className="text-xs text-slate-400 mt-1">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
