# Notes for Claude

This repository holds Ashley McQuestion's marketing materials. Ashley is not a programmer: explain things in plain language, show results as images, and keep replies short.

## About Ashley
- Ashley McQuestion, **Marketing & Lead Management**, Sommer Wealth Management
- Phone: (661) 917-1107
- Emails on the card: vivienne@sommerwealthmanagement.com and ashley@sommerwealthmanagement.com
- Website on the card: www.sommerwealthmanagement.com/invest
- Location: Irvine / Orange County, CA

## Brand
See `brand/colors-and-fonts.md`. Style is dark brown-black with gold accents, elegant serif headings, and widely spaced small caps. The logo is the gold bar-chart mark (`brand/logo-bars.svg`), a thin gold vertical line, then "SOMMER" with "WEALTH MANAGEMENT" below.

## Business card (current version)
- Size 3.5" × 2", built at 1050 × 600 px (300 dpi). Source: `business-card/card.html`.
- **Front** (`#front-dark`): logo, name, title, contacts on the left; curved gold line and the "people network" drawing with "CONNECT · ENGAGE · GROW" on the right.
- **Back** (`#back`): "STRATEGY *today* / A BRIGHTER TOMORROW", nine feature points in two columns, and on the right "EXPLORE OUR 15% OPPORTUNITY", the framed QR code, "SCAN TO LEARN MORE".
- QR code (`business-card/qr-code.png`) points to `https://link.sendlink.co/qr/OoK5bFeptYCX`. Always test that a changed QR code still scans.
- The `#front` card and `?art=funnel|target|network` in card.html are older light-front options, kept for reference.

## Design resources in this repo
- **Fonts:** `brand/fonts/` has the three brand fonts (open font license). `card.html` loads them from there, so nothing depends on Google Fonts. Use the same `@font-face` rules for new pieces.
- **Icons:** `brand/icons/lucide/` is the full Lucide icon set (2,000+ thin-line SVGs, ISC license). Search `tags.json` for a word (e.g. "phone", "shield", "chart") to find the right file. Restyle with `stroke` in the brand gold; keep stroke width around 1.5 so they match the card.
- **QR codes:** `python3 tools/make-qr.py "<link>" out.png` makes a brand-colored QR code and checks it scans. Ashley may also supply her own tracked QR codes (like the sendlink one on the card); use those as given.

## Making changes
Edit `business-card/card.html`, then run `node tools/render-card.js` to rebuild the PNGs, the options, and the 2-page PDF (dark front on page 1, back on page 2). Look at the rendered images, and check the QR still scans, before sending them.

## Printing
- Same-day: Staples, 2160 Barranca Pkwy, Irvine (949-838-0388). Order online by 12 pm for same-day pickup, about $21.99 for 250 on 14pt stock. One design per order.
- Backup: FedEx Office, 3992 Barranca Pkwy or 17801 Main St, Irvine.
- The PDF has no bleed yet; add 0.125" of background on each side if a printer asks for it.
