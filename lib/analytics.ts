export const GTM_ID = "GTM-574S4ST6";

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID?.trim();
const HUBSPOT_REGION =
  process.env.NEXT_PUBLIC_HUBSPOT_REGION?.trim().toLowerCase() || "eu1";

/** HubSpot tracking code (also serves the cookie banner), or null when not configured. */
export const hubspotScriptSrc: string | null = HUBSPOT_PORTAL_ID
  ? `https://${HUBSPOT_REGION === "na1" ? "js" : `js-${HUBSPOT_REGION}`}.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`
  : null;

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
    _hsp?: unknown[];
  }
}

export function pushEvent(
  event: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params } satisfies DataLayerEvent);
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window._hsp = window._hsp || [];
  window._hsp.push(["showBanner"]);
}
