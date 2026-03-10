import { BUSINESS } from './constants';

// Unique content variations for SEO
const heroVariations = [
  (city: string) => `Transform your ${city} kitchen or bathroom with professional remodeling and refinishing services. From full remodels to surface restoration, our certified experts deliver stunning results.`,
  (city: string) => `${city} homeowners trust ${BUSINESS.name} for kitchen & bathroom remodeling, tile installation, countertop installation, and professional refinishing. Complete transformations or budget-friendly updates.`,
  (city: string) => `Looking for quality kitchen or bathroom remodeling in ${city}? Our experienced team handles everything — design, demolition, plumbing, tile, countertops, and finishing.`,
  (city: string) => `Serving ${city} families with premium remodeling and refinishing services since 2009. From complete kitchen renovations to bathtub refinishing, we do it all.`,
  (city: string) => `${city}'s trusted source for kitchen & bathroom remodeling. Full-service renovations, tile installation, countertop installation, and professional refinishing — all from one team.`,
  (city: string) => `Upgrade your ${city} home without breaking the bank. Our budget-friendly remodeling and refinishing packages deliver high-end looks at prices that make sense for every family.`,
  (city: string) => `Planning to age in place? Our ${city} bathroom remodeling team specializes in accessible designs — walk-in showers, grab bars, slip-resistant tile, and ADA-compliant layouts.`,
  (city: string) => `Eco-conscious remodeling for ${city} homes. We use low-VOC coatings, water-saving fixtures, and sustainably sourced materials to create beautiful kitchens and bathrooms with a smaller footprint.`,
  (city: string) => `Need a fast kitchen or bathroom makeover in ${city}? Our streamlined process means most refinishing jobs are done in a day, and full remodels wrap up weeks ahead of typical contractors.`,
  (city: string) => `Custom kitchen and bathroom design for ${city} homeowners. We bring your vision to life with 3D renderings, hand-picked materials, and meticulous craftsmanship from start to finish.`,
  (city: string) => `Licensed, bonded, and insured — ${BUSINESS.name} is ${city}'s go-to remodeling contractor. Every project is fully permitted and built to code, giving you total peace of mind.`,
  (city: string) => `${city} locals know quality when they see it. That's why hundreds of families in your neighborhood have chosen us for kitchen remodels, bathroom renovations, and professional refinishing.`,
  (city: string) => `We use only premium materials on every ${city} project — solid-surface countertops, porcelain tile, brass hardware, and commercial-grade refinishing coatings that last for years.`,
  (city: string) => `One team handles your entire ${city} remodeling project — no juggling subcontractors. From plumbing and electrical to tile and paint, we manage every detail under one roof.`,
  (city: string) => `Every remodeling and refinishing project in ${city} comes with our industry-leading ${BUSINESS.warranty} warranty. We stand behind our work because we know it's built to last.`,
  (city: string) => `Modern kitchen and bathroom designs for ${city} homes. Clean lines, frameless cabinetry, large-format tile, and spa-inspired showers — we bring contemporary style to the Pacific Northwest.`,
  (city: string) => `Your ${city} home deserves a kitchen and bathroom that match how you live today. We specialize in smart layouts, ample storage, and finishes that look beautiful for decades.`,
  (city: string) => `From luxury master bath retreats to efficient galley kitchen makeovers, ${city} homeowners count on ${BUSINESS.name} for renovations that add real value to their property.`,
];

