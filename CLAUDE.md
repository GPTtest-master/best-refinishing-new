# Best Refinishing — Seattle Website

## Project Overview
Modern conversion-focused website for Best Refinishing — professional bathtub, tile, sink, and countertop refinishing company in Seattle and surrounding areas.

## Tech Stack
- **Framework:** Next.js 16 + TypeScript
- **Styling:** Tailwind CSS
- **Router:** App Router (src/app/)
- **Deploy:** Ready for Vercel

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Main layout with Header/Footer + JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   ├── api/
│   │   └── contact/route.ts # Contact form API
│   ├── services/
│   │   └── [slug]/page.tsx # Dynamic service pages (6 services)
│   ├── locations/
│   │   └── [city]/page.tsx # Dynamic location pages (12 cities)
│   ├── process/page.tsx    # 6-step process page
│   ├── faq/page.tsx        # FAQ with schema markup
│   ├── contact/page.tsx    # Contact form page
│   └── commercial/page.tsx # Property managers page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation, logo, CTA
│   │   └── Footer.tsx      # Footer with contact info
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with form + before/after slider
│   │   ├── Services.tsx    # 6 services with prices
│   │   ├── Gallery.tsx     # Before/After gallery
│   │   ├── WhyChooseUs.tsx # Benefits + team section
│   │   └── Reviews.tsx     # Customer reviews
│   └── ui/
│       ├── QuickForm.tsx   # Lead form
│       └── FloatingCTA.tsx # Floating call button
├── lib/
│   └── constants.ts        # All business data, services, locations
└── public/
    └── images/             # Images from old site
```

## Design System
- **Primary Color:** #0b66b3 (blue)
- **Accent Color:** amber-500 (orange) — for CTA buttons
- **Style:** Light, clean, premium
- **Font:** Inter

## Key Features
- Conversion-focused Hero with instant quote form
- Before/After slider for work demonstration
- Minimal triggers on mobile
- Floating call button appears on scroll
- Full SEO optimization with JSON-LD schemas
- Dynamic sitemap and robots.txt
- 12 location pages for local SEO
- 6 service pages with unique content

## Business Info (from constants.ts)
- **Phone:** (206) 786-9915
- **Website:** best-refinishing.com
- **Location:** Seattle, WA and surrounding areas
- **Hours:** Mon-Sun 7AM-7PM

## Services & Prices
1. Bathtub Refinishing — from $350
2. Tile & Grout Refinishing — from $400
3. Shower Refinishing — from $450
4. Sink Refinishing — from $200
5. Countertop Refinishing — from $350
6. Chip & Crack Repair — from $100

## Locations (Local SEO)
Seattle, Bellevue, Redmond, Kirkland, Bothell, Renton, Kent, Federal Way, Tacoma, Lynnwood, Sammamish, Issaquah

## Commands
```bash
# Run dev server
npm run dev

# Production build
npm run build

# Start production build
npm start
```

## TODO (Next Steps)
- [ ] Add real team photos to WhyChooseUs section
- [ ] Connect form API to email service (SendGrid/Resend)
- [ ] Add SMS notifications (Twilio)
- [ ] Connect Google Analytics / Tag Manager
- [ ] Add Google verification code
- [ ] Deploy to Vercel
- [ ] Set up domain DNS

## Changelog
- **v0.1** — Initial structure, Hero with form, Services, Gallery, Reviews, WhyChooseUs
- **v0.2** — Full rebuild with all pages, SEO optimization, location pages, service pages
- Original site: ~/seattle-bestrefinishing-main/ (static HTML)
