import type { Metadata } from 'next';
import { BlogArticleSchema } from '@/components/BlogArticleSchema';

export const metadata: Metadata = {
  title: 'How to Choose a Roofing Contractor Cheshire | Avoid Cowboy Builders',
  description: 'Expert guide to choosing a reliable roofing contractor in Cheshire. Red flags, green flags, questions to ask. Protect yourself from rogue traders.',
  keywords: 'choose roofing contractor, reliable roofer Cheshire, avoid cowboy builders, roofing contractor checklist, hire roofer safely',
  openGraph: {
    title: 'How to Choose a Reliable Roofing Contractor',
    description: 'Avoid cowboy builders with our expert guide to hiring roofers.',
    type: 'article',
    url: 'https://www.upgraderoofs.co.uk/blog/choosing-roofing-contractor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choosing a Roofing Contractor | Upgrade Roofs',
    description: 'Expert guide to hiring reliable roofers.',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/blog/choosing-roofing-contractor',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChoosingRoofingContractorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogArticleSchema
        title="How to Choose a Reliable Roofing Contractor in Cheshire"
        description="Expert guide to choosing a reliable roofing contractor. Red flags, green flags, questions to ask."
        url="https://www.upgraderoofs.co.uk/blog/choosing-roofing-contractor"
        datePublished="2026-02-25"
        image="/images/6.jpeg"
      />
      {children}
    </>
  );
}
