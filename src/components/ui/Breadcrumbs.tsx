import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, className = '', variant = 'light' }: BreadcrumbsProps) {
  // Build full items array with Home
  const allItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${BUSINESS.website}${item.href}` : undefined,
    })),
  };

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex items-center flex-wrap gap-1">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg
                    className={`w-4 h-4 mx-1 ${variant === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {isLast || !item.href ? (
                  <span className={`truncate max-w-[200px] ${variant === 'dark' ? 'text-amber-400' : 'text-gray-500'}`}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition ${variant === 'dark' ? 'text-gray-400 hover:text-white' : 'text-[#0b66b3] hover:text-[#084c8a] hover:underline'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
