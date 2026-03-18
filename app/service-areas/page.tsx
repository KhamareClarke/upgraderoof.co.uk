import type { Metadata } from 'next';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { QuoteForm } from '@/components/QuoteForm';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Roofing Service Areas Cheshire | Sandbach, Crewe, Congleton & More',
  description: 'Professional roofers serving Sandbach, Crewe, Middlewich, Congleton, Nantwich, Alsager & Holmes Chapel. 25+ years experience. CORC certified. Free quotes across Cheshire.',
  keywords: 'roofers Cheshire, roofing service areas, roofers Sandbach, roofers Crewe, roofers Congleton, roofers Middlewich, roofers Nantwich, roofers Alsager',
  openGraph: {
    title: 'Roofing Service Areas | Cheshire & Surrounding Towns',
    description: 'Professional roofing across Sandbach, Crewe, Middlewich, Congleton, Nantwich, Alsager & Holmes Chapel.',
    url: 'https://www.upgraderoofs.co.uk/service-areas',
    siteName: 'Upgrade Roofs',
    type: 'website',
  },
  alternates: { canonical: 'https://www.upgraderoofs.co.uk/service-areas' },
};

const serviceAreas = [
  {
    name: 'Sandbach',
    href: '/roofers-sandbach',
    description: 'Our home base. We cover all of Sandbach including Elworth, Wheelock, Sandbach Heath, Ettiley Heath, and Arclid.',
    postcode: 'CW11',
    responseTime: 'Same day',
    featured: true
  },
  {
    name: 'Crewe',
    href: '/roofers-crewe',
    description: 'Full roofing coverage across Crewe including Nantwich Road, Edleston, Leighton West, and Sydney.',
    postcode: 'CW1, CW2',
    responseTime: '30 mins',
  },
  {
    name: 'Middlewich',
    href: '/roofers-middlewich',
    description: 'Serving Middlewich town centre, Cledford, Kinderton, and the surrounding CW10 area.',
    postcode: 'CW10',
    responseTime: '20 mins',
  },
  {
    name: 'Congleton',
    href: '/roofers-congleton',
    description: 'Professional roofing across Congleton including Mossley, West Heath, Buglawton, and Astbury.',
    postcode: 'CW12',
    responseTime: '30 mins',
  },
  {
    name: 'Nantwich',
    href: '/roofers-nantwich',
    description: 'Expert roofing for Nantwich properties including Stapeley, Willaston, and the historic town centre.',
    postcode: 'CW5',
    responseTime: '35 mins',
  },
  {
    name: 'Alsager',
    href: '/roofers-alsager',
    description: 'Reliable roofing services across Alsager, Radway Green, and Oakhanger.',
    postcode: 'ST7',
    responseTime: '30 mins',
  },
  {
    name: 'Holmes Chapel',
    href: '/roofers-holmes-chapel',
    description: 'Quality roofing for Holmes Chapel village and surrounding rural properties.',
    postcode: 'CW4',
    responseTime: '20 mins',
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Based in Sandbach, Serving All of Cheshire</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Service Areas Across <span className="text-brand-orange">Cheshire</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Based in Sandbach, Upgrade Roofs provides professional roofing services to homes and businesses 
              throughout south and mid-Cheshire. Over 25 years of local experience, CORC certified, £10M insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteForm trigger={
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 h-14">
                  Get a Free Quote
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

      {/* Trust Strip */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-brand-orange" /><span className="font-semibold">25+ Years Experience</span></div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-brand-orange" /><span className="font-semibold">£10M Insured</span></div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-orange" /><span className="font-semibold">CORC Certified</span></div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-brand-orange" /><span className="font-semibold">24/7 Emergency Line</span></div>
          </div>
        </div>
      </section>

      {/* Map + Coverage Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76832.89194948935!2d-2.3679!3d53.1461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a5d28e86e4263%3A0x38c19e53b2954d45!2sSandbach!5e0!3m2!1sen!2suk!4v1699000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Upgrade Roofs service area centred on Sandbach, Cheshire"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Based in Sandbach, Covering Cheshire</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our office at 20 Crewe Road, Sandbach puts us within easy reach of every major town in 
                south and mid-Cheshire. Most locations are under 20 minutes from our base, meaning we can 
                respond quickly for inspections and emergencies alike.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <p className="text-gray-600"><strong className="text-brand-navy">20 Crewe Rd, Sandbach, CW11 4NE</strong> — centrally located for all of south Cheshire.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <p className="text-gray-600"><strong className="text-brand-navy">Same-day inspections</strong> available for most towns. Emergency response within 30 minutes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <p className="text-gray-600"><strong className="text-brand-navy">No call-out charges</strong> for quotes and inspections. Free written estimates on all work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-center">Towns & Areas We Serve</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Click any area to see our full range of local roofing services, pricing guidance, and FAQs for that town.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <Link key={i} href={area.href} className={`group bg-white rounded-2xl p-6 border hover:shadow-lg transition-all ${area.featured ? 'border-brand-orange ring-1 ring-brand-orange/30' : 'border-gray-200 hover:border-brand-orange/50'}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">{area.name}</h3>
                  {area.featured && <span className="px-2 py-1 bg-brand-orange text-white text-xs font-semibold rounded-full">Home Base</span>}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{area.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Postcode: <strong className="text-brand-navy">{area.postcode}</strong></span>
                  <span className="text-gray-500">Response: <strong className="text-brand-navy">{area.responseTime}</strong></span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-brand-orange font-semibold text-sm">
                  View {area.name} roofing services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure If We Cover Your Area?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We serve most of Cheshire and parts of Staffordshire. Give us a call and we'll confirm we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteForm trigger={
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 h-14">
                  Get Your Free Quote
                </Button>
              } />
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-14" asChild>
                <a href="tel:01270897606"><Phone className="w-5 h-5 mr-2" />01270 897 606</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
