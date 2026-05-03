import { BUSINESS } from './constants';

// Unique content variations for SEO
const heroVariations = [
  (city: string) => `Transform your ${city} kitchen or bathroom with professional remodeling services. From full remodels to targeted updates, our certified experts deliver stunning results.`,
  (city: string) => `${city} homeowners trust ${BUSINESS.name} for kitchen & bathroom remodeling, tile installation, countertop installation, shower upgrades, and bathtub installation. Complete transformations or budget-friendly updates.`,
  (city: string) => `Looking for quality kitchen or bathroom remodeling in ${city}? Our experienced team handles everything — design, demolition, plumbing, tile, countertops, and finishing.`,
  (city: string) => `Serving ${city} families with premium remodeling services since 2009. From complete kitchen renovations to bathroom remodeling, tile, showers, and countertops, we do it all.`,
  (city: string) => `${city}'s trusted source for kitchen & bathroom remodeling. Full-service renovations, tile installation, countertop installation, shower upgrades, and bathtub installation — all from one team.`,
  (city: string) => `Upgrade your ${city} home without breaking the bank. Our budget-conscious remodeling plans prioritize the layout, materials, and installation details that change daily life the most.`,
  (city: string) => `Planning to age in place? Our ${city} bathroom remodeling team specializes in accessible designs — walk-in showers, grab bars, slip-resistant tile, and ADA-compliant layouts.`,
  (city: string) => `Eco-conscious remodeling for ${city} homes. We use low-VOC coatings, water-saving fixtures, and sustainably sourced materials to create beautiful kitchens and bathrooms with a smaller footprint.`,
  (city: string) => `Need a fast kitchen or bathroom makeover in ${city}? Our streamlined process means we keep design choices, materials, permits, and installation moving without unnecessary gaps.`,
  (city: string) => `Custom kitchen and bathroom design for ${city} homeowners. We bring your vision to life with 3D renderings, hand-picked materials, and meticulous craftsmanship from start to finish.`,
  (city: string) => `Licensed, bonded, and insured — ${BUSINESS.name} is ${city}'s go-to remodeling contractor. Every project is fully permitted and built to code, giving you total peace of mind.`,
  (city: string) => `${city} locals know quality when they see it. That's why homeowners in your area choose us for kitchen remodels, bathroom renovations, tile, countertops, and shower upgrades.`,
  (city: string) => `We use durable materials on every ${city} project - quartz and solid-surface countertops, porcelain tile, reliable fixtures, proper waterproofing, and finishes selected for daily use.`,
  (city: string) => `One team handles your entire ${city} remodeling project — no juggling subcontractors. From plumbing and electrical to tile and paint, we manage every detail under one roof.`,
  (city: string) => `Every remodeling project in ${city} comes with our industry-leading ${BUSINESS.warranty} warranty. We stand behind our work because we know it's built to last.`,
  (city: string) => `Modern kitchen and bathroom designs for ${city} homes. Clean lines, frameless cabinetry, large-format tile, and spa-inspired showers — we bring contemporary style to the Pacific Northwest.`,
  (city: string) => `Your ${city} home deserves a kitchen and bathroom that match how you live today. We specialize in smart layouts, ample storage, and finishes that look beautiful for decades.`,
  (city: string) => `From luxury master bath retreats to efficient galley kitchen makeovers, ${city} homeowners count on ${BUSINESS.name} for renovations that add real value to their property.`,
];

