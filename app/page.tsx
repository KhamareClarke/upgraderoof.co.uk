import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { GoogleReviewsCarousel } from '@/components/GoogleReviewsCarousel';
import { VideoTestimonials } from '@/components/VideoTestimonials';
import { GallerySlider } from '@/components/GallerySlider';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { EnhancedContactSection } from '@/components/EnhancedContactSection';
import { SEOAccordion } from '@/components/SEOAccordion';
import { CheckCircle, Star, Award, Shield, Home as HomeIcon, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Upgrade Roofs | Expert Roofers Cheshire | 01270 897606',
  description: 'Professional roofers in Cheshire. 25+ years experience, CORC certified, £10M insured. Tile & flat roofs, repairs, guttering. Free quotes. Call 01270 897606.',
  keywords: 'roofers Cheshire, roofing company Cheshire, roof repairs Cheshire, flat roofing, tile roofing, emergency roofer, Sandbach roofer, Crewe roofer, Congleton roofer',
  openGraph: {
    title: 'Upgrade Roofs | Expert Roofers Cheshire',
    description: 'Professional roofers in Cheshire. 25+ years experience, CORC certified, £10M insured. Free quotes available.',
    url: 'https://www.upgraderoofs.co.uk',
    siteName: 'Upgrade Roofs',
    images: [
      {
        url: 'https://www.upgraderoofs.co.uk/images/6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Upgrade Roofs - Professional Roofers Cheshire',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upgrade Roofs | Expert Roofers Cheshire',
    description: 'Professional roofers in Cheshire. 25+ years experience. Free quotes.',
    images: ['https://www.upgraderoofs.co.uk/images/6.jpeg'],
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk',
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
      
      {/* Trust Badges Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Trusted & Approved
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognised by leading industry bodies and trusted by thousands of customers
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {/* MyApproved */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">MyApproved</p>
              <p className="text-xs text-gray-600 mt-1">Vetted & Verified</p>
            </div>
            
            {/* Google Reviews */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">Google Reviews</p>
              <p className="text-xs text-gray-600 mt-1">5 Star Rated</p>
            </div>
            
            {/* CORC */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">CORC</p>
              <p className="text-xs text-gray-600 mt-1">Approved Member</p>
            </div>
            
            {/* IBG */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">IBG</p>
              <p className="text-xs text-gray-600 mt-1">Insurance Backed Guarantee</p>
            </div>
            
            {/* IBG Protected */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">IBG Protected</p>
              <p className="text-xs text-gray-600 mt-1">10 Year Guarantee</p>
            </div>
            
            {/* Freefoam */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
                <HomeIcon className="w-8 h-8 text-cyan-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">Freefoam</p>
              <p className="text-xs text-gray-600 mt-1">Approved Installer</p>
            </div>
            
            {/* Marley */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                <Layers className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">Marley</p>
              <p className="text-xs text-gray-600 mt-1">Registered Installer</p>
            </div>
          </div>
        </div>
      </section>
      
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
      <SEOAccordion />
      <section id="contact">
        <EnhancedContactSection />
      </section>
    </>
  );
}
