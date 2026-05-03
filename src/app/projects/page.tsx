import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Our Projects — Kitchen & Bathroom Remodeling Before & After | ${BUSINESS.name}`,
  description: `See real kitchen and bathroom remodeling projects with before & after photos. Detailed case studies from Seattle, Bellevue, Kirkland, Tacoma and more. ${BUSINESS.projectsCompleted} projects completed.`,
  keywords: 'kitchen remodel before after, bathroom remodel before after, remodeling projects seattle, kitchen renovation examples, bathroom renovation case studies',
  alternates: {
    canonical: `${BUSINESS.website}/projects`,
  },
  openGraph: {
    title: `Our Projects — Before & After | ${BUSINESS.name}`,
    description: `Real kitchen and bathroom remodeling projects with before & after photos across Seattle metro.`,
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/projhero.webp"
            alt="Kitchen and bathroom remodeling projects"
            fill
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {BUSINESS.projectsCompleted} PROJECTS COMPLETED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Our Remodeling
              <span className="block text-amber-400">Projects & Results</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-2xl">
              Real transformations from real Seattle-area homes. Every project includes detailed before & after photos, materials used, and how we brought each vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any project to see the full story — challenges, solutions, materials, and results
            </p>
          </div>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
              >
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Before/After Images */}
                  <div className="w-full lg:w-3/5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={project.beforeImage}
                          alt={`Before: ${project.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase">
                          Before
                        </div>
                      </div>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={project.afterImage}
                          alt={`After: ${project.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full uppercase">
                          After
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-2/5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-[#0b66b3]/10 text-[#0b66b3] px-3 py-1 rounded-full font-semibold">
                        {project.type}
                      </span>
                      <span className="text-xs text-gray-500">{project.location}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#0b66b3] transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-5 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <svg className="w-4 h-4 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <svg className="w-4 h-4 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{project.budget}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold group-hover:gap-3 transition-all">
                      View Full Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/bathroom-showcase-2.jpg"
            alt="Remodeling results"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: BUSINESS.projectsCompleted, label: 'Projects Completed' },
              { value: BUSINESS.experience, label: 'Years Experience' },
              { value: BUSINESS.rating, label: 'Customer Rating' },
              { value: BUSINESS.warranty, label: 'Warranty' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-amber-400 mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/kitchen-showcase-2.jpg"
            alt="Start your remodeling project"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b66b3]/90 to-[#084c8a]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Get your free estimate today — we&apos;ll help you plan the perfect remodel for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
            >
              Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: BUSINESS.website,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Projects',
                item: `${BUSINESS.website}/projects`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
