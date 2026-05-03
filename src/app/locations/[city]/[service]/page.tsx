import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_LOCATIONS, REMODELING_SERVICES, BUSINESS, ACTIVE_BLOG_POSTS, PROJECTS } from '@/lib/constants';
import { getLocationServiceContent, REMODELING_SERVICE_SLUGS } from '@/lib/locationServiceContent';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateLocationServicePageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

// Top 12 cities for local SEO
const TOP_CITIES = ALL_LOCATIONS;

const serviceProjectTypeKeywords: Record<string, string[]> = {
  'bathroom-remodeling': ['bathroom'],
  'kitchen-remodeling': ['kitchen'],
  'countertop-installation': ['kitchen'],
  'cabinet-refacing': ['kitchen'],
  'tile-installation': ['bathroom', 'kitchen'],
  'shower-installation': ['bathroom'],
  'bathtub-installation': ['bathroom'],
  'tub-to-shower': ['bathroom'],
  'walk-in-shower': ['bathroom'],
};

// Generate static params for top 12 cities × 6 services = 72 pages
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];

  for (const city of TOP_CITIES) {
    for (const serviceSlug of REMODELING_SERVICE_SLUGS) {
      params.push({
        city: city.id,
        service: serviceSlug,
      });
    }
  }

  return params;
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city, service } = await params;

  const location = TOP_CITIES.find(l => l.id === city);
  const serviceData = REMODELING_SERVICES.find(s => s.href === `/services/${service}`);

  if (!location || !serviceData) {
    return { title: 'Not Found' };
  }

  const content = getLocationServiceContent(location.name, location.id, service, serviceData.price);

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.name,
      images: [{ url: serviceData.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${BUSINESS.website}/locations/${city}/${service}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city, service } = await params;

  const location = TOP_CITIES.find(l => l.id === city);
  const serviceData = REMODELING_SERVICES.find(s => s.href === `/services/${service}`);

  if (!location || !serviceData) {
    notFound();
  }

  const content = getLocationServiceContent(location.name, location.id, service, serviceData.price);

  // Get related services (other services in same city)
  const otherServices = REMODELING_SERVICES.filter(s => s.href !== `/services/${service}`).slice(0, 4);

  // Resolve nearby cities from the content data
  const nearbyCities = content.nearbyCityIds
    .map(id => TOP_CITIES.find(c => c.id === id))
    .filter((c): c is (typeof TOP_CITIES)[number] => c !== undefined);
  const projectKeywords = serviceProjectTypeKeywords[service] || [];
  const cityProjectTerms = location.id === 'seattle'
    ? ['seattle', 'capitol hill', 'downtown']
    : [location.name.toLowerCase()];
  const localServiceProjects = PROJECTS.filter((project) =>
    projectKeywords.some((keyword) => project.type.toLowerCase().includes(keyword)) &&
    cityProjectTerms.some((term) => project.location.toLowerCase().includes(term))
  );
  const serviceProofProjects = (localServiceProjects.length > 0
    ? localServiceProjects
    : PROJECTS.filter((project) =>
        projectKeywords.some((keyword) => project.type.toLowerCase().includes(keyword))
      )
  ).slice(0, 3);

  // JSON-LD Schema - Enhanced @graph structure
  const schema = generateLocationServicePageSchema(
    { id: location.id, name: location.name },
    serviceData,
    {
      serviceName: content.serviceName,
      metaDescription: content.metaDescription,
      reviews: content.reviews,
    }
  );

  return (
    <>
      {/* JSON-LD - Enhanced @graph structure */}
      <SchemaScript schema={schema} />
      {content.faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(content.faqSchema) }} />}

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={serviceData.image}
            alt={content.serviceName}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb with schema */}
              <div className="mb-6">
                <Breadcrumbs
                  variant="dark"
                  items={[
                    { label: 'Locations', href: '/locations' },
                    { label: location.name, href: `/locations/${city}` },
                    { label: content.serviceShortName },
                  ]}
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                {content.h1}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {content.heroText}
              </p>

              {/* Price badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/20 border border-amber-500/30 mb-8">
                <span className="text-amber-400 font-bold text-2xl">{content.price}</span>
                <span className="text-gray-400">|</span>
                <span className="text-white">{BUSINESS.warranty} Warranty</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={serviceData.image}
                  alt={`${content.serviceName} in ${location.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#0b66b3] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="font-bold text-gray-900">{BUSINESS.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{BUSINESS.reviewCount}+ happy customers in {location.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Citable Summary — AI Overview target */}
      {content.citableAnswer && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              {content.citableAnswer}
            </p>
          </div>
        </section>
      )}

      {/* Project Proof */}
      {serviceProofProjects.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
              <div>
                <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                  Before You Compare Bids
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  Relevant {content.serviceName} Project Proof
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  These before-and-after case studies show the kind of scope details homeowners should compare: layout, material choices, waterproofing or cabinet planning, timeline, and budget drivers.
                </p>
                <Link href="/projects" className="mt-5 inline-flex text-[#0b66b3] font-bold hover:underline">
                  View all remodeling case studies
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {serviceProofProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group overflow-hidden rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image src={project.afterImage} alt={project.title} fill className="object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#0b66b3] px-2 py-1 text-[10px] font-bold uppercase text-white">
                        Case Study
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0b66b3] mb-1">
                        {project.location}
                      </p>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0b66b3] transition line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Expertise Section */}
      {content.localExpertise && (
        <section className="py-12 bg-[#0b66b3]/5 border-b border-[#0b66b3]/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Local Expertise: {content.serviceName} in {location.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {content.localExpertise}
                </p>
                {content.censusInsight && (
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {content.censusInsight}
                  </p>
                )}
                {content.keywordInsight && (
                  <p className="text-sm text-gray-500 italic">
                    {content.keywordInsight}
                  </p>
                )}
              </div>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Did You Know?
                  </h3>
                  {content.localFacts.map((fact, idx) => (
                    <p key={idx} className="text-sm text-amber-900 mb-2 last:mb-0">
                      {fact}
                    </p>
                  ))}
                </div>
                {content.censusData && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-3">{location.name} at a Glance</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Population</span>
                        <span className="font-semibold text-gray-900">{content.censusData.population.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Median Home Value</span>
                        <span className="font-semibold text-gray-900">{'$' + (content.censusData.medianHomeValue >= 1000000 ? (content.censusData.medianHomeValue / 1000000).toFixed(1) + 'M' : Math.round(content.censusData.medianHomeValue / 1000).toLocaleString() + 'K')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Median Income</span>
                        <span className="font-semibold text-gray-900">{'$' + Math.round(content.censusData.medianIncome / 1000).toLocaleString() + 'K'}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Source: US Census Bureau, ACS 2022</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Housing Stock Analysis - Data-Driven Callout */}
      {content.housingInsight && (
        <section className="py-10 bg-gradient-to-r from-slate-50 to-blue-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0b66b3] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {location.name} Housing Stock Analysis
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {content.housingInsight}
                </p>
                {content.marketInsight && (
                  <p className="text-gray-600 leading-relaxed">
                    {content.marketInsight}
                  </p>
                )}
              </div>
              <div className="space-y-4">
                {/* Housing Stats Data Bar */}
                {content.housingStats && (
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Housing Data</h3>
                    <div className="space-y-3">
                      {content.housingStats.split(' | ').map((stat, idx) => {
                        const [label, value] = stat.split(': ');
                        return (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{label}</span>
                            <span className="text-sm font-bold text-gray-900">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-gray-400 mt-3">Source: US Census ACS 2022</p>
                  </div>
                )}
                {/* Best Time to Book */}
                {content.searchTrend && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-2">Best Time to Book</h3>
                    <p className="text-sm text-amber-900">
                      Demand for {content.serviceName.toLowerCase()} in {location.name} peaks in <strong>{content.searchTrend.peak}</strong> ({content.searchTrend.peakVolume.toLocaleString()} searches/mo).
                      Book during <strong>{content.searchTrend.low}</strong> for faster scheduling and potential savings.
                    </p>
                    <p className="text-xs text-amber-700 mt-2">Source: DataForSEO / Google Ads 2026</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

            {/* Middle sections - order varies per city+service for uniqueness */}
      {(() => {
        const sections = [
          content.pricingTiers.length > 0 ? (
            <section key="pricing" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    {content.serviceName} Cost in {location.name}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transparent pricing for {location.name} homeowners. {content.warrantyLine}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {content.pricingTiers.map((tier, idx) => (
                    <div key={idx} className={`rounded-xl border-2 p-6 ${idx === 1 ? 'border-[#0b66b3] bg-[#0b66b3]/5 relative' : 'border-gray-200 bg-white'} hover:shadow-lg transition`}>
                      {idx === 1 && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0b66b3] text-white text-xs font-bold rounded-full">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{tier.tier}</h3>
                      <p className="text-2xl font-black text-[#0b66b3] mb-3">{tier.range}</p>
                      <p className="text-gray-600 text-sm">{tier.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 mb-4">Prices are estimates for {location.name}, WA based on local market conditions. {content.pricingDisclaimer}</p>
                  <a href={BUSINESS.phoneLink} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b66b3] text-white font-bold hover:bg-[#084c8a] transition">
                    Get Your Exact Quote: {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </section>
          ) : null,

          content.inclusions.length > 0 ? (
            <section key="inclusions" className="py-16 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                      What&apos;s Included in Your {content.serviceShortName} Project
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Every {content.serviceName.toLowerCase()} project in {location.name} includes these services &mdash; no hidden fees, no surprises.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b66b3] text-white font-bold hover:bg-[#084c8a] transition">
                      Get Free Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <ul className="space-y-3">
                      {content.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ) : null,

          content.timeline.length > 0 ? (
            <section key="timeline" className="py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    How Long Does {content.serviceName} Take in {location.name}?
                  </h2>
                  <p className="text-gray-600">{content.permitNote}</p>
                </div>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0b66b3]/20 hidden md:block" />
                  <div className="space-y-8">
                    {content.timeline.map((step, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="w-16 h-16 rounded-full bg-[#0b66b3] text-white flex flex-col items-center justify-center flex-shrink-0 relative z-10">
                          <span className="text-xs font-medium leading-none">{step.duration.split(' ')[0]}</span>
                          <span className="text-[10px] leading-none">{step.duration.split(' ').slice(1).join(' ')}</span>
                        </div>
                        <div className="flex-1 bg-slate-50 rounded-xl p-6">
                          <h3 className="font-bold text-gray-900 mb-1">{step.phase}</h3>
                          <p className="text-sm text-[#0b66b3] font-medium mb-2">{step.duration}</p>
                          <p className="text-gray-600">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null,
        ];
        return content.sectionOrder.map((idx: number) => sections[idx]).filter(Boolean);
      })()}

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose Our {content.serviceName}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.whyChoose}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {content.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                {content.cityContext}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Professional {content.serviceName} in {location.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {content.description}
              </p>

              {/* Problems we solve */}
              <h3 className="font-bold text-gray-900 mb-3">Common Problems We Fix:</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {content.problems.map((problem, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                    {problem}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b66b3] text-white font-bold hover:bg-[#084c8a] transition"
              >
                Get Your Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our {content.serviceShortName} Process</h3>
              <div className="space-y-4">
                {content.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What {location.name} Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xl font-bold text-gray-900 ml-2">{BUSINESS.rating}</span>
              <span className="text-gray-500">({BUSINESS.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.reviews.map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {content.serviceName} FAQ
            </h2>
            <p className="text-gray-600">Common questions about {content.serviceName.toLowerCase()} in {location.name}</p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready for {content.serviceName} in {location.name}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get your free quote today. We respond {BUSINESS.responseTime.toLowerCase()}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0b66b3] font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>


      {/* Home Age Analysis - Computed Unique */}
      {content.homeAgeParagraph && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why {location.name} Homes Need Professional {content.serviceName}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {content.homeAgeParagraph}
              </p>
              {content.investmentParagraph && (
                <p className="text-gray-600 leading-relaxed mb-4">
                  {content.investmentParagraph}
                </p>
              )}
              {content.comparisonParagraph && (
                <p className="text-gray-500 text-sm italic">
                  {content.comparisonParagraph}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Neighborhoods We Serve - Unique per city */}
      {content.neighborhoodParagraph && (
        <section className="py-12 bg-slate-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.serviceName} Across {location.name} Neighborhoods
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {content.neighborhoodParagraph}
            </p>
            {content.neighborhoods.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {content.neighborhoods.map((nb, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                    {nb}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Other Services in This City */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Services in {location.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/locations/${city}/${s.href.replace('/services/', '')}`}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] transition mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{s.price}</p>
                <span className="text-[#0b66b3] text-sm font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0b66b3] to-[#084c8a] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Not Sure Which Scope Fits Your {location.name} Home?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              We can compare layout changes, waterproofing needs, material options, permit requirements, and budget ranges before you commit to a scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition">
                Get Scope Advice
              </Link>
              <Link href="/projects" className="px-6 py-3 bg-white text-[#0b66b3] rounded-xl font-bold hover:bg-gray-100 transition">
                View Projects
              </Link>
              <a href={BUSINESS.phoneLink} className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition">
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Expert Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {(() => {
              const svc = service.toLowerCase();
              let relatedSlugs: string[] = [];
              if (svc.includes('bathroom')) {
                relatedSlugs = ['bathroom-remodeling-cost-seattle-2026', 'bathroom-remodeling-mistakes-seattle', 'shower-tile-installation-seattle'];
              } else if (svc.includes('kitchen') || svc.includes('counter') || svc.includes('cabinet')) {
                relatedSlugs = ['kitchen-remodeling-cost-seattle-2026', 'canyon-park-townhome-kitchen-remodeling', 'kitchen-remodeling-seattle-guide'];
              } else if (svc.includes('shower') || svc.includes('tub') || svc.includes('bath')) {
                relatedSlugs = ['shower-tile-installation-seattle', 'walk-in-shower-vs-bathtub-seattle', 'bathroom-remodeling-mistakes-seattle'];
              } else if (svc.includes('tile')) {
                relatedSlugs = ['shower-tile-installation-seattle', 'bathroom-remodeling-cost-seattle-2026', 'kitchen-remodeling-seattle-guide'];
              } else {
                relatedSlugs = ['bathroom-remodeling-cost-seattle-2026', 'kitchen-remodeling-seattle-guide', 'kitchen-vs-bathroom-remodel-roi'];
              }
              const blogPosts = relatedSlugs
                .map(slug => ACTIVE_BLOG_POSTS.find(p => p.slug === slug))
                .filter((p): p is (typeof ACTIVE_BLOG_POSTS)[number] => p !== undefined)
                .slice(0, 3);
              return blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-slate-50 rounded-xl p-5 hover:shadow-lg transition group"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] transition mb-2 text-sm">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{post.excerpt}</p>
                  <span className="text-[#0b66b3] text-xs font-semibold mt-2 inline-block">Read guide →</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Same Service in Other Cities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {content.serviceName} in Other Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyCities.map((c) => (
              <Link
                key={c.id}
                href={`/locations/${c.id}/${service}`}
                className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium hover:bg-[#0b66b3] hover:text-white transition border border-gray-200"
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-4 py-2 rounded-full bg-[#0b66b3] text-white font-medium hover:bg-[#084c8a] transition"
            >
              All 50+ Cities →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
