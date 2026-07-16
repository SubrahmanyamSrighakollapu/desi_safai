"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          highlight="Questions"
          subtitle="Everything you need to know about our cleaning services."
        />
        <div className="mt-10">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
