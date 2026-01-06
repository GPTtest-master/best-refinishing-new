import Hero from "@/components/sections/Hero";
import QuoteSection from "@/components/sections/QuoteSection";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteSection />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <BlogPreview />
    </>
  );
}
