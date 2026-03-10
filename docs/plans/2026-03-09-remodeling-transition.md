# Remodeling Transition Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transition best-refinishing.com from refinishing-only to remodeling-first website without losing SEO authority, adding 78 new remodeling pages while preserving all existing URLs.

**Architecture:** Add REMODELING_SERVICES to constants.ts alongside existing SERVICES (renamed to REFINISHING_SERVICES). Update all UI components to show remodeling first. Add remodeling content generation to locationServiceContent.ts. Update schema.org to HomeImprovement type.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, App Router

---

### Task 1: Update constants.ts — Add remodeling services and reviews

**Files:**
- Modify: `src/lib/constants.ts`

**Step 1: Add REMODELING_SERVICES array after existing SERVICES**

Add this code after the existing `SERVICES` array (line 118) and before `LOCATIONS`:

```typescript
// Remodeling Services (PRIMARY)
export const REMODELING_SERVICES = [
  {
    id: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    shortTitle: 'Bathroom',
    subtitle: 'Full Remodel',
    description: 'Complete bathroom transformations — from design to installation. New tile, vanity, shower, fixtures, and more. Turn your outdated bathroom into a modern retreat.',
    longDescription: 'Our full-service bathroom remodeling covers everything: demolition, plumbing, electrical, tile installation, vanity and countertop installation, shower/tub replacement, fixtures, and finishing. We handle permits and coordinate all trades for a stress-free renovation experience.',
    features: ['Full design & build', 'Licensed & permitted', 'All trades in-house', 'Porcelain, Marble, Quartz'],
    price: 'From $7,900',
    savings: 'Complete Transform',
    popular: true,
    image: '/images/hero-bathroom.webp',
    imagePosition: 'center',
    imageScale: 1,
    href: '/services/bathroom-remodeling',
  },
  {
    id: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    shortTitle: 'Kitchen',
    subtitle: 'Full Remodel',
    description: 'Transform your kitchen with new cabinets, countertops, tile, fixtures, and layout updates. From minor refreshes to complete gut renovations.',
    longDescription: 'Our kitchen remodeling services include cabinet installation, countertop fabrication and installation, tile backsplash, flooring, plumbing, electrical upgrades, and custom storage solutions. We work with you on design and material selection to create your dream kitchen.',
    features: ['Custom cabinetry options', 'Countertop installation', 'Backsplash & flooring', 'Plumbing & electrical'],
    price: 'From $25,000',
    savings: 'Dream Kitchen',
    popular: true,
    image: '/images/hero-bathroom.webp',
    imagePosition: 'center',
    imageScale: 1,
    href: '/services/kitchen-remodeling',
  },
  {
    id: 'tile-installation',
    title: 'Tile Installation',
    shortTitle: 'Tile',
    subtitle: 'Professional Install',
    description: 'Expert tile installation for floors, walls, showers, and backsplashes. Ceramic, porcelain, marble, and natural stone — precision installation that lasts.',
    longDescription: 'Professional tile installation for kitchens, bathrooms, and living areas. We work with ceramic, porcelain, marble, travertine, and all natural stone. Our services include floor tile, wall tile, shower tile, backsplash installation, and custom mosaic work.',
    features: ['All tile types', 'Floor & wall installation', 'Shower & backsplash', 'Custom patterns'],
    price: 'From $7/sq ft',
    savings: 'Expert Install',
    popular: false,
    image: '/images/optimized/tiles-bg.webp',
    imagePosition: 'center',
    imageScale: 1,
    href: '/services/tile-installation',
  },
  {
    id: 'countertop-installation',
    title: 'Countertop Installation',
    shortTitle: 'Countertop',
    subtitle: 'Premium Surfaces',
    description: 'Professional countertop installation — granite, quartz, marble, and solid surface. Precision measurement, fabrication, and seamless installation.',
    longDescription: 'We install kitchen and bathroom countertops in granite, quartz, marble, quartzite, and solid surface materials. Our service includes template measurement, fabrication coordination, old countertop removal, and professional installation with undermount sink cutouts.',
    features: ['Granite & quartz', 'Marble & quartzite', 'Precision templating', 'Sink cutouts included'],
    price: 'From $2,000',
    savings: 'Premium Quality',
    popular: false,
    image: '/images/optimized/axmnd_httpss.mj.runGBOjqX76P3k______--ar_7758_--profile_klaqj_95c0c2cf-9d33-480a-98c4-a1e1b24e1c38_3.webp',
    imagePosition: 'center',
    imageScale: 1,
    href: '/services/countertop-installation',
  },
  {
    id: 'shower-installation',
    title: 'Shower Installation',
    shortTitle: 'Shower',
    subtitle: 'Custom Showers',
    description: 'Custom shower installation and replacement. Walk-in showers, tub-to-shower conversions, glass enclosures, and complete shower remodels.',
    longDescription: 'From basic shower replacements to custom walk-in showers, we handle every aspect: demolition, waterproofing, tile installation, glass door fitting, fixtures, and finishing. We also do tub-to-shower conversions and curbless shower installations for accessibility.',
    features: ['Walk-in showers', 'Tub-to-shower conversion', 'Glass enclosures', 'Waterproof systems'],
    price: 'From $2,000',
    savings: 'Custom Design',
    popular: false,
    image: '/images/optimized/shower-bg.webp',
    imagePosition: 'center',
    imageScale: 1,
    href: '/services/shower-installation',
  },
  {
    id: 'bathtub-installation',
    title: 'Bathtub Installation',
    shortTitle: 'Bathtub',
    subtitle: 'New Tub Install',
    description: 'Professional bathtub installation and replacement. Freestanding, alcove, drop-in, and soaking tubs. Includes plumbing, surround, and finishing.',
    longDescription: 'Complete bathtub installation services including removal of old tub, plumbing modifications, new tub installation, surround installation, waterproofing, and finishing. We install freestanding, alcove, drop-in, corner, and soaking tubs from all major manufacturers.',
    features: ['All tub styles', 'Plumbing included', 'Surround installation', 'Waterproofing'],
    price: 'From $2,400',
    savings: 'Fresh Start',
    popular: false,
    image: '/images/optimized/baztub-after.webp',
    imagePosition: 'center 70%',
    imageScale: 1,
    href: '/services/bathtub-installation',
  },
] as const;

// Refinishing Services (SECONDARY — keep for SEO authority, existing URLs)
export const REFINISHING_SERVICES = SERVICES;

// All services combined — remodeling first
export const ALL_SERVICES = [...REMODELING_SERVICES, ...REFINISHING_SERVICES] as const;
```

**Step 2: Update BUSINESS object**

Change lines 3-4:
```typescript
  name: 'Best Remodeling & Refinishing',
  tagline: 'Seattle Kitchen & Bath Remodeling Experts',
```

**Step 3: Add remodeling reviews**

