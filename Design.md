# Freshfield Group — Design System

---

## Overview

Freshfield Group is an agricultural brand built on a dark-canvas editorial system — sophisticated, earthy, and authoritative. The visual language pairs a near-black background with warm cream/white typography, a muted sage-green accent, and full-bleed environmental photography to project trustworthiness and global scale. The site feels closer to a premium consulting firm or impact-driven investment group than a conventional agribusiness — positioning the brand as a strategic partner rather than a commodity supplier.

The design is built around contrast and restraint. Large display type in cream commands attention, while supporting content recedes into secondary white. Photography is used as the primary "texture" of the page — full-width video heroes, earthtone image crops, and portrait photography all contribute atmosphere rather than decoration. Buttons and links are minimal and outlined rather than filled, preserving the dark canvas as the dominant voice.

Sections are separated by generous vertical rhythm. A thin horizontal rule element (a small rectangle SVG marker) is used as a consistent section-open device before every section label, signaling structured editorial hierarchy without heavy UI chrome. The result is a calm, confident, nature-forward design system that scales cleanly from a single product card to a full-page editorial band.

**Key Characteristics:**
- Dark canvas (`{colors.canvas}` #0E1208 or near-black forest green) dominates every page; light mode is not present
- All primary headings use cream/off-white (`{colors.text-primary}`) at large weights; no colored headings
- A muted warm sage or olive green (`{colors.accent-green}`) is used sparingly as an accent — for section tags, decorative SVG marks, and icon backgrounds
- Full-bleed video hero with overlapping large display type; photography-as-depth throughout
- Section labels follow a rigid pattern: small SVG rectangle marker + `{typography.label-uppercase}` overline before every H2
- CTA buttons are outline/ghost style — transparent fill, cream border/text — never solid filled
- Minimal use of UI shadows; depth comes entirely from photography tonal contrast and surface color steps
- Footer is dark, full-width, multi-column, typographically restrained, matching the canvas color

---

## Colors

### Brand & Accent
- **Accent Green** (`{colors.accent-green}` — #5C7A2E or similar muted olive): Used for the small SVG rectangle section markers, hover states on links, and subtle icon backgrounds. The defining brand hue — earthy, not vivid.
- **Section Tag Green** (`{colors.tag-bg}` — rgba of accent, ~15% opacity): Very subtle tinted pill or inline label backgrounds in the service/feature section.

### Surface
- **Canvas** (`{colors.canvas}` — #0C1009): The dominant page background. Near-black forest/dark green. Every section sits on this or a very close variant.
- **Surface Elevated** (`{colors.surface-card}` — #151C0F): Cards, testimonial blocks, and feature containers lift slightly above the canvas — a near-imperceptible +1 step in lightness. No shadows; distinction is purely tonal.
- **Surface Mid** (`{colors.surface-mid}` — #1A2212): Used in the sustainability/split-section band and some feature rows. Slightly lighter still, reinforcing the layered dark-surface system.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — rgba(255,255,255,0.10)): Subtle 1px dividers between footer columns and between testimonial cards. Very low-contrast by design.
- **Button Border** (`{colors.btn-border}` — rgba(255,255,255,0.70)): The ghost CTA button uses a mid-opacity white border that softens against photography backgrounds.

### Text
- **Text Primary** (`{colors.text-primary}` — #F5F0E8): Warm cream/off-white. Used for all H1–H3 display type and body copy.
- **Text Secondary** (`{colors.text-secondary}` — #B8B2A4): Muted warm gray. Supporting body copy, testimonial attribution, footer secondary links.
- **Text Muted** (`{colors.text-muted}` — #6E6B62): Captions, fine print, stat labels. Low-contrast intentionally.
- **Text Accent** (`{colors.text-accent}` — matches `{colors.accent-green}`): Active nav items, animated tag words in the About section scrolling ticker.

### Semantic
- No success/warning/error states observed in the marketing pages. Form validation states are not exposed at this URL level.

---

## Typography

### Font Family
The site uses a **serif display font** (visually consistent with a humanist serif such as **Cormorant Garamond**, **Playfair Display**, or a licensed equivalent) paired with a **clean sans-serif** (consistent with **Inter** or **DM Sans**) for body and UI. The weight pair is heavy serif display (700–800) against light-to-regular sans body (400). This contrast — editorial serif headline vs. functional sans body — reinforces the brand's dual identity as both a premium creative entity and an operationally serious company.

The best open-source substitute for the display face is **Cormorant Garamond** (Google Fonts); if the licensed face tracks tighter, add `letter-spacing: -0.02em` to display sizes. For body, **Inter** (Google Fonts) is a direct match.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96–112px | 700 | 0.95 | -0.03em | Hero H1: "Redefining agriculture at a global scale" |
| `{typography.display-lg}` | 64–72px | 700 | 1.05 | -0.02em | Section H2: "We are committed to advancing agriculture" |
| `{typography.display-md}` | 44–52px | 700 | 1.1 | -0.01em | Mid-page feature H2s, testimonial pull-quote |
| `{typography.display-sm}` | 32–36px | 600 | 1.2 | 0 | Sub-section headings, card titles |
| `{typography.title-lg}` | 22–24px | 600 | 1.3 | 0 | Stat labels (98%, 15, 500k+), feature card titles |
| `{typography.title-md}` | 18–20px | 500 | 1.4 | 0 | Testimonial names, team titles |
| `{typography.label-uppercase}` | 11–12px | 600 | 1.2 | 0.12em | UPPERCASE section labels ("About us", "Our solutions", "Why choose us") — always uppercase, always tracked |
| `{typography.body-md}` | 16–17px | 400 | 1.65 | 0 | Default body copy throughout |
| `{typography.body-sm}` | 14–15px | 400 | 1.6 | 0 | Supporting body, testimonial quotes |
| `{typography.caption}` | 12–13px | 400 | 1.5 | 0.02em | Footer fine print, image credits |
| `{typography.button}` | 14–15px | 500 | 1 | 0.04em | All button and CTA link labels |
| `{typography.nav-link}` | 14–15px | 500 | 1 | 0.02em | Top-nav items |

### Principles
Section labels are **always UPPERCASE with wide letter-spacing** (`{typography.label-uppercase}`) and always preceded by the small SVG rectangle marker. Display headings are **sentence-case**, never all-caps — preserving the editorial feel. Body copy is never bold mid-paragraph; emphasis is handled by size hierarchy alone. Button labels carry a small tracked spacing to give them a precise, purposeful quality.

### Note on Font Substitutes
If the display serif is a licensed face, use **Cormorant Garamond** (700 weight) from Google Fonts. Apply `letter-spacing: -0.02em` on display-xl and display-lg to compensate for the slightly wider default tracking. For body/UI sans, **Inter** (400, 500, 600) is a direct drop-in.

---

## Layout

### Spacing System
- **Base unit:** 8px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 40px · `{spacing.xl}` 64px · `{spacing.xxl}` 96px · `{spacing.section}` 128–160px.
- **Section padding (vertical):** `{spacing.section}` (128–160px) between major editorial bands.
- **Hero bands:** Full viewport height for the video hero; next section insets at `{spacing.xxl}` (96px) internal vertical padding.
- **Card internal padding:** `{spacing.lg}` (40px) for feature and testimonial cards.
- **Gutters:** `{spacing.md}` (24px) between cards in grids; `{spacing.lg}` (40px) in wider editorial grids.

### Grid & Container
- **Max content width:** ~1280px centered with symmetric horizontal padding of `{spacing.xl}` (64px) on desktop.
- **Editorial body:** 12-column grid; most content sections use a 10-column centered body with 1 offset column each side.
- **Stat row:** 3-up at desktop, 3-up at tablet (compressed), 1-up at mobile.
- **Service/solution cards:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Testimonial grid:** Masonry-style or 2-column staggered at desktop, 1-up at mobile.
- **Footer:** 5 columns at desktop (logo + 4 link groups), 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Whitespace is generous and atmospheric — sections breathe at `{spacing.section}` to allow photography and type to read without competition. The dark canvas makes whitespace feel weighted and intentional rather than empty. Tight internal card layouts are the exception (stats, service list items) where density signals competence. The rule: full-canvas bands breathe wide; component-level density is permitted to create rhythm contrast.

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `{colors.canvas}` background, no border | Default page background, all text sections |
| Soft Hairline | 1px `{colors.hairline}` border | Footer column dividers, list separators |
| Card Surface | `{colors.surface-card}` background (+1 tonal step) | Testimonial cards, service feature items, stat blocks |
| Surface Mid | `{colors.surface-mid}` background (+2 tonal steps) | Sustainability split-band, quote/pull sections |
| Photo Depth | Full-bleed photography or video | Hero, "Why Choose Us" feature rows — photography IS the depth |

The system uses no drop shadows on any UI element. Depth is constructed entirely through tonal surface steps on a dark canvas and through the luminance contrast of photography against the near-black background. This makes the system feel rooted and calm rather than overly digital.

### Decorative Depth
- **Section Rectangle Marker** (`{component.section-marker}`): A small filled SVG rectangle (~3×12px), color `{colors.accent-green}`, rendered inline before every uppercase section label. It functions as a visual anchor and brand signature — every section open uses this consistently.
- **Scrolling Tag Ticker** (`{component.tag-ticker}`): A horizontal auto-scrolling row of keyword tags ("Sustainable", "Innovative", "Global", "Reliable") in `{colors.accent-green}` or `{colors.text-accent}`. Appears in the About section. Provides kinetic depth without photography.
- **Quotation Mark SVG** (`{component.blockquote-mark}`): An oversized typographic quotation mark in brand green used behind CEO and testimonial quote blocks. Decorative, non-interactive.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All card containers, section bands, image crops — dominant value |
| `{rounded.sm}` | 4px | Form inputs only |
| `{rounded.md}` | 6–8px | Tag pills in the scrolling ticker, small badge elements |
| `{rounded.full}` | 9999px | Avatar/portrait circles in testimonials |

The shape system is fundamentally **sharp/rectilinear**. Cards, buttons, images, and section containers are all hard-cornered (0px). This geometry signals precision, permanence, and industrial-scale confidence — the digital equivalent of straight rows in a cultivated field. The only soft shapes are avatar circles (testimonials) and small typographic pill tags, which provide human warmth at micro-scale.

### Photography / Content Geometry
Photography is always cropped to a sharp-cornered rectangle — no rounded image frames anywhere. Hero photography/video is full-bleed and full-viewport. Feature images use a roughly 4:5 portrait aspect ratio. Testimonial avatars use a 1:1 circular crop at ~48–56px. Images never use CSS border-radius > 0 except in the avatar context.

---

## Components

### Top Navigation

**`top-nav`** — Approximately 72–80px tall. Background: `{colors.canvas}` (transparent on scroll-top over video, solidifying on scroll). Logo aligned left; primary nav links centered or right-weighted; CTA button "Let's work together" hard-right. Nav links use `{typography.nav-link}` in `{colors.text-primary}`. On mobile, a hamburger icon (`menu-btn.svg`) triggers a full overlay or tray. The logo has two versions: a light version for dark backgrounds and a separate light-on-dark variant loaded at breakpoint.

### Buttons

**`button-ghost`** — The primary (and near-only) CTA style. Transparent background, 1px `{colors.btn-border}` border, `{colors.text-primary}` label, `{rounded.none}` radius, padding ~14px vertical × 28px horizontal. On hover: border and text shift to `{colors.accent-green}`. Uses `{typography.button}`. This is the universal CTA across hero, sections, and footer.

**`text-link-arrow`** — Inline text link followed by an arrow icon SVG. Uses `{colors.text-primary}`, `{typography.button}`. No underline at rest; subtle color shift on hover. Used for "About the company →", "Discover our solutions →" style navigational prompts inside content sections.

**`nav-cta`** — Same as `button-ghost` but sized smaller for the nav bar. Same border/text spec; aligns right in the nav rail.

### Cards & Containers

**`hero-video-band`** — Full viewport height, full-width background video (looping `.mp4`). Large `{typography.display-xl}` headline in `{colors.text-primary}` centered or left-aligned over the video. Three small animated label words ("Driven · Rooted · Impactful") in `{typography.label-uppercase}` appear before the H1. A single `button-ghost` CTA sits below the subhead. The video plays muted with a dark overlay to maintain type legibility.

**`stat-block`** — A horizontal row of 3 metrics. Each block: small SVG leaf/mark icon (`{colors.accent-green}`) + large `{typography.display-sm}` metric value in `{colors.text-primary}` + `{typography.title-lg}` label in `{colors.text-secondary}` + one-line description in `{typography.body-sm}`. Surface: `{colors.canvas}` (no card border). Divided by subtle hairlines.

**`service-list-item`** — A row-style card for solutions. Left: a circular icon container in `{colors.accent-green}` at 15% opacity with a centered SVG icon in `{colors.accent-green}`. Center: `{typography.title-lg}` title + `{typography.body-sm}` description in `{colors.text-secondary}`. Right: an arrow SVG link. Background: `{colors.surface-card}`. Radius: `{rounded.none}`.

**`feature-photo-card`** — Used in "Why Choose Us" section. ~1:1 or 4:5 crop photography top half; text bottom half on `{colors.surface-card}`. `{typography.title-md}` title + `{typography.body-sm}` description. Sharp corners throughout.

**`testimonial-card`** — Background `{colors.surface-card}`. Oversized quotation mark SVG top-left. `{typography.body-sm}` quote body. Bottom: circular avatar + `{typography.title-md}` name + `{typography.caption}` role/company in `{colors.text-muted}`. `{rounded.none}`.

**`cta-band`** — Full-width dark band (`{colors.surface-mid}`), centered headline in `{typography.display-md}`, a supporting paragraph in `{typography.body-md}`, one `button-ghost`. Used before the footer as a final conversion prompt.

### Inputs & Forms

**`text-input`** — Background `{colors.surface-card}`, `{colors.text-primary}` input text, `{typography.body-md}`, `{rounded.sm}` (4px), 1px `{colors.hairline}` border at rest shifting to 1px `{colors.accent-green}` on focus, height ~52px.

### Signature Components

**`scrolling-tag-ticker`** — The horizontally auto-scrolling row of keyword pills ("Sustainable · Innovative · Global · Reliable · Efficient · Impactful") in the About section. Pills use `{colors.accent-green}` text on `{colors.surface-card}` with `{rounded.md}` radius. This is the site's most distinctive interactive-motion element and the clearest brand signature. It communicates brand values kinetically without relying on illustration or iconography.

### Footer

**`footer`** — Background `{colors.canvas}` (same as page). Full-width. Top band: logo left + three brand word marks + social icons (Instagram, YouTube, Facebook). Main body: 5-column link grid — logo/tagline column + Home, Company, Services, Information link groups. Each column header in `{typography.label-uppercase}` `{colors.text-muted}`. Links in `{typography.body-sm}` `{colors.text-secondary}`. Bottom bar: copyright line + "Powered by Webflow" credit in `{colors.text-muted}` `{typography.caption}`. Horizontal hairline above the bottom bar.

---

## Do's and Don'ts

### Do
- **Always precede section H2s with the SVG rectangle marker + uppercase label tag.** This pattern is the structural signature of the system; breaking it disrupts the page rhythm.
- **Use full-bleed photography or video for major section backgrounds.** The dark canvas needs photography to feel grounded; abstract or illustrative backgrounds break the naturalist brand voice.
- **Keep all CTA buttons as ghost/outline style** with `{rounded.none}`. Filled buttons read as foreign objects on this canvas.
- **Let display type be the hero.** At 96–112px, the H1 should carry the full viewport width — don't compress it into a narrow column.
- **Use the scrolling ticker component for brand values** rather than a static bulleted list. Motion communicates abundance and forward momentum in a way static lists cannot.
- **Maintain the dark canvas across all pages.** Even the lightest surface step (`{colors.surface-mid}`) stays within the dark-mode family; do not introduce white or light backgrounds.
- **Crop all images to sharp rectangles.** The rectilinear geometry is load-bearing for the brand's precision narrative.
- **Space sections generously at `{spacing.section}`.** Compression reads as low-budget; this system earns authority through breath.

### Don't
- **Don't use filled/solid color buttons.** A solid green or white button interrupts the ghost-style system and makes CTAs feel like generic SaaS rather than premium agricultural partners.
- **Don't round card or image corners.** Even 8px of radius on a card immediately softens the precision geometry and conflicts with the brand's structured, field-row visual metaphor.
- **Don't use bright or saturated accent colors.** The brand green is intentionally muted/olive. Replacing it with a vivid lime or emerald destroys the naturalist tone and reads as synthetic.
- **Don't shrink display type on desktop.** Sub-64px H2s on full-width sections create a visual vacuum; the design depends on typographic scale to fill dark canvas sections.
- **Don't omit the section marker SVG before uppercase labels.** Without the small rectangle mark, section opens lose their structural anchor and the page feels unfinished.
- **Don't use drop shadows on cards or buttons.** The system is explicitly shadow-free; tonal surface steps and photography handle all depth. Shadows introduce a UI-layer visual language inconsistent with the editorial identity.
- **Don't center all body copy.** Display headlines may center over full-bleed bands, but body copy and feature descriptions should be left-aligned. Center-aligning body text at length degrades readability and flattens information hierarchy.
- **Don't use colored or gradient text.** All typography is in `{colors.text-primary}` or `{colors.text-secondary}`. Gradient text or highlighted spans break the monochromatic type system.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 480px | Single-column layout; hamburger nav; display-xl headline scales to ~48px; hero video may become static image |
| Tablet | 480px–1024px | 2-column card grids; nav condenses; display-xl ~72px; footer collapses to 2×2 column layout |
| Desktop | 1024px–1440px | Full layout; 3-column cards; 5-column footer; display-xl at full 96–112px |
| Wide | > 1440px | Max-width container (~1280px) remains centered; outer canvas bleeds to viewport edge |

### Touch Targets
- `{component.button-ghost}` renders at minimum 48px tall × 160px wide — meets WCAG AA 44px minimum.
- `{component.nav-link}` touch areas are padded to minimum 44px height in mobile nav tray.
- `{component.text-input}` height is ~52px — comfortable for touch.

### Collapsing Strategy
- **Nav:** Hamburger icon (`menu-btn.svg`) at < 1024px triggers a full-screen overlay tray with stacked nav links and the CTA button. Overlay background matches `{colors.canvas}` or `{colors.surface-mid}`. Close button top-right.
- **Hero video:** On mobile, the background video may be replaced with a static `.webp` poster frame (mobile autoplay restrictions). The display-xl headline scales down to approximately 48–56px, maintaining prominence.
- **Card grids:** 3-up → 2-up → 1-up. Service list items restack vertically at mobile.
- **Type scale:** display-xl reduces ~45%; display-lg reduces ~30% at mobile. Label-uppercase and body-md stay constant — they are already readable at minimum sizes.
- **Scrolling ticker:** Continues to animate at all breakpoints; tag pill sizes may reduce slightly at mobile.
- **Footer:** 5-column grid collapses to 2×2 link groups + 1 logo column at tablet, then fully stacked 1-up at mobile with logo and tagline on top.

### Image Behavior
- Full-bleed photography fills 100vw at all breakpoints; no margin constraints.
- Feature photo cards maintain their aspect ratio (~4:5 or 1:1) at all sizes; images scale with the container.
- At mobile, "Why Choose Us" photo cards stack vertically — image top, text below — rather than side-by-side.
- Testimonial avatars remain circular at all sizes; size reduces from ~56px to ~44px on mobile.

---

## Known Gaps

- **Exact hex color values** were inferred from the dark-forest brand palette visible in page structure and imagery; precise hex values should be sampled directly from the Webflow Designer or exported CSS variables for production accuracy.
- **Font licensing:** The display serif face could not be confirmed from the HTML alone. It may be a licensed custom font served via Webflow's CDN. Cormorant Garamond is the recommended open-source substitute but tracking/weight adjustments may be needed to match the original.
- **Animated scroll states:** Nav transparency-to-solid on scroll, hover states on service-list-item rows, and the scrolling ticker speed/easing could not be confirmed from static fetch; these require live browser inspection.
- **Form validation states:** The contact form page was not audited; input error/success states, inline validation messages, and focus ring color are estimated from observed input style patterns.
- **Dark overlay opacity on video hero:** The exact RGBA overlay blend on the background video was not extractable from the HTML; visually estimated at rgba(0,0,0,0.45)–rgba(0,0,0,0.55).
- **Mobile nav tray animation:** Whether the mobile overlay slides in, fades, or appears instantly could not be confirmed without live browser interaction.