# ASTER Store Build Roadmap

Canonical project tracker for the House of Aster Shopify theme.

Read this before substantial Aster work. Update it after every completed milestone, verified visual sign-off, meaningful implementation change or agreed sequence change. Do not rely on chat memory as the project ledger.

Status: `[x]` complete · `[~]` in progress/partial · `[ ]` not started

Art direction is governed by `ASTER_VISUAL_LANGUAGE.md`.

## North star

Build Aster as one coherent visual system from homepage through product, collection, cart, search and content pages. The homepage gets the strongest GSAP choreography, while every other template should feel like a quieter work by the same artist.

Permanent architecture:
- 1400px maximum content width
- 20px desktop/tablet gutters
- 15px mobile gutters
- Canonical adjacent-component gap: `clamp(22px, 2.5vw, 32px)` desktop/tablet and `18px` mobile
- Stronger hierarchy should use clean multiples of the canonical gap rather than unrelated one-off spacing values
- Master palette: Ivory `#F8F6EB`, Aster Red `#A52D34`, Wine `#6B2331`, Blush `#E8DAD2`; Blue `#3E6990` is reserved and not currently used
- Global colour schemes are the storefront colour source of truth
- Typography roles are explicit: Body by default; Heading, Display, Subheading, Navigation, Button and Product-title are opt-in
- Theme settings stay deliberately lean
- No routine per-section colour pickers
- No decorative border language or default shadows
- Motion is calm, editorial and purposeful
- Respect `prefers-reduced-motion`
- Build proven shared components first; defer speculative components until a real template/section needs them
- Non-critical media is lazy by default; true above-fold/LCP media is explicitly prioritised
- Responsive image sources and intrinsic dimensions are mandatory
- Section/component JavaScript should load only where required
- Connected-theme work is not considered deployed until both GitHub `main` and the actual ASTER Shopify MAIN theme are verified in parity

---

# PHASE 0 — FOUNDATION — COMPLETE

## Password / pre-launch
- [x] Bespoke waiting-list page and countdown
- [x] Aster Red `#A52D34` intro/fade transition
- [x] Password-page headings explicitly use Poet / British Poems
- [x] Bear silhouette V2 with bottom anchor, motion cadence and more frequent crossings
- [x] Lando-inspired ambient motion layer: pointer depth, canopy/background breathing, logo mask reveal, light sweep and kinetic countdown treatment
- [x] Motion calms around focused forms and respects reduced motion
- [x] Mobile logo clipping fix
- [x] Eight Shopify Content stain assets (`Stain-1.webp` through `Stain-8.webp`) used as one random static stain per page load
- [x] Random stain sits above the main background but below foreground/UI layers, uses `mix-blend-mode: multiply`, random fixed placement, one-third of the original rollout size and 37.5% opacity
- [x] British Poems WOFF2/display-heading integration

## Global design foundations
- [x] Logo settings: one SVG, colour control, desktop/mobile width, favicon
- [x] Typography roles: body, heading, display, subheading, navigation, buttons, product-card title
- [x] Heading case controls support normal, uppercase and lowercase treatments
- [x] Garet Book/Heavy registered as a real weight pair; no faux bold
- [x] Global reusable colour schemes
- [x] Master palette schemes: Ivory/light, Aster Red/brand, Blush/soft and Wine/deep; Blue reserved
- [x] Header/navigation, footer, collection and product-card treatments remapped to the master palette
- [x] 1400px content architecture with fixed gutters
- [x] Layout settings removed
- [x] Aster visual-language document
- [x] Global colour-governance rule

---

# PHASE 1 — DESIGN SYSTEM + PRE-CONTENT PERFORMANCE — COMPLETE

## 1.1 Buttons — COMPLETE
- [x] Primary filled action
- [x] Secondary text action
- [x] Theme Settings → Buttons contains height only
- [x] Default 48px height
- [x] Colours inherit from active scheme
- [x] Typography inherits from Typography → Buttons
- [x] Subtle hover lift/opacity shift
- [x] Disabled, busy and keyboard-focus states
- [x] Reduced-motion fallback

