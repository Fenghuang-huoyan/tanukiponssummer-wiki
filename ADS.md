# Ads — tanukiponssummer.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/tanukiponssummer/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is empty. `afterQuickAnswer.scriptSrc` is empty. `invokeBase` and the site-wide `scriptSrc` are empty. No key from another game is stored here.

`analytics.gaId` in `sites/tanukiponssummer/site.config.ts` is an empty string. The base layout does not load GA4.

Adult and sensitive categories stay off. The 404 page does not render a slot. When a zone key is created for this domain, it belongs in this file only.
