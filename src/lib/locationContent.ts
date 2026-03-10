import { BUSINESS } from './constants';

// Unique content variations for SEO
const heroVariations = [
  (city: string) => `Transform your ${city} kitchen or bathroom with professional remodeling and refinishing services. From full remodels to surface restoration, our certified experts deliver stunning results.`,
  (city: string) => `${city} homeowners trust ${BUSINESS.name} for kitchen & bathroom remodeling, tile installation, countertop installation, and professional refinishing. Complete transformations or budget-friendly updates.`,
  (city: string) => `Looking for quality kitchen or bathroom remodeling in ${city}? Our experienced team handles everything — design, demolition, plumbing, tile, countertops, and finishing.`,
  (city: string) => `Serving ${city} families with premium remodeling and refinishing services since 2009. From complete kitchen renovations to bathtub refinishing, we do it all.`,
  (city: string) => `${city}'s trusted source for kitchen & bathroom remodeling. Full-service renovations, tile installation, countertop installation, and professional refinishing — all from one team.`,
];

const aboutVariations = [
  (city: string) => `As ${city}'s leading remodeling and refinishing specialists, we've transformed thousands of kitchens and bathrooms throughout the community. Our commitment to quality workmanship and customer satisfaction has made us the go-to choice for homeowners seeking complete renovations or affordable updates.`,
  (city: string) => `${BUSINESS.name} has proudly served ${city} residents for over ${BUSINESS.experience} years. We understand the unique needs of local homeowners and deliver customized remodeling and refinishing solutions that enhance both beauty and functionality.`,
  (city: string) => `From historic homes in ${city} to modern apartments, our remodeling and refinishing services adapt to any kitchen or bathroom style. We handle everything from full gut renovations to surface restoration.`,
  (city: string) => `${city} homeowners choose us for our attention to detail and professional approach. Every remodeling project is fully permitted and code-compliant, and every refinishing job receives our signature coating system.`,
  (city: string) => `Our ${city} remodeling and refinishing team brings expertise, precision, and care to every job. We treat your home with respect and deliver results that exceed expectations.`,
];

const whyChooseVariations = [
  (city: string) => `${city} residents deserve the best, and that's exactly what we deliver. Our professional-grade materials, skilled technicians, and industry-leading warranty set us apart from the competition.`,
  (city: string) => `When you choose ${BUSINESS.name} in ${city}, you're choosing quality, reliability, and exceptional results. We're fully licensed, insured, and committed to your complete satisfaction.`,
  (city: string) => `Our reputation in ${city} is built on consistent excellence. From the initial consultation to the final inspection, we ensure every detail meets our high standards.`,
  (city: string) => `${city} homeowners love our hassle-free process and stunning results. We handle everything professionally so you can enjoy your transformed bathroom without stress.`,
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
    `Local ${cityName} technicians`,
    `Same-day estimates available`,
    `Serving ${cityName} for ${BUSINESS.experience} years`,
    `Trusted by ${cityName} homeowners`,
    `Free on-site consultations in ${cityName}`,
    `Weekend appointments available`,
    `Senior discounts for ${cityName} residents`,
    `Eco-friendly products used`,
    `No mess, no demolition`,
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

// Review templates with name variations
const firstNames = ['Michael', 'Sarah', 'David', 'Jennifer', 'Robert', 'Lisa', 'James', 'Emily', 'John', 'Amanda', 'William', 'Jessica', 'Thomas', 'Ashley', 'Christopher', 'Nicole', 'Daniel', 'Stephanie', 'Matthew', 'Michelle', 'Anthony', 'Elizabeth', 'Mark', 'Heather', 'Steven', 'Lauren', 'Andrew', 'Rebecca', 'Brian', 'Samantha'];

const lastInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W'];

const reviewTemplates = [
  (city: string) => `Outstanding work on our ${city} home! The team transformed our 25-year-old bathtub into something that looks brand new. The whole process was quick, clean, and professional. Highly recommend to anyone in ${city}!`,
  (city: string) => `We were about to replace our tub until we found ${BUSINESS.name}. Saved us over $4,000 and the refinished tub looks absolutely stunning. Best home improvement decision we've made for our ${city} house.`,
  (city: string) => `From the first call to project completion, everything was perfect. The technician was on time, explained the 6-layer coating process, and delivered exceptional results. Our ${city} bathroom looks amazing!`,
  (city: string) => `After getting quotes for tub replacement, refinishing was an easy choice. The quality exceeded our expectations and the price was incredibly fair. Thank you for servicing ${city}!`,
  (city: string) => `Professional, punctual, and the results speak for themselves. Our shower and tiles look brand new. The ${BUSINESS.warranty} warranty gives us peace of mind. Great service here in ${city}.`,
  (city: string) => `Can't believe the transformation! Our old, stained bathtub now looks like it belongs in a luxury hotel. The team was respectful of our ${city} home and cleaned up perfectly.`,
  (city: string) => `We've recommended ${BUSINESS.name} to all our neighbors in ${city}. The quality of work is unmatched and the customer service is top-notch. Five stars all the way!`,
  (city: string) => `The refinishing process was so much easier than we expected. No demolition, no mess, and done in just a few hours. Our ${city} bathroom is completely transformed!`,
  (city: string) => `After seeing their work on a friend's house in ${city}, we knew we had to call them. They didn't disappoint - our tub and tiles look absolutely beautiful.`,
  (city: string) => `Excellent experience from start to finish. The estimate was accurate, the work was completed on schedule, and the results are flawless. Proud to support a company that serves ${city} so well.`,
  (city: string) => `We had chips and rust stains that we thought were permanent. The team fixed everything and our tub looks better than new. So happy we found this service in ${city}!`,
  (city: string) => `The attention to detail was impressive. Every corner, every edge - perfection. Our vintage tub in our ${city} home is now the star of the bathroom.`,
  (city: string) => `Quick, efficient, and reasonably priced. The refinished surface is smooth and gleaming. Exactly what our ${city} home needed!`,
  (city: string) => `I was skeptical about refinishing vs replacing, but the results convinced me. Our shower looks incredible and the coating feels solid. Great choice for ${city} homeowners.`,
  (city: string) => `The team went above and beyond. They noticed a small issue with our drain and fixed it at no extra charge. That's the kind of service we appreciate here in ${city}.`,
];

const serviceMentions = ['bathtub', 'shower', 'tub and tiles', 'sink', 'bathroom surfaces', 'tub surround'];

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
      rating: 5,
      text: reviewTemplates[templateIndex](cityName),
      service: serviceMentions[serviceIndex].charAt(0).toUpperCase() + serviceMentions[serviceIndex].slice(1) + ' Refinishing',
      date: dateStr,
    });
  }

  return reviews;
}