## 1.2 Form controls — COMPLETE
- [x] Password-page signup form adopted as visual reference
- [x] Text/email/search/password/tel/url/date/number inputs
- [x] Textarea and select
- [x] Checkbox and radio
- [x] Labels, help text and message primitives
- [x] Error, success-hook, focus and disabled states
- [x] Responsive rows/stacks
- [x] Colours derive from active scheme
- [x] Bespoke quantity stepper deferred until PDP/cart design

## 1.3 Surface + spacing language — COMPLETE
- [x] Cards remain open compositions rather than default boxed UI
- [x] Panels are exceptional rather than default
- [x] No default shadows or decorative borders
- [x] 12px media/image radius where framing is intentional
- [x] Canonical adjacent-component gap: `clamp(22px, 2.5vw, 32px)` desktop/tablet and `18px` mobile
- [x] Stronger hierarchy uses clean multiples of that gap
- [x] Standard section rhythm: `clamp(72px, 8vw, 120px)`
- [x] Compact section rhythm: `clamp(48px, 5.5vw, 80px)`
- [x] Generous/editorial rhythm: `clamp(96px, 10vw, 160px)`
- [x] Standard editorial measure: 62ch
- [x] Narrow editorial measure: 48ch

## 1.4 Motion foundation — COMPLETE
- [x] Aster timing/easing/distance/stagger tokens
- [x] Reusable text/up, fade and media/mask reveals
- [x] Reusable stagger groups
- [x] Native `IntersectionObserver` controller
- [x] Reveal-once behaviour
- [x] Shopify Theme Editor section-load support
- [x] Reduced-motion fallback
- [x] Transform/opacity/clip-path-first motion; avoid layout-shifting animation
- [x] GSAP/ScrollTrigger deliberately not loaded globally
- [x] GSAP/ScrollTrigger introduced only where an approved component requires them

## 1.5 Pre-content performance foundation — COMPLETE
- [x] Reusable image primitive lazy by default
- [x] Explicit `priority: true` path for genuine LCP media
- [x] Responsive `srcset`/`sizes`
- [x] Intrinsic image dimensions retained
- [x] Async image decoding
- [x] Product template prioritises only first product image
- [x] Article hero uses priority path; blog listing stays lazy
- [x] Future iframes lazy by default
- [x] Future video poster-first/conservative preload by default
- [x] Section/component scripts should remain conditional

---

# PHASE 2 — GLOBAL CHROME

## 2.1 Announcement bar — COMPLETE
- [x] Single-message static architecture
- [x] Optional whole-bar link
- [x] Colour-scheme selector only
- [x] Responsive/mobile treatment
- [x] Optional UK-time/DST-aware countdown
- [x] Optional hide-on-complete behaviour
- [x] Countdown JS loads only when required

## 2.2 Header — COMPLETE
- [x] Existing Skeleton header refactored rather than duplicated
- [x] True-centred logo, burger left, utilities right
- [x] Search/account/cart actions
- [x] Sticky CSS behaviour
- [x] Shared desktop/mobile burger navigation architecture
- [x] Header remains stationary when navigation opens
- [x] Keyboard focus and minimum 44px targets
- [x] Colour-scheme support
- [x] Header/menu currently use the brighter Aster Red `#A52D34` treatment
- [x] Transparent/overlay header deferred until homepage hero art direction
- [x] Predictive/overlay search deferred to Phase 8

## 2.3 Navigation / mega menu — VISUAL TREATMENT COMPLETE / IA DEFERRED
- [x] One navigation tree for desktop/mobile
- [x] Navigation panel begins beneath the real header
- [x] Squeeze burger motion adapted locally
- [x] Same burger morphs into close control
- [x] Escape close/focus return/inert covered content
- [x] Existing scroll-lock architecture reused
- [x] Direct search form at top
- [x] Mobile account action with icon
- [x] Current-page semantics/focus states
- [x] First-level child links supported
- [x] Desktop mega-menu composition signed off
- [x] Mobile composition signed off
- [x] Restrained hover motion and reduced-motion fallback
- [ ] Define final navigation IA once catalogue/menu structure is locked
- [ ] Refine deeper hierarchy only if catalogue requires it

