import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Roof Repairs Cheshire | 24/7 Storm Damage | 01270 897606',
  description: 'Need emergency roof repairs in Cheshire? 24/7 storm damage response. Leaks, missing tiles, wind damage. Fast response across Sandbach, Crewe, Middlewich. Call 01270 897606.',
  keywords: 'emergency roof repairs Cheshire, storm damage roof, 24/7 roofer, roof leak emergency, urgent roof repair Sandbach Crewe',
  openGraph: {
    title: 'Emergency Roof Repairs Cheshire | 24/7 Response',
    description: 'Fast emergency roof repairs across Cheshire. Storm damage, leaks, missing tiles.',
    type: 'article',
    url: 'https://upgraderoof.co.uk/blog/emergency-roof-repairs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Roof Repairs Cheshire | 24/7',
    description: 'Fast emergency roof repairs across Cheshire.',
  },
  alternates: {
    canonical: 'https://upgraderoof.co.uk/blog/emergency-roof-repairs',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmergencyRoofRepairsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
