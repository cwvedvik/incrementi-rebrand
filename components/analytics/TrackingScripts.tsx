import { GTM_ID, hubspotScriptSrc } from "@/lib/analytics";

// Must run before GTM loads. HubSpot's cookie banner is the consent source:
// its listener fires on every page load with the stored choice and on change.
const consentBootstrap = `
window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{
ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',
analytics_storage:'denied',functionality_storage:'denied',
personalization_storage:'denied',security_storage:'granted',
wait_for_update:500});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);
var _hsp=window._hsp=window._hsp||[];
_hsp.push(['addPrivacyConsentListener',function(consent){
var c=(consent&&consent.categories)||{};
function g(v){return v?'granted':'denied';}
gtag('consent','update',{
analytics_storage:g(c.analytics),
ad_storage:g(c.advertisement),ad_user_data:g(c.advertisement),
ad_personalization:g(c.advertisement),
functionality_storage:g(c.functionality),
personalization_storage:g(c.functionality)});
window.dataLayer.push({event:'hubspot_consent_update',
consent_analytics:!!c.analytics,
consent_advertisement:!!c.advertisement,
consent_functionality:!!c.functionality});
}]);
`;

const gtmSnippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export function TrackingHead() {
  return (
    <>
      <script
        id="consent-default"
        dangerouslySetInnerHTML={{ __html: consentBootstrap }}
      />
      {/* Google Tag Manager */}
      <script id="gtm" dangerouslySetInnerHTML={{ __html: gtmSnippet }} />
      {/* End Google Tag Manager */}
      {hubspotScriptSrc && (
        <script
          id="hs-script-loader"
          type="text/javascript"
          async
          defer
          src={hubspotScriptSrc}
        />
      )}
    </>
  );
}

export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
