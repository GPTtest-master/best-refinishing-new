'use client';

import { BUSINESS } from '@/lib/constants';

interface TrackedPhoneLinkProps {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function TrackedPhoneLink({
  className = '',
  children,
  showIcon = false
}: TrackedPhoneLinkProps) {
  const handleClick = () => {
    // Fire Google Ads phone conversion
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
        'send_to': 'AW-17663809026/FtVGCJjCjtIbEIKs4eZB',
        'value': 30.0,
        'currency': 'USD',
      });

      // Also fire GA4 event
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_call', {
        'event_category': 'engagement',
        'event_label': 'phone_click',
        'value': 30,
      });
    }
  };

  return (
    <a
      href={BUSINESS.phoneLink}
      onClick={handleClick}
      className={className}
    >
      {showIcon && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )}
      {children || BUSINESS.phone}
    </a>
  );
}
