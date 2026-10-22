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

## 2.4 Footer — BUILT / FINAL EXPLICIT SIGN-OFF PENDING
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
- [ ] Final explicit visual sign-off before marking Phase 2.4 complete

---

# PHASE 3 — COMMERCE COMPONENT LIBRARY

## 3.1 Product card — CORE COMPLETE / PHOTOGRAPHIC TREATMENT IN VISUAL QA
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
- [~] Current photographic/Bouf-inspired card art direction remains in visual QA
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

# PHASE 5 — COLLECTION EXPERIENCE — IN PROGRESS
- [~] Collection intro follows the current mock-up direction: the collection banner sits directly beneath the header/navigation, constrained to the canonical 1400px content width; its top corners remain square against the navigation while the two bottom corners use the site-wide radius. Desktop preserves the uploaded image’s natural aspect ratio. On mobile (≤749px), the same collection image is reused inside a centred 2.2:1 crop using `object-fit: cover`, allowing one master artwork to serve both desktop and mobile when key subjects remain inside a central safe area. Title and description stack beneath it inside the same content width. The legacy global semantic `header { height: 5rem }` collision has been removed locally so the intro reserves its natural document height before the toolbar. Visual QA pending
- [~] Real/default collection uses the shared photographic product card; visual QA pending
- [~] Shopper-selectable 2/3/4-column desktop grid, 2/3 tablet options and fixed 2-column mobile; compatible preference persists
- [~] Collection toolbar: density controls left, product count centred, Sort by right
- [~] Shopify-native sort options implemented
- [ ] Filters and active-filter treatment — next functional collection task
- [~] Toolbar uses Aster master palette
- [~] Collection spacing rhythm: toolbar → grid and final row → collection edge use same canonical gap; title/description spacing now follows the approved stacked collection-intro composition
- [~] Empty state and styled native pagination implemented; loading behaviour to be finalised with filters/pagination
- [~] Colour-scheme support implemented; final QA pending
- [x] Default/all-products collection is the immediate product-card/collection QA surface; no dedicated QA page required

---

# PHASE 6 — PRODUCT EXPERIENCE
- [ ] Desktop/mobile media gallery
- [ ] Title, price, variants, quantity, add to cart
- [ ] Dynamic checkout decision
- [ ] Inventory/delivery/returns messaging
- [ ] App/subscription compatibility if required
- [ ] Description/details/accordions
- [ ] Reviews, related products and storytelling sections
- [ ] Judge.me when account/app is introduced near launch
- [ ] Full edge-case QA

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

1. **Finish Phase 5 — Collection Experience**
2. **Phase 6 — Product Experience**
3. **Phase 7 — Cart**
4. **Phase 8 — Search + Discovery**
5. **Phase 9 — Core Page/Content Templates**
6. **Phase 4 — Homepage + GSAP Art Direction**, once destination pages/components are real
7. Build **Phase 3.2 / 3.3 / 3.4** components on demand when a real surface proves the requirement
8. Continue through utility, clean-up, accessibility, performance, SEO, analytics, cross-template art direction and launch QA

This deliberately prioritises the core customer journey: **Browse → Product → Cart → Checkout**, plus search and baseline content, before speculative navigational/editorial components.

---

# CURRENT POSITION — 22 OCTOBER 2026

**Completed foundations:** Phase 0 and Phase 1 are complete. Phase 2.1 Announcement Bar and Phase 2.2 Header are complete. Phase 2.3 navigation’s visual treatment is signed off; final information architecture/deeper hierarchy remains deferred.

**Password/pre-launch:** The waiting-list/countdown page now has the Aster Red intro, Poet headings, Lando-inspired ambient motion, more frequent bear crossings and a static random stain chosen from eight Shopify Content files. The stain implementation is complete at one-third of the original rollout size, 37.5% opacity and multiply blend mode.

**Footer:** The footer is fully built, uses the canonical spacing rhythm and has received the brighter Aster Red treatment requested to match the header/navigation, using only complementary colours from the approved Aster palette. It remains open solely for final explicit visual sign-off.

**Product card:** Core architecture is complete. The live collection treatment now uses photographic full-bleed media, vertical swatches inside the image area, aligned bottom CTAs, variant-aware hover images and real Shopify product forms. The duplicate standalone price has been removed. Short card copy is merchant-editable through the pinned product metafield `aster.card_description`. Temporary review visuals remain QA-only until Judge.me is introduced near launch. Current Bouf-inspired styling remains in visual QA.

**Collection:** Phase 5 is the active build phase. The earlier two-column editorial collection-intro treatment and subsequent viewport-wide banner treatment were superseded after visual review. The current mock-up direction is implemented: the collection banner sits immediately beneath the header/navigation but is constrained to the canonical 1400px page width, with square top corners and the site-wide radius on the two bottom corners. Desktop preserves the uploaded collection image’s natural aspect ratio. On mobile at 749px and below, the same uploaded collection image is displayed inside a centred 2.2:1 frame using `object-fit: cover`, deliberately cropping the expendable left/right bleed so one master Photoshop artwork can serve both desktop and mobile; important products/content should remain within the central mobile-safe area. The collection title and description stack beneath it inside the same content width, followed by the existing toolbar and product grid. A previous overlap bug was traced to the legacy global Skeleton rule `header { height: 5rem }`, which had constrained the collection intro because it used a semantic `<header>` wrapper; the intro now uses a neutral local wrapper and reserves its natural height. Product grid, density controls, product count, sorting, spacing, empty state and pagination remain implemented. This revised treatment still requires explicit visual approval. **Filters and active-filter behaviour remain the next outstanding functional task**, followed by cross-device visual QA and final Phase 5 sign-off.

**Deferred, not forgotten:** Collection Card, Article Card and Editorial Card remain deliberately deferred until a real surface proves the requirement.

**After Phase 5:** Product Experience → Cart → Search → Core Content Templates → Homepage/GSAP art direction.

**Verification rule:** Before reporting connected-theme code as implemented, confirm the current GitHub `main` and the corresponding files on the actual ASTER Shopify MAIN theme are in parity.