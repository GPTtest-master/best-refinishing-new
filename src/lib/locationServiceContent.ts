import { BUSINESS } from './constants';

// Generate deterministic hash from string
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function pickVariation<T>(variations: T[], seed: string): T {
  return variations[hashString(seed) % variations.length];
}

function pickMultiple<T>(variations: T[], seed: string, count: number): T[] {
  const result: T[] = [];
  const used = new Set<number>();
  for (let i = 0; i < count && i < variations.length; i++) {
    let idx = hashString(seed + i.toString()) % variations.length;
    while (used.has(idx)) {
      idx = (idx + 1) % variations.length;
    }
    used.add(idx);
    result.push(variations[idx]);
  }
  return result;
}

// ============================================
// SERVICE-SPECIFIC CONTENT VARIATIONS
// ============================================

const serviceData: Record<string, {
  name: string;
  shortName: string;
  heroVariations: ((city: string) => string)[];
  descriptionVariations: ((city: string) => string)[];
  benefitsVariations: string[][];
  problemsVariations: string[][];
  processVariations: string[][];
  faqVariations: { q: string; a: (city: string) => string }[][];
}> = {
  'bathtub-refinishing': {
    name: 'Bathtub Refinishing',
    shortName: 'Bathtub',
    heroVariations: [
      (city) => `Transform your worn, stained, or outdated bathtub in ${city} without the hassle of replacement. Our professional refinishing restores your tub to factory-fresh condition in just one day, saving you thousands.`,
      (city) => `${city} homeowners trust our expert bathtub refinishing to bring new life to old tubs. Skip the costly replacement — our advanced coating system delivers stunning results that last 10-15 years.`,
      (city) => `Looking for affordable bathtub restoration in ${city}? Our certified technicians use commercial-grade materials to refinish any tub — porcelain, cast iron, or fiberglass — at a fraction of replacement cost.`,
      (city) => `Why replace when you can refinish? ${city} residents save an average of $4,000 by choosing our professional bathtub reglazing over full replacement. Same-day service, beautiful results.`,
      (city) => `Professional bathtub refinishing in ${city} that exceeds expectations. From chips and cracks to complete color changes, we handle it all with our industry-leading 6-layer coating system.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} bathtub refinishing service is the smart alternative to expensive replacement. Using professional HVLP spray equipment and commercial-grade coatings, we restore bathtubs to like-new condition. The process takes just 4-6 hours, and you can use your tub within 24-48 hours. Every project includes our comprehensive ${BUSINESS.warranty} warranty.`,
      (city) => `${BUSINESS.name} has refinished hundreds of bathtubs throughout ${city}. Our process begins with thorough cleaning and repair of any chips or cracks, followed by our signature 6-layer coating system: 3 coats of bonding primer and 3 coats of premium topcoat. This creates an incredibly durable, glossy finish that resists stains and wear.`,
      (city) => `When ${city} homeowners need bathtub refinishing, they call us. We specialize in restoring all types of tubs including porcelain over steel, cast iron clawfoot tubs, fiberglass, and acrylic. Our eco-friendly coatings are low-odor and safe for your family. Most projects are completed in a single visit.`,
      (city) => `Don't let an ugly bathtub ruin your ${city} bathroom. Our professional reglazing service transforms discolored, chipped, or dated tubs into beautiful centerpieces. We can match any color and even change your tub from one color to another. The result is a smooth, glossy surface that looks and feels like new.`,
    ],
    benefitsVariations: [
      ['Save up to $4,500 vs replacement', 'Done in 4-6 hours', 'Any color available', `${BUSINESS.warranty} warranty included`, 'No demolition required'],
      ['80% cheaper than new tub', 'Same-day completion', 'Custom color matching', 'Chip & crack repair included', 'Eco-friendly materials'],
      ['Avoid weeks of renovation', 'Professional HVLP application', 'Works on all tub types', 'Stain-resistant finish', 'Licensed & insured team'],
      ['Keep your existing plumbing', 'Ready to use in 24-48 hours', 'Restores original shine', '10-15 year lifespan', 'Free detailed estimates'],
    ],
    problemsVariations: [
      ['Chips and cracks', 'Rust stains', 'Worn enamel', 'Outdated colors', 'Hard water buildup'],
      ['Surface scratches', 'Discoloration', 'Peeling finish', 'Dull appearance', 'Mineral deposits'],
      ['Deep staining', 'Rough texture', 'Faded color', 'Multiple chips', 'Previous repair failures'],
    ],
    processVariations: [
      ['Deep cleaning & degreasing', 'Chip & crack repair', 'Surface etching for adhesion', 'Primer application (3 coats)', 'Topcoat application (3 coats)', 'Quality inspection'],
      ['Thorough surface preparation', 'Damage assessment & repair', 'Professional masking', 'Bonding agent application', 'Color coat spraying', 'Final curing & cleanup'],
      ['Remove old caulk & hardware', 'Sand and prep surface', 'Apply bonding primer', 'Spray finish coats', 'Re-caulk and reinstall', 'Final walkthrough'],
    ],
    faqVariations: [
      [
        { q: 'How long does bathtub refinishing take?', a: (city) => `Most bathtub refinishing projects in ${city} are completed in 4-6 hours. You can typically use your tub within 24-48 hours after we finish.` },
        { q: 'How long will the refinished surface last?', a: (city) => `With proper care, your refinished bathtub will last 10-15 years. We back all our ${city} projects with a ${BUSINESS.warranty} warranty.` },
        { q: 'Can you refinish any type of bathtub?', a: () => `Yes! We refinish porcelain, cast iron, fiberglass, acrylic, and cultured marble tubs. Our process works on virtually any bathtub material.` },
      ],
      [
        { q: 'Is refinishing better than replacing?', a: (city) => `For most ${city} homeowners, absolutely. Refinishing costs 70-80% less than replacement, takes hours instead of weeks, and avoids plumbing complications.` },
        { q: 'What colors are available?', a: () => `We offer a full range of colors from classic white to custom shades. We can match virtually any color you want, including converting colored tubs to white.` },
        { q: 'How do I care for a refinished tub?', a: () => `Use non-abrasive cleaners like dish soap. Avoid harsh chemicals, abrasive pads, and suction-cup mats. With gentle care, your finish will stay beautiful for years.` },
      ],
      [
        { q: 'Do you repair chips before refinishing?', a: () => `Yes, chip and crack repair is included in our refinishing service. We fill and smooth all damage before applying our coating system.` },
        { q: 'Is there any odor during refinishing?', a: (city) => `We use low-odor, eco-friendly coatings and provide proper ventilation. Most ${city} customers report minimal odor that dissipates within hours.` },
        { q: 'Can you change the color of my tub?', a: () => `Absolutely! Color changes are one of our most popular requests. We can transform any tub color to match your bathroom updates.` },
      ],
    ],
  },

  'shower-refinishing': {
    name: 'Shower Refinishing',
    shortName: 'Shower',
    heroVariations: [
      (city) => `Revitalize your ${city} shower without costly replacement. Our professional shower refinishing eliminates mold, mildew, and years of buildup while restoring surfaces to pristine condition.`,
      (city) => `${city}'s trusted shower restoration experts. We refinish fiberglass, tile, and acrylic showers with our durable coating system that resists moisture, mold, and daily wear.`,
      (city) => `Transform your tired, stained shower in ${city} for a fraction of replacement cost. Our comprehensive refinishing includes walls, floor, and fixtures — all completed in one day.`,
      (city) => `Professional shower refinishing throughout ${city}. Say goodbye to grout problems, surface stains, and outdated colors. Our mold-resistant finish keeps your shower beautiful for years.`,
      (city) => `${city} homeowners choose our shower refinishing for lasting results. We restore the entire shower enclosure with our commercial-grade, moisture-resistant coating system.`,
    ],
    descriptionVariations: [
      (city) => `Our ${city} shower refinishing service addresses the unique challenges of shower enclosures. We apply specialized moisture-resistant coatings that prevent mold growth and water damage. The process includes complete surface restoration of walls, floor, and any built-in features.`,
      (city) => `Shower refinishing in ${city} doesn't have to mean expensive renovation. Our team restores fiberglass shower units, tiled enclosures, and acrylic surrounds with professional-grade materials. We seal grout lines and create a smooth, easy-to-clean surface.`,
      (city) => `${BUSINESS.name} specializes in complete shower restoration for ${city} homes. Our anti-microbial coatings resist mold and mildew while our slip-resistant additives improve safety. Every project includes thorough preparation and our ${BUSINESS.warranty} warranty.`,
      (city) => `When your ${city} shower needs more than cleaning, refinishing is the answer. We eliminate stubborn stains, repair damage, and apply a fresh finish that transforms your shower into a clean, inviting space. Optional anti-slip coating available.`,
    ],
    benefitsVariations: [
      ['Eliminates mold & mildew', 'Moisture-resistant finish', 'Anti-slip options available', 'Seals grout lines', 'Same-day service'],
      ['Prevents water damage', 'Easy-to-clean surface', 'Mold-resistant coating', 'Complete enclosure restoration', `${BUSINESS.warranty} warranty`],
      ['No demolition needed', 'Works on all materials', 'Custom color options', 'Restores grout & tile', 'Professional application'],
    ],
    problemsVariations: [
      ['Mold and mildew stains', 'Cracked grout', 'Faded surfaces', 'Hard water deposits', 'Soap scum buildup'],
      ['Peeling caulk', 'Discolored tiles', 'Rough texture', 'Leaking seams', 'Dated appearance'],
      ['Surface erosion', 'Stained grout lines', 'Chipped corners', 'Mineral buildup', 'Dull finish'],
    ],
    processVariations: [
      ['Remove old caulk & seals', 'Deep clean all surfaces', 'Repair chips & cracks', 'Apply bonding primer', 'Spray finish coats', 'Re-seal all joints'],
      ['Thorough decontamination', 'Grout line restoration', 'Surface preparation', 'Moisture barrier application', 'Topcoat finishing', 'Quality assurance check'],
    ],
    faqVariations: [
      [
        { q: 'Can you refinish a fiberglass shower?', a: (city) => `Yes! Fiberglass shower refinishing is one of our most common services in ${city}. We restore faded, stained, or damaged fiberglass to like-new condition.` },
        { q: 'Will refinishing prevent mold?', a: () => `Our moisture-resistant coatings and anti-microbial additives help prevent mold growth. Combined with proper ventilation, your refinished shower stays cleaner longer.` },
        { q: 'How long until I can use my shower?', a: () => `We recommend waiting 24-48 hours before using your refinished shower. This allows the coating to fully cure for maximum durability.` },
      ],
      [
        { q: 'Do you refinish shower floors?', a: () => `Yes, we refinish complete shower enclosures including floors. We can add slip-resistant texture for improved safety.` },
        { q: 'Can you fix cracked grout?', a: (city) => `Absolutely. Our ${city} shower refinishing includes grout repair and sealing. The new finish creates a smooth, waterproof surface over existing grout.` },
        { q: 'Is the finish waterproof?', a: () => `Yes, our shower refinishing creates a waterproof barrier that protects against moisture penetration and water damage.` },
      ],
    ],
  },

  'tile-refinishing': {
    name: 'Tile & Grout Refinishing',
    shortName: 'Tile',
    heroVariations: [
      (city) => `Transform dated or damaged tile in your ${city} home without demolition. Our professional tile refinishing covers ceramic, porcelain, and grout with a fresh, modern finish.`,
      (city) => `${city} tile refinishing that saves thousands over replacement. We restore bathroom and kitchen tiles to like-new condition, including complete grout line renovation.`,
      (city) => `Hate your pink, green, or brown tiles? ${city} homeowners love our tile color transformation service. We refinish any tile color to modern white or custom shades.`,
      (city) => `Professional tile and grout refinishing throughout ${city}. Skip the messy renovation — our one-day service completely transforms your tiled surfaces.`,
      (city) => `Affordable tile restoration for ${city} homes. Our refinishing process covers stains, repairs chips, and seals grout for a beautiful, easy-to-maintain finish.`,
    ],
    descriptionVariations: [
      (city) => `Tile refinishing in ${city} is the smart choice for updating your bathroom or kitchen. Our process covers existing ceramic or porcelain tiles with a durable new finish, eliminating the need for costly demolition. We also address grout lines for a complete transformation.`,
      (city) => `${BUSINESS.name} has helped hundreds of ${city} homeowners transform their tile without replacement. Our coating system adheres to glazed and unglazed tiles, creating a smooth, stain-resistant surface. The result looks like brand new tile installation.`,
      (city) => `Whether you want to change tile color or simply refresh existing tiles, our ${city} team delivers exceptional results. We prep surfaces thoroughly, repair any damage, and apply multiple coats for lasting beauty. Grout refinishing is always included.`,
      (city) => `Old tile doesn't have to mean expensive renovation. Our ${city} tile refinishing service is perfect for homeowners who want a fresh look without the dust, noise, and expense of tile replacement. Modern colors and finishes available.`,
    ],
    benefitsVariations: [
      ['No messy demolition', 'Includes grout restoration', 'Any color available', 'Covers existing tile', 'Done in one day'],
      ['Save up to 80% vs replacement', 'Updates dated colors', 'Smooth, easy-clean finish', 'Works on walls & floors', 'Stain-resistant surface'],
      ['Skip weeks of renovation', 'Preserves room layout', 'Custom color matching', 'Repairs chips & cracks', `${BUSINESS.warranty} warranty`],
    ],
    problemsVariations: [
      ['Dated tile colors', 'Cracked tiles', 'Stained grout', 'Worn glaze', 'Chipped edges'],
      ['Discolored tiles', 'Mold in grout', 'Dull surfaces', 'Hard water stains', 'Soap buildup'],
      ['Faded patterns', 'Loose tiles', 'Dirty grout lines', 'Scratched surfaces', 'Outdated style'],
    ],
    processVariations: [
      ['Deep tile cleaning', 'Grout repair & filling', 'Surface etching', 'Primer application', 'Color coat spraying', 'Grout line finishing'],
      ['Remove soap & mineral deposits', 'Repair damaged tiles', 'Prepare bonding surface', 'Apply base coat', 'Spray finish layers', 'Detail grout areas'],
    ],
    faqVariations: [
      [
        { q: 'Can you change tile color?', a: (city) => `Yes! Color changes are our specialty. We regularly transform dated pink, green, or brown tiles to modern white or custom colors for ${city} homeowners.` },
        { q: 'Do you refinish floor tiles?', a: () => `We refinish wall tiles but typically recommend replacement for floor tiles in high-traffic areas. Floor tiles experience more wear that can affect refinishing longevity.` },
        { q: 'What about the grout?', a: () => `Grout refinishing is included in our tile service. We clean, repair, and coat grout lines along with the tiles for a complete, uniform finish.` },
      ],
      [
        { q: 'How long does tile refinishing last?', a: () => `With proper care, refinished tiles last 10-15 years. We recommend using gentle, non-abrasive cleaners to maintain the finish.` },
        { q: 'Is any tile too damaged to refinish?', a: (city) => `Most tiles can be refinished, but severely cracked or loose tiles may need replacement first. We assess every ${city} project and provide honest recommendations.` },
        { q: 'Can you match my existing bathroom color?', a: () => `Yes, we offer custom color matching to coordinate with your fixtures, vanity, or décor preferences.` },
      ],
    ],
  },

  'sink-refinishing': {
    name: 'Sink Refinishing',
    shortName: 'Sink',
    heroVariations: [
      (city) => `Restore your kitchen or bathroom sink in ${city} to showroom condition. Our professional sink refinishing eliminates stains, chips, and wear at a fraction of replacement cost.`,
      (city) => `${city} sink refinishing experts. We restore porcelain, cast iron, and cultured marble sinks with durable coatings that last for years.`,
      (city) => `Don't replace that stained sink — refinish it! ${city} homeowners save hundreds with our quick, affordable sink restoration service.`,
      (city) => `Professional sink reglazing throughout ${city}. From bathroom vanity sinks to kitchen farm sinks, we restore all types to like-new condition.`,
      (city) => `Transform your worn, chipped sink in ${city} with our same-day refinishing service. Chips repaired, stains eliminated, beauty restored.`,
    ],
    descriptionVariations: [
      (city) => `Sink refinishing in ${city} is a cost-effective way to update your kitchen or bathroom. Our process restores the smooth, glossy finish of your sink while repairing chips and eliminating stains. Most sink projects are completed in just 2-3 hours.`,
      (city) => `${BUSINESS.name} refinishes all types of sinks for ${city} homeowners: porcelain, cast iron, fiberglass, cultured marble, and more. Our stain-resistant coatings stand up to daily use while maintaining their beautiful appearance.`,
      (city) => `Whether your ${city} bathroom sink has rust stains or your kitchen sink is chipped, our refinishing service provides the perfect solution. We prep, repair, and apply professional coatings for lasting results.`,
      (city) => `Old sinks don't need to look old. Our ${city} sink refinishing transforms dated or damaged sinks with fresh, durable finishes. Choose from various colors to match your décor updates.`,
    ],
    benefitsVariations: [
      ['Quick 2-3 hour service', 'Stain-resistant finish', 'Chip repair included', 'All sink types', 'Affordable pricing'],
      ['Same-day completion', 'Eliminates rust stains', 'Smooth glossy surface', 'Color options available', `${BUSINESS.warranty} warranty`],
      ['No plumbing changes needed', 'Restores original shine', 'Works on any material', 'Durable daily-use coating', 'Professional results'],
    ],
    problemsVariations: [
      ['Rust stains', 'Chips and scratches', 'Worn enamel', 'Discoloration', 'Hard water buildup'],
      ['Surface pitting', 'Faded color', 'Deep staining', 'Rough texture', 'Multiple chips'],
    ],
    processVariations: [
      ['Thorough cleaning', 'Rust & stain removal', 'Chip repair filling', 'Surface preparation', 'Primer & topcoat application', 'Final polishing'],
      ['Degrease surface', 'Repair all damage', 'Sand for adhesion', 'Apply bonding coat', 'Spray finish layers', 'Quality inspection'],
    ],
    faqVariations: [
      [
        { q: 'How long does sink refinishing take?', a: (city) => `Most ${city} sink refinishing projects are completed in 2-3 hours. You can use your sink again within 24 hours.` },
        { q: 'Can you fix rust stains?', a: () => `Yes, we remove rust stains before refinishing. Our coating then prevents future rust formation.` },
        { q: 'Do you refinish kitchen sinks?', a: () => `Absolutely! We refinish both bathroom and kitchen sinks, including deep farm sinks and double-bowl styles.` },
      ],
      [
        { q: 'What sink materials can you refinish?', a: () => `We refinish porcelain, cast iron, fiberglass, cultured marble, and acrylic sinks. Most sink materials accept our coating system.` },
        { q: 'Can you change the sink color?', a: (city) => `Yes! ${city} homeowners often request color changes. We can transform any sink color to white or custom shades.` },
        { q: 'How long does the finish last?', a: () => `With proper care using non-abrasive cleaners, a refinished sink lasts 10-15 years. We include a ${BUSINESS.warranty} warranty.` },
      ],
    ],
  },

  'countertop-refinishing': {
    name: 'Countertop Refinishing',
    shortName: 'Countertop',
    heroVariations: [
      (city) => `Update your ${city} kitchen or bathroom countertops without replacement. Our professional refinishing transforms laminate, tile, and cultured marble surfaces with stunning results.`,
      (city) => `${city} countertop refinishing that rivals expensive stone installation. Get the look of granite or marble at a fraction of the cost.`,
      (city) => `Transform dated countertops in ${city} with our one-day refinishing service. Modern finishes, stone-look options, and custom colors available.`,
      (city) => `Why replace when you can refinish? ${city} homeowners save thousands on countertop updates with our professional resurfacing service.`,
      (city) => `Professional countertop restoration throughout ${city}. We refinish laminate, tile, cultured marble, and solid surface countertops to like-new condition.`,
    ],
    descriptionVariations: [
      (city) => `Countertop refinishing in ${city} offers a budget-friendly path to kitchen and bathroom updates. Our durable coatings can mimic granite, marble, or solid colors. The process covers existing surfaces without demolition.`,
      (city) => `${BUSINESS.name} transforms outdated countertops for ${city} homeowners. Whether you have laminate, tile, or cultured marble, our refinishing creates a fresh, modern surface that withstands daily use.`,
      (city) => `Skip the expensive countertop replacement in ${city}. Our refinishing process applies heat-resistant, stain-resistant coatings that look beautiful and perform well. Multiple finish options available.`,
      (city) => `Dreaming of new countertops but not the price tag? ${city} residents choose our refinishing service for affordable transformations. Stone-look finishes, solid colors, and custom patterns available.`,
    ],
    benefitsVariations: [
      ['Stone-look finishes available', 'Heat-resistant coating', 'No demolition required', 'One-day transformation', 'Custom colors'],
      ['Save vs replacement', 'Stain-resistant surface', 'Works on laminate & tile', 'Seamless appearance', `${BUSINESS.warranty} warranty`],
      ['Granite & marble looks', 'Covers existing surface', 'Multiple finish options', 'Professional application', 'Affordable updates'],
    ],
    problemsVariations: [
      ['Dated laminate patterns', 'Burns and stains', 'Worn surfaces', 'Chipped edges', 'Outdated colors'],
      ['Scratched finish', 'Water damage', 'Dull appearance', 'Peeling laminate', 'Faded patterns'],
    ],
    processVariations: [
      ['Surface cleaning', 'Damage repair', 'Primer application', 'Decorative coating', 'Clear topcoat', 'Edge finishing'],
      ['Degrease and prep', 'Fill chips & seams', 'Apply bonding agent', 'Spray color coat', 'Add protective layers', 'Final inspection'],
    ],
    faqVariations: [
      [
        { q: 'Can you make my countertop look like granite?', a: (city) => `Yes! Our decorative finishes can mimic granite, marble, and other stone looks for a fraction of the cost. Very popular with ${city} homeowners.` },
        { q: 'Is the finish heat-resistant?', a: () => `Our countertop coatings are heat-resistant for normal use. We recommend using trivets for very hot pots and pans.` },
        { q: 'How long does countertop refinishing last?', a: () => `With proper care, refinished countertops last 10-15 years. We include a ${BUSINESS.warranty} warranty on all projects.` },
      ],
      [
        { q: 'What countertop materials can you refinish?', a: () => `We refinish laminate, tile, cultured marble, and solid surface countertops. Natural stone typically doesn't need refinishing.` },
        { q: 'Can you change the countertop color?', a: (city) => `Absolutely! Color changes are one of our most popular services in ${city}. We offer solid colors, stone-looks, and custom options.` },
        { q: 'Do you refinish bathroom vanity tops?', a: () => `Yes, we refinish countertops in both kitchens and bathrooms. Bathroom vanity tops are a quick, affordable update.` },
      ],
    ],
  },

  'repair': {
    name: 'Chip & Crack Repair',
    shortName: 'Repair',
    heroVariations: [
      (city) => `Expert chip and crack repair in ${city}. We fix damage on bathtubs, sinks, tile, and countertops with invisible results. Fast, affordable service.`,
      (city) => `Don't live with chips and cracks. ${city}'s trusted repair specialists fix surface damage on any bathroom or kitchen fixture quickly and affordably.`,
      (city) => `Professional surface repair throughout ${city}. Our invisible repair technique fixes chips, cracks, and scratches without full refinishing.`,
      (city) => `Small damage, quick fix. ${city} homeowners rely on us for expert chip and crack repairs that blend seamlessly with surrounding surfaces.`,
      (city) => `Save your surfaces in ${city}. Our targeted repair service fixes chips, cracks, and scratches on tubs, sinks, tiles, and more — often same day.`,
    ],
    descriptionVariations: [
      (city) => `Not every surface needs full refinishing. Our ${city} chip and crack repair service provides targeted fixes for minor damage. We match colors and textures for invisible results.`,
      (city) => `${BUSINESS.name} offers expert repair services throughout ${city}. Whether it's a chip in your bathtub, a crack in your sink, or damage to your tiles, we fix it quickly and affordably.`,
      (city) => `Our ${city} repair technicians specialize in making damage disappear. We fill, smooth, and color-match repairs so they blend perfectly with the original surface.`,
      (city) => `Chips and cracks can worsen over time and lead to bigger problems. Our ${city} repair service stops damage in its tracks and restores your surfaces to excellent condition.`,
    ],
    benefitsVariations: [
      ['Same-day service available', 'Invisible repairs', 'Prevents further damage', 'Affordable pricing', 'All surfaces'],
      ['Quick turnaround', 'Color-matched finish', 'Stops water intrusion', 'No full refinishing needed', 'Expert technicians'],
      ['Extends surface life', 'Seamless blending', 'Minor to moderate damage', 'Fast & affordable', 'Professional results'],
    ],
    problemsVariations: [
      ['Impact chips', 'Hairline cracks', 'Surface scratches', 'Edge chips', 'Minor holes'],
      ['Dropped object damage', 'Stress cracks', 'Abrasion marks', 'Corner chips', 'Small gouges'],
    ],
    processVariations: [
      ['Damage assessment', 'Surface cleaning', 'Chip/crack filling', 'Smoothing & sanding', 'Color matching', 'Final sealing'],
      ['Evaluate extent of damage', 'Prepare repair area', 'Apply filler compound', 'Blend with surface', 'Touch-up coating', 'Buff and finish'],
    ],
    faqVariations: [
      [
        { q: 'How small of a chip can you repair?', a: () => `We repair chips of all sizes, from small pinpoint damage to larger impact marks. Even small chips should be fixed to prevent water damage.` },
        { q: 'Will the repair be visible?', a: (city) => `Our ${city} technicians are experts at color matching and blending. Most repairs are virtually invisible once completed.` },
        { q: 'How long does repair take?', a: () => `Most chip and crack repairs are completed in 1-2 hours. You can typically use the surface within 24 hours.` },
      ],
      [
        { q: 'Can you repair multiple chips at once?', a: () => `Yes, we can address multiple areas of damage in a single visit. This is often more cost-effective than individual repairs.` },
        { q: 'Is repair or refinishing better?', a: (city) => `For isolated damage, repair is faster and more affordable. For widespread wear or color changes, refinishing is the better choice. We help ${city} homeowners decide.` },
        { q: 'Do repairs come with a warranty?', a: () => `Yes, our repairs are covered by our ${BUSINESS.warranty} warranty against peeling or failure.` },
      ],
    ],
  },
};

