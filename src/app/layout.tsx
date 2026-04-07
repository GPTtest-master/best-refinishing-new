import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import { BUSINESS } from "@/lib/constants";
import { generateHomePageSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/SchemaScript";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HashScrollHandler from "@/components/ui/HashScrollHandler";

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
    default: `Seattle Kitchen & Bathroom Remodeling ★${BUSINESS.rating} | Free Estimates | ${BUSINESS.phone}`,
    template: `%s | Remodeling Pros Seattle`,
  },
  description: `Top-rated kitchen & bathroom remodeling in Seattle. ${BUSINESS.projectsCompleted} projects completed. ${BUSINESS.rating}★ rating. Licensed & insured. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone} for FREE estimate today!`,
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
    title: `Seattle Kitchen & Bathroom Remodeling ★${BUSINESS.rating} | Free Estimates`,
    description: `${BUSINESS.projectsCompleted} projects. ${BUSINESS.rating}★ rated. Kitchen & bath remodeling Seattle. Licensed, insured, ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}!`,
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/remodeling/kitchen-showcase-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional kitchen & bathroom remodeling in Seattle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    description: "Seattle's #1 kitchen & bathroom remodeling company. Free estimates!",
    images: ['/images/remodeling/kitchen-showcase-1.jpg'],
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

// Schema is now generated via generateHomePageSchema() from @/lib/schema

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical hero image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/remodeling/hero.png"
          type="image/png"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/remodeling/hero.png"
          type="image/png"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
{/* Google Ads & GA4 scripts moved to body with lazyOnload */}
        {/* Schema.org JSON-LD - Enhanced @graph structure */}
        {/* Homepage schema moved to page.tsx to avoid duplicating on all pages */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <HashScrollHandler />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        {/* <ExitIntentPopup /> */}
        <SpeedInsights />

        {/* Google Ads & GA4 - lazyOnload for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17663809026"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17663809026');
            gtag('config', 'G-TGTB5S47RN');
            gtag('config', 'AW-17663809026/FtVGCJjCjtIbEIKs4eZB', {
              'phone_conversion_number': '+1 (206) 222-5159'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
