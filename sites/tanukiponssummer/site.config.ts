export const siteConfig = {
  siteName: "TANUKI: Pon's Summer Guide",
  domain: 'tanukiponssummer.wiki',
  url: 'https://tanukiponssummer.wiki',
  gameTitle: "TANUKI: Pon's Summer",
  steamAppId: 3218570,
  steamUrl: 'https://store.steampowered.com/app/3218570/TANUKI_Pons_Summer/',
  editorialEmail: 'editorial@tanukiponssummer.wiki',
  supportEmail: 'support@criticalreflex.com',
  social: [
    { href: 'https://www.criticalreflex.com/tanuki', label: 'Publisher page' },
    { href: 'https://discord.gg/v2m7Ju7YM', label: 'Discord' },
  ],
  developer: 'Denkiworks',
  publisher: 'CRITICAL REFLEX',
  tagline: 'Unofficial English fan guide for the life sim about mail, a shrine, and a BMX.',
  locale: 'en',
  themeColor: '#16120c',
  contentRoot: 'tanukiponssummer',
  homeTitle: "TANUKI: Pon's Summer Guide — Release, Delivery, and the Shrine",
  homeDescription:
    "Unofficial English guide to TANUKI: Pon's Summer (Steam AppID 3218570). Denkiworks and CRITICAL REFLEX, released 10 Nov 2026. What the store says about mail routes, shrine upgrades, and BMX challenges.",
  analytics: {
    gaId: 'G-JM7HW2NZLJ',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      "Official Steam library hero for TANUKI: Pon's Summer: a small wooden shrine sits in a huge tree above a green town, with round mountains under a blue sky",
    header: '/images/official/steam/header.jpg',
    headerAlt:
      "Official Steam header for TANUKI: Pon's Summer: Pon, a tanuki in a postal cap, rides a red BMX while parcels and letters fly beside the title",
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    "tanukiponssummer.wiki is an unofficial fan-made guide for TANUKI: Pon's Summer. It is not affiliated with, endorsed by, or sponsored by Denkiworks, CRITICAL REFLEX, or Valve. All game content, names, artwork, and trademarks belong to their respective owners. This site does not sell the game, recover accounts, or invent route maps, upgrade trees, or challenge lists. The support email in the footer is the one printed on the Steam store page. This wiki does not read that mailbox.",
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guides', label: 'Guides' },
    { href: '/checklist', label: 'Checklist' },
    { href: '/guide', label: 'Walkthrough' },
    { href: '/shrine', label: 'Shrine' },
    { href: '/bmx', label: 'BMX' },
  ],
  moreNav: [
    { href: '/delivery', label: 'Delivery' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/map', label: 'Map & Locations' },
    { href: '/how-long-to-beat', label: 'How Long to Beat' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
    { href: '/contact', label: 'Contact' },
  ],
  footerNav: [
    { href: '/', label: 'Home' },
    { href: '/guides', label: 'All Guides' },
    { href: '/checklist', label: 'Completion Checklist' },
    { href: '/guide', label: 'Guide' },
    { href: '/delivery', label: 'Delivery' },
    { href: '/shrine', label: 'Shrine' },
    { href: '/bmx', label: 'BMX' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/map', label: 'Map & Locations' },
    { href: '/how-long-to-beat', label: 'How Long to Beat' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/contact', label: 'Contact' },
  ],
  version: {
    label: 'Checked 23 Nov 2026',
    detail:
      'Store text, US price ($19.99), platforms, languages, categories, requirements, and all 43 Steam achievements with global unlock rates were checked against the Steam store API and Steam community stats in English on 23 Nov 2026, alongside the publisher page, the 10 Nov 2026 press release, and Steam community announcements through 13 Nov 2026.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/3218570/TANUKI_Pons_Summer/',
      label: 'Steam store page',
    },
    {
      href: 'https://www.criticalreflex.com/tanuki',
      label: 'CRITICAL REFLEX page',
    },
    {
      href: 'https://www.gamespress.com/SPECIAL-DELIVERY-TANUKI-PONS-SUMMER-IS-OUT-NOW-ON-PC-CONSOLES',
      label: '10 Nov 2026 press release',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
