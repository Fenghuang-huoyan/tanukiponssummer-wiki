/**
 * Advertising configuration for tanukiponssummer.wiki.
 *
 * AdSense-first clean mode:
 * - Third-party Adsterra script (`bauval.org`) is turned OFF so Google AdSense review sees a 100% clean site.
 * - Once `public/ads.txt` is deployed and verified in the AdSense console, set `adsense.enabled = true`
 *   and fill `adsense.client` (e.g. `ca-pub-XXXXXXXXXXXXXXXX`) to inject the official AdSense head tag.
 */
export type AdSlotConfig = {
  id: string;
  format: string;
  scriptSrc?: string;
  invokeBase?: string;
  containerPrefix?: string;
};

const slots = {
  afterQuickAnswer: {
    id: 'f989d0f6f9b21ee2ee7c4c62b3e3d68d',
    format: 'native-banner',
    scriptSrc: 'https://bauval.org/21/f989d0f6f9b21ee2ee7c4c62b3e3d68d',
  },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsense' as 'adsense' | 'adsterra' | 'none',
  /** Keep Adsterra OFF during Google AdSense review and normal high-RPM operation. */
  enabled: false,
  adsense: {
    enabled: true,
    /** Example: 'ca-pub-1234567890123456' — fill after deploying public/ads.txt */
    client: 'ca-pub-2671209221089689',
  },
  invokeBase: '',
  scriptSrc: '',
  containerPrefix: 'container-',
  slots,
};

export type AdSlotName = keyof typeof slots;

export function resolveAdPlacement(name: AdSlotName) {
  const slot: AdSlotConfig = slots[name];
  const invokeBase = (slot.invokeBase ?? adsConfig.invokeBase).replace(/\/$/, '');
  const containerPrefix = slot.containerPrefix ?? adsConfig.containerPrefix;
  const id = slot.id.trim();
  const explicitSrc = (slot.scriptSrc ?? adsConfig.scriptSrc).trim();
  const scriptSrc = explicitSrc || (id && invokeBase ? `${invokeBase}/${id}/invoke.js` : '');
  return {
    id,
    format: slot.format,
    invokeBase,
    containerId: `${containerPrefix}${id}`,
    scriptSrc,
    active:
      adsConfig.network === 'adsterra' &&
      adsConfig.enabled &&
      id.length > 0 &&
      !id.startsWith('ADSTERRA_') &&
      scriptSrc.length > 0,
  };
}
