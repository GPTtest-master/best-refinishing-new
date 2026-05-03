import { Metadata } from 'next';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Remodeling Process | Kitchen & Bathroom Remodeling Seattle',
  description: `Our proven 6-step kitchen and bathroom remodeling process — from free consultation to final walkthrough. ${BUSINESS.experience} years experience. ${BUSINESS.projectsCompleted}+ projects completed in Seattle.`,
  keywords: 'kitchen remodeling process, bathroom remodeling steps, how remodeling works, kitchen renovation process seattle, bathroom renovation timeline',
  alternates: {
    canonical: `${BUSINESS.website}/process`,
  },
  openGraph: {
    title: 'Our Remodeling Process | 6 Steps to Your Dream Space',
    description: `Our proven 6-step kitchen and bathroom remodeling process. From design to final walkthrough — ${BUSINESS.warranty} warranty on every project.`,
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
  },
};

const processSteps = [
  {
    number: 1,
    title: 'Free Consultation & Estimate',
    description: 'It all starts with a conversation. Tell us your vision, and we\'ll visit your home to assess the space, discuss your goals, and provide a detailed, transparent estimate — no hidden fees, no pressure. We bring samples, ideas, and honest advice.',
    image: '/images/remodeling/kitchen-showcase-1.jpg',
    details: ['Free in-home consultation', 'Detailed written estimate', 'Design ideas & material samples', 'No obligation, no pressure'],
  },
  {
    number: 2,
    title: 'Design & Material Selection',
    description: 'Together we finalize the layout, pick materials — quartz countertops, porcelain tile, fixtures, cabinetry — and create a clear project plan with timeline and milestones. You\'ll know exactly what\'s happening and when.',
    image: '/images/remodeling/kitchen-detail-1.jpg',
    details: ['Custom layout & design plan', 'Premium material selection', 'Clear project timeline', 'All selections finalized before work begins'],
  },
  {
    number: 3,
    title: 'Demolition & Prep Work',
    description: 'Our crew carefully removes old fixtures, cabinets, tile, and surfaces. We protect the rest of your home with dust barriers and floor covers. All debris is hauled away — your home stays clean.',
    image: '/images/remodeling/bathroom-showcase-1.jpg',
    details: ['Careful, controlled demolition', 'Full home protection (dust barriers, floor covers)', 'Debris removal & cleanup', 'Structural inspection & repairs if needed'],
  },
  {
    number: 4,
    title: 'Plumbing, Electrical & Framing',
    description: 'This is where the magic happens behind the walls. We handle all rough-in work — moving plumbing lines, updating electrical, reinforcing framing. Everything is done to code by licensed professionals.',
    image: '/images/remodeling/bathroom-showcase-3.jpg',
    details: ['Licensed plumbing & electrical work', 'Code-compliant installations', 'Layout changes & pipe rerouting', 'Inspection-ready rough-in'],
  },
  {
    number: 5,
    title: 'Installation & Finishing',
    description: 'The transformation takes shape. We install cabinets, countertops, tile, fixtures, lighting, and all finishing touches. Every cut is precise, every seam is tight, every detail is dialed in.',
    image: '/images/remodeling/kitchen-showcase-3.jpg',
    details: ['Cabinet & countertop installation', 'Tile work (floors, walls, backsplash)', 'Fixture & hardware mounting', 'Paint, trim & finishing details'],
  },
  {
    number: 6,
    title: 'Final Walkthrough & Warranty',
    description: 'Before we hand you the keys to your new space, we walk through every detail together. We check every surface, test every fixture, and make sure you\'re 100% thrilled. Then we back it all with our 5-year warranty.',
    image: '/images/remodeling/kitchen-showcase-4.jpg',
    details: ['Detailed quality inspection', 'Test all fixtures & appliances', 'Touch-ups & final adjustments', '5-year warranty on all work'],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/kitchen-showcase-2.jpg"
            alt="Beautiful kitchen remodel in Seattle"
            fill
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              OUR PROVEN PROCESS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              From Vision to Reality
              <span className="block text-amber-400">in 6 Simple Steps</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-2xl">
              Our proven remodeling process has been perfected over {BUSINESS.experience} years
              and {BUSINESS.projectsCompleted}+ projects. No surprises, no runarounds — just
              expert craftsmanship from start to finish.
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
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-black text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="text-[#0b66b3] font-semibold text-sm uppercase tracking-wider">
                    Step {step.number} of 6
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/bathroom-showcase-4.jpg"
            alt="Completed bathroom remodel"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Typical Remodeling Timeline</h2>
            <p className="text-white/70">From consultation to enjoying your new space</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-black text-amber-400 mb-2">1-2</div>
              <div className="text-white/80">Weeks for Bathroom</div>
            </div>
            <div className="hidden md:block text-4xl text-white/30">→</div>
            <div className="text-center p-6">
              <div className="text-5xl font-black text-amber-400 mb-2">3-6</div>
              <div className="text-white/80">Weeks for Kitchen</div>
            </div>
            <div className="hidden md:block text-4xl text-white/30">→</div>
            <div className="text-center p-6">
              <div className="text-5xl font-black text-green-400 mb-2">5 Yr</div>
              <div className="text-white/80">Warranty Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve refined every step so your remodel runs smoothly — on time, on budget, and beyond expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Surprises',
                desc: 'Detailed estimates upfront. Every cost, every material, every timeline — documented before we start.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'One Team, Start to Finish',
                desc: 'No subcontractor shuffle. Our in-house crew handles design, plumbing, tile, and finishing — all coordinated.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Daily Communication',
                desc: 'You\'ll always know what\'s happening. Daily updates, responsive phone calls, zero ghosting.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-slate-50 hover:bg-[#0b66b3] group transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#0b66b3]/10 group-hover:bg-white/20 flex items-center justify-center text-[#0b66b3] group-hover:text-white mb-5 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/bathroom-showcase-2.jpg"
            alt="Stunning bathroom remodel"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b66b3]/90 to-[#084c8a]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Remodel?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Get your free estimate today. We respond within {BUSINESS.responseTime}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
            >
              Free Estimate
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
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Kitchen & Bathroom Remodeling Process',
            description: `Our proven 6-step kitchen and bathroom remodeling process — from free consultation to final walkthrough. ${BUSINESS.experience} years experience.`,
            totalTime: 'P6W',
            step: processSteps.map((s) => ({
              '@type': 'HowToStep',
              name: s.title,
              text: s.description,
              image: `${BUSINESS.website}${s.image}`,
              url: `${BUSINESS.website}/process`,
            })),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: BUSINESS.website,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Our Process',
                item: `${BUSINESS.website}/process`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
