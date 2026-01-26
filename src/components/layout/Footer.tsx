import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SERVICES, LOCATIONS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b66b3] to-[#084c8a]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            FREE ESTIMATES AVAILABLE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Get your FREE quote today — Save up to $5,000 vs. replacement!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-gray-900 font-bold text-xl hover:bg-gray-100 transition shadow-2xl group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0b66b3] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xl hover:from-amber-600 hover:to-amber-700 transition shadow-2xl shadow-amber-500/30"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/optimized/logo1.svg"
                alt={BUSINESS.name}
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional bathtub, tile, and countertop refinishing serving
              Seattle and surrounding areas. Licensed, insured, and guaranteed.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white font-bold ml-2">{BUSINESS.rating}</span>
              <span className="text-gray-400">({BUSINESS.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <Link href="/services" className="font-bold text-lg mb-6 flex items-center gap-2 hover:text-amber-400 transition">
              <span className="w-8 h-0.5 bg-amber-500" />
              Our Services
            </Link>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
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
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <Link href="/locations" className="font-bold text-lg mb-6 flex items-center gap-2 hover:text-amber-400 transition">
              <span className="w-8 h-0.5 bg-amber-500" />
              Service Areas
            </Link>
            <div className="grid grid-cols-2 gap-2">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.id}
                  href={location.href}
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0b66b3] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call or Text</div>
                  <div className="font-semibold text-white">{BUSINESS.phone}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Hours</div>
                  <div className="font-semibold text-white">{BUSINESS.hours}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Response Time</div>
                  <div className="font-semibold text-white">{BUSINESS.responseTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
            <Link href="/process" className="text-gray-400 hover:text-white transition">Process</Link>
            <Link href="/common-problems" className="text-gray-400 hover:text-white transition">Common Problems</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
            <span className="text-gray-700">|</span>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