// ============================================
// CITY-SPECIFIC VARIATIONS
// ============================================

const cityContextVariations = [
  (city: string) => `Serving ${city} homeowners with pride`,
  (city: string) => `${city}'s most trusted refinishing team`,
  (city: string) => `Dedicated to ${city} home improvement`,
  (city: string) => `Your local ${city} refinishing experts`,
  (city: string) => `Professional service throughout ${city}`,
];

const whyChooseVariations = [
  (city: string, service: string) => `${city} homeowners choose ${BUSINESS.name} for ${service.toLowerCase()} because we deliver exceptional results, on time and on budget. Our ${BUSINESS.experience}+ years of experience means we've seen it all and can handle any challenge.`,
  (city: string, service: string) => `When it comes to ${service.toLowerCase()} in ${city}, experience matters. Our certified technicians have completed hundreds of projects and bring expertise to every job. That's why we confidently offer our ${BUSINESS.warranty} warranty.`,
  (city: string, service: string) => `${city} residents deserve the best ${service.toLowerCase()} service, and that's exactly what we provide. From our first call to the final walkthrough, we focus on your complete satisfaction.`,
  (city: string, service: string) => `We've built our reputation in ${city} one project at a time. Our ${service.toLowerCase()} work speaks for itself — just ask our ${BUSINESS.reviewCount}+ satisfied customers who've rated us ${BUSINESS.rating} stars.`,
];

