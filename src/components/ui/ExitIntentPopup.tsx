'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BUSINESS } from '@/lib/constants';

export default function ExitIntentPopup() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', smsConsent: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Bathtub Refinishing',
    'Shower Refinishing',
    'Tile Refinishing',
    'Sink Refinishing',
    'Countertop Refinishing',
    'Chip & Crack Repair',
    'Other',
  ];

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('discountPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Show popup after 5 minutes (300000 ms)
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('discountPopupShown', 'true');
      }
    }, 300000); // 5 minutes

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to API route (Twilio SMS)
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: '$50 discount popup submission',
        }),
      });

      // Fire GA4 event
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 50,
          service: formData.service,
          lead_source: 'discount_popup',
        });
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Redirect to thank you page after delay
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // Still redirect on error
      router.push('/thank-you');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition z-10"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Header with Offer */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                Get $50 OFF
              </h2>
              <p className="text-white/90 text-lg">
                Your first refinishing project
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Leave your info now and we&apos;ll apply <strong className="text-amber-600">$50 discount</strong> to your quote automatically.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-0 transition text-lg"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-0 transition text-lg"
                  />
                </div>
                <div>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-0 transition text-lg"
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                {/* SMS Consent */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <input
                    type="checkbox"
                    id="smsConsent-popup"
                    required
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                    className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 text-amber-500 focus:ring-amber-500 cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="smsConsent-popup" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                    I agree to receive SMS about my quote. Msg & data rates may apply. Reply STOP to opt-out.{' '}
                    <a href="/privacy" className="text-amber-600 underline">Privacy</a> & <a href="/terms" className="text-amber-600 underline">Terms</a>.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Claim My $50 Discount
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Trust elements */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No spam
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Response in {BUSINESS.responseTime}
                  </span>
                </div>
              </div>

              {/* No thanks link */}
              <button
                onClick={handleClose}
                className="w-full text-center text-gray-400 hover:text-gray-600 text-sm mt-4 transition"
              >
                No thanks, I&apos;ll pay full price
              </button>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re All Set!</h3>
            <p className="text-gray-600 mb-4">
              Your $50 discount is locked in. We&apos;ll call you within {BUSINESS.responseTime}.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              $50 OFF Applied
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
