import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { VALUES, WHY_CHOOSE_US, TEAM } from "@/lib/constants";
import { Heart, Shield, Leaf, Award, Star, Clock, CreditCard, Headphones } from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const iconMap: Record<string, React.ElementType> = {
  Heart, Shield, Leaf, Award, Star, Clock, CreditCard, Headphones,
};

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  amber: "bg-amber-100 text-amber-600",
  teal: "bg-teal-100 text-teal-600",
  rose: "bg-rose-100 text-rose-600",
};
const colors = ["blue", "green", "purple", "amber", "teal", "rose"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Desi Safai"
        title="Cleaning with Care, Serving with Heart"
        highlight="Heart"
        subtitle="We're more than a cleaning company — we're your trusted partner in maintaining a healthy, happy living and working environment."
      >
        <Button href="/contact" size="lg">Get Free Quote</Button>
      </PageHero>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Born from a Simple Belief: <span className="gradient-text">Everyone Deserves a Clean Home</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Desi Safai was founded in 2016 with a simple mission — to provide affordable, professional cleaning services that every Indian household could trust. What started as a small team of 5 dedicated cleaners has grown into a 50+ strong family serving thousands of homes and offices across Hyderabad.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our name says it all. "Desi" because we understand the Indian home — the kitchen masalas, the festival preparations, the joint family dynamics. "Safai" because cleanliness is at the heart of everything we do. We combine traditional values with modern cleaning techniques to deliver results that speak for themselves.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2016", label: "Founded" },
                { value: "50+", label: "Expert Cleaners" },
                { value: "5,000+", label: "Happy Customers" },
                { value: "8+", label: "Years of Excellence" },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-green-100 aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🧹</div>
                <p className="text-2xl font-bold text-slate-800">8+ Years of</p>
                <p className="text-xl text-blue-600 font-semibold">Trusted Cleaning</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs text-slate-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To deliver exceptional cleaning services that transform spaces and improve quality of life, using eco-friendly methods and building lasting relationships based on trust, reliability, and genuine care.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white border-0">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-green-100 leading-relaxed">
                To become India's most trusted cleaning service brand — known for our commitment to quality, sustainability, and the happiness of every customer we serve, one spotless space at a time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="Our Values" title="What We Stand For" highlight="Stand For" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = iconMap[v.icon] || Heart;
              return (
                <Card key={i} delay={i * 0.1} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600">{v.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="Why Choose Us" title="The Desi Safai Advantage" highlight="Advantage" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading badge="Our Team" title="Meet the People Behind the Shine" highlight="Shine" subtitle="Our dedicated team works tirelessly to ensure every space we touch is left spotless." />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Card key={i} delay={i * 0.1} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
