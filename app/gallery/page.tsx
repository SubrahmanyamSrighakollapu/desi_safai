import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="See the Transformations We Create"
        highlight="Transformations"
        subtitle="Browse through our portfolio of cleaning projects. Real results from real customers across Hyderabad."
      >
        <Button href="/contact" size="lg">Book Your Clean</Button>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <GalleryClient />
        </div>
      </section>

      <CTASection />
    </>
  );
}
