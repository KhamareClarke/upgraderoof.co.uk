import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { StructuredData } from './structured-data';
import { ConditionalLayout } from '@/components/ConditionalLayout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MobileContactBar } from '@/components/MobileContactBar';
import { Analytics } from '@/components/Analytics';
import { CookieConsent } from '@/components/CookieConsent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Professional Roofing Company Cheshire & Staffordshire | Upgrade Roofing',
  description: 'Expert roofing services in Cheshire & Staffordshire. Roof repairs, installations & replacements. 25+ years experience. Free quotes. Call 01270 897606',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/images/upgrade_logo.jpeg',
    shortcut: '/images/upgrade_logo.jpeg',
    apple: '/images/upgrade_logo.jpeg',
  },
  keywords: [
    'roofing company Cheshire',
    'roof repairs Cheshire',
    'roofing Staffordshire', 
    'flat roofing Cheshire',
    'tile roofs Cheshire',
    'guttering Cheshire',
    'roofing Sandbach',
    'roofing Crewe',
    'roofing Congleton',
    'roofing Middlewich',
    'emergency roof repairs Cheshire',
    'roofing contractors Cheshire',
    'skylight installation Cheshire',
    'cladding Cheshire',
    'roof replacement Cheshire',
    'commercial roofing Cheshire'
  ],
  authors: [{ name: 'Upgrade Roofing Solutions' }],
  creator: 'Upgrade Roofing Solutions',
  publisher: 'Upgrade Roofing Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://upgraderoofs.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Roofing Company Cheshire & Staffordshire | Upgrade Roofing',
    description: 'Expert roofing services in Cheshire & Staffordshire. Roof repairs, installations & replacements. 25+ years experience. Free quotes.',
    url: 'https://upgraderoofs.co.uk',
    siteName: 'Upgrade Roofing Solutions',
    images: [
      {
        url: 'https://upgraderoofs.co.uk/images/6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Professional Roofing Services Cheshire - Upgrade Roofing',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Roofing Company Cheshire & Staffordshire | Upgrade Roofing',
    description: 'Expert roofing services in Cheshire & Staffordshire. 25+ years experience. Free quotes.',
    images: ['https://upgraderoofs.co.uk/images/6.jpeg'],
    site: '@upgraderoofing',
    creator: '@upgraderoofing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'l8ZfvIY9wUeZiyzCRFhthl1KvzjwVCwP-tLXa4uQtZA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <head>
        <meta name="google-site-verification" content="l8ZfvIY9wUeZiyzCRFhthl1KvzjwVCwP-tLXa4uQtZA" />
        <StructuredData />
        <link rel="icon" href="/images/upgrade_logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/upgrade_logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/upgrade_logo.jpeg" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload critical hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/6.jpeg"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKPC2G22"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Analytics />
        <ConditionalLayout>{children}</ConditionalLayout>
        <WhatsAppButton />
        <MobileContactBar />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
