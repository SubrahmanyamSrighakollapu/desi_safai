"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  delay?: number;
}

export default function Card({ children, className, hover = true, glass = false, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl p-6",
        glass ? "glass shadow-xl" : "bg-white shadow-md border border-slate-100",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
