# ASTER Store Build Roadmap

Canonical build tracker for the House of Aster Shopify theme.

Status key:
- [x] Complete
- [ ] Not started
- [~] In progress / partially complete

## North star

Build Aster as one coherent visual system from homepage through product, collection, search, cart and content pages.

The homepage should use GSAP with restraint: polished motion, strong reveals, elegant transitions and a few memorable interactions rather than constant animation. Every other template should feel designed by the same artist through shared typography, colour, spacing, surfaces, buttons, card geometry, image treatment and motion language.

Core principles:
- Premium, editorial, warm and distinctive.
- Wide 1400px content architecture.
- Permanent gutters: 20px desktop/tablet, 15px mobile.
- Wine red #6B2331 and cream #E6D3BD are the core Aster palette.
- Motion should support hierarchy and storytelling, not distract from shopping.
- Use shared primitives before one-off section styling.
- Build the component first, then add only the Theme Settings that genuinely help control it.
- Keep the theme lean: no unused options, duplicate assets or decorative code with no storefront purpose.
- Respect prefers-reduced-motion and avoid CLS-inducing animation.

---

# PHASE 0 — PRE-LAUNCH / FOUNDATION ALREADY COMPLETED

## Password / waiting-list experience
- [x] Bespoke ASTER waiting-list landing page.
- [x] Launch countdown.
- [x] Bear silhouette V2.
- [x] Bear fixed-width desktop/mobile scaling.
- [x] Bear bottom anchoring.
- [x] Bear opacity control.
- [x] Bear blur control.
- [x] Mobile ASTER logo clipping fix.
- [x] British Poems custom WOFF2 added.
- [x] British Poems applied to display heading role.

## Global theme foundations
- [x] Global Logo settings.
- [x] Single SVG logo asset.
- [x] Theme-controlled SVG logo colour.
- [x] Desktop logo width.
- [x] Mobile logo width.
- [x] Favicon support.
- [x] Global Typography system.
- [x] Body typography role.
- [x] Heading typography role.
- [x] Display heading typography role.
- [x] Subheading typography role.
- [x] Navigation typography role.
- [x] Button typography role.
- [x] Product-card title typography role.
- [x] Global Colours scheme system.
- [x] Cream / wine starter colour scheme.
- [x] Wine / cream starter colour scheme.
- [x] Reusable colour-scheme CSS variables.
- [x] Fixed global content architecture.
- [x] 1400px maximum content width.
- [x] 20px desktop/tablet gutters.
- [x] 15px mobile gutters.
- [x] Removed redundant Layout Theme Settings.

---

# PHASE 1 — DESIGN SYSTEM PRIMITIVES

These must come before major storefront sections so every later component inherits the same visual language.

## 1.1 Buttons — NEXT
- [ ] Build primary button primitive.
- [ ] Build secondary button primitive.
- [ ] Add global Buttons Theme Settings only for structural properties:
  - corner radius
  - border thickness
  - horizontal padding
  - vertical padding
  - hover treatment
- [ ] Colours inherit from selected colour scheme.
- [ ] Typography inherits from Typography > Buttons.
- [ ] Loading / disabled state.
- [ ] Keyboard focus state.
- [ ] Mobile touch-target compliance.

## 1.2 Form controls
- [ ] Text input.
- [ ] Email input.
- [ ] Textarea.
- [ ] Select/dropdown.
- [ ] Checkbox.
- [ ] Radio button.
- [ ] Quantity selector.
- [ ] Error / success states.
- [ ] Consistent focus treatment.
- [ ] Decide whether any global form settings are actually needed after components exist.

## 1.3 Surface / container language
- [ ] Define card radius.
- [ ] Define panel radius.
- [ ] Define border treatment.
- [ ] Define shadow philosophy, ideally minimal.
- [ ] Define image corner treatment.
- [ ] Define section spacing rhythm desktop/mobile.
- [ ] Define narrow text measure for editorial copy.

## 1.4 Motion language
- [ ] Add GSAP foundation only where needed.
- [ ] Add ScrollTrigger if homepage concepts require it.
- [ ] Define Aster motion tokens:
  - quick interaction duration
  - standard reveal duration
  - hero / editorial reveal duration
  - standard easing
  - stagger rhythm
