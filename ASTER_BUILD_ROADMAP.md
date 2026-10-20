# ASTER Store Build Roadmap

Canonical project tracker for the House of Aster Shopify theme.

Read this before substantial Aster work. Update it after each completed milestone or agreed sequence change.

Status: `[x]` complete · `[~]` in progress/partial · `[ ]` not started

Art direction is governed by `ASTER_VISUAL_LANGUAGE.md`.

## North star

Build Aster as one coherent visual system from homepage through product, collection, cart, search and content pages. The homepage gets the strongest GSAP choreography, while every other template should feel like a quieter work by the same artist.

Permanent architecture:
- 1400px maximum content width
- 20px desktop/tablet gutters
- 15px mobile gutters
- Wine `#6B2331` and cream `#E6D3BD` as the core palette
- Global colour schemes are the single source of truth for storefront colour
- Theme settings stay deliberately lean
- No routine per-section colour pickers
- No decorative border language
- No default shadows
- Motion is calm, editorial and purposeful
- Respect `prefers-reduced-motion`
- Build components first, then expose only settings proven useful
- Non-critical media is lazy by default
- Genuine above-fold/LCP media is explicitly prioritised rather than inferred globally
- Responsive image sources and intrinsic dimensions are mandatory
- Section/component JavaScript should load only where it is actually required

---

# PHASE 0 — FOUNDATION — COMPLETE

## Password / pre-launch
- [x] Bespoke waiting-list page and countdown
- [x] Bear silhouette V2, fixed sizing, bottom anchor, opacity and blur
- [x] Mobile logo clipping fix
- [x] British Poems WOFF2 and display-heading integration

## Global design foundations
- [x] Logo settings: one SVG, colour control, desktop/mobile width, favicon
- [x] Typography roles: body, heading, display, subheading, navigation, buttons, product-card title
- [x] Global reusable colour schemes
- [x] Cream/wine and wine/cream starter schemes
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
- [x] Colours inherit from active colour scheme
- [x] Typography inherits from Typography → Buttons
- [x] No decorative borders or radius/padding/colour settings
- [x] Subtle CSS hover lift + opacity shift
- [x] Disabled, busy and keyboard-focus states
- [x] Reduced-motion fallback

## 1.2 Form controls — COMPLETE
- [x] Password-page signup form adopted as visual reference
- [x] Text/email/search/password/tel/url/date/number inputs
- [x] Textarea and select
- [x] Checkbox and radio
- [x] Labels, help text and message primitives
- [x] Error, success-hook, focus and disabled states
- [x] Responsive form rows/stacks
- [x] Colours derive from active colour scheme
- [x] No decorative field borders
- [x] No Forms Theme Settings group
- [x] Bespoke quantity stepper deferred until PDP/cart design

## 1.3 Surface + spacing language — COMPLETE
- [x] Cards remain open compositions, not boxes
- [x] Panels are exceptional rather than default
- [x] No default shadows
- [x] No decorative borders
- [x] 12px media/image corner treatment where framing is wanted
- [x] Standard section rhythm: `clamp(72px, 8vw, 120px)`
- [x] Compact section rhythm: `clamp(48px, 5.5vw, 80px)`
- [x] Generous/editorial rhythm: `clamp(96px, 10vw, 160px)`
- [x] Standard editorial measure: 62ch
- [x] Narrow editorial measure: 48ch
- [x] No Surface/Layout Theme Settings added

## 1.4 Motion foundation — COMPLETE
- [x] Aster timing, easing, distance and stagger tokens
- [x] Reusable text/up reveal via `data-aster-reveal`
- [x] Reusable fade reveal
- [x] Reusable media/mask reveal
- [x] Reusable stagger groups via `data-aster-stagger`
- [x] Native `IntersectionObserver` controller
- [x] Reveal-once behaviour
- [x] Shopify Theme Editor section-load support
- [x] Reduced-motion fallback
- [x] Transform/opacity/clip-path only: no layout-shifting motion
- [x] Progressive enhancement: unhooked content remains static
- [x] GSAP deliberately not loaded globally
- [x] ScrollTrigger deliberately not loaded globally
- [x] GSAP/ScrollTrigger will be introduced only where an approved component requires them

