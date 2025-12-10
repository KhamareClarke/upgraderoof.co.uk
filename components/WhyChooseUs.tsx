import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { QuoteForm } from '@/components/QuoteForm';

export function WhyChooseUs() {
  const benefits = [
    'Realistic pricing with no hidden costs',
    'Highly professional and courteous team',
    'Over 25 years of industry experience',
    'All work fully guaranteed',
    'Direct contact with your dedicated roofer',
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-gray-100/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
            <img
              src="/images/2.jpeg"
              alt="Professional roofing team at work"
              loading="lazy"
              className="w-full h-full object-cover scale-125"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-navy mb-5 sm:mb-6 tracking-tight leading-tight">
              Why Choose Upgrade Roofing Solutions?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600/80 mb-6 sm:mb-8 leading-relaxed">
              We pride ourselves on delivering exceptional roofing services across Cheshire and the North West.
              Our commitment to quality, transparency, and customer satisfaction sets us apart.
            </p>

            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-brand-orange rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-xl sm:text-2xl text-gray-700/90">{benefit}</p>
                </div>
              ))}
            </div>

            <QuoteForm trigger={
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/95 text-white font-semibold px-8 sm:px-10 text-sm sm:text-base tracking-wide w-full sm:w-auto transition-all duration-500"
              >
                Book Your Free Quote
              </Button>
            } />
          </div>
        </div>
      </div>
    </section>
  );
}