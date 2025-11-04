import React from 'react';
import { Feature, ShowcaseItem, Testimonial, AccessOption, FooterColumn } from './types';

// Icons for Features
const PuzzleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4-4-4 5.293-5.293a1 1 0 011.414 0L17 13m0-8l-8 8" /></svg>;
const PaletteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m9 5.197a6 6 0 01-3.463-.972M15 21a6 6 0 01-3.463-.972" /></svg>;


export const FEATURES: Feature[] = [
  { icon: <PuzzleIcon />, title: "500+ Components", description: "Pre-designed, production-ready elements to build your product faster." },
  { icon: <PaletteIcon />, title: "Fully Customizable", description: "Adapt colors, typography, and spacing to your brand in seconds." },
  { icon: <SparklesIcon />, title: "Figma Ready", description: "Global styles and variables are built-in for maximum consistency." },
  { icon: <UsersIcon />, title: "Built for Designers", description: "Built with performance, variants, and auto-layout in mind." },
];

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
    { image: "https://picsum.photos/seed/showcase1/600/800", category: "Forms", title: "Advanced Input Fields", description: "Fully accessible and customizable form elements." },
    { image: "https://picsum.photos/seed/showcase2/600/800", category: "Navigation", title: "Responsive Navbars", description: "Collapsible and adaptive navigation for all screen sizes." },
    { image: "https://picsum.photos/seed/showcase3/600/800", category: "Data Display", title: "Dynamic Data Tables", description: "Sortable, filterable tables for complex data." },
    { image: "https://picsum.photos/seed/showcase4/600/800", category: "Feedback", title: "Modal & Alert System", description: "User-friendly modals, alerts, and notifications." },
    { image: "https://picsum.photos/seed/showcase5/600/800", category: "Buttons", title: "Versatile Button Kit", description: "A complete set of buttons with multiple states and styles." },
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: "FigmaKit has been a game-changer for our team. We're delivering high-quality designs in a fraction of the time. The consistency it brings is invaluable.", avatar: "https://picsum.photos/seed/avatar1/100/100", name: "Sarah Johnson", role: "Lead Designer", company: "Innovate Inc." },
    { quote: "As a solo developer, this library allows me to build beautiful, professional-looking UIs without a dedicated designer. The components are a joy to work with.", avatar: "https://picsum.photos/seed/avatar2/100/100", name: "Michael Chen", role: "Founder", company: "CodeCraft" },
    { quote: "The best Figma library we've ever used. It's comprehensive, well-documented, and perfectly aligns with modern design practices. Highly recommended!", avatar: "https://picsum.photos/seed/avatar3/100/100", name: "Emily Rodriguez", role: "Product Manager", company: "Stripe" },
];

// Icons for Access
const FigmaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 16 24" fill="currentColor"><path d="M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v8a8 8 0 0 1-8 8ZM8 8a4 4 0 0 0-4 4h4V8Z"/><path d="M8 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"/><path d="M12 12a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"/></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;

export const ACCESS_OPTIONS: AccessOption[] = [
  { icon: <FigmaIcon />, title: "Figma Community", description: "Get the latest version directly from the official Figma Community page.", ctaText: "Open in Figma", ctaLink: "#" },
  { icon: <DownloadIcon />, title: "Direct Download", description: "Download the complete .fig file to use offline or in your private projects.", ctaText: "Download .zip", ctaLink: "#" },
  { icon: <GithubIcon />, title: "GitHub Repository", description: "Access the source, contribute, and track updates on our public GitHub repo.", ctaText: "View on GitHub", ctaLink: "#" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        title: 'Product',
        links: [
            { name: 'Library', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Roadmap', href: '#' },
            { name: 'Changelog', href: '#' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'Documentation', href: '#' },
            { name: 'Tutorials', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Support', href: '#' },
        ]
    },
    {
        title: 'Legal',
        links: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Contact Us', href: '#' },
        ]
    }
];