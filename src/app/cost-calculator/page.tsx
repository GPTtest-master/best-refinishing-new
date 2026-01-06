'use client';

import { useState } from 'react';
import { BUSINESS } from '@/lib/constants';

type ServiceType = 'bathtub' | 'shower' | 'tile' | 'sink' | 'countertop' | '';
type Condition = 'good' | 'moderate' | 'poor' | '';
type Size = 'small' | 'standard' | 'large' | '';

const serviceOptions = [
  { id: 'bathtub', name: 'Bathtub', basePrice: 350, icon: '🛁' },
  { id: 'shower', name: 'Shower/Tub Surround', basePrice: 450, icon: '🚿' },
  { id: 'tile', name: 'Tile & Grout', basePrice: 400, icon: '🧱' },
  { id: 'sink', name: 'Sink', basePrice: 200, icon: '💧' },
  { id: 'countertop', name: 'Countertop', basePrice: 350, icon: '🪨' },
];

const conditionMultipliers = {
  good: { multiplier: 1, label: 'Good - Minor wear, few stains', savings: 'Maximum savings' },
  moderate: { multiplier: 1.15, label: 'Moderate - Stains, some chips/cracks', savings: 'Great savings' },
  poor: { multiplier: 1.3, label: 'Poor - Heavy damage, rust, peeling', savings: 'Still saves thousands' },
};

const sizeMultipliers = {
  small: { multiplier: 0.9, label: 'Small (under 5ft tub, small vanity)' },
  standard: { multiplier: 1, label: 'Standard (5ft tub, regular shower)' },
  large: { multiplier: 1.25, label: 'Large (6ft+ tub, walk-in shower)' },
};

const replacementCosts: Record<string, number> = {
  bathtub: 4500,
  shower: 6000,
  tile: 5500,
  sink: 1200,
  countertop: 3500,
};

