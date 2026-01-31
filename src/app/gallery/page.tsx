import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import GalleryPageClient from './GalleryPageClient';

export const metadata: Metadata = {
  title: `Project Gallery - Before & After Photos | ${BUSINESS.name}`,
  description: `View stunning before and after photos of our bathtub, shower, tile, and sink refinishing projects in Seattle. ${BUSINESS.projectsCompleted} completed projects. ${BUSINESS.rating} star rating.`,
  keywords: 'bathtub refinishing photos, before after refinishing, reglazing gallery seattle, bathroom renovation photos',
  alternates: {
    canonical: `${BUSINESS.website}/gallery`,
  },
  openGraph: {
    title: `Project Gallery - Before & After | ${BUSINESS.name}`,
    description: `View stunning before and after photos of our refinishing projects.`,
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
    images: ['/images/optimized/bathtub-3-after.webp'],
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

export default function GalleryPage() {
  return <GalleryPageClient />;
}
