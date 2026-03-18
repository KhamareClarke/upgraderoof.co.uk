import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QuoteForm } from '@/components/QuoteForm';
import { CheckCircle, Phone, MapPin, Shield, Award, Clock, Star, ArrowRight, Home, Layers, Flame, Droplets, Zap, Wrench } from 'lucide-react';

export default function RoofersSandbachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/6.jpeg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Sandbach, Cheshire</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Trusted Roofers in <span className="text-brand-orange">Sandbach</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Upgrade Roofs has been delivering expert roofing services to Sandbach homeowners for over 25 years. 
              From emergency repairs to complete re-roofs, we're the local roofers Sandbach trusts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteForm trigger={
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 h-14 text-base">
                  Get a Free Quote
                </Button>
              } />
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base" asChild>
                <a href="tel:01270897606">
                  <Phone className="w-5 h-5 mr-2" />
                  01270 897 606
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold">£10M Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold">CORC Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold">5-Star Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Why Sandbach Trusts Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Why Sandbach Homeowners Choose <span className="text-brand-orange">Upgrade Roofs</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Based on Crewe Road in the heart of Sandbach, Upgrade Roofs is a family-run roofing company 
                with deep roots in the local community. We've completed hundreds of roofing projects across 
                Sandbach — from period properties on the High Street to modern estates around Elworth and 
                Wheelock.
              </p>
              <p>
                We hold full CORC (Confederation of Roofing Contractors) certification, carry £10 million 
                public liability insurance, and provide a 10-year workmanship guarantee on every job. 
                Whether you need a single tile replaced or a full roof strip and re-tile, we deliver the 
                same standard of care.
              </p>
              <p>
                As Sandbach locals ourselves, we understand the specific roofing challenges in this area — 
                from the exposed conditions along the A534 corridor to the older rooflines around Sandbach 
                Heath and the conservation considerations near the town centre's listed buildings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Sandbach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Roofing Services We Offer in Sandbach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every roofing service you need, delivered by experienced local tradesmen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Home, title: 'New Roofs & Re-Roofing', desc: 'Complete roof replacements using premium tiles, slates, and modern materials. Sandbach properties of all sizes.', href: '/new-roofs' },
              { icon: Wrench, title: 'Roof Repairs', desc: 'Fast, reliable repairs for leaks, storm damage, missing tiles, and ridge work across Sandbach.', href: '/roof-repairs' },
              { icon: Layers, title: 'Flat Roofing', desc: 'EPDM rubber and GRP fibreglass flat roofs for garages, extensions, and dormer roofs. 20-year guarantee.', href: '/services/flat-roofing' },
              { icon: Flame, title: 'Chimney Repairs', desc: 'Repointing, lead flashing, chimney stack repairs, and cowl fitting. Common need on older Sandbach properties.', href: '/services/chimney-repairs' },
              { icon: Droplets, title: 'Guttering & Fascias', desc: 'uPVC guttering, fascias, soffits, and downpipes. Repairs, cleaning, and full replacements.', href: '/services/gutters-fascias' },
              { icon: Zap, title: 'Emergency Roofing', desc: '24/7 emergency call-outs across Sandbach. Storm damage, sudden leaks, and urgent make-safe work.', href: '/emergency-roofing' },
            ].map((service, i) => (
              <Link key={i} href={service.href} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                <span className="text-brand-orange font-semibold text-sm flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Proof / Evidence Block */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
                Roofing Experts Who Know <span className="text-brand-orange">Sandbach</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Based in Sandbach</h3>
                    <p className="text-gray-600 text-sm">Our office is on Crewe Road. We live and work in this community, and our reputation here matters to us.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Same-Day Response</h3>
                    <p className="text-gray-600 text-sm">Being local means we can often inspect your roof within hours of your call — not days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Insurance-Backed Guarantees</h3>
                    <p className="text-gray-600 text-sm">Every job comes with a 10-year workmanship guarantee, backed by our IBG protection scheme.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Proven Track Record</h3>
                    <p className="text-gray-600 text-sm">5-star Google reviews from Sandbach customers. We're rated on MyApproved and registered with CORC.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Sandbach Roofing at a Glance</h3>
              <div className="space-y-5">
                {[
                  { label: 'Years Serving Sandbach', value: '25+' },
                  { label: 'Local Projects Completed', value: '500+' },
                  { label: 'Public Liability Cover', value: '£10M' },
                  { label: 'Workmanship Guarantee', value: '10 Years' },
                  { label: 'Google Review Rating', value: '5.0 Stars' },
                  { label: 'Emergency Response', value: 'Same Day' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                    <span className="text-white/80">{stat.label}</span>
                    <span className="font-bold text-brand-orange">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandbach-Specific FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-8 text-center">
              Common Roofing Questions in Sandbach
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How much does a new roof cost in Sandbach?',
                  a: 'A typical terraced house re-roof in Sandbach costs between £5,000 and £8,000. Semi-detached properties usually range from £6,500 to £10,000, and larger detached homes from £8,000 to £15,000+. We provide free, written quotes with no hidden costs.'
                },
                {
                  q: 'Do you offer emergency roof repairs in Sandbach?',
                  a: 'Yes. We provide 24/7 emergency roofing across Sandbach and surrounding areas. As we\'re based on Crewe Road, we can usually reach any Sandbach address within 30 minutes for urgent leaks, storm damage, or make-safe work. Call 07379 440583 for emergencies.'
                },
                {
                  q: 'What areas of Sandbach do you cover?',
                  a: 'We cover all of Sandbach including the town centre, Elworth, Wheelock, Sandbach Heath, Ettiley Heath, Arclid, and all surrounding villages. We also serve Middlewich, Crewe, Congleton, and the wider Cheshire area.'
                },
                {
                  q: 'Are you a registered roofing contractor?',
                  a: 'Yes. We are CORC (Confederation of Roofing Contractors) certified, Freefoam approved installers, and Marley registered installers. We carry £10M public liability insurance and provide insurance-backed guarantees on all work.'
                },
                {
                  q: 'How long does a roof replacement take in Sandbach?',
                  a: 'Most residential roof replacements take 3 to 7 working days depending on property size and weather. We schedule work to minimise disruption, and all debris is removed daily. We provide a clear timeline before starting.'
                },
                {
                  q: 'Do you repair flat roofs in Sandbach?',
                  a: 'Yes. We specialise in EPDM rubber and GRP fibreglass flat roofing — ideal for garages, extensions, and dormer roofs common in Sandbach. We offer up to 20-year waterproof guarantees on flat roof installations.'
                },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="p-5 cursor-pointer font-semibold text-brand-navy hover:text-brand-orange transition-colors flex items-center justify-between">
                    {faq.q}
                    <span className="text-brand-orange ml-2 flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve from Sandbach */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-navy mb-4 text-center">
            We Also Serve These Nearby Areas
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Based in Sandbach, we provide the same professional roofing service to neighbouring towns across Cheshire.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Crewe', href: '/roofers-crewe' },
              { name: 'Middlewich', href: '/roofers-middlewich' },
              { name: 'Congleton', href: '/roofers-congleton' },
              { name: 'Nantwich', href: '/roofers-nantwich' },
              { name: 'Alsager', href: '/roofers-alsager' },
              { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
            ].map((area, i) => (
              <Link key={i} href={area.href} className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all text-brand-navy font-semibold hover:text-brand-orange">
                <MapPin className="w-4 h-4 text-brand-orange" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need a Roofer in Sandbach?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote from Sandbach's most trusted roofing company. 
            We'll inspect your roof, explain your options clearly, and give you a fair, written price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteForm trigger={
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-10 h-14 text-base">
                Get Your Free Quote
              </Button>
            } />
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 h-14 text-base" asChild>
              <a href="tel:01270897606">
                <Phone className="w-5 h-5 mr-2" />
                Call 01270 897 606
              </a>
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-6">
            20 Crewe Rd, Sandbach, CW11 4NE · Mon–Fri 8am–6pm, Sat 9am–4pm · 24/7 Emergency Line: 07379 440 583
          </p>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does a new roof cost in Sandbach?',
                acceptedAnswer: { '@type': 'Answer', text: 'A typical terraced house re-roof in Sandbach costs between £5,000 and £8,000. Semi-detached properties usually range from £6,500 to £10,000, and larger detached homes from £8,000 to £15,000+. We provide free, written quotes with no hidden costs.' }
              },
              {
                '@type': 'Question',
                name: 'Do you offer emergency roof repairs in Sandbach?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide 24/7 emergency roofing across Sandbach and surrounding areas. As we are based on Crewe Road, we can usually reach any Sandbach address within 30 minutes for urgent leaks, storm damage, or make-safe work. Call 07379 440583 for emergencies.' }
              },
              {
                '@type': 'Question',
                name: 'What areas of Sandbach do you cover?',
                acceptedAnswer: { '@type': 'Answer', text: 'We cover all of Sandbach including the town centre, Elworth, Wheelock, Sandbach Heath, Ettiley Heath, Arclid, and all surrounding villages. We also serve Middlewich, Crewe, Congleton, and the wider Cheshire area.' }
              },
              {
                '@type': 'Question',
                name: 'Are you a registered roofing contractor?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. We are CORC (Confederation of Roofing Contractors) certified, Freefoam approved installers, and Marley registered installers. We carry £10M public liability insurance and provide insurance-backed guarantees on all work.' }
              },
              {
                '@type': 'Question',
                name: 'How long does a roof replacement take in Sandbach?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most residential roof replacements take 3 to 7 working days depending on property size and weather. We schedule work to minimise disruption, and all debris is removed daily.' }
              },
              {
                '@type': 'Question',
                name: 'Do you repair flat roofs in Sandbach?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. We specialise in EPDM rubber and GRP fibreglass flat roofing — ideal for garages, extensions, and dormer roofs common in Sandbach. We offer up to 20-year waterproof guarantees on flat roof installations.' }
              },
            ]
          })
        }}
      />
    </div>
  );
}
