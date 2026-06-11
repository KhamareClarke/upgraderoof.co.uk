'use client';

import { trackWhatsAppClick } from '@/lib/tracking';

interface TrackedWhatsAppLinkProps {
  href: string;
  placement: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedWhatsAppLink({ href, placement, children, className, target, rel }: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => trackWhatsAppClick(placement)}
    >
      {children}
    </a>
  );
}
