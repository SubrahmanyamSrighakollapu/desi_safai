"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: "/kitchen-difference.png",     alt: "Kitchen Deep Clean",   label: "Kitchen Deep Clean"  },
  { src: "/living-room-difference.png", alt: "Living Room Refresh",  label: "Living Room Refresh" },
  { src: "/bathroom-difference.png",    alt: "Bathroom Sparkle",     label: "Bathroom Sparkle"    },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 mb-4">
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            See the Desi Safai <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-lg text-slate-600">
            Real results from real customers across Hyderabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white"
            >
              <div className="relative w-full" style={{ aspectRatio: "499/450" }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="px-5 py-4">
                <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">Professional cleaning by Desi Safai</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
