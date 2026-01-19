import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, BUSINESS } from '@/lib/constants';
import ServicePageClient from './ServicePageClient';
import { generateServicePageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

// Generate static params for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.href.replace('/services/', ''),
  }));
}

// Map slug to actual service ID
function getServiceId(slug: string): string {
  const slugMap: Record<string, string> = {
    'bathtub-refinishing': 'bathtub',
    'shower-refinishing': 'shower',
    'tile-refinishing': 'tile',
    'sink-refinishing': 'sink',
    'countertop-refinishing': 'countertop',
    'repair': 'repair',
    'chip-crack-repair': 'repair',
    'bathtub': 'bathtub',
    'shower': 'shower',
    'tile': 'tile',
    'sink': 'sink',
    'countertop': 'countertop',
  };
  return slugMap[slug] || slug;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const serviceId = getServiceId(slug);
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} Seattle & 50+ Cities | ${BUSINESS.name} - ${service.price}`,
    description: `Professional ${service.title.toLowerCase()} in Seattle, Bellevue, Redmond & 50+ cities. ${service.description} ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone} for free estimate.`,
    keywords: `${service.title.toLowerCase()}, ${service.shortTitle.toLowerCase()} reglazing seattle, ${service.shortTitle.toLowerCase()} resurfacing bellevue, bathroom refinishing seattle, ${service.shortTitle.toLowerCase()} refinishing near me`,
    openGraph: {
      title: `${service.title} Seattle & 50+ Cities | ${BUSINESS.name}`,
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceId = getServiceId(slug);
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  const schema = generateServicePageSchema(service);

  return (
    <>
      <SchemaScript schema={schema} />
      <ServicePageClient service={service} />
    </>
  );
}
