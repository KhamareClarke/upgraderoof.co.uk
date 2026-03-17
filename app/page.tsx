import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { GoogleReviewsCarousel } from '@/components/GoogleReviewsCarousel';
import { VideoTestimonials } from '@/components/VideoTestimonials';
import { GallerySlider } from '@/components/GallerySlider';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { EnhancedContactSection } from '@/components/EnhancedContactSection';

export const metadata: Metadata = {
  title: 'Upgrade Roofing Solutions | Expert Roofers Cheshire | 01270 897606',
  description: 'Professional roofing services in Cheshire. 25+ years experience, CORC certified, £10M insured. Tile roofs, flat roofs, repairs, guttering. Free quotes. Emergency service available. Call 01270 897606.',
  keywords: 'roofers Cheshire, roofing company Cheshire, roof repairs Cheshire, flat roofing, tile roofing, emergency roofer, Sandbach roofer, Crewe roofer, Congleton roofer',
  openGraph: {
    title: 'Upgrade Roofing Solutions | Expert Roofers Cheshire',
    description: 'Professional roofing services in Cheshire. 25+ years experience, CORC certified, £10M insured. Free quotes available.',
    url: 'https://upgraderoofs.co.uk',
    siteName: 'Upgrade Roofing Solutions',
    images: [
      {
        url: 'https://upgraderoofs.co.uk/images/6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Upgrade Roofing Solutions - Professional Roofers Cheshire',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upgrade Roofing Solutions | Expert Roofers Cheshire',
    description: 'Professional roofing services in Cheshire. 25+ years experience. Free quotes.',
    images: ['https://upgraderoofs.co.uk/images/6.jpeg'],
  },
  alternates: {
    canonical: 'https://upgraderoofs.co.uk',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <TrustStrip />
      </div>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <WhyChooseUs />
      </section>
      <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <GoogleReviewsCarousel />
        <VideoTestimonials />
      </div>
      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <section id="gallery">
          <GallerySlider />
        </section>
        <FAQ />
      </div>
      <CTABanner />
      <section id="contact">
        <EnhancedContactSection />
      </section>
    </>
  );
}
