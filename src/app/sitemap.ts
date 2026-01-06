import { MetadataRoute } from 'next';
import { SERVICES, ALL_LOCATIONS, BUSINESS, BLOG_POSTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.website;
  const currentDate = new Date().toISOString();

  // Static pages with optimized priorities
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
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/common-problems`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cost-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/remodeling`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shower-doors`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/custom-finishes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Service pages - highest priority after homepage
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  // All location pages (50 total for comprehensive local SEO)
  const locationPages: MetadataRoute.Sitemap = ALL_LOCATIONS.map((location) => ({
    url: `${baseUrl}${location.href}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: location.primary ? 0.9 : 0.8,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.9 : 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...blogPages,
  ];
}