Add after the existing REVIEWS array:
```typescript
export const REMODELING_REVIEWS = [
  {
    name: 'Mark P.',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Complete bathroom remodel done in under 2 weeks. New tile, vanity, shower — everything looks incredible. The team was professional and kept us informed throughout. Highly recommend for any remodeling project!',
    date: '1 week ago',
    service: 'Bathroom Remodeling',
  },
  {
    name: 'Karen W.',
    location: 'Bellevue, WA',
    rating: 5,
    text: 'They transformed our dated kitchen into a modern showpiece. New countertops, backsplash, and cabinet refresh. The attention to detail was outstanding and the price was very competitive.',
    date: '2 weeks ago',
    service: 'Kitchen Remodeling',
  },
  {
    name: 'Tom H.',
    location: 'Kirkland, WA',
    rating: 5,
    text: 'Had them install a walk-in shower to replace our old tub. The tile work is flawless and the glass enclosure looks amazing. Best home investment we\'ve made!',
    date: '3 weeks ago',
    service: 'Shower Installation',
  },
  {
    name: 'Rachel S.',
    location: 'Redmond, WA',
    rating: 5,
    text: 'New quartz countertops in our kitchen look absolutely stunning. Precise cuts, perfect seams, and they cleaned up everything after. Will definitely use them for our bathroom remodel next.',
    date: '1 month ago',
    service: 'Countertop Installation',
  },
  {
    name: 'Chris D.',
    location: 'Renton, WA',
    rating: 5,
    text: 'Tile installation in both bathrooms — floor and shower walls. Incredible craftsmanship, perfectly level, grout lines are immaculate. These guys know what they\'re doing.',
    date: '1 month ago',
    service: 'Tile Installation',
  },
] as const;
```

**Step 4: Update NAV_ITEMS**

Replace existing NAV_ITEMS:
```typescript
export const NAV_ITEMS = [
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Process', href: '/process' },
  { name: 'Blog', href: '/blog' },
  { name: 'Locations', href: '/locations' },
  { name: 'Contact', href: '/contact' },
] as const;
```

**Step 5: Add remodeling process steps**

```typescript
export const REMODELING_PROCESS_STEPS = [
  {
    number: 1,
    title: 'Free Consultation & Estimate',
    description: 'We visit your home, discuss your vision, take measurements, and provide a detailed written estimate with material options.',
    color: '#0b66b3',
  },
  {
    number: 2,
    title: 'Design & Material Selection',
    description: 'Choose your materials, colors, and finishes. We help you select the best options for your budget and style preferences.',
    color: '#f59e0b',
  },
  {
    number: 3,
    title: 'Demolition & Preparation',
    description: 'We carefully remove old fixtures, protect your home, and prepare the space for new installations. Permits handled as needed.',
    color: '#10b981',
  },
  {
    number: 4,
    title: 'Plumbing & Electrical',
    description: 'Licensed professionals handle all plumbing and electrical work, including any layout changes or upgrades required.',
    color: '#8b5cf6',
  },
  {
    number: 5,
    title: 'Installation & Finishing',
    description: 'Expert installation of tile, countertops, fixtures, cabinetry, and all finishing details. Quality craftsmanship guaranteed.',
    color: '#ec4899',
  },
  {
    number: 6,
    title: 'Final Walkthrough & Warranty',
    description: 'We do a detailed walkthrough with you, address any concerns, and provide warranty documentation for all work completed.',
    color: '#06b6d4',
  },
] as const;
```

**Step 6: Add remodeling FAQ items**

```typescript
export const REMODELING_FAQ_ITEMS = [
  {
    question: 'How long does a bathroom remodel take?',
    answer: 'A typical bathroom remodel takes 2-4 weeks depending on scope. Simple updates like new tile and vanity can be done in 1-2 weeks. Full gut renovations with layout changes may take 3-4 weeks.',
  },
  {
    question: 'How long does a kitchen remodel take?',
    answer: 'Kitchen remodels typically take 4-8 weeks. A cosmetic refresh (countertops, backsplash, paint) can be done in 2-3 weeks. Full renovations with new cabinets, plumbing, and electrical take 6-8 weeks.',
  },
  {
    question: 'Do you handle permits?',
    answer: 'Yes, we handle all necessary permits for your project. Building permits are required for most plumbing, electrical, and structural work in Seattle and surrounding areas.',
  },
  {
    question: 'Do you offer financing?',
    answer: 'We work with several financing partners to offer flexible payment options. Ask about our financing plans during your free consultation.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed, bonded, and insured in Washington State. We carry general liability insurance and workers compensation for your protection.',
  },
  {
    question: 'Can I stay in my home during remodeling?',
    answer: 'In most cases, yes. We work to minimize disruption and keep work areas contained. For kitchen remodels, we recommend setting up a temporary kitchen area.',
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We provide a 5-year warranty on all workmanship. Manufacturer warranties on materials and fixtures are passed through to you. We stand behind every project.',
  },
] as const;
```

**Step 7: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`
Expected: Build completes (new constants are just data, not referenced yet by new pages)

**Step 8: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: add remodeling services, reviews, FAQ, and process data to constants"
```

---

### Task 2: Add remodeling content generation to locationServiceContent.ts

**Files:**
- Modify: `src/lib/locationServiceContent.ts`

**Step 1: Add REMODELING_SERVICE_SLUGS export and update SERVICE_SLUGS**

At the end of the file, after the existing `SERVICE_SLUGS`, add:

```typescript
export const REMODELING_SERVICE_SLUGS = [
  'bathroom-remodeling',
  'kitchen-remodeling',
  'tile-installation',
  'countertop-installation',
  'shower-installation',
  'bathtub-installation',
] as const;

export const ALL_SERVICE_SLUGS = [...SERVICE_SLUGS, ...REMODELING_SERVICE_SLUGS] as const;
```

**Step 2: Add remodeling service data entries to the `serviceData` object**

Add these entries inside the `serviceData` object (after 'repair'):

