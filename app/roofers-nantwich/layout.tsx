import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Nantwich | Heritage & Listed Buildings | 01270 897606 | Upgrade Roofs',
  description: 'Heritage roofing specialists serving Nantwich CW5. Listed building experience, natural slate and clay tile experts. Roof repairs, new roofs, 24/7 emergency call-outs. CORC certified, £10M insured. Free quotes.',
  openGraph: {
    title: 'Roofers Nantwich | Upgrade Roofs | 01270 897606',
    description: 'Nantwich\'s trusted local roofers. 25+ years experience, CORC certified. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-nantwich',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-nantwich' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
