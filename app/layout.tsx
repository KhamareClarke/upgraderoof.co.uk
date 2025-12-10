import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { StructuredData } from './structured-data';
import { ConditionalLayout } from '@/components/ConditionalLayout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MobileContactBar } from '@/components/MobileContactBar';
import { PerformanceOptimizations } from '@/components/PerformanceOptimizations';
import { Analytics } from '@/components/Analytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Professional Roofing Company Cheshire & Staffordshire | Upgrade Roofing',
  description: 'Expert roofing services in Cheshire & Staffordshire. Roof repairs, installations & replacements. 25+ years experience. Free quotes. Call 01270 897606',
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
  metadataBase: new URL('https://upgraderoof.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Roofing Company Cheshire & Staffordshire | Upgrade Roofing',
    description: 'Expert roofing services in Cheshire & Staffordshire. Roof repairs, installations & replacements. 25+ years experience. Free quotes.',
    url: 'https://upgraderoof.co.uk',
    siteName: 'Upgrade Roofing Solutions',
    images: [
      {
        url: 'https://upgraderoof.co.uk/images/6.jpeg',
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
    images: ['https://upgraderoof.co.uk/images/6.jpeg'],
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
        <link
          rel="preload"
          as="image"
          href="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1280&h=800"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F45B2E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Upgrade Roofing" />
      </head>
      <body className="font-sans antialiased">
        <Analytics />
        <PerformanceOptimizations />
        <ConditionalLayout>{children}</ConditionalLayout>
        <WhatsAppButton />
        <MobileContactBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
