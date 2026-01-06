'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface QuickFormProps {
  variant?: 'light' | 'dark' | 'glass';
  title?: string;
  compact?: boolean;
}

const services = [
  'Bathtub Refinishing',
  'Shower Refinishing',
  'Tile Refinishing',
  'Sink Refinishing',
  'Countertop Refinishing',
  'Chip & Crack Repair',
  'Other',
];

// Google Sheets webhook URL - replace with your actual webhook
const WEBHOOK_URL = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || '';

export default function QuickForm({ variant = 'light', title, compact = false }: QuickFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to webhook/Google Sheets if configured
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: window.location.href,
          }),
        });
      }

      // Also send to our API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Fire GA4 event
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 50,
          service: formData.service,
        });
      }

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      // Still redirect on error - we don't want to lose the lead
      router.push('/thank-you');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const baseClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-[#0b1220] text-white',
    glass: 'glass text-white',
  };

  const inputClasses = {
    light: 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[#0b66b3] focus:ring-[#0b66b3]',
    dark: 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400',
    glass: 'bg-white/10 border-white/20 text-white placeholder-gray-300 focus:border-amber-400 focus:ring-amber-400',
  };

  if (isSubmitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${baseClasses[variant]}`}>
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="opacity-80 mb-4">
          We&apos;ve received your request and will call you within 1 hour.
        </p>
        <a
          href="tel:+12067869915"
          className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:underline"
        >
          📞 Or call us now: +1 (206) 786-9915
        </a>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl ${compact ? 'p-6' : 'p-8'} ${baseClasses[variant]}`}>
      {title && (
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold mb-6 text-center`}>
          {title}
        </h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border transition ${inputClasses[variant]}`}
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border transition ${inputClasses[variant]}`}
          />
        </div>

        <div>
          <select
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border transition ${inputClasses[variant]}`}
          >
            <option value="">Select Service *</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {!compact && (
          <div>
            <textarea
              placeholder="Tell us about your project (optional)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border transition resize-none ${inputClasses[variant]}`}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition disabled:opacity-50 pulse-cta"
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
            '🚀 Get Instant Quote'
          )}
        </button>

        <p className={`text-center text-sm ${variant === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          ⚡ We respond within 1 hour • No spam, ever
        </p>
      </form>
    </div>
  );
}
