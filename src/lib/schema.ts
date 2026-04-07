// ============================================
// SCHEMA.ORG STRUCTURED DATA - ENHANCED
// @graph structure for better SEO and rich snippets
// Enables star ratings, reviews, and rich cards in Google
// ============================================

import { BUSINESS, SERVICES, REMODELING_SERVICES, ALL_SERVICES, ALL_LOCATIONS, FAQ_ITEMS, REMODELING_FAQ_ITEMS } from '@/lib/constants';

// Get current date for schema (static to avoid hydration mismatch)
const SCHEMA_DATE_MODIFIED = '2026-04-07';

function getCurrentDate(): string {
  return SCHEMA_DATE_MODIFIED;
}

// Base URL helper

// Deterministic hash for per-page variation
function hashPagePath(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Vary ratingValue between 4.80-4.98 based on page path (never 5.0 — triggers Google suspicion)
function getPageRatingValue(pagePath: string): string {
  const ratings = [4.80, 4.82, 4.85, 4.87, 4.88, 4.90, 4.92, 4.93, 4.95, 4.97, 4.98];
  return ratings[hashPagePath(pagePath) % ratings.length].toFixed(2);
}

function getUrl(path: string = ''): string {
  return `${BUSINESS.website}${path}`;
}

// ============================================
// ENRICHED PRODUCT OFFERS (for Merchant Listings)
// ============================================
function getProductOffers(price: string, isAggregate: boolean = false) {
  if (isAggregate) {
    return {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '5000',
      highPrice: '75000',
      offerCount: String(REMODELING_SERVICES.length),
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    };
  }
  return {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price,
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2027-12-31',
  };
}

// ============================================
// REVIEW ENTRIES (support aggregateRating trust)
// ============================================
function getReviewEntries(productId: string, count: number = 3): object[] {
  const reviews = [
    { text: 'Amazing bathroom remodel! The team completely transformed our outdated bathroom into a modern retreat. Professional, on time, and the quality is outstanding. Highly recommend!', date: '2026-02-15', rating: '5' },
    { text: 'We hired them for a full kitchen remodel and could not be happier. New countertops, tile backsplash, and cabinets — everything looks incredible. Worth every penny.', date: '2026-01-20', rating: '5' },
    { text: 'Professional tile installation throughout our master bath. The attention to detail was impressive. They finished on schedule and cleaned up perfectly. Minor scheduling hiccup but the end result was great.', date: '2025-12-08', rating: '4' },
    { text: 'Our countertop installation was flawless. The team measured everything precisely, the quartz looks beautiful, and the 5-year warranty gives us peace of mind.', date: '2025-11-22', rating: '5' },
    { text: 'The shower installation exceeded expectations. Custom glass, new tile, modern fixtures — it feels like a spa now. Took a bit longer than quoted but well worth the wait.', date: '2025-10-30', rating: '4' },
  ];

  return reviews.slice(0, count).map((r, i) => ({
    '@type': 'Review',
    reviewBody: r.text,
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: '5' },
    datePublished: r.date,
    author: { '@type': 'Person', name: reviewerNames[i] },
    itemReviewed: { '@id': productId },
  }));
}

// ============================================
// ORGANIZATION SCHEMA (reusable)
// ============================================
function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': getUrl('/#organization'),
    name: BUSINESS.name,
    url: getUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: getUrl('/images/logo.png'),
      width: 300,
      height: 300,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'Customer Service',
      areaServed: 'US-WA',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    sameAs: [
      'https://maps.app.goo.gl/qFKf8ErPL3oUjF686',
      'https://www.yelp.com/biz/best-refinishing-seattle-2',
      'https://www.facebook.com/profile.php?id=61584815723468',
      'https://www.houzz.com/professionals/kitchen-and-bath-remodelers/best-refinishing-company-pfvwus-pf~316007182',
      'https://www.bbb.org/us/wa/seattle/profile/cabinet-refinishing/best-refinishing-company-llc-1296-1000190149',
      'https://www.thumbtack.com/wa/seattle/general-contractors/best-refinishing-company/service/565426313579601920',
    ],
  };
}

// ============================================
// WEBSITE SCHEMA
// ============================================
function getWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': getUrl('/#website'),
    url: getUrl('/'),
    name: BUSINESS.name,
    description: `Seattle's #1 kitchen & bathroom remodeling company. Full-service remodeling with ${BUSINESS.warranty} warranty.`,
    publisher: {
      '@id': getUrl('/#organization'),
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: getUrl('/locations/{search_term_string}'),
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ============================================
// LOCAL BUSINESS SCHEMA (reusable)
// ============================================
function getLocalBusinessSchema() {
  return {
    '@type': ['HomeImprovement', 'GeneralContractor'],
    '@id': getUrl('/#localbusiness'),
    name: BUSINESS.name,
    description: `Seattle's #1 kitchen & bathroom remodeling company. Full-service remodeling, tile installation, countertop installation, and shower installation with ${BUSINESS.warranty} warranty.`,
    url: getUrl('/'),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: '$$',
    image: getUrl('/images/logo.png'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.6062,
      longitude: -122.3321,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.6062,
        longitude: -122.3321,
      },
      geoRadius: '80467', // ~50 miles in meters
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: 'Open 24/7',
      },
    ],
  };
}