const aboutVariations = [
  (city: string) => `As ${city}'s leading remodeling and refinishing specialists, we've transformed thousands of kitchens and bathrooms throughout the community. Our commitment to quality workmanship and customer satisfaction has made us the go-to choice for homeowners seeking complete renovations or affordable updates.`,
  (city: string) => `${BUSINESS.name} has proudly served ${city} residents for over ${BUSINESS.experience} years. We understand the unique needs of local homeowners and deliver customized remodeling and refinishing solutions that enhance both beauty and functionality.`,
  (city: string) => `From historic homes in ${city} to modern apartments, our remodeling and refinishing services adapt to any kitchen or bathroom style. We handle everything from full gut renovations to surface restoration.`,
  (city: string) => `${city} homeowners choose us for our attention to detail and professional approach. Every remodeling project is fully permitted and code-compliant, and every refinishing job receives our signature coating system.`,
  (city: string) => `Our ${city} remodeling and refinishing team brings expertise, precision, and care to every job. We treat your home with respect and deliver results that exceed expectations.`,
  (city: string) => `Founded in the Seattle area, ${BUSINESS.name} grew from a small refinishing operation into ${city}'s full-service remodeling company. Our roots in surface restoration give us an edge — we understand materials at a deeper level than most contractors.`,
  (city: string) => `Our ${city} team includes certified tile installers, licensed plumbers, and experienced finish carpenters. Every crew member undergoes rigorous training and background checks before entering your home.`,
  (city: string) => `We take a design-first approach to every ${city} project. Before any demolition begins, our designers work with you to create a detailed plan, select materials, and visualize the finished space so there are zero surprises.`,
  (city: string) => `We source our materials from trusted Pacific Northwest suppliers, ensuring ${city} homeowners get the best selection of tile, stone, countertops, and fixtures at competitive prices. We pass our trade discounts directly to you.`,
  (city: string) => `Our design philosophy is simple: every ${city} kitchen and bathroom should be both beautiful and functional. We balance aesthetics with practical storage, durable surfaces, and layouts that make daily life easier.`,
  (city: string) => `${BUSINESS.name} is proud to be part of the ${city} community. We sponsor local events, hire locally, and reinvest in the neighborhoods we serve. When you choose us, you're supporting a business that cares about ${city}.`,
  (city: string) => `Customer-first values drive everything we do in ${city}. That means transparent pricing with no hidden fees, daily progress updates, and a dedicated project manager for every remodel. Your satisfaction isn't just a goal — it's our guarantee.`,
  (city: string) => `With over ${BUSINESS.experience} years serving the greater Seattle area, our ${city} team has tackled projects of every size — from compact condo bathrooms to sprawling estate kitchens. No job is too big or too small.`,
  (city: string) => `We believe ${city} homeowners shouldn't have to choose between quality and affordability. Our tiered service packages let you pick the level of renovation that fits your budget, from cosmetic refreshes to complete gut remodels.`,
  (city: string) => `Safety and cleanliness are non-negotiable on every ${city} job site. We use dust barriers, protect flooring and furniture, and leave your home spotless at the end of each workday. You'll barely know we were there — except for the stunning results.`,
  (city: string) => `What sets our ${city} operation apart is our in-house capability. We don't outsource plumbing, electrical, or tile work to random subcontractors. Our own trained crews handle every phase, ensuring consistent quality throughout your project.`,
  (city: string) => `We stay current with the latest remodeling trends and techniques so ${city} homeowners get cutting-edge results. From waterfall-edge countertops to curbless showers, we bring modern innovation to every project.`,
  (city: string) => `Every ${city} project begins with a free, no-pressure consultation. We listen to your goals, assess your space, and provide a detailed written estimate — so you can make an informed decision without any surprises.`,
];

