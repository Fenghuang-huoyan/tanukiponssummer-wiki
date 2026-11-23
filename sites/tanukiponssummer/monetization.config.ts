/**
 * Official storefront & authorized Steam key affiliate configuration for TANUKI: Pon's Summer.
 *
 * Leave `affiliateUrl` empty until your partner account (CJ -> Fanatical, Impact -> Humble / Green Man Gaming)
 * is approved. Empty partner rows stay hidden so no broken or placeholder link ever appears on production pages.
 */
export type StoreOffer = {
  id: string;
  storeName: string;
  badge: string;
  drm: string;
  priceLabel: string;
  /** Direct official URL used when affiliateUrl is empty (only for official primary stores). */
  officialUrl?: string;
  /** Authorized partner tracking URL (fill once approved). */
  affiliateUrl: string;
};

export const monetizationConfig = {
  disclosure:
    'Official store links open directly. When authorized key retailers are listed, purchases through partner links may earn a small commission at no extra cost to you.',
  offers: [
    {
      id: 'steam-official',
      storeName: 'Steam Store (Official)',
      badge: 'Verified Price',
      drm: 'Windows · Steam App 3218570',
      priceLabel: '$19.99 USD',
      officialUrl: 'https://store.steampowered.com/app/3218570/TANUKI_Pons_Summer/',
      affiliateUrl: '',
    },
    {
      id: 'fanatical',
      storeName: 'Fanatical (Authorized Steam Key)',
      badge: 'Official Key Partner',
      drm: 'Redeems on Steam',
      priceLabel: 'Check Deal',
      affiliateUrl: '', // Paste CJ / Fanatical deep link here when ready
    },
    {
      id: 'humble',
      storeName: 'Humble Store (Authorized Key)',
      badge: 'Choice Discount Eligible',
      drm: 'Redeems on Steam',
      priceLabel: 'Check Deal',
      affiliateUrl: '', // Paste Impact / Humble Partner link here when ready
    },
    {
      id: 'gmg',
      storeName: 'Green Man Gaming',
      badge: 'Authorized PC Retailer',
      drm: 'Redeems on Steam',
      priceLabel: 'Check Deal',
      affiliateUrl: '', // Paste Impact / GMG deep link here when ready
    },
  ] satisfies StoreOffer[],
};

export function getActiveStoreOffers(): (StoreOffer & { resolvedUrl: string; isAffiliate: boolean })[] {
  return monetizationConfig.offers
    .map((offer) => {
      const aff = offer.affiliateUrl.trim();
      const off = (offer.officialUrl ?? '').trim();
      const resolvedUrl = aff || off;
      return {
        ...offer,
        resolvedUrl,
        isAffiliate: aff.length > 0,
      };
    })
    .filter((item) => item.resolvedUrl.length > 0);
}