```typescript
  'bathroom-remodeling': {
    name: 'Bathroom Remodeling',
    shortName: 'Bathroom Remodel',
    heroVariations: [
      (city) => `Transform your outdated bathroom in ${city} with a complete professional remodel. From design to installation, we handle every detail — new tile, vanity, shower, fixtures, and more.`,
      (city) => `${city}'s trusted bathroom remodeling experts. We turn dated bathrooms into modern retreats with quality craftsmanship, licensed work, and competitive pricing.`,
      (city) => `Planning a bathroom remodel in ${city}? Our full-service team handles demolition, plumbing, tile, fixtures, and finishing. One contractor for your entire project.`,
      (city) => `Complete bathroom renovations for ${city} homeowners. Whether it's a master bath overhaul or guest bathroom refresh, we deliver stunning results on time and on budget.`,
      (city) => `Professional bathroom remodeling throughout ${city}. Walk-in showers, custom tile, modern vanities, and premium fixtures — we build the bathroom you've always wanted.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} bathroom remodeling service covers everything from concept to completion. We handle design consultation, material selection, demolition, plumbing, electrical, tile installation, vanity and countertop installation, fixture placement, and finishing details. Licensed, insured, and backed by our ${BUSINESS.warranty} warranty.`,
      (city) => `${BUSINESS.name} delivers complete bathroom transformations for ${city} homes. Our experienced team manages all trades in-house — no subcontractor headaches. We've completed hundreds of bathroom remodels, from simple updates to luxury master bath renovations.`,
      (city) => `When ${city} homeowners want quality bathroom remodeling, they call us. We combine thoughtful design, premium materials, and expert installation to create bathrooms that look beautiful and function perfectly for years to come.`,
      (city) => `A bathroom remodel in ${city} doesn't have to be stressful. Our streamlined process — from free consultation through final walkthrough — keeps your project on track. We handle permits, coordinate trades, and deliver exceptional results.`,
    ],
    benefitsVariations: [
      ['Complete design & build service', 'Licensed & permitted work', 'All trades managed in-house', `${BUSINESS.warranty} workmanship warranty`, 'Free detailed estimates'],
      ['One contractor for everything', 'Premium material options', 'On-time project completion', 'Clean, professional worksite', 'Transparent pricing'],
      ['Custom design consultation', 'Expert tile & stone work', 'Plumbing & electrical included', 'Fixture selection assistance', 'Quality guaranteed'],
      ['Increase your home value', 'Modern accessibility options', 'Energy-efficient upgrades', 'Code-compliant work', 'Dedicated project manager'],
    ],
    problemsVariations: [
      ['Outdated tile and fixtures', 'Inefficient layout', 'Lack of storage', 'Water damage', 'Mold and mildew issues'],
      ['Dated vanity and countertops', 'Poor lighting', 'Cramped shower space', 'Worn flooring', 'Leaking plumbing'],
      ['Old-fashioned bathtub', 'Broken or missing grout', 'Insufficient ventilation', 'Accessibility concerns', 'Damaged surfaces'],
    ],
    processVariations: [
      ['Free consultation & design', 'Material selection', 'Demolition & prep', 'Plumbing & electrical', 'Tile & installation', 'Final walkthrough'],
      ['Home visit & estimate', 'Design finalization', 'Permits & scheduling', 'Rough-in work', 'Finish installation', 'Quality inspection'],
      ['Vision & budget planning', 'Material ordering', 'Careful demolition', 'Infrastructure upgrades', 'Beautiful installation', 'Punch list & warranty'],
    ],
    faqVariations: [
      [
        { q: 'How long does a bathroom remodel take?', a: (city) => `Most bathroom remodels in ${city} take 2-4 weeks. Simple updates can be done in 1-2 weeks, while full renovations with layout changes take 3-4 weeks.` },
        { q: 'What does a bathroom remodel cost?', a: (city) => `Bathroom remodeling in ${city} starts from $7,900 for basic updates. Mid-range remodels run $15,000-$25,000, and high-end master bath renovations can be $30,000+. We provide detailed estimates.` },
        { q: 'Do you handle permits?', a: (city) => `Yes, we handle all necessary building permits for ${city} bathroom remodels. This is included in our service — you don't need to worry about paperwork.` },
      ],
      [
        { q: 'Can I choose my own materials?', a: () => `Absolutely! We help you select materials from our trusted suppliers, or we can work with materials you've already purchased. We provide guidance on quality and compatibility.` },
        { q: 'Will I be able to use my bathroom during remodeling?', a: (city) => `The bathroom being remodeled will be out of service during construction. Most ${city} homes have at least one additional bathroom. We work efficiently to minimize downtime.` },
        { q: 'Do you offer warranty on remodeling work?', a: () => `Yes, all our remodeling work comes with a ${BUSINESS.warranty} workmanship warranty. Material warranties from manufacturers are also passed through to you.` },
      ],
    ],
  },

  'kitchen-remodeling': {
    name: 'Kitchen Remodeling',
    shortName: 'Kitchen Remodel',
    heroVariations: [
      (city) => `Create the kitchen of your dreams in ${city}. Our full-service kitchen remodeling covers cabinets, countertops, tile, fixtures, and more — all managed by one experienced team.`,
      (city) => `${city}'s premier kitchen remodeling contractors. From minor refreshes to complete gut renovations, we deliver beautiful, functional kitchens that add value to your home.`,
      (city) => `Ready for a kitchen transformation in ${city}? New countertops, custom cabinets, stunning backsplash, modern fixtures — we handle every detail of your kitchen remodel.`,
      (city) => `Professional kitchen remodeling throughout ${city}. Our design-build approach means one team from concept to completion. No coordination headaches, just beautiful results.`,
      (city) => `Upgrade your ${city} kitchen with expert remodeling. We specialize in quartz and granite countertops, tile backsplash, cabinet installation, and complete kitchen renovations.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} kitchen remodeling service transforms dated kitchens into modern, functional spaces. We handle design, demolition, cabinetry, countertops, backsplash, flooring, plumbing, electrical, and all finishing work. One team, one warranty, zero stress.`,
      (city) => `${BUSINESS.name} has remodeled kitchens across ${city} — from cozy galley kitchens to spacious open-concept layouts. We work with top material suppliers to offer granite, quartz, marble countertops, custom and semi-custom cabinetry, and premium tile selections.`,
      (city) => `A kitchen remodel in ${city} is the #1 home improvement for return on investment. Our experienced team maximizes your budget with smart design choices, quality materials, and expert craftsmanship that stands the test of time.`,
      (city) => `From the first design consultation to the final walkthrough, our ${city} kitchen remodeling process is designed for your satisfaction. We keep you informed, respect your home, and deliver on our promises.`,
    ],
    benefitsVariations: [
      ['Custom cabinet options', 'Granite & quartz countertops', 'Professional tile backsplash', 'Plumbing & electrical work', `${BUSINESS.warranty} warranty`],
      ['Increase home value', 'Modern layout options', 'Premium material selection', 'Licensed & insured team', 'On-budget completion'],
      ['Design-build convenience', 'One point of contact', 'Quality craftsmanship', 'Energy-efficient upgrades', 'Code-compliant work'],
    ],
    problemsVariations: [
      ['Outdated cabinets', 'Worn countertops', 'Dated backsplash', 'Poor storage layout', 'Aging appliance spaces'],
      ['Inefficient workflow', 'Damaged flooring', 'Old plumbing fixtures', 'Poor lighting', 'Lack of counter space'],
      ['Peeling laminate', 'Broken tile', 'Cramped layout', 'Water damage', 'Outdated style'],
    ],
    processVariations: [
      ['Design consultation', 'Material selection', 'Demolition', 'Rough-in plumbing & electrical', 'Cabinet & countertop installation', 'Final finishing & walkthrough'],
      ['Home visit & measurements', 'Design & budget planning', 'Material ordering', 'Construction phase', 'Installation & detail work', 'Quality assurance & warranty'],
    ],
    faqVariations: [
      [
        { q: 'How long does a kitchen remodel take?', a: (city) => `Kitchen remodels in ${city} typically take 4-8 weeks. Cosmetic refreshes (countertops, backsplash) can be done in 2-3 weeks. Full renovations with new cabinets take 6-8 weeks.` },
        { q: 'What does a kitchen remodel cost in Seattle?', a: (city) => `Kitchen remodeling in ${city} starts from $25,000 for basic remodels. Mid-range renovations run $35,000-$55,000, and high-end projects can be $75,000+. We provide detailed, transparent estimates.` },
        { q: 'Can you work with my existing layout?', a: () => `Yes! Many kitchen remodels keep the existing layout while upgrading surfaces and fixtures. This is often the most cost-effective approach. We'll discuss layout options during your free consultation.` },
      ],
      [
        { q: 'Do you install appliances?', a: () => `We coordinate appliance installation as part of your remodel. We ensure proper electrical and plumbing connections for all new appliances.` },
        { q: 'What countertop materials do you offer?', a: (city) => `We install granite, quartz, marble, quartzite, and solid surface countertops for ${city} homes. We help you choose the best material for your lifestyle and budget.` },
        { q: 'Can I use my kitchen during remodeling?', a: () => `We recommend setting up a temporary kitchen area (microwave, coffee maker, etc.) during construction. We work efficiently to restore function as quickly as possible.` },
      ],
    ],
  },

  'tile-installation': {
    name: 'Tile Installation',
    shortName: 'Tile Install',
    heroVariations: [
      (city) => `Professional tile installation in ${city} for floors, walls, showers, and backsplashes. Ceramic, porcelain, marble, and natural stone — precision craftsmanship that lasts.`,
      (city) => `${city}'s expert tile installers. From intricate mosaic patterns to large-format porcelain, we deliver flawless tile installation for kitchens, bathrooms, and living spaces.`,
      (city) => `Transform any room in your ${city} home with professional tile installation. Shower surrounds, kitchen backsplashes, bathroom floors, and more — installed with precision and care.`,
      (city) => `Expert tile installation throughout ${city}. We work with all tile types — ceramic, porcelain, marble, travertine, glass, and natural stone. Beautiful results guaranteed.`,
      (city) => `Looking for quality tile installation in ${city}? Our experienced tile setters deliver level, plumb, and perfectly grouted installations every time.`,
    ],
    descriptionVariations: [
      (city) => `Professional tile installation for ${city} homes covering every application: bathroom floors and walls, shower surrounds, kitchen backsplashes, entryways, and feature walls. We prepare substrates properly, use quality thin-set, and ensure perfectly level installations with consistent grout lines.`,
      (city) => `${BUSINESS.name} provides expert tile installation across ${city}. We handle complex patterns, large-format tiles, waterproof shower systems, heated floor preparation, and custom mosaic work. Quality installation starts with proper preparation.`,
      (city) => `Whether you need a simple backsplash or a full custom shower tile installation in ${city}, our team delivers exceptional results. We work with ceramic, porcelain, marble, travertine, slate, and glass tile.`,
      (city) => `Quality tile installation in ${city} requires skill and attention to detail. Our experienced installers ensure waterproof membranes, proper substrate preparation, level surfaces, and clean grout lines on every project.`,
    ],
    benefitsVariations: [
      ['All tile types and sizes', 'Floor & wall installation', 'Waterproof shower systems', 'Custom patterns & layouts', `${BUSINESS.warranty} warranty`],
      ['Precision installation', 'Proper substrate prep', 'Clean grout lines', 'Heated floor compatible', 'Expert craftsmanship'],
      ['Bathroom, kitchen & more', 'Natural stone expertise', 'Backsplash specialist', 'Large format tile', 'Free estimates'],
    ],
    problemsVariations: [
      ['Cracked or loose tiles', 'Uneven floor surfaces', 'Water damage behind tile', 'Outdated tile patterns', 'Moldy grout'],
      ['DIY tile failures', 'Lippage between tiles', 'Efflorescence stains', 'Improper waterproofing', 'Dated tile style'],
    ],
    processVariations: [
      ['Surface assessment', 'Substrate preparation', 'Waterproofing (where needed)', 'Layout & dry fit', 'Tile setting & leveling', 'Grouting & sealing'],
      ['Consultation & measurement', 'Material delivery', 'Surface prep & leveling', 'Tile installation', 'Grouting & cleanup', 'Final inspection'],
    ],
    faqVariations: [
      [
        { q: 'How much does tile installation cost?', a: (city) => `Tile installation in ${city} starts from $7/sq ft for ceramic tile. Porcelain runs $10-$15/sq ft, and natural stone $15-$25/sq ft installed. We provide detailed quotes for each project.` },
        { q: 'How long does tile installation take?', a: () => `A typical bathroom tile job takes 2-4 days. Kitchen backsplash is usually 1-2 days. Large floor areas may take 3-5 days. Grout needs 24 hours to cure before use.` },
        { q: 'Do you do shower tile installation?', a: (city) => `Yes! Shower tile is one of our specialties in ${city}. We install complete waterproof shower systems including membrane, tile, and grout sealing.` },
      ],
      [
        { q: 'What tile types do you install?', a: () => `We install ceramic, porcelain, marble, travertine, slate, glass, and mosaic tiles. We also handle large-format tiles (up to 48" and beyond) which require specialized installation techniques.` },
        { q: 'Do I need to remove old tile first?', a: (city) => `Usually yes, though in some cases we can tile over existing tile. During your ${city} consultation, we'll assess the best approach for your specific situation.` },
        { q: 'Do you provide the tile?', a: () => `We can source tile for you from our supplier network, or we're happy to install tile you've purchased. Either way, we ensure you have the right quantities and materials.` },
      ],
    ],
  },

  'countertop-installation': {
    name: 'Countertop Installation',
    shortName: 'Countertop Install',
    heroVariations: [
      (city) => `Professional countertop installation in ${city}. Granite, quartz, marble, and solid surface — precision templating, expert fabrication, and flawless installation.`,
      (city) => `Upgrade your ${city} kitchen or bathroom with stunning new countertops. We install granite, quartz, marble, and quartzite with precision cuts and seamless joins.`,
      (city) => `${city}'s trusted countertop installation team. From material selection to final polish, we deliver beautiful countertops that transform your space.`,
      (city) => `New countertops for your ${city} home — installed by professionals. Granite, quartz, marble options with undermount sink cutouts, edge profiles, and perfect seams.`,
      (city) => `Expert countertop installation throughout ${city}. We handle template, fabrication, removal of old tops, and professional installation. Premium materials, competitive prices.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} countertop installation service covers the full process: in-home consultation, material selection, precision templating, professional fabrication, old countertop removal, and expert installation. We work with granite, quartz, marble, quartzite, and solid surface materials.`,
      (city) => `${BUSINESS.name} installs beautiful countertops across ${city}. We partner with top fabricators to ensure perfect cuts, polished edges, and seamless seams. Undermount sink cutouts, backsplash returns, and custom edge profiles available.`,
      (city) => `Transform your ${city} kitchen or bathroom with new countertops. We guide you through material options, handle precise measurements, coordinate fabrication, and install your new tops with expert care.`,
      (city) => `Quality countertop installation in ${city} starts with precise templating. Our digital measurement process ensures a perfect fit. We install within days of template, not weeks.`,
    ],
    benefitsVariations: [
      ['Granite, quartz & marble', 'Digital precision templating', 'Undermount sink cutouts', 'Custom edge profiles', `${BUSINESS.warranty} warranty`],
      ['Premium material options', 'Expert fabrication', 'Same-week installation', 'Old top removal included', 'Competitive pricing'],
      ['Kitchen & bathroom tops', 'Seam-matched patterns', 'Backsplash integration', 'Multiple edge options', 'Professional installation'],
    ],
    problemsVariations: [
      ['Dated laminate countertops', 'Chipped or cracked surfaces', 'Burn marks', 'Stained countertops', 'Worn edges'],
      ['Peeling surface material', 'Water damage around sink', 'Scratched surfaces', 'Outdated color', 'Uneven seams'],
    ],
    processVariations: [
      ['Material consultation', 'In-home templating', 'Fabrication (5-7 days)', 'Old countertop removal', 'New countertop installation', 'Sink & faucet hookup'],
      ['Showroom visit & selection', 'Digital measurement', 'Slab selection & approval', 'Fabrication & edge finishing', 'Professional installation', 'Final inspection & sealing'],
    ],
    faqVariations: [
      [
        { q: 'How much do granite countertops cost?', a: (city) => `Granite countertops in ${city} start from $40/sq ft installed. Quartz runs $50-$150/sq ft, and marble $60-$250/sq ft. We provide exact quotes based on your measurements and material choice.` },
        { q: 'How long does countertop installation take?', a: () => `The installation itself takes 1 day for most kitchens. The full process from template to installation is typically 7-10 business days.` },
        { q: 'Do you remove old countertops?', a: (city) => `Yes, old countertop removal is included in our ${city} installation service. We handle disconnecting plumbing and reconnecting after installation.` },
      ],
      [
        { q: 'Granite vs quartz — which is better?', a: () => `Both are excellent choices. Granite is natural stone with unique patterns. Quartz is engineered for consistency and requires less maintenance. We help you choose based on your priorities.` },
        { q: 'Do you do bathroom countertops too?', a: (city) => `Absolutely! We install kitchen and bathroom countertops throughout ${city}. Bathroom vanity tops are a popular, high-impact upgrade.` },
        { q: 'Can you match my existing stone?', a: () => `We work to find the closest match possible. For granite and marble (natural stone), exact matches aren't always possible since each slab is unique, but we'll find complementary options.` },
      ],
    ],
  },

  'shower-installation': {
    name: 'Shower Installation',
    shortName: 'Shower Install',
    heroVariations: [
      (city) => `Custom shower installation in ${city}. Walk-in showers, tub-to-shower conversions, glass enclosures, and complete shower remodels — professionally designed and installed.`,
      (city) => `Transform your ${city} bathroom with a new shower. From frameless glass enclosures to custom tile walk-ins, we build showers that combine beauty with function.`,
      (city) => `Professional shower installation throughout ${city}. We handle waterproofing, tile, glass, fixtures, and plumbing for a complete, leak-free shower system.`,
      (city) => `${city}'s shower installation experts. Tub-to-shower conversions, curbless showers, custom tile work, and premium glass doors — all installed by licensed professionals.`,
      (city) => `Upgrade your ${city} shower with professional installation. Modern designs, proper waterproofing, beautiful tile, and quality fixtures — built to last.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} shower installation service covers everything: demolition, waterproofing membrane, tile installation, glass enclosure fitting, fixtures, and plumbing. We build walk-in showers, tub-to-shower conversions, curbless showers, and standard shower replacements.`,
      (city) => `${BUSINESS.name} builds beautiful, leak-free showers for ${city} homes. Our system includes Schluter or equivalent waterproofing, quality tile, and premium fixtures. Every installation is tested for waterproofing before tile goes up.`,
      (city) => `A new shower can transform your ${city} bathroom. We specialize in custom tile showers with frameless glass, rain showerheads, built-in niches, and bench seating. Form meets function in every design.`,
      (city) => `Professional shower installation in ${city} means proper waterproofing, precise tile work, and quality craftsmanship. We've installed hundreds of showers and know what works in the Pacific Northwest climate.`,
    ],
    benefitsVariations: [
      ['Custom walk-in showers', 'Tub-to-shower conversion', 'Waterproof membrane system', 'Frameless glass options', `${BUSINESS.warranty} warranty`],
      ['Curbless & accessible options', 'Built-in niches & benches', 'Premium fixture installation', 'Heated floor compatible', 'Licensed plumbing work'],
      ['Complete shower systems', 'Tile & glass expertise', 'Proper drainage design', 'Modern design options', 'Code-compliant work'],
    ],
    problemsVariations: [
      ['Leaking shower', 'Mold behind walls', 'Cracked tile', 'Outdated shower door', 'Poor water pressure'],
      ['Inefficient layout', 'No storage niches', 'Slippery floor', 'Dated fixtures', 'Small shower space'],
    ],
    processVariations: [
      ['Design consultation', 'Demolition & prep', 'Waterproof membrane', 'Tile installation', 'Glass & fixtures', 'Final testing & walkthrough'],
      ['Measure & plan', 'Material selection', 'Remove old shower/tub', 'Build & waterproof', 'Tile & grout', 'Glass, fixtures & cleanup'],
    ],
    faqVariations: [
      [
        { q: 'How much does a walk-in shower cost?', a: (city) => `Walk-in shower installation in ${city} starts from $4,000 for basic setups. Custom tile walk-ins with glass doors typically run $6,000-$15,000 depending on size and materials.` },
        { q: 'Can you convert my tub to a shower?', a: (city) => `Yes! Tub-to-shower conversions are one of our most popular services in ${city}. We handle plumbing changes, waterproofing, tile, and glass installation.` },
        { q: 'How long does shower installation take?', a: () => `Most shower installations take 3-5 days. Tub-to-shower conversions may take 4-7 days. We keep you informed on timeline throughout the project.` },
      ],
      [
        { q: 'Do you install glass shower doors?', a: () => `Yes, we install frameless, semi-frameless, and framed glass shower doors and enclosures. We work with top glass suppliers for quality and safety.` },
        { q: 'What about waterproofing?', a: (city) => `Proper waterproofing is critical in ${city}'s wet climate. We use Schluter, Laticrete, or equivalent membrane systems. Every installation is flood-tested before tile goes up.` },
        { q: 'Can you build a curbless shower?', a: () => `Yes, we build ADA-compliant curbless showers with linear drains. These are great for accessibility and create a sleek, modern look. Proper floor slope is essential.` },
      ],
    ],
  },

  'bathtub-installation': {
    name: 'Bathtub Installation',
    shortName: 'Tub Install',
    heroVariations: [
      (city) => `Professional bathtub installation in ${city}. Freestanding, alcove, drop-in, and soaking tubs — expert removal of old tub, plumbing, and flawless installation.`,
      (city) => `Replace your old bathtub in ${city} with a beautiful new one. We handle removal, plumbing, surround, and installation for all tub styles and brands.`,
      (city) => `${city}'s bathtub installation experts. From standard replacements to luxury freestanding tubs, we deliver professional installation with plumbing and finishing included.`,
      (city) => `New bathtub installation throughout ${city}. Alcove, freestanding, drop-in, corner, and soaking tubs installed by licensed professionals with warranty.`,
      (city) => `Upgrade your ${city} bathroom with a new bathtub. Professional installation includes old tub removal, plumbing modifications, surround work, and all finishing details.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} bathtub installation service covers everything: old tub removal and disposal, plumbing modifications, new tub placement and leveling, surround installation, waterproofing, caulking, and fixture installation. We install all major brands and styles.`,
      (city) => `${BUSINESS.name} installs bathtubs across ${city} — from quick alcove replacements to custom freestanding tub setups. Our licensed plumbers handle all water supply and drain connections for a leak-free installation.`,
      (city) => `Whether you want a deep soaking tub or a practical alcove replacement, our ${city} team delivers professional bathtub installation. We handle the heavy lifting, plumbing, and finishing so you enjoy your new tub faster.`,
      (city) => `New bathtub installation in ${city} is a smart bathroom upgrade. We help you choose the right tub size and style for your space, then handle professional installation from start to finish.`,
    ],
    benefitsVariations: [
      ['All tub styles & brands', 'Old tub removal included', 'Licensed plumbing work', 'Surround installation', `${BUSINESS.warranty} warranty`],
      ['Freestanding tub setups', 'Alcove replacements', 'Drop-in & corner tubs', 'Waterproof installation', 'One-day service available'],
      ['Complete removal & install', 'Plumbing modifications', 'Fixture installation', 'Professional finishing', 'Clean job site'],
    ],
    problemsVariations: [
      ['Cracked or leaking tub', 'Rust and corrosion', 'Outdated tub style', 'Stained beyond repair', 'Poor drainage'],
      ['Uncomfortable tub size', 'Damaged surround', 'Old plumbing connections', 'Inefficient water use', 'Safety concerns'],
    ],
    processVariations: [
      ['Consultation & measurement', 'Tub selection assistance', 'Old tub removal', 'Plumbing modifications', 'New tub installation', 'Surround & finishing'],
      ['Home assessment', 'Material ordering', 'Careful demolition', 'Plumbing prep', 'Tub placement & leveling', 'Final connections & cleanup'],
    ],
    faqVariations: [
      [
        { q: 'How much does bathtub installation cost?', a: (city) => `Bathtub installation in ${city} starts from $2,400 for standard alcove replacements. Freestanding tub installations run $3,500-$6,000+. Price depends on tub type and plumbing needs.` },
        { q: 'How long does installation take?', a: () => `Standard bathtub replacement takes 1-2 days. Complex installations (freestanding, plumbing relocation) may take 2-3 days. We provide exact timelines during your estimate.` },
        { q: 'Can you install a freestanding tub?', a: (city) => `Yes! Freestanding tub installation is one of our specialties in ${city}. We handle floor drain placement, supply lines, and proper leveling for a perfect installation.` },
      ],
      [
        { q: 'Do you remove the old tub?', a: () => `Yes, old tub removal and disposal is included in our installation service. We carefully remove the existing tub to avoid damage to surrounding areas.` },
        { q: 'What tub brands do you install?', a: (city) => `We install all major brands: Kohler, American Standard, Delta, Jacuzzi, and more. We can also recommend tubs based on your ${city} home's needs and your budget.` },
        { q: 'Will I need new plumbing?', a: () => `Often the existing drain and supply lines can be reused. If modifications are needed (different tub size, drain location), our licensed plumber handles it as part of the installation.` },
      ],
    ],
  },
