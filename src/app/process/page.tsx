import { Metadata } from 'next';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Refinishing Process | 6 Simple Steps to a New Bathroom',
  description: `Professional 6-step bathtub refinishing process. From free inspection to ready-to-use in 24 hours. ${BUSINESS.warranty} warranty. Seattle & surrounding areas.`,
  keywords: 'bathtub refinishing process, reglazing steps, how bathtub refinishing works, resurfacing process seattle',
};

const processSteps = [
  {
    number: 1,
    title: 'Free Inspection & Quote',
    description: 'We assess your surface condition, discuss your goals, and provide an accurate quote on the spot. No hidden fees, no pressure.',
    image: '/images/process-1.jpg', // Placeholder
    details: ['Same-day appointments available', 'Transparent pricing', 'Expert recommendations'],
  },
  {
    number: 2,
    title: 'Surface Preparation',
    description: 'We thoroughly clean and prepare the surface, removing all contaminants and repairing any chips, cracks, or damage.',
    image: '/images/process-2.jpg', // Placeholder
    details: ['Deep cleaning & decontamination', 'Chip & crack repair', 'Surface etching for adhesion'],
  },
  {
    number: 3,
    title: 'Professional Masking',
    description: 'We carefully mask and protect all surrounding areas including walls, floors, fixtures, and drains.',
    image: '/images/process-3.jpg', // Placeholder
    details: ['Complete area protection', 'Precise tape application', 'Hardware protection'],
  },
  {
    number: 4,
    title: 'Primer Application',
    description: 'We apply 2-3 coats of commercial-grade bonding primer using professional HVLP spray equipment.',
    image: '/images/process-4.jpg', // Placeholder
    details: ['Industrial bonding primer', 'Multiple thin coats', 'Perfect adhesion'],
  },
  {
    number: 5,
    title: 'Topcoat Finishing',
    description: 'We apply 2-3 layers of premium topcoat for a durable, glass-like finish that lasts for years.',
    image: '/images/process-5.jpg', // Placeholder
    details: ['Automotive-grade finish', 'Any color available', 'UV-resistant coating'],
  },
  {
    number: 6,
    title: 'Quality Inspection',
    description: 'Final inspection ensures a flawless finish. We clean up completely and provide care instructions.',
    image: '/images/process-6.jpg', // Placeholder
    details: ['100% quality check', 'Complete cleanup', 'Care guide provided'],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Professional Results,
              <span className="block text-amber-400">Every Time</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our proven 6-step process ensures consistent, high-quality results.
              Perfected over {BUSINESS.experience} years and {BUSINESS.projectsCompleted} projects.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b66b3] to-[#084c8a] shadow-2xl">
                    {/* Placeholder - replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl font-black opacity-20 mb-2">{step.number}</div>
                        <p className="text-white/60 text-sm">Photo placeholder</p>
                      </div>
                    </div>
                    {/* Uncomment when images are ready:
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-12 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-black text-xl">
                      {step.number}
                    </span>
                    <span className="text-[#0b66b3] font-semibold text-sm uppercase tracking-wider">
                      Step {step.number} of 6
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline at a Glance</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-black text-[#0b66b3] mb-2">4-6</div>
              <div className="text-gray-600">Hours of Work</div>
            </div>
            <div className="hidden md:block text-4xl text-gray-300">→</div>
            <div className="text-center p-6">
              <div className="text-5xl font-black text-amber-500 mb-2">24</div>
              <div className="text-gray-600">Hours to Use</div>
            </div>
            <div className="hidden md:block text-4xl text-gray-300">→</div>
            <div className="text-center p-6">
              <div className="text-5xl font-black text-green-500 mb-2">10-15</div>
              <div className="text-gray-600">Years of Beauty</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get your free quote today. We respond within {BUSINESS.responseTime}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              Get Instant Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
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