const whyChooseVariations = [
  (city: string) => `${city} residents deserve the best, and that's exactly what we deliver. Our professional-grade materials, skilled technicians, and industry-leading warranty set us apart from the competition.`,
  (city: string) => `When you choose ${BUSINESS.name} in ${city}, you're choosing quality, reliability, and exceptional results. We're fully licensed, insured, and committed to your complete satisfaction.`,
  (city: string) => `Our reputation in ${city} is built on consistent excellence. From the initial consultation to the final inspection, we ensure every detail meets our high standards.`,
  (city: string) => `${city} homeowners love our hassle-free process and stunning results. We handle everything professionally so you can enjoy your transformed bathroom without stress.`,
  (city: string) => `Speed matters when your kitchen is torn apart. Our ${city} remodeling crews work efficiently to minimize disruption — most bathroom remodels finish in 2–3 weeks, and refinishing jobs are done in a single day.`,
  (city: string) => `Quality you can see and feel. We use only top-tier materials on ${city} projects — porcelain and ceramic tile, natural stone countertops, and commercial-grade coatings that resist chips, stains, and peeling.`,
  (city: string) => `Fair, transparent pricing is why ${city} homeowners keep coming back. We provide detailed line-item estimates upfront, and we never tack on surprise charges. The price we quote is the price you pay.`,
  (city: string) => `With over ${BUSINESS.experience} years of remodeling experience in the Seattle area, we've seen — and solved — every challenge a ${city} home can throw at us. That depth of knowledge means fewer delays and better solutions.`,
  (city: string) => `Every project we complete in ${city} is backed by our ${BUSINESS.warranty} warranty on workmanship and materials. If anything isn't right, we come back and fix it — no questions asked.`,
  (city: string) => `We hold a Washington State general contractor license, carry full liability insurance, and maintain workers' compensation coverage. ${city} homeowners can hire us with total confidence that they're protected.`,
  (city: string) => `We've remodeled kitchens and bathrooms in every ${city} neighborhood, so we know the local building codes, permit requirements, and HOA rules. That local knowledge keeps your project on track and compliant.`,
  (city: string) => `One company, one contract, one point of contact. ${city} homeowners love that we handle design, demolition, plumbing, electrical, tile, countertops, and finishing — no need to coordinate multiple contractors.`,
  (city: string) => `We believe ${city} homeowners deserve to know exactly what's happening with their project at all times. That's why we provide daily updates, photo progress reports, and an open-door communication policy.`,
  (city: string) => `Communication is everything. Your dedicated ${city} project manager is available by phone, text, or email to answer questions, adjust plans, and keep your remodel running smoothly from day one.`,
  (city: string) => `Don't just take our word for it — our 4.98-star rating from real ${city}-area customers speaks for itself. We've earned our reputation one project at a time, and we're proud of every single review.`,
  (city: string) => `We respect your ${city} home like it's our own. Protective coverings on floors, dust containment systems, and daily cleanup are standard on every job — because the process matters as much as the result.`,
  (city: string) => `From the moment you request a free estimate to the day we hand you the keys to your new kitchen or bathroom, our ${city} team makes the entire remodeling experience straightforward and enjoyable.`,
  (city: string) => `Flexibility sets us apart. Whether your ${city} project needs a full gut renovation or just a targeted update — new countertops, a retiled shower, or a refinished tub — we scale our services to match your needs and budget.`,
];

// Unique service descriptions per location type
const serviceIntros: Record<string, (city: string) => string> = {
  primary: (city: string) => `${city} is one of our primary service areas for remodeling and refinishing, meaning you get priority scheduling, same-day estimates, and our fastest response times. Our dedicated ${city} team knows the local area inside and out.`,
  secondary: (city: string) => `We proudly extend our professional remodeling and refinishing services to ${city} and surrounding neighborhoods. ${city} customers enjoy the same quality workmanship and warranty coverage as all our service areas.`,
  neighborhood: (city: string) => `${city} residents have access to our full range of remodeling and refinishing services. As a Seattle-area neighborhood we serve regularly, your project benefits from our local expertise and quick turnaround times.`,
};

// Generate unique content based on city name hash
function getVariationIndex(cityName: string, variations: unknown[]): number {
  let hash = 0;
  for (let i = 0; i < cityName.length; i++) {
    hash = ((hash << 5) - hash) + cityName.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash) % variations.length;
}

export interface LocationContent {
  metaDescription: string;
  heroText: string;
  aboutText: string;
  whyChooseText: string;
  serviceIntro: string;
  uniqueFeatures: string[];
}

