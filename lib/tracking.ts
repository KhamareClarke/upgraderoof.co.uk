/**
 * ---------------------------------------------------------------
 * CENTRALIZED EVENT TRACKING (GTM dataLayer)
 *
 * Single source of truth for all conversion and engagement events.
 * This file's responsibility is to push well-structured events and
 * data into the `window.dataLayer`.
 *
 * It is assumed that Google Tag Manager (GTM) is configured to listen
 * for these custom events and fire the appropriate marketing tags
 * (GA4, Google Ads, Meta Pixel, etc.).
 *
 * Event names (pushed to dataLayer):
 *   - quote_request        → successful quote form submission
 *   - contact_form_submit  → successful contact form submission
 *   - phone_click          → any tel: link click
 *   - whatsapp_click       → any WhatsApp link/button click
 * ---------------------------------------------------------------
 */

// --------------- type declarations ---------------

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// --------------- low-level dispatcher ---------------

/**
 * Pushes an event to the `window.dataLayer`.
 * This is the primary function for all tracking events.
 * @param eventName The name of the custom event.
 * @param params Additional data associated with the event.
 */
function sendDataLayerEvent(eventName: string, params: Record<string, any>) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[tracking] dataLayer not found for event: ${eventName}`);
    }
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(
      `%c[tracking] Pushing to dataLayer: ${eventName}`,
      'color: #f97316; font-weight: bold;',
      params,
    );
  }

  // Push the event to the dataLayer
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

// --------------- public tracking API ---------------

/**
 * Track a successful quote form submission.
 * Call ONLY after the API confirms success.
 */
export function trackQuoteRequest(extra: {
  service_type?: string;
  postcode?: string;
}) {
  sendDataLayerEvent('quote_request', {
    form_name: 'quote_request',
    service_type: extra.service_type,
    postcode: extra.postcode,
    // A default value for the conversion. Can be overridden in GTM.
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
  sendDataLayerEvent('contact_form_submit', {
    form_name: 'contact_form',
    subject: extra?.subject,
    value: 25.0,
    currency: 'GBP',
  });
}

/**
 * Track a phone link click.
 * Safe to call from onClick — does NOT prevent navigation.
 */
export function trackPhoneClick(placement: string) {
  sendDataLayerEvent('phone_click', {
    contact_method: 'phone',
    placement,
    value: 5.0,
    currency: 'GBP',
  });
}

/**
 * Track a WhatsApp link/button click.
 * Safe to call from onClick — does NOT prevent navigation.
 */
export function trackWhatsAppClick(placement: string) {
  sendDataLayerEvent('whatsapp_click', {
    contact_method: 'whatsapp',
    placement,
    value: 5.0,
    currency: 'GBP',
  });
}
