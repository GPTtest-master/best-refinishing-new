import { MetadataRoute } from 'next';
import { REMODELING_SERVICES, ALL_LOCATIONS, LOCATIONS, BUSINESS, BLOG_POSTS, PROJECTS } from '@/lib/constants';
import { REMODELING_SERVICE_SLUGS } from '@/lib/locationServiceContent';

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
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/common-problems`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.65,
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
      changeFrequency: 'weekly',
      priority: 0.65,
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
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/remodeling`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.90,
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

  // Remodeling service pages — PRIMARY business, highest priority
  const remodelingServicePages: MetadataRoute.Sitemap = REMODELING_SERVICES.map((service, index) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: index < 2 ? 0.98 : 0.96,
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

  // Remodeling location+service combo pages — 50 cities × 6 services = 300 pages
  const remodelingLocationServicePages: MetadataRoute.Sitemap = [];
  for (const location of ALL_LOCATIONS) {
    for (const serviceSlug of REMODELING_SERVICE_SLUGS) {
      const isSeattle = location.id === 'seattle';
      const isBathroom = serviceSlug === 'bathroom-remodeling';
      const isKitchen = serviceSlug === 'kitchen-remodeling';
      let priority = 0.60;
      if (isSeattle && (isBathroom || isKitchen)) priority = 0.80;
      else if (isSeattle) priority = 0.75;
      else if (isBathroom || isKitchen) priority = 0.70;
      else priority = 0.60;

      remodelingLocationServicePages.push({
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
    priority: post.featured ? 0.88 : 0.84,
  }));

  // Project case study pages
  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Return in priority order for crawlers
  return [
    // Homepage first
    staticPages[0],
    ...remodelingServicePages,
    ...remodelingLocationServicePages,
    ...locationPages,
    ...staticPages.slice(1),
    ...blogPages,
    ...projectPages,
  ];
}