## 2.4 Footer — COMPLETE
- [x] Scheme-aware footer architecture
- [x] Brand mark/wordmark, “A calmer way forward” and supporting copy
- [x] “A slower inbox” newsletter treatment
- [x] Nested Shopify footer menu with clickable top-level headings
- [x] Desktop links and mobile accordions
- [x] Contact/social links
- [x] Legal/policy/Cookies links
- [x] Payment icons and copyright
- [x] 1400px alignment/shared gutters
- [x] Desktop vertical rhythm tightened to the canonical site spacing cadence
- [x] Footer recoloured to the brighter Aster Red `#A52D34` treatment, with complementary Ivory/Wine/Blush values only from the master palette
- [x] Footer brand lock-up refined: supporting brand copy uses Body typography, logo/tagline spacing is tightened, and the footer logo receives a small proportional optical correction so its visible artwork aligns to the canonical content edge despite transparent source bounds
- [x] Current footer visual treatment explicitly signed off; revisit only as part of pre-launch cross-template/launch QA

---

# PHASE 3 — COMMERCE COMPONENT LIBRARY

## 3.1 Product card — COMPLETE / PRE-LAUNCH REVISIT
- [x] Product image, title, short supporting copy and product type/eyebrow
- [x] Product-card short description is editable product data via metafield definition `aster.card_description` (“Product card short description”), pinned for merchant editing
- [x] Existing short descriptions migrated/recognised under the metafield definition
- [x] Price/compare-at handling
- [x] Sale/sold-out plus pre-order/coming-soon states
- [x] Desktop second-image hover for products without swatches
- [x] Variant-aware A/B hover imagery for Colour/Color swatches
- [x] Swatch selection updates variant, primary image, price/link and hover image
- [x] Selected-swatch second image stealth-preloads on hover-capable devices
- [x] Swatches moved vertically into the product-media area so CTA baselines align across products with and without swatches
- [x] Badge support
- [x] Restrained hover treatment
- [x] Mobile/accessibility treatment
- [x] Card background and product-media background exposed as independent Theme Settings
- [x] Full-bleed photographic media treatment implemented for the live collection use case
- [x] Bottom real Shopify product-form CTA wired to selected variant and price: Add to cart / Pre-order / Coming soon / Sold out
- [x] Duplicate standalone bold price removed; price is carried by the CTA treatment
- [x] Temporary/fake review presentation allowed only for QA/theme-editor visualisation when genuine review data is absent
- [x] Current photographic/Bouf-inspired card art direction signed off for the current build; revisit during pre-launch cross-template/launch QA if required
- [ ] Judge.me rating/review integration deliberately deferred until close to launch

## 3.2 Collection card — DEFERRED UNTIL PROVEN USE CASE
Collection card = navigational category tile, not featured products.
- [ ] Image, title, optional supporting copy
- [ ] Hover/mobile treatment
- [ ] Add settings only after real use case/sign-off

## 3.3 Article card — DEFERRED UNTIL PROVEN USE CASE
- [ ] Build when Journal/blog index establishes actual metadata/layout requirements

## 3.4 Editorial card — DEFERRED UNTIL PROVEN USE CASE
- [ ] Build only when a real homepage/content composition proves the need

### Phase 3 execution rule
The product card was worth building early because it underpins collections, featured products, related products and search. Collection/article/editorial cards remain recorded but are built only when a real surface proves their requirements.

---

# PHASE 4 — HOMEPAGE + GSAP ART DIRECTION

Build after the core destination templates so the homepage links into real finished experiences.

## 4.1 Storyboard first
- [ ] Agree narrative, hero, section order and motion/calm rhythm
- [ ] Heavy inspiration: `landonorris.com`, translated into Aster’s calmer visual language rather than copied literally

## 4.2 Homepage build
- [ ] Hero
- [ ] Brand statement / manifesto
- [ ] Featured products
- [ ] Shop by ritual/moment/category; build Collection Card here only if IA needs it
- [ ] Editorial image-text section
- [ ] Product/ingredient/philosophy proof
- [ ] Reviews/social proof if available
- [ ] Journal teaser
- [ ] Newsletter/footer handoff

