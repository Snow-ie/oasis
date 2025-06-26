import AnytimeSection from "./components/AnytimeSection";
import FeatureSection from "./components/Feature";
import Hero from "./components/Hero";
import PowerfulSection from "./components/PowerfulSection";
import TestimonialsSection from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <PowerfulSection />
      <TestimonialsSection />
      <AnytimeSection />
    </div>
  );
}
