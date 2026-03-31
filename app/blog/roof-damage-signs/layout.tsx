import type { Metadata } from 'next';
import { BlogArticleSchema } from '@/components/BlogArticleSchema';

export const metadata: Metadata = {
  title: 'Signs of Roof Damage | When to Call a Roofer | Upgrade Roofs',
  description: 'Learn the warning signs of roof damage. Missing tiles, leaks, sagging, moss growth. Know when to call a professional roofer. Expert advice from Upgrade Roofs.',
  keywords: 'roof damage signs, when to repair roof, roof leak signs, missing roof tiles, roof inspection needed, roof damage Cheshire',
  openGraph: {
    title: 'Signs of Roof Damage | When to Call a Roofer',
    description: 'Learn the warning signs of roof damage and when to call a professional.',
    url: 'https://www.upgraderoofs.co.uk/blog/roof-damage-signs',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signs of Roof Damage | Upgrade Roofs',
    description: 'Learn the warning signs of roof damage.',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/blog/roof-damage-signs',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofDamageSignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogArticleSchema
        title="Signs of Roof Damage: When to Call a Roofer"
        description="Learn the warning signs of roof damage. Missing tiles, leaks, sagging, moss growth."
        url="https://www.upgraderoofs.co.uk/blog/roof-damage-signs"
        datePublished="2024-11-04"
      />
      {children}
    </>
  );
}