export function getLocationContent(cityName: string, cityId: string): LocationContent {
  const heroIndex = getVariationIndex(cityName, heroVariations);
  const aboutIndex = getVariationIndex(cityName + 'about', aboutVariations);
  const whyIndex = getVariationIndex(cityName + 'why', whyChooseVariations);

  // Determine location type for service intro
  const primaryCities = ['seattle', 'bellevue', 'redmond', 'kirkland', 'bothell', 'renton'];
  const secondaryCities = ['kent', 'federal-way', 'tacoma', 'lynnwood', 'sammamish', 'issaquah', 'everett', 'auburn'];

  let locationType = 'neighborhood';
  if (primaryCities.includes(cityId)) locationType = 'primary';
  else if (secondaryCities.includes(cityId)) locationType = 'secondary';

  // Generate unique features based on city
  const allFeatures = [
    `Fast response times for ${cityName} area`,
    `Local ${cityName} remodeling crew`,
    `Free estimates available`,
    `Serving ${cityName} for ${BUSINESS.experience} years`,
    `Trusted by ${cityName} homeowners`,
    `Free on-site consultations in ${cityName}`,
    `Weekend appointments available`,
    `Licensed & insured contractors`,
    `Premium materials & fixtures`,
    `5-year warranty on all work`,
  ];

  const featureStartIndex = getVariationIndex(cityName + 'features', allFeatures);
  const uniqueFeatures = [
    allFeatures[featureStartIndex % allFeatures.length],
    allFeatures[(featureStartIndex + 3) % allFeatures.length],
    allFeatures[(featureStartIndex + 5) % allFeatures.length],
    allFeatures[(featureStartIndex + 7) % allFeatures.length],
  ];

  return {
    metaDescription: `Professional kitchen & bathroom remodeling and refinishing services in ${cityName}, WA. Tile installation, countertop installation, and more. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}`,
    heroText: heroVariations[heroIndex](cityName),
    aboutText: aboutVariations[aboutIndex](cityName),
    whyChooseText: whyChooseVariations[whyIndex](cityName),
    serviceIntro: serviceIntros[locationType](cityName),
    uniqueFeatures,
  };
}