## 4.3 Signature motion
Choose deliberately, not all at once:
- [ ] Masked image reveal
- [ ] Editorial text reveal
- [ ] Controlled scale/parallax
- [ ] Optional pinned story moment
- [ ] Optional section colour transition
- [ ] CTA/card micro-interactions

## 4.4 Homepage QA
- [ ] Desktop/laptop/tablet/mobile
- [ ] Reduced motion
- [ ] Performance/CLS/scroll-jank
- [ ] LCP/eager-loading audit

---

# PHASE 5 — COLLECTION EXPERIENCE — COMPLETE
- [x] Collection intro follows the current mock-up direction: the collection banner sits directly beneath the header/navigation, constrained to the canonical 1400px content width; its top corners remain square against the navigation while the two bottom corners use the site-wide radius. Desktop preserves the uploaded image’s natural aspect ratio. On mobile (≤749px), the same collection image is reused inside a centred 2.2:1 crop using `object-fit: cover`, allowing one master artwork to serve both desktop and mobile when key subjects remain inside a central safe area. Title and description stack beneath it inside the same content width. The legacy global semantic `header { height: 5rem }` collision has been removed locally so the intro reserves its natural document height before the toolbar. Current visual treatment signed off; revisit during pre-launch QA if required
- [x] Collection motion-polish pass implemented using the existing Aster motion foundation: first-paint-safe masked/settled banner entrance, sequential title → description → toolbar reveal, and an initial-viewport card pass that makes any product cards already visible at load join the opening sequence automatically, even when only their tops are on-screen. Genuinely below-fold cards remain viewport-triggered, with pagination/empty-state reveals and `prefers-reduced-motion` fallback retained. No GSAP or additional dependency added; current treatment signed off
- [x] Real/default collection uses the shared photographic product card; current visual treatment signed off
- [x] Shopper-selectable 2/3/4-column desktop grid, 2/3 tablet options and fixed 2-column mobile; compatible preference persists
- [x] Collection toolbar: density controls left, product count centred, Sort by right
- [x] Shopify-native sort options implemented
- [x] Filters and active-filter treatment deliberately omitted: Aster’s small, curated catalogue does not warrant filtering UI; reconsider only if the catalogue expands materially
- [x] Toolbar uses Aster master palette
- [x] Collection spacing rhythm: toolbar → grid and final row → collection edge use same canonical gap; title/description spacing follows the approved stacked collection-intro composition
- [x] Empty state and styled native pagination implemented; current behaviour accepted for the catalogue size
- [x] Colour-scheme support implemented
- [x] Cross-device visual and functional QA explicitly signed off across desktop, tablet and mobile; revisit only during pre-launch QA if required
- [x] Default/all-products collection is the immediate product-card/collection QA surface; no dedicated QA page required

---

