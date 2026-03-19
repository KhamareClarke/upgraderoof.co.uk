'use client';

import React from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function Analytics() {
  return (
    <>
      {/* Google Consent Mode V2 — MUST fire synchronously before any tags */}
      <Script id="google-consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500
          });

          gtag('set', 'url_passthrough', true);
          gtag('set', 'ads_data_redaction', true);
        `}
      </Script>

      {/* Google Tag Manager — loads after consent defaults are set */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MKPC2G22');
        `}
      </Script>

      {/* GA4 + Google Ads via gtag.js — afterInteractive so consent signals are ready */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7V452FMYFY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7V452FMYFY', { send_page_view: true });
          gtag('config', 'AW-17763560213');
        `}
      </Script>

      {/* Facebook Pixel — lazy load, non-critical */}
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'FB_PIXEL_ID'}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}

// Event tracking utilities
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      ...parameters,
    });
  }
};

export const trackConversion = (conversionType: 'quote_request' | 'phone_call' | 'contact_form', value?: number) => {
  if (typeof window !== 'undefined') {
    // Google Analytics conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID,
        event_category: 'conversion',
        event_label: conversionType,
        value: value || 0,
        currency: 'GBP',
      });
    }

    // Facebook Pixel conversion
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Lead', {
        content_category: conversionType,
        value: value || 0,
        currency: 'GBP',
      });
    }
  }
};

export const trackPhoneCall = () => {
  trackConversion('phone_call');
  trackEvent('phone_call_clicked', {
    event_category: 'contact',
    event_label: 'phone_number_click',
  });
};

export const trackQuoteRequest = () => {
  trackConversion('quote_request');
  trackEvent('quote_form_submitted', {
    event_category: 'lead_generation',
    event_label: 'quote_request_form',
  });
};

export const trackContactForm = () => {
  trackConversion('contact_form');
  trackEvent('contact_form_submitted', {
    event_category: 'lead_generation',
    event_label: 'contact_form',
  });
};
