/**
 * ---------------------------------------------------------------
 * CENTRALIZED EVENT TRACKING
 *
 * Single source of truth for all conversion and engagement events.
 * Fires to GA4, Google Ads, and Meta Pixel where appropriate.
 *
 * Event names (consistent across all platforms):
 *   - quote_request        → successful quote form submission
 *   - contact_form_submit  → successful contact form submission
 *   - phone_click          → any tel: link click
 *   - whatsapp_click       → any WhatsApp link/button click
 * ---------------------------------------------------------------
 */

// --------------- env var helpers ---------------

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';
const GA_CONVERSION_SEND_TO = process.env.NEXT_PUBLIC_GA_CONVERSION_SEND_TO || '';
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

/** Log tracking issues once in development only */
function warnMissing(name: string) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[tracking] env var ${name} is not set — skipping related events`);
  }
}

// Run validation once on module load (client-side only)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  if (!GA_ID) warnMissing('NEXT_PUBLIC_GA_ID');
  if (!GOOGLE_ADS_ID) warnMissing('NEXT_PUBLIC_GOOGLE_ADS_ID');
  if (!GA_CONVERSION_SEND_TO) warnMissing('NEXT_PUBLIC_GA_CONVERSION_SEND_TO');
  if (!FB_PIXEL_ID) warnMissing('NEXT_PUBLIC_FB_PIXEL_ID');
  if (!GTM_ID) warnMissing('NEXT_PUBLIC_GTM_ID');
}

// --------------- type declarations ---------------

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

interface BaseParams {
  page_path?: string;
  page_title?: string;
  [key: string]: any;
}

// --------------- low-level dispatchers ---------------

function hasGtag(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function hasFbq(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

/** Get common page context automatically */
function pageContext(): { page_path: string; page_title: string } {
  if (typeof window === 'undefined') return { page_path: '', page_title: '' };
  return {
    page_path: window.location.pathname,
    page_title: document.title,
  };
}

/** Dev-only debug log */
function debugLog(eventName: string, params: Record<string, any>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `%c[tracking] ${eventName}`,
      'color: #f97316; font-weight: bold;',
      params,
    );
  }
}

/** Send a GA4 event via gtag */
function sendGA4Event(eventName: string, params: Record<string, any>) {
  if (!hasGtag()) return;
  window.gtag('event', eventName, params);
}

/** Send a Google Ads conversion via gtag */
function sendGoogleAdsConversion(params: Record<string, any>) {
  if (!hasGtag() || !GA_CONVERSION_SEND_TO) return;
  window.gtag('event', 'conversion', {
    send_to: GA_CONVERSION_SEND_TO,
    ...params,
  });
}

/** Send a Meta Pixel standard or custom event */
function sendMetaEvent(
  eventName: string,
  params: Record<string, any>,
  type: 'track' | 'trackCustom' = 'track',
) {
  if (!hasFbq() || !FB_PIXEL_ID) return;
  window.fbq(type, eventName, params);
}

// --------------- public tracking API ---------------

/**
 * Track a successful quote form submission.
 * Call ONLY after the API confirms success.
 */
export function trackQuoteRequest(extra?: {
  service_type?: string;
  postcode?: string;
}) {
  const ctx = pageContext();
  const params: Record<string, any> = {
    ...ctx,
    form_name: 'quote_request',
    ...extra,
  };

  debugLog('quote_request', params);

  // GA4
  sendGA4Event('quote_request', {
    event_category: 'lead_generation',
    ...params,
  });

  // Google Ads conversion
  sendGoogleAdsConversion({
    value: 50.0,
    currency: 'GBP',
    event_category: 'conversion',
    event_label: 'quote_request',
  });

  // Meta Pixel
  sendMetaEvent('Lead', {
    content_category: 'quote_request',
    content_name: extra?.service_type || 'General Quote',
    value: 50.0,
    currency: 'GBP',
  });
}

/**
 * Track a successful contact form submission.
 * Call ONLY after the API confirms success.
 */
export function trackContactForm(extra?: {
  subject?: string;
}) {
  const ctx = pageContext();
  const params: Record<string, any> = {
    ...ctx,
    form_name: 'contact_form',
    ...extra,
  };

  debugLog('contact_form_submit', params);

  // GA4
  sendGA4Event('contact_form_submit', {
    event_category: 'lead_generation',
    ...params,
  });

  // Google Ads conversion
  sendGoogleAdsConversion({
    value: 25.0,
    currency: 'GBP',
    event_category: 'conversion',
    event_label: 'contact_form_submit',
  });

  // Meta Pixel
  sendMetaEvent('Lead', {
    content_category: 'contact_form',
    content_name: extra?.subject || 'General Enquiry',
    value: 25.0,
    currency: 'GBP',
  });
}

/**
 * Track a phone link click.
 * Safe to call from onClick — does NOT prevent navigation.
 */
export function trackPhoneClick(placement: string) {
  const ctx = pageContext();
  const params: Record<string, any> = {
    ...ctx,
    placement,
    contact_method: 'phone',
  };

  debugLog('phone_click', params);

  // GA4
  sendGA4Event('phone_click', {
    event_category: 'contact',
    ...params,
  });

  // Google Ads conversion
  sendGoogleAdsConversion({
    value: 5.0,
    currency: 'GBP',
    event_category: 'conversion',
    event_label: 'phone_click',
  });

  // Meta Pixel custom event
  sendMetaEvent('PhoneClick', {
    content_category: 'phone',
    placement,
  }, 'trackCustom');
}

/**
 * Track a WhatsApp link/button click.
 * Safe to call from onClick — does NOT prevent navigation.
 */
export function trackWhatsAppClick(placement: string) {
  const ctx = pageContext();
  const params: Record<string, any> = {
    ...ctx,
    placement,
    contact_method: 'whatsapp',
  };

  debugLog('whatsapp_click', params);

  // GA4
  sendGA4Event('whatsapp_click', {
    event_category: 'contact',
    ...params,
  });

  // Google Ads conversion
  sendGoogleAdsConversion({
    value: 5.0,
    currency: 'GBP',
    event_category: 'conversion',
    event_label: 'whatsapp_click',
  });

  // Meta Pixel custom event
  sendMetaEvent('WhatsAppClick', {
    content_category: 'whatsapp',
    placement,
  }, 'trackCustom');
}
