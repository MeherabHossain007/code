// Fix: Import `ReactNode` type to resolve missing React namespace error.
import type { ReactNode } from 'react';

export interface Feature {
  // Fix: Use `ReactNode` type instead of `React.ReactNode`.
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ShowcaseItem {
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  role: string;
  company?: string;
}

export interface AccessOption {
  // Fix: Use `ReactNode` type instead of `React.ReactNode`.
  icon: ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface FooterLink {
    name: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}