- [ ] Build reusable reveal utility.
- [ ] Build reusable image reveal utility.
- [ ] Build reusable stagger utility.
- [ ] Build reduced-motion fallback.
- [ ] Confirm no animation causes layout shift.

Design rule: most pages use subtle motion. The homepage gets the strongest choreography.

---

# PHASE 2 — GLOBAL CHROME

## 2.1 Announcement bar
- [ ] Build announcement bar section/block.
- [ ] Scheme selector.
- [ ] Message/link support.
- [ ] Optional rotation only if genuinely needed.
- [ ] Mobile behaviour.

## 2.2 Header
- [ ] Desktop header architecture.
- [ ] Mobile header architecture.
- [ ] Global logo integration.
- [ ] Navigation.
- [ ] Search trigger.
- [ ] Account trigger if accounts are enabled.
- [ ] Cart trigger/count.
- [ ] Sticky behaviour decision.
- [ ] Transparent/overlay behaviour only if homepage design actually needs it.
- [ ] Keyboard-accessible desktop navigation.
- [ ] Mobile drawer navigation.
- [ ] Header colour-scheme support.
- [ ] Add Theme Settings only after behaviour is final.

## 2.3 Mega menu / navigation system
- [ ] Standard dropdown menu.
- [ ] Mega-menu layout.
- [ ] Optional editorial imagery/cards.
- [ ] Mobile drill-down or accordion equivalent.
- [ ] Active states.
- [ ] Focus states.

## 2.4 Footer
- [ ] Newsletter/signup area.
- [ ] Link columns.
- [ ] Contact/legal links.
- [ ] Social links.
- [ ] Payment icons only if useful.
- [ ] Copyright.
- [ ] Footer colour scheme.
- [ ] Add Social media Theme Settings here if required.

---

# PHASE 3 — COMMERCE COMPONENT LIBRARY

Build these before the templates that consume them.

## 3.1 Product card
- [ ] Product image.
- [ ] Secondary image hover where available.
- [ ] Product title.
- [ ] Price.
- [ ] Compare-at price.
- [ ] Sale state.
- [ ] Sold-out state.
- [ ] Optional badge architecture.
- [ ] Variant swatches if Aster catalogue needs them.
- [ ] Quick add decision.
- [ ] Card hover motion.
- [ ] Mobile behaviour.
- [ ] Accessible links/actions.
- [ ] THEN add Product cards Theme Settings based on the final component.

## 3.2 Collection card
- [ ] Image.
- [ ] Title.
- [ ] Optional supporting copy.
- [ ] Hover treatment.
- [ ] Mobile behaviour.
- [ ] THEN add Collection cards Theme Settings.

## 3.3 Article / blog card
- [ ] Hero image.
- [ ] Title.
- [ ] Excerpt/date/author decision.
- [ ] Hover treatment.
- [ ] THEN add Blog cards Theme Settings.

## 3.4 Generic editorial card
- [ ] Reusable image + heading + copy + CTA component.
- [ ] Supports colour schemes.
- [ ] Used across homepage, pages and editorial content.

---

# PHASE 4 — HOMEPAGE VISUAL CONCEPT + GSAP SYSTEM

The homepage should establish the artistic language the rest of the store follows.

## 4.1 Homepage storyboard
- [ ] Agree full page narrative before coding sections.
- [ ] Define opening hero concept.
- [ ] Define section order.
- [ ] Define which moments deserve motion and which stay calm.
- [ ] Establish visual rhythm between cream/wine/imagery.

## 4.2 Hero
- [ ] Build premium hero section.
- [ ] Desktop and mobile art direction independently.
- [ ] Strong display typography.
- [ ] Primary CTA.
- [ ] Optional secondary CTA.
- [ ] GSAP entrance sequence.
- [ ] Potential subtle depth/parallax treatment.
- [ ] Avoid carousel unless there is a strong commercial reason.

