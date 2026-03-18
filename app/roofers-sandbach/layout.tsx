import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofers Sandbach | Trusted Roofing Company | Upgrade Roofs',
  description: 'Local roofers in Sandbach, Cheshire. 25+ years experience. Roof repairs, new roofs, flat roofing, emergency call-outs. CORC certified, £10M insured. Free quotes.',
  keywords: 'roofers sandbach, roofing company sandbach, roof repair sandbach, roofer near me sandbach, new roofs sandbach, emergency roofer sandbach, flat roofing sandbach, tile roofing sandbach',
  openGraph: {
    title: 'Roofers Sandbach | Local Roofing Experts | Upgrade Roofs',
    description: 'Sandbach\'s trusted roofers. 25+ years experience, CORC certified, £10M insured. Free quotes.',
    url: 'https://www.upgraderoofs.co.uk/roofers-sandbach',
    siteName: 'Upgrade Roofs',
    images: [
      {
        url: 'https://www.upgraderoofs.co.uk/images/6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Professional roofers in Sandbach, Cheshire - Upgrade Roofs',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofers Sandbach | Upgrade Roofs | 01270 897606',
    description: 'Local roofers in Sandbach. 25+ years experience. Free quotes.',
    images: ['https://www.upgraderoofs.co.uk/images/6.jpeg'],
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/roofers-sandbach',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofersSandbachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
