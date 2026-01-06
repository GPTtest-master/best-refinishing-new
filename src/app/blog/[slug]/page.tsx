import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BUSINESS } from '@/lib/constants';

// Blog content stored separately for SEO optimization
const blogContent: Record<string, { sections: { heading?: string; content?: string; list?: string[]; image?: { src: string; alt: string; caption?: string } }[] }> = {
  'bathtub-refinishing-vs-replacement-cost-seattle': {
    sections: [
      {
        content: `If you're a Seattle homeowner facing a worn, stained, or damaged bathtub, you've likely wondered: **should I refinish my bathtub or replace it entirely?** This comprehensive guide breaks down the real costs of both options in the Seattle area, helping you make an informed decision that saves money without sacrificing quality.`
      },
      {
        heading: 'The Bottom Line: Refinishing vs Replacement Costs in Seattle',
        content: `Let's cut straight to the numbers. Here's what Seattle homeowners typically pay in 2025:`,
        list: [
          '**Bathtub Refinishing:** $350 - $600 (professional service)',
          '**Bathtub Replacement:** $3,000 - $8,000+ (including labor, plumbing, and finishing)',
          '**Potential Savings:** $2,500 - $7,500 by choosing refinishing'
        ]
      },
      {
        heading: 'What Does Bathtub Refinishing Include?',
        content: `Professional bathtub refinishing (also called reglazing or resurfacing) is a complete restoration process that transforms your existing tub:`,
        list: [
          '**Deep Cleaning & Decontamination:** Removes all soap scum, mineral deposits, and existing coatings',
          '**Chip & Crack Repair:** Professional repair of all surface damage',
          '**Surface Etching:** Creates proper adhesion for new coating',
          '**Premium Primer Application:** 2-3 coats of industrial bonding primer',
          '**Topcoat Finishing:** 2-3 layers of durable, high-gloss topcoat',
          '**Quality Inspection:** Final check for flawless finish'
        ]
      },
      {
        image: {
          src: '/images/bathtub-3-before.webp',
          alt: 'Worn bathtub before professional refinishing in Seattle',
          caption: 'A typical worn bathtub before refinishing - stains, chips, and discoloration are common issues we fix daily.'
        }
      },
      {
        heading: 'Hidden Costs of Bathtub Replacement',
        content: `When homeowners get quotes for bathtub replacement, they often don't realize the full scope of expenses involved:`,
        list: [
          '**Demo & Removal:** $200-500 for removing and disposing of old tub',
          '**New Bathtub:** $400-2,500 depending on material and style',
          '**Plumbing Work:** $500-1,500 for disconnection and reconnection',
          '**Wall Repair:** $300-800 for tile or surround damage during removal',
          '**Floor Repair:** $200-600 if subfloor is damaged',
          '**New Fixtures:** $150-500 for updated faucets and drain',
          '**Permits:** $75-300 in Seattle for plumbing work',
          '**Time Off Work:** 3-5 days without a bathroom'
        ]
      },
      {
        heading: 'Why Seattle Homeowners Choose Refinishing',
        content: `After refinishing over 500 bathtubs across the Seattle metro area, here's what our customers consistently tell us:`,
        list: [
          '**80% Cost Savings:** Average savings of $4,000-5,000 compared to replacement',
          '**Same-Day Service:** Most jobs completed in 4-6 hours',
          '**Minimal Disruption:** Bathroom ready to use in 24 hours',
          '**Eco-Friendly:** No demolition waste going to landfills',
          '**Preserve Character:** Keep original vintage or cast iron tubs',
          '**Any Color Available:** Match your bathroom perfectly'
        ]
      },
      {
        image: {
          src: '/images/bathtub-3-after.webp',
          alt: 'Beautifully refinished bathtub by Best Refinishing Seattle',
          caption: 'The same bathtub after professional refinishing - restored to factory-fresh condition with a 5-year warranty.'
        }
      },
      {
        heading: 'When Should You Replace Instead of Refinish?',
        content: `While refinishing is the right choice for 90% of our customers, replacement makes more sense in certain situations:`,
        list: [
          '**Structural Damage:** Cracks through the tub material (not just surface)',
          '**Severe Rust:** On steel tubs with rust-through holes',
          '**Size Change:** You need a different size or style tub',
          '**Full Remodel:** Complete bathroom renovation already planned',
          '**Fiberglass Delamination:** Severe bubbling or separation in fiberglass'
        ]
      },
      {
        heading: 'The Professional Refinishing Process',
        content: `Here's exactly what happens when you hire Best Refinishing for your Seattle bathtub refinishing project:`,
        list: [
          '**Step 1:** Free inspection and honest assessment',
          '**Step 2:** Surface preparation and damage repair',
          '**Step 3:** Professional masking of surrounding areas',
          '**Step 4:** Application of bonding primers',
          '**Step 5:** Multiple topcoat layers for durability',
          '**Step 6:** Quality inspection and cleanup',
          '**Step 7:** Ready to use in 24 hours'
        ]
      },
      {
        heading: 'How Long Does Refinishing Last?',
        content: `Professional bathtub refinishing typically lasts **10-15 years** with proper care. Our 5-year warranty covers any peeling, flaking, or adhesion issues. Many of our early customers from 2010 still have beautiful, functional refinished tubs today.`
      },
      {
        heading: 'Seattle-Specific Considerations',
        content: `Seattle's unique climate and housing stock create some specific factors to consider:`,
        list: [
          '**Hard Water:** Seattle has moderately hard water that can stain tubs - refinishing provides a fresh, stain-resistant surface',
          '**Older Homes:** Many Seattle homes have beautiful vintage cast iron tubs worth preserving',
          '**Eco-Consciousness:** Refinishing aligns with Seattle\'s sustainability values',
          '**Rental Properties:** Quick turnaround is essential for property managers'
        ]
      },
      {
        heading: 'Get Your Free Quote Today',
        content: `Ready to transform your bathtub and save thousands? Contact Best Refinishing for a free, no-obligation inspection and quote. We serve Seattle, Bellevue, Redmond, Kirkland, and all surrounding areas.\n\n**Call us at (206) 786-9915** or fill out our quick quote form. We respond within 30 minutes during business hours.`
      }
    ]
  },
  'how-long-does-bathtub-refinishing-last': {
    sections: [
      {
        content: `One of the most common questions we hear from Seattle homeowners is: **"How long will my refinished bathtub last?"** It's a fair question - you want to know you're making a smart investment. The short answer: **10-15 years with proper care**. But let's dive deeper into what affects longevity and how to maximize your refinishing investment.`
      },
      {
        heading: 'The Lifespan of Professional Bathtub Refinishing',
        content: `When performed by experienced professionals using commercial-grade materials, bathtub refinishing typically lasts:`,
        list: [
          '**10-15 years:** Average lifespan with normal use and basic care',
          '**15-20 years:** With excellent maintenance and gentle use',
          '**5-7 years:** If using harsh chemicals or abrasive cleaners (avoid this!)',
          '**Lifetime:** Some well-maintained refinished tubs from the 1990s are still going strong'
        ]
      },
      {
        heading: 'What Affects Refinishing Durability?',
        content: `Several factors determine how long your refinished bathtub will look and perform like new:`
      },
      {
        heading: '1. Quality of Materials Used',
        content: `Not all refinishing materials are created equal:`,
        list: [
          '**Professional-grade coatings:** Last 10-15+ years (what we use)',
          '**DIY kit coatings:** Typically last 2-5 years',
          '**Budget contractor materials:** Often fail within 3-5 years',
          '**The Best Refinishing difference:** We use commercial HVLP spray equipment and automotive-grade urethane coatings for maximum durability'
        ]
      },
      {
        heading: '2. Surface Preparation',
        content: `Proper prep work is 70% of a successful refinishing job:`,
        list: [
          '**Thorough cleaning:** Removes all contaminants that prevent adhesion',
          '**Chip and crack repair:** Creates a smooth, even surface',
          '**Proper etching:** Allows primer to bond chemically with the tub',
          '**Complete drying:** Moisture is the enemy of adhesion'
        ]
      },
      {
        heading: '3. Application Technique',
        content: `Professional application makes all the difference:`,
        list: [
          '**HVLP spray equipment:** Provides even, consistent coverage',
          '**Multiple thin coats:** Better adhesion than thick single coats',
          '**Proper cure time:** Each layer must cure before the next',
          '**Controlled environment:** Temperature and humidity matter'
        ]
      },
      {
        image: {
          src: '/images/bathtub-4-after.webp',
          alt: 'Professional bathtub refinishing result in Seattle',
          caption: 'A professionally refinished bathtub with proper materials and technique will look this good for 10-15 years.'
        }
      },
      {
        heading: 'How to Maximize Your Refinishing Lifespan',
        content: `Follow these expert tips to get the most years out of your refinished bathtub:`
      },
      {
        heading: 'Cleaning Best Practices',
        content: `The right cleaning routine is essential:`,
        list: [
          '**Use:** Mild dish soap, non-abrasive bathroom cleaners, or plain water',
          '**Avoid:** Bleach, Comet, Ajax, abrasive scrubbers, steel wool',
          '**Frequency:** Weekly cleaning prevents buildup',
          '**Method:** Soft sponge or microfiber cloth only',
          '**Rinse:** Always rinse thoroughly after cleaning'
        ]
      },
      {
        heading: 'Products to Avoid',
        content: `These common products can damage your refinished surface:`,
        list: [
          '**Bleach and bleach-based cleaners**',
          '**Abrasive powders (Comet, Ajax, Bon Ami)**',
          '**Acetone or nail polish remover**',
          '**Drain cleaners containing lye**',
          '**Magic erasers and abrasive pads**',
          '**Suction-cup bath mats (use fabric mats instead)**'
        ]
      },
      {
        heading: 'Safe Cleaning Products',
        content: `These products are safe for refinished surfaces:`,
        list: [
          '**Dawn dish soap (our top recommendation)**',
          '**Lysol Bathroom Cleaner**',
          '**Mr. Clean Multi-Surface**',
          '**Simple Green**',
          '**Vinegar and water solution (occasional use)**'
        ]
      },
      {
        heading: 'Daily Habits That Extend Lifespan',
        content: `Small daily actions make a big difference:`,
        list: [
          '**Rinse after each use:** Prevents soap scum buildup',
          '**Wipe dry:** Reduces water spots and mineral deposits',
          '**Use a drain strainer:** Prevents hair clogs requiring harsh chemicals',
          '**Remove bath accessories:** Don\'t leave bottles sitting on the surface',
          '**Use bath mats carefully:** Fabric only, remove after bathing'
        ]
      },
      {
        heading: 'Warning Signs to Watch For',
        content: `Contact your refinishing professional if you notice:`,
        list: [
          '**Peeling or flaking:** Usually covered under warranty',
          '**Bubbling:** May indicate moisture issues',
          '**Yellowing:** Normal aging, but excessive yellowing is not',
          '**Chips or cracks:** Small repairs prevent bigger problems'
        ]
      },
      {
        heading: 'Our 5-Year Warranty',
        content: `At Best Refinishing, we stand behind our work with a comprehensive 5-year warranty that covers:\n\n- Peeling or flaking of the coating\n- Adhesion failures\n- Defects in workmanship\n\nIf anything goes wrong due to our work, we fix it at no charge. Period.`
      },
      {
        heading: 'DIY vs Professional Refinishing Longevity',
        content: `Here's the honest comparison:`,
        list: [
          '**DIY kits:** 2-5 years average, often peel within 1-2 years',
          '**Budget contractors:** 3-7 years, inconsistent quality',
          '**Professional refinishing:** 10-15+ years with proper care',
          '**Why the difference:** Materials, equipment, experience, and preparation'
        ]
      },
      {
        heading: 'Ready to Get Started?',
        content: `If your bathtub needs refinishing, don't wait until damage gets worse. Contact Best Refinishing today for a free inspection and quote. We serve Seattle, Bellevue, Redmond, Kirkland, and all surrounding areas.\n\n**Call (206) 786-9915** or request your free quote online. We respond within 30 minutes!`
      }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  // Article structured data for SEO
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${BUSINESS.website}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.website,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS.website}/images/logo-new.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BUSINESS.website}/blog/${post.slug}`,
    },
  };

  // FAQ structured data if content has Q&A format
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does bathtub refinishing cost in Seattle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional bathtub refinishing in Seattle typically costs $350-$600, compared to $3,000-$8,000+ for full replacement. This represents savings of $2,500-$7,500 for most homeowners.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does bathtub refinishing last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional bathtub refinishing typically lasts 10-15 years with proper care. With excellent maintenance, some refinished tubs last 15-20 years or more.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition">Blog</Link>
                </li>
                <li>/</li>
                <li className="text-amber-400 truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-400">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b66b3] to-[#084c8a] flex items-center justify-center text-lg font-bold">
                BR
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-gray-400 text-sm">Published {post.date}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                    {section.heading}
                  </h2>
                )}

                {section.content && (
                  <div
                    className="text-gray-700 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{
                      __html: section.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                        .replace(/\n\n/g, '</p><p class="mt-4">')
                    }}
                  />
                )}

                {section.list && (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span
                          className="text-gray-700"
                          dangerouslySetInnerHTML={{
                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <figure className="my-8">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {section.image.caption && (
                      <figcaption className="text-center text-gray-500 text-sm mt-3 italic">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0b66b3] to-[#084c8a] text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Bathroom?
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Get a free, no-obligation quote from Seattle&apos;s top-rated refinishing experts.
              We respond within 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.slice(0, 2).map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                        <span>{relatedPost.category}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0b66b3] transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
