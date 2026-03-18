import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Common Flat Roof Problems & Solutions | Cheshire | Upgrade Roofs',
  description: 'Guide to common flat roof problems: ponding, blistering, cracking, leaks. When to repair vs replace. EPDM, GRP, felt roofing experts in Cheshire.',
  keywords: 'flat roof problems, flat roof repair, flat roof leaking, EPDM roof, GRP fibreglass roof, flat roof replacement Cheshire',
  openGraph: {
    title: 'Common Flat Roof Problems and How to Fix Them',
    description: 'Expert guide to flat roof issues and solutions.',
    type: 'article',
    url: 'https://www.upgraderoofs.co.uk/blog/flat-roof-problems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat Roof Problems Guide | Upgrade Roofs',
    description: 'Common flat roof issues and solutions.',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/blog/flat-roof-problems',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FlatRoofProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
