import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, BUSINESS, PROCESS_STEPS } from '@/lib/constants';

// Generate static params for all services (using full slug from href)
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    // Extract slug from href, e.g., /services/bathtub-refinishing -> bathtub-refinishing
    slug: service.href.replace('/services/', ''),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const serviceId = getServiceId(slug);
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} Seattle | ${BUSINESS.name} - ${service.price}`,
    description: `Professional ${service.title.toLowerCase()} in Seattle. ${service.description} ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone} for free estimate.`,
    keywords: `${service.title.toLowerCase()}, ${service.shortTitle.toLowerCase()} reglazing seattle, ${service.shortTitle.toLowerCase()} resurfacing seattle, bathroom refinishing seattle`,
    openGraph: {
      title: `${service.title} Seattle | ${BUSINESS.name}`,
      description: service.description,
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.name,
    },
    alternates: {
      canonical: `${BUSINESS.website}/services/${slug}`,
    },
  };
}

// Map slug to actual service ID (handle URL-friendly slugs)
function getServiceId(slug: string): string {
  const slugMap: Record<string, string> = {
    'bathtub-refinishing': 'bathtub',
    'shower-refinishing': 'shower',
    'tile-refinishing': 'tile',
    'sink-refinishing': 'sink',
    'countertop-refinishing': 'countertop',
    'repair': 'repair',
    'chip-crack-repair': 'repair',
    // Direct matches
    'bathtub': 'bathtub',
    'shower': 'shower',
    'tile': 'tile',
    'sink': 'sink',
    'countertop': 'countertop',
  };
  return slugMap[slug] || slug;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceId = getServiceId(slug);
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  // Get other services for cross-linking
  const otherServices = SERVICES.filter((s) => s.id !== serviceId).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] font-semibold text-sm mb-6">
                {service.subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                {service.title}
                <span className="block text-[#0b66b3]">in Seattle</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Starting at</div>
                  <div className="text-3xl font-black text-[#0b66b3]">{service.price}</div>
                  <div className="text-sm text-green-600 font-medium">{service.savings}</div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
                  >
                    Get Instant Quote
                  </a>
                  <a
                    href={BUSINESS.phoneLink}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-[#0b66b3] transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={`${service.title} result`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{BUSINESS.warranty} Warranty</div>
                    <div className="text-sm text-gray-500">Guaranteed Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our {service.shortTitle} Refinishing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional results in just one day. Here&apos;s how we transform your {service.shortTitle.toLowerCase()}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Get Your Free {service.shortTitle} Refinishing Quote
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Call us now or fill out the form for a free estimate. We respond within {BUSINESS.responseTime}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0b66b3] font-bold text-lg hover:bg-gray-100 transition"
            >
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Other Services We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Complete bathroom and kitchen refinishing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.id}
                href={otherService.href}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                <div className="relative h-48">
                  <Image
                    src={otherService.image}
                    alt={otherService.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{otherService.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{otherService.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0b66b3] font-bold">{otherService.price}</span>
                    <span className="text-[#0b66b3] font-medium group-hover:translate-x-1 transition-transform">
                      Learn More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.longDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS.name,
              telephone: BUSINESS.phone,
              url: BUSINESS.website,
            },
            areaServed: {
              '@type': 'City',
              name: 'Seattle',
            },
            priceRange: service.price,
          }),
        }}
      />
    </>
  );
}
