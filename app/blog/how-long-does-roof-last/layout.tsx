import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Long Does a Roof Last? | UK Roof Lifespan Guide | Upgrade Roofs',
  description: 'How long do different roof types last in the UK? Slate, tile, flat roofing lifespans explained. Expert guide from Cheshire roofing contractors. Free assessments.',
  keywords: 'how long does roof last, roof lifespan UK, slate roof lifespan, tile roof lifespan, flat roof lifespan, when to replace roof',
  openGraph: {
    title: 'How Long Does a Roof Last? Complete UK Guide',
    description: 'Understanding roof lifespans for different materials in the UK climate.',
    type: 'article',
    url: 'https://www.upgraderoofs.co.uk/blog/how-long-does-roof-last',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Long Does a Roof Last? | Upgrade Roofs',
    description: 'UK roof lifespan guide for homeowners.',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/blog/how-long-does-roof-last',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HowLongDoesRoofLastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
