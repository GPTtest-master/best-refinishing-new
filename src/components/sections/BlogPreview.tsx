import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';

export default function BlogPreview() {
  // Show first 3 blog posts
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Tips & Expert Advice
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about refinishing, costs, and how to get the best results for your bathroom
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-gray-700 text-xs font-semibold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0b66b3] transition-colors line-clamp-2">
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

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-100 text-gray-900 font-bold hover:bg-slate-200 transition"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
