# ASTER Store Build Roadmap

Canonical project tracker for the House of Aster Shopify theme.

Read this before substantial Aster work. Update it after each completed milestone, verified sign-off, or agreed sequence change. Do not mark work complete without verification/sign-off, and do not build a speculative reusable component merely because it is numerically next if there is no proven storefront use case yet.

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
- Typography roles are explicit: Body is the default supporting/UI voice; Heading, Display, Subheading, Navigation, Button and Product-title roles are opt-in and must not leak through containers
- Custom fonts are registered centrally; Garet is one paired family with Book at 400 and Heavy at 700 so bold uses the real Heavy face
- Theme settings stay deliberately lean
- No routine per-section colour pickers
- No decorative border language
- No default shadows
- Motion is calm, editorial and purposeful
- Respect `prefers-reduced-motion`
- Build proven shared components first; defer speculative components until a real template/section needs them
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
- [x] Typography role ownership contract: supporting/microcopy defaults to Body; specialist roles are explicitly scoped
- [x] Garet Book/Heavy integrated as one real-weight family; no faux bold when Garet is used
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
- [x] Announcement typography explicitly consumes Body rather than Navigation
- [x] No rotating-slider machinery

## 2.2 Header — COMPLETE
- [x] Existing Skeleton header block retained and refactored rather than duplicated
- [x] True-centred logo with permanent burger launcher left and utility actions right
- [x] Header logo inherits active colour-scheme foreground colour
- [x] Search route, account trigger when enabled, and cart count
- [x] Sticky behaviour implemented with CSS only; announcement bar scrolls away above it
- [x] Burger navigation is the same desktop/mobile interaction rather than separate header systems
- [x] Header remains completely stationary when navigation opens; no duplicate menu topbar/logo
- [x] Navigation measures the real header bottom edge so announcement-present and announcement-absent states are both respected
- [x] Keyboard focus states and minimum 44px utility/menu targets
- [x] Colour-scheme support with no local colour pickers
- [x] Header JavaScript limited to menu lifecycle/geometry; no scroll listeners or navigation framework
- [x] Transparent/overlay mode deliberately deferred until homepage hero art direction is approved
- [x] Predictive/overlay search deliberately deferred to Phase 8

## 2.3 Navigation / mega menu — VISUAL TREATMENT COMPLETE / IA DEFERRED
- [x] One navigation tree rendered for desktop and mobile; no duplicated menu DOM
- [x] Non-modal `<dialog>` navigation panel begins beneath the real header rather than replacing it
- [x] Popular `jonsuh/hamburgers` Squeeze motion adapted locally under MIT licence; no package dependency
- [x] Same header burger morphs into the close cross in place and reverses on close
- [x] Escape close and focus return
- [x] Covered page content becomes inert while the panel is open; visible header remains interactive
- [x] Existing scroll-lock architecture reused
- [x] Direct search form sits at the top of the menu; predictive search remains deferred to Phase 8
- [x] Mobile menu account action uses the existing account SVG instead of a text footer link
- [x] Redundant menu-level Search / Account text footer removed
- [x] Current-page semantics and visible focus states
- [x] First-level child links already supported
- [x] Primary mega-menu labels consume Navigation typography; child links/popular searches/eyebrows consume Body
- [x] Desktop mega-menu composition signed off
- [x] Mobile composition signed off after device visual QA: search/account → first three popular searches → compact navigation → two editorial feature cards, with section separators and single-line child navigation
- [x] Mobile search reuses the same configurable affirmation typewriter and reduced-motion behaviour as desktop
- [x] Mobile navigation dialog remains vertically scrollable so the editorial cards naturally reward continued scrolling
- [x] Restrained hover motion: textual menu links shift right and editorial feature media lifts; hover motion is disabled for reduced-motion users
- [x] Reduced-motion fallback
- [ ] Define final navigation information architecture once the actual menu/catalogue structure is locked
- [ ] Refine deeper hierarchy/submenu behaviour only if the catalogue requires it

