# TANUKI: Pon's Summer Guide

Unofficial English fan guide for [TANUKI: Pon's Summer](https://store.steampowered.com/app/3218570/TANUKI_Pons_Summer/) (Steam AppID **3218570**), aimed at **tanukiponssummer.wiki**.

Not affiliated with Denkiworks, CRITICAL REFLEX, Valve, or Steam. The site does not sell the game or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://tanukiponssummer.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/tanukiponssummer/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/tanukiponssummer/ads.config.ts` | Ad slot left empty for this domain |
| Active site | `sites/active` → `tanukiponssummer` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/tanukiponssummer/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load GA4. The Adsterra slot after Quick Answer is disabled and has no zone id. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

## Pages

Home, guide, delivery routes, shrine upgrades, and BMX challenges. About, the footer privacy and disclaimer notes, and the 404 page sit outside that set. There is no codes page: the Steam listing and the official posts checked on 12 Nov 2026 do not describe a redeem-code system.
