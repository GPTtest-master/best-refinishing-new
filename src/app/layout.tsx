import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import { BUSINESS } from "@/lib/constants";
import { generateHomePageSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/SchemaScript";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          href="/images/hero-bathroom.webp"
          type="image/webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-bathroom-mob.webp"
          type="image/webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        {/* Google Ads & GA4 - defer to not block rendering */}
        <script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-17663809026" />
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
        {/* Schema.org JSON-LD - Enhanced @graph structure */}
        <SchemaScript schema={generateHomePageSchema()} />
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
        <SpeedInsights />
      </body>
    </html>
  );
}
