import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Maintenance Guide Cheshire | Cleaning & Repairs | Upgrade Roofing',
  description: 'Complete guide to gutter maintenance in Cheshire. When to clean, signs of problems, DIY vs professional. Gutter services in Sandbach, Crewe, Middlewich.',
  keywords: 'gutter maintenance Cheshire, gutter cleaning, blocked gutters, gutter repair, fascia soffit Cheshire',
  openGraph: {
    title: 'Complete Guide to Gutter Maintenance in Cheshire',
    description: 'Keep your gutters flowing freely and protect your home from water damage.',
    type: 'article',
    url: 'https://upgraderoofs.co.uk/blog/gutter-maintenance-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Maintenance Guide | Upgrade Roofing',
    description: 'Gutter care guide for Cheshire homeowners.',
  },
  alternates: {
    canonical: 'https://upgraderoofs.co.uk/blog/gutter-maintenance-guide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GutterMaintenanceGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
