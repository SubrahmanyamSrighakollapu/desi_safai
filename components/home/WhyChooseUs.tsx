"use client";
import { Shield, Leaf, Clock, Star, CreditCard, Headphones } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Shield, Leaf, Clock, Star, CreditCard, Headphones,
};

const colors = ["blue", "green", "purple", "amber", "teal", "rose"];
const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  amber: "bg-amber-100 text-amber-600",
  teal: "bg-teal-100 text-teal-600",
  rose: "bg-rose-100 text-rose-600",
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Desi Safai"
          title="The Desi Safai Difference"
          highlight="Difference"
          subtitle="We don't just clean — we care. Here's what sets us apart from the rest."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            const color = colors[i % colors.length];
            return (
              <Card key={i} delay={i * 0.08}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[color]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
