import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import GalleryPageClient from './GalleryPageClient';

export const metadata: Metadata = {
  title: `Project Gallery - Before & After Photos | ${BUSINESS.name}`,
  description: `View stunning before and after photos of our kitchen & bathroom remodeling and refinishing projects in Seattle. ${BUSINESS.projectsCompleted} completed projects. ${BUSINESS.rating} star rating.`,
  keywords: 'kitchen remodeling photos seattle, bathroom remodel before after, remodeling gallery seattle, bathroom renovation photos, tile installation gallery',
  alternates: {
    canonical: `${BUSINESS.website}/gallery`,
  },
  openGraph: {
    title: `Project Gallery - Before & After | ${BUSINESS.name}`,
    description: `View stunning before and after photos of our remodeling & refinishing projects.`,
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
  return (
    <>
      <GalleryPageClient />
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
                name: 'Gallery',
                item: `${BUSINESS.website}/gallery`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
