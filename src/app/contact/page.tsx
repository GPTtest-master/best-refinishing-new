import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Free Remodeling Estimate Seattle | Kitchen & Bathroom Pros',
  },
  description: `Schedule a kitchen or bathroom remodeling estimate in Seattle. Licensed remodelers, itemized scope review, ${BUSINESS.warranty} warranty, and fast response.`,
  keywords: 'contact remodeling pros seattle, free remodeling estimate, kitchen remodeling quote seattle, bathroom remodeling estimate, seattle contractor',
  alternates: {
    canonical: `${BUSINESS.website}/contact`,
  },
  openGraph: {
    title: 'Free Remodeling Estimate Seattle | Kitchen & Bathroom Pros',
    description: 'Schedule a kitchen or bathroom remodeling estimate with licensed Seattle-area remodelers.',
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
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

export default function ContactPage() {
  return (
    <>
      <ContactPageClient />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: BUSINESS.website,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: `${BUSINESS.website}/contact`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
