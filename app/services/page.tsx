import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sparkles, Truck, Layers, Wind, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";
import { SERVICES, FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Our Services" };

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Sparkles, Truck, Layers, Wind,
};

const colorMap: Record<string, string> = {
  blue: "from-blue-500 to-blue-700",
  green: "from-green-500 to-green-700",
  purple: "from-purple-500 to-purple-700",
  orange: "from-orange-500 to-orange-700",
  teal: "from-teal-500 to-teal-700",
  sky: "from-sky-500 to-sky-700",
};

const bgMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
  teal: "bg-teal-50 text-teal-600",
  sky: "bg-sky-50 text-sky-600",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="All Services"
        title="Professional Cleaning for Every Space"
        highlight="Every Space"
        subtitle="From cozy homes to large commercial spaces, we have the expertise and equipment to make any space shine."
      >
        <Button href="/contact" size="lg">Get Free Quote <ArrowRight size={20} /></Button>
      </PageHero>

      {/* Service Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <div
                  key={service.slug}
                  className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${colorMap[service.color]} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
                    <div className="relative flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Icon size={26} className="text-white" />
                      </div>
                      {service.popular && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
                          ⭐ Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-4">{service.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{service.shortDesc}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-lg font-bold text-slate-900">{service.price}</span>
                      </div>
                      <span className="text-sm text-slate-500">{service.duration}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className={cn(
                        "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all",
                        bgMap[service.color],
                        "hover:opacity-80"
                      )}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="Benefits" title="Why Choose Professional Cleaning?" highlight="Professional" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🏥", title: "Healthier Environment", desc: "Remove allergens, bacteria, and pollutants for a healthier living space." },
              { emoji: "⏰", title: "Save Valuable Time", desc: "Spend your time on what matters most while we handle the cleaning." },
              { emoji: "✨", title: "Professional Results", desc: "Expert techniques and professional equipment deliver superior results." },
              { emoji: "💰", title: "Cost Effective", desc: "Prevent damage and extend the life of your furniture and fixtures." },
            ].map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{b.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="FAQ" title="Service Questions Answered" highlight="Answered" />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