## 1.5 Pre-content performance foundation — COMPLETE
- [x] Reusable image primitive is lazy by default
- [x] Explicit `priority: true` path sets eager loading + high fetch priority for genuine LCP media
- [x] Responsive `srcset`/`sizes` support through Shopify image rendering
- [x] Intrinsic image dimensions retained to protect CLS
- [x] Async image decoding
- [x] Product template prioritises only the first product image; later gallery media stays lazy
- [x] Article hero imagery uses the priority path
- [x] Blog listing imagery stays lazy
- [x] Future iframes are lazy by default
- [x] Future video uses poster-first/conservative preload by default; autoplay only when art direction justifies it
- [x] Future section/component scripts should be conditional rather than added to a monolithic global bundle
- [x] GSAP/ScrollTrigger remain conditional, not global
- [x] `content-visibility`/render deferral will be assessed once real section wrappers exist; do not apply blindly to sticky, measurement-driven or GSAP sections

---

# PHASE 2 — GLOBAL CHROME

## 2.1 Announcement bar — COMPLETE
- [x] Single-message static architecture
- [x] Optional whole-bar link
- [x] Global colour-scheme selector only; no local colour controls
- [x] Responsive/mobile treatment
- [x] Optional countdown timer
- [x] Countdown date and time settings grouped in Theme Editor
- [x] UK-time / daylight-saving-aware countdown logic
- [x] Optional hide-on-complete behaviour
- [x] Countdown JavaScript loads only when a configured countdown is present
- [x] No rotating-slider machinery

## 2.2 Header — COMPLETE
- [x] Existing Skeleton header block retained and refactored rather than duplicated
- [x] True-centred logo with desktop navigation and utility actions
- [x] Header logo inherits active colour-scheme foreground colour
- [x] Search route, account trigger when enabled, and cart count
- [x] Sticky behaviour implemented with CSS only; announcement bar scrolls away above it
- [x] Native-details mobile navigation drawer with existing scroll-lock architecture
- [x] Mobile account/search routes remain available when utility icons are reduced
- [x] Keyboard focus states and minimum 44px utility targets
- [x] Colour-scheme support with no local colour pickers
- [x] No header JavaScript added
- [x] Transparent/overlay mode deliberately deferred until homepage hero art direction is approved
- [x] Predictive/overlay search deliberately deferred to Phase 8

## 2.3 Navigation / mega menu — NEXT
- [ ] Standard desktop dropdown
- [ ] Mega-menu option if useful
- [ ] Optional editorial imagery
- [ ] Mobile hierarchy refinement where useful
- [ ] Active/focus states

## 2.4 Footer
- [ ] Newsletter
- [ ] Link columns
- [ ] Contact/legal/social
- [ ] Payment icons only if useful
- [ ] Copyright
- [ ] Colour-scheme support

---

# PHASE 3 — COMMERCE COMPONENT LIBRARY

## 3.1 Product card
- [ ] Image, title, price/compare-at, sale/sold-out state
- [ ] Secondary-image hover decision
- [ ] Badge/swatches/quick-add only if catalogue proves need
- [ ] Restrained hover motion
- [ ] Mobile + accessibility
- [ ] Add Theme Settings only after sign-off

## 3.2 Collection card
- [ ] Image, title, optional supporting copy
- [ ] Hover + mobile treatment
- [ ] Add settings only after sign-off

## 3.3 Article card
- [ ] Image, title, metadata decision, hover
- [ ] Add settings only after sign-off

## 3.4 Editorial card
- [ ] Reusable image + heading + copy + CTA composition
- [ ] Colour-scheme support

---

# PHASE 4 — HOMEPAGE + GSAP ART DIRECTION

## 4.1 Storyboard first
- [ ] Agree narrative, hero, section order and motion/calm rhythm

## 4.2 Homepage build
- [ ] Hero
- [ ] Brand statement / manifesto
- [ ] Featured products
- [ ] Shop by ritual/moment/category
- [ ] Editorial image-text section
- [ ] Product/ingredient/philosophy proof
- [ ] Reviews/social proof if available
- [ ] Journal teaser
- [ ] Newsletter/footer handoff

## 4.3 Signature motion
Select only a small number:
- [ ] Masked image reveal
- [ ] Editorial text reveal
- [ ] Controlled scale/parallax
- [ ] Optional pinned story moment
- [ ] Optional section colour transition
- [ ] CTA/card micro-interactions

## 4.4 Homepage QA
- [ ] Desktop/laptop/tablet/mobile
- [ ] Reduced motion
- [ ] Performance, CLS and scroll-jank
- [ ] Verify only true LCP/above-fold media is eager
- [ ] Verify below-fold media does not compete for initial bandwidth

