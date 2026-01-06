import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b66b3',
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: `Bathtub Refinishing Seattle | ${BUSINESS.name} | #1 Reglazing Experts`,
    template: `%s | ${BUSINESS.name} Seattle`,
  },
  description: `Seattle's #1 rated bathtub & tile refinishing. Save $5,000+ vs replacement. Done in 1 day, ${BUSINESS.warranty} warranty. Licensed & insured. Free quotes: ${BUSINESS.phone}`,
  keywords: "bathtub refinishing seattle, bathtub reglazing seattle, tub resurfacing seattle, tile refinishing, shower refinishing, countertop refinishing, bathroom renovation seattle, reglazing near me, bathtub repair seattle, seattle tub refinishing cost",
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
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
  openGraph: {
    title: `Bathtub Refinishing Seattle | ${BUSINESS.name}`,
    description: "Transform your bathroom in 1 day. Save $5,000+ vs replacement. Professional refinishing with 5-year warranty. Free quotes!",
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/bathtub-3-after.webp',
        width: 1200,
        height: 630,
        alt: 'Professional bathtub refinishing in Seattle - Before and After',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Bathtub Refinishing Seattle | ${BUSINESS.name}`,
    description: "Seattle's #1 rated bathtub & tile refinishing. Save $5,000+ vs replacement. Free quotes!",
    images: ['/images/bathtub-3-after.webp'],
  },
  alternates: {
    canonical: BUSINESS.website,
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Seattle',
    'geo.position': '47.6062;-122.3321',
    'ICBM': '47.6062, -122.3321',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS.website,
  name: BUSINESS.name,
  description: 'Seattle\'s #1 rated bathtub, tile, shower, and countertop refinishing company. Professional reglazing services with 5-year warranty. Save $5,000+ vs replacement.',
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: `${BUSINESS.website}/images/logo-new.svg`,
  logo: `${BUSINESS.website}/images/logo-new.svg`,
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
  areaServed: [
    { '@type': 'City', name: 'Seattle', '@id': 'https://en.wikipedia.org/wiki/Seattle' },
    { '@type': 'City', name: 'Bellevue' },
    { '@type': 'City', name: 'Redmond' },
    { '@type': 'City', name: 'Kirkland' },
    { '@type': 'City', name: 'Bothell' },
    { '@type': 'City', name: 'Renton' },
    { '@type': 'City', name: 'Kent' },
    { '@type': 'City', name: 'Tacoma' },
    { '@type': 'City', name: 'Lynnwood' },
    { '@type': 'City', name: 'Sammamish' },
    { '@type': 'City', name: 'Issaquah' },
    { '@type': 'City', name: 'Federal Way' },
    { '@type': 'City', name: 'Shoreline' },
    { '@type': 'City', name: 'Burien' },
    { '@type': 'City', name: 'Tukwila' },
    { '@type': 'City', name: 'SeaTac' },
    { '@type': 'City', name: 'Mercer Island' },
    { '@type': 'City', name: 'Woodinville' },
    { '@type': 'City', name: 'Kenmore' },
    { '@type': 'City', name: 'Lake Forest Park' },
    { '@type': 'City', name: 'Mountlake Terrace' },
    { '@type': 'City', name: 'Edmonds' },
    { '@type': 'City', name: 'Mukilteo' },
    { '@type': 'City', name: 'Everett' },
    { '@type': 'City', name: 'Auburn' },
    { '@type': 'City', name: 'Covington' },
    { '@type': 'City', name: 'Maple Valley' },
    { '@type': 'City', name: 'Newcastle' },
    { '@type': 'City', name: 'Des Moines' },
    { '@type': 'City', name: 'Normandy Park' },
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Refinishing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bathtub Refinishing',
          description: 'Professional bathtub reglazing and resurfacing. Restore your tub to like-new condition in just one day.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '700',
          priceCurrency: 'USD',
          minPrice: '700',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sink Refinishing',
          description: 'Kitchen and bathroom sink refinishing. Remove chips, stains, and restore to showroom condition.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '400',
          priceCurrency: 'USD',
          minPrice: '400',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Countertop Refinishing',
          description: 'Transform laminate, tile, or cultured marble countertops to modern finishes.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '550',
          priceCurrency: 'USD',
          minPrice: '550',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shower Refinishing',
          description: 'Full shower enclosure restoration including walls, floor, and fixtures.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '900',
          priceCurrency: 'USD',
          minPrice: '900',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tub with Surrounding Walls',
          description: 'Complete bathtub and surrounding wall refinishing package.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '850',
          priceCurrency: 'USD',
          minPrice: '850',
        },
      },
    ],
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Sarah M.',
      },
      reviewBody: 'Absolutely amazing work! They transformed my old, stained bathtub into something that looks brand new. The team was professional, on time, and cleaned up everything after. Highly recommend!',
      datePublished: '2024-12-20',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Michael R.',
      },
      reviewBody: "Saved us thousands compared to replacing the tub. The finish looks incredible and they guaranteed their work for 5 years. Best money we've spent on home improvement.",
      datePublished: '2024-12-05',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Jennifer L.',
      },
      reviewBody: "Quick response, fair pricing, and excellent results. They fixed chips in my kitchen sink and countertop - you can't even tell there was ever any damage. Will use again!",
      datePublished: '2024-12-12',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'David K.',
      },
      reviewBody: 'Our shower looked terrible with all the grout stains and yellowed tiles. After their refinishing, it looks like we installed a completely new shower. Incredible transformation!',
      datePublished: '2024-12-01',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Lisa T.',
      },
      reviewBody: 'Professional from start to finish. They explained the whole process, gave us an honest quote, and delivered exactly what they promised. The bathtub looks beautiful!',
      datePublished: '2024-11-15',
    },
  ],
  sameAs: [
    'https://www.google.com/maps?cid=qFKf8ErPL3oUjF686',
    'https://maps.app.goo.gl/qFKf8ErPL3oUjF686',
    'https://www.yelp.com/biz/best-refinishing-seattle-2',
    'https://www.facebook.com/profile.php?id=61584815723468',
    'https://www.houzz.com/professionals/kitchen-and-bath-remodelers/best-refinishing-company-pfvwus-pf~316007182',
    'https://www.bbb.org/us/wa/seattle/profile/cabinet-refinishing/best-refinishing-company-llc-1296-1000190149',
    'https://www.thumbtack.com/wa/seattle/general-contractors/best-refinishing-company/service/565426313579601920',
    'https://maps.apple.com/place?address=701%205th%20Ave,%20Seattle,%20WA%2098104,%20United%20States&coordinate=47.604527,-122.330615&name=Best%20Refinishing&place-id=I60ACEF09DBE17D71&map=explore',
  ],
};

// Organization schema for broader visibility
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS.name,
  url: BUSINESS.website,
  logo: `${BUSINESS.website}/images/logo-new.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phone,
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: 'US-WA',
  },
};

// WebSite schema for search box eligibility
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS.name,
  url: BUSINESS.website,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BUSINESS.website}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Ads & GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17663809026" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17663809026');
              gtag('config', 'G-TGTB5S47RN');
              gtag('config', 'AW-17663809026/FtVGCJjCjtIbEIKs4eZB', {
                'phone_conversion_number': '+1 (206) 786-9915'
              });
            `,
          }}
        />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
