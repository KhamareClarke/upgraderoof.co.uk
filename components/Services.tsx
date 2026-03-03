'use client';

import { Button } from '@/components/ui/button';
import { Chrome as Home, Layers, Flame, Droplets, Sun, Square, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  const services = [
    {
      title: 'Tile & Slate Roofs',
      description: 'Expert installation and repair of traditional tile and slate roofing. Weather resistant, durable, and aesthetically pleasing for your home.',
      icon: Home,
      image: '/images/6.jpeg',
      gradient: 'from-blue-500/20 to-purple-500/20',
      href: '/services/tile-slate-roofing',
    },
    {
      title: 'Flat Roofs',
      description: 'Modern flat roofing solutions with superior waterproofing. Perfect for extensions, garages, and commercial properties.',
      icon: Layers,
      image: '/images/3.jpeg',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      href: '/services/flat-roofing',
    },
    {
      title: 'Chimney Repairs',
      description: 'Professional chimney maintenance and repair services. From repointing to full rebuilds, we keep your chimney safe and functional.',
      icon: Flame,
      image: '/images/1.jpeg',
      gradient: 'from-orange-500/20 to-red-500/20',
      href: '/services/chimney-repairs',
    },
    {
      title: 'Gutters & Fascias',
      description: 'Complete gutter and fascia installation, repair, and maintenance. Protect your property from water damage with quality materials.',
      icon: Droplets,
      image: '/images/2.jpeg',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      href: '/services/gutters-fascias',
    },
    {
      title: 'Skylights & Roof Windows',
      description: 'Bring natural light into your home with professionally installed skylights and roof windows. Expert fitting and weatherproofing guaranteed.',
      icon: Sun,
      image: '/images/10.jpeg',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      href: '/services/skylights-roof-windows',
    },
    {
      title: 'Cladding Installations',
      description: 'Transform your property with modern cladding solutions. Weather-resistant materials installed to the highest standards.',
      icon: Square,
      image: '/images/4.jpeg',
      gradient: 'from-slate-500/20 to-gray-500/20',
      href: '/services/cladding',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-blue-50 via-blue-100/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="container-custom relative">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 sm:mb-8 rounded-full bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-xs sm:text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>Premium Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy mb-5 sm:mb-6 px-2 tracking-tight">
            Our Roofing <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600/80 max-w-3xl mx-auto leading-relaxed px-4">
            From minor repairs to complete roof replacements, we provide comprehensive roofing solutions
            tailored to your needs with cutting-edge techniques and premium materials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200/60 hover:border-gray-300 transition-all duration-700 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />

                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 md:p-8">
                  <p className="text-lg sm:text-xl text-gray-600/80 leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                    {service.description}
                  </p>

                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="group/btn w-full justify-between text-brand-navy/80 hover:text-brand-orange hover:bg-transparent font-semibold transition-all duration-500 text-sm tracking-wide"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-500" />
                    </Button>
                  </Link>
                </div>

                <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 text-center px-2">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-7 md:p-8 rounded-2xl bg-brand-navy text-white w-full sm:w-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-brand-orange" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-white/70 text-sm tracking-wide mb-1">Need a custom solution?</p>
              <p className="text-lg sm:text-xl font-bold tracking-tight">We've got you covered!</p>
            </div>
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/95 text-white font-semibold w-full sm:w-auto sm:ml-4 text-sm sm:text-base tracking-wide transition-all duration-500"
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}