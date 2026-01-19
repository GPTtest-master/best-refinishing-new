'use client';

import { useState } from 'react';
import { BUSINESS, SERVICES, LOCATIONS } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] font-semibold text-sm mb-6">
              CONTACT US
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Get Your Free
              <span className="block text-[#0b66b3]">Refinishing Quote</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your bathroom? Fill out the form below or give us a call.
              We respond to all inquiries within {BUSINESS.responseTime}.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0b66b3] to-[#084c8a] p-6 text-white">
                  <h2 className="text-2xl font-bold">Request Free Quote</h2>
                  <p className="text-white/80">Fill out the form and we&apos;ll get back to you shortly</p>
                </div>

                <div className="p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        We&apos;ve received your request and will contact you within {BUSINESS.responseTime}.
                      </p>
                      <a
                        href={BUSINESS.phoneLink}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b66b3] text-white font-semibold hover:bg-[#084c8a] transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Or Call Now: {BUSINESS.phone}
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(206) 555-0123"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Service Needed *
                          </label>
                          <select
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition bg-white"
                          >
                            <option value="">Select a service...</option>
                            {SERVICES.map((service) => (
                              <option key={service.id} value={service.id}>
                                {service.title}
                              </option>
                            ))}
                            <option value="multiple">Multiple Services</option>
                            <option value="other">Other / Not Sure</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Location
                          </label>
                          <select
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition bg-white"
                          >
                            <option value="">Select location...</option>
                            {LOCATIONS.map((location) => (
                              <option key={location.id} value={location.id}>
                                {location.name}, WA
                              </option>
                            ))}
                            <option value="other">Other Area</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Tell Us About Your Project
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe what you need refinished, any specific issues, or questions you have..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition resize-none"
                        />
                      </div>

                      {/* SMS Consent */}
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                        <input
                          type="checkbox"
                          id="smsConsent-contact"
                          required
                          checked={formData.smsConsent}
                          onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                          className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 text-[#0b66b3] focus:ring-[#0b66b3] cursor-pointer flex-shrink-0"
                        />
                        <label htmlFor="smsConsent-contact" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                          I agree to receive SMS/text messages from Best Refinishing regarding my quote request.
                          Message frequency varies. Msg & data rates may apply. Reply STOP to opt-out.{' '}
                          <a href="/privacy" className="text-[#0b66b3] underline">Privacy Policy</a> &{' '}
                          <a href="/terms" className="text-[#0b66b3] underline">Terms of Service</a>.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg transition disabled:opacity-50 shadow-lg shadow-amber-500/30"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Get My Free Quote'
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-500">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={BUSINESS.phoneLink}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call or Text</div>
                    <div className="text-xl font-bold text-gray-900 group-hover:text-[#0b66b3] transition">
                      {BUSINESS.phone}
                    </div>
                    <div className="text-sm text-green-600">Usually responds in {BUSINESS.responseTime}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    <div className="text-xl font-bold text-gray-900 group-hover:text-[#0b66b3] transition">
                      {BUSINESS.email}
                    </div>
                    <div className="text-sm text-gray-500">We reply to all emails within 24 hours</div>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                  <div className="w-14 h-14 rounded-xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Business Hours</div>
                    <div className="text-xl font-bold text-gray-900">{BUSINESS.hours}</div>
                    <div className="text-sm text-gray-500">Including weekends</div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.slice(0, 8).map((location) => (
                    <span
                      key={location.id}
                      className="px-4 py-2 rounded-full bg-slate-100 text-gray-700 text-sm font-medium"
                    >
                      {location.name}
                    </span>
                  ))}
                  <span className="px-4 py-2 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] text-sm font-medium">
                    + More Areas
                  </span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className="text-2xl font-black text-[#0b66b3]">{BUSINESS.projectsCompleted}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className="text-2xl font-black text-[#0b66b3]">{BUSINESS.rating}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className="text-2xl font-black text-[#0b66b3]">{BUSINESS.warranty}</div>
                  <div className="text-xs text-gray-500">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
