import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Blog | Tips & Advice | Upgrade Roofs',
  description: 'Expert roofing tips, advice and guides from Upgrade Roofs. Learn about roof maintenance, repairs, materials and more. Serving Cheshire homeowners.',
  keywords: 'roofing blog, roofing tips, roof maintenance advice, roofing guides Cheshire, roof repair tips, roofing materials guide',
  openGraph: {
    title: 'Roofing Blog | Tips & Advice | Upgrade Roofs',
    description: 'Expert roofing tips and advice from Cheshire roofing specialists.',
    url: 'https://www.upgraderoofs.co.uk/blog',
    siteName: 'Upgrade Roofs',
    images: [
      {
        url: 'https://www.upgraderoofs.co.uk/images/7.jpeg',
        width: 1200,
        height: 630,
        alt: 'Roofing Blog — Expert Tips and Advice from Upgrade Roofs',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Blog | Upgrade Roofs',
    description: 'Expert roofing tips and advice.',
    images: ['https://www.upgraderoofs.co.uk/images/7.jpeg'],
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