// ============================================
// REVIEW GENERATION
// ============================================

const firstNames = ['Michael', 'Jennifer', 'David', 'Sarah', 'Robert', 'Lisa', 'James', 'Emily', 'John', 'Amanda', 'William', 'Ashley', 'Christopher', 'Nicole', 'Daniel', 'Michelle', 'Matthew', 'Stephanie', 'Thomas', 'Elizabeth'];
const lastInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W'];

const reviewTemplates: ((city: string, service: string) => string)[] = [
  (city, service) => `Had our ${service.toLowerCase()} done by ${BUSINESS.name} and couldn't be happier! The technician was professional, on time, and the results are amazing. Highly recommend to anyone in ${city}.`,
  (city, service) => `We were quoted $${Math.floor(3000 + Math.random() * 2000)} for replacement, but ${service.toLowerCase()} from these guys cost a fraction of that. Looks brand new! Great service in ${city}.`,
  (city, service) => `From the first call to completion, everything was perfect. The ${service.toLowerCase()} work exceeded our expectations. Our ${city} home looks so much better now.`,
  (city, service) => `The team was incredibly professional. They explained the ${service.toLowerCase()} process, finished on time, and cleaned up perfectly. Best home improvement decision for our ${city} house.`,
  (city, service) => `Amazing transformation! Our old, worn surface looks factory-new after the ${service.toLowerCase()}. The ${BUSINESS.warranty} warranty gives us peace of mind. Thanks for the great work in ${city}!`,
  (city, service) => `Quick, clean, and affordable. The ${service.toLowerCase()} results speak for themselves. We've already recommended them to our ${city} neighbors.`,
  (city, service) => `Skeptical at first, but the ${service.toLowerCase()} looks incredible. Can't believe it's the same surface. Worth every penny — great service in ${city}.`,
  (city, service) => `The technician knew exactly what he was doing. Professional ${service.toLowerCase()} at a fair price. Our ${city} bathroom looks completely updated now.`,
];