# PHASE 6 — PRODUCT EXPERIENCE — IN PROGRESS
- [x] Product-family architecture established: one shared Aster PDP system with dedicated Planner, future Insert/Accessory and future Supplement templates rather than one universal storytelling hierarchy
- [~] Planner template built from the approved desktop mock-up and assigned to The Aster Planner; visual/cross-device QA and final sign-off pending
- [x] Responsive media-gallery foundation: evenly distributed desktop thumbnail rail, mobile thumbnail strip, zoom/lightbox and variant-aware main image
- [x] Planner gallery/variant linkage refined after first visual QA: swatches now change the actual rendered hero `<img>` and selected thumbnail, while colour-specific thumbnails update the selected colour variant and preserve the exact clicked A/B image
- [x] Product title, colour variants, quantity and Add to Cart implemented; standalone product price deliberately omitted and selected-variant price carried inside the CTA. Planner/section eyebrow labels are now deliberately removed across the PDP hierarchy after visual QA
- [x] Shopify’s branded Shop Pay surface is deliberately not restyled because branded accelerated-checkout colours are provider-controlled. The Planner PDP instead uses an Aster-controlled Wine `Buy now` express action beneath the “Express checkout” divider; it adds the currently selected variant/quantity and hands the customer directly to Shopify Checkout, where eligible accelerated payment methods can still be offered
- [~] Shipping/returns/security/gifting reassurance treatment implemented; final wording/policy links remain subject to launch content review
- [x] Future subscription integration anticipated with a reserved purchase-plan slot and variant-price event architecture; selling-plan service/UI deliberately deferred until a subscription provider is chosen
- [x] Reusable PDP data model implemented with only four product-level fields: `aster.pdp_eyebrow`, `aster.pdp_intro`, `aster.pdp_sections` and `aster.pdp_related_products`
- [x] Reusable `Aster PDP Section` and `Aster PDP Item` metaobjects created so planner features, future accessory information and future supplement ingredients/benefits can share structured content primitives rather than spawning one-off metafields
- [x] `Aster PDP Item` supports an optional `linked_product` product reference so specification rows can resolve to real Shopify products without duplicated product data
- [x] Planner template now routes through a dedicated static `Aster Planner PDP` Theme Editor section. Product-specific copy remains in the reusable metafield/metaobject model; visual/editorial assets and presentation overrides are editable without code
- [x] “Our philosophy” has a Theme Editor image picker with explicit 1600 × 800px (2:1) guidance. Its image wrapper and rendered image are constrained to the editorial band with responsive `object-fit: cover`, preventing media from overflowing the section
- [x] Reassurance icons and all four product-highlight icon positions expose the reusable Aster line-icon library plus custom image/SVG upload overrides in the Theme Editor. Built-in options include truck, return, shield/check, gift, heart, leaf, book, calendar, diamond, parcel, clock, check-circle and sparkle; custom SVG/PNG/WebP uploads override the library choice
- [~] Planner “Three simple steps” remains in visual refinement: decorative step SVGs are removed, the section heading keeps the approved script voice, and the step numerals plus step titles now use Garet Heavy for a cleaner architectural hierarchy. Legacy step-icon editor controls remain dormant until Phase 12 clean-up. Visual sign-off pending
- [~] Planner storytelling populated with substantiated content: highlights, philosophy, usage steps, known catalogue details, FAQs and curated related products; richer “what’s inside”/specification content waits for real page-layout, material and production data rather than fabricated mock-up values
- [x] Planner section rhythm follows the signed-off collection cadence directly: `clamp(22px, 2.5vw, 32px)` desktop/tablet and `18px` mobile
- [x] Planner PDP surfaces are explicitly re-anchored to the canonical viewport column: maximum 1400px content width with 20px desktop/tablet and 15px mobile gutters, avoiding double-inset alignment from an ancestor wrapper
- [x] Planner “Our philosophy” uses compact horizontal editorial proportions rather than second-hero proportions: 300–390px desktop with tighter internal padding and natural auto-height stacking on mobile
- [x] Planner details/specifications turn linked products into crawlable internal product links plus desktop hover/focus quick-shop previews. The desktop preview now has a hover bridge so the pointer can move from the product link into the quick-shop without collapsing it; its media is square with the product image contained/reduced to suit tall products. Touch/no-hover devices expose only the direct product URL. The Planner Refill Pack and Aster Pouch are wired as the first live examples
- [x] Planner motion refinement pass implemented with the existing Aster motion foundation: composed above-fold media → copy → variants → purchase → express checkout → reassurance → highlights entrance, split story copy/media reveal, staggered usage/details/related content, animated FAQ open/close and reduced-motion fallbacks. FAQ heading text no longer shifts horizontally or performs a hover-only plus rotation; the existing opening/closing animation is retained. The related-products “Shop all products” text link now uses the standard restrained horizontal slide on hover/focus. No new motion dependency added
- [~] Related products use the curated product-reference metafield and signed-off shared product card. When exactly two related products are present, desktop/tablet centres the two normal cards inside a restrained 940px rail so the pair reads intentionally without stretching the cards or introducing a separate horizontal-card system. A future third product naturally restores the standard grid; mobile retains the compact card treatment. Visual sign-off pending
- [ ] Judge.me rating/review integration deliberately deferred until close to launch
- [ ] Full desktop/tablet/mobile visual QA, commerce edge-case QA and explicit sign-off

# PHASE 7 — CART
- [ ] Cart drawer and full cart page
- [ ] Lines, variants, quantity, remove, prices/savings
- [ ] Empty state, subtotal, checkout, continue shopping
- [ ] Upsell/progress only if commercially justified
- [ ] Accessible drawer transition/focus management

