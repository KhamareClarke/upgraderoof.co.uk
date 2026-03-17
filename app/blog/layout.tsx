import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Blog | Tips & Advice | Upgrade Roofing Cheshire',
  description: 'Expert roofing tips, advice and guides from Upgrade Roofing Solutions. Learn about roof maintenance, repairs, materials and more. Serving Cheshire homeowners.',
  keywords: 'roofing blog, roofing tips, roof maintenance advice, roofing guides Cheshire, roof repair tips, roofing materials guide',
  openGraph: {
    title: 'Roofing Blog | Tips & Advice | Upgrade Roofing',
    description: 'Expert roofing tips and advice from Cheshire roofing specialists.',
    url: 'https://upgraderoof.co.uk/blog',
    siteName: 'Upgrade Roofing Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Blog | Upgrade Roofing Cheshire',
    description: 'Expert roofing tips and advice.',
  },
  alternates: {
    canonical: 'https://upgraderoof.co.uk/blog',
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
