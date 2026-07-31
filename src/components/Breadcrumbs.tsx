import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estruturada Breadcrumbs" className="py-4 border-b border-border-200/60 bg-ivory-50/50">
      <div className="container-custom">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-gray-600 font-interface">
          <li>
            <Link href="/" className="hover:text-navy-800 transition-colors">
              Home
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-border-200">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-navy-800 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-navy-800" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
