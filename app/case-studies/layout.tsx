import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Case Studies Cheshire | Before & After | Upgrade Roofing',
  description: 'Real roofing projects completed across Cheshire. Before and after photos, customer testimonials. Tile roofs, flat roofs, chimneys, gutters. See our quality work.',
  keywords: 'roofing case studies, before after roofing, roofing projects Cheshire, roof replacement examples, roofing testimonials',
  openGraph: {
    title: 'Roofing Case Studies | Before & After Photos',
    description: 'Real roofing projects completed across Cheshire with customer testimonials.',
    url: 'https://upgraderoof.co.uk/case-studies',
    siteName: 'Upgrade Roofing Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Case Studies | Upgrade Roofing',
    description: 'Before and after roofing projects in Cheshire.',
  },
  alternates: {
    canonical: 'https://upgraderoof.co.uk/case-studies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
