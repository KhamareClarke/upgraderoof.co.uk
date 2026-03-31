import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Congleton | Period & Modern Roofing | 01270 897606 | Upgrade Roofs',
  description: 'Expert roofers serving Congleton CW12 from nearby Sandbach. Period property specialists. Roof repairs, new roofs, flat roofing, 24/7 emergency call-outs. CORC certified, £10M insured. Free quotes.',
  openGraph: {
    title: 'Roofers Congleton | Upgrade Roofs | 01270 897606',
    description: 'Congleton\'s trusted local roofers. 25+ years experience, CORC certified. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-congleton',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-congleton' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
