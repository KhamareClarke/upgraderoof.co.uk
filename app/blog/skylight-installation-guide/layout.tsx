import type { Metadata } from 'next';
import { BlogArticleSchema } from '@/components/BlogArticleSchema';

export const metadata: Metadata = {
  title: 'Skylight Installation Guide Cheshire | Velux & Sun Tunnels | Upgrade Roofs',
  description: 'Complete guide to skylight installation in Cheshire. Velux, sun tunnels, flat roof skylights. Types, costs, benefits. Professional installation across Cheshire.',
  keywords: 'skylight installation Cheshire, Velux installer, sun tunnel, roof window, flat roof skylight, natural light',
  openGraph: {
    title: 'Skylight Installation Guide: Transform Your Home',
    description: 'Everything about adding skylights to your Cheshire home.',
    type: 'article',
    url: 'https://www.upgraderoofs.co.uk/blog/skylight-installation-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylight Installation Guide | Upgrade Roofs',
    description: 'Complete skylight guide for Cheshire homeowners.',
  },
  alternates: {
    canonical: 'https://www.upgraderoofs.co.uk/blog/skylight-installation-guide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SkylightInstallationGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogArticleSchema
        title="Skylight Installation Guide: Transform Your Cheshire Home"
        description="Complete guide to skylight installation. Velux, sun tunnels, flat roof skylights. Types, costs, benefits."
        url="https://www.upgraderoofs.co.uk/blog/skylight-installation-guide"
        datePublished="2026-02-20"
        image="/images/10.jpeg"
      />
      {children}
    </>
  );
}
