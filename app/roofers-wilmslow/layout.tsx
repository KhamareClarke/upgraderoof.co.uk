import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { TownLocalBusinessSchema } from '@/components/TownLocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Roofers Wilmslow | Upgrade Roofs | 01270 897606',
  description: 'Local roofers in Wilmslow (SK9). CORC certified, £10M insured, 10-year guarantee. Flat roofing, tiles, chimney repairs, gutters, skylights & cladding. Free quotes.',
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/roofers-wilmslow' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TownLocalBusinessSchema town="Wilmslow" postcode="SK9" slug="roofers-wilmslow" lat={53.3259} lng={-2.2309} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.upgraderoofs.co.uk' },
        { name: 'Service Areas', url: 'https://www.upgraderoofs.co.uk/service-areas' },
        { name: 'Roofers Wilmslow', url: 'https://www.upgraderoofs.co.uk/roofers-wilmslow' },
      ]} />
      {children}
    </>
  );
}