# PHASE 8 — SEARCH + DISCOVERY
- [ ] Search overlay/drawer
- [ ] Predictive search
- [ ] Product/content results
- [ ] No-results state
- [ ] Keyboard controls
- [ ] Search results template
- [ ] Filtering/sorting/pagination where useful

# PHASE 9 — CONTENT TEMPLATES
- [ ] Standard page foundation
- [ ] About/brand story
- [ ] Contact and FAQ
- [ ] Blog index/article
- [ ] Article-card component when Journal requirements are known
- [ ] Related editorial/product links
- [ ] Branded 404

# PHASE 10 — CUSTOMER + UTILITY
Build only what Aster actually uses.
- [ ] Customer account treatment if enabled
- [ ] Gift card visual pass
- [ ] Password-page launch transition
- [ ] Policy typography
- [ ] Challenge/captcha compatibility

# PHASE 11 — OPTIONAL COMMERCE FEATURES
Only after operational/catalogue need is proven.
- [ ] PDP swatch refinements, size guide, back in stock, wishlist
- [ ] Quick view/add, compare, bundles
- [ ] Subscriptions, personalisation, cross-sells/upsells

# PHASE 12 — THEME SETTINGS + CODE CLEAN-UP
- [ ] Add component settings only where sign-off proves value
- [ ] Remove remaining Skeleton/demo settings
- [ ] Remove duplicate controls/dead variables
- [ ] Remove unused JS/CSS/assets
- [ ] Confirm every Theme Setting has a visible purpose

# PHASE 13 — ACCESSIBILITY
- [ ] Heading hierarchy, keyboard navigation/focus
- [ ] Drawers/modals/focus restoration
- [ ] Contrast, labels/errors, alt behaviour
- [ ] Reduced motion/touch targets

# PHASE 14 — PERFORMANCE VALIDATION
- [ ] Set/validate performance budget against real templates
- [ ] JS/CSS payload audit
- [ ] Validate eager/lazy/fetch-priority decisions
- [ ] Responsive media/`sizes` audit
- [ ] Assess safe `content-visibility` candidates
- [ ] Iframe/video loading audit
- [ ] Font loading review
- [ ] Confirm GSAP/ScrollTrigger only ship where required
- [ ] Core Web Vitals / CLS / INP pass
- [ ] Remove dead Skeleton code/assets

# PHASE 15 — SEO + STRUCTURED DATA
- [ ] Semantic templates/headings
- [ ] Product, organisation/site and article structured data
- [ ] Breadcrumbs, canonicals, pagination/indexing
- [ ] Social/meta output and internal-linking review

# PHASE 16 — ANALYTICS + CONSENT
- [ ] Shopify analytics baseline
- [ ] GA/GTM/advertising integrations if required
- [ ] Consent compatibility/ecommerce events
- [ ] Validate no duplicate tracking

# PHASE 17 — CROSS-TEMPLATE ART-DIRECTION PASS
- [ ] Homepage, product, collection, search, cart, content and utility templates
- [ ] Optional branded internal-page transition: scheme-aware full-screen veil with centred Aster mark; preserve native back/forward and reduced motion
- [ ] Final coherence check: every surface should feel designed by the same artist

# PHASE 18 — LAUNCH QA
- [ ] Device/browser matrix
- [ ] Navigation, forms, variants, cart, checkout handoff, search
- [ ] Empty/error states
- [ ] Accessibility, performance, SEO and analytics audits
- [ ] Password removal / launch procedure
- [ ] Post-launch monitoring plan

---

# AGREED IMPLEMENTATION ORDER FROM CURRENT POSITION

Phase numbers remain stable for reference. Actual execution order is:

1. **Phase 6 — Product Experience**
2. **Phase 7 — Cart**
3. **Phase 8 — Search + Discovery**
4. **Phase 9 — Core Page/Content Templates**
5. **Phase 4 — Homepage + GSAP Art Direction**, once destination pages/components are real
6. Build **Phase 3.2 / 3.3 / 3.4** components on demand when a real surface proves the requirement
7. Continue through utility, clean-up, accessibility, performance, SEO, analytics, cross-template art direction and launch QA

