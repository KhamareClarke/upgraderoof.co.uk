import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Middlewich | Local Roofing Company | Upgrade Roofs',
  description: 'Trusted roofers in Middlewich, Cheshire. Roof repairs, new roofs, flat roofing, emergency call-outs. CORC certified, £10M insured, 25+ years experience. Free quotes.',
  openGraph: {
    title: 'Roofers Middlewich | Upgrade Roofs | 01270 897606',
    description: 'Middlewich\'s trusted local roofers. 25+ years experience, CORC certified. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-middlewich',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-middlewich' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
