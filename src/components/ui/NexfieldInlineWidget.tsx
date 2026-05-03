'use client';

import { useEffect, useRef } from 'react';

const renderIframeFallback = (host: HTMLDivElement) => {
  host.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = 'https://nexfield.pro/crm/book?u=137&embed=1';
  iframe.title = 'Schedule remodeling estimate';
  iframe.width = '100%';
  iframe.height = '900';
  iframe.className = 'min-h-[560px] w-full rounded-2xl border-0';
  iframe.allow = 'clipboard-write';
  host.appendChild(iframe);
};

export default function NexfieldInlineWidget() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const handler = (event: MessageEvent) => {
      if (event.origin !== 'https://nexfield.pro') return;
      const data = event.data;
      const fallbackIframe = host.querySelector('iframe');
      if (data?.type === 'nexfield_resize' && fallbackIframe) {
        fallbackIframe.style.height = `${data.height}px`;
      }
      if (data?.type === 'nexfield_redirect' && data.url) {
        window.location.href = data.url;
      }
    };

    window.addEventListener('message', handler);

    if ((window as unknown as { NexfieldWidget?: unknown }).NexfieldWidget) {
      renderIframeFallback(host);
      return () => window.removeEventListener('message', handler);
    }

    const script = document.createElement('script');
    script.src = 'https://nexfield.pro/crm/widget.js?u=137';
    script.async = true;
    script.onerror = () => renderIframeFallback(host);
    host.appendChild(script);

    return () => window.removeEventListener('message', handler);
  }, []);

  return <div ref={hostRef} className="min-h-[560px]" />;
}
