import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Crewe | 4 Miles Away | 01270 897606 | Upgrade Roofs',
  description: 'Trusted roofers serving Crewe CW1/CW2 from our Sandbach base, just 4 miles away. Roof repairs, new roofs, flat roofing, 24/7 emergency call-outs. CORC certified, £10M insured. Free quotes.',
  openGraph: {
    title: 'Roofers Crewe | Upgrade Roofs | 01270 897606',
    description: 'Crewe\'s trusted local roofers. 25+ years experience, CORC certified. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-crewe',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-crewe' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
