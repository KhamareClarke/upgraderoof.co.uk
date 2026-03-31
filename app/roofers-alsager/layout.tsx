import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Alsager | Re-Roofing Specialists | 01270 897606 | Upgrade Roofs',
  description: 'Trusted roofers serving Alsager ST7, just 5 miles from our Sandbach base. Concrete tile replacement experts. Roof repairs, new roofs, flat roofing, 24/7 emergency call-outs. CORC certified, £10M insured. Free quotes.',
  openGraph: {
    title: 'Roofers Alsager | Upgrade Roofs | 01270 897606',
    description: 'Alsager\'s trusted local roofers. 25+ years experience, CORC certified. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-alsager',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-alsager' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
