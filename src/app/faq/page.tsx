import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import { generateFAQPageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${BUSINESS.name}`,
  description: `Common questions about bathtub refinishing, tile reglazing, and our services. Get answers about pricing, process, warranty, and more. Call ${BUSINESS.phone} for more info.`,
  keywords: 'bathtub refinishing faq, reglazing questions, refinishing cost, how long does refinishing last, refinishing warranty',
  alternates: {
    canonical: `${BUSINESS.website}/faq`,
  },
};

export default function FAQPage() {
  const schema = generateFAQPageSchema();

  return (
    <>
      <SchemaScript schema={schema} />
      <FAQPageClient />
    </>
  );
}