## 4.3 Signature homepage motion moments
Choose a small number, not all of them.
- [ ] Masked image reveal.
- [ ] Editorial text reveal/stagger.
- [ ] Subtle pinned storytelling section if content warrants it.
- [ ] Controlled image scale/parallax.
- [ ] Horizontal product/editorial movement only if useful.
- [ ] Section-to-section colour transition.
- [ ] Micro-interactions on cards and CTAs.

## 4.4 Core homepage sections
Likely set, subject to final storyboard:
- [ ] Hero.
- [ ] Brand statement / manifesto.
- [ ] Featured products.
- [ ] Shop by category / need / collection.
- [ ] Editorial image-text split.
- [ ] Brand proof / ingredients / philosophy.
- [ ] Featured collection or product story.
- [ ] Social proof / reviews if available.
- [ ] Journal/editorial teaser.
- [ ] Newsletter/footer handoff.

## 4.5 Homepage QA
- [ ] Desktop large-screen choreography.
- [ ] Standard laptop.
- [ ] Tablet.
- [ ] Mobile.
- [ ] Reduced-motion mode.
- [ ] Performance audit.
- [ ] No CLS.
- [ ] No scroll-jank.

---

# PHASE 5 — COLLECTION EXPERIENCE

## 5.1 Collection template
- [ ] Collection hero/header.
- [ ] Collection title and description.
- [ ] Optional collection image.
- [ ] Product grid using shared product card.
- [ ] Responsive column system.
- [ ] Sort.
- [ ] Filters.
- [ ] Active-filter display.
- [ ] Empty state.
- [ ] Pagination or progressive loading decision.
- [ ] Collection colour-scheme support.
- [ ] Subtle reveal motion consistent with homepage.

## 5.2 Collection supporting sections
- [ ] Editorial banner.
- [ ] Image/text content block.
- [ ] Featured collection navigation.
- [ ] Recently viewed if justified later.

---

# PHASE 6 — PRODUCT EXPERIENCE

## 6.1 Product media gallery
- [ ] Desktop gallery design.
- [ ] Mobile gallery/swipe design.
- [ ] Image zoom/lightbox decision.
- [ ] Video support.
- [ ] Variant-media support.

## 6.2 Product information panel
- [ ] Vendor/eyebrow only if desired.
- [ ] Product title.
- [ ] Price / compare-at price.
- [ ] Variant picker.
- [ ] Colour swatches only if catalogue requires them.
- [ ] Quantity selector.
- [ ] Add to cart.
- [ ] Dynamic checkout decision.
- [ ] Inventory messaging.
- [ ] Delivery/returns messaging.
- [ ] Subscription/app compatibility if later required.

## 6.3 Product content
- [ ] Description treatment.
- [ ] Accordions.
- [ ] Ingredients/details blocks where relevant.
- [ ] Product-specific rich content sections.
- [ ] Reviews integration.
- [ ] Related/recommended products.
- [ ] Complementary products.
- [ ] Recently viewed decision.

## 6.4 Product motion
- [ ] Restrained gallery transitions.
- [ ] Add-to-cart feedback.
- [ ] Section reveals consistent with homepage.
- [ ] No excessive scroll effects on transactional content.

## 6.5 Product template QA
- [ ] Variant edge cases.
- [ ] Sold out.
- [ ] Sale pricing.
- [ ] Long titles.
- [ ] Long descriptions.
- [ ] Single/multiple media.
- [ ] Mobile sticky ATC decision.

---

# PHASE 7 — CART + CHECKOUT HANDOFF

## 7.1 Cart drawer
- [ ] Cart drawer shell.
- [ ] Product lines.
- [ ] Variant details.
- [ ] Quantity controls.
- [ ] Remove item.
- [ ] Price/savings display.
- [ ] Empty state.
- [ ] Subtotal.
- [ ] Checkout CTA.
- [ ] Continue-shopping behaviour.
- [ ] Upsell/cross-sell decision.
- [ ] Free-delivery progress only if commercially useful.
- [ ] Drawer transitions and focus trap.

## 7.2 Cart page
- [ ] Full cart template as fallback/alternative.
- [ ] Match drawer design language.
- [ ] Notes if required.
- [ ] Discount messaging where Shopify permits.

