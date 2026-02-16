import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { ParallaxSection } from "@/components/sections/parallax-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ParallaxSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
    </main>
  );
}