## 2.4 Footer — BUILT / FINAL EXPLICIT SIGN-OFF PENDING
- [x] Scheme-aware footer architecture
- [x] Brand mark/wordmark, “A calmer way forward” statement and supporting copy
- [x] Newsletter / “A slower inbox” treatment
- [x] Nested Shopify footer menu with clickable top-level headings
- [x] Desktop link-group treatment and mobile accordion behaviour
- [x] Contact and social links
- [x] Legal/policy links and configurable Cookies link
- [x] Payment icons integrated into the lower utility row
- [x] Copyright
- [x] 1400px alignment and shared page gutters
- [x] Colour-scheme support
- [ ] Final explicit visual sign-off before marking Phase 2.4 complete

---

# PHASE 3 — COMMERCE COMPONENT LIBRARY

## 3.1 Product card — COMPLETE FOR CURRENT SCOPE
- [x] Image, title, supporting copy and product type/eyebrow
- [x] Price/compare-at handling
- [x] Sale/sold-out architecture plus pre-order / coming-soon merchandising states
- [x] Desktop secondary-image hover for non-swatch products using the next product image
- [x] Variant-aware A/B secondary-image hover for products with Colour/Color swatches
- [x] Swatch selection updates variant, primary image, price/link and matching hover image
- [x] Selected-swatch secondary image preloads stealthily on hover-capable devices
- [x] Badge support
- [x] Restrained hover treatment
- [x] Mobile + accessibility treatment
- [x] Product-card background and product-image background exposed as independent Theme Settings after visual QA proved useful
- [x] Current styling/swatches signed off
- [ ] Judge.me rating/review integration — deliberately deferred until close to launch; do not hold Phase 3.1 open for this
- [ ] Quick-add only if a later real storefront use case proves it valuable

## 3.2 Collection card — DEFERRED UNTIL PROVEN USE CASE
A collection card is a navigational category tile, not a featured collection/product grid. Do not build it merely because it is next numerically. Build it when the homepage, a shop landing page or another real template actually needs category-level navigation.
- [ ] Image, title, optional supporting copy
- [ ] Hover + mobile treatment
- [ ] Add settings only after sign-off

## 3.3 Article card — DEFERRED UNTIL PROVEN USE CASE
Build when the Journal/blog index or another real content surface establishes the actual metadata and hierarchy required.
- [ ] Image, title, metadata decision, hover
- [ ] Add settings only after sign-off

## 3.4 Editorial card — DEFERRED UNTIL PROVEN USE CASE
Build when a homepage/content composition genuinely needs a reusable image + heading + copy + CTA card rather than designing it in isolation.
- [ ] Reusable image + heading + copy + CTA composition
- [ ] Colour-scheme support

### Phase 3 execution rule
The product card was worth building early because it underpins collections, featured products, related products and search. Collection/article/editorial cards are not treated the same way: they remain recorded here so they are not forgotten, but they should be implemented at the moment a real template proves their need.

---

# PHASE 4 — HOMEPAGE + GSAP ART DIRECTION

This phase remains important, but it now follows the core commerce/content journey rather than preceding it. Build the destination templates first so the homepage can link into real, finished experiences instead of speculative placeholders.

## 4.1 Storyboard first
- [ ] Agree narrative, hero, section order and motion/calm rhythm

## 4.2 Homepage build
- [ ] Hero
- [ ] Brand statement / manifesto
- [ ] Featured products
- [ ] Shop by ritual/moment/category — build a collection-card pattern here only if the actual IA needs it
- [ ] Editorial image-text section
- [ ] Product/ingredient/philosophy proof
- [ ] Reviews/social proof if available
- [ ] Journal teaser — build/reuse article cards here only after Journal requirements are known
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

# PHASE 5 — COLLECTION EXPERIENCE — IN PROGRESS
- [~] Collection hero/header — first implementation uses the collection title, optional Shopify collection description, product count and optional collection image; visual QA pending
- [~] Product grid using the signed-off shared product card — integrated into the real/default collection template; visual QA pending
- [~] Responsive columns — 4 desktop / 3 tablet / 2 mobile implemented; visual QA pending
- [ ] Sort, filters, active filters
- [~] Empty state and pagination/loading — empty state and styled native pagination implemented; loading treatment remains to be assessed when filtering/pagination behaviour is finalised
- [~] Colour-scheme support — first pass consumes the active global colour scheme with no local colour controls; verify during visual QA
- [~] Quiet motion and optional editorial support sections — collection header uses the existing restrained reveal foundation; further motion/editorial treatment remains deliberately minimal until visual QA
- [x] Use Shopify’s default/all-products collection as the immediate visual QA surface; no dedicated product-card QA page is required

