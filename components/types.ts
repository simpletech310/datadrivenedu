import { LucideIcon } from 'lucide-react';

export type NavLink = {
  name: string;
  href: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description?: string;
};