const aboutVariations = [
  (city: string) => `As ${city}'s leading remodeling specialists, we've transformed thousands of kitchens and bathrooms throughout the community. Our commitment to quality workmanship and customer satisfaction has made us the go-to choice for homeowners seeking complete renovations or targeted updates.`,
  (city: string) => `${BUSINESS.name} has proudly served ${city} residents for over ${BUSINESS.experience} years. We understand the unique needs of local homeowners and deliver customized remodeling solutions that enhance both beauty and functionality.`,
  (city: string) => `From historic homes in ${city} to modern apartments, our remodeling services adapt to any kitchen or bathroom style. We handle everything from full gut renovations to targeted updates.`,
  (city: string) => `${city} homeowners choose us for our attention to detail and professional approach. Each remodel is planned around code requirements, waterproofing, ventilation, and long-term durability before construction begins.`,
  (city: string) => `Our ${city} remodeling team brings expertise, precision, and care to every job. We treat your home with respect and deliver results that exceed expectations.`,
  (city: string) => `Founded in the Seattle area, ${BUSINESS.name} grew from a small home-improvement operation into ${city}'s full-service remodeling company. Our background in hands-on installation helps us design spaces that are practical, durable, and buildable.`,
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
  (city: string) => `Speed matters when your kitchen is torn apart. Our ${city} remodeling crews work efficiently to minimize disruption — most bathroom remodels finish in 2–3 weeks, and smaller scoped updates are planned efficiently.`,
  (city: string) => `Quality you can see and feel. We use proven materials on ${city} projects - porcelain and ceramic tile, quartz or natural stone countertops, waterproofing systems, and fixtures chosen for long service life.`,
  (city: string) => `Fair, transparent pricing is why ${city} homeowners keep coming back. We provide detailed line-item estimates upfront, and we never tack on surprise charges. The price we quote is the price you pay.`,
  (city: string) => `With over ${BUSINESS.experience} years of remodeling experience in the Seattle area, we've seen — and solved — every challenge a ${city} home can throw at us. That depth of knowledge means fewer delays and better solutions.`,
  (city: string) => `Every project we complete in ${city} is backed by our ${BUSINESS.warranty} warranty on workmanship and materials. If anything isn't right, we come back and fix it — no questions asked.`,
  (city: string) => `We hold a Washington State general contractor license, carry full liability insurance, and maintain workers' compensation coverage. ${city} homeowners can hire us with total confidence that they're protected.`,
  (city: string) => `We've remodeled kitchens and bathrooms in every ${city} neighborhood, so we know the local building codes, permit requirements, and HOA rules. That local knowledge keeps your project on track and compliant.`,
  (city: string) => `One company, one contract, one point of contact. ${city} homeowners love that we handle design, demolition, plumbing, electrical, tile, countertops, and finishing — no need to coordinate multiple contractors.`,
  (city: string) => `We believe ${city} homeowners deserve to know exactly what's happening with their project at all times. That's why we provide daily updates, photo progress reports, and an open-door communication policy.`,
  (city: string) => `Communication is everything. Your dedicated ${city} project manager is available by phone or email to answer questions, adjust plans, and keep your remodel running smoothly from day one.`,
  (city: string) => `Don't just take our word for it — our 4.98-star rating from real ${city}-area customers speaks for itself. We've earned our reputation one project at a time, and we're proud of every single review.`,
  (city: string) => `We respect your ${city} home like it's our own. Protective coverings on floors, dust containment systems, and daily cleanup are standard on every job — because the process matters as much as the result.`,
  (city: string) => `From the moment you request a free estimate to the day we hand you the keys to your new kitchen or bathroom, our ${city} team makes the entire remodeling experience straightforward and enjoyable.`,
  (city: string) => `Flexibility sets us apart. Whether your ${city} project needs a full gut renovation or just a targeted update — new countertops, a retiled shower, or a new vanity — we scale our services to match your needs and budget.`,
];

