import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = {
  title: `Thank You | ${BUSINESS.name}`,
  description: 'Thank you for contacting Best Refinishing. We will get back to you within 30 minutes.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking - fires on page load */}
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17663809026/FORM_CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>

      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your request has been received. We&apos;ll get back to you within{' '}
            <span className="font-bold text-[#0b66b3]">{BUSINESS.responseTime}</span>!
          </p>

          {/* What happens next */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8 text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0b66b3] font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">We Review Your Request</div>
                  <div className="text-gray-600 text-sm">Our team will review your project details</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0b66b3] font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quick Call or Text</div>
                  <div className="text-gray-600 text-sm">We&apos;ll contact you within 30 minutes during business hours</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0b66b3] font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Free Estimate</div>
                  <div className="text-gray-600 text-sm">We&apos;ll provide a detailed quote for your project</div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Need Faster Response? Call Now
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-700 font-bold text-lg border-2 border-gray-200 hover:border-[#0b66b3] transition"
            >
              Back to Home
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {BUSINESS.rating} Star Rating
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0b66b3]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {BUSINESS.warranty} Warranty
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
