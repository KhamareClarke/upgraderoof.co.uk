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
import { CheckCircle, Star, Award, Shield, Home as HomeIcon, Layers, Droplets, Zap, Wrench } from 'lucide-react';

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
      
      {/* SEO Content Section - Redesigned */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-brand-orange/10 rounded-full mb-4">
              <span className="text-brand-orange font-semibold text-sm">25+ Years of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Professional Roofing Services in <span className="text-brand-orange">Cheshire</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upgrade Roofing Solutions is Cheshire's trusted roofing company with over 25 years of experience. We provide expert roofing services across Sandbach, Crewe, Congleton, Middlewich, Nantwich, Alsager, and throughout Cheshire and Staffordshire.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Expert Contractors Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">Expert Roofing Contractors</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As CORC (Confederation of Roofing Contractors) certified professionals, we deliver the highest quality roofing workmanship. Our team of skilled roofers specializes in tile and slate roofing, flat roof installations, chimney repairs, guttering, fascias, and emergency roof repairs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We carry £10 million public liability insurance and are fully qualified to handle all types of residential and commercial roofing projects. From minor roof repairs to complete roof replacements, we provide reliable, professional service every time.
              </p>
            </div>
            
            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold">Why Choose Upgrade Roofing?</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">25+ Years Experience</strong> - Thousands of successful roofing projects completed across Cheshire</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">CORC Certified</strong> - Fully qualified and certified roofing contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">£10M Insured</strong> - Complete peace of mind with comprehensive insurance coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Free Quotes</strong> - No-obligation quotes with transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">24/7 Emergency Service</strong> - Fast response for urgent roof repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Local Roofers</strong> - Based in Sandbach, serving all of Cheshire</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-brand-navy mb-4">Our Roofing Services in Cheshire</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of roofing services to homeowners and businesses throughout Cheshire. Whether you need a new roof installation, roof repairs, or routine maintenance, our experienced team delivers exceptional results.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-lg">Tile & Slate Roofing</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Traditional and modern tile roofing, Welsh slate, concrete tiles, and clay tiles. Expert installation and repairs.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-lg">Flat Roofing</h4>
                <p className="text-gray-600 text-sm leading-relaxed">EPDM rubber roofing, GRP fibreglass roofing, and felt roofing systems. Waterproof guarantees up to 20 years.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-lg">Chimney Repairs</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Chimney repointing, rebuilds, lead flashing, chimney pots, and stack repairs by experienced craftsmen.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-lg">Guttering & Fascias</h4>
                <p className="text-gray-600 text-sm leading-relaxed">UPVC guttering, fascias, soffits, and downpipes. Repairs, cleaning, and full replacements available.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-lg">Emergency Repairs</h4>
                <p className="text-gray-600 text-sm leading-relaxed">24/7 emergency roofing service for storm damage, leaks, and urgent repairs across Cheshire.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-lg">Roof Maintenance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Regular inspections, moss removal, gutter cleaning, and preventative maintenance to extend roof life.</p>
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