```

**Step 3: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`
Expected: Build completes successfully

**Step 4: Commit**

```bash
git add src/lib/locationServiceContent.ts
git commit -m "feat: add remodeling service content generation for location+service pages"
```

---

### Task 3: Update services/[slug] to handle both remodeling and refinishing slugs

**Files:**
- Modify: `src/app/services/[slug]/page.tsx`

**Step 1: Update imports and slug mapping**

Replace the imports and getServiceId function to support both SERVICES and REMODELING_SERVICES:

```typescript
import { SERVICES, REMODELING_SERVICES, ALL_SERVICES, BUSINESS } from '@/lib/constants';
```

Update `getServiceId`:
```typescript
function getServiceId(slug: string): string {
  const slugMap: Record<string, string> = {
    // Refinishing
    'bathtub-refinishing': 'bathtub',
    'shower-refinishing': 'shower',
    'tile-refinishing': 'tile',
    'sink-refinishing': 'sink',
    'countertop-refinishing': 'countertop',
    'repair': 'repair',
    'chip-crack-repair': 'repair',
    'bathtub': 'bathtub',
    'shower': 'shower',
    'tile': 'tile',
    'sink': 'sink',
    'countertop': 'countertop',
    // Remodeling
    'bathroom-remodeling': 'bathroom-remodeling',
    'kitchen-remodeling': 'kitchen-remodeling',
    'tile-installation': 'tile-installation',
    'countertop-installation': 'countertop-installation',
    'shower-installation': 'shower-installation',
    'bathtub-installation': 'bathtub-installation',
  };
  return slugMap[slug] || slug;
}
```

