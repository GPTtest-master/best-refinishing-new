import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StatsBar from "@/components/sections/StatsBar";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <ProjectsPreview />
      <WhyChooseUs />
      <Reviews />
      <BlogPreview />
    </>
  );
}