## 7.3 Global Cart Theme Settings
- [ ] Add only controls proven necessary after drawer/page are complete.

---

# PHASE 8 — SEARCH + DISCOVERY

## 8.1 Search overlay/drawer
- [ ] Search trigger in header.
- [ ] Predictive search.
- [ ] Product results using product cards or compact variant.
- [ ] Collection/page/article results if useful.
- [ ] Empty/no-results state.
- [ ] Keyboard controls.

## 8.2 Search results template
- [ ] Search heading/query.
- [ ] Filtering/sorting where appropriate.
- [ ] Product and content results.
- [ ] Consistent card system.
- [ ] Pagination.

## 8.3 Search behaviour settings
- [ ] Only now decide which global Search behaviour settings are warranted.

---

# PHASE 9 — CONTENT TEMPLATES

## 9.1 Standard page
- [ ] Page hero/title.
- [ ] Rich text width and typography.
- [ ] Flexible sections above/below page body.

## 9.2 About / brand storytelling page
- [ ] Editorial image/text system.
- [ ] Motion restrained but expressive.
- [ ] Reuse homepage visual grammar.

## 9.3 Contact page
- [ ] Contact form.
- [ ] Contact details.
- [ ] Success/error states.

## 9.4 FAQ page
- [ ] Accessible accordion component.
- [ ] Search/filter only if content volume warrants it.

## 9.5 Blog index
- [ ] Blog header.
- [ ] Article grid.
- [ ] Featured article option.
- [ ] Pagination.

## 9.6 Article template
- [ ] Editorial article header.
- [ ] Hero image.
- [ ] Article typography.
- [ ] Rich media.
- [ ] Share controls if useful.
- [ ] Related articles.
- [ ] Product/editorial cross-links.

## 9.7 404
- [ ] Branded 404.
- [ ] Useful navigation/CTA.

---

# PHASE 10 — CUSTOMER / UTILITY TEMPLATES

Only build what Aster actually uses.

- [ ] Customer account entry/linking if enabled.
- [ ] Customer account visual treatment where theme-controlled.
- [ ] Gift card visual pass.
- [ ] Password page final launch-state behaviour.
- [ ] Policy page typography.
- [ ] Challenge/captcha page compatibility.

---

# PHASE 11 — OPTIONAL COMMERCE FEATURES

Decide based on the real catalogue rather than pre-building them.

- [ ] Colour swatches.
- [ ] Size guide modal.
- [ ] Back-in-stock integration.
- [ ] Wishlist.
- [ ] Quick view.
- [ ] Quick add.
- [ ] Product compare.
- [ ] Bundles.
- [ ] Subscriptions.
- [ ] Personalisation.
- [ ] Cross-sells/upsells.

Rule: no feature gets added merely because another theme has it.

---

# PHASE 12 — GLOBAL SETTINGS CLEAN-UP

Once real components exist, review Theme Settings as a whole.

Current intended high-level order:
1. Logo
2. Colours
3. Typography
4. Buttons
5. Product cards, only once built
6. Collection cards, only once built
7. Blog cards, only once built
8. Cart, only once built
9. Social media, only once needed
10. Search behaviour, only once search is built
11. Custom CSS, native Shopify facility only if retained

- [ ] Remove unused Skeleton defaults/settings.
- [ ] Remove settings that duplicate section controls.
- [ ] Remove dead CSS variables.
- [ ] Remove unused JS/assets.
- [ ] Confirm every Theme Setting visibly does something.

---

# PHASE 13 — ACCESSIBILITY

Accessibility is checked during every component build, then audited globally.

- [ ] Semantic heading hierarchy.
- [ ] Keyboard navigation.
- [ ] Visible focus states.
- [ ] Accessible modals/drawers.
- [ ] Focus trapping/restoration.
- [ ] ARIA only where semantic HTML is insufficient.
- [ ] Colour contrast across every scheme.
- [ ] Form labels/errors.
- [ ] Alt-text behaviour.
- [ ] Reduced-motion support.
- [ ] Touch target sizing.
- [ ] Screen-reader cart updates.

---

# PHASE 14 — PERFORMANCE

Performance is a build constraint, not an end-of-project rescue job.

- [ ] Audit GSAP payload and load only where required.
- [ ] Lazy-load non-critical media.
- [ ] Preload only genuinely critical assets.
- [ ] Responsive image sizing/srcset.
- [ ] Prevent CLS from images/fonts/animation.
- [ ] Remove unused Skeleton CSS/JS as components are replaced.
- [ ] Audit third-party apps before launch.
- [ ] Lighthouse/PageSpeed pass.
- [ ] Real-device mobile scroll performance.

---

# PHASE 15 — SEO / STRUCTURED DATA

- [ ] Title/meta architecture.
- [ ] Canonicals.
- [ ] Product structured data.
- [ ] Breadcrumb structured data.
- [ ] Article structured data.
- [ ] Organisation/site identity markup where appropriate.
- [ ] Heading hierarchy.
- [ ] Collection crawlability.
- [ ] Internal-link architecture.
- [ ] Image alt strategy.
- [ ] Search/filtered URL behaviour.
- [ ] 404/redirect review before launch.

---

# PHASE 16 — ANALYTICS / CONSENT / MARKETING INTEGRATIONS

- [ ] Shopify analytics baseline.
- [ ] GA4 decision/setup.
- [ ] Meta/advertising pixels as required.
- [ ] Consent/cookie architecture.
- [ ] Klaviyo/newsletter integration.
- [ ] Conversion-event QA.
- [ ] Ensure integrations do not damage Core Web Vitals unnecessarily.

---

# PHASE 17 — CROSS-TEMPLATE ART DIRECTION PASS

This phase is specifically to enforce the “same artist” requirement.

Review together:
- [ ] Homepage.
- [ ] Collection page.
- [ ] Product page.
- [ ] Search.
- [ ] Cart.
- [ ] Standard page.
- [ ] Blog index.
- [ ] Article.
- [ ] 404.

Check consistency of:
- [ ] typography hierarchy
- [ ] wine/cream colour usage
- [ ] image cropping and corner treatment
- [ ] card geometry
- [ ] buttons
- [ ] borders
- [ ] spacing rhythm
- [ ] display typography moments
- [ ] motion easing/timing
- [ ] hover behaviour
- [ ] empty/error states

Goal: homepage has more theatre, but no page looks like a generic Shopify template sitting underneath it.

---

# PHASE 18 — FINAL QA + LAUNCH

## Functional
- [ ] Add to cart.
- [ ] Variant selection.
- [ ] Discounts.
- [ ] Cart quantities/removal.
- [ ] Checkout handoff.
- [ ] Search.
- [ ] Filters/sort.
- [ ] Forms.
- [ ] Navigation.
- [ ] Links.
- [ ] Customer flows if enabled.

## Responsive/browser
- [ ] iPhone narrow viewport.
- [ ] iPhone large viewport.
- [ ] Android representative viewport.
- [ ] iPad/tablet.
- [ ] Laptop.
- [ ] 1440p desktop.
- [ ] Large/wide desktop.
- [ ] Safari.
- [ ] Chrome.
- [ ] Edge.
- [ ] Firefox sanity check.

## Final quality
- [ ] Accessibility audit.
- [ ] Performance audit.
- [ ] SEO audit.
- [ ] Broken-link audit.
- [ ] Console-error audit.
- [ ] Theme Editor control audit.
- [ ] Remove dead development code/comments/assets.
- [ ] Backup/release tag.
- [ ] Launch checklist.

---

# CURRENT POSITION

Completed foundation:
- Password/waiting-list experience
- Logo system
- Favicon
- Typography system
- British Poems webfont
- Colour schemes
- Fixed 1400px content architecture and gutters

## NEXT TASK

**Phase 1.1 — Global Buttons primitive and Theme Settings.**

After Buttons:
1. Form controls
2. Surface/spacing language
3. Motion/GSAP foundation
4. Announcement bar
5. Header/navigation
6. Footer
7. Product card
8. Collection card
9. Article card
10. Homepage storyboard and build

This file should be updated after each meaningful milestone so it remains the canonical Aster build sequence.