**Step 2: Update generateStaticParams to include remodeling services**

```typescript
export async function generateStaticParams() {
  const refinishingParams = SERVICES.map((service) => ({
    slug: service.href.replace('/services/', ''),
  }));
  const remodelingParams = REMODELING_SERVICES.map((service) => ({
    slug: service.href.replace('/services/', ''),
  }));
  return [...refinishingParams, ...remodelingParams];
}
```

**Step 3: Update service lookup in generateMetadata and page component**

Change `SERVICES.find` to search all services:
```typescript
const service = ALL_SERVICES.find((s) => s.id === serviceId);
```

Do this in both `generateMetadata` and the page component function.

**Step 4: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`

**Step 5: Commit**

```bash
git add src/app/services/[slug]/page.tsx
git commit -m "feat: add remodeling service routes to dynamic service pages"
```

---

### Task 4: Update location+service pages to generate remodeling combos

**Files:**
- Modify: `src/app/locations/[city]/[service]/page.tsx`

**Step 1: Update imports**

```typescript
import { LOCATIONS, SERVICES, REMODELING_SERVICES, ALL_SERVICES, BUSINESS, PROCESS_STEPS } from '@/lib/constants';
import { getLocationServiceContent, SERVICE_SLUGS, REMODELING_SERVICE_SLUGS, ALL_SERVICE_SLUGS } from '@/lib/locationServiceContent';
```

**Step 2: Update generateStaticParams to include remodeling slugs**

```typescript
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];

  for (const city of TOP_CITIES) {
    for (const serviceSlug of ALL_SERVICE_SLUGS) {
      params.push({
        city: city.id,
        service: serviceSlug,
      });
    }
  }

  return params;
}
```

**Step 3: Update service lookup to search all services**

In `generateMetadata`, change:
```typescript
const serviceData = SERVICES.find(s => s.href === `/services/${service}`);
```
to:
```typescript
const serviceData = ALL_SERVICES.find(s => s.href === `/services/${service}`);
```

Do the same in the page component.

**Step 4: Update the "Other Services" section**

Where it filters `otherServices`, update to include remodeling services:
```typescript
const otherServices = ALL_SERVICES.filter(s => s.href !== `/services/${service}`).slice(0, 8);
```

**Step 5: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`

