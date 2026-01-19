import { MetadataRoute } from 'next';
import { SERVICES, ALL_LOCATIONS, LOCATIONS, BUSINESS, BLOG_POSTS } from '@/lib/constants';
import { SERVICE_SLUGS } from '@/lib/locationServiceContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.website;
  const currentDate = new Date().toISOString();

  // Primary service cities for enhanced priority
  const primaryCityIds = LOCATIONS.filter(l => l.primary).map(l => l.id) as readonly string[];

  // Static pages with optimized priorities for local SEO
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/common-problems`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/cost-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/remodeling`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/shower-doors`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/custom-finishes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.30,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.30,
    },
  ];

  // Service pages - highest priority after homepage (core money pages)
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service, index) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    // Bathtub is most popular, then gradually decrease
    priority: service.popular ? 0.96 : (0.94 - index * 0.01),
  }));

  // All location pages (50 total) - CRITICAL for local SEO
  // Primary cities get highest priority, updated daily
  const locationPages: MetadataRoute.Sitemap = ALL_LOCATIONS.map((location) => {
    const isPrimary = primaryCityIds.includes(location.id);
    // Seattle gets absolute highest, other primaries get 0.94, rest get tiered
    let priority = 0.82;
    if (location.id === 'seattle') priority = 0.95;
    else if (isPrimary) priority = 0.93;
    else if (['shoreline', 'burien', 'tukwila', 'seatac', 'mercer-island', 'woodinville'].includes(location.id)) priority = 0.88;
    else priority = 0.85;

    return {
      url: `${baseUrl}${location.href}`,
      lastModified: currentDate,
      changeFrequency: isPrimary ? 'daily' as const : 'weekly' as const,
      priority,
    };
  });

  // Location + Service combo pages (72 total: 12 cities × 6 services)
  // Critical for hyper-local SEO targeting
  const locationServicePages: MetadataRoute.Sitemap = [];
  for (const location of LOCATIONS.filter(l => l.primary)) {
    for (const serviceSlug of SERVICE_SLUGS) {
      const isSeattle = location.id === 'seattle';
      const isBathtub = serviceSlug === 'bathtub-refinishing';
      // Seattle + bathtub combo gets highest priority
      let priority = 0.88;
      if (isSeattle && isBathtub) priority = 0.93;
      else if (isSeattle) priority = 0.91;
      else if (isBathtub) priority = 0.90;

      locationServicePages.push({
        url: `${baseUrl}/locations/${location.id}/${serviceSlug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority,
      });
    }
  }

  // Blog posts - fresh content signals
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: post.featured ? 0.87 : 0.82,
  }));

  // Return in priority order for crawlers
  return [
    // Homepage first
    staticPages[0],
    // Then service pages (money pages)
    ...servicePages,
    // Then location pages (local SEO gold)
    ...locationPages,
    // Then location+service combo pages (hyper-local targeting)
    ...locationServicePages,
    // Then remaining static pages
    ...staticPages.slice(1),
    // Then blog posts (content freshness)
    ...blogPages,
  ];
}
