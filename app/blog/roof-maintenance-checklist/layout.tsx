import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Maintenance Checklist Cheshire | Seasonal Guide | Upgrade Roofing',
  description: 'Complete roof maintenance checklist for Cheshire homeowners. Spring and autumn tasks, monthly checks, and when to call professionals. Extend your roof lifespan.',
  keywords: 'roof maintenance checklist, roof care Cheshire, seasonal roof maintenance, roof inspection guide, prevent roof damage',
  openGraph: {
    title: 'Roof Maintenance Checklist for Cheshire Homeowners',
    description: 'Keep your roof in top condition with our seasonal maintenance guide.',
    type: 'article',
    url: 'https://upgraderoofs.co.uk/blog/roof-maintenance-checklist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Maintenance Checklist | Upgrade Roofing',
    description: 'Seasonal roof maintenance guide for Cheshire.',
  },
  alternates: {
    canonical: 'https://upgraderoofs.co.uk/blog/roof-maintenance-checklist',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofMaintenanceChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
