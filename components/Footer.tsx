import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: '🎯 Special Offer', href: '/special-offer' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Tile & Slate Roofs', href: '/services/tile-slate-roofing' },
    { name: 'Flat Roofs', href: '/services/flat-roofing' },
    { name: 'Chimney Repairs', href: '/services/chimney-repairs' },
    { name: 'Gutters & Fascias', href: '/services/gutters-fascias' },
    { name: 'Skylights & Windows', href: '/services/skylights-roof-windows' },
    { name: 'Cladding', href: '/services/cladding' },
  ];

  const legalLinks = [
    { name: 'Sitemap', href: '/sitemap-page' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="container-custom py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-16">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/upgrade_logo.jpeg"
                alt="Upgrade Roofing Solutions"
                width={96}
                height={96}
                className="w-24 h-24 object-contain"
              />
            </Link>
            <p className="text-white/70 leading-relaxed tracking-wide text-sm sm:text-base">
              Upgrade Roofing Solutions offers expert roof repair, replacement, and installation across
              Cheshire and the North West. Accredited, insured, and trusted.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-orange transition-colors duration-300 text-sm tracking-wide"
                    scroll={true}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-orange transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70 text-sm tracking-wide">1 Hutchins Close</p>
                  <p className="text-white/70 text-sm tracking-wide">Middlewich, United Kingdom</p>
                  <p className="text-white/70 text-sm tracking-wide">CW10 0EX</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div className="space-y-1.5">
                  <a
                    href="tel:01270897606"
                    className="block text-white/70 hover:text-brand-orange transition-colors duration-300 text-sm tracking-wide"
                  >
                    01270 897 606
                  </a>
                  <a
                    href="tel:07379440583"
                    className="block text-white/70 hover:text-brand-orange transition-colors duration-300 text-sm tracking-wide"
                  >
                    07379 440 583
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:upgradehomeimp@yahoo.com"
                  className="text-white/70 hover:text-brand-orange transition-colors duration-300 text-sm tracking-wide"
                >
                  upgradehomeimp@yahoo.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70 text-sm tracking-wide">Monday - Friday: 8am - 6pm</p>
                  <p className="text-white/70 text-sm tracking-wide">Saturday: 9am - 4pm</p>
                  <p className="text-white/70 text-sm tracking-wide">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-white/50 text-sm tracking-wide">
                © {new Date().getFullYear()} Elite Roofing Cheshire. All rights reserved.
              </p>
              <div className="flex items-center gap-5 text-sm">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/50 hover:text-brand-orange transition-colors duration-300 tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
              <span className="text-white/50 text-sm tracking-wide">We accept:</span>
              <div className="flex items-center gap-4">
                {/* VISA Logo */}
                <img 
                  src="/images/visa.svg" 
                  alt="VISA" 
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* Mastercard Logo */}
                <img 
                  src="/images/mastercard.svg" 
                  alt="Mastercard" 
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* PayPal Logo */}
                <img 
                  src="/images/paypal.svg" 
                  alt="PayPal" 
                  className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}