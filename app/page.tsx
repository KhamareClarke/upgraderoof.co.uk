import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { TrustBadges } from '@/components/TrustBadges';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { GoogleReviewsCarousel } from '@/components/GoogleReviewsCarousel';
import { VideoTestimonials } from '@/components/VideoTestimonials';
import { Gallery } from '@/components/Gallery';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { EnhancedContactSection } from '@/components/EnhancedContactSection';

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <TrustStrip />
        <TrustBadges />
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
          <Gallery />
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
