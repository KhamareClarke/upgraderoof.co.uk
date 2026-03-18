import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QuoteForm } from '@/components/QuoteForm';
import { CheckCircle, Phone, MapPin, Shield, Award, Clock, Star, ArrowRight, Home, Layers, Flame, Droplets, Zap, Wrench } from 'lucide-react';

interface AreaFAQ {
  q: string;
  a: string;
}

interface AreaPageProps {
  town: string;
  intro: string;
  localContext: string;
  roofingChallenges: string;
  faqs: AreaFAQ[];
  nearbyAreas: { name: string; href: string }[];
}

export function AreaPageTemplate({ town, intro, localContext, roofingChallenges, faqs, nearbyAreas }: AreaPageProps) {
  const services = [
    { icon: Home, title: 'Tile & Slate Roofing', desc: `Expert tile and slate roof installation and repair across ${town}. Traditional and modern options.`, href: '/services/tile-slate-roofing' },
    { icon: Layers, title: 'Flat Roofing', desc: `EPDM rubber and GRP fibreglass flat roofing for ${town} properties. Up to 20-year guarantee.`, href: '/services/flat-roofing' },
    { icon: Flame, title: 'Chimney Repairs', desc: `Chimney repointing, lead flashing, and stack repairs for ${town} homes.`, href: '/services/chimney-repairs' },
    { icon: Droplets, title: 'Guttering & Fascias', desc: `uPVC guttering, fascias, and soffits. Full replacements and repairs in ${town}.`, href: '/services/gutters-fascias' },
    { icon: Wrench, title: 'Roof Repairs', desc: `Fast, reliable roof repairs for leaks, storm damage, and missing tiles in ${town}.`, href: '/roof-repairs' },
    { icon: Zap, title: 'Emergency Roofing', desc: `24/7 emergency call-outs to ${town}. Storm damage, leaks, and urgent make-safe work.`, href: '/emergency-roofing' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/7.jpeg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>{town}, Cheshire</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Roofers in <span className="text-brand-orange">{town}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteForm trigger={
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 h-14 text-base">
                  Get a Free Quote
                </Button>
              } />
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base" asChild>
                <a href="tel:01270897606"><Phone className="w-5 h-5 mr-2" />01270 897 606</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-brand-orange" /><span className="font-semibold">25+ Years</span></div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-brand-orange" /><span className="font-semibold">£10M Insured</span></div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-orange" /><span className="font-semibold">CORC Certified</span></div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-brand-orange" /><span className="font-semibold">5-Star Reviews</span></div>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Professional Roofing in <span className="text-brand-orange">{town}</span>
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>{localContext}</p>
              <p>{roofingChallenges}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Cross-Links */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
            <p>
              We handle everything from <Link href="/roof-repairs" className="text-brand-orange hover:underline font-medium">urgent roof repairs</Link> and 
              <Link href="/emergency-roofing" className="text-brand-orange hover:underline font-medium"> emergency roofing</Link> call-outs to 
              complete <Link href="/new-roofs" className="text-brand-orange hover:underline font-medium">new roof installations</Link> across {town}. 
              Based in Sandbach, our team can usually reach {town} the same day. See our <Link href="/roofers-sandbach" className="text-brand-orange hover:underline font-medium">Sandbach roofing page</Link> for 
              local case studies, or browse our full <Link href="/services" className="text-brand-orange hover:underline font-medium">range of services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
            Roofing Services in {town}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="text-brand-orange font-semibold text-sm flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Roofing Questions — {town}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="p-5 cursor-pointer font-semibold text-brand-navy hover:text-brand-orange transition-colors flex items-center justify-between">
                    {faq.q}
                    <span className="text-brand-orange ml-2 flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">Nearby Areas We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/roofers-sandbach" className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all text-brand-navy font-semibold hover:text-brand-orange">
              <MapPin className="w-4 h-4 text-brand-orange" />Sandbach
            </Link>
            {nearbyAreas.map((area, i) => (
              <Link key={i} href={area.href} className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-orange/50 hover:shadow-md transition-all text-brand-navy font-semibold hover:text-brand-orange">
                <MapPin className="w-4 h-4 text-brand-orange" />{area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Roofer in {town}?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote. We'll inspect your roof and provide a clear, written price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteForm trigger={
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-10 h-14 text-base">
                Get Your Free Quote
              </Button>
            } />
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 h-14 text-base" asChild>
              <a href="tel:01270897606"><Phone className="w-5 h-5 mr-2" />01270 897 606</a>
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-6">
            Based in Sandbach · Serving {town} & all of Cheshire · 24/7 Emergency: 07379 440 583
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
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a }
            }))
          })
        }}
      />
    </div>
  );
}