**Step 6: Commit**

```bash
git add src/app/locations/[city]/[service]/page.tsx
git commit -m "feat: generate 72 new remodeling location+service combo pages"
```

---

### Task 5: Update sitemap.ts — remodeling pages with high priority

**Files:**
- Modify: `src/app/sitemap.ts`

**Step 1: Update imports**

```typescript
import { SERVICES, REMODELING_SERVICES, ALL_SERVICES, ALL_LOCATIONS, LOCATIONS, BUSINESS, BLOG_POSTS } from '@/lib/constants';
import { SERVICE_SLUGS, REMODELING_SERVICE_SLUGS } from '@/lib/locationServiceContent';
```

**Step 2: Add remodeling service pages with high priority**

After `servicePages`, add:

```typescript
  // Remodeling service pages - HIGHEST priority (new primary business)
  const remodelingServicePages: MetadataRoute.Sitemap = REMODELING_SERVICES.map((service, index) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: index < 2 ? 0.98 : 0.96, // bathroom & kitchen remodeling get top priority
  }));
```

**Step 3: Add remodeling location+service combo pages**

After `locationServicePages` loop, add:

```typescript
  // Remodeling location+service combo pages (72 total: 12 cities × 6 remodeling services)
  const remodelingLocationServicePages: MetadataRoute.Sitemap = [];
  for (const location of LOCATIONS.filter(l => l.primary)) {
    for (const serviceSlug of REMODELING_SERVICE_SLUGS) {
      const isSeattle = location.id === 'seattle';
      const isBathroom = serviceSlug === 'bathroom-remodeling';
      const isKitchen = serviceSlug === 'kitchen-remodeling';
      let priority = 0.90;
      if (isSeattle && (isBathroom || isKitchen)) priority = 0.97;
      else if (isSeattle) priority = 0.94;
      else if (isBathroom || isKitchen) priority = 0.93;
      else priority = 0.91;

      remodelingLocationServicePages.push({
        url: `${baseUrl}/locations/${location.id}/${serviceSlug}`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority,
      });
    }
  }
```

