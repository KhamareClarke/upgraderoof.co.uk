import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { QuoteForm } from '@/components/QuoteForm';
import { Phone, CheckCircle, Clock, Shield, Wrench, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ServiceAreaLinks } from '@/components/ServiceAreaLinks';

export const metadata: Metadata = {
  title: 'Roof Repairs Sandbach & Cheshire | Fast Response | 01270 897606',
  description: 'Expert roof repairs in Sandbach and Cheshire. Leaks, storm damage, missing tiles, ridge repairs. Same-day service available. 25+ years experience. Call 01270 897606.',
  keywords: 'roof repairs Sandbach, roof leak repair, storm damage roof, emergency roof repair Sandbach, tile replacement, ridge repairs Cheshire',
  openGraph: {
    title: 'Roof Repairs Sandbach & Cheshire | Fast Response',
    description: 'Expert roof repairs. Leaks, storm damage, missing tiles. Same-day service available.',
    url: 'https://www.upgraderoofs.co.uk/roof-repairs',
    siteName: 'Upgrade Roofs',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/roof-repairs',
  },
};

export default function RoofRepairsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/90">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <Wrench className="w-4 h-4 text-brand-orange" />
              <span>Fast Response Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Roof Repairs <span className="text-brand-orange">Sandbach</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Fast, reliable roof repairs across Sandbach and Cheshire. From minor leaks to storm damage, we fix it right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteForm trigger={
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 h-14">
                  Get Free Quote
                </Button>
              } />
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-14" asChild>
                <a href="tel:01270897606">
                  <Phone className="w-5 h-5 mr-2" />
                  01270 897 606
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Common Roof Repairs We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Sandbach, we handle all types of roof repairs across CW11 and surrounding Cheshire areas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Leak Repairs', desc: 'Fast leak detection and repair. We find the source and fix it permanently.' },
              { title: 'Missing Tiles', desc: 'Replace missing, cracked, or slipped tiles. Exact colour matching available.' },
              { title: 'Storm Damage', desc: 'Emergency repairs after high winds, fallen trees, or severe weather.' },
              { title: 'Ridge Repairs', desc: 'Repointing and rebuilding ridge tiles. Common issue on older Sandbach properties.' },
              { title: 'Valley Repairs', desc: 'Lead valley repairs and replacements. Critical for preventing leaks.' },
              { title: 'Flashing Repairs', desc: 'Chimney, wall, and dormer flashing repairs using lead or GRP.' },
            ].map((repair, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <CheckCircle className="w-8 h-8 text-brand-orange mb-3" />
                <h3 className="text-xl font-bold text-brand-navy mb-2">{repair.title}</h3>
                <p className="text-gray-600 text-sm">{repair.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
                Why Choose Upgrade Roofs for Repairs?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: 'Same-Day Service', desc: 'Based on Crewe Road, Sandbach - we can usually reach you within 30 minutes for urgent repairs.' },
                  { icon: Shield, title: '10-Year Guarantee', desc: 'All repairs backed by our comprehensive workmanship guarantee.' },
                  { icon: CheckCircle, title: 'No Hidden Costs', desc: 'Fixed-price quotes. No surprises, no call-out fees.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/roofers-sandbach" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
                  <MapPin className="w-4 h-4" />
                  More about our Sandbach roofing services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Get a Free Repair Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaLinks serviceName="Roof Repairs" />

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Roof Repair in Sandbach?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Call us now for same-day service across CW11 and surrounding areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-10 h-14" asChild>
              <a href="tel:01270897606">
                <Phone className="w-5 h-5 mr-2" />
                Call 01270 897 606
              </a>
            </Button>
            <QuoteForm trigger={
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 h-14">
                Get Free Quote
              </Button>
            } />
          </div>
        </div>
      </section>
    </div>
  );
}
