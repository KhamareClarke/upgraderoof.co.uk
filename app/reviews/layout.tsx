import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews | Upgrade Roofing Cheshire | 5 Star Rated',
  description: 'Read genuine customer reviews for Upgrade Roofing Solutions. 5 star rated on Google with 50+ reviews. See what Cheshire homeowners say about our roofing services.',
  keywords: 'roofing reviews Cheshire, roofer testimonials, Upgrade Roofing reviews, customer feedback, 5 star roofer Cheshire',
  openGraph: {
    title: 'Customer Reviews | Upgrade Roofing Cheshire',
    description: '5 star rated roofing company. Read genuine customer reviews from Cheshire homeowners.',
    url: 'https://upgraderoofs.co.uk/reviews',
    siteName: 'Upgrade Roofing Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews | Upgrade Roofing Cheshire',
    description: '5 star rated. Read genuine customer reviews.',
  },
  alternates: {
    canonical: 'https://upgraderoofs.co.uk/reviews',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
