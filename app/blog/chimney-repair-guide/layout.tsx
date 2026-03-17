import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chimney Repairs Cheshire | Repointing & Rebuilds Guide | Upgrade Roofing',
  description: 'Complete guide to chimney repairs in Cheshire. Repointing, flashing, rebuilds explained. Signs of damage, costs, and when to call professionals. Free inspections.',
  keywords: 'chimney repairs Cheshire, chimney repointing, chimney flashing, chimney rebuild, chimney leak repair Sandbach Crewe',
  openGraph: {
    title: 'Chimney Repairs in Cheshire: Complete Guide',
    description: 'Everything you need to know about chimney maintenance and repairs.',
    type: 'article',
    url: 'https://upgraderoofs.co.uk/blog/chimney-repair-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chimney Repairs Guide | Upgrade Roofing',
    description: 'Chimney repair guide for Cheshire homeowners.',
  },
  alternates: {
    canonical: 'https://upgraderoofs.co.uk/blog/chimney-repair-guide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChimneyRepairGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
