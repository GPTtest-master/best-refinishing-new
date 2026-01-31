'use client';

import { useEffect } from 'react';

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash on initial page load
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerOffset = 100; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Run on mount
    handleHashScroll();

    // Also handle hash changes (for SPA navigation)
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return null;
}