---

# PHASE 5 — COLLECTION EXPERIENCE
- [ ] Collection hero/header
- [ ] Product grid using shared product card
- [ ] Responsive columns
- [ ] Sort, filters, active filters
- [ ] Empty state and pagination/loading
- [ ] Colour-scheme support
- [ ] Quiet motion and optional editorial support sections

# PHASE 6 — PRODUCT EXPERIENCE
- [ ] Desktop/mobile media gallery
- [ ] Title, price, variants, quantity, add to cart
- [ ] Dynamic checkout decision
- [ ] Inventory/delivery/returns messaging
- [ ] App/subscription compatibility if required
- [ ] Description, ingredients/details, accordions where useful
- [ ] Reviews, related products and rich storytelling sections
- [ ] Full edge-case QA

# PHASE 7 — CART
- [ ] Cart drawer and full cart page
- [ ] Lines, variants, quantity, remove, prices/savings
- [ ] Empty state, subtotal, checkout, continue shopping
- [ ] Upsell/progress only if commercially justified
- [ ] Accessible drawer transition and focus management

# PHASE 8 — SEARCH + DISCOVERY
- [ ] Search overlay/drawer
- [ ] Predictive search
- [ ] Product/content results
- [ ] No-results state
- [ ] Keyboard controls
- [ ] Search results template
- [ ] Filtering/sorting/pagination where useful

# PHASE 9 — CONTENT TEMPLATES
- [ ] Standard page
- [ ] About/brand story
- [ ] Contact and FAQ
- [ ] Blog index and article
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
- [ ] Swatches, size guide, back in stock, wishlist
- [ ] Quick view/add, compare, bundles
- [ ] Subscriptions, personalisation, cross-sells/upsells

# PHASE 12 — THEME SETTINGS + CODE CLEAN-UP
- [ ] Add component settings only where sign-off proves value
- [ ] Remove remaining Skeleton/demo settings
- [ ] Remove duplicate controls and dead variables
- [ ] Remove unused JS/CSS/assets
- [ ] Confirm every Theme Setting has a visible purpose

# PHASE 13 — ACCESSIBILITY
- [ ] Heading hierarchy, keyboard navigation and focus
- [ ] Drawers/modals and focus restoration
- [ ] Contrast, labels/errors, alt behaviour
- [ ] Reduced motion and touch targets

# PHASE 14 — PERFORMANCE VALIDATION
The architecture starts now; this phase is the final real-world audit once the store exists.
- [ ] Set/validate performance budget against built templates
- [ ] JS/CSS payload audit
- [ ] Validate eager/lazy/fetch-priority decisions against real LCP candidates
- [ ] Responsive media and `sizes` audit across breakpoints
- [ ] Assess safe `content-visibility` candidates for static below-fold sections
- [ ] Iframe/video loading audit
- [ ] Font loading review
- [ ] Confirm GSAP/ScrollTrigger only ship where required
- [ ] Core Web Vitals / CLS / INP pass
- [ ] Remove dead Skeleton code and unused assets

# PHASE 15 — SEO + STRUCTURED DATA
- [ ] Semantic templates and headings
- [ ] Product, organisation/site and article structured data
- [ ] Breadcrumbs, canonicals, pagination/indexing
- [ ] Social/meta output and internal-linking review

# PHASE 16 — ANALYTICS + CONSENT
- [ ] Shopify analytics baseline
- [ ] GA/GTM and advertising integrations if required
- [ ] Consent compatibility and ecommerce events
- [ ] Validate no duplicate tracking

# PHASE 17 — CROSS-TEMPLATE ART-DIRECTION PASS
- [ ] Homepage, product, collection, search, cart, content and utility templates
- [ ] Final test: does every surface look like the same artist designed it?

# PHASE 18 — LAUNCH QA
- [ ] Device/browser matrix
- [ ] Navigation, forms, variants, cart, checkout handoff, search
- [ ] Empty/error states
- [ ] Accessibility, performance, SEO and analytics audits
- [ ] Password removal / launch procedure
- [ ] Post-launch monitoring plan

---

# CURRENT POSITION

**Completed:** Phase 0, Phase 1, Phase 2.1 Announcement bar and Phase 2.2 Header.

**Next:** Phase 2.3 — Navigation / mega menu.
