import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Roof Inspection Cheshire | Roofers Near Me | 01270 897606',
  description: 'FREE roof inspection across Cheshire and North West England. Local roofers with 25+ years experience. Emergency roof repairs, leak fixes, new roofs. Same day quotes. CORC certified, £10M insured. Call 01270 897606.',
  keywords: 'roof inspection Cheshire, roofers Cheshire, roof repair Cheshire, roofing company Cheshire, emergency roofer Cheshire, flat roof Cheshire, tile roof repair Cheshire, North West roofers, Sandbach, Crewe, Middlewich, Congleton',
  openGraph: {
    title: 'Free Roof Inspection Cheshire | Local Expert Roofers',
    description: 'Claim your FREE roof inspection in Cheshire. 25+ years experience, same day quotes, £10M insured. Call 01270 897606.',
    url: 'https://upgraderoof.co.uk/offer-cheshire',
    siteName: 'Upgrade Roofing Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Roof Inspection Cheshire | 01270 897606',
    description: 'FREE roof inspection in Cheshire. Expert local roofers, 25+ years experience. Call now!',
  },
  alternates: {
    canonical: 'https://upgraderoof.co.uk/offer-cheshire',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfferCheshireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
