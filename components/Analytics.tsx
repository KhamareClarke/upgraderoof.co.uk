'use client';

/**
 * Analytics — TAG INITIALIZATION ONLY
 *
 * This component loads third-party tracking scripts (GTM) and sets up
 * Google Consent Mode V2. It does NOT contain any event helper functions —
 * all event tracking lives in `lib/tracking.ts`.
 *
 * It is assumed that all other marketing tags (GA4, Google Ads, Meta Pixel)
 * are configured and loaded via the Google Tag Manager container.
 *
 * Env vars with hardcoded fallbacks below are the real production IDs.
 * They ensure tracking works even if Vercel env vars are not yet configured.
 * Once env vars are set in the hosting platform, these fallbacks are ignored.
 */

import React from 'react';
import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-MKPC2G22';

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
      {GTM_ID && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}
    </>
  );
}
