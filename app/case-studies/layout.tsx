import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Case Studies Sandbach & Cheshire | Before & After | Upgrade Roofs',
  description: 'Real roofing projects in Sandbach, Crewe, Middlewich & Cheshire. Before/after photos, customer reviews. Re-roofs, flat roofs, chimney repairs, emergency work. 25+ years experience.',
  keywords: 'roofing case studies Sandbach, before after roofing Cheshire, roofing projects CW11, roof replacement examples, roofing testimonials Sandbach',
  openGraph: {
    title: 'Roofing Case Studies | Before & After Photos',
    description: 'Real roofing projects completed across Cheshire with customer testimonials.',
    url: 'https://www.upgraderoofs.co.uk/case-studies',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Case Studies | Upgrade Roofs',
    description: 'Before and after roofing projects in Cheshire.',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/case-studies',
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
