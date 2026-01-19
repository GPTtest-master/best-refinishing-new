import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS.name}`,
  description: `Privacy Policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal information.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 10, 2025';

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy Policy
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
              {BUSINESS.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              When you request a quote or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Service address</li>
              <li>Information about your refinishing project</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Respond to your quote requests and inquiries</li>
              <li>Schedule and provide refinishing services</li>
              <li>Send you updates about your project</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" id="sms-policy">3. SMS/Text Message Policy</h2>
            <div className="bg-blue-50 border-l-4 border-[#0b66b3] p-6 mb-6">
              <p className="text-gray-700 mb-4">
                <strong>By providing your phone number and checking the consent box on our quote form, you agree to receive SMS/text messages from {BUSINESS.name}.</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Purpose:</strong> We send texts related to your quote request, appointment confirmations, service updates, and promotional offers.</li>
                <li><strong>Frequency:</strong> Message frequency varies based on your interactions with us.</li>
                <li><strong>Costs:</strong> Message and data rates may apply depending on your mobile carrier plan.</li>
                <li><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe from SMS communications.</li>
                <li><strong>Help:</strong> Reply HELP for assistance or contact us at {BUSINESS.phone}.</li>
                <li><strong>Carriers:</strong> Major carriers supported include AT&T, Verizon, T-Mobile, Sprint, and others.</li>
              </ul>
            </div>
            <p className="text-gray-600 mb-6">
              Your consent to receive SMS messages is not a condition of purchasing our services.
              You can request a quote by calling us directly at {BUSINESS.phone} if you prefer not to receive text messages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., SMS providers, payment processors)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Remember your preferences</li>
              <li>Analyze website traffic (Google Analytics)</li>
              <li>Deliver targeted advertising (Google Ads)</li>
              <li>Improve user experience</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You can control cookies through your browser settings. Disabling cookies may affect some website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for SMS messages (reply STOP)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. California Privacy Rights (CCPA)</h2>
            <p className="text-gray-600 mb-6">
              California residents have additional rights under the California Consumer Privacy Act (CCPA),
              including the right to know what personal information is collected, request deletion,
              and opt-out of the sale of personal information. We do not sell personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to individuals under 18 years of age.
              We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time.
              The updated version will be indicated by an updated &quot;Last Updated&quot; date.
              We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
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