**Step 4: Demote refinishing service pages priority**

Change the servicePages mapping:
```typescript
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service, index) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: service.popular ? 0.75 : (0.72 - index * 0.01),
  }));
```

**Step 5: Demote refinishing location+service combo priorities**

In the existing locationServicePages loop, change priorities:
```typescript
      let priority = 0.65;
      if (isSeattle && isBathtub) priority = 0.70;
      else if (isSeattle) priority = 0.68;
      else if (isBathtub) priority = 0.67;
```

**Step 6: Update return order — remodeling first**

```typescript
  return [
    staticPages[0],
    // Remodeling pages first (NEW PRIMARY BUSINESS)
    ...remodelingServicePages,
    ...remodelingLocationServicePages,
    // Location pages
    ...locationPages,
    // Refinishing pages (secondary)
    ...servicePages,
    ...locationServicePages,
    // Static pages
    ...staticPages.slice(1),
    // Blog
    ...blogPages,
  ];
```

**Step 7: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`

**Step 8: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: update sitemap with remodeling pages at high priority, demote refinishing"
```

---

### Task 6: Update schema.ts — HomeImprovement type, remodeling services

**Files:**
- Modify: `src/lib/schema.ts`

**Step 1: Update imports**

```typescript
import { BUSINESS, SERVICES, REMODELING_SERVICES, ALL_SERVICES, ALL_LOCATIONS, FAQ_ITEMS, REMODELING_FAQ_ITEMS } from '@/lib/constants';
```

**Step 2: Update getWebsiteSchema description**

```typescript
  description: `Seattle's #1 kitchen & bathroom remodeling company. Full-service remodeling and refinishing with ${BUSINESS.warranty} warranty.`,
```

**Step 3: Update getLocalBusinessSchema**

Change `@type` to array:
```typescript
    '@type': ['HomeImprovement', 'GeneralContractor'],
```

Update description:
```typescript
    description: `Seattle's #1 kitchen & bathroom remodeling company. Full-service remodeling, tile installation, countertop installation, and refinishing with ${BUSINESS.warranty} warranty.`,
```

**Step 4: Update generateHomePageSchema**

Update the WebPage name:
```typescript
        name: `${BUSINESS.name} | Kitchen & Bathroom Remodeling Seattle`,
        description: `Seattle's #1 kitchen & bathroom remodeling company. Full-service remodeling and refinishing with ${BUSINESS.warranty} warranty.`,
```

Update the Product:
```typescript
        name: 'Kitchen & Bathroom Remodeling Services',
        description: `Professional kitchen remodeling, bathroom remodeling, tile installation, countertop installation, and refinishing in Seattle. ${BUSINESS.warranty} warranty on all work.`,
```

Update offers price range:
```typescript
          lowPrice: '2000',
          highPrice: '75000',
          offerCount: String(ALL_SERVICES.length),
```

**Step 5: Update SCHEMA_DATE_MODIFIED**

```typescript
const SCHEMA_DATE_MODIFIED = '2026-03-09';
```

**Step 6: Update generateServicesIndexSchema**

```typescript
        name: `Remodeling & Refinishing Services | ${BUSINESS.name}`,
        description: 'Professional kitchen & bathroom remodeling, tile installation, countertop installation, and refinishing services. Serving Seattle and 50+ cities.',
