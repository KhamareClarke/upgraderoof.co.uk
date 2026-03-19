import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { VideoTestimonials } from '@/components/VideoTestimonials';
import { CTABanner } from '@/components/CTABanner';
import { ReviewsBlock, GalleryBlock, FAQBlock, ContactBlock, SEOBlock } from '@/components/HomepageSections';
import { CheckCircle, Star, Award, Shield, Home as HomeIcon, Layers, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Upgrade Roofs | Roofers Sandbach & Cheshire | 01270 897606',
  description: 'Trusted roofers in Sandbach & Cheshire. 25+ years experience, CORC certified, £10M insured. Roof repairs, new roofs, flat roofing, guttering. Free quotes. Call 01270 897606.',
  keywords: 'roofers Sandbach, roofers Cheshire, roof repairs Sandbach, roofing company Cheshire, flat roofing Sandbach, emergency roofer Sandbach, tile roofing, Crewe roofer, Congleton roofer',
  openGraph: {
    title: 'Upgrade Roofs | Roofers Sandbach & Cheshire',
    description: 'Trusted roofers in Sandbach & Cheshire. 25+ years experience, CORC certified, £10M insured. Free quotes available.',
    url: 'https://www.upgraderoofs.co.uk',
    siteName: 'Upgrade Roofs',
    images: [
      {
        url: 'https://www.upgraderoofs.co.uk/images/6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Upgrade Roofs - Trusted Roofers in Sandbach & Cheshire',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upgrade Roofs | Roofers Sandbach & Cheshire',
    description: 'Trusted roofers in Sandbach & Cheshire. 25+ years experience. Free quotes.',
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
        <ReviewsBlock />
        <VideoTestimonials />
      </div>
      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <section id="gallery">
          <GalleryBlock />
        </section>
        <FAQBlock />
      </div>
      <CTABanner />

      {/* Local Service Areas — Internal Linking Hub */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Roofing Services Across <span className="text-brand-orange">Cheshire</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Based in Sandbach, we serve homeowners and businesses throughout south and mid-Cheshire.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-orange/10 border-2 border-brand-orange/30 rounded-xl">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-navy">
                Looking for{' '}
                <Link href="/roofers-sandbach" className="text-brand-orange hover:underline font-bold">
                  roofers in Sandbach
                </Link>
                ? We're based on Crewe Road, CW11 4NE
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Roofers Sandbach', href: '/roofers-sandbach' },
              { name: 'Roofers Crewe', href: '/roofers-crewe' },
              { name: 'Roofers Middlewich', href: '/roofers-middlewich' },
              { name: 'Roofers Congleton', href: '/roofers-congleton' },
              { name: 'Roofers Nantwich', href: '/roofers-nantwich' },
              { name: 'Roofers Alsager', href: '/roofers-alsager' },
              { name: 'Roofers Holmes Chapel', href: '/roofers-holmes-chapel' },
              { name: 'All Service Areas', href: '/service-areas' },
            ].map((area, i) => (
              <Link key={i} href={area.href} className="group flex items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
              View all service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <SEOBlock />
      <section id="contact">
        <ContactBlock />
      </section>
    </>
  );
}
