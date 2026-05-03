import Link from "next/link";
import { generateHomePageSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/SchemaScript";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <SchemaScript schema={generateHomePageSchema()} />
      <Hero />
      <ProjectsPreview />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <BlogPreview />

      {/* Popular Remodeling Services by City - Deep Links to Money Pages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Local Service Areas
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Popular Remodeling Services by City
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert kitchen and bathroom remodeling across the Greater Seattle metro area
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { city: 'Seattle', slug: 'seattle', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Seattle', slug: 'seattle', service: 'Kitchen Remodeling', serviceSlug: 'kitchen-remodeling' },
              { city: 'Seattle', slug: 'seattle', service: 'Shower Installation', serviceSlug: 'shower-installation' },
              { city: 'Seattle', slug: 'seattle', service: 'Tile Installation', serviceSlug: 'tile-installation' },
              { city: 'Bellevue', slug: 'bellevue', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Bellevue', slug: 'bellevue', service: 'Kitchen Remodeling', serviceSlug: 'kitchen-remodeling' },
              { city: 'Kirkland', slug: 'kirkland', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Kirkland', slug: 'kirkland', service: 'Kitchen Remodeling', serviceSlug: 'kitchen-remodeling' },
              { city: 'Redmond', slug: 'redmond', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Redmond', slug: 'redmond', service: 'Kitchen Remodeling', serviceSlug: 'kitchen-remodeling' },
              { city: 'Kent', slug: 'kent', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Kent', slug: 'kent', service: 'Kitchen Remodeling', serviceSlug: 'kitchen-remodeling' },
              { city: 'Renton', slug: 'renton', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Issaquah', slug: 'issaquah', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Bothell', slug: 'bothell', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Sammamish', slug: 'sammamish', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Tacoma', slug: 'tacoma', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Federal Way', slug: 'federal-way', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Lynnwood', slug: 'lynnwood', service: 'Bathroom Remodeling', serviceSlug: 'bathroom-remodeling' },
              { city: 'Sammamish', slug: 'sammamish', service: 'Kitchen Remodeling', serviceSlug: 'kitchen-remodeling' },
            ].map((item) => (
              <Link
                key={`${item.slug}-${item.serviceSlug}`}
                href={`/locations/${item.slug}/${item.serviceSlug}`}
                className="flex items-center justify-between px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#0b66b3] hover:shadow-md transition group"
              >
                <span className="text-sm font-medium text-gray-900 group-hover:text-[#0b66b3] transition">
                  {item.city} {item.service}
                </span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0b66b3] group-hover:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b66b3] text-white font-bold rounded-full hover:bg-[#084c8a] transition">
              Browse All 50+ Cities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