function generateReviews(city: string, service: string, serviceName: string): { name: string; rating: number; text: string; date: string }[] {
  const reviews: { name: string; rating: number; text: string; date: string }[] = [];
  const seed = city + service;

  for (let i = 0; i < 4; i++) {
    const nameIdx = hashString(seed + 'name' + i) % firstNames.length;
    const lastIdx = hashString(seed + 'last' + i) % lastInitials.length;
    const templateIdx = hashString(seed + 'template' + i) % reviewTemplates.length;

    const monthsAgo = (hashString(seed + 'date' + i) % 5) + 1;
    const date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);

    reviews.push({
      name: `${firstNames[nameIdx]} ${lastInitials[lastIdx]}.`,
      rating: 5,
      text: reviewTemplates[templateIdx](city, serviceName),
      date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    });
  }

  return reviews;
}

// ============================================
// MAIN EXPORT FUNCTION
// ============================================

export interface LocationServiceContent {
  // Meta
  title: string;
  metaDescription: string;
  h1: string;

  // Content
  heroText: string;
  description: string;
  whyChoose: string;
  cityContext: string;

  // Lists
  benefits: string[];
  problems: string[];
  process: string[];

  // FAQ
  faqs: { question: string; answer: string }[];

  // Reviews
  reviews: { name: string; rating: number; text: string; date: string }[];