# PHASE 6 — PRODUCT EXPERIENCE
- [ ] Desktop/mobile media gallery
- [ ] Title, price, variants, quantity, add to cart
- [ ] Dynamic checkout decision
- [ ] Inventory/delivery/returns messaging
- [ ] App/subscription compatibility if required
- [ ] Description, ingredients/details, accordions where useful
- [ ] Reviews, related products and rich storytelling sections
- [ ] Judge.me integration when the account/app is actually introduced close to launch
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
- [ ] Standard page foundation
- [ ] About/brand story
- [ ] Contact and FAQ
- [ ] Blog index and article
- [ ] Build/sign off article-card component here when real Journal metadata/layout requirements are known
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
- [ ] PDP-level swatch refinements, size guide, back in stock, wishlist
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
- [ ] Optional branded internal-page transition: scheme-aware full-screen veil with centred Aster mark; progressive enhancement only, preserve native back/forward navigation and respect reduced motion
- [ ] Final test: does every surface look like the same artist designed it?

# PHASE 18 — LAUNCH QA
- [ ] Device/browser matrix
- [ ] Navigation, forms, variants, cart, checkout handoff, search
- [ ] Empty/error states
- [ ] Accessibility, performance, SEO and analytics audits
- [ ] Password removal / launch procedure
- [ ] Post-launch monitoring plan

---

# AGREED IMPLEMENTATION ORDER FROM CURRENT POSITION

The phase numbers remain stable so earlier references do not become confusing, but the execution order is now explicitly:

1. **Phase 5 — Collection experience**
2. **Phase 6 — Product experience**
3. **Phase 7 — Cart**
4. **Phase 8 — Search + discovery**
5. **Phase 9 — Core page/content templates**
6. **Phase 4 — Homepage + GSAP art direction**, once its destination pages/components are real
7. Build **Phase 3.2 / 3.3 / 3.4** components on demand when one of those real surfaces proves the requirement
8. Continue through utility, clean-up, accessibility, performance, SEO, analytics, cross-template art direction and launch QA

This ordering deliberately prioritises the core customer journey — **Browse → Product → Cart → Checkout**, plus search and baseline content — before speculative navigational/editorial components.

---

# CURRENT POSITION

**Completed:** Phase 0, Phase 1, Phase 2.1 Announcement bar, Phase 2.2 Header and Phase 3.1 Product Card for its current launch scope. The product card includes variant swatches, paired variant hover imagery, non-swatch second-image hover, preloading of the newly selected swatch’s hover image, badges/state handling and independently configurable card/media backgrounds. Judge.me remains a deliberate pre-launch integration rather than unfinished Phase 3.1 work.

**Built but not formally closed:** Phase 2.4 Footer is implemented and visually refined, but remains open until explicit final sign-off. Phase 2.3 navigation’s visual treatment is signed off; final information architecture/deeper hierarchy remains deferred until catalogue/menu structure proves the need.

**Deferred, not forgotten:** Phase 3.2 Collection Card, Phase 3.3 Article Card and Phase 3.4 Editorial Card are intentionally postponed until their first real use case establishes the correct requirements.

**In progress:** Phase 5 — Collection Experience. The first real-template pass now includes an editorial collection header, optional collection description/image handling, product count, the signed-off shared product-card grid, responsive 4/3/2 columns, empty-state treatment and styled native pagination. These are implemented but remain deliberately marked partial until visual QA on the default/all-products collection.

**Next verification:** Review the real/default collection on desktop and mobile, refine the header/grid composition from screenshots, then move into sort, filters and active-filter behaviour. After Phase 5 is signed off, proceed to Product Experience → Cart → Search → Core Content Templates before the Homepage. The branded page-transition concept remains recorded for Phase 17.
