# ASTER 0.2 — Master Build, Rebrand and Launch Roadmap

**Status:** ACTIVE MASTER PLAN — reset for Aster 0.2 on 11 November 2026  
**Project:** The House of Aster · Shopify Online Store 2.0 · \`House-Of-Aster/aster-shopify-theme\` · \`main\`  
**Owner/sign-off:** Dave · **Current workstream:** 0.2 design system → navigation/header mock-ups  
**Change policy:** This document is the **single source of truth** for implementation sequence, status, sign-offs, exceptions and launch readiness. Update it on every completed/verified unit and every approved scope change. The companion \`ASTER_VISUAL_LANGUAGE.md\` contains 0.2 art direction and design rules, not a second task list.

## The 0.2 reset — what changes and what stays

**0.1 was the foundational build.** Its header/menu, footer, collection, product cards, dedicated Planner PDP and motion primitives contain valuable reusable code, but **their earlier design approvals do not constitute 0.2 design approvals**. This is a rebrand of the rebrand, not a clean-slate rebuild.

**0.2 objective:** A memorable, refined and genuinely immersive luxury ecommerce experience resembling entry into an exclusive private club. The target is affluent, socially connected, style-conscious women; inspiration includes private members' clubs, elegant country-house and race-day hospitality, discreet British high society, premium stationery and fashion editorial. This is **not** a European café theme, generic wellness shop, country-club parody or literal replica of another website. The journal/planner and later supplements must inhabit **one coherent House of Aster world**.

**Experience objective:** Cinematic and tactile GSAP-driven storytelling, immersive scenes, elegant shared transitions between internal pages, rich photographic and typographic direction, refined interaction feedback and exceptional shopping usability. \`landonorris.com\` is an experience/motion reference, not a source of code/assets to copy. Homepage receives the most ambitious choreography, but the rest of the site must already have compelling, coherent motion.

**Explicit sequencing decision:** **DO NOT design, generate homepage mock-ups for, or implement the homepage yet.** Complete navigation, footer, collections, product families, cart, search and core pages, plus enough approved imagery and shared interaction language, **before** starting its storyboard. This overrides the old phase-number implementation sequence.

**Launch scope decision:** Launch with the real, available journal/planner/accessory catalogue. Future Aster supplements are a **separate conditional release gate** and must not delay launch unless the commercial launch scope is explicitly changed. Do not invent supplement formulations, ingredients, claims, stock or regulatory approvals.

### How statuses work

- \`[x]\` **0.2 complete**: implemented or documented, tested where relevant, evidence recorded, and approved against the **new** brief.
- \`[~]\` **in progress**: partial, awaiting sign-off or carried-over foundation not yet accepted in 0.2. **Never counts as launched/complete.**
- \`[ ]\` **open**: not started, unverified or a required decision not made.
- **N/A** only after a conscious, recorded decision with reason; never silently skip a row.
- **Blocker** is a task that must be resolved before launch; **Deferred** is an explicitly permitted post-launch task with owner and condition.
- Do not mark a task complete because its template/file exists, because 0.1 signed it off, or because GitHub changed. Require the relevant 0.2 acceptance evidence.

### Source-of-truth and safe-change rules

- Reuse the existing Skeleton-based theme architecture, Shopify data and correctly working ecommerce behaviour wherever possible; visual mock-ups do not authorise unreviewed rebuilds.
- **Mock-up → approve desktop/mobile/state variants → interaction storyboard → implement in controlled units → test/verify → record sign-off.** For each workstream, deliver one coherent unit rather than modifying unrelated parts of the store.
- Preserve \`ASTER_BUILD_ROADMAP.md\` path and update this checklist **after each verified milestone** with date, change/commit, testing performed, limitations and immediate next action.
- Prior 0.1 records are preserved *verbatim* in \`archive/ASTER_BUILD_ROADMAP_V0_1.md\` and \`archive/ASTER_VISUAL_LANGUAGE_V0_1.md\`. Do **not** lose prior architecture, feature decisions, known pitfalls or historical sign-offs; refer to the archive when implementing.
- The current working files are on GitHub \`main\`. Treat Shopify ASTER MAIN / live-theme parity as **unverified** until explicitly checked against the correct Aster shop. Do not assume a connected Shopify account points to Aster.
- Never alter the femme or Una stores by mistake. Do not update Shopify production settings or publish the theme without explicit authorisation.
- Use British English; do not duplicate independent brand colours/typography controls across sections.
- User-provided brand images and mock-up references remain creative inputs, not permission to replace existing product photography or create new storefront assets without approval.

---

# 0.2 LAUNCH COVERAGE MATRIX

The matrix is an index: every row is a required review of the feature, an approved exclusion or a conditional gate. **No row may be left unresolved at launch.**

| Surface / area | Current 0.1 baseline | 0.2 acceptance | Workstream |
| --- | --- | --- | --- |
| Brand / assets / motion system | Foundations exist | [~] Direction agreed; full system not signed off | A |
| Announcement / header / navigation | Built | [ ] New brand and interaction sign-off | B |
| Footer / newsletter / global closing scene | Built | [ ] Redesign and functional sign-off | C |
| Shared product / category cards | Product card built | [ ] Redesign and integration sign-off | D |
| Collection / collection listing | Collection built; listing generic | [ ] Both reviewed and signed off | D |
| Planner PDP | Bespoke partial PDP | [ ] New design and commerce sign-off | E |
| Standard / accessories / refill PDP | Generic template currently exists | [ ] Correct family layouts and states | E |
| Supplements PDP | No verified launch content | [ ] Scoped for future; not accidentally displayed/sold | E / R |
| Cart drawer + full cart | Reference only / basic template | [ ] Complete purchase journey | F |
| Search overlay + full search results | Basic template | [ ] Search, no results, keyboard UX | G |
| Standard pages / About / FAQ / Contact | Basic template | [ ] Required content and forms | H |
| Journal/blog listing + article | Basic templates | [ ] Editorial experience and linking | I |
| Policy pages / 404 / challenge / utility | Basic templates/platform | [ ] All appropriate states checked | J |
| Customer accounts / gift cards | Platform/basic template | [ ] Enabled properly or explicit N/A | J |
| Checkout / thank-you / order status | Shopify-hosted | [ ] Brand-compatible, functional, compliant | K |
| Homepage | Minimal template, deliberately deferred | [ ] Last major creative build | L |
| Password / coming soon / pre-launch | Cinematic partial | [ ] Transition to live store planned | M |
| SEO / accessibility / performance / analytics | Partial foundations | [ ] Verified cross-template | N |
| Catalogue / offers / app integrations | Partial product infrastructure | [ ] Valid launch configuration | O |
| Shopify admin / payments / shipping / legal | Not audited for Aster | [ ] All launch settings confirmed | P |
| End-to-end launch QA / cutover | Not performed | [ ] Go/no-go gates pass | Q |
| First-week monitoring and rollback | Not specified | [ ] Ready and owned | Q |
| Future supplement release | Separate programme | [ ] Conditional readiness before selling | R |

---

# A — 0.2 CREATIVE FOUNDATION, ASSETS AND INTERACTION SYSTEM

**Gate A:** Approved visual language and interaction prototypes suitable for all interior pages. No homepage build.

## A1. Brand strategy and asset inventory
- [x] Adopt Aster 0.2 positioning: exclusive House of Aster, affluent private-club audience, journal first and supplements later.
- [x] Explicitly retire **European café culture** as a defining creative direction; avoid stereotypical equestrian/racing motifs and obvious wealth clichés.
- [x] Set Lando Norris experience as an **interaction quality reference**, not an asset/code-copying brief.
- [x] Archive the exact 0.1 roadmap and visual language before resetting.
- [ ] Audit all supplied references, current Shopify image library, actual products, video, branded SVGs and existing campaign art into an asset-use matrix: approved / usable with crop / replace / not suitable; do not overwrite or invent images.
- [ ] Confirm which Aster wordmarks, signature bear usage, typography treatments, physical materials and campaign devices are approved at launch.
- [ ] Establish clear photographic art direction for desktop/mobile: lifestyle, architecture, editorial still life, product detail, cut-out, portrait and optional motion backgrounds.
- [ ] Create named asset requirements per **real template and breakpoint**, with aspect ratio, crop-safe zone, resolution, alt-text purpose, source/rights and sign-off.
- [ ] Agree 0.2 copywriting voice and shared UI vocabulary: exclusive but inviting; polished, witty and intimate, never snobbish or medically overclaiming.
- [ ] Identify missing imagery/video; production and selection **must precede relevant page build**. Never generate/upload unsolicited blog/product photos.

## A2. Design tokens and component library
- [~] Reuse known 0.1 palette: Ivory \`#F8F6EB\`, Aster Red \`#A52D34\`, Wine \`#6B2331\`, Blush \`#E8DAD2\`; Blue \`#3E6990\` stays reserved pending explicit approval.
- [~] Reuse global scheme/typography roles, Garet Book + Heavy, Rufina, British Poems, responsive image primitive, 1400px content maximum and 20px/15px gutters. **0.2 presentation requires renewed approval.**
- [ ] Sign off the 0.2 usage of display/body/navigation/button/product fonts, dynamic type scales and editorial/handwritten accents.
- [ ] Sign off media treatments: edge-to-edge scenes versus contained images, bespoke crops, texture/lighting, corners, spacing and chapter transitions. Do not force every scene into the 0.1 rectangular grid.
- [ ] Build 0.2 reference components/states: links, filled/text buttons, inputs, select, checkbox, quantity, variant swatch, badge, price, accordion, loading/error/success and modal.
- [ ] Define desktop, tablet, mobile and touch rules, with safe areas around browser controls and no hover-only essential information.
- [ ] Prevent duplicated settings: scheme tokens as source of truth; sensible shared defaults, not endless customiser controls.
- [ ] Approve accessibility behaviour for dynamic type, contrast, focus indicators, controls and text over images.

## A3. Signature GSAP and page-transition system
- [~] Existing \`aster-motion.js\` reveal foundation and reduced-motion support are reusable; not yet the approved 0.2 experience.
- [ ] Storyboard **The Aster Veil** or another signature internal-page transition: outgoing scene, brand moment, incoming reveal, timings, loading/failure state.
- [ ] Prototype internal navigation transitions without breaking real URLs, browser back/forward, hash links, open-in-new-tab, refresh or direct entry.
- [ ] Exclude/bypass where necessary: external links, downloads, checkout/payment provider, third-party apps and controls that need native navigation.
- [ ] Define how transitions interact with Shopify Theme Editor, popstate, BFCache, focus restoration, scroll restoration, modals, announcements and screen readers.
- [ ] Establish reusable GSAP timelines, ScrollTrigger lifecycle, cleanup, breakpoint reinitialisation, rapid-click cancellation and on-demand library loading.
- [ ] Selectively prototype masked reveals, image scale/crop, page-to-page shared-element *illusion*, pointer depth, typography transitions and perhaps pinned/horizontal sequences.
- [ ] Validate performance and accessibility on real mid-range phones; no forced smooth-scrolling, scroll-jacking or essential animation-dependent interaction.
- [ ] Complete \`prefers-reduced-motion\` and non-JS fallbacks for all visual transitions.
- [ ] Obtain 0.2 **motion-system and page-transition approval**, documented with prototype evidence.

---

# B — HEADER, ANNOUNCEMENT AND IMMERSIVE NAVIGATION

**First mock-up/build target. Gate B:** Entire navigation and search entry work on desktop, mobile and keyboard.
- [ ] Capture current 0.1 header/mega-menu screenshots and important interactions as the technical baseline.
- [ ] Create **desktop and mobile mock-ups**: closed header, open navigation, submenu/featured area, search entry, account and cart indicators.
- [ ] Approve the private-members-directory concept, content hierarchy, typography and imagery.
- [ ] Storyboard and approve menu opening, content choreography, close, hover/focus and overlay transitions.
- [ ] Decide sticky versus overlay/transparent header behaviour across different page hero contexts.
- [ ] Rework existing single-tree responsive navigation without losing accessibility, escape-to-close, focus return or scroll lock.
- [ ] Finalise actual Shopify menu handles/URLs and navigation information architecture; remove any 0.1 placeholder feature links and product claims.
- [ ] Validate announcement bar: actual copy, optional countdown/date, link destinations, mobile layout, dismiss/complete logic.
- [ ] Re-test account, search and basket utilities (including count), narrow layouts, zoom, touch and reduced motion.
- [ ] Record signed-off screenshots and function/keyboard checks for B.

# C — SIGNATURE FOOTER AND NEWSLETTER

**Gate C:** Complete, memorable footer for every page, including legal routes and signup.
- [ ] Capture 0.1 footer baseline and preserve working links/accordion behaviour.
- [ ] Create and approve desktop/mobile **final scene** mock-ups, including one or more rich colour/typographic treatments.
- [ ] Storyboard approach-to-footer, final brand reveal, newsletter handoff and reduced-motion equivalent.
- [ ] Rework wordmark scale, tagline, restrained bear use, brand line, menu composition and contact/social hierarchy against 0.2 copy.
- [ ] Implement and verify newsletter signup integration, consent wording, errors, success state and email destination; avoid false success.
- [ ] Confirm legal links, policies, social destinations, payment icons and accessibility of mobile accordions.
- [ ] Test footer at the end of a short page, a long collection, a product page and the homepage later; no overlap or blank scroll artefacts.
- [ ] Record signed-off screenshots, functional checks and version evidence for C.

# D — COLLECTIONS, PRODUCT CARDS AND MERCHANDISING

**Gate D:** Browsing feels curated and cinematic while products remain clear and easy to buy.
- [ ] Create desktop/mobile collection mock-ups: hero/opening scene, editorial introduction, product grid rhythm, sorting and pagination.
- [ ] Decide where photography/typography can break the conventional banner → toolbar → grid structure without damaging navigation and SEO.
- [ ] Define collection types: all products, actual named/range collections, empty collection and optional curated editorial collection.
- [ ] Inventory real catalogue, collection membership, collection handles, collection descriptions and artwork requirements.
- [ ] Rework shared **product card** in mock-ups with real products and realistic long titles/prices: planner, refill/insert, pouch/accessory and future states.
- [ ] Preserve and re-test \`aster.card_description\`, product links, swatches, variant-dependent imagery/price, hover image, single badge priority and bottom CTA.
- [ ] Confirm how sale/compare-at, unavailable, coming-soon and pre-order behave; avoid invented fake ratings.
- [ ] Decide if collection/category cards are required for \`list-collections\` and navigation, then design/build only approved types.
- [ ] Retest shopper-selectable 2/3/4-column desktop, tablet/mobile density, sorting, product count and preferences.
- [ ] Explicitly decide filters: the 0.1 catalogue omitted them; retain omission only if the real launch catalogue and user journey still justify it.
- [ ] Implement opening and below-fold interactions, hover/touch/reduced-motion states, empty state and pagination/infinite loading **decision**.
- [ ] Test actual Shopify collection data, direct links, SEO text and correct semantics; prevent visual-only product lists.
- [ ] Record signed-off collection/product-card screenshots and full cross-device checks for D.

# E — PRODUCT DETAIL EXPERIENCES (ALL PRODUCT FAMILIES)

**Gate E:** Every sellable product has the correct, approved template, content and functioning purchase flow.

## E1. Shared commerce contract
- [ ] Approve common 0.2 PDP visual system: gallery/media, identity, copy, price presentation, options, quantity, primary CTA, reassurance, payment, delivery/returns and related products.
- [ ] Keep Shopify variant IDs and prices authoritative; retain 0.1 metafields/metaobjects \`aster.pdp_eyebrow\`, \`aster.pdp_intro\`, \`aster.pdp_sections\`, \`aster.pdp_related_products\` and Aster PDP Section/Item definitions.
- [ ] Test gallery thumbnails, lightbox, image alt, variant-specific imagery and mobile swipe/touch without broken states.
- [ ] Confirm price, tax display, discounts, compare-at, out-of-stock/coming-soon/pre-order states, quantity limits and availability copy.
- [ ] Add to cart and Buy now must take exact selected variant/quantity; no accidental checkout bypass, duplicate submission or silent failure.
- [ ] Use Shopify-supported payment methods and checkout rather than replacing gateway-branded experiences with misleading representations.
- [ ] Validate delivery/returns/policy links, stock expectations, gifting and accessibility.
- [ ] Test related products, quick-shop hover/focus bridge and touch fallback; avoid generic irrelevant recommendations.

## E2. Planner flagship PDP
- [~] Dedicated \`product.planner.liquid\` + \`sections/aster-planner-pdp.liquid\` and media/form/metaobjects exist from 0.1; **visual and complete commerce sign-off are reopened**.
- [ ] Build new desktop/mobile Planner mock-ups for hero, purchase interaction and full lower-page editorial narrative.
- [ ] Storyboard approved GSAP/scene behaviour around physical materials, usage and emotional value; keep purchasing stable.
- [ ] Reassess the 0.1 philosophy band, three-step story, highlights, specifications, FAQs and related-products grid for 0.2 aesthetics.
- [ ] Preserve real product information and Theme Editor asset controls; do not invent planner manufacturing specifications or product imagery.
- [ ] Complete responsive, inventory/variant, modal/keyboard, purchase and visual sign-off.

## E3. Refill/insert and accessory PDPs
- [ ] Confirm product-family mapping and whether existing generic \`product.liquid\` must become a real 0.2 shared template.
- [ ] Create approved mock-ups for refill/insert and pouch/accessory with deliberately lighter storytelling than the Planner.
- [ ] Implement reusable layouts and content fields rather than duplicating an entire product template for each SKU.
- [ ] Test direct product links, purchase/add-to-cart, colours/quantities, related items, stock and responsive states.

## E4. Supplements — future release compatibility
- [ ] Design a **compatible family architecture** for later supplements, but do not publish speculative product pages at journal launch.
- [ ] Decide future one-off vs Appstle subscriptions, selling-plan slots, pricing and replenishment UX when real products are specified.
- [ ] Mark actual supplement product templates, substantiated ingredients/claims, legal approvals and stock **future-gated** under R; not a journal-launch blocker if entirely excluded from sale.

# F — CART DRAWER AND FULL CART

**Gate F:** Every basket state works and the path to checkout is dependable.
- [ ] Reconfirm architectural reference in \`ASTER_CART_DRAWER_REFERENCE.md\` (Fashe interaction patterns only; do not transplant branding/code blindly).
- [ ] Create desktop/mobile mock-ups for cart opening, cart with multiple lines, empty cart, discounts, updating and error/stock changes.
- [ ] Storyboard cart transition and integration with the common Aster motion system.
- [ ] Build accessible AJAX cart drawer plus \`cart.liquid\` full-page fallback; drawer and page must show the same authoritative Shopify cart.
- [ ] Verify variants, images, title, unit/line price, compare-at/savings, quantity limits, remove, subtotal and discounts.
- [ ] Verify rapid repeat clicks, failed request/retry, empty state, sold-out/changed inventory and cart persistence across navigation/refresh.
- [ ] Confirm delivery messaging only once configured in admin; upsell/free-shipping thresholds only if commercially justified.
- [ ] Verify checkout, continue shopping, focus trap/return, Escape, mobile safe areas and reduced motion.
- [ ] Record signed-off design and full journey tests.

# G — SEARCH AND DISCOVERY

**Gate G:** Search works beyond the header entry field, even when there are no results.
- [ ] Approve overlay/search drawer desktop/mobile mock-ups and interaction prototype.
- [ ] Implement predictive search using correct Shopify endpoint/API and accessible keyboard/focus behaviour where feasible.
- [ ] Design/implement \`search.liquid\`: product results, possible pages/articles, counts, query retention, loading and no-results state.
- [ ] Handle escaped queries, misspellings/empty query, no inventory, keyboard selection and touch dismissal.
- [ ] Confirm result card behaviour, working product links, sorting/pagination as appropriate and no unsupported claims.
- [ ] Test reduced motion and browser history/back from search results.

# H — CORE CONTENT PAGES AND CONTACT

**Gate H:** All required brand/service pages exist in approved templates and are linked.
- [ ] Design reusable \`page.liquid\` foundations: narrow reading layout, editorial rich-media page, split content and full-screen chapter option.
- [ ] Create/approve **About / The House of Aster** page, brand story and truthful positioning; no unsubstantiated heritage claims.
- [ ] Create/approve **Contact** page with form, validation, bot protection and routing to a monitored inbox.
- [ ] Create/approve **FAQ / Help** including ordering, dispatch, delivery, returns, products, gifting and how to contact support.
- [ ] Decide whether a **Journal/Planner guides**, gifting or wholesale enquiry page is needed; create only if genuine launch scope and assigned content exist.
- [ ] Check any other Shopify-created Pages in Admin for an appropriate template, owner, working link, index/noindex status and no unstyled leftovers.
- [ ] Validate SEO, headings, contact message success/failure, responsive typography, legal links and content accessibility.
- [ ] Record approved page list and explicit sign-offs.

# I — JOURNAL / EDITORIAL SYSTEM

**Gate I:** Blog/index and articles feel like the same luxury publication, if editorial content is live.
- [ ] Decide whether Journal/blog is in launch navigation; if omitted, mark with reason and remove all dead references.
- [ ] Design \`blog.liquid\` index and shared article card with featured imagery, date/author policy and curated hierarchy.
- [ ] Design \`article.liquid\` reading experience, image/caption system, typographic rhythm, related articles/products and appropriate sharing.
- [ ] Confirm categories/tags, canonical URLs, editorial authorship, publishing workflow and existing posts.
- [ ] Decide comments: enable and moderate intentionally, or disable deliberately; avoid an unmoderated default.
- [ ] Verify responsive typography, accessibility, schema/canonicals and graceful no-articles/empty states.
- [ ] Test all editorial links and featured content against real products/pages.

# J — UTILITY, ACCOUNT AND PLATFORM TEMPLATES

**Gate J:** No obscure or low-traffic route exposes broken Skeleton styling or dead ends.
- [ ] Design/verify \`404.liquid\` with helpful return/search/navigation and branded art direction.
- [ ] Design/verify \`list-collections.liquid\` including empty/one/multiple collection states.
- [ ] Design/verify \`gift_card.liquid\`, recipient/claim journey and email only **if gift cards will be offered**; otherwise record N/A and prevent orphan gift-card links.
- [ ] Decide customer accounts (Shopify customer accounts vs guest-only) and configure corresponding sign-in, profile, order history and login route; do not build legacy account templates for an unused account system.
- [ ] Check Shopify-hosted challenge/captcha and other platform-created utility screens for acceptable branding and functionality within platform limits.
- [ ] Check policy templates and all default system links, including search, customer login, contact, gift cards, password and error states.
- [ ] Remove/hide \`page.product-card-qa.json\`, \`sections/aster-product-card-qa.liquid\`, demo/sample content and prototype routes from public navigation/indexing.
- [ ] Confirm favicon, social sharing/default Open Graph image, browser title and mobile icon treatment.
- [ ] Verify empty/error/loading states, direct deep links and noindex decisions for utility pages.

# K — CHECKOUT, POST-PURCHASE AND CUSTOMER COMMUNICATIONS

**Gate K:** Shopify checkout is correct and feels consistent within plan/platform constraints.
- [ ] Audit checkout identity (logo, colours, fonts and supported editor options), express methods and contact preference.
- [ ] Decide guest/account checkout, email/SMS marketing consent and required order/customer fields.
- [ ] Verify discount, gift-card, shipping, tax, currency and address behaviour at checkout for enabled markets.
- [ ] Review thank-you page and order-status page; use platform-supported customisation and avoid unsupported checkout scripts.
- [ ] Draft/style/test transactional notifications: confirmation, fulfilment/tracking, cancellation, refund, contact, abandoned checkout where enabled, and gift-card messages if applicable.
- [ ] Verify sender email authentication/deliverability, customer service replies and unsubscribe/consent behaviour for promotional messages.
- [ ] Ensure a customer can find order status, return/help instructions and contact details after ordering.
- [ ] Confirm screenshot/real-test evidence for guest, account (if enabled), failed transaction, refunded and fulfilled order.

# L — HOMEPAGE (DELIBERATELY LAST CREATIVE BUILD)

**BLOCKED until B–K core directions are approved and A has sufficient real art-directed assets.** Do not create homepage mock-ups earlier.

- [ ] Formal homepage start approval: asset inventory complete enough, header/footer/product/collection motion language proven, real linked pages exist.
- [ ] Write homepage narrative architecture and chapter storyboard: invitation → House identity → flagship journal → exploration/collections → brand personality → future-proofed world → finale.
- [ ] Define the high-impact Lando-inspired GSAP treatment as original Aster scenes, not a copied implementation.
- [ ] Create and approve desktop/mobile full-length visual mock-ups **and** representative keyframes/interaction states.
- [ ] Produce mobile-specific motion plan; avoid merely shrinking desktop pinned scenes.
- [ ] Implement \`index.liquid\` and supporting Theme Editor sections with true page-to-page continuity.
- [ ] Connect actual products, collections, editorial pages, CTAs and newsletter destinations.
- [ ] Verify motion pacing, scroll/pin/horizontal behaviour, focus/keyboard, reduced-motion/low-power and deep links.
- [ ] Audit homepage payload, LCP, CLS, INP, responsiveness, SEO semantics and cross-browser presentation.
- [ ] Obtain final homepage visual, motion and functional sign-off.

# M — PRE-LAUNCH / PASSWORD EXPERIENCE

**Gate M:** Password/launch experience is intentional; no old dated countdown is displayed.
- [~] 0.1 cinematic password page, responsive still/video overrides and Klaviyo handoff exist; final parity and all live-state tests were unresolved in old ledger.
- [ ] Review password page against Aster 0.2 positioning and decide whether visual updates are required.
- [ ] Audit **expired 1 November 2026** countdown/handoff logic, missing form embeds, editor preview flags and returning-subscriber behaviour.
- [ ] Verify desktop/mobile static image overrides, hosted video fallbacks, signup success/double-opt-in and real Shopify store access.
- [ ] Decide preview/staging access method for stakeholder testing without exposing an incomplete store.
- [ ] Document password removal/launch transition and post-launch disposition of pre-launch assets and scripts.
- [ ] Confirm no public access bypass or broken signup/checkout deep link before go-live.

# N — TECHNICAL HARDENING, ACCESSIBILITY, SEO AND PERFORMANCE

**Gate N:** Quality is measured on **all** relevant template families, not just homepage.
- [ ] Audit global \`layout/theme.liquid\`, \`config/settings_schema.json\`, \`settings_data.json\`, theme/app embeds and reusable blocks/sections for missing, dead or Skeleton/demo functionality.
- [ ] Audit \`layout/password.liquid\`, locale labels, image helper, JS/CSS load order, event cleanup and Shopify editor section-load/unload.
- [ ] Ensure all new reusable components load only needed assets and avoid global GSAP on templates that do not use it.
- [ ] Cross-browser/device matrix: current Chrome, Safari, Firefox and Edge; iOS Safari and Android Chrome; laptop, desktop, tablet and narrow mobile.
- [ ] Keyboard-only, screen reader, focus management, landmarks/headings, labels, contrast, zoom 200%/400%, touch target, no hidden content or pointer-only discovery.
- [ ] Check reduced motion and JS-disabled resilience including loading, route transitions and purchasing.
- [ ] Performance budgets and measurement for LCP, INP, CLS, image/video size, font loading, JS execution, scroll jank and transition cancellation.
- [ ] Responsive image/sizes/priority, lazy below-fold media, video posters, compression, optional prefetch and no content shift.
- [ ] Crawlability and SEO: titles/meta descriptions, H1 hierarchy, canonicals, pagination, internal links, product/collection/article schema, organisation/site info, OG image and redirects.
- [ ] Check robots/noindex, \`sitemap.xml\`, broken links, duplicate pages, filter/query URLs, 404/soft 404 and policy indexing decisions.
- [ ] Add cookie/consent management that respects applicable marketing/analytics permissions; avoid firing restricted tags first.
- [ ] Verify analytics ecommerce events once configured, without duplicates from custom navigation.
- [ ] Perform accessibility, technical SEO, structured-data and speed regression tests again after the homepage is built.
- [ ] Remove unused demo/test assets, unnecessary dependencies, redundant CSS patches and old visual tokens only after safe regression checks.
- [ ] Document evidence and any approved exceptions with owner/fix date.

# O — PRODUCT DATA, CONTENT, COMMERCIAL OFFERS AND APPS

**Gate O:** Everything shown is real, intentional and ready to trade.
- [ ] Audit product catalogue at launch: IDs, handles, titles, descriptions, product type/vendor, media, variants, SKUs, barcodes where applicable, dimensions/weight and status.
- [ ] Audit all Aster product/collection metafields and metaobjects against actual current records; no invented or blank content on live templates.
- [ ] Confirm journal, refill and accessory stock/availability, pricing, compare-at, pre-order policy and unlisted/unpublished items.
- [ ] Verify each product assigned to correct collection, storefront/market, related products and recommendation/cross-sell.
- [ ] Confirm photography and asset rights, image crops, alt text, naming and accessibility.
- [ ] Decide and configure launch offers/discount codes, combinations, exclusions, gift cards and minimum orders if used; test price arithmetic.
- [ ] Confirm app inventory/permissions, required integrations and any billing/trial state; remove unused Skeleton/demo integrations.
- [ ] Decide reviews provider (0.1 reserved Judge.me), import authenticity, moderation and whether reviews are included at launch; no fake review data.
- [ ] Decide Klaviyo/newsletter marketing flows, compliant consent, welcome/signup and source attribution.
- [ ] Confirm the future supplements are absent from public sale until R is fully approved.

---

# P — SHOPIFY ADMIN AND BUSINESS LAUNCH CONFIGURATION (AFTER CREATIVE BUILD)

**These tasks are essential launch blockers but deliberately sit near the end.** The connected Shopify tool currently **has not established access to Aster**, so do not infer any of them is already configured. Owner to confirm each in the correct Aster Admin.

## P1. Identity, ownership, security and domains
- [ ] Confirm correct Shopify store/admin, plan, billing method, store legal name, business/trading address, contact details, currency and time zone.
- [ ] Review primary domain \`houseofaster.co.uk\` and intended \`www\` routing, DNS, TLS, redirects, renewal ownership and any email-domain records.
- [ ] Check sender email and SPF/DKIM/DMARC or Shopify-required email authentication; send and receive real tests.
- [ ] Staff/collaborator permissions, 2FA, admin access, app scopes and recovery contacts; remove stale access.
- [ ] Record production theme ID, backup/rollback theme and exactly how GitHub changes sync into the Aster Shopify theme.
- [ ] Verify billing and Shopify plan features needed for launch (avoid assuming Plus/headless).

## P2. Payments, fraud and checkout
- [ ] Configure/verify Shopify Payments or chosen provider, payout identity/bank, enabled cards/wallets and fraud settings.
- [ ] Decide payment capture and refund procedures; test authorise/capture if applicable.
- [ ] Confirm checkout fields, address validation, customer account/guest policies, marketing opt-ins and order status.
- [ ] Verify any gift-card, discount stacking or future instalment features against the actual plan/provider.
- [ ] Turn **off** payment test mode before accepting real orders; verify a real transaction if commercially approved.

## P3. Shipping, delivery and fulfilment
- [ ] Agree fulfilment origin and stock-holding locations, dispatch cut-off, working days, handling time and internal owner.
- [ ] Decide shipping markets and exclusions first (UK only or UK plus other locations); don't enable countries without fulfilment/pricing capability.
- [ ] Configure shipping profiles/zones, rates, free-shipping thresholds (if any), parcel weights/dimensions and exceptional oversize products.
- [ ] Choose carrier/service tiers, tracking, insurance, packaging and label purchasing; test real destination postcodes.
- [ ] Decide delivery to PO boxes, Northern Ireland, Highlands/islands, Channel Islands, BFPO and international addresses; record applicable exclusions/rates.
- [ ] Configure local pickup/delivery **only if offered**, or explicitly N/A.
- [ ] Confirm packaging, printed inserts, discreet delivery requirements if any, return address, damaged/lost parcel escalation and customer-support SLA.
- [ ] Verify inventory reservation/fulfilment workflow and who marks orders fulfilled, sends tracking and handles partial fulfilment.
- [ ] Create clear customer-facing shipping policy matching **actual** configured Shopify rates, dispatch estimates and delivery claims.

## P4. VAT, markets, pricing and international operations
- [ ] Confirm UK VAT registration/tax treatment with accountant and Shopify Admin tax settings; test tax-inclusive display and any rate/override.
- [ ] Review VAT treatment per product classification rather than applying an assumed universal rate.
- [ ] Configure Shopify Markets, currencies and regional price/availability only for supported selling territories.
- [ ] If exporting, settle export VAT/tax registration, customs data, origin/HS codes, duties/taxes approach and customer delivery terms before enabling markets.
- [ ] Test taxes and shipping together on representative UK and enabled international addresses.

## P5. Policies, compliance and customer protection
- [ ] Legal review and publish Terms of Service, Privacy Policy, Refund/Returns Policy, Shipping/Delivery Policy, Cookies Policy and required business/trading disclosures.
- [ ] Check UK consumer-rights, cancellation/return information, product warranty, customer service and refund timeframes against actual business operations.
- [ ] Verify privacy notice, data processors, tracking consent, GDPR/PECR compliance, age/marketing preferences and cookie controls.
- [ ] Confirm product claims, advertising copy, price/discount representations and endorsements meet relevant UK advertising/consumer requirements.
- [ ] Confirm accessibility obligations/statement decision and clear contact channels.
- [ ] Confirm marketing photographs/fonts/assets have usage rights and no copied site assets or third-party animations have been transplanted.

## P6. Catalogue, inventory and daily operations
- [ ] Confirm supplier/warehouse/stock process, stock synchronisation, backorders, product lead times and low-stock alerts.
- [ ] Verify products published to correct Online Store/market channels, collection membership, stock locations and delivery eligibility.
- [ ] Decide whether product reviews, returns portal, inventory/ERP, support desk or subscriptions are needed at journal launch; explicitly mark unused functions N/A.
- [ ] Confirm returns handling/refund permissions, damaged item procedures, customer-support inbox and escalation owner.
- [ ] Verify order notifications, packing slip/label appearance and order archiving/cancellation responsibilities.
- [ ] Document test orders and day-one order handling checklist.

## P7. Analytics, SEO, email and channel readiness
- [ ] Configure GA4/GTM and consent where used, Shopify analytics, ecommerce event tracking and campaign UTMs without duplicate purchase events.
- [ ] Verify Google Search Console ownership, primary domain, indexing/sitemap, Merchant Center/product feed **if in launch scope**, social profiles/pixels and consent settings.
- [ ] Finalise homepage and core-page meta content, share previews, search indexing timing, redirects from any earlier Aster URLs and favicon.
- [ ] Verify Klaviyo integration and signup forms in production, transactional email independence and suppression/consent handling.
- [ ] Review launch communications, email list readiness and any announcement/countdown feature; no outdated pre-launch copy after opening.

---

# Q — END-TO-END ACCEPTANCE, LAUNCH AND AFTERCARE

**There is no launch unless all mandatory boxes in A–Q are complete or explicitly signed-off N/A/deferred.** Homepage must be built and signed off before launch. Supplement gate R applies only when supplements are sold.

## Q1. Required route/experience matrix
- [ ] **Navigation**: all primary/child menu links, search, account (if enabled), basket, social, footer/legal, announcement, desktop/mobile/keyboard.
- [ ] **Collections**: all-products, each named collection, list-collections, empty and sold-out states, density, sort, pagination and responsive cards.
- [ ] **Products**: Planner, every insert/refill/accessory template, multiple variants, 1/multiple quantity, add-to-cart, Buy now, out-of-stock, discounts, recommendations and direct URLs.
- [ ] **Cart**: empty/multiple/updated/removed items, refresh, invalid stock, discount, drawer/full-cart, checkout handoff.
- [ ] **Search**: predictive and full results; article/page results if enabled, no-results and mobile keyboard.
- [ ] **Content**: About, Contact form, FAQ/help, standard pages, Journal/blog/article (if enabled), policy pages, 404, gift card/customer account if offered.
- [ ] **Platform**: checkout, confirmation, order status, emails, password/unlock, captcha/challenge, customer account, back/forward, hard refresh, deep links.
- [ ] **Page transitions**: internal click, back/forward, rapid repeat click, long pages, short pages, absent GSAP, slow network, reduced motion and focus restoration.
- [ ] **Shopify editor**: changing image/text/section settings does not break content, and editor preview doesn't trigger misleading public animations or forms.
- [ ] **Browser/device**: supported desktop browsers, actual iOS/Android, touch, keyboard, narrow portrait, tablet, landscape, zoom and reduced motion.
- [ ] **Commerce scenarios**: successful order, declined payment, address/rate mismatch, tax, delivery threshold, guest/account, discount, cancel/refund, fulfil/partial fulfil, notifications.
- [ ] **Technical**: SEO/schema, canonical/redirects, analytics, consent, speed/Core Web Vitals, asset licensing and accessibility checks.
- [ ] **Operations**: staff can receive, pick, dispatch, track, refund and answer a real order.

## Q2. Formal go/no-go checklist
- [ ] Every row in the launch coverage matrix is \`[x]\` or a formally approved N/A/deferral; **no unowned blocker**.
- [ ] Stakeholder design approval for the brand system, desktop/mobile key templates and key motion sequences.
- [ ] Trading, catalogue, payment, shipping, tax, legal and support owners approve their respective configuration.
- [ ] Review all remaining placeholders, dead links, unpublished product exposure, theme-test pages, dated countdowns and third-party app trials.
- [ ] Place and verify representative test orders against checkout, email, inventory, fulfilment, taxes and refunds. Shopify requires testing of checkout/operations before opening.
- [ ] Confirm GitHub \`main\` vs correct **ASTER** production theme parity and backup rollback theme; deploy only after explicit authorisation.
- [ ] Final SEO/indexing/redirect, accessibility, analytics and responsive visual audit complete.
- [ ] Confirm payment test mode is disabled and live capture/payout enabled.
- [ ] Approve exact launch window, operator and rollback criteria; remove storefront password **only when ready**.
- [ ] Verify live homepage, product, collection, cart, checkout, forms, emails and route transitions immediately after opening.

## Q3. First week after launch
- [ ] Monitor checkouts/conversion, payment failures, fulfilment errors, support mail, form deliveries, stock discrepancies and order emails.
- [ ] Monitor browser/JS errors, transition failures, Core Web Vitals, mobile sessions and accessibility regressions.
- [ ] Monitor Google indexing/crawl, sitemap, redirects, 404s, analytics events and feed rejection if applicable.
- [ ] Prioritise verified defects, keep a changelog and rollback plan, and avoid ad-hoc cross-theme changes.
- [ ] Close the launch milestone with date, evidence, outstanding low-priority exceptions and named operational owners.

---

# R — FUTURE SUPPLEMENT RELEASE GATE (NOT A JOURNAL-LAUNCH REQUIREMENT)

**Separate release.** The shared brand and ecommerce architecture must accommodate it, but do not imply products or legal approvals already exist.

- [ ] Confirm actual product formulation, supplier/manufacturer, ingredients, variants, SKUs, weights, shelf-life, storage and stock/lot traceability.
- [ ] Complete regulatory/legal review for each product category, UK food-supplement labelling and safety requirements and substantiated advertising/health claims.
- [ ] Obtain approved pack photography, ingredients/nutrition, allergens/warnings, directions and approved UK product-copy/SEO assets.
- [ ] Sign off supplement-specific PDP, product cards, FAQs, related products and subscription/one-off purchase UX.
- [ ] Configure any Appstle selling plans only with real prices, cadence, terms, cancellation/returns and customer notices; test renewals and failures.
- [ ] Validate shipping restrictions/packaging and destination regulations for supplement products.
- [ ] Complete supplement-specific checkout, warehouse, lot/expiry, returns, operational and cross-device release testing.
- [ ] Explicitly approve supplement release separately from the original Aster 0.2 storefront launch.

---

# IMPLEMENTATION ORDER — LOCKED UNTIL CHANGED IN THIS FILE

1. **A: Creative foundations / 0.2 art direction** — establish asset matrix and common motion/transition concept; iterate when each real template exposes a need.
2. **B: Navigation and header** — first mock-ups, sign-off, controlled build and verification.
3. **C: Footer and newsletter** — mock-ups, sign-off, controlled build and verification.
4. **D: Product cards, collections and list-collections** — realistic real-product mock-ups, sign-off and verification.
5. **E: Planner then refill/accessory PDPs** — full purchase journey and storytelling, sign-off and verification.
6. **F: Cart drawer/full cart** — complete transactional handoff.
7. **G: Search and discovery** — search from entry to results.
8. **H, I, J, K: Core pages, Journal, utility/account and checkout/post-purchase design** — no blank Shopify corners.
9. **L: Homepage only now** — large-scale GSAP storyboard and asset-rich mock-ups, then implementation.
10. **M, N, O: Password/launch transition, technical hardening and real catalogue/app integration** — work incrementally during earlier phases; final audit after homepage.
11. **P: Shopify Admin, shipping, payments, taxes, policies, fulfilment and operations** — late formal launch configuration as requested; any prerequisite (e.g., truthful shipping copy) can be identified earlier.
12. **Q: Full launch matrix, go/no-go, production deployment and first-week aftercare**.
13. **R: Future supplements** — separate release gate.

### Mandatory per-workstream sign-off record
After every approved build, record the following under **Progress ledger**:
- Workstream/section and **what changed**.
- Mock-up image(s) and stakeholder approval reference.
- Implementation commit/Shopify theme ID and parity result.
- Desktop/mobile/tablet/keyboard/reduced-motion tests and actual commerce checks where relevant.
- Issues/exceptions and explicit N/A or deferred decision.
- Next exact unit of work.

### Progress ledger

| Date | Milestone | Evidence / status | Next |
| --- | --- | --- | --- |
| 30 Oct 2026 | Aster 0.1 implementation state | Preserved in \`archive/ASTER_BUILD_ROADMAP_V0_1.md\`; many elements were signed off **against the old creative direction**. | Reframe for 0.2 |
| 11 Nov 2026 | Aster 0.2 rebrand direction | Private-club / affluent audience agreed; page transitions and ambitious GSAP experience requested; homepage deliberately deferred. | New master roadmap |
| 11 Nov 2026 | 0.1 documentation archived | Exact copies of old roadmap and old visual language retained in \`archive/\`; no storefront code or Shopify settings changed. | Create first navigation mock-ups |
| 11 Nov 2026 | Aster 0.2 master roadmap | All Shopify template families, commerce journeys, creative phases, admin, launch/QA and future supplement gate now inventoried. **Roadmap created; none of the 0.2 redesign work is falsely marked complete.** | **B1: Capture current navigation/header baseline and make the first 0.2 desktop/mobile mock-ups** |

### Open decisions / controlled exceptions

| Item | Status / required decision | Launch impact |
| --- | --- | --- |
| Correct Aster Shopify Admin and MAIN theme ID | Not verified via current Shopify connection; obtain safe Aster-specific confirmation before any store action | Blocks production parity and launch |
| Exact launch geography, shipping rates, thresholds and carriers | Open; settle in P, before publishing delivery promises | Blocks trade |
| Real product catalogue / stock / price approval | Audit in O and P | Blocks trade |
| Guest accounts, gift cards, reviews, editorial publication, social/marketing channels | Explicit yes/no per feature; document N/A when excluded | No hidden broken features |
| Countdown target 1 Nov 2026 | Historical date has passed; audit M before any live campaign | Blocks stale pre-launch experience |
| Future supplements / subscriptions | Separate R gate; not required to launch journals/accessories unless scope changes | Does not block initial launch |
| Homepage concept and mock-ups | **Intentionally deferred** until interior pages, content assets and motion grammar exist | Required before launch, not before foundation |
| Production theme publishing | Explicit user go-live decision only; never implied by design approval | Protected |

**Exact next action:** Produce new **Aster 0.2 navigation/header desktop and mobile mock-ups**, including open/closed states and the proposed transition choreography. Review and approve images before editing existing navigation code.
