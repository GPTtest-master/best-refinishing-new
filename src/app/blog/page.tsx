import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS, BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bathtub Refinishing Blog | Tips, Guides & Cost Savings',
  description: 'Expert tips on bathtub refinishing, cost comparisons, maintenance guides, and bathroom renovation advice from Seattle\'s top refinishing professionals.',
  keywords: 'bathtub refinishing tips, reglazing guide, bathroom renovation blog, tub refinishing cost, seattle bathroom tips',
  openGraph: {
    title: 'Bathtub Refinishing Blog | Best Refinishing Seattle',
    description: 'Expert tips and guides on bathtub refinishing from Seattle\'s #1 rated professionals.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0b66b3] via-[#0958a0] to-[#073d6b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-4 border border-white/20">
              REFINISHING INSIGHTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Expert Tips & Guides
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Learn everything about bathtub refinishing, costs, maintenance, and how to transform your bathroom on a budget.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Post */}
          {BLOG_POSTS.filter(p => p.featured)[0] && (
            <div className="mb-16">
              <h2 className="text-sm font-bold text-[#0b66b3] uppercase tracking-wider mb-6">Featured Article</h2>
              <Link
                href={`/blog/${BLOG_POSTS[0].slug}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <Image
                      src={BLOG_POSTS[0].image}
                      alt={BLOG_POSTS[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                        {BLOG_POSTS[0].category}
                      </span>
                      <span className="text-gray-500 text-sm">{BLOG_POSTS[0].readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0b66b3] transition-colors">
                      {BLOG_POSTS[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {BLOG_POSTS[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{BLOG_POSTS[0].date}</span>
                      <span className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            <h2 className="text-sm font-bold text-[#0b66b3] uppercase tracking-wider mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-gray-700 text-xs font-semibold backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0b66b3] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#0b66b3] font-semibold text-sm">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a free quote and see how much you can save with professional refinishing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              href={`tel:${BUSINESS.phone.replace(/[^\d]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
