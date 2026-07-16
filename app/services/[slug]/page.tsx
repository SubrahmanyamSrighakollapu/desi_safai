import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Clock, ArrowRight, Home, Building2, Sparkles, Truck, Layers, Wind } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Sparkles, Truck, Layers, Wind,
};

const colorMap: Record<string, { gradient: string; bg: string; text: string; light: string }> = {
  blue: { gradient: "from-blue-500 to-blue-700", bg: "bg-blue-600", text: "text-blue-600", light: "bg-blue-50" },
  green: { gradient: "from-green-500 to-green-700", bg: "bg-green-600", text: "text-green-600", light: "bg-green-50" },
  purple: { gradient: "from-purple-500 to-purple-700", bg: "bg-purple-600", text: "text-purple-600", light: "bg-purple-50" },
  orange: { gradient: "from-orange-500 to-orange-700", bg: "bg-orange-600", text: "text-orange-600", light: "bg-orange-50" },
  teal: { gradient: "from-teal-500 to-teal-700", bg: "bg-teal-600", text: "text-teal-600", light: "bg-teal-50" },
  sky: { gradient: "from-sky-500 to-sky-700", bg: "bg-sky-600", text: "text-sky-600", light: "bg-sky-50" },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Home;
  const colors = colorMap[service.color];
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${colors.gradient} overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Icon size={30} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{service.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-white">
                  <div className="text-2xl font-bold">{service.price}</div>
                  <div className="text-white/70 text-sm">Starting price</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-white">
                  <div className="flex items-center gap-1.5 text-lg font-bold">
                    <Clock size={18} /> {service.duration}
                  </div>
                  <div className="text-white/70 text-sm">Estimated duration</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="white" size="lg">
                  Book Now <ArrowRight size={20} />
                </Button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl bg-white/10 border border-white/20 p-8">
                <h3 className="text-white font-bold text-lg mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90">
                      <CheckCircle size={18} className="text-white flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features mobile */}
      <section className="py-12 bg-white lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">What&apos;s Included</h2>
          <div className="grid grid-cols-2 gap-3">
            {service.features.map((f, i) => (
              <div key={i} className={cn("flex items-center gap-2 p-3 rounded-xl text-sm", colors.light)}>
                <CheckCircle size={16} className={colors.text} />
                <span className="text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="Our Process" title="How We Do It" highlight="How" subtitle="A systematic, proven approach that delivers consistent, exceptional results every time." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4", colors.bg)}>
                  {p.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="Explore More" title="Other Services You Might Like" highlight="Like" />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const OtherIcon = iconMap[s.icon] || Home;
              const otherColors = colorMap[s.color];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", otherColors.light)}>
                    <OtherIcon size={22} className={otherColors.text} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{s.shortDesc}</p>
                  <span className={cn("text-sm font-semibold", otherColors.text)}>{s.price}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
