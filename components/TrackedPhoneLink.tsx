'use client';

import { trackPhoneClick } from '@/lib/tracking';

interface TrackedPhoneLinkProps {
  href: string;
  placement: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedPhoneLink({ href, placement, children, className }: TrackedPhoneLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackPhoneClick(placement)}
    >
      {children}
    </a>
  );
}