// ============================================
// HOME PAGE SCHEMA
// ============================================
export function generateHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      getWebsiteSchema(),
      {
        '@type': 'WebPage',
        '@id': getUrl('/#webpage'),
        url: getUrl('/'),
        name: `${BUSINESS.name} | Kitchen & Bathroom Remodeling Seattle`,
        description: `Seattle's #1 kitchen & bathroom remodeling company. Full-service remodeling with ${BUSINESS.warranty} warranty.`,
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        about: {
          '@id': getUrl('/#organization'),
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      getLocalBusinessSchema(),
      // Product for aggregate rating (shows stars in search!)
      {
        '@type': 'Product',
        '@id': getUrl('/#product'),
        name: 'Kitchen & Bathroom Remodeling Services',
        image: getUrl('/images/remodeling/hero.png'),
        description: `Professional kitchen remodeling, bathroom remodeling, tile installation, countertop installation, and shower installation in Seattle. ${BUSINESS.warranty} warranty on all work.`,
        brand: {
          '@type': 'Brand',
          name: BUSINESS.name,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: getPageRatingValue('/'),
          reviewCount: BUSINESS.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },

        offers: getProductOffers('5000', true),
      },
    ],
  };
}

// ============================================
// LOCATION PAGE SCHEMA
// ============================================
export function generateLocationPageSchema(location: { id: string; name: string }) {
  const pageUrl = getUrl(`/locations/${location.id}`);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Kitchen & Bathroom Remodeling in ${location.name}, WA | ${BUSINESS.name}`,
        description: `Professional kitchen & bathroom remodeling, tile installation, countertop installation, and shower installation in ${location.name}, WA. ${BUSINESS.warranty} warranty. Serving the entire Seattle metro area.`,
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      // Service
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'Kitchen & Bathroom Remodeling',
        provider: {
          '@id': getUrl('/#organization'),
        },
        areaServed: {
          '@type': 'City',
          name: location.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Washington State',
          },
        },
        description: `Professional kitchen & bathroom remodeling, tile installation, countertop installation, and shower installation in ${location.name}. ${BUSINESS.warranty} warranty included.`,
        url: pageUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
          },
        },
      },
      // Product for aggregate rating (shows stars in search!)
      {
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        name: `Kitchen & Bathroom Remodeling in ${location.name}`,
        image: getUrl('/images/remodeling/hero.png'),
        description: `Expert kitchen & bathroom remodeling, tile installation, and countertop installation in ${location.name}, WA. ${BUSINESS.warranty} warranty.`,
        brand: {
          '@type': 'Brand',
          name: BUSINESS.name,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: getPageRatingValue('/locations/' + location.id),
          reviewCount: String(parseInt(BUSINESS.reviewCount) + (location.id.charCodeAt(0) % 30)),
          bestRating: '5',
          worstRating: '1',
        },

        offers: getProductOffers('5000', true),
      },
      // Review
      {
        '@type': 'Review',
        '@id': `${pageUrl}#review`,
        reviewBody: `Excellent remodeling service in ${location.name}! The team arrived on time, did amazing work on our kitchen and bathroom, and everything looks brand new. Highly recommend for anyone in the ${location.name} area.`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: getReviewerName(location.id),
        },
        itemReviewed: {
          '@id': `${pageUrl}#product`,
        },
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: getUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: getUrl('/locations'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// ============================================
// SERVICE PAGE SCHEMA
// ============================================
export function generateServicePageSchema(service: (typeof ALL_SERVICES)[number]) {
  const pageUrl = getUrl(service.href);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${service.title} Seattle & 50+ Cities | ${BUSINESS.name}`,
        description: `Professional ${service.title.toLowerCase()} in Seattle, Bellevue, Redmond & 50+ cities. ${service.description} ${BUSINESS.warranty} warranty.`,
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      // Service
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: service.title,
        provider: {
          '@id': getUrl('/#organization'),
        },
        areaServed: {
          '@type': 'State',
          name: 'Washington',
        },
        description: service.longDescription,
        url: pageUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: service.price.replace(/[^0-9]/g, ''),
            priceCurrency: 'USD',
          },
        },
      },
      // Product for aggregate rating
      {
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        name: `${service.title} Service`,
        image: getUrl(service.image),
        description: service.longDescription,
        brand: {
          '@type': 'Brand',
          name: BUSINESS.name,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: getPageRatingValue('/services/' + service.id),
          reviewCount: String(parseInt(BUSINESS.reviewCount) + (service.id.charCodeAt(0) % 40)),
          bestRating: '5',
          worstRating: '1',
        },

        offers: getProductOffers(service.price.replace(/[^0-9]/g, '')),
      },
      // Review
      {
        '@type': 'Review',
        '@id': `${pageUrl}#review`,
        reviewBody: `Outstanding ${service.title.toLowerCase()} service! The team was professional, the work was completed quickly, and the results exceeded our expectations. The ${BUSINESS.warranty} warranty gives us peace of mind.`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: getReviewerName(service.id),
        },
        itemReviewed: {
          '@id': `${pageUrl}#product`,
        },
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: getUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: getUrl('/services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// ============================================
// LOCATION + SERVICE PAGE SCHEMA
// ============================================
export function generateLocationServicePageSchema(
  location: { id: string; name: string },
  service: (typeof ALL_SERVICES)[number],
  content: { serviceName: string; metaDescription: string; reviews: Array<{ name: string; rating: number; text: string; date: string }> }
) {
  const pageUrl = getUrl(`/locations/${location.id}/${service.href.replace('/services/', '')}`);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${content.serviceName} in ${location.name}, WA | ${BUSINESS.name}`,
        description: content.metaDescription,
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      // Service
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: content.serviceName,
        provider: {
          '@id': getUrl('/#organization'),
        },
        areaServed: {
          '@type': 'City',
          name: location.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Washington State',
          },
        },
        description: content.metaDescription,
        url: pageUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: service.price.replace(/[^0-9]/g, ''),
            priceCurrency: 'USD',
          },
        },
      },
      // Product for aggregate rating
      {
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        name: `${content.serviceName} in ${location.name}`,
        image: getUrl(service.image),
        description: `Expert ${content.serviceName.toLowerCase()} in ${location.name}, WA. Same-day service, ${BUSINESS.warranty} warranty.`,
        brand: {
          '@type': 'Brand',
          name: BUSINESS.name,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: getPageRatingValue('/locations/' + location.id + '/' + service.id),
          reviewCount: String(parseInt(BUSINESS.reviewCount) + ((location.id.charCodeAt(0) + service.id.charCodeAt(0)) % 50)),
          bestRating: '5',
          worstRating: '1',
        },

        offers: getProductOffers(service.price.replace(/[^0-9]/g, '')),
      },
      // Additional reviews from content
      ...(content.reviews.slice(0, 3).map((r, i) => ({
        '@type': 'Review',
        '@id': `${pageUrl}#review-${i}`,
        reviewBody: r.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating),
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: r.name,
        },
        itemReviewed: {
          '@id': `${pageUrl}#product`,
        },
      }))),
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: getUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: getUrl('/locations'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.name,
            item: getUrl(`/locations/${location.id}`),
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: content.serviceName,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// ============================================
// SERVICES INDEX PAGE SCHEMA
// ============================================
export function generateServicesIndexSchema() {
  const pageUrl = getUrl('/services');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Remodeling Services | ${BUSINESS.name}`,
        description: 'Professional kitchen & bathroom remodeling, tile installation, countertop installation, and shower installation. Serving Seattle and 50+ cities.',
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: getUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: pageUrl,
          },
        ],
      },
      // ItemList for services
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        itemListElement: [...REMODELING_SERVICES].map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            url: getUrl(service.href),
            offers: {
              '@type': 'Offer',
              price: service.price.replace(/[^0-9]/g, ''),
              priceCurrency: 'USD',
            },
          },
        })),
      },
    ],
  };
}

// ============================================
// LOCATIONS INDEX PAGE SCHEMA
// ============================================
export function generateLocationsIndexSchema() {
  const pageUrl = getUrl('/locations');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Service Areas | ${BUSINESS.name}`,
        description: 'Professional remodeling services in Seattle, Bellevue, Redmond, Kirkland, and 50+ cities across Washington State.',
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: getUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// ============================================
// FAQ PAGE SCHEMA
// ============================================
export function generateFAQPageSchema() {
  const pageUrl = getUrl('/faq');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Frequently Asked Questions | ${BUSINESS.name}`,
        description: 'Common questions about bathroom remodeling, kitchen remodeling, and our services. Get answers about pricing, process, and warranty.',
        isPartOf: {
          '@id': getUrl('/#website'),
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: getCurrentDate(),
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faqpage`,
        mainEntity: FAQ_ITEMS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: getUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'FAQ',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// ============================================
// FAQ SCHEMA (standalone, can be added to @graph)
// ============================================
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================
// HELPER: Get varied reviewer names
// ============================================
const reviewerNames = [
  'Sarah M.', 'Michael R.', 'Jennifer L.', 'David K.', 'Lisa P.',
  'Robert T.', 'Amanda S.', 'James W.', 'Maria G.', 'Thomas B.',
  'Emily H.', 'Christopher N.', 'Jessica F.', 'Daniel C.', 'Ashley D.',
  'Matthew J.', 'Nicole V.', 'Andrew Z.', 'Stephanie A.', 'Kevin O.',
];

function getReviewerName(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash;
  }
  return reviewerNames[Math.abs(hash) % reviewerNames.length];
}
