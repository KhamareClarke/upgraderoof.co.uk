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
      
      {/* SEO-friendly static content section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Professional Roofing Services in Cheshire
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Upgrade Roofing Solutions is Cheshire's trusted roofing company with over 25 years of experience. We provide expert roofing services across Sandbach, Crewe, Congleton, Middlewich, Nantwich, Alsager, and throughout Cheshire and Staffordshire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Expert Roofing Contractors</h2>
              <p className="text-gray-700 mb-4">
                As CORC (Confederation of Roofing Contractors) certified professionals, we deliver the highest quality roofing workmanship. Our team of skilled roofers specializes in tile and slate roofing, flat roof installations, chimney repairs, guttering, fascias, and emergency roof repairs.
              </p>
              <p className="text-gray-700">
                We carry £10 million public liability insurance and are fully qualified to handle all types of residential and commercial roofing projects. From minor roof repairs to complete roof replacements, we provide reliable, professional service every time.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Why Choose Upgrade Roofing?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span>
                  <span><strong>25+ Years Experience</strong> - Thousands of successful roofing projects completed across Cheshire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span>
                  <span><strong>CORC Certified</strong> - Fully qualified and certified roofing contractors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span>
                  <span><strong>£10M Insured</strong> - Complete peace of mind with comprehensive insurance coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span>
                  <span><strong>Free Quotes</strong> - No-obligation quotes with transparent pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span>
                  <span><strong>24/7 Emergency Service</strong> - Fast response for urgent roof repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span>
                  <span><strong>Local Roofers</strong> - Based in Sandbach, serving all of Cheshire</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-brand-grey p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Roofing Services in Cheshire</h2>
            <p className="text-gray-700 mb-6">
              We offer a comprehensive range of roofing services to homeowners and businesses throughout Cheshire. Whether you need a new roof installation, roof repairs, or routine maintenance, our experienced team delivers exceptional results.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">Tile & Slate Roofing</h3>
                <p className="text-sm">Traditional and modern tile roofing, Welsh slate, concrete tiles, and clay tiles. Expert installation and repairs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">Flat Roofing</h3>
                <p className="text-sm">EPDM rubber roofing, GRP fibreglass roofing, and felt roofing systems. Waterproof guarantees up to 20 years.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">Chimney Repairs</h3>
                <p className="text-sm">Chimney repointing, rebuilds, lead flashing, chimney pots, and stack repairs by experienced craftsmen.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">Guttering & Fascias</h3>
                <p className="text-sm">UPVC guttering, fascias, soffits, and downpipes. Repairs, cleaning, and full replacements available.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">Emergency Repairs</h3>
                <p className="text-sm">24/7 emergency roofing service for storm damage, leaks, and urgent repairs across Cheshire.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">Roof Maintenance</h3>
                <p className="text-sm">Regular inspections, moss removal, gutter cleaning, and preventative maintenance to extend roof life.</p>
              </div>
            </div>
          </div>
        </div>
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
