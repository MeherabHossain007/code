/**
 * Application Configuration
 * Central location for app-wide constants and configuration values
 */

export const APP_CONFIG = {
  name: "Untitled UI",
  tagline: "A design system that fuses precision with rebellion.",
  description:
    "A Figma component library that fuses precision with rebellion. For designers who build the future.",
} as const;

export const NAVIGATION = {
  items: [
    { label: "Products", href: "#products" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: {
    primary: "Buy now",
    secondary: "Sign in",
  },
} as const;

export const SOCIAL_LINKS = {
  figma: "https://figma.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
} as const;

export const METADATA = {
  title: "Untitled UI - Neobrutalism Component Library",
  description:
    "A Figma component library with 500+ components, built for speed and flexibility.",
  keywords: ["design system", "figma", "components", "neobrutalism", "ui kit"],
} as const;