  // Service info
  serviceName: string;
  serviceShortName: string;
  price: string;
}

export function getLocationServiceContent(
  cityName: string,
  cityId: string,
  serviceSlug: string,
  servicePrice: string
): LocationServiceContent {
  const service = serviceData[serviceSlug];
  if (!service) {
    throw new Error(`Unknown service: ${serviceSlug}`);
  }

  const seed = cityId + serviceSlug;

  // Pick variations using deterministic hash
  const heroText = pickVariation(service.heroVariations, seed + 'hero')(cityName);
  const description = pickVariation(service.descriptionVariations, seed + 'desc')(cityName);
  const benefits = pickVariation(service.benefitsVariations, seed + 'benefits');
  const problems = pickVariation(service.problemsVariations, seed + 'problems');
  const process = pickVariation(service.processVariations, seed + 'process');
  const faqSet = pickVariation(service.faqVariations, seed + 'faq');
  const whyChoose = pickVariation(whyChooseVariations, seed + 'why')(cityName, service.name);
  const cityContext = pickVariation(cityContextVariations, seed + 'context')(cityName);

  const faqs = faqSet.map(f => ({
    question: f.q,
    answer: f.a(cityName),
  }));

  const reviews = generateReviews(cityName, serviceSlug, service.name);

  return {
    title: `${service.name} in ${cityName}, WA | ${BUSINESS.name}`,
    metaDescription: `Professional ${service.name.toLowerCase()} in ${cityName}, WA. Save 80% vs replacement. ${BUSINESS.warranty} warranty. ${BUSINESS.experience}+ years experience. Call ${BUSINESS.phone} for free quote.`,
    h1: `${service.name} in ${cityName}`,

    heroText,
    description,
    whyChoose,
    cityContext,

    benefits,
    problems,
    process,
    faqs,
    reviews,

    serviceName: service.name,
    serviceShortName: service.shortName,
    price: servicePrice,
  };
}

// Export list of service slugs for static generation
export const SERVICE_SLUGS = [
  'bathtub-refinishing',
  'shower-refinishing',
  'tile-refinishing',
  'sink-refinishing',
  'countertop-refinishing',
  'repair',
] as const;
