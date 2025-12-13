'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Video, Shield, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { QuoteForm } from '@/components/QuoteForm';
import Link from 'next/link';

const slides = [
  {
    image: '/images/6.jpeg',
    gradient: 'from-slate-900/85 via-slate-800/60 to-slate-700/30',
    title: 'Premium Roofing',
    highlight: 'Excellence',
    subtitle: 'For Your Home',
    description: '25+ years of craftsmanship. Premium materials. Guaranteed results. Your roof deserves the best.',
  },
  {
    image: '/images/7.jpeg',
    gradient: 'from-slate-900/85 via-slate-800/60 to-slate-700/30',
    title: 'Expert Tile &',
    highlight: 'Slate Roofing',
    subtitle: 'Traditional Craftsmanship',
    description: 'Authentic materials. Timeless beauty. Weather-resistant durability that stands the test of time.',
  },
  {
    image: '/images/3.jpeg',
    gradient: 'from-slate-900/85 via-slate-800/60 to-slate-700/30',
    title: 'Modern Flat',
    highlight: 'Roof Systems',
    subtitle: 'Innovation Meets Quality',
    description: 'Advanced waterproofing. Energy efficient solutions. Perfect for contemporary extensions and conversions.',
  },
  {
    image: '/images/1.jpeg',
    gradient: 'from-slate-900/85 via-slate-800/60 to-slate-700/30',
    title: 'Professional',
    highlight: 'Chimney Work',
    subtitle: 'Safety & Restoration',
    description: 'Expert repairs. Complete rebuilds. Maintaining the character and safety of your property.',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextSlideIndex].image;
  }, [currentSlide]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[55vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-start sm:items-center justify-center overflow-hidden pt-12 sm:pt-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10 pt-2 pb-8 sm:pt-4 sm:pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide fade-in-up">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-orange" />
            <span className="whitespace-nowrap">Award-Winning Roofing Company 2024</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-5 sm:mb-6 md:mb-8 text-balance leading-[1.1] tracking-tight fade-in-up px-4 sm:px-0 drop-shadow-2xl">
            {slides[currentSlide].title}{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-orange">
                {slides[currentSlide].highlight}
              </span>
            </span>
            <br />
            {slides[currentSlide].subtitle}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide slide-in-right px-4 sm:px-0 drop-shadow-lg">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12 scale-in justify-center max-w-md sm:max-w-none mx-auto sm:mx-0">
            <QuoteForm trigger={
              <Button
                size="lg"
                className="group relative bg-brand-orange hover:bg-brand-orange/95 text-white font-semibold px-8 sm:px-10 md:px-12 text-sm sm:text-base tracking-wide h-12 sm:h-14 md:h-16 overflow-hidden transition-all duration-500 hover:scale-[1.02] w-full sm:w-auto rounded-lg shadow-lg active:scale-95"
              >
                <span className="relative z-10">Get Free Quote</span>
              </Button>
            } />
            <Button
              size="lg"
              variant="outline"
              className="group border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-semibold px-8 sm:px-10 md:px-12 text-sm sm:text-base tracking-wide h-12 sm:h-14 md:h-16 backdrop-blur-sm bg-white/5 transition-all duration-500 hover:scale-[1.02] w-full sm:w-auto rounded-lg active:scale-95"
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Video className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span>Drone Inspection</span>
              </Link>
            </Button>
          </div>

          <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-8 fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Shield, label: 'Fully Insured', value: '£10M Cover' },
              { icon: Award, label: 'Accredited', value: '5 Star Rated' },
              { icon: Clock, label: 'Fast Response', value: '24/7 Emergency' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand-orange/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 sm:text-left">
                  <p className="text-white/80 text-xs sm:text-sm tracking-wide">{stat.label}</p>
                  <p className="text-white font-semibold text-sm sm:text-base mt-0.5">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Progress indicators hidden on all breakpoints as requested */}
      <div className="hidden" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}