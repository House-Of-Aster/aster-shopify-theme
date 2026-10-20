# ASTER Store Build Roadmap

Canonical project tracker for the House of Aster Shopify theme.

Read this before substantial Aster work. Update it when a milestone is completed or the agreed sequence changes.

Status:
- `[x]` Complete
- `[~]` In progress / partial
- `[ ]` Not started

Art direction is governed by `ASTER_VISUAL_LANGUAGE.md`.

## North star

Build Aster as one coherent visual system from homepage through product, collection, cart, search and content pages.

The homepage gets the strongest GSAP choreography, but every template must feel like it came from the same artist.

Permanent architecture:
- 1400px maximum content width
- 20px desktop/tablet gutters
- 15px mobile gutters
- Wine `#6B2331` and cream `#E6D3BD` as core palette
- Theme settings stay lean
- Global colour schemes are the single source of truth for storefront colour
- No routine per-section colour pickers
- No decorative border language
- Motion is calm, editorial and purposeful
- Respect `prefers-reduced-motion`
- Build components first, then expose only settings proven useful

---

# PHASE 0 — FOUNDATION

## Password / pre-launch
- [x] Bespoke Aster waiting-list page
- [x] Launch countdown
- [x] Bear silhouette V2
- [x] Bear fixed desktop/mobile scale
- [x] Bear bottom anchor
- [x] Bear opacity + blur controls
- [x] Mobile logo clipping fix
- [x] British Poems WOFF2
- [x] Display-heading integration

## Global design foundations
- [x] Logo theme settings
- [x] One SVG logo asset
- [x] Theme-controlled SVG logo colour
- [x] Desktop/mobile logo width
- [x] Favicon
- [x] Typography system
- [x] Body role
- [x] Heading role
- [x] Display-heading role
- [x] Subheading role
- [x] Navigation role
- [x] Button typography role
- [x] Product-card-title role
- [x] Global colour-scheme system
- [x] Cream/wine starter scheme
- [x] Wine/cream starter scheme
- [x] Reusable colour variables
- [x] 1400px content architecture
- [x] Fixed desktop/mobile gutters
- [x] Removed Layout theme controls
- [x] Aster visual-language document
- [x] Global colour-governance rule

---

# PHASE 1 — DESIGN SYSTEM PRIMITIVES

## 1.1 Buttons — COMPLETE
- [x] Primary button primitive
- [x] Secondary text-action primitive
- [x] Theme Settings → Buttons
- [x] Only global control is button height
- [x] Default height 48px
- [x] Colours inherit from active colour scheme
- [x] Typography inherits from Typography → Buttons
- [x] No decorative borders
- [x] No radius/colour/padding settings
- [x] Subtle CSS hover state
- [x] Disabled state
- [x] `aria-disabled` state
- [x] `aria-busy` state
- [x] Keyboard focus state
- [x] Accessible mobile touch height
- [x] Existing skeleton product/search actions use the primitive

## 1.2 Form controls — NEXT
- [ ] Text/email/search input
- [ ] Textarea
- [ ] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Quantity selector
- [ ] Error state
- [ ] Success state
- [ ] Focus state
- [ ] Decide whether any global form settings are genuinely needed

## 1.3 Surface + spacing language
- [ ] Define card geometry without boxed/bordered treatment
- [ ] Define panel behaviour where panels are unavoidable
- [ ] Define shadow rule, preferably none/minimal
- [ ] Define image corner treatment
- [ ] Define desktop/mobile section-spacing rhythm
- [ ] Define editorial text measure

## 1.4 Motion foundation
- [ ] Add GSAP only when first required
- [ ] Add ScrollTrigger only if approved homepage concepts require it
- [ ] Define Aster easing/timing/stagger tokens
- [ ] Reusable text reveal
- [ ] Reusable image/mask reveal
- [ ] Reusable stagger utility
- [ ] Reduced-motion fallback
- [ ] Verify no CLS caused by motion

---

# PHASE 2 — GLOBAL CHROME

## 2.1 Announcement bar
- [ ] Single/stacked announcement architecture
- [ ] Colour scheme selector
- [ ] Link support
- [ ] Mobile behaviour
- [ ] Rotation only if commercially required

## 2.2 Header
- [ ] Desktop architecture
- [ ] Mobile architecture
- [ ] Global logo integration
- [ ] Navigation
- [ ] Search trigger
- [ ] Account trigger if enabled
- [ ] Cart trigger/count
- [ ] Sticky behaviour decision
- [ ] Overlay/transparent mode only if homepage art direction needs it
- [ ] Keyboard accessibility
- [ ] Mobile navigation drawer
- [ ] Colour-scheme support

## 2.3 Navigation / mega menu
- [ ] Standard dropdown
- [ ] Mega-menu option
- [ ] Optional editorial imagery
- [ ] Mobile accordion/drill-down equivalent
- [ ] Active + focus states

## 2.4 Footer
- [ ] Newsletter area
- [ ] Link columns
- [ ] Contact/legal links
- [ ] Social links
- [ ] Payment icons only if useful
- [ ] Copyright
- [ ] Colour-scheme support

---

# PHASE 3 — COMMERCE COMPONENT LIBRARY

## 3.1 Product card
- [ ] Product image
- [ ] Secondary-image hover decision
- [ ] Title
- [ ] Price + compare-at price
- [ ] Sale/sold-out state
- [ ] Badge architecture only if required
- [ ] Variant swatches only if catalogue requires them
- [ ] Quick-add decision
- [ ] Restrained hover motion
- [ ] Mobile behaviour
- [ ] Accessibility
- [ ] Add Product cards Theme Settings only after component is signed off

## 3.2 Collection card
- [ ] Image
- [ ] Title
- [ ] Optional supporting copy
- [ ] Hover treatment
- [ ] Mobile behaviour
- [ ] Add Collection cards settings only after sign-off

## 3.3 Article card
- [ ] Image
- [ ] Title
- [ ] Metadata decision
- [ ] Hover treatment
- [ ] Add Blog cards settings only after sign-off

## 3.4 Editorial card
- [ ] Reusable image + heading + copy + CTA composition
- [ ] Colour-scheme support
- [ ] Reusable across homepage and content pages

---

# PHASE 4 — HOMEPAGE + GSAP ART DIRECTION

## 4.1 Storyboard first
- [ ] Agree full page narrative
- [ ] Hero concept
- [ ] Section sequence
- [ ] Motion moments vs calm moments
- [ ] Cream/wine/image rhythm

## 4.2 Hero
- [ ] Desktop/mobile art direction
- [ ] Strong display typography
- [ ] Primary CTA
- [ ] Secondary CTA only if useful
- [ ] Restrained GSAP entrance
- [ ] Optional subtle depth/parallax
- [ ] No carousel without a strong commercial reason

## 4.3 Signature motion
Select a small number only.
- [ ] Masked image reveal
- [ ] Editorial text reveal
- [ ] Controlled image scale/parallax
- [ ] Optional pinned story moment
- [ ] Optional section colour transition
- [ ] Card/CTA micro-interactions

## 4.4 Core homepage content
Final list decided during storyboard.
- [ ] Hero
- [ ] Brand statement / manifesto
- [ ] Featured products
- [ ] Shop by category / ritual / moment
- [ ] Editorial image-text section
- [ ] Product/ingredient/philosophy proof
- [ ] Featured product/collection story
- [ ] Reviews/social proof if available
- [ ] Journal teaser
- [ ] Newsletter/footer handoff

## 4.5 Homepage QA
- [ ] Large desktop
- [ ] Laptop
- [ ] Tablet
- [ ] Mobile
- [ ] Reduced motion
- [ ] Performance
- [ ] CLS
- [ ] Scroll-jank

---

# PHASE 5 — COLLECTION EXPERIENCE

- [ ] Collection hero/header
- [ ] Title + description
- [ ] Optional collection imagery
- [ ] Product grid using shared product card
- [ ] Responsive columns
- [ ] Sort
- [ ] Filters
- [ ] Active filters
- [ ] Empty state
- [ ] Pagination/loading strategy
- [ ] Colour-scheme support
- [ ] Quiet motion consistent with homepage
- [ ] Supporting editorial sections

---

# PHASE 6 — PRODUCT EXPERIENCE

## Media
- [ ] Desktop gallery
- [ ] Mobile gallery/swipe
- [ ] Zoom/lightbox decision
- [ ] Video
- [ ] Variant media

## Product information
- [ ] Title
- [ ] Price/compare-at
- [ ] Variant picker
- [ ] Swatches only if needed
- [ ] Quantity
- [ ] Add to cart
- [ ] Dynamic checkout decision
- [ ] Inventory messaging
- [ ] Delivery/returns messaging
- [ ] App/subscription compatibility where required

## Product storytelling
- [ ] Description treatment
- [ ] Accordions where useful
- [ ] Ingredients/details
- [ ] Rich product sections
- [ ] Reviews
- [ ] Related/complementary products
- [ ] Recently viewed decision
- [ ] Restrained product-page motion
- [ ] Full edge-case QA

---

# PHASE 7 — CART

- [ ] Cart drawer shell
- [ ] Product lines
- [ ] Variant details
- [ ] Quantity controls
- [ ] Remove
- [ ] Price/savings
- [ ] Empty state
- [ ] Subtotal
- [ ] Checkout CTA
- [ ] Continue shopping
- [ ] Upsell decision
- [ ] Delivery-progress decision
- [ ] Drawer transition + focus trap
- [ ] Full cart page
- [ ] Add Cart Theme Settings only if proven necessary

---

# PHASE 8 — SEARCH + DISCOVERY

- [ ] Search overlay/drawer
- [ ] Predictive search
- [ ] Product/content results
- [ ] No-results state
- [ ] Keyboard controls
- [ ] Search results template
- [ ] Filtering/sorting where useful
- [ ] Pagination
- [ ] Add Search settings only after implementation

---

# PHASE 9 — CONTENT TEMPLATES

- [ ] Standard page
- [ ] About/brand storytelling
- [ ] Contact
- [ ] FAQ
- [ ] Blog index
- [ ] Article template
- [ ] Related editorial/product links
- [ ] Branded 404

All content templates must use the same art direction, colour schemes, typography, spacing and quiet motion language.

---

# PHASE 10 — CUSTOMER + UTILITY

Build only what Aster actually uses.

- [ ] Customer account entry/links if enabled
- [ ] Theme-controlled customer treatment where possible
- [ ] Gift card visual pass
- [ ] Password page launch-state transition
- [ ] Policy page typography
- [ ] Challenge/captcha compatibility

---

# PHASE 11 — OPTIONAL COMMERCE FEATURES

Only add after catalogue/operational need is proven.

- [ ] Colour swatches
- [ ] Size guide
- [ ] Back in stock
- [ ] Wishlist
- [ ] Quick view
- [ ] Quick add
- [ ] Compare
- [ ] Bundles
- [ ] Subscriptions
- [ ] Personalisation
- [ ] Cross-sells/upsells

Rule: no feature gets added because another theme happens to have it.

---

# PHASE 12 — THEME SETTINGS CLEAN-UP

Intended settings hierarchy as components mature:
1. Logo
2. Colours
3. Typography
4. Buttons
5. Product cards, only if needed
6. Collection cards, only if needed
7. Blog cards, only if needed
8. Cart, only if needed
9. Social media, once footer/header requires it
10. Search behaviour, once search exists
11. Native Custom CSS only if retained

- [ ] Remove remaining Skeleton/demo settings
- [ ] Remove duplicate controls
- [ ] Remove dead CSS variables
- [ ] Remove unused JS/assets
- [ ] Confirm every Theme Setting has a visible purpose

---

# PHASE 13 — ACCESSIBILITY

- [ ] Heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Accessible drawers/modals
- [ ] Focus trapping/restoration
- [ ] Colour contrast
- [ ] Form labels/errors
- [ ] Alt-text behaviour
- [ ] Reduced motion
- [ ] Touch targets

Accessibility is also checked during every component build.

---

# PHASE 14 — PERFORMANCE

- [ ] Establish performance budget
- [ ] Audit JS payload
- [ ] Audit CSS payload
- [ ] Lazy-load non-critical media
- [ ] Responsive images
- [ ] Font loading review
- [ ] GSAP loaded only where required
- [ ] Prevent CLS
- [ ] Core Web Vitals pass
- [ ] Remove dead Skeleton assets/code

---

# PHASE 15 — SEO + STRUCTURED DATA

- [ ] Semantic templates
- [ ] Product structured data
- [ ] Organisation/site structured data
- [ ] Article structured data
- [ ] Breadcrumb strategy
- [ ] Canonicals
- [ ] Pagination/indexing behaviour
- [ ] Social/meta output
- [ ] Heading and internal-linking review

---

# PHASE 16 — ANALYTICS + CONSENT

- [ ] Shopify analytics baseline
- [ ] GA/GTM decision
- [ ] Meta/advertising integrations if required
- [ ] Consent compatibility
- [ ] Ecommerce events
- [ ] Validate no duplicate tracking

---

# PHASE 17 — CROSS-TEMPLATE ART-DIRECTION PASS

- [ ] Homepage
- [ ] Product
- [ ] Collection
- [ ] Search
- [ ] Cart
- [ ] Pages
- [ ] Blog/article
- [ ] Utility templates

Final question for every surface: does it look like the same artist designed it?

---

# PHASE 18 — LAUNCH QA

- [ ] Device/browser matrix
- [ ] Navigation links
- [ ] Forms
- [ ] Product variants
- [ ] Cart
- [ ] Checkout handoff
- [ ] Search
- [ ] Empty/error states
- [ ] Accessibility audit
- [ ] Performance audit
- [ ] SEO audit
- [ ] Analytics validation
- [ ] Password removal / launch procedure
- [ ] Post-launch monitoring plan

---

# CURRENT POSITION

**Completed:** Phase 0 and Phase 1.1.

**Next:** Phase 1.2 — Form controls.