```

Update ItemList to include all services:
```typescript
        itemListElement: ALL_SERVICES.map((service, index) => ({
```

**Step 7: Update generateLocationPageSchema**

Change "Bathtub & Tile Refinishing" to "Kitchen & Bathroom Remodeling" in relevant strings.

**Step 8: Make generateServicePageSchema and generateLocationServicePageSchema work with both service types**

Change the type annotation from `typeof SERVICES[number]` to accept any service object. The simplest approach:

```typescript
type AnyService = typeof SERVICES[number] | typeof REMODELING_SERVICES[number];
```

Use this type in both function signatures.

**Step 9: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`

**Step 10: Commit**

```bash
git add src/lib/schema.ts
git commit -m "feat: update schema.org to HomeImprovement type with remodeling services"
```

---

### Task 7: Update layout.tsx — remodeling-first metadata

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Update metadata**

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    template: `%s | ${BUSINESS.name} Seattle`,
  },
  description: `Seattle's #1 kitchen & bathroom remodeling company. Full remodels, tile installation, countertops, showers, and refinishing. ${BUSINESS.warranty} warranty. Licensed & insured. Free estimates: ${BUSINESS.phone}`,
  keywords: "kitchen remodeling seattle, bathroom remodeling seattle, bathroom remodel seattle wa, kitchen remodel seattle, tile installation seattle, countertop installation seattle, shower installation seattle, bathtub installation seattle, bathroom renovation seattle, kitchen renovation seattle, bathroom contractor seattle, kitchen contractor seattle, home remodeling seattle",
```

**Step 2: Update openGraph**

```typescript
  openGraph: {
    title: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    description: "Seattle's #1 kitchen & bathroom remodeling. Full remodels, tile, countertops, showers. Licensed & insured. Free estimates!",
```

**Step 3: Update twitter**

```typescript
  twitter: {
    card: 'summary_large_image',
    title: `Kitchen & Bathroom Remodeling Seattle | ${BUSINESS.name}`,
    description: "Seattle's #1 kitchen & bathroom remodeling company. Free estimates!",
```

**Step 4: Run build to verify**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -20`

**Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update site metadata to remodeling-first"
```

---

### Task 8: Update Hero.tsx — remodeling-first homepage hero

**Files:**
- Modify: `src/components/sections/Hero.tsx`

**Step 1: Update trust badges**

```typescript
const trustBadges = [
  { icon: '🏠', text: 'Full-Service Remodeling' },
  { icon: '🛡️', text: 'Licensed & Insured' },
  { icon: '✅', text: '5-Year Warranty' },
  { icon: '⭐', text: '4.98 Rating' },
];
```

**Step 2: Update H1 and subtitle**

```tsx
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-4">
            Kitchen & Bathroom
            <span className="block text-amber-400">Remodeling in Seattle</span>
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-4 md:mb-5">
            Full-service kitchen & bath remodeling. Tile, countertops, showers & more.<br />
            Transform your home with expert craftsmanship.
          </p>
```

**Step 3: Update alt text on images**

```tsx
          alt="Modern kitchen and bathroom remodeling in Seattle"
```

**Step 4: Update value prop at bottom**

```tsx
            <span className="text-white font-semibold text-sm md:text-base">
              From Design to Installation — Your Complete Remodeling Team
            </span>
```

**Step 5: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: update hero section to remodeling-first messaging"
```

---

### Task 9: Update Services.tsx — show remodeling services on homepage

**Files:**
- Modify: `src/components/sections/Services.tsx`

**Step 1: Update imports**

```typescript
import { REMODELING_SERVICES } from '@/lib/constants';
```

**Step 2: Replace SERVICES with REMODELING_SERVICES throughout the component**

Change all references from `SERVICES` to `REMODELING_SERVICES`.

**Step 3: Update section header text**

```tsx
          <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Professional Remodeling Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete kitchen & bathroom remodeling with expert craftsmanship
          </p>
```

**Step 4: Update bottom CTA text**

```tsx
          <p className="text-gray-600 mb-4">Need a custom remodeling solution?</p>
```

**Step 5: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: show remodeling services on homepage instead of refinishing"
```

---

### Task 10: Update Header.tsx — remodeling branding

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Step 1: Update mobile logo text**

```tsx
              <span className="md:hidden font-bold text-[#0b66b3] text-lg leading-tight">
                Best Remodeling<br />& Refinishing
              </span>
```

**Step 2: Update top bar value proposition**

```tsx
            <span>Seattle&apos;s #1 <span className="text-[#0b66b3]">Kitchen & Bath Remodeling</span></span>
```

**Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: update header branding to remodeling"
```

---

### Task 11: Update Footer.tsx — remodeling services first

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Update imports**

```typescript
import { BUSINESS, REMODELING_SERVICES, SERVICES, LOCATIONS } from '@/lib/constants';
```

**Step 2: Update company description**

```tsx
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional kitchen & bathroom remodeling serving
              Seattle and surrounding areas. Licensed, insured, and guaranteed.
              Also offering refinishing services.
            </p>
```

**Step 3: Update services section to show remodeling first**

Replace the services `<ul>` with:
```tsx
            <ul className="space-y-3">
              {REMODELING_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-gray-500 hover:text-white transition flex items-center gap-2 group text-sm"
                >
                  + Refinishing Services
                </Link>
              </li>
            </ul>
```

**Step 4: Update CTA text**

```tsx
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Ready to Remodel Your Space?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Get your FREE estimate today — Expert remodeling from design to installation!
          </p>
```

**Step 5: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: update footer with remodeling services first"
```

---

### Task 12: Update services/page.tsx — services index with both categories

**Files:**
- Modify: `src/app/services/page.tsx`

**Step 1: Update imports**

```typescript
import { SERVICES, REMODELING_SERVICES, BUSINESS, ALL_LOCATIONS } from '@/lib/constants';
```

**Step 2: Update metadata**

```typescript
export const metadata: Metadata = {
  title: `Remodeling & Refinishing Services | ${BUSINESS.name}`,
  description: `Professional kitchen & bathroom remodeling, tile installation, countertop installation, and refinishing in Seattle & 50+ cities. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}.`,
  keywords: 'kitchen remodeling seattle, bathroom remodeling seattle, tile installation, countertop installation, shower installation, bathtub refinishing, refinishing services',
```

**Step 3: Update hero H1**

```tsx
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Remodeling & Refinishing Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Complete kitchen & bathroom remodeling plus professional refinishing services
          </p>
```

**Step 4: Add remodeling section BEFORE existing services grid**

Add a "Remodeling Services" section that shows REMODELING_SERVICES with the same card layout. Then add a "Refinishing Services" section below with existing SERVICES cards (with a note like "Budget-friendly alternative to full remodeling").

**Step 5: Update "Why" section**

Change "Why Refinishing?" to "Why Choose Us?" with remodeling-appropriate benefits.

**Step 6: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: update services index page with remodeling first, refinishing second"
```

---

### Task 13: Update location pages — remodeling-first content

**Files:**
- Modify: `src/app/locations/[city]/page.tsx`

**Step 1: Update metadata to remodeling-first**

In generateMetadata, change title and keywords:
```typescript
    title: `Kitchen & Bathroom Remodeling ${location.name} WA | ${BUSINESS.name}`,
```

Update keywords to include remodeling terms first.

**Step 2: Commit**

```bash
git add src/app/locations/[city]/page.tsx
git commit -m "feat: update location page metadata to remodeling-first"
```

---

### Task 14: Update locationContent.ts — remodeling-first location pages

**Files:**
- Modify: `src/lib/locationContent.ts`

**Step 1: Update metaDescription and content to reference remodeling first, refinishing second**

In the getLocationContent function, update the generated text to lead with remodeling services.

**Step 2: Commit**

```bash
git add src/lib/locationContent.ts
git commit -m "feat: update location content generation to remodeling-first"
```

---

### Task 15: Final build verification and smoke test

**Step 1: Run full build**

Run: `cd ~/best-refinishing-new && npx next build 2>&1 | tail -40`

Expected: Build succeeds with ~220+ static pages (149 existing + 78 new remodeling pages)

**Step 2: Verify no 404 on old URLs**

Run: `cd ~/best-refinishing-new && npm run dev &`

Test old URLs still work:
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/bathtub-refinishing
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/locations/seattle/bathtub-refinishing
```
Expected: 200 for both

**Step 3: Verify new URLs work**

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/bathroom-remodeling
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/kitchen-remodeling
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/locations/seattle/bathroom-remodeling
```
Expected: 200 for all

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete remodeling transition - 78 new pages, updated SEO, preserved all existing URLs"
```