// Unique service descriptions per location type
const serviceIntros: Record<string, (city: string) => string> = {
  primary: (city: string) => `${city} is one of our primary service areas for kitchen and bathroom remodeling, meaning you get priority scheduling, same-day estimates, and our fastest response times. Our dedicated ${city} team knows the local area inside and out.`,
  secondary: (city: string) => `We proudly extend our professional remodeling services to ${city} and surrounding neighborhoods. ${city} customers enjoy the same quality workmanship and warranty coverage as all our service areas.`,
  neighborhood: (city: string) => `${city} residents have access to our full range of remodeling services. As a Seattle-area neighborhood we serve regularly, your project benefits from our local expertise and quick turnaround times.`,
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

export interface CityDataPoints {
  population: string;
  medianHomeValue: string;
  avgHomeAge: string;
  commonHousingTypes: string[];
  remodelingPermitInfo: string;
  neighborhoods: string[];
  localContext: string;
}

export interface LocationContent {
  metaDescription: string;
  heroText: string;
  aboutText: string;
  whyChooseText: string;
  serviceIntro: string;
  uniqueFeatures: string[];
  cityDataPoints: CityDataPoints;
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

  // Get city-specific data if available, otherwise generate reasonable fallback
  const cityData = CITY_SPECIFIC_CONTENT[cityId];
  const cityDataPoints: CityDataPoints = cityData
    ? {
        population: cityData.population,
        medianHomeValue: cityData.medianHomeValue,
        avgHomeAge: cityData.avgHomeAge,
        commonHousingTypes: cityData.commonHousingTypes,
        remodelingPermitInfo: cityData.remodelingPermitInfo,
        neighborhoods: cityData.neighborhoods,
        localContext: cityData.localContext,
      }
    : {
        population: 'Part of the greater Seattle metro (4M+)',
        medianHomeValue: 'Varies by neighborhood',
        avgHomeAge: '30-50 years',
        commonHousingTypes: ['Single-family homes', 'Townhomes', 'Condos'],
        remodelingPermitInfo: `Building permits typically required for structural, plumbing, and electrical changes. Contact ${cityName} city hall or the local county building department for specific requirements.`,
        neighborhoods: [],
        localContext: `${cityName} is part of the greater Seattle-Tacoma metro area, where many homes built between the 1970s and 2000s are now reaching the age where kitchen and bathroom updates add significant value and comfort.`,
      };

  // Build city-specific meta description using real data when available
  const metaDescription = cityData
    ? `Kitchen & bathroom remodeling in ${cityName}, WA (pop. ${cityData.population}). Serving ${cityData.neighborhoods.slice(0, 3).join(', ')} and nearby areas. Homes avg ${cityData.avgHomeAge} old — we specialize in ${cityData.popularServices[0].toLowerCase()} and ${cityData.popularServices[1].toLowerCase()}. ${BUSINESS.warranty} warranty. ${BUSINESS.phone}`
    : `Professional kitchen & bathroom remodeling services in ${cityName}, WA. Tile installation, countertop installation, and more. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}`;

  return {
    metaDescription,
    heroText: heroVariations[heroIndex](cityName),
    aboutText: aboutVariations[aboutIndex](cityName),
    whyChooseText: whyChooseVariations[whyIndex](cityName),
    serviceIntro: serviceIntros[locationType](cityName),
    uniqueFeatures,
    cityDataPoints,
  };
}

export const CITY_SPECIFIC_CONTENT: Record<string, {
  localInsight: string;
  homeTypes: string;
  avgHomeAge: string;
  climateNote: string;
  popularServices: string[];
  population: string;
  medianHomeValue: string;
  commonHousingTypes: string[];
  remodelingPermitInfo: string;
  neighborhoods: string[];
  localContext: string;
}> = {
  'seattle': {
    localInsight: 'Seattle homes range from early 1900s Craftsman bungalows in Capitol Hill to modern downtown condos. Many bathrooms in older neighborhoods like Ballard, Fremont, and Wallingford still have original tilework and cast iron fixtures from the 1920s-1950s.',
    homeTypes: 'Craftsman, Mid-century, Modern condos, Townhomes',
    avgHomeAge: '50-80 years',
    climateNote: "Seattle's year-round humidity (75-85% average) makes proper bathroom ventilation and waterproofing critical. Without adequate exhaust fans and moisture barriers, mold develops faster here than in drier climates.",
    popularServices: ['Bathroom Remodeling', 'Kitchen Remodeling', 'Tile Installation'],
    population: '737,015',
    medianHomeValue: '$880,000',
    commonHousingTypes: ['Craftsman bungalows', 'Mid-century ranches', 'Modern condos', 'Townhomes', 'Victorian homes'],
    remodelingPermitInfo: 'Permits required for structural, plumbing, and electrical changes through Seattle Department of Construction & Inspections (SDCI). Online applications available at cosaccela.seattle.gov.',
    neighborhoods: ['Ballard', 'Capitol Hill', 'Fremont', 'Wallingford', 'Green Lake'],
    localContext: "With a median home age exceeding 50 years, Seattle has one of the oldest housing stocks on the West Coast. Many original kitchens and bathrooms from the 1940s-1960s are now being updated by a new generation of homeowners seeking modern function while preserving Craftsman character.",
  },
  'bellevue': {
    localInsight: "Bellevue's housing market features newer construction and higher-end finishes. Many homeowners in neighborhoods like West Bellevue, Bridle Trails, and Somerset upgrade to luxury materials \u2014 quartz countertops, frameless glass showers, and heated bathroom floors are standard requests.",
    homeTypes: 'Luxury single-family, New construction, High-rise condos',
    avgHomeAge: '25-40 years',
    climateNote: 'Bellevue gets slightly less rain than Seattle but shares the same humidity challenges. Homes near Lake Washington and Lake Sammamish need extra attention to moisture management in bathrooms.',
    popularServices: ['Kitchen Remodeling', 'Countertop Installation', 'Shower Installation'],
    population: '151,854',
    medianHomeValue: '$1,550,000',
    commonHousingTypes: ['Luxury single-family', 'High-rise condos', 'Executive estates', 'New construction townhomes'],
    remodelingPermitInfo: 'City of Bellevue Development Services requires permits for all structural modifications, plumbing rerouting, and electrical panel upgrades. Apply online at bellevuewa.gov.',
    neighborhoods: ['West Bellevue', 'Bridle Trails', 'Somerset', 'Crossroads', 'Factoria'],
    localContext: "Bellevue's tech-driven economy brings high-income homeowners who expect premium finishes. With Amazon's Bellevue campus and a booming downtown skyline, property values have surged, making high-end kitchen and bathroom remodels a strong return on investment.",
  },
  'issaquah': {
    localInsight: 'Issaquah blends mountain-town charm with suburban convenience. Homes in Issaquah Highlands, Gilman Village area, and Squak Mountain neighborhoods range from newer construction to established 1990s builds. Many homeowners want nature-inspired designs.',
    homeTypes: 'Newer single-family, Townhomes, Mountain-view homes',
    avgHomeAge: '20-30 years',
    climateNote: "Issaquah's foothill location brings more snow and temperature swings than Seattle. Bathroom tile choices should account for thermal movement.",
    popularServices: ['Tile Installation', 'Bathroom Remodeling', 'Kitchen Remodeling'],
    population: '41,926',
    medianHomeValue: '$1,100,000',
    commonHousingTypes: ['Single-family homes', 'Townhomes', 'Mountain-view estates', 'Planned community homes'],
    remodelingPermitInfo: "City of Issaquah requires building permits for structural changes, new plumbing fixtures, and electrical work. Permits can be submitted through the city's online portal at issaquahwa.gov.",
    neighborhoods: ['Issaquah Highlands', 'Gilman Village area', 'Squak Mountain', 'Talus', 'Providence Point'],
    localContext: 'Many homes in Issaquah were built during the 1990s-2000s housing expansion and are now reaching the age where kitchen and bathroom updates are needed. The nature-oriented community favors organic materials and earth-toned designs that complement the Cascade foothill setting.',
  },
  'bothell': {
    localInsight: 'Bothell straddles King and Snohomish counties with a growing inventory of family homes. The Canyon Park and North Creek areas have seen rapid development. Many homeowners are upgrading builder-grade finishes to more personalized kitchens and bathrooms.',
    homeTypes: 'Family homes, New subdivisions, Townhomes',
    avgHomeAge: '15-25 years',
    climateNote: "Bothell's suburban setting means homes often have larger bathrooms than Seattle, with more space for soaking tubs, double vanities, and walk-in showers.",
    popularServices: ['Bathroom Remodeling', 'Bathtub Installation', 'Tile Installation'],
    population: '51,268',
    medianHomeValue: '$860,000',
    commonHousingTypes: ['Single-family homes', 'Townhomes', 'New subdivisions', 'Garden-style condos'],
    remodelingPermitInfo: 'Bothell permits are handled through King County or Snohomish County depending on property location. Building permits required for structural changes, plumbing, and electrical modifications.',
    neighborhoods: ['Canyon Park', 'North Creek', 'Bothell Landing', 'Country Village', 'Queensborough'],
    localContext: "Bothell's rapid growth along the I-405 corridor has brought thousands of new families. Homes built in the 2000s with builder-grade finishes are now prime candidates for kitchen and bathroom upgrades as homeowners personalize their spaces.",
  },
  'lynnwood': {
    localInsight: "Lynnwood is experiencing a building boom with the light rail extension. Property values are climbing, and homeowners in established neighborhoods are upgrading to match the area's trajectory. Kitchen and bathroom remodels here offer strong ROI.",
    homeTypes: 'Ranch-style, Split-level, New apartments/condos',
    avgHomeAge: '45-60 years',
    climateNote: 'Lynnwood homes from the 1960s-70s frequently have original bathroom fans that are undersized. We upgrade ventilation as part of every bathroom remodel.',
    popularServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Countertop Installation'],
    population: '41,426',
    medianHomeValue: '$680,000',
    commonHousingTypes: ['Ranch-style homes', 'Split-level homes', 'New transit-oriented apartments', 'Condos'],
    remodelingPermitInfo: 'City of Lynnwood requires permits for structural modifications and plumbing/electrical work. The Link light rail expansion has accelerated permit processing for home improvements.',
    neighborhoods: ['Alderwood', 'Martha Lake', 'North Lynnwood', 'Meadowdale', 'Lakeview'],
    localContext: 'The Lynnwood Link light rail opening is driving a surge in home values and renovation activity. Homeowners in established 1960s-1970s neighborhoods are investing in kitchen and bathroom remodels to capitalize on rising property values near transit stations.',
  },
  'kent': {
    localInsight: "Kent's affordable housing stock makes it an ideal market for remodeling. Homeowners can significantly increase property value with strategic kitchen and bathroom updates. The East Hill and West Hill neighborhoods have many homes ripe for renovation.",
    homeTypes: 'Single-family, Manufactured homes, Newer developments',
    avgHomeAge: '35-50 years',
    climateNote: "Kent's valley location can mean more moisture in basements and lower-level bathrooms. Proper ventilation and waterproofing are especially important here.",
    popularServices: ['Bathroom Remodeling', 'Tile Installation', 'Bathtub Installation'],
    population: '136,588',
    medianHomeValue: '$540,000',
    commonHousingTypes: ['Single-family homes', 'Manufactured homes', 'Newer subdivision homes', 'Townhomes'],
    remodelingPermitInfo: 'City of Kent requires building permits for remodeling involving structural changes, plumbing, or electrical. Apply at kentwa.gov or the Kent Permit Center.',
    neighborhoods: ['East Hill', 'West Hill', 'Kent Station area', 'Meridian', 'Panther Lake'],
    localContext: 'Kent offers some of the most affordable homes in the Seattle metro, making remodeling a high-ROI investment. Many homes from the 1970s-1990s on East Hill and West Hill have original kitchens and bathrooms that benefit greatly from modernization.',
  },
  'redmond': {
    localInsight: "Redmond's tech-industry workforce drives demand for modern, functional kitchens and bathrooms. Education Hill and Bear Creek homeowners frequently request smart home integration, USB outlets, and contemporary design. Many homes were built during the tech boom of the 1990s-2000s and are now due for updates.",
    homeTypes: 'Suburban single-family, Townhomes, Newer developments',
    avgHomeAge: '25-35 years',
    climateNote: "Redmond's eastern Puget Sound location means slightly more temperature variation. Homes here benefit from radiant floor heating in bathrooms during cold snaps.",
    popularServices: ['Bathroom Remodeling', 'Tile Installation', 'Countertop Installation'],
    population: '73,256',
    medianHomeValue: '$1,200,000',
    commonHousingTypes: ['Single-family homes', 'Townhomes', 'Tech-corridor condos', 'Newer planned communities'],
    remodelingPermitInfo: 'City of Redmond requires permits for structural, plumbing, and electrical changes. Applications accepted online through the MyBuildingPermit portal at mygovernmentonline.org.',
    neighborhoods: ['Education Hill', 'Bear Creek', 'Overlake', 'Downtown Redmond', 'Idylwood'],
    localContext: "Home to Microsoft and Nintendo of America, Redmond's tech workforce demands modern kitchens with smart features and sleek bathrooms. Many 1990s-era homes are reaching the point where original finishes feel dated, driving strong remodeling demand.",
  },
  'tacoma': {
    localInsight: "Tacoma's historic homes in Stadium District, North End, and Proctor offer character but often need significant bathroom and kitchen updates. The city's revitalization has made remodeling a strong investment.",
    homeTypes: 'Victorian, Craftsman, Historic, New construction',
    avgHomeAge: '70-100 years in historic areas',
    climateNote: "Tacoma's older homes often have original plumbing that needs updating during remodels. We frequently upgrade galvanized pipes to PEX during bathroom renovations.",
    popularServices: ['Bathroom Remodeling', 'Kitchen Remodeling', 'Tile Installation'],
    population: '219,346',
    medianHomeValue: '$460,000',
    commonHousingTypes: ['Victorian homes', 'Craftsman bungalows', 'Ranch-style homes', 'New infill construction'],
    remodelingPermitInfo: 'City of Tacoma Planning & Development Services requires permits for structural, plumbing, and electrical work. Historic district homes may require additional design review through the Landmarks Preservation Commission.',
    neighborhoods: ['Stadium District', 'North End', 'Proctor', 'Old Town', '6th Avenue'],
    localContext: "Tacoma's urban renaissance has transformed neighborhoods like Stadium District and Proctor into sought-after addresses. With median home prices well below Seattle, buyers are purchasing older homes and investing in kitchen and bathroom remodels to build instant equity.",
  },
  'ballard': {
    localInsight: "Ballard's transformation from a Scandinavian fishing village to one of Seattle's hottest neighborhoods has created a unique mix of original 1920s bungalows and new construction. Many longtime homeowners are updating kitchens and bathrooms to match the neighborhood's modern energy while preserving historic character.",
    homeTypes: 'Craftsman bungalows, New construction, Condos, Townhomes',
    avgHomeAge: '60-100 years for original homes',
    climateNote: "Ballard's proximity to Puget Sound and the Ship Canal means higher salt-air exposure. We recommend marine-grade fixtures and corrosion-resistant hardware for bathrooms in waterfront-adjacent homes.",
    popularServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Tile Installation'],
    population: '50,000',
    medianHomeValue: '$920,000',
    commonHousingTypes: ['Craftsman bungalows', 'Modern townhomes', 'New construction condos', 'Converted single-family'],
    remodelingPermitInfo: "Permits handled through Seattle SDCI. Ballard's mix of historic and new construction means some projects in the Ballard Avenue Landmark District require additional design review.",
    neighborhoods: ['Old Ballard', 'Sunset Hill', 'Loyal Heights', 'Whittier Heights', 'Adams'],
    localContext: "Ballard's housing market is split between century-old Craftsman homes with original kitchens and bathrooms, and newer builds with modern finishes. Homeowners in Old Ballard and Sunset Hill frequently remodel to blend period details like subway tile and clawfoot tubs with contemporary convenience.",
  },
  'west-seattle': {
    localInsight: "West Seattle's peninsula location gives it a distinct small-town feel despite being part of Seattle. The neighborhood's housing stock, largely 1940s-1960s ranches and bungalows, presents excellent remodeling opportunities, especially as the West Seattle Bridge reopening has restored property value momentum.",
    homeTypes: 'Ranches, Bungalows, View homes, Newer condos',
    avgHomeAge: '55-80 years',
    climateNote: "West Seattle's elevated ridge and waterfront exposure create unique moisture conditions. Homes along Beach Drive and Alki need extra waterproofing attention, while hilltop homes in Gatewood benefit from drier conditions.",
    popularServices: ['Bathroom Remodeling', 'Kitchen Remodeling', 'Shower Installation'],
    population: '80,000',
    medianHomeValue: '$790,000',
    commonHousingTypes: ['Single-family ranches', 'Bungalows', 'View homes', 'Newer waterfront condos'],
    remodelingPermitInfo: "Permits handled through Seattle SDCI. West Seattle projects follow standard Seattle permitting. The neighborhood's active community councils can provide guidance on local design standards.",
    neighborhoods: ['Alaska Junction', 'Alki', 'Admiral', 'Gatewood', 'Morgan Junction'],
    localContext: "West Seattle's post-bridge-crisis recovery has reignited home improvement investment. Homeowners who stayed through the bridge closure are now upgrading kitchens and bathrooms in their 1940s-1960s homes, while new buyers are renovating to match the peninsula's growing appeal.",
  },
  'capitol-hill': {
    localInsight: "Capitol Hill's dense, walkable urban core features some of Seattle's oldest and most architecturally diverse housing. From grand early-1900s apartment buildings to 1920s brick condos and modern infill, bathrooms and kitchens here range from untouched originals to already-remodeled spaces needing a refresh.",
    homeTypes: 'Historic apartments, Condos, Townhomes, Co-ops',
    avgHomeAge: '70-120 years for original buildings',
    climateNote: "Capitol Hill's older multi-unit buildings often have shared plumbing stacks, making bathroom remodeling more complex. We coordinate with HOAs and adjacent units to minimize disruption during plumbing modifications.",
    popularServices: ['Bathroom Remodeling', 'Tile Installation', 'Countertop Installation'],
    population: '35,000',
    medianHomeValue: '$650,000',
    commonHousingTypes: ['Historic condos', 'Converted apartments', 'Townhomes', 'Co-op units', 'New mid-rise condos'],
    remodelingPermitInfo: 'Permits through Seattle SDCI. Capitol Hill properties in designated historic or landmark areas (such as Harvard-Belmont) may require Landmarks Preservation Board review for exterior-visible changes.',
    neighborhoods: ['Pike/Pine corridor', 'Volunteer Park', 'Harvard-Belmont', '15th Avenue', 'Madison Valley border'],
    localContext: "Capitol Hill's housing stock includes some of the oldest continuously occupied buildings in Seattle. Many condo and apartment owners are updating 1920s-era bathrooms with original hex tile and pedestal sinks, balancing historic charm with modern plumbing and waterproofing standards.",
  },
  'queen-anne': {
    localInsight: "Queen Anne encompasses two distinct markets: Upper Queen Anne's stately single-family homes with panoramic views, and Lower Queen Anne's dense condo and apartment scene near Seattle Center. Both present unique remodeling needs.",
    homeTypes: 'Historic single-family, High-rise condos, Townhomes, Apartments',
    avgHomeAge: '60-110 years for Upper Queen Anne homes',
    climateNote: "Queen Anne's hilltop elevation means homes on the south and west slopes get more wind and rain exposure. Bathroom windows and exterior walls in these homes need thorough moisture barrier inspection during remodels.",
    popularServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Shower Installation'],
    population: '36,000',
    medianHomeValue: '$950,000',
    commonHousingTypes: ['Grand single-family homes', 'Historic Victorians', 'High-rise condos', 'Garden apartments'],
    remodelingPermitInfo: 'Permits through Seattle SDCI. Upper Queen Anne homes in certain historic zones may have design guidelines. Lower Queen Anne condo remodels require HOA approval in addition to city permits.',
    neighborhoods: ['Upper Queen Anne', 'Lower Queen Anne', 'North Queen Anne', 'West Queen Anne', 'Counterbalance'],
    localContext: "Queen Anne's grand homes on the hilltop were built for Seattle's early affluent families, and many still have original early-1900s kitchens and bathrooms. The neighborhood's strong property values make high-end remodeling a sound investment.",
  },
  'kirkland': {
    localInsight: "Kirkland's charming waterfront neighborhoods like Juanita, Houghton, and Moss Bay feature a mix of mid-century homes and newer construction. Many homeowners are updating dated 1970s-1980s bathrooms with modern walk-in showers and floating vanities while preserving their homes' character.",
    homeTypes: 'Waterfront, Mid-century, Newer single-family',
    avgHomeAge: '35-50 years',
    climateNote: 'Lakeside homes in Kirkland face higher moisture exposure. We pay special attention to waterproofing and ventilation in bathrooms of homes near Lake Washington.',
    popularServices: ['Shower Installation', 'Bathroom Remodeling', 'Kitchen Remodeling'],
    population: '92,175',
    medianHomeValue: '$1,150,000',
    commonHousingTypes: ['Waterfront homes', 'Mid-century ranches', 'Newer single-family', 'Townhomes'],
    remodelingPermitInfo: 'City of Kirkland requires building permits for structural, plumbing, and electrical work. Waterfront properties near Lake Washington may require additional shoreline permits.',
    neighborhoods: ['Juanita', 'Houghton', 'Moss Bay', 'Totem Lake', 'Norkirk'],
    localContext: "Kirkland's waterfront charm and walkable downtown have driven property values steadily upward. Many mid-century homes from the 1970s-1980s have original bathrooms with dated tile and fixtures, making kitchen and bathroom remodeling the top home improvement request in the area.",
  },
  'renton': {
    localInsight: 'Renton offers excellent value for remodeling investment. Neighborhoods like The Landing and Kennydale are seeing home values rise, making kitchen and bathroom updates a smart financial move. Many homes from the 1960s-1980s are perfect candidates for modernization.',
    homeTypes: 'Ranch-style, Split-level, Newer townhomes',
    avgHomeAge: '40-60 years',
    climateNote: "Renton's location in the Cedar River valley means basement and ground-floor bathrooms need extra waterproofing attention due to higher groundwater levels.",
    popularServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Countertop Installation'],
    population: '106,785',
    medianHomeValue: '$620,000',
    commonHousingTypes: ['Ranch-style homes', 'Split-level homes', 'Newer townhomes', 'Condos'],
    remodelingPermitInfo: "City of Renton Community & Economic Development requires permits for structural modifications, plumbing changes, and electrical work. Apply through the city's online permit portal.",
    neighborhoods: ['The Landing', 'Kennydale', 'Renton Highlands', 'Benson Hill', 'Fairwood'],
    localContext: "Renton's position as Boeing's manufacturing hub and a growing tech center has attracted new residents, pushing home values up. Owners of 1960s-1980s homes are remodeling kitchens and bathrooms to compete with newer construction in the area and capture the rising equity.",
  },
  'federal-way': {
    localInsight: 'Federal Way homeowners are investing in updates as the city grows. Located between Seattle and Tacoma, it offers great value. Many homes near Dash Point and Steel Lake were built in the 1980s-1990s and benefit from modernized kitchens and bathrooms.',
    homeTypes: 'Suburban single-family, Condos, Townhomes',
    avgHomeAge: '30-40 years',
    climateNote: 'Federal Way gets more rainfall than Seattle proper. Shower waterproofing and bathroom ventilation should be top priorities in any remodeling project here.',
    popularServices: ['Bathroom Remodeling', 'Shower Installation', 'Kitchen Remodeling'],
    population: '99,037',
    medianHomeValue: '$500,000',
    commonHousingTypes: ['Suburban single-family homes', 'Condos', 'Townhomes', 'Manufactured homes'],
    remodelingPermitInfo: 'City of Federal Way requires permits for structural, plumbing, and electrical modifications. Permit applications available through the Community Development Department.',
    neighborhoods: ['Dash Point', 'Steel Lake', 'Twin Lakes', 'Camelot', 'Mirror Lake'],
    localContext: "Federal Way's affordable housing and improving infrastructure, including light rail expansion plans, are driving increased remodeling activity. Homeowners are upgrading 1980s-1990s kitchens and bathrooms to boost resale value in a market with growing buyer demand.",
  },
}

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
  (city: string) => `Quick, clean, and affordable. Our old cast-iron bathtub looks brand new after remodeling. Highly recommend for anyone in ${city}!`,
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
  (city: string) => `Had our 1970s avocado-green bathtub remodeled to white. The transformation is incredible — looks factory-new. Took about 5 hours and we could use it the next day. Minor overspray on the drain plate but they came back and touched it up. Great service in ${city}.`,
  // 5-star — medium, tile
  (city: string) => `They retiled our entire kitchen floor with wood-look porcelain planks in our ${city} home. No more dated linoleum — the new floor is waterproof, scratch-resistant, and looks like real hardwood.`,
  // 5-star — short, countertop
  (city: string) => `Granite countertop installation was flawless. Measured on Monday, installed on Thursday. Love supporting a local ${city} business that delivers this kind of quality.`,
  // 5-star — long, kitchen
  (city: string) => `Complete kitchen gut remodel in our ${city} home — took out a wall, added an island, new cabinets, countertops, backsplash, and lighting. The crew finished in 4 weeks, right on the timeline they promised.`,
  // 4-star — short, shower
  (city: string) => `Shower remodeling came out great. Wish I had done it sooner instead of living with those chips and stains. Solid work in ${city}.`,
  // 5-star — medium, bathroom
  (city: string) => `They designed a wheelchair-accessible bathroom for my father's ${city} home — roll-in shower, comfort-height toilet, and grab bars that actually look stylish. The team was compassionate and knowledgeable about ADA requirements.`,
  // 5-star — medium, countertop
  (city: string) => `We remodeled our dated laminate countertops instead of replacing them, saving thousands. They now have a stone-like finish that fools everyone who sees our ${city} kitchen. Incredible value.`,
];

const serviceMentions = ['Kitchen Remodel', 'Bathroom Remodel', 'Tile Installation', 'Countertop Install', 'Shower Remodel', 'Full Renovation', 'Bathtub Installation', 'Countertop Installation'];

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
