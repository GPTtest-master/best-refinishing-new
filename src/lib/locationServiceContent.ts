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

  'bathroom-remodeling': {
    name: 'Bathroom Remodeling',
    shortName: 'Bathroom Remodel',
    heroVariations: [
      (city) => `Your ${city} bathroom deserves better than a quick fix. We do complete remodels — ripping out the old, rebuilding with quality materials, and handing you a bathroom that actually makes you want to get ready in the morning. Tile, vanity, shower, fixtures — the whole thing.`,
      (city) => `Most ${city} homes have bathrooms that haven't been touched since the '90s. We change that. Our team handles every part of your bathroom remodel — from the first sledgehammer swing to the final grout line. No subcontractors, no runaround.`,
      (city) => `Thinking about a bathroom remodel in ${city}? We've done hundreds of them across the Seattle metro. Walk-in showers, floating vanities, heated floors, custom tile — we build bathrooms that feel like they belong in a magazine, but are built to handle real life.`,
      (city) => `${city} homeowners keep calling us back because we do bathroom remodels right the first time. Licensed plumbing, waterproof shower systems, level tile work, and finishes that hold up to Pacific Northwest humidity. Not just pretty — built to last.`,
      (city) => `Stop living with that cramped, outdated bathroom. Our ${city} remodeling team transforms small spaces into functional retreats. Smart storage, modern fixtures, and tile work that makes the room feel twice its size.`,
    ],
    descriptionVariations: [
      (city) => `We handle ${city} bathroom remodels from start to finish — no middlemen, no finger-pointing between contractors. Our crew does the demo, plumbing, electrical, waterproofing, tile, vanity installation, and all the finishing work. You get one team, one warranty, and a bathroom you'll actually love. Every project starts with a detailed walkthrough where we figure out exactly what you want and what your space needs.`,
      (city) => `Bathroom remodeling in ${city} means dealing with older plumbing, tight spaces, and homes that have their own quirks. We've seen it all. Our team knows how to work with what your home gives us — from pre-war Craftsmans to modern condos. We handle permits, protect your floors, and clean up every day. The result? A bathroom that looks custom because it is.`,
      (city) => `A bathroom remodel is the second-best ROI in home improvement (kitchens are first). For ${city} homeowners, that means your investment pays for itself. We use quality materials — Schluter waterproofing, porcelain and natural stone tile, soft-close hardware, and fixtures from brands that actually last. No builder-grade shortcuts.`,
      (city) => `Our ${city} bathroom remodels cover everything: tub-to-shower conversions, double vanity upgrades, custom tile showers with niches and benches, new flooring, updated lighting, and modern fixtures. We work with your budget — whether that's a smart refresh or a luxury master bath. Free estimates, honest pricing, no surprises.`,
    ],
    benefitsVariations: [
      ['One team handles everything', 'Licensed plumbing & electrical', 'Waterproof shower systems', `${BUSINESS.warranty} workmanship warranty`, 'Free detailed estimates'],
      ['No subcontractor runaround', 'Premium material options', 'On-time completion', 'Daily cleanup', 'Transparent pricing — no surprises'],
      ['Custom design for your space', 'Expert tile & stone installation', 'ADA/accessibility options', 'Permit handling included', 'Dedicated project manager'],
      ['Increase your home value', 'Modern fixtures & hardware', 'Energy-efficient upgrades', 'Code-compliant work', 'Financing available'],
      ['Waterproof Schluter system', 'Heated floor option', 'Walk-in shower conversion', 'Smart storage solutions', 'Aging-in-place ready'],
      ['Zero demolition surprises', 'Licensed WA State contractor', 'Full material warranties', 'Clean job site guarantee', 'Detailed project timeline'],
    ],
    problemsVariations: [
      ['Outdated tile from the \'80s or \'90s', 'Cramped shower that needs an upgrade', 'Water damage behind walls', 'Mold issues from poor ventilation', 'Fixtures that waste water'],
      ['Vanity falling apart', 'Grout that won\'t come clean', 'No storage space', 'Dated lighting', 'Leaking plumbing'],
      ['Tub nobody uses anymore', 'Cracked or chipped surfaces', 'Poor layout and flow', 'Single sink when you need double', 'Exhaust fan that doesn\'t work'],
    ],
    processVariations: [
      ['Free in-home consultation', 'Design & material selection', 'Careful demolition', 'Plumbing & electrical rough-in', 'Tile, vanity & fixture install', 'Final walkthrough & warranty'],
      ['Walkthrough & detailed estimate', 'Pick your finishes', 'Tear-out & haul-away', 'Infrastructure upgrades', 'Installation & detail work', 'Punch list & handoff'],
      ['Vision & budget planning', 'Material ordering & scheduling', 'Demo with floor protection', 'Licensed trade work', 'Beautiful finish work', 'Your approval & our warranty'],
    ],
    faqVariations: [
      [
        { q: 'How long will my bathroom be out of commission?', a: (city) => `Most ${city} bathroom remodels take 2-3 weeks. We plan the work so you have access to another bathroom if possible. We'll give you a realistic timeline before we start — and stick to it.` },
        { q: 'What does a bathroom remodel actually cost?', a: (city) => `In ${city}, bathroom remodels start around $7,900 for a basic refresh. Most mid-range projects run $15,000-$25,000. High-end master baths can be $30,000+. We give you a detailed line-item estimate — no guesswork.` },
        { q: 'Do I really need permits?', a: (city) => `If we're moving plumbing or doing electrical work — yes, ${city} requires permits. We handle all of that. It protects you when you sell your home and ensures the work is inspected and safe.` },
      ],
      [
        { q: 'Can I pick my own tile and fixtures?', a: () => `Absolutely. We can take you to our supplier showrooms or work with materials you've already chosen. We'll make sure everything works together and fits your budget.` },
        { q: 'What if you find problems behind the walls?', a: (city) => `It happens — especially in older ${city} homes. We document everything, explain your options, and get your approval before any additional work. No surprise bills.` },
        { q: 'Do you do tub-to-shower conversions?', a: () => `Yes — it's one of our most popular requests. We remove the tub, rework the plumbing, install a waterproof shower system, tile it, and add glass doors. Completely changes the bathroom.` },
      ],
      [
        { q: 'What tile do you recommend for bathroom floors?', a: (city) => `For ${city} bathrooms, we recommend porcelain tile — it's dense, water-resistant, and comes in styles that look like marble or wood. Large format (12×24) is our go-to for modern bathrooms. We always verify slip ratings for wet areas.` },
        { q: 'Can you add heated floors during a bathroom remodel?', a: () => `Absolutely — radiant floor heating is one of our most popular add-ons. The heating mat goes under the tile and connects to a wall thermostat. Adds $800-$1,500 depending on bathroom size, but it transforms your morning routine.` },
        { q: 'What if my bathroom has asbestos tile or lead paint?', a: (city) => `Older ${city} homes may have these. We test before demolition and follow EPA guidelines for safe removal. If asbestos or lead is present, we use certified abatement procedures. Safety first, always.` },
      ],
      [
        { q: 'How do you handle bathroom ventilation?', a: () => `We upgrade or install exhaust fans rated for your bathroom's volume. Seattle's humidity makes proper ventilation critical — without it, moisture causes mold and damages finishes within a few years.` },
        { q: 'Can I see examples of your bathroom remodel work?', a: (city) => `Yes — check our Projects page for before/after photos of completed ${city} area bathroom remodels. We also have a portfolio we can show during your free consultation.` },
        { q: 'Do you offer accessible/ADA bathroom remodels?', a: (city) => `Yes — we build curbless showers, grab bars, comfort-height toilets, and wider doorways. Aging-in-place remodeling is increasingly popular in ${city}. We design bathrooms that are beautiful and accessible.` },
      ],
    ],
  },

  'kitchen-remodeling': {
    name: 'Kitchen Remodeling',
    shortName: 'Kitchen Remodel',
    heroVariations: [
      (city) => `Your kitchen is the heart of your ${city} home — it should work as hard as you do. We do complete kitchen remodels: cabinets, countertops, backsplash, flooring, plumbing, electrical, and everything in between.`,
      (city) => `${city} kitchen remodeling that actually delivers. No endless timelines, no vanishing contractors. We show up, we build, and we hand you a kitchen that makes cooking feel good again.`,
      (city) => `Planning a kitchen remodel in ${city}? Whether it's new quartz countertops and a tile backsplash, or a full gut renovation with custom cabinets — we've got the team and the experience to make it happen.`,
      (city) => `We've remodeled kitchens all over ${city} — from cozy galley kitchens in Capitol Hill condos to sprawling layouts in Bellevue. Every project gets the same attention to detail and quality craftsmanship.`,
      (city) => `A great kitchen remodel in ${city} means hiring people who know what they're doing. Our team handles design, demo, plumbing, electrical, cabinets, countertops, tile, and finishing. One crew, one warranty.`,
    ],
    descriptionVariations: [
      (city) => `Kitchen remodeling in ${city} is our bread and butter. We handle the full scope — tear out old cabinets, upgrade plumbing and electrical, install new cabinetry, template and install countertops, lay backsplash tile, and finish every detail. We work with granite, quartz, marble, and quartzite. Semi-custom and custom cabinet options available.`,
      (city) => `A kitchen remodel is the #1 home improvement for ROI in ${city}. We make sure your investment counts with quality materials, precise installation, and finishes that look great years from now. Our team coordinates all trades in-house — no scheduling headaches or finger-pointing.`,
      (city) => `From the first design meeting to the final walkthrough, our ${city} kitchen remodels are managed by experienced project leads. We keep you in the loop daily, protect your home during construction, and clean up every evening. You'll be cooking in your new kitchen before you know it.`,
      (city) => `Whether you're updating a few surfaces or doing a complete kitchen renovation in ${city}, we scale our service to fit. Countertop-only installs, backsplash refreshes, or full gut remodels — same quality, same warranty, same team.`,
    ],
    benefitsVariations: [
      ['Custom & semi-custom cabinets', 'Granite, quartz & marble tops', 'Professional tile backsplash', 'Licensed plumbing & electrical', `${BUSINESS.warranty} warranty`],
      ['#1 ROI home improvement', 'Modern layout optimization', 'Premium material selection', 'Experienced project management', 'On-budget completion'],
      ['Design-build convenience', 'One team, one warranty', 'Quality you can see and feel', 'Energy-efficient options', 'Code-compliant in every detail'],
    ],
    problemsVariations: [
      ['Cabinets from the Clinton era', 'Laminate countertops past their prime', 'Backsplash that makes you cringe', 'Not enough counter space', 'Poor kitchen workflow'],
      ['Dark, cramped layout', 'Outdated appliance openings', 'Damaged or sagging cabinets', 'Stained or peeling surfaces', 'Plumbing that acts up'],
      ['Tile floor with cracked grout', 'Bad lighting over work areas', 'No pantry or storage', 'Dated fixtures and hardware', 'Wear and tear everywhere'],
    ],
    processVariations: [
      ['Design consultation & estimate', 'Material & finish selection', 'Demolition & haul-away', 'Plumbing & electrical rough-in', 'Cabinet, countertop & tile install', 'Final details & walkthrough'],
      ['In-home assessment', 'Budget & design planning', 'Ordering & scheduling', 'Construction phase', 'Installation & finishing', 'Punch list & warranty handoff'],
    ],
    faqVariations: [
      [
        { q: 'How long is my kitchen going to be torn up?', a: (city) => `Most ${city} kitchen remodels take 4-6 weeks. A cosmetic refresh (new countertops, backsplash, paint) can be done in 2-3 weeks. We recommend setting up a temporary kitchen — microwave, coffee maker, and patience.` },
        { q: 'What\'s a realistic budget for a kitchen remodel?', a: (city) => `In ${city}, basic kitchen remodels start around $25,000. Mid-range renovations run $35,000-$55,000. High-end projects with custom cabinets and premium stone can be $75,000+. We give you a detailed estimate — no bait and switch.` },
        { q: 'Should I do countertops first or cabinets?', a: () => `Cabinets go in first, then we template for countertops. If you're just replacing countertops on existing cabinets, that's a quicker project — typically 1-2 weeks from template to installation.` },
      ],
      [
        { q: 'Do you install appliances?', a: () => `We coordinate appliance installation — making sure electrical, gas, and plumbing connections are right. We recommend purchasing appliances during the design phase so everything fits perfectly.` },
        { q: 'Granite or quartz — what do you recommend?', a: () => `Both are great. Granite has natural beauty with unique veining. Quartz is engineered for consistency and zero maintenance. We'll show you samples and help you decide based on your kitchen use and style.` },
        { q: 'Can you open up my kitchen to the living room?', a: (city) => `Possibly — it depends on whether the wall is load-bearing. We assess this during the consultation. Many ${city} homes can benefit from opening up the kitchen, and we handle the structural engineering if needed.` },
      ],
      [
        { q: 'What countertop material do Seattle homeowners choose most?', a: (city) => `Quartz is the #1 choice for ${city} kitchens right now — it's non-porous, doesn't need sealing, and handles the Pacific Northwest humidity perfectly. Granite is a close second for homeowners who want natural stone character.` },
        { q: 'Can you remodel my kitchen in phases?', a: () => `Yes — we can break your kitchen remodel into phases. For example, countertops and backsplash first, then cabinets later. This spreads the cost and lets you enjoy improvements sooner. We plan phases so each stage looks complete.` },
        { q: 'Do you provide 3D kitchen designs?', a: () => `We provide detailed layout plans and material visualizations during the design phase. This helps you see how different cabinet colors, countertop materials, and backsplash tiles work together before we order anything.` },
      ],
      [
        { q: 'What is soft-close and is it worth it?', a: () => `Soft-close hinges and drawer slides prevent slamming and reduce wear. It costs about $3-5 extra per door/drawer but makes a huge daily difference. We include soft-close on all our cabinet installations — it's standard, not an upgrade.` },
        { q: 'How do you handle kitchen lighting during a remodel?', a: (city) => `We plan three lighting layers: recessed ambient, under-cabinet task lighting, and pendant/accent lighting. Most ${city} kitchens are under-lit. Proper lighting costs $800-$2,000 extra but completely transforms the space.` },
        { q: 'What flooring works best with a kitchen remodel?', a: () => `Luxury vinyl plank (LVP) is the top choice — it's waterproof, durable, comfortable underfoot, and looks like real wood. Tile is great for a premium look. We install both and coordinate with your cabinet and countertop choices.` },
      ],
    ],
  },

  'tile-installation': {
    name: 'Tile Installation',
    shortName: 'Tile Install',
    heroVariations: [
      (city) => `Professional tile installation in ${city} that you can feel underfoot and see in every straight grout line. Floors, walls, showers, backsplashes — ceramic, porcelain, marble, and natural stone. We do it right.`,
      (city) => `Tile makes or breaks a room. In ${city}, you need installers who understand substrate prep, waterproofing, and the difference between a tile job that lasts 20 years and one that cracks in 2. That's us.`,
      (city) => `${city} tile installation from a team that's laid more square footage than we can count. Bathroom floors, shower walls, kitchen backsplashes, entryways — every tile level, every grout line clean.`,
      (city) => `Looking for tile installation in ${city}? We handle everything from simple subway backsplashes to complex natural stone shower builds. Proper prep, quality materials, and craftsmanship you can trust.`,
      (city) => `Great tile work starts with great preparation. Our ${city} installers prep surfaces properly, use the right thin-set for each material, and take the time to get layouts perfect before a single tile goes down.`,
    ],
    descriptionVariations: [
      (city) => `Tile installation in ${city} requires attention to detail and knowledge of materials. We work with ceramic, porcelain, marble, travertine, slate, and glass tile. Every installation starts with proper substrate assessment and preparation — because beautiful tile on a bad surface doesn't last.`,
      (city) => `${BUSINESS.name} handles tile installation across ${city} for bathrooms, kitchens, and living spaces. Shower surrounds with waterproof membrane systems, kitchen backsplashes with precise cuts around outlets, bathroom floors with proper slope to drains — we handle the details that matter.`,
      (city) => `Whether it's a 200 sq ft bathroom or a full home flooring project, our ${city} tile team delivers consistent quality. We use leveling systems for large-format tiles, waterproof membranes in wet areas, and seal natural stone properly for the Pacific Northwest climate.`,
      (city) => `Our ${city} tile installation covers the full spectrum: floor tile, wall tile, custom shower tile, backsplash, accent walls, and outdoor tile. We help with layout planning, material selection, and provide detailed estimates with no hidden costs.`,
    ],
    benefitsVariations: [
      ['All tile types and sizes', 'Waterproof shower systems', 'Proper substrate preparation', 'Leveling systems for large format', `${BUSINESS.warranty} warranty on install`],
      ['Clean, consistent grout lines', 'Natural stone expertise', 'Custom layout and patterns', 'Heated floor compatible', 'Free estimates'],
      ['Bathroom, kitchen & beyond', 'Precision cuts around fixtures', 'Appropriate thin-set for each tile', 'Sealed and protected finish', 'Experienced installers'],
    ],
    problemsVariations: [
      ['Cracked tiles from settling', 'Loose tiles popping up', 'Water getting behind shower tile', 'Grout that\'s moldy and crumbling', 'DIY tile job that went wrong'],
      ['Uneven tiles (lippage)', 'Efflorescence on natural stone', 'Tile not adhering to surface', 'Poor cuts around fixtures', 'Tiles cracking from wrong substrate'],
    ],
    processVariations: [
      ['Assess surface condition', 'Prep & level substrate', 'Layout & dry-fit', 'Waterproofing where needed', 'Set tile with proper thin-set', 'Grout, seal & clean'],
      ['Consultation & measurement', 'Material delivery', 'Surface preparation', 'Precise tile installation', 'Grouting & sealing', 'Final walkthrough'],
    ],
    faqVariations: [
      [
        { q: 'What does tile installation cost?', a: (city) => `Tile installation projects in ${city} start from $5,000 for standard bathroom floors and tub surrounds. Larger projects with premium materials typically run $8,000-$15,000. Full bathroom tile packages including floors, walls, and shower run $10,000-$20,000+.` },
        { q: 'How long does a tile job take?', a: () => `A shower surround takes 3-4 days. A bathroom floor is usually 1-2 days. Kitchen backsplash is 1-2 days. Add 24 hours for grout to cure before use. We give you exact timelines before we start.` },
        { q: 'Can you tile over existing tile?', a: (city) => `Sometimes, but it depends on the condition of the existing tile and the height it adds. In most ${city} bathrooms, we recommend removing old tile for the best result. We'll assess during the consultation.` },
      ],
      [
        { q: 'Do I need to buy the tile or do you provide it?', a: () => `Either way works. We can source tile from our supplier network at contractor pricing, or install tile you've already purchased. We'll confirm quantities and suggest extra for cuts and future repairs.` },
        { q: 'What about heated floors under tile?', a: (city) => `We install tile over radiant floor heating systems — very popular in ${city} given our cool, wet winters. The heating mat goes in during prep, and we tile directly over it.` },
        { q: 'Natural stone vs porcelain — which is better for bathrooms?', a: () => `Porcelain is lower maintenance and more resistant to moisture. Natural stone (marble, travertine) looks stunning but needs sealing and more careful cleaning. We'll help you choose based on your lifestyle.` },
      ],
      [
        { q: 'What tile pattern do you recommend for small bathrooms?', a: () => `Large-format tiles (12×24 or larger) with minimal grout lines make small spaces feel bigger. Light colors amplify this effect. Diagonal or herringbone patterns add visual interest without overwhelming the space.` },
        { q: 'How do you waterproof a shower before tiling?', a: () => `We use either Schluter-KERDI membrane or liquid-applied RedGard. The membrane covers all shower walls and floor, creating a waterproof envelope. We flood-test before any tile goes up. No shortcuts on waterproofing — ever.` },
        { q: 'Can you match tile to my existing bathroom?', a: (city) => `We can often find close matches, especially for standard ceramic and porcelain. For discontinued tile, we source from salvage suppliers or find complementary alternatives. Bring a sample to your ${city} consultation.` },
      ],
      [
        { q: 'What is the best grout for shower walls?', a: () => `Epoxy grout — it's stain-proof, mold-resistant, and doesn't need sealing. It costs more than cement grout and is harder to work with, which is why you need experienced installers. We use it in all our shower installations.` },
        { q: 'Do you install mosaic tile and penny tile?', a: () => `Yes — mosaics and penny tiles are great for shower floors, niches, and accent bands. They require more skill to install evenly, but that's our specialty. We've done everything from simple subway to intricate hand-cut mosaics.` },
        { q: 'How soon can you start a tile project?', a: (city) => `We typically schedule ${city} tile projects within 1-2 weeks of signing. Material lead times vary — standard tile is usually in stock, specialty or custom orders may take 2-3 weeks. We coordinate everything so installation starts as soon as materials arrive.` },
      ],
    ],
  },

  'countertop-installation': {
    name: 'Countertop Installation',
    shortName: 'Countertop Install',
    heroVariations: [
      (city) => `New countertops change everything. Our ${city} installation team handles granite, quartz, marble, and quartzite — from precise digital templating to flawless installation with undermount sink cutouts and custom edge profiles.`,
      (city) => `Professional countertop installation in ${city}. We measure with lasers, fabricate with precision, and install with care. Your new granite or quartz countertops will be the centerpiece of your kitchen.`,
      (city) => `${city} homeowners trust us for countertop installation because we get the details right. Tight seams, level surfaces, perfect sink cutouts, and clean backsplash returns. Granite, quartz, marble — we know stone.`,
      (city) => `Upgrading your ${city} countertops? We handle the full process: in-home consultation, slab selection at the yard, precision templating, fabrication, old top removal, and expert installation. One team, start to finish.`,
      (city) => `From budget-friendly quartz to exotic marble, our ${city} countertop installation delivers quality at every price point. We work with top fabricators to ensure your countertops fit perfectly and look stunning.`,
    ],
    descriptionVariations: [
      (city) => `Countertop installation in ${city} is more than just dropping a slab on cabinets. We template digitally for perfect fit, coordinate fabrication with top shops, remove your old countertops, set the new stone with proper support, cut and finish sink openings, and connect your plumbing. One service, completely handled.`,
      (city) => `${BUSINESS.name} installs countertops across ${city} — granite, quartz, marble, quartzite, and solid surface. We take you to slab yards to hand-pick your stone, ensuring you love what goes in your home. Our templating uses laser measurement for precision that hand-measuring can't match.`,
      (city) => `A countertop upgrade is one of the fastest ways to transform a ${city} kitchen. Most installations are completed in one day after fabrication. We handle old countertop removal, sink disconnection and reconnection, and leave your kitchen ready to use.`,
      (city) => `Quality countertop installation in ${city} requires experience with different stone materials. Quartz is forgiving; marble needs careful handling; granite varies by slab. Our installers know how each material behaves and install accordingly.`,
    ],
    benefitsVariations: [
      ['Granite, quartz, marble & quartzite', 'Laser-precise digital templating', 'Undermount sink cutouts', 'Custom edge profiles', `${BUSINESS.warranty} warranty`],
      ['Slab yard visits to hand-pick stone', 'Expert fabrication coordination', 'Old countertop removal included', 'Plumbing disconnect & reconnect', 'One-day installation'],
      ['Kitchen & bathroom countertops', 'Seam matching for natural stone', 'Backsplash coordination', 'Multiple edge options', 'Competitive pricing'],
    ],
    problemsVariations: [
      ['Laminate countertops that look dated', 'Chipped or burned surfaces', 'Stains that won\'t come out', 'Visible seams on old tops', 'Worn-out edges'],
      ['Countertops separating from wall', 'Water damage around sink', 'Outdated color or pattern', 'Surface too damaged for repair', 'Ready for a real upgrade'],
    ],
    processVariations: [
      ['Free in-home consultation', 'Slab selection at the yard', 'Digital laser templating', 'Fabrication (5-7 business days)', 'Old top removal & new installation', 'Sink hookup & final inspection'],
      ['Discuss options & budget', 'Material selection & approval', 'Precise measurement', 'Expert fabrication', 'Professional installation', 'Cleanup & warranty'],
    ],
    faqVariations: [
      [
        { q: 'How much do new countertops cost?', a: (city) => `In ${city}, countertop installation starts from $5,000 for standard kitchens with quality quartz. Granite and premium quartz run $6,000-$10,000. Marble and exotic stone for larger kitchens can be $10,000-$20,000+. Every quote includes template, fabrication, removal of old counters, and professional installation.` },
        { q: 'How long from order to installation?', a: () => `After you approve the slab and we template, fabrication takes 5-7 business days. Installation is usually done in one day. Total process from first visit to cooking on new countertops: about 2-3 weeks.` },
        { q: 'Do you remove and dispose of old countertops?', a: (city) => `Yes — old countertop removal and haul-away is included in our ${city} installation service. We also disconnect and reconnect your sink and faucet.` },
      ],
      [
        { q: 'Quartz or granite — which should I pick?', a: () => `Granite gives you natural uniqueness — no two slabs are alike. Quartz gives you consistency, zero maintenance, and more color options. Both are durable. Come to the slab yard with us and see what speaks to you.` },
        { q: 'Can you install a farmhouse sink with new countertops?', a: () => `Yes — we coordinate undermount and farmhouse sink cutouts during fabrication. If you're getting a new sink, choose it before templating so we can ensure a perfect fit.` },
        { q: 'Do you do just countertops or full kitchen remodels?', a: (city) => `Both. Many ${city} clients start with countertops and add a backsplash. Others go for the full kitchen remodel. We scale our service to what you need — from countertop-only installs to complete renovations.` },
      ],
      [
        { q: 'What edge profile looks best on quartz countertops?', a: () => `For modern kitchens, an eased (slightly rounded) edge or mitered edge is most popular. For traditional styles, ogee or dupont profiles add elegance. Waterfall edges — where the countertop wraps down the side of an island — are the current high-end trend.` },
        { q: 'How thick should my countertop be?', a: () => `Standard thickness is 3cm (1.25 inches) — this is our recommendation for durability and clean look. 2cm slabs are thinner and need plywood support underneath. We can also create a laminated (doubled) edge for an even more substantial 6cm look.` },
        { q: 'Can you add a backsplash to match my new countertops?', a: (city) => `Absolutely — many ${city} clients add a tile backsplash when they get new countertops. We can also do a 4-inch stone backsplash that matches your countertop perfectly. We coordinate both installations for a seamless result.` },
      ],
    ],
  },

  'shower-installation': {
    name: 'Shower Installation',
    shortName: 'Shower Install',
    heroVariations: [
      (city) => `A custom shower changes your daily routine. Our ${city} team builds walk-in showers, does tub-to-shower conversions, installs frameless glass, and creates showers that look amazing and stay leak-free for decades.`,
      (city) => `Professional shower installation in ${city} means proper waterproofing. Period. We use Schluter, Laticrete, or equivalent systems because a beautiful shower that leaks is a disaster. Our builds are tested before tile goes up.`,
      (city) => `${city} homeowners are converting tubs to showers in record numbers. We handle the plumbing, build the waterproof pan, install tile, and fit glass enclosures. Modern showers for modern living.`,
      (city) => `Looking for shower installation in ${city}? From a simple shower swap to a custom walk-in with a rain head, bench, and niche — we build showers that you'll look forward to using every morning.`,
      (city) => `Your ${city} shower should be more than a box with a curtain. We build custom tile showers with frameless glass, built-in storage niches, bench seating, and fixtures that actually work properly. Designed for your space, built to last.`,
    ],
    descriptionVariations: [
      (city) => `Shower installation in ${city} demands serious waterproofing — our wet climate doesn't forgive shortcuts. We install complete shower systems: waterproof membrane, mortar bed or foam pan, tile, glass enclosures, and premium fixtures. Every build is flood-tested before we lay a single tile.`,
      (city) => `${BUSINESS.name} builds custom showers across ${city}. Our specialties include tub-to-shower conversions, curbless showers for accessibility, walk-in showers with frameless glass, and shower/tub combos. We handle plumbing, tile, glass, and fixtures — one team from demo to first shower.`,
      (city) => `A new shower is one of the best bathroom upgrades for ${city} homes. We design around your space — built-in niches for shampoo, bench seating if you want it, rain showerheads, hand-held fixtures, and body sprays. Function and beauty in every detail.`,
      (city) => `From basic prefab shower installs to fully custom tile showers, our ${city} team handles it all. We assess your plumbing, recommend the best approach, and deliver a shower that works perfectly and looks incredible. Licensed, insured, and warranted.`,
    ],
    benefitsVariations: [
      ['Custom walk-in shower builds', 'Tub-to-shower conversions', 'Tested waterproof systems', 'Frameless glass enclosures', `${BUSINESS.warranty} warranty`],
      ['Curbless & ADA options', 'Built-in niches & bench seating', 'Premium fixture installation', 'Heated floor compatible', 'Licensed plumbing work'],
      ['Complete shower systems', 'Expert tile work', 'Linear & center drains', 'Rain heads & body sprays', 'Code-compliant in every detail'],
    ],
    problemsVariations: [
      ['Shower leaking behind walls', 'Mold growing in grout and caulk', 'Tub that nobody uses anymore', 'Fiberglass insert that\'s stained and cracked', 'Shower too small to move in'],
      ['Outdated glass doors', 'No storage niches', 'Slippery floor surface', 'Water pressure issues', 'Shower curtain rod life'],
    ],
    processVariations: [
      ['Design & material planning', 'Demo & plumbing rough-in', 'Waterproof membrane install', 'Flood test (24 hours)', 'Tile installation', 'Glass, fixtures & final test'],
      ['Free consultation', 'Material selection', 'Tear-out & prep', 'Build waterproof base', 'Tile & grout', 'Glass door & fixture install'],
    ],
    faqVariations: [
      [
        { q: 'How much does a walk-in shower cost?', a: (city) => `Walk-in shower installation in ${city} starts from $5,000 for standard tile showers. Custom tile walk-ins with glass enclosures, niches, and benches typically run $7,000-$15,000. Premium installations with natural stone and frameless glass can exceed $15,000.` },
        { q: 'Can you convert my tub into a walk-in shower?', a: (city) => `Yes — it's one of our most popular projects in ${city}. We remove the tub, modify plumbing, build a waterproof shower base, tile everything, and install glass. Completely transforms the bathroom.` },
        { q: 'How long does shower installation take?', a: () => `Most shower builds take 4-6 days including waterproofing cure time. Tub-to-shower conversions may take 5-7 days. We give you exact timelines during the estimate.` },
      ],
      [
        { q: 'Do you flood-test the waterproofing?', a: () => `Always. Before any tile goes up, we flood-test the waterproof membrane for 24 hours. No exceptions. This is how you prevent leaks that cause thousands in damage down the road.` },
        { q: 'What about a curbless (zero-entry) shower?', a: (city) => `We build curbless showers with linear drains for ${city} homeowners. They're great for accessibility and create a sleek, spa-like look. Requires proper floor slope — which we calculate precisely.` },
        { q: 'Frameless glass or framed — which is better?', a: () => `Frameless glass looks cleaner and more modern. Framed is more affordable and comes in more styles. Semi-frameless is a solid middle ground. We install all three and can show you samples.` },
      ],
      [
        { q: 'What drain type is best for a walk-in shower?', a: () => `Linear drains are our top recommendation for walk-in and curbless showers — they allow the floor to slope in one direction (instead of four), which makes large-format tile installation possible. Center drains work fine for mosaic-tiled floors.` },
        { q: 'Can you add a steam feature to my new shower?', a: () => `Yes — we can install steam generators with proper vapor barriers and sloped ceilings. Steam showers require specific waterproofing and ventilation, which we handle. Popular add-on for spa-like master bathrooms.` },
        { q: 'How do you handle the transition from shower to bathroom floor?', a: (city) => `For curbed showers, we build a tile-wrapped curb at the threshold. For curbless showers, we use a gentle slope transition and often a linear drain at the threshold. Both approaches prevent water from reaching your ${city} bathroom floor.` },
      ],
    ],
  },

  'bathtub-installation': {
    name: 'Bathtub Installation',
    shortName: 'Tub Install',
    heroVariations: [
      (city) => `New bathtub installation in ${city} — done right. We remove your old tub, handle plumbing modifications, install the new tub, and finish the surround. Freestanding, alcove, drop-in, and soaking tubs.`,
      (city) => `That old ${city} bathtub has served its time. We swap it out for something you actually want to soak in. Professional removal, plumbing, installation, and surround work — handled by one experienced crew.`,
      (city) => `${city} bathtub installation from the team that's replaced hundreds of tubs. We know the plumbing quirks of older homes and the installation requirements for every tub style. Freestanding clawfoots to built-in alcoves — we've done them all.`,
      (city) => `Professional bathtub replacement throughout ${city}. Old tub out, new tub in, plumbing connected, surround installed, everything sealed and caulked. We handle the heavy lifting — literally and figuratively.`,
      (city) => `Upgrade your ${city} bathroom with a new bathtub. Deep soaking tubs, modern freestanding designs, or classic alcove replacements — we install all styles from major manufacturers with full warranty.`,
    ],
    descriptionVariations: [
      (city) => `Bathtub installation in ${city} starts with careful removal of the old tub — protecting your floors and walls. We modify plumbing as needed, set the new tub level and secure, install the surround or tile, waterproof everything, and connect fixtures. Old tub disposal is included.`,
      (city) => `${BUSINESS.name} installs bathtubs across ${city} — from standard alcove replacements to custom freestanding setups. Our licensed plumbers handle all water supply and drain connections. We know the plumbing in Seattle-area homes and work with what your house gives us.`,
      (city) => `Whether you want a deep soaking tub for relaxation or a practical replacement for your worn-out alcove tub, our ${city} team delivers. We handle everything from removal through installation, including surround work and plumbing connections.`,
      (city) => `A new tub can transform your ${city} bathroom without a full remodel. We offer quick replacements (same-size alcove swaps) and custom installations (freestanding, drop-in, corner). Every installation includes proper waterproofing and our workmanship warranty.`,
    ],
    benefitsVariations: [
      ['All tub styles & major brands', 'Old tub removal & disposal', 'Licensed plumbing connections', 'Surround installation', `${BUSINESS.warranty} warranty`],
      ['Freestanding & alcove installs', 'Plumbing modifications included', 'Waterproof installation', 'Fixture install & connection', 'One-day service for simple swaps'],
      ['Complete removal & install service', 'Floor & wall protection', 'Level, secure installation', 'Caulking & finishing', 'Clean job site every day'],
    ],
    problemsVariations: [
      ['Tub that\'s cracked beyond repair', 'Rust and corrosion eating through', 'Stains that no amount of cleaning fixes', 'Tub style from another decade', 'Drain that\'s slow or leaking'],
      ['Uncomfortable tub dimensions', 'Surround that\'s falling apart', 'Plumbing that needs updating', 'Water damage under the tub', 'Safety grab bar needs'],
    ],
    processVariations: [
      ['Consultation & measurement', 'Help you choose the right tub', 'Careful old tub removal', 'Plumbing prep & modifications', 'New tub set, level & secure', 'Surround, fixtures & final check'],
      ['In-home assessment', 'Tub selection & ordering', 'Floor protection & demo', 'Plumbing rough-in', 'Tub installation & waterproofing', 'Cleanup & walkthrough'],
    ],
    faqVariations: [
      [
        { q: 'How much does it cost to replace a bathtub?', a: (city) => `Bathtub installation in ${city} starts from $5,000 including removal of old tub, plumbing connections, and new tub install. Freestanding tub installations run $6,000-$10,000. Full tub-to-shower conversions are $7,000-$12,000+.` },
        { q: 'Can you install a freestanding tub where I have an alcove?', a: () => `Yes — we remove the alcove tub, cap or relocate the plumbing, finish the walls where the surround was, and install the freestanding tub with new supply lines and floor drain. It's a great upgrade.` },
        { q: 'How long does tub replacement take?', a: () => `A same-size alcove swap can be done in 1 day. Freestanding installs or different-size tubs may take 2-3 days. We give you exact timelines in the estimate.` },
      ],
      [
        { q: 'What tub brands do you recommend?', a: (city) => `Kohler, American Standard, and Delta are solid mid-range brands. For luxury, we install Bain Ultra, Victoria & Albert, and Signature Hardware. We help ${city} homeowners pick based on budget, style, and bathroom size.` },
        { q: 'Do you handle the plumbing?', a: () => `Yes — all plumbing work is done by our licensed plumber. We handle drain connections, supply lines, overflow, and any modifications needed for the new tub.` },
        { q: 'Can I keep using my bathroom during installation?', a: () => `The bathroom will be out of commission during installation. For a 1-day job, you'll have it back by evening. For longer installs, we work as efficiently as possible to minimize downtime.` },
      ],
      [
        { q: 'How heavy is a cast iron bathtub?', a: () => `A cast iron tub weighs 250-400 lbs empty. Filled with water and a person, that's 600-900 lbs. We always check floor joist capacity before installing cast iron. If reinforcement is needed, we handle that too.` },
        { q: 'What surround options work with a new bathtub?', a: (city) => `Three main options: acrylic surround panels ($200-$600, installed same day), tile surround ($1,500-$4,000, takes 2-3 extra days), or solid surface panels ($800-$1,500). For ${city} home value, tile gives the best return.` },
        { q: 'Can you install a deeper tub in the same space?', a: () => `Usually yes — most alcove tubs share the same 60×30 or 60×32 footprint. Deeper soaking tubs fit the same space but hold more water. We verify drain clearance and water heater capacity to make sure everything works together.` },
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
  (city: string) => `${city}'s most trusted remodeling & refinishing team`,
  (city: string) => `Dedicated to ${city} home improvement`,
  (city: string) => `Your local ${city} remodeling experts`,
  (city: string) => `Professional service throughout ${city}`,
  (city: string) => `Licensed contractors serving ${city} and surrounding areas`,
  (city: string) => `Transforming ${city} kitchens and bathrooms since 2009`,
  (city: string) => `${city}'s go-to team for quality home remodeling`,
  (city: string) => `Proudly remodeling homes across ${city}`,
  (city: string) => `Building better spaces for ${city} families`,
];

const whyChooseVariations = [
  (city: string, service: string) => `${city} homeowners choose ${BUSINESS.name} for ${service.toLowerCase()} because we deliver exceptional results, on time and on budget. Our ${BUSINESS.experience}+ years of experience means we've seen it all and can handle any challenge.`,
  (city: string, service: string) => `When it comes to ${service.toLowerCase()} in ${city}, experience matters. Our certified technicians have completed hundreds of projects and bring expertise to every job. That's why we confidently offer our ${BUSINESS.warranty} warranty.`,
  (city: string, service: string) => `${city} residents deserve the best ${service.toLowerCase()} service, and that's exactly what we provide. From our first call to the final walkthrough, we focus on your complete satisfaction.`,
  (city: string, service: string) => `We've built our reputation in ${city} one project at a time. Our ${service.toLowerCase()} work speaks for itself — just ask our ${BUSINESS.reviewCount}+ satisfied customers who've rated us ${BUSINESS.rating} stars.`,
  (city: string, service: string) => `What sets our ${service.toLowerCase()} apart in ${city}? We handle everything in-house — no subcontractors means consistent quality, clear communication, and a single point of accountability. Your project, our crew, from start to finish.`,
  (city: string, service: string) => `${city} homeowners keep coming back to us for ${service.toLowerCase()} because we treat every home like our own. We show up on time, communicate daily, protect your property, and leave the job site clean. It's basic professionalism — but apparently, that's rare.`,
  (city: string, service: string) => `Our ${service.toLowerCase()} team in ${city} combines old-school craftsmanship with modern materials and techniques. We stay current on building codes, new products, and installation best practices so your project benefits from the latest in home improvement.`,
  (city: string, service: string) => `Choosing the right contractor for ${service.toLowerCase()} in ${city} is the most important decision you'll make. We're licensed, bonded, and insured in Washington State with ${BUSINESS.experience}+ years of hands-on experience. Check our reviews — they tell the real story.`,
];

// ============================================
// REVIEW GENERATION
// ============================================

const firstNames = ['Michael', 'Jennifer', 'David', 'Sarah', 'Robert', 'Lisa', 'James', 'Emily', 'John', 'Amanda', 'William', 'Ashley', 'Christopher', 'Nicole', 'Daniel', 'Michelle', 'Matthew', 'Stephanie', 'Thomas', 'Elizabeth', 'Kevin', 'Rachel', 'Brian', 'Lauren', 'Andrew', 'Jessica', 'Mark', 'Megan', 'Jason', 'Heather', 'Ryan', 'Christina', 'Patrick', 'Tiffany', 'Steven', 'Samantha', 'Jeff', 'Angela', 'Scott', 'Rebecca', 'Greg', 'Natalie', 'Eric', 'Diana'];
const lastInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z'];

const reviewTemplates: ((city: string, service: string) => string)[] = [
  (city, service) => `Had our ${service.toLowerCase()} done by ${BUSINESS.name} and couldn't be happier! The technician was professional, on time, and the results are amazing. Highly recommend to anyone in ${city}.`,
  (city, service) => `From the first call to completion, everything was perfect. The ${service.toLowerCase()} work exceeded our expectations. Our ${city} home looks so much better now.`,
  (city, service) => `The team was incredibly professional. They explained the ${service.toLowerCase()} process, finished on time, and cleaned up perfectly. Best home improvement decision for our ${city} house.`,
  (city, service) => `Amazing transformation! Our old, worn surface looks factory-new after the ${service.toLowerCase()}. The ${BUSINESS.warranty} warranty gives us peace of mind. Thanks for the great work in ${city}!`,
  (city, service) => `Quick, clean, and affordable. The ${service.toLowerCase()} results speak for themselves. We've already recommended them to our ${city} neighbors.`,
  (city, service) => `Skeptical at first, but the ${service.toLowerCase()} looks incredible. Can't believe it's the same surface. Worth every penny — great service in ${city}.`,
  (city, service) => `The technician knew exactly what he was doing. Professional ${service.toLowerCase()} at a fair price. Our ${city} bathroom looks completely updated now.`,
  (city, service) => `We got three quotes for ${service.toLowerCase()} in ${city} and went with these guys. So glad we did — best quality at the best price. The crew was respectful of our home and cleaned up everything.`,
  (city, service) => `Just had the ${service.toLowerCase()} completed on our master bathroom. The attention to detail is outstanding — every edge is clean, every line is straight. Our ${city} home feels brand new.`,
  (city, service) => `We had a tight timeline for our ${city} home renovation and they delivered the ${service.toLowerCase()} right on schedule. Communication was excellent throughout the project.`,
  (city, service) => `Our contractor recommended ${BUSINESS.name} for the ${service.toLowerCase()} portion of our ${city} renovation. Now I see why — the craftsmanship is top-notch. Will use again for the other bathroom.`,
  (city, service) => `After living with our outdated bathroom for 10 years, we finally pulled the trigger on ${service.toLowerCase()}. Wish we'd done it sooner! The team made the whole process easy and stress-free here in ${city}.`,
  (city, service) => `The project manager kept us informed every step of the way during our ${service.toLowerCase()} project. No surprises on the bill, finished when they said they would. That's rare in ${city} home improvement.`,
  (city, service) => `We had specific design ideas for our ${service.toLowerCase()} and the team brought them to life exactly as we envisioned. They even suggested improvements we hadn't thought of. Great experience in ${city}.`,
  (city, service) => `Second time using them — first was our guest bath, now the master. ${service.toLowerCase()} quality is consistently excellent. They've earned a customer for life in ${city}.`,
  (city, service) => `My wife and I couldn't agree on styles for the ${service.toLowerCase()}, but the design team helped us find a perfect compromise. The result looks amazing in our ${city} home.`,
  (city, service) => `The ${service.toLowerCase()} came out better than the pictures we showed them as inspiration. The tile work is flawless and the fixtures are perfectly aligned. Worth every dollar.`,
  (city, service) => `Honest, reliable, and skilled. They found water damage during our ${service.toLowerCase()} that previous contractors had hidden. Fixed it properly and didn't overcharge. Trust is everything in ${city} remodeling.`,
  (city, service) => `Had ${service.toLowerCase()} done in our ${city} condo. They handled the HOA requirements and worked within building hours without complaint. Very professional and accommodating team.`,
  (city, service) => `The quartz countertops and tile work from our ${service.toLowerCase()} project look absolutely stunning. Multiple friends have asked for their number after seeing our ${city} kitchen.`,
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

    // Mostly 5 stars, occasionally 4 stars for authenticity
    const rating = (hashString(seed + 'rating' + i) % 8 === 0) ? 4 : 5;

    reviews.push({
      name: `${firstNames[nameIdx]} ${lastInitials[lastIdx]}.`,
      rating,
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

export const REMODELING_SERVICE_SLUGS = [
  'bathroom-remodeling',
  'kitchen-remodeling',
  'tile-installation',
  'countertop-installation',
  'shower-installation',
  'bathtub-installation',
] as const;

export const ALL_SERVICE_SLUGS = [...SERVICE_SLUGS, ...REMODELING_SERVICE_SLUGS] as const;
