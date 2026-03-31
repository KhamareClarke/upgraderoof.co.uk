import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { StructuredData } from './structured-data';
import { ConditionalLayout } from '@/components/ConditionalLayout';
import { Analytics } from '@/components/Analytics';
import { ClientWidgets } from '@/components/ClientWidgets';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Upgrade Roofs | Roofers Sandbach | 01270 897606',
    template: '%s | Upgrade Roofs',
  },
  description: 'Upgrade Roofs — trusted roofers based in Sandbach, serving Cheshire. 25+ years experience, CORC certified, £10M insured. Call 01270 897606.',
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
  authors: [{ name: 'Upgrade Roofs' }],
  creator: 'Upgrade Roofs',
  publisher: 'Upgrade Roofs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.upgraderoofs.co.uk'),
  openGraph: {
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
        <StructuredData />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
        <ClientWidgets />
      </body>
    </html>
  );
}
