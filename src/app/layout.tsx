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
    default: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    template: `%s | ${BUSINESS.name} Seattle`,
  },
  description: `Seattle's #1 kitchen & bathroom remodeling company. Full remodels, tile installation, countertops, showers, and refinishing. ${BUSINESS.warranty} warranty. Licensed & insured. Free estimates: ${BUSINESS.phone}`,
  keywords: "kitchen remodeling seattle, bathroom remodeling seattle, bathroom remodel seattle wa, kitchen remodel seattle, tile installation seattle, countertop installation seattle, shower installation seattle, bathtub installation seattle, bathroom renovation seattle, kitchen renovation seattle, bathroom contractor seattle, kitchen contractor seattle, home remodeling seattle, bathtub refinishing seattle",
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
    title: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    description: "Seattle's #1 kitchen & bathroom remodeling. Full remodels, tile, countertops, showers. Licensed & insured. Free estimates!",
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
    title: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    description: "Seattle's #1 kitchen & bathroom remodeling company. Free estimates!",
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
          href="/images/remodeling/hero-remodeling.png"
          type="image/png"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/remodeling/hero-remodeling.png"
          type="image/png"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
{/* Google Ads & GA4 scripts moved to body with lazyOnload */}
        {/* Schema.org JSON-LD - Enhanced @graph structure */}
        <SchemaScript schema={generateHomePageSchema()} />
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
        <ExitIntentPopup />
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
              'phone_conversion_number': '+1 (206) 786-9915'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
