import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import { generateFAQPageSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${BUSINESS.name}`,
  description: `Common questions about kitchen & bathroom remodeling, bathtub installation, tile installation, and our services. Get answers about pricing, process, warranty, and more. Call ${BUSINESS.phone} for more info.`,
  keywords: 'kitchen remodeling faq, bathroom remodeling questions, remodeling cost, remodeling warranty, bathtub installation faq, remodeling questions, remodeling cost, how long does remodeling last, remodeling warranty',
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
