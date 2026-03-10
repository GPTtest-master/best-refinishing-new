import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, BUSINESS } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = [...PROJECTS].find((p) => p.id === slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — ${project.type} in ${project.location} | ${BUSINESS.name}`,
    description: `${project.description} See before & after photos, materials used, and the full remodeling process. ${project.duration} project, ${project.budget} budget.`,
    keywords: `${project.type.toLowerCase()} ${project.location.toLowerCase()}, before after remodel, ${project.type.toLowerCase()} before after, remodeling case study`,
    alternates: {
      canonical: `${BUSINESS.website}/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} — Before & After | ${BUSINESS.name}`,
      description: project.description,
      type: 'article',
      locale: 'en_US',
      siteName: BUSINESS.name,
      images: [project.afterImage],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = [...PROJECTS].find((p) => p.id === slug);

  if (!project) notFound();

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              variant="dark"
              items={[
                { label: 'Projects', href: '/projects' },
                { label: project.title },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full">
                {project.type}
              </span>
              <span className="text-white/70 text-sm">{project.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{project.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Before & After</h2>
            <p className="text-gray-600 text-lg">The transformation speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.beforeImage}
                alt={`Before: ${project.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm uppercase tracking-wide">
                Before
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.afterImage}
                alt={`After: ${project.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-white font-bold rounded-full text-sm uppercase tracking-wide">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Materials Used */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Materials Used
              </h3>
              <div className="space-y-3">
                {project.materials.map((material) => (
                  <div key={material} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <svg className="w-5 h-5 text-[#0b66b3] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                Project Highlights
              </h3>
              <div className="space-y-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt="Start your remodeling project"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b66b3]/90 to-[#084c8a]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Results Like This?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Get your free estimate — we&apos;ll help you plan the perfect {project.type.toLowerCase()} for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://nexfield.pro/crm/book?u=137"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg"
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
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                href={`/projects/${other.id}`}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={other.afterImage}
                    alt={other.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#0b66b3] text-white text-xs font-bold rounded-full">
                    {other.type}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0b66b3] transition">{other.title}</h3>
                  <p className="text-sm text-gray-500">{other.location} &middot; {other.duration}</p>
                </div>
              </Link>
            ))}
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
              {
                '@type': 'ListItem',
                position: 3,
                name: project.title,
                item: `${BUSINESS.website}/projects/${project.id}`,
              },
            ],
          }),
        }}
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: project.title,
            description: project.description,
            image: [`${BUSINESS.website}${project.beforeImage}`, `${BUSINESS.website}${project.afterImage}`],
            author: { '@type': 'Organization', name: BUSINESS.name },
            publisher: { '@type': 'Organization', name: BUSINESS.name, logo: { '@type': 'ImageObject', url: `${BUSINESS.website}/images/logo.png` } },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${BUSINESS.website}/projects/${project.id}` },
          }),
        }}
      />
    </div>
  );
}