export default function CostCalculatorPage() {
  const [service, setService] = useState<ServiceType>('');
  const [condition, setCondition] = useState<Condition>('');
  const [size, setSize] = useState<Size>('');
  const [extras, setExtras] = useState({
    antiSlip: false,
    customColor: false,
    repairs: false,
  });
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const calculatePrice = () => {
    if (!service || !condition || !size) return null;

    const basePrice = serviceOptions.find((s) => s.id === service)?.basePrice || 0;
    const conditionMult = conditionMultipliers[condition].multiplier;
    const sizeMult = sizeMultipliers[size].multiplier;

    let total = basePrice * conditionMult * sizeMult;

    if (extras.antiSlip) total += 75;
    if (extras.customColor) total += 50;
    if (extras.repairs) total += 100;

    return Math.round(total);
  };

  const getReplacementCost = () => {
    if (!service) return 0;
    return replacementCosts[service] || 0;
  };

  const getSavings = () => {
    const price = calculatePrice();
    const replacement = getReplacementCost();
    if (!price) return 0;
    return replacement - price;
  };

  const handleCalculate = () => {
    if (service && condition && size) {
      setShowResult(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  const estimatedPrice = calculatePrice();
  const savings = getSavings();
  const replacementCost = getReplacementCost();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 font-semibold text-sm mb-6 border border-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Free Instant Estimate
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Refinishing Cost Calculator
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get an instant estimate for your project. See exactly how much you&apos;ll save vs. replacement.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 -mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {!showResult ? (
              <div className="p-8 md:p-12">
                {/* Step 1: Service Type */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-bold text-sm">1</span>
                    <h2 className="text-xl font-bold text-gray-900">What needs refinishing?</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {serviceOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setService(option.id as ServiceType)}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                          service === option.id
                            ? 'border-[#0b66b3] bg-[#0b66b3]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-3xl block mb-2">{option.icon}</span>
                        <span className={`font-semibold text-sm ${service === option.id ? 'text-[#0b66b3]' : 'text-gray-700'}`}>
                          {option.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Condition */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-bold text-sm">2</span>
                    <h2 className="text-xl font-bold text-gray-900">Current condition?</h2>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(conditionMultipliers).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => setCondition(key as Condition)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                          condition === key
                            ? 'border-[#0b66b3] bg-[#0b66b3]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className={`font-medium ${condition === key ? 'text-[#0b66b3]' : 'text-gray-700'}`}>
                          {value.label}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          condition === key ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {value.savings}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Size */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-bold text-sm">3</span>
                    <h2 className="text-xl font-bold text-gray-900">Size?</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    {Object.entries(sizeMultipliers).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => setSize(key as Size)}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                          size === key
                            ? 'border-[#0b66b3] bg-[#0b66b3]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className={`font-semibold block mb-1 ${size === key ? 'text-[#0b66b3]' : 'text-gray-700'}`}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        <span className="text-gray-500 text-sm">{value.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Extras */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-bold text-sm">4</span>
                    <h2 className="text-xl font-bold text-gray-900">Add-ons (optional)</h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { key: 'antiSlip', label: 'Anti-slip coating', price: '+$75', desc: 'Textured finish for safety' },
                      { key: 'customColor', label: 'Custom color', price: '+$50', desc: 'Beyond standard white/almond' },
                      { key: 'repairs', label: 'Chip/crack repairs', price: '+$100', desc: 'Fix damage before refinishing' },
                    ].map((extra) => (
                      <label
                        key={extra.key}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          extras[extra.key as keyof typeof extras]
                            ? 'border-[#0b66b3] bg-[#0b66b3]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={extras[extra.key as keyof typeof extras]}
                            onChange={(e) => setExtras({ ...extras, [extra.key]: e.target.checked })}
                            className="w-5 h-5 rounded border-gray-300 text-[#0b66b3] focus:ring-[#0b66b3]"
                          />
                          <div>
                            <span className="font-medium text-gray-900">{extra.label}</span>
                            <span className="text-gray-500 text-sm block">{extra.desc}</span>
                          </div>
                        </div>
                        <span className="text-[#0b66b3] font-semibold">{extra.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  disabled={!service || !condition || !size}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate My Estimate
                </button>
              </div>
            ) : (
              <div>
                {/* Results */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Your Estimate is Ready
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                      Estimated Cost: <span className="text-green-600">${estimatedPrice}</span>
                    </h2>
                    <p className="text-gray-600">
                      For {serviceOptions.find((s) => s.id === service)?.name} refinishing
                    </p>
                  </div>

                  {/* Savings Comparison */}
                  <div className="bg-white rounded-2xl p-6 mb-8 border border-green-200">
                    <h3 className="font-bold text-gray-900 mb-4 text-center">Your Savings vs. Replacement</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="p-4 rounded-xl bg-red-50">
                        <p className="text-sm text-gray-500 mb-1">Full Replacement</p>
                        <p className="text-2xl font-black text-red-600">${replacementCost.toLocaleString()}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-50">
                        <p className="text-sm text-gray-500 mb-1">Refinishing</p>
                        <p className="text-2xl font-black text-green-600">${estimatedPrice}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-amber-50">
                        <p className="text-sm text-gray-500 mb-1">You Save</p>
                        <p className="text-2xl font-black text-amber-600">${savings.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-center text-green-700 font-semibold mt-4">
                      That&apos;s {Math.round((savings / replacementCost) * 100)}% savings!
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        'Professional surface preparation',
                        'Commercial-grade coating',
                        'Color of your choice',
                        'Same-day completion',
                        '5-year warranty',
                        'Full cleanup',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowResult(false)}
                    className="text-[#0b66b3] font-semibold hover:underline mb-4 block mx-auto"
                  >
                    ← Recalculate
                  </button>
                </div>

                {/* Lead Capture Form */}
                <div className="p-8 md:p-12 bg-white">
                  {!submitted ? (
                    <>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Get Your Exact Quote
                        </h3>
                        <p className="text-gray-600">
                          This is an estimate. For an exact quote, leave your info and we&apos;ll contact you within {BUSINESS.responseTime}.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                        />
                        <input
                          type="email"
                          placeholder="Email (optional)"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                        />
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-[#0b66b3] text-white font-bold text-lg hover:bg-[#084c8a] transition"
                        >
                          Get My Exact Quote
                        </button>
                      </form>

                      <p className="text-center text-gray-500 text-sm mt-6">
                        Or call us now:{' '}
                        <a href={BUSINESS.phoneLink} className="text-[#0b66b3] font-semibold hover:underline">
                          {BUSINESS.phone}
                        </a>
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-4">
                        We&apos;ll contact you within {BUSINESS.responseTime} with your exact quote.
                      </p>
                      <p className="text-gray-500 text-sm">
                        Your estimate: <strong>${estimatedPrice}</strong> for {serviceOptions.find((s) => s.id === service)?.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Trust Our Estimates?</h2>
            <p className="text-gray-600">Transparent pricing with no hidden fees</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'Fixed Pricing', desc: 'Quote = Final price' },
              { icon: '🔒', title: 'No Hidden Fees', desc: 'Everything included' },
              { icon: '✅', title: '5-Year Warranty', desc: 'Guaranteed work' },
              { icon: '⭐', title: `${BUSINESS.rating} Rating`, desc: `${BUSINESS.reviewCount}+ reviews` },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-xl border border-gray-100">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
