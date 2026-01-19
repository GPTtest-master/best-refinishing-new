import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LOCATIONS, SERVICES, BUSINESS, PROCESS_STEPS } from '@/lib/constants';
import { getLocationServiceContent, SERVICE_SLUGS } from '@/lib/locationServiceContent';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateLocationServicePageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

// Top 12 cities for local SEO
const TOP_CITIES = LOCATIONS.filter(l => l.primary);

// Generate static params for top 12 cities × 6 services = 72 pages
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];

  for (const city of TOP_CITIES) {
    for (const serviceSlug of SERVICE_SLUGS) {
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
  const serviceData = SERVICES.find(s => s.href === `/services/${service}`);

  if (!location || !serviceData) {
    return { title: 'Not Found' };
  }

  const content = getLocationServiceContent(location.name, location.id, service, serviceData.price);

  return {
    title: content.title,
    description: content.metaDescription,
    keywords: `${content.serviceName.toLowerCase()} ${location.name.toLowerCase()}, ${content.serviceShortName.toLowerCase()} reglazing ${location.name.toLowerCase()} wa, ${content.serviceShortName.toLowerCase()} restoration ${location.name.toLowerCase()}, bathroom refinishing ${location.name.toLowerCase()}`,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.name,
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
  const serviceData = SERVICES.find(s => s.href === `/services/${service}`);

  if (!location || !serviceData) {
    notFound();
  }

  const content = getLocationServiceContent(location.name, location.id, service, serviceData.price);

  // Get related services (other services in same city)
  const otherServices = SERVICES.filter(s => s.href !== `/services/${service}`).slice(0, 4);

  // Get nearby cities with same service
  const nearbyCities = TOP_CITIES.filter(l => l.id !== city).slice(0, 6);

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
