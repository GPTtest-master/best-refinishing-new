# Best Refinishing — Seattle Website

## Project Overview
Modern conversion-focused website for Best Refinishing — professional bathtub, tile, sink, and countertop refinishing company in Seattle and surrounding areas.

**GitHub:** https://github.com/GPTtest-master/best-refinishing-new
**Status:** Ready for Vercel deployment

---

## Tech Stack
- **Framework:** Next.js 16 + TypeScript
- **Styling:** Tailwind CSS
- **Router:** App Router (src/app/)
- **Hosting:** Vercel (recommended)

---

## Site Statistics (as of Jan 10, 2025)
- **Total Pages:** 149 static pages
- **Location Pages:** 50 (12 primary + 38 additional areas)
- **Location+Service Pages:** 72 (12 cities × 6 services)
- **Service Pages:** 6
- **Blog Posts:** 2
- **Static Pages:** 15 (home, contact, faq, process, privacy, terms, etc.)

---

## Business Info
- **Phone:** (206) 786-9915
- **Website:** https://www.best-refinishing.com
- **Email:** office@best-refinishing.com
- **Hours:** Open 24/7
- **Rating:** 4.98 (87 reviews)

---

## Services & Prices (Updated Jan 10, 2025)
| Service | Price |
|---------|-------|
| Bathtub Refinishing | from $700 |
| Sink Refinishing | from $450 |
| Countertop Refinishing | from $600 |
| Shower Refinishing | from $900 |
| Tub + Surrounding Walls | from $900 |
| Tile & Grout Refinishing | from $400 |
| Chip & Crack Repair | from $350 |

---

## Google Tracking (Configured)
| Service | ID | Status |
|---------|-----|--------|
| Google Ads | `AW-17663809026` | ✅ Installed |
| GA4 | `G-TGTB5S47RN` | ✅ Installed |
| Phone Tracking | `AW-17663809026/FtVGCJjCjtIbEIKs4eZB` | ✅ Installed |
| Form Conversion | `FORM_CONVERSION_LABEL` | ⚠️ Need label |

**Phone for tracking:** +1 (206) 786-9915

---

## Social Links (in Schema)
- Google Maps: https://maps.app.goo.gl/qFKf8ErPL3oUjF686
- Yelp: https://www.yelp.com/biz/best-refinishing-seattle-2
- Facebook: https://www.facebook.com/profile.php?id=61584815723468
- Houzz: https://www.houzz.com/professionals/kitchen-and-bath-remodelers/best-refinishing-company-pfvwus-pf~316007182
- BBB: https://www.bbb.org/us/wa/seattle/profile/cabinet-refinishing/best-refinishing-company-llc-1296-1000190149
- Thumbtack: https://www.thumbtack.com/wa/seattle/general-contractors/best-refinishing-company/service/565426313579601920
- Apple Maps: (configured)

---

## SEO Configuration
- **robots.ts:** All AI crawlers allowed (GPTBot, ChatGPT, Claude, Perplexity, etc.)
- **sitemap.ts:** 77 URLs with optimized priorities
- **Schema.org:** LocalBusiness, Organization, WebSite, Reviews (5), OfferCatalog
- **areaServed:** 30 cities in schema markup

---

## Locations Covered (50 total)

**Primary (12):**
Seattle, Bellevue, Redmond, Kirkland, Bothell, Renton, Kent, Federal Way, Tacoma, Lynnwood, Sammamish, Issaquah

**Additional Areas (38):**
Shoreline, Burien, Tukwila, SeaTac, Mercer Island, Woodinville, Kenmore, Lake Forest Park, Mountlake Terrace, Edmonds, Mukilteo, Everett, Auburn, Covington, Maple Valley, Newcastle, Clyde Hill, Medina, Hunts Point, Yarrow Point, Des Moines, Normandy Park, White Center, Lake City, Ballard, West Seattle, Capitol Hill, Queen Anne, Fremont, Greenwood, University District, Columbia City, Beacon Hill, Georgetown, Rainier Valley, Northgate, Magnolia, Alki

---

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production
```

---

## TODO (Next Session)

### Priority 1 — Complete Tracking Setup
- [ ] Get Form Conversion Label from Google Ads (for /thank-you page)
- [ ] Update `src/app/thank-you/page.tsx` with real conversion label
- [ ] Get webhook URL for Google Sheets integration
- [ ] Add Search Console verification meta tag

### Priority 2 — Deploy
- [ ] Deploy to Vercel
- [ ] Connect custom domain (best-refinishing.com)
- [ ] Verify all tracking works in production

### Priority 3 — Form Integration
- [ ] Configure `NEXT_PUBLIC_FORM_WEBHOOK_URL` env variable
- [ ] Test form submission → Google Sheets flow
- [ ] Verify qualified leads still work as primary conversion

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Google tags, Schema.org, metadata |
| `src/app/thank-you/page.tsx` | Conversion tracking page |
| `src/components/ui/QuickForm.tsx` | Lead form with redirect |
| `src/lib/constants.ts` | All business data, locations, services |
| `src/app/sitemap.ts` | Dynamic sitemap (77 URLs) |
| `src/app/robots.ts` | AI crawler rules |

---

## Environment Variables Needed (for Vercel)
```
NEXT_PUBLIC_FORM_WEBHOOK_URL=<your-google-sheets-webhook>

# Twilio SMS (for lead notifications)
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_PHONE_NUMBER=<your-twilio-phone-number>
BUSINESS_PHONE=+12067869915
```

---

## Changelog
- **2025-01-06** — Services section redesign (bigger images, no prices), Twilio SMS integration
- **2025-01-05** — Full SEO optimization, 50 locations, Google tracking, Thank You page
- **v0.2** — Full rebuild with all pages, SEO optimization
- **v0.1** — Initial structure

---

## Notes for Next Session
1. User has existing Google Ads campaigns with qualified leads as primary conversion
2. DON'T change primary conversion — add new Thank You page conversion as SECONDARY
3. Phone tracking already configured on old site — same ID transferred
4. Domain currently on AWS Amplify — recommend Vercel for better Next.js support
