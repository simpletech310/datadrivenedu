'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from './types';

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="card">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between text-left"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-semibold">{item.question}</span>
              <ChevronDown className={isOpen ? 'rotate-180' : ''} />
            </button>
            {isOpen && <p className="mt-3 text-slate">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
