# Remodeling Transition Design

## Goal
Transition best-refinishing.com from refinishing-only to remodeling-first site without losing SEO authority. Already ranking position 1.0 for remodeling keywords with 0 clicks — need to convert impressions into leads.

## Strategy: Soft Evolution
- Keep ALL existing URLs (zero 404s)
- Add new remodeling pages with high sitemap priority
- Update homepage to remodeling-first, refinishing-secondary
- Shift internal linking to remodeling pages
- Update schema.org to HomeImprovement contractor
- Demote refinishing in sitemap priority

## New Services & Pricing (Seattle market research)

| Service | Starting Price | Slug |
|---------|---------------|------|
| Bathroom Remodeling | From $7,900 | bathroom-remodeling |
| Kitchen Remodeling | From $25,000 | kitchen-remodeling |
| Tile Installation | From $7/sq ft | tile-installation |
| Countertop Installation | From $2,000 | countertop-installation |
| Shower Installation | From $2,000 | shower-installation |
| Bathtub Installation | From $2,400 | bathtub-installation |

Refinishing services remain as secondary with existing prices.

## Target Keywords
- bathroom remodeling seattle / near me
- kitchen remodeling seattle / near me
- bathroom remodel seattle wa
- kitchen remodel seattle wa
- seattle bathroom remodeling / kitchen remodeling
- tile installation seattle
- countertop installation seattle
- shower installation seattle
- bathtub installation seattle
- bathroom contractor seattle
- kitchen contractor seattle
- home kitchen remodeling / home bathroom remodeling

## New Pages (72 location+service combos + 6 service pages = 78 new pages)

Service pages:
- /services/bathroom-remodeling
- /services/kitchen-remodeling
- /services/tile-installation
- /services/countertop-installation
- /services/shower-installation
- /services/bathtub-installation

Location combo pages (12 primary cities × 6 services):
- /locations/{city}/bathroom-remodeling
- /locations/{city}/kitchen-remodeling
- /locations/{city}/tile-installation
- /locations/{city}/countertop-installation
- /locations/{city}/shower-installation
- /locations/{city}/bathtub-installation

## Changes to Existing Files

### 1. constants.ts
- Add REMODELING_SERVICES array (6 new services)
- Keep SERVICES as REFINISHING_SERVICES
- Create ALL_SERVICES = [...REMODELING_SERVICES, ...REFINISHING_SERVICES]
- Update BUSINESS tagline: "Seattle's #1 Kitchen & Bath Remodeling"
- Update NAV_ITEMS: remodeling services first
- Add REMODELING_REVIEWS (5 reviews for remodeling)
- Add REMODELING_PROCESS_STEPS
- Add REMODELING_FAQ_ITEMS

### 2. layout.tsx
- Title: "Kitchen & Bathroom Remodeling Seattle | Best Remodeling & Refinishing"
- Description: remodeling-first
- Keywords: remodeling keywords first
- Schema: HomeImprovement type

### 3. Homepage (page.tsx)
- Hero: "Kitchen & Bathroom Remodeling in Seattle"
- Services section: 6 remodeling cards prominently
- "Also Offering" section: refinishing as budget alternative
- Reviews: mix of remodeling + refinishing reviews

### 4. Header.tsx
- Services dropdown: remodeling first, divider, refinishing below
- Logo text update if needed

### 5. Footer.tsx
- Services links: remodeling first
- Internal linking to remodeling pages

### 6. sitemap.ts
- New remodeling pages with 0.96-0.98 priority
- Demote refinishing pages to 0.70-0.75

### 7. schema.ts
- Add remodeling service schemas
- Update business type to HomeImprovement
- Update OfferCatalog

### 8. locationServiceContent.ts
- Add content generation for 6 new remodeling services
- Hero variations, descriptions, benefits, FAQs for each

### 9. Existing refinishing pages (services/[slug])
- Add banner: "Looking for a full remodel? See our [Remodeling Services]"
- Internal link to corresponding remodeling page

### 10. Existing location pages
- Show remodeling services first, refinishing second

### 11. services/page.tsx (services index)
- Remodeling section first, refinishing section second

## Sitemap Priority Structure (New)
```
Homepage:                          1.0
Contact:                           0.98
Remodeling service pages:          0.96-0.98
Remodeling location combos:        0.91-0.95
Location index:                    0.97
Location pages:                    0.85-0.95
Refinishing service pages:         0.72-0.75
Refinishing location combos:       0.65-0.70
Blog:                              0.82-0.87
Static pages:                      0.70-0.92
```

## Schema.org Updates
- @type: ["HomeImprovement", "GeneralContractor"]
- name: "Best Remodeling & Refinishing"
- description: remodeling-first
- OfferCatalog: remodeling services first
- areaServed: same 50 cities
- Add remodeling-specific reviews to schema

## Internal Linking Strategy
- Every refinishing page → corresponding remodeling page CTA
- Homepage → all remodeling service pages
- Location pages → remodeling combos first
- Footer → remodeling services prominently
- Blog posts → add remodeling CTAs
- Cross-link between remodeling services (e.g., bathroom remodel → tile installation)