export const CITY_SPECIFIC_CONTENT: Record<string, {
  localInsight: string;
  homeTypes: string;
  avgHomeAge: string;
  climateNote: string;
  popularServices: string[];
}> = {
  'seattle': {
    localInsight: 'Seattle homes range from early 1900s Craftsman bungalows in Capitol Hill to modern downtown condos. Many bathrooms in older neighborhoods like Ballard, Fremont, and Wallingford still have original tilework and cast iron fixtures from the 1920s-1950s.',
    homeTypes: 'Craftsman, Mid-century, Modern condos, Townhomes',
    avgHomeAge: '1940s-1960s in most neighborhoods',
    climateNote: 'Seattle\'s year-round humidity (75-85% average) makes proper bathroom ventilation and waterproofing critical. Without adequate exhaust fans and moisture barriers, mold develops faster here than in drier climates.',
    popularServices: ['Bathroom Remodeling', 'Kitchen Remodeling', 'Tile Installation'],
  },
  'bellevue': {
    localInsight: 'Bellevue\'s housing market features newer construction and higher-end finishes. Many homeowners in neighborhoods like West Bellevue, Bridle Trails, and Somerset upgrade to luxury materials — quartz countertops, frameless glass showers, and heated bathroom floors are standard requests.',
    homeTypes: 'Luxury single-family, New construction, High-rise condos',
    avgHomeAge: '1980s-2010s, many recent builds',
    climateNote: 'Bellevue gets slightly less rain than Seattle but shares the same humidity challenges. Homes near Lake Washington and Lake Sammamish need extra attention to moisture management in bathrooms.',
    popularServices: ['Kitchen Remodeling', 'Countertop Installation', 'Shower Installation'],
  },
  'redmond': {
    localInsight: 'Redmond\'s tech-industry workforce drives demand for modern, functional kitchens and bathrooms. Education Hill and Bear Creek homeowners frequently request smart home integration, USB outlets, and contemporary design. Many homes were built during the tech boom of the 1990s-2000s and are now due for updates.',
    homeTypes: 'Suburban single-family, Townhomes, Newer developments',
    avgHomeAge: '1990s-2000s',
    climateNote: 'Redmond\'s eastern Puget Sound location means slightly more temperature variation. Homes here benefit from radiant floor heating in bathrooms during cold snaps.',
    popularServices: ['Bathroom Remodeling', 'Tile Installation', 'Countertop Installation'],
  },
  'kirkland': {
    localInsight: 'Kirkland\'s charming waterfront neighborhoods like Juanita, Houghton, and Moss Bay feature a mix of mid-century homes and newer construction. Many homeowners are updating dated 1970s-1980s bathrooms with modern walk-in showers and floating vanities while preserving their homes\' character.',
    homeTypes: 'Waterfront, Mid-century, Newer single-family',
    avgHomeAge: '1970s-1990s',
    climateNote: 'Lakeside homes in Kirkland face higher moisture exposure. We pay special attention to waterproofing and ventilation in bathrooms of homes near Lake Washington.',
    popularServices: ['Shower Installation', 'Bathroom Remodeling', 'Kitchen Remodeling'],
  },
  'bothell': {
    localInsight: 'Bothell straddles King and Snohomish counties with a growing inventory of family homes. The Canyon Park and North Creek areas have seen rapid development. Many homeowners are upgrading builder-grade finishes to more personalized kitchens and bathrooms.',
    homeTypes: 'Family homes, New subdivisions, Townhomes',
    avgHomeAge: '2000s-2010s',
    climateNote: 'Bothell\'s suburban setting means homes often have larger bathrooms than Seattle — more space for soaking tubs, double vanities, and walk-in showers.',
    popularServices: ['Bathroom Remodeling', 'Bathtub Installation', 'Tile Installation'],
  },
  'renton': {
    localInsight: 'Renton offers excellent value for remodeling investment. Neighborhoods like The Landing and Kennydale are seeing home values rise, making kitchen and bathroom updates a smart financial move. Many homes from the 1960s-1980s are perfect candidates for modernization.',
    homeTypes: 'Ranch-style, Split-level, Newer townhomes',
    avgHomeAge: '1960s-1980s',
    climateNote: 'Renton\'s location in the Cedar River valley means basement and ground-floor bathrooms need extra waterproofing attention due to higher groundwater levels.',
    popularServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Countertop Installation'],
  },
  'kent': {
    localInsight: 'Kent\'s affordable housing stock makes it an ideal market for remodeling — homeowners can significantly increase property value with strategic kitchen and bathroom updates. The East Hill and West Hill neighborhoods have many homes ripe for renovation.',
    homeTypes: 'Single-family, Manufactured homes, Newer developments',
    avgHomeAge: '1970s-1990s',
    climateNote: 'Kent\'s valley location can mean more moisture in basements and lower-level bathrooms. Proper ventilation and waterproofing are especially important here.',
    popularServices: ['Bathroom Remodeling', 'Tile Installation', 'Bathtub Installation'],
  },
  'federal-way': {
    localInsight: 'Federal Way homeowners are investing in updates as the city grows. Located between Seattle and Tacoma, it offers great value. Many homes near Dash Point and Steel Lake were built in the 1980s-1990s and benefit from modernized kitchens and bathrooms.',
    homeTypes: 'Suburban single-family, Condos, Townhomes',
    avgHomeAge: '1980s-1990s',
    climateNote: 'Federal Way gets more rainfall than Seattle proper. Shower waterproofing and bathroom ventilation should be top priorities in any remodeling project here.',
    popularServices: ['Bathroom Remodeling', 'Shower Installation', 'Kitchen Remodeling'],
  },
  'tacoma': {
    localInsight: 'Tacoma\'s historic homes in Stadium District, North End, and Proctor offer character but often need significant bathroom and kitchen updates. The city\'s revitalization has made remodeling a strong investment — updated homes in these neighborhoods command premium prices.',
    homeTypes: 'Victorian, Craftsman, Historic, New construction',
    avgHomeAge: '1910s-1950s in historic areas',
    climateNote: 'Tacoma\'s older homes often have original plumbing that needs updating during remodels. We frequently upgrade galvanized pipes to PEX during bathroom renovations.',
    popularServices: ['Bathroom Remodeling', 'Kitchen Remodeling', 'Tile Installation'],
  },
  'lynnwood': {
    localInsight: 'Lynnwood is experiencing a building boom with the light rail extension. Property values are climbing, and homeowners in established neighborhoods are upgrading to match the area\'s trajectory. Kitchen and bathroom remodels here offer strong ROI.',
    homeTypes: 'Ranch-style, Split-level, New apartments/condos',
    avgHomeAge: '1960s-1980s',
    climateNote: 'Lynnwood homes from the 1960s-70s frequently have original bathroom fans that are undersized. We upgrade ventilation as part of every bathroom remodel.',
    popularServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Countertop Installation'],
  },
  'sammamish': {
    localInsight: 'Sammamish is one of the Eastside\'s most desirable family communities. Homes in Klahanie, Pine Lake, and Beaver Lake tend to be larger with multiple bathrooms. Homeowners here often remodel the master bath first, then update guest and kids\' bathrooms over time.',
    homeTypes: 'Large single-family, Executive homes',
    avgHomeAge: '1990s-2010s',
    climateNote: 'Sammamish\'s proximity to the Cascades means slightly colder winters. Heated bathroom floors and insulated exterior walls are popular upgrade requests.',
    popularServices: ['Bathroom Remodeling', 'Shower Installation', 'Countertop Installation'],
  },
  'issaquah': {
    localInsight: 'Issaquah blends mountain-town charm with suburban convenience. Homes in Issaquah Highlands, Gilman Village area, and Squak Mountain neighborhoods range from newer construction to established 1990s builds. Many homeowners want nature-inspired designs — natural stone, earth tones, and wood accents.',
    homeTypes: 'Newer single-family, Townhomes, Mountain-view homes',
    avgHomeAge: '1990s-2010s',
    climateNote: 'Issaquah\'s foothill location brings more snow and temperature swings than Seattle. Bathroom tile choices should account for thermal movement — we recommend porcelain over natural stone for heated floors.',
    popularServices: ['Tile Installation', 'Bathroom Remodeling', 'Kitchen Remodeling'],
  },
};

