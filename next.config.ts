import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Experimental optimizations
  experimental: {
    optimizeCss: true, // Inline critical CSS
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Compression
  compress: true,

  // Performance optimizations
  poweredByHeader: false,

  // Strict mode for better performance debugging
  reactStrictMode: true,

  // 301 Redirects: Refinishing → Remodeling
  async redirects() {
    const serviceRedirects = [
      { source: '/cost-calculator', destination: '/remodeling' },
      { source: '/services/bathtub-refinishing', destination: '/services/bathtub-installation' },
      { source: '/services/shower-refinishing', destination: '/services/shower-installation' },
      { source: '/services/tile-refinishing', destination: '/services/tile-installation' },
      { source: '/services/sink-refinishing', destination: '/services/bathroom-remodeling' },
      { source: '/services/countertop-refinishing', destination: '/services/countertop-installation' },
      { source: '/services/repair', destination: '/services/bathroom-remodeling' },
    ];

    const locationServiceRedirects = [
      { source: '/locations/:city/bathtub-refinishing', destination: '/locations/:city/bathtub-installation' },
      { source: '/locations/:city/shower-refinishing', destination: '/locations/:city/shower-installation' },
      { source: '/locations/:city/tile-refinishing', destination: '/locations/:city/tile-installation' },
      { source: '/locations/:city/sink-refinishing', destination: '/locations/:city/bathroom-remodeling' },
      { source: '/locations/:city/countertop-refinishing', destination: '/locations/:city/countertop-installation' },
      { source: '/locations/:city/repair', destination: '/locations/:city/bathroom-remodeling' },
    ];

    const blogRedirects = [
      { source: '/blog/bathtub-refinishing-vs-replacement-cost-seattle', destination: '/blog/walk-in-shower-vs-bathtub-seattle' },
      { source: '/blog/how-long-does-bathtub-refinishing-last', destination: '/services/bathtub-installation' },
    ];

    return [
      ...serviceRedirects.map(r => ({ ...r, permanent: true })),
      ...locationServiceRedirects.map(r => ({ ...r, permanent: true })),
      ...blogRedirects.map(r => ({ ...r, permanent: true })),
    ];
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
