import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_LOCATIONS, BUSINESS } from '@/lib/constants';
import LocationPageClient from './LocationPageClient';
import { getLocationContent, getLocationReviews } from '@/lib/locationContent';
import { generateLocationPageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

// Generate static params for all locations (50 total)
export async function generateStaticParams() {
  return ALL_LOCATIONS.map((location) => ({
    city: location.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = ALL_LOCATIONS.find((l) => l.id === city);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  const content = getLocationContent(location.name, location.id);

  return {
    title: `Bathtub & Tile Refinishing ${location.name} WA | ${BUSINESS.name} - Local Experts`,
    description: content.metaDescription,
    keywords: `bathtub refinishing ${location.name.toLowerCase()}, tub reglazing ${location.name.toLowerCase()} wa, shower refinishing ${location.name.toLowerCase()}, tile resurfacing ${location.name.toLowerCase()}, bathroom refinishing near me, ${location.name.toLowerCase()} bathroom renovation`,
    openGraph: {
      title: `Professional Refinishing Services in ${location.name}, WA | ${BUSINESS.name}`,
      description: content.metaDescription,
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.name,
      images: ['/images/optimized/bathtub-3-after.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Bathtub Refinishing ${location.name} WA`,
      description: content.metaDescription,
    },
    alternates: {
      canonical: `${BUSINESS.website}/locations/${city}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = ALL_LOCATIONS.find((l) => l.id === city);

  if (!location) {
    notFound();
  }

  const content = getLocationContent(location.name, location.id);
  const reviews = getLocationReviews(location.name);

  const schema = generateLocationPageSchema({ id: location.id, name: location.name });

  return (
    <>
      <SchemaScript schema={schema} />
      <LocationPageClient location={location} content={content} reviews={reviews} />
    </>
  );
}
