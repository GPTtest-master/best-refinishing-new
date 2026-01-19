import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service | ${BUSINESS.name}`,
  description: `Terms of Service for ${BUSINESS.name}. Read our terms and conditions for using our refinishing services.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 10, 2025';

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Welcome to {BUSINESS.name}. By accessing our website or using our services,
              you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Services</h2>
            <p className="text-gray-600 mb-4">
              {BUSINESS.name} provides professional refinishing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Bathtub refinishing and reglazing</li>
              <li>Shower refinishing</li>
              <li>Tile and grout refinishing</li>
              <li>Sink refinishing</li>
              <li>Countertop refinishing</li>
              <li>Chip and crack repair</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Quotes and Pricing</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>All quotes provided are estimates based on the information provided by the customer.</li>
              <li>Final pricing may vary based on actual conditions discovered during the job.</li>
              <li>Quotes are valid for 30 days from the date issued.</li>
              <li>We reserve the right to adjust pricing if the scope of work changes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Scheduling and Appointments</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Appointments are scheduled based on availability.</li>
              <li>We require 24-hour notice for cancellations or rescheduling.</li>
              <li>Repeated no-shows may result in a service fee.</li>
              <li>We will make reasonable efforts to arrive within the scheduled time window.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Payment is due upon completion of services unless otherwise agreed.</li>
              <li>We accept cash, checks, and major credit cards.</li>
              <li>A deposit may be required for larger projects.</li>
              <li>Returned checks are subject to a $35 fee.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Warranty</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-gray-700 mb-4">
                <strong>{BUSINESS.name} provides a {BUSINESS.warranty} warranty on all refinishing work.</strong>
              </p>
              <p className="text-gray-600 mb-4">Our warranty covers:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Peeling or flaking of the refinished surface</li>
                <li>Bubbling or blistering under normal use</li>
                <li>Color fading under normal conditions</li>
              </ul>
            </div>
            <p className="text-gray-600 mb-4">The warranty does NOT cover:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Damage from abrasive cleaners or harsh chemicals</li>
              <li>Damage from impact or abuse</li>
              <li>Normal wear and tear</li>
              <li>Damage from improper care or maintenance</li>
              <li>Issues arising from pre-existing conditions not disclosed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Care Instructions</h2>
            <p className="text-gray-600 mb-4">
              To maintain your warranty and ensure the longevity of your refinished surfaces:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Wait 24-48 hours before using the refinished surface</li>
              <li>Use only non-abrasive cleaners (dish soap is recommended)</li>
              <li>Avoid abrasive pads, scouring powders, or harsh chemicals</li>
              <li>Do not use suction-cup bath mats</li>
              <li>Wipe up standing water to prevent mineral deposits</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. SMS Communications</h2>
            <p className="text-gray-600 mb-6">
              By providing your phone number and consenting to receive text messages, you agree to receive
              SMS communications from {BUSINESS.name} regarding your quote, appointment scheduling,
              and service updates. See our{' '}
              <Link href="/privacy#sms-policy" className="text-[#0b66b3] underline">Privacy Policy</Link>
              {' '}for full SMS terms including opt-out instructions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Liability Limitations</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Our liability is limited to the cost of the services provided.</li>
              <li>We are not responsible for pre-existing damage or conditions.</li>
              <li>We are not liable for any indirect, incidental, or consequential damages.</li>
              <li>Customer is responsible for removing personal items from the work area.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Customer Responsibilities</h2>
            <p className="text-gray-600 mb-4">Customers agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Provide accurate information about the surfaces to be refinished</li>
              <li>Ensure access to water and electricity at the work site</li>
              <li>Clear the work area of personal items</li>
              <li>Provide adequate ventilation access</li>
              <li>Follow post-service care instructions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including text, images, logos, and graphics, is the property
              of {BUSINESS.name} and is protected by copyright laws. You may not reproduce, distribute,
              or use our content without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these terms or our services shall be resolved through good-faith
              negotiation. If a resolution cannot be reached, disputes shall be settled through binding
              arbitration in King County, Washington, in accordance with Washington State law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted
              on this page with an updated effective date. Your continued use of our services constitutes
              acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2"><strong>{BUSINESS.name}</strong></p>
              <p className="text-gray-600 mb-1">Phone: {BUSINESS.phone}</p>
              <p className="text-gray-600 mb-1">Email: {BUSINESS.email}</p>
              <p className="text-gray-600">Seattle, WA</p>
            </div>

          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
