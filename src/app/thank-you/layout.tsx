import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Thank You | ${BUSINESS.name}`,
  description: `Thank you for contacting ${BUSINESS.name}. We will get back to you shortly with your quote.`,
  alternates: {
    canonical: BUSINESS.website + '/thank-you',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
