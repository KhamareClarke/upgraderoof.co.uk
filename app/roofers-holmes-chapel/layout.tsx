import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Holmes Chapel | Village Roofing Experts | 01270 897606 | Upgrade Roofs',
  description: 'Quality roofers serving Holmes Chapel CW4, just 4 miles from our Sandbach base. Cottage and period property specialists. Roof repairs, new roofs, flat roofing, 24/7 emergency. CORC certified, £10M insured.',
  openGraph: {
    title: 'Roofers Holmes Chapel | Upgrade Roofs | 01270 897606',
    description: 'Holmes Chapel\'s trusted local roofers. 25+ years experience, CORC certified. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-holmes-chapel',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-holmes-chapel' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
