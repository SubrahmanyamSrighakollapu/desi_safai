"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const fullTitle = highlight
    ? title.replace(highlight, `<span class="gradient-text">${highlight}</span>`)
    : title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl", center && "mx-auto text-center", className)}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 mb-4">
          {badge}
        </span>
      )}
      <h2
        className={cn("text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4", light ? "text-white" : "text-slate-900")}
        dangerouslySetInnerHTML={{ __html: fullTitle }}
      />
      {subtitle && (
        <p className={cn("text-lg leading-relaxed", light ? "text-blue-100" : "text-slate-600")}>{subtitle}</p>
      )}
    </motion.div>
  );
}
