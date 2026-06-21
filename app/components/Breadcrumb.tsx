'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首頁',
        item: 'https://www.newskingdom.store',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://www.newskingdom.store${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="麵包屑導航" className={`flex items-center gap-2 text-sm ${className}`}>
        <ol className="flex items-center gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <Link
              href="/"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
              itemProp="item"
            >
              <Home className="w-4 h-4" />
              <span itemProp="name" className="sr-only">首頁</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-4 h-4 text-zinc-600" />
              <Link
                href={item.href}
                className={`text-zinc-400 hover:text-white transition-colors ${
                  index === items.length - 1 ? 'text-white font-medium' : ''
                }`}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
              <meta itemProp="position" content={(index + 2).toString()} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
