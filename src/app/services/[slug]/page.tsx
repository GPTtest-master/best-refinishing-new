import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { REMODELING_SERVICES, ALL_SERVICES, BUSINESS } from '@/lib/constants';
import ServicePageClient from './ServicePageClient';
import { generateServicePageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

const SERVICE_METADATA: Record<string, { title: string; description: string }> = {
  'bathroom-remodeling': {
    title: 'Bathroom Remodeling Seattle WA | Licensed Design-Build Pros',
    description: 'Seattle bathroom remodeling for showers, tile, vanities, plumbing, electrical, and permits. Get an itemized estimate from licensed remodelers.',
  },
  'kitchen-remodeling': {
    title: 'Kitchen Remodeling Seattle WA | Licensed Design-Build Pros',
    description: 'Kitchen remodeling in Seattle with cabinets, countertops, backsplash, flooring, plumbing, electrical, and permit-ready project planning.',
  },
  'tile-installation': {
    title: 'Tile Installation Seattle WA | Floors, Showers & Backsplashes',
    description: 'Seattle tile installation for bathroom floors, shower walls, kitchen backsplashes, porcelain, ceramic, marble, and natural stone.',
  },
  'countertop-installation': {
    title: 'Countertop Installation Seattle WA | Quartz, Granite & Marble',
    description: 'Countertop installation in Seattle for quartz, granite, marble, quartzite, kitchens, vanities, sink cutouts, and precise templating.',
  },
  'shower-installation': {
    title: 'Shower Installation Seattle WA | Custom Tile & Glass',
    description: 'Custom shower installation in Seattle with waterproofing, tile, glass enclosures, fixtures, niches, benches, and clean project coordination.',
  },
  'bathtub-installation': {
    title: 'Bathtub Installation Seattle WA | Licensed Bathroom Pros',
    description: 'Bathtub installation and replacement in Seattle for alcove, soaking, freestanding, and drop-in tubs with plumbing and surround work.',
  },
  'tub-to-shower': {
    title: 'Tub to Shower Conversion Seattle WA | Walk-In Shower Pros',
    description: 'Convert a bathtub to a walk-in shower in Seattle with demolition, waterproofing, custom tile, glass enclosure, fixtures, and finishing.',
  },
  'cabinet-refacing': {
    title: 'Cabinet Refacing Seattle WA | Kitchen Cabinet Refresh',
    description: 'Seattle cabinet refacing for new doors, drawer fronts, veneer, soft-close hardware, and a cleaner kitchen look without full replacement.',
  },
  'walk-in-shower': {
    title: 'Walk-In Shower Installation Seattle WA | Curbless & ADA Options',
    description: 'Walk-in shower installation in Seattle with curbless and low-threshold options, benches, grab bars, custom tile, and frameless glass.',
  },
};

const SERVICE_OG_IMAGES: Record<string, string> = {
  'bathroom-remodeling': '/images/remodeling/bathroom-remodeling-hero-optimized.jpg',
  'kitchen-remodeling': '/images/remodeling/kitchen-remodeling-hero.jpg',
  'tile-installation': '/images/remodeling/bathroom-showcase-3.jpg',
  'countertop-installation': '/images/remodeling/countertop-installation.png',
  'shower-installation': '/images/remodeling/shower-inst.jpg',
  'bathtub-installation': '/images/remodeling/bathtub-hero.jpg',
  'tub-to-shower': '/images/remodeling/tub-to-shower-conversion.jpg',
  'cabinet-refacing': '/images/remodeling/kitchen-remodeling-hero.jpg',
  'walk-in-shower': '/images/remodeling/walkinshower.jpg',
};

// Generate static params for remodeling services only (refinishing handled by 301 redirects)
export async function generateStaticParams() {
  return REMODELING_SERVICES.map((service) => ({
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
    'bathroom-remodeling': 'bathroom-remodeling',
    'kitchen-remodeling': 'kitchen-remodeling',
    'tile-installation': 'tile-installation',
    'countertop-installation': 'countertop-installation',
    'shower-installation': 'shower-installation',
    'bathtub-installation': 'bathtub-installation',
    'tub-to-shower': 'tub-to-shower',
    'cabinet-refacing': 'cabinet-refacing',
    'walk-in-shower': 'walk-in-shower',
    'ada-bathroom': 'ada-bathroom',
    'curbless-shower': 'curbless-shower',
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
  const service = [...ALL_SERVICES].find((s) => s.id === serviceId);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  const meta = SERVICE_METADATA[service.id] ?? {
    title: `${service.title} Seattle WA | Licensed Remodeling Pros`,
    description: `Professional ${service.title.toLowerCase()} in Seattle with clear scope, itemized estimates, and licensed remodeling project coordination.`,
  };
  const ogImage = SERVICE_OG_IMAGES[service.id] ?? service.image;

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${BUSINESS.website}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceId = getServiceId(slug);
  const service = [...ALL_SERVICES].find((s) => s.id === serviceId);

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
