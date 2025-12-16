# DegenPrimeShop.com – Master Document

**Last Updated:** December 16, 2025  
**Status:** Live & Payment-Ready (Real NOWPayments + Shippo test rates)  
**URL:** https://degenprimeshop.vercel.app/  
**Goal:** Crypto-only Amazon Prime gadget forwarding — worldwide shipping, no fiat.

## Core Concept
- Degens paste Amazon Prime link + select shipping country (dropdown).
- Click "Get Quote" → see total (Amazon all-inclusive + service fee + shipping).
- Pay with any crypto (NOWPayments).
- We buy & ship worldwide (full address collected after payment).

## Current Features (Live)
- Purple cosmic design, particles background.
- Ape mascot (floating top left, laser eyes).
- Ape chat bubble (bottom right).
- Ticker bar (top, market scroll).
- Social icons (Telegram + X) with "Coming Soon" text.
- Track Orders button (top right, links to public track.html in new tab).
- Calculator: Prime link + country dropdown.
- "Pay with ANY crypto" note.
- "Get Quote" button (shows quote instantly).
- Quote calculator (clean whole-dollar numbers, rounded up):
  - Amazon Price (incl tax)
  - Local US Shipping: FREE (Amazon Prime)
  - Local Sales Tax (NJ): rounded
  - International Shipping (dropdown choice, real Shippo test rates + 10% hidden markup)
  - Insurance (rounded)
  - Service Fee (10%, min $40, max $100)
  - Total (rounded up to next whole dollar)
- "APE INTO PAYMENT" button (real NOWPayments, new tab).
- Hold policy with "All sales final — no returns or refunds".
- Public tracking page (track.html — Order ID search, shows status/tracking/notes).
- Backoffice dashboard (backoffice.html — password protected, manual order tracking with carrier dropdown, profit summary).
- Secret backoffice link ("Purple Mode Activated 💜" in footer, opens new tab).
- "How It Works", footer.

## Pricing (Locked)
- Service Fee: 10% of item price (min $40, max $100).
- Local US Shipping: FREE (Amazon Prime).
- Local Sales Tax: NJ rate (paid by us).
- International Shipping: Real Shippo rates + 10% hidden markup.
- Insurance: Real cost + 10% hidden markup.
- All sales final — no returns or refunds.

## Payments
- NOWPayments (300+ coins, custody mode).
- Merchant name: SHIP-IT Worldwide LLC dba Degen Prime Shop.
- Test payment successful.

## Tech
- HTML/CSS/JS (static on Vercel).
- Shippo test API integration (real test rates, fallback approximate).
- Particles.js background.

## Backoffice (Live)
- backoffice.html (password protected).
- Manual order tracking (date, order ID, Amazon link, prices, address, carrier dropdown, status dropdown, tracking #, notes).
- Profit summary.
- LocalStorage persistence.

## Public Tracking (Live)
- track.html (Order ID search — shows status, tracking #, notes).

## Planned
- Backoffice webhook automation (auto-add orders from NOWPayments).
- Real Shippo live rates.
- Real Amazon scraping (price/title).
- Full address collection after payment.
- Terms & Privacy pages.
- Domain point (degenprimeshop.com).
- Marketing launch (Telegram/X channels).

## Changelog
- Dec 16, 2025: Homepage polished — ticker bar, social icons (Telegram + X with "Coming Soon"), track orders button, ape chat bubble added.
- Dec 16, 2025: Social icons fixed (correct modern X logo, no overlap, "Coming Soon" spacing improved).
- Dec 16, 2025: Destination field replaced with country dropdown for better accuracy.
- Dec 16, 2025: Added "Get Quote" button for clearer UX (quote shows on click).
- Dec 16, 2025: Quote calculator updated — local US shipping FREE, sales tax shown, markup text hidden, service fee capped at $100, "All sales final" in disclaimer.
- Dec 16, 2025: Shippo test API integration added (real test rates, fallback approximate, rounded up whole dollars).
- Dec 16, 2025: Backoffice dashboard added (password protected, manual order tracking with carrier dropdown, profit summary).
- Dec 16, 2025: Public tracking page added (track.html — Order ID search, shows status/tracking/notes).
- Dec 16, 2025: Secret backoffice link added ("Purple Mode Activated 💜" in footer, opens new tab).

For Degens, By Degens | Purple Mode Activated 💜
