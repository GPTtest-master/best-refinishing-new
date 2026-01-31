import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: `Contact Us - Get Free Quote | ${BUSINESS.name}`,
  description: `Contact ${BUSINESS.name} for free bathtub, shower, tile, and countertop refinishing quotes in Seattle & 50+ cities. Call ${BUSINESS.phone} or fill out our form. We respond ${BUSINESS.responseTime.toLowerCase()}!`,
  keywords: 'contact best refinishing, free refinishing quote seattle, bathtub refinishing quote, bathroom refinishing estimate',
  alternates: {
    canonical: `${BUSINESS.website}/contact`,
  },
  openGraph: {
    title: `Contact Us - Get Free Quote | ${BUSINESS.name}`,
    description: `Get a free refinishing quote. We respond ${BUSINESS.responseTime.toLowerCase()}!`,
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
  return <ContactPageClient />;
}