// Review templates with name variations
const firstNames = [
  'Michael', 'Sarah', 'David', 'Jennifer', 'Robert', 'Lisa', 'James', 'Emily',
  'John', 'Amanda', 'William', 'Jessica', 'Thomas', 'Ashley', 'Christopher', 'Nicole',
  'Daniel', 'Stephanie', 'Matthew', 'Michelle', 'Anthony', 'Elizabeth', 'Mark', 'Heather',
  'Steven', 'Lauren', 'Andrew', 'Rebecca', 'Brian', 'Samantha', 'Kevin', 'Rachel',
  'Jason', 'Megan', 'Ryan', 'Kimberly', 'Patrick', 'Tiffany', 'Greg', 'Christina',
  'Scott', 'Angela', 'Eric', 'Natalie', 'Timothy', 'Diana',
];

const lastInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W'];

const reviewTemplates = [
  // 5-star — long, kitchen
  (city: string) => `They completely transformed our outdated ${city} kitchen — new cabinets, quartz countertops, tile backsplash, and modern fixtures. The whole process was smooth and professional. Couldn't be happier!`,
  // 5-star — long, bathroom
  (city: string) => `Our ${city} bathroom remodel turned out incredible. They handled everything from demolition to plumbing to tile work. The team was respectful of our home and finished on schedule.`,
  // 5-star — long, kitchen
  (city: string) => `From the free consultation to the final walkthrough, everything was perfect. Our ${city} kitchen looks like something out of a magazine. Worth every penny!`,
  // 5-star — long, bathroom
  (city: string) => `We got quotes from 5 contractors for our bathroom remodel. ${BUSINESS.name} had the best price AND the best reviews. The result speaks for itself — our ${city} bathroom is stunning.`,
  // 5-star — medium, shower
  (city: string) => `Professional, punctual, and the craftsmanship is top-notch. Our new tile shower and vanity look amazing. The ${BUSINESS.warranty} warranty gives us peace of mind. Great service here in ${city}.`,
  // 5-star — medium, countertop
  (city: string) => `Can't believe this is the same kitchen! New countertops, backsplash, and fixtures completely changed the feel of our ${city} home. The team was clean and communicative throughout.`,
  // 5-star — short, bathroom
  (city: string) => `We've recommended ${BUSINESS.name} to all our neighbors in ${city}. They remodeled our master bathroom and the quality is unmatched. Five stars all the way!`,
  // 5-star — long, kitchen
  (city: string) => `The design consultation was incredibly helpful. They brought samples, offered honest advice, and helped us stay on budget. Our ${city} kitchen remodel exceeded expectations!`,
  // 5-star — medium, bathroom
  (city: string) => `After seeing their work on a friend's house in ${city}, we knew we had to call them. They didn't disappoint — our bathroom remodel is absolutely beautiful.`,
  // 5-star — medium, general
  (city: string) => `Excellent experience from start to finish. The estimate was accurate, the timeline was met, and the results are flawless. Proud to support a company that serves ${city} so well.`,
  // 5-star — long, bathroom
  (city: string) => `Our 1990s bathroom desperately needed updating. They gutted it and rebuilt it with modern tile, a walk-in shower, and gorgeous vanity. Best decision for our ${city} home!`,
  // 5-star — medium, kitchen
  (city: string) => `The attention to detail was impressive. Every tile line, every seam — perfection. Our remodeled kitchen in ${city} is now where everyone gathers.`,
  // 5-star — long, kitchen
  (city: string) => `They handled the entire kitchen renovation — plumbing, electrical, cabinets, countertops, and finishing. One team, no subcontractor headaches. Exactly what our ${city} home needed!`,
  // 5-star — medium, bathtub + bathroom
  (city: string) => `We also had them refinish our guest bathroom tub while they remodeled the master bath. Both turned out amazing. Great to have one company that does it all in ${city}.`,
  // 5-star — medium, general
  (city: string) => `The team went above and beyond. They noticed a plumbing issue during demo and fixed it at a fair price. That's the kind of honesty we appreciate here in ${city}.`,
  // 5-star — short, bathtub
  (city: string) => `Quick, clean, and affordable. Our old cast-iron bathtub looks brand new after refinishing. Highly recommend for anyone in ${city}!`,
  // 4-star — medium, bathroom
  (city: string) => `Really pleased with the bathroom remodel. There was a small delay waiting on a custom glass shower door, but the team kept us informed throughout. The finished ${city} bathroom is gorgeous.`,
  // 5-star — long, tile
  (city: string) => `The 12×24 porcelain tile they installed in our ${city} bathroom is absolutely stunning. Herringbone pattern on the shower walls and large-format on the floor — it looks like a luxury hotel.`,
  // 5-star — short, countertop
  (city: string) => `New quartz countertops installed in one day. Perfect cuts, seamless joints. Our ${city} kitchen feels completely different now.`,
  // 4-star — medium, kitchen
  (city: string) => `Great kitchen remodel overall. The butcher-block island and subway tile backsplash turned out beautifully. Only reason for 4 stars is we wished the color consultation happened earlier. Still very happy here in ${city}.`,
  // 5-star — long, shower
  (city: string) => `They converted our cramped ${city} tub/shower combo into a spacious walk-in shower with a rain head, bench seat, and niche shelving. It feels like a spa now. The project took just 10 days.`,
  // 5-star — short, general
  (city: string) => `Best remodeling company in ${city}, hands down. Professional, on time, and the quality speaks for itself.`,
  // 5-star — long, bathroom
  (city: string) => `We remodeled both bathrooms in our 1,400 sq ft ${city} condo. They worked room by room so we always had a functioning bathroom. Smart scheduling and beautiful results — marble-look tile and matte black fixtures throughout.`,
  // 4-star — medium, bathtub
  (city: string) => `Had our 1970s avocado-green bathtub refinished to white. The transformation is incredible — looks factory-new. Took about 5 hours and we could use it the next day. Minor overspray on the drain plate but they came back and touched it up. Great service in ${city}.`,
  // 5-star — medium, tile
  (city: string) => `They retiled our entire kitchen floor with wood-look porcelain planks in our ${city} home. No more dated linoleum — the new floor is waterproof, scratch-resistant, and looks like real hardwood.`,
  // 5-star — short, countertop
  (city: string) => `Granite countertop installation was flawless. Measured on Monday, installed on Thursday. Love supporting a local ${city} business that delivers this kind of quality.`,
  // 5-star — long, kitchen
  (city: string) => `Complete kitchen gut remodel in our ${city} home — took out a wall, added an island, new cabinets, countertops, backsplash, and lighting. The crew finished in 4 weeks, right on the timeline they promised.`,
  // 4-star — short, shower
  (city: string) => `Shower refinishing came out great. Wish I had done it sooner instead of living with those chips and stains. Solid work in ${city}.`,
  // 5-star — medium, bathroom
  (city: string) => `They designed a wheelchair-accessible bathroom for my father's ${city} home — roll-in shower, comfort-height toilet, and grab bars that actually look stylish. The team was compassionate and knowledgeable about ADA requirements.`,
  // 5-star — medium, countertop
  (city: string) => `We refinished our dated laminate countertops instead of replacing them, saving thousands. They now have a stone-like finish that fools everyone who sees our ${city} kitchen. Incredible value.`,
];