This deliberately prioritises the core customer journey: **Browse → Product → Cart → Checkout**, plus search and baseline content, before speculative navigational/editorial components.

---

# CURRENT POSITION — 23 OCTOBER 2026

**Completed foundations:** Phase 0 and Phase 1 are complete. Phase 2.1 Announcement Bar, Phase 2.2 Header and Phase 2.4 Footer are complete. Phase 2.3 navigation’s visual treatment is signed off; final information architecture/deeper hierarchy remains deferred.

**Password/pre-launch:** The waiting-list/countdown page now has the Aster Red intro, Poet headings, Lando-inspired ambient motion, more frequent bear crossings and a static random stain chosen from eight Shopify Content files. The stain implementation is complete at one-third of the original rollout size, 37.5% opacity and multiply blend mode.

**Footer:** The footer is fully built and visually signed off for the current build. It uses the canonical spacing rhythm and the brighter Aster Red treatment requested to match the header/navigation, using only complementary colours from the approved Aster palette. Supporting brand copy uses Body typography rather than Poet/Heading; the logo/tagline lock-up is tightened and the SVG receives a small proportional optical correction so its visible artwork aligns to the canonical content edge despite transparent source bounds. Any further adjustment is deferred to pre-launch cross-template/launch QA.

**Product card:** Core architecture and current photographic/Bouf-inspired art direction are signed off for the current build. The live collection treatment uses photographic full-bleed media, vertical swatches inside the image area, aligned bottom CTAs, variant-aware hover images and real Shopify product forms. The duplicate standalone price has been removed. Short card copy is merchant-editable through the pinned product metafield `aster.card_description`. Temporary review visuals remain QA-only until Judge.me is introduced near launch. Revisit only during pre-launch cross-template/launch QA if required.

**Collection:** Phase 5 is complete. The collection banner, responsive mobile crop, title/description composition, motion treatment, shared photographic product-card presentation, grid-density controls, product count, sorting, spacing, empty state, pagination and colour-scheme handling are accepted across desktop, tablet and mobile. Filters are deliberately omitted because Aster’s catalogue is intentionally small and curated; adding filter UI would introduce complexity without solving a meaningful discovery problem. Reconsider filters only if the catalogue expands materially. The collection and product cards should now be revisited only during pre-launch cross-template/launch QA if required.

**Active focus:** Phase 6 Product Experience remains in visual refinement. The dedicated `product.planner` template is assigned to The Aster Planner and routes through an editable `Aster Planner PDP` Theme Editor section. Product-specific copy remains in the reusable metafield/metaobject model, while visual art direction is editable in the theme: the Philosophy image has a 1600 × 800px upload target and is contained inside the compact editorial band; reassurance/highlight icons retain the Aster SVG/custom-upload system, while the three-step section now removes the visible SVGs and uses clean Garet Heavy numerals and step titles beneath the script section heading. The provider-branded purple Shop Pay surface has been removed from the PDP because Shopify does not permit branded-wallet recolouring; the page instead uses an Aster Wine `Buy now` express action that takes the selected variant/quantity straight to Shopify Checkout, where eligible accelerated payment methods remain available. Latest visual QA removes the product/section eyebrow labels, re-anchors all PDP surfaces to the canonical 1400px viewport column with 20px/15px gutters, makes linked-product desktop quick shops reliably traversable with square contained media while touch devices remain URL-only, removes FAQ text-shift hover behaviour while retaining the accordion animation, gives “Shop all products” the standard subtle horizontal slide, and presents exactly two “Complete the ritual” products as the normal shared cards centred inside a 940px desktop/tablet rail rather than an incomplete three-column grid or bespoke horizontal rows. A third related product naturally restores the standard grid. These latest step/related-product treatments are implemented and verified on ASTER MAIN but remain awaiting visual sign-off; broader cross-device QA and explicit Planner sign-off remain next.

**Deferred, not forgotten:** Collection Card, Article Card and Editorial Card remain deliberately deferred until a real surface proves the requirement.

**After Phase 6:** Cart → Search → Core Content Templates → Homepage/GSAP art direction.

**Verification rule:** Before reporting connected-theme code as implemented, confirm the current GitHub `main` and the corresponding files on the actual ASTER Shopify MAIN theme are in parity.