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

## Making changes
Edit `card.html`, then render with Playwright (Chromium) at 1050 × 600 per card to make the PNGs, and print the PDF at 3.5in × 2in with the dark front on page 1 and the back on page 2. Look at the rendered images before sending them.

## Printing
- Same-day: Staples, 2160 Barranca Pkwy, Irvine (949-838-0388). Order online by 12 pm for same-day pickup, about $21.99 for 250 on 14pt stock. One design per order.
- Backup: FedEx Office, 3992 Barranca Pkwy or 17801 Main St, Irvine.
- The PDF has no bleed yet; add 0.125" of background on each side if a printer asks for it.