const serviceMentions = ['Kitchen Remodel', 'Bathroom Remodel', 'Tile Installation', 'Countertop Install', 'Shower Remodel', 'Full Renovation', 'Bathtub Refinishing', 'Countertop Refinishing'];

// Rating for each review template (index-matched)
const reviewRatings = [
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 4, 5, 5, 4,
  5, 5, 5, 4, 5, 5, 5, 4, 5, 5,
];

export interface LocationReview {
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export function getLocationReviews(cityName: string): LocationReview[] {
  const reviews: LocationReview[] = [];
  const baseIndex = getVariationIndex(cityName, reviewTemplates);

  // Generate 5 unique reviews for each city
  for (let i = 0; i < 5; i++) {
    const templateIndex = (baseIndex + i * 3) % reviewTemplates.length;
    const nameIndex = (baseIndex + i * 7) % firstNames.length;
    const lastIndex = (baseIndex + i * 5) % lastInitials.length;
    const serviceIndex = (baseIndex + i * 2) % serviceMentions.length;

    // Generate varied dates (within last 6 months)
    const monthsAgo = (i * 2 + (baseIndex % 3)) % 6;
    const date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    reviews.push({
      name: `${firstNames[nameIndex]} ${lastInitials[lastIndex]}.`,
      rating: reviewRatings[templateIndex],
      text: reviewTemplates[templateIndex](cityName),
      service: serviceMentions[serviceIndex],
      date: dateStr,
    });
  }

  return reviews;
}
