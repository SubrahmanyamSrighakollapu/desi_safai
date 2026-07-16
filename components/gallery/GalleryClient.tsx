"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const gradients = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-purple-400 to-purple-600",
  "from-teal-400 to-teal-600",
  "from-orange-400 to-orange-600",
  "from-sky-400 to-sky-600",
  "from-rose-400 to-rose-600",
  "from-indigo-400 to-indigo-600",
  "from-emerald-400 to-emerald-600",
  "from-amber-400 to-amber-600",
  "from-cyan-400 to-cyan-600",
  "from-violet-400 to-violet-600",
];

const emojis = ["🏠", "🏢", "✨", "🧹", "🪟", "🛋️", "🚿", "🍳", "🪴", "🧽", "💧", "⭐"];

export default function GalleryClient() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);
  const lightboxItem = lightbox !== null ? GALLERY_ITEMS.find((i) => i.id === lightbox) : null;

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
              active === cat.value
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="masonry-item"
            >
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: item.cols === 2 ? "16/9" : "4/3" }}
                onClick={() => setLightbox(item.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[item.id % gradients.length]} flex items-center justify-center`}>
                  <span className="text-5xl">{emojis[item.id % emojis.length]}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-br ${gradients[lightboxItem.id % gradients.length]} aspect-video flex items-center justify-center`}>
                <span className="text-8xl">{emojis[lightboxItem.id % emojis.length]}</span>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-slate-900">{lightboxItem.title}</h3>
                <p className="text-slate-500 text-sm mt-1 capitalize">{lightboxItem.category} Cleaning</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
