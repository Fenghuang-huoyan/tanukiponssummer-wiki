# Ads & Monetization — tanukiponssummer.wiki

## 1. Google AdSense Clean Mode (Active Preparation)

- Third-party Adsterra script (`bauval.org`) in `sites/tanukiponssummer/ads.config.ts` is **turned OFF** (`enabled: false`) so Google AdSense reviewers inspect a clean, fast, policy-compliant site with zero low-quality third-party ad networks.
- Dedicated compliance pages are live at `/privacy`, `/terms`, `/contact`, and `/about`.
- **3-Step Activation Sequence once Publisher ID (`pub-XXXXXXXXXXXXXXXX`) is ready:**
  1. Create `public/ads.txt` (lowercase) containing:
     `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
     Deploy first and confirm `https://tanukiponssummer.wiki/ads.txt` returns HTTP 200.
  2. In `sites/tanukiponssummer/ads.config.ts`, set `adsense.enabled = true` and `adsense.client = 'ca-pub-XXXXXXXXXXXXXXXX'` so `BaseLayout.astro` injects the official AdSense `<head>` tag across all pages.
  3. Click **Request Review** in the Google AdSense console (verify via `ads.txt` first).

## 2. Authorized Steam Key Affiliate Widget

- Configured in `sites/tanukiponssummer/monetization.config.ts` and rendered by `framework/components/StoreDealsWidget.astro`.
- By default, shows the verified official Steam Store button (`$19.99 USD`). Once CJ (`Fanatical`) or Impact (`Humble Store` / `Green Man Gaming`) affiliate links are pasted into `affiliateUrl`, authorized partner rows automatically appear with `rel="sponsored noopener noreferrer"` and transparent disclosure.
