# ASTER 0.2 — Master Build, Rebrand and Launch Roadmap

**Status:** ACTIVE MASTER PLAN — reset for Aster 0.2 on 11 November 2026  
**Project:** The House of Aster · Shopify Online Store 2.0 · \`House-Of-Aster/aster-shopify-theme\` · \`main\`  
**Owner/sign-off:** Dave · **Current workstream:** D — collection/product-card finish; B/C implemented in part, final sign-offs pending  
**Theme implementation:** `Dave-Minall/aster-shopify-v02` · `aster-v02` · unpublished Aster 0.2 (Dawn 16.1.1). This House-Of-Aster repository on `main` remains the canonical documentation/roadmap ledger.  
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

- **Direct execution access (confirmed 19 November 2026):** Aster has working direct access to the Aster Shopify store/theme and both Aster GitHub repositories through connected tools. For implementation requests, **perform the authorised changes directly** in unpublished Aster 0.2, verify Shopify theme save and GitHub branch parity, and record the result here. **Never claim the Shopify/GitHub editing tools are unavailable without first checking the actual available connected tools and attempted access.** Do not shift the work back to the user as copy/paste files when connected execution is available. Keep live/published theme changes subject to separate explicit permission.
- Reuse the current Aster 0.2 Dawn theme architecture, Shopify data and correctly working ecommerce behaviour wherever possible; the earlier 0.1 Skeleton work remains an archived reference, not the active implementation. Visual mock-ups do not authorise unreviewed rebuilds.
- **Mock-up → approve desktop/mobile/state variants → interaction storyboard → implement in controlled units → test/verify → record sign-off.** For each workstream, deliver one coherent unit rather than modifying unrelated parts of the store.
- Preserve \`ASTER_BUILD_ROADMAP.md\` path and update this checklist **after each verified milestone** with date, change/commit, testing performed, limitations and immediate next action.
- Prior 0.1 records are preserved *verbatim* in \`archive/ASTER_BUILD_ROADMAP_V0_1.md\` and \`archive/ASTER_VISUAL_LANGUAGE_V0_1.md\`. Do **not** lose prior architecture, feature decisions, known pitfalls or historical sign-offs; refer to the archive when implementing.
- The active 0.2 theme code is in `Dave-Minall/aster-shopify-v02` on `aster-v02`; the canonical roadmap and visual language are in `House-Of-Aster/aster-shopify-theme` on `main`. Specific V2 changes have been previewed in the unpublished Aster theme, but Shopify ASTER MAIN / published-theme parity remains **unverified**. Do not assume a connected Shopify account points to Aster.
- Never alter the femme or Una stores by mistake. Do not update Shopify production settings or publish the theme without explicit authorisation.
- Use British English; do not duplicate independent brand colours/typography controls across sections.
- User-provided brand images and mock-up references remain creative inputs, not permission to replace existing product photography or create new storefront assets without approval.

---

# 0.2 LAUNCH COVERAGE MATRIX

The matrix is an index: every row is a required review of the feature, an approved exclusion or a conditional gate. **No row may be left unresolved at launch.**

| Surface / area | Current 0.1 baseline | 0.2 acceptance | Workstream |
| --- | --- | --- | --- |
| Brand / assets / motion system | Foundations exist | [~] Direction agreed; full system not signed off | A |
| Announcement / header / navigation | Built | [~] 0.2 copper header/nav implemented; full functional and cross-device sign-off outstanding | B |
| Footer / newsletter / global closing scene | Built | [~] Editorial footer implemented; full form/keyboard/responsive sign-off outstanding | C |
| Shared product / category cards | Product card built | [~] Redesigned cards and working Choose options modal; swatches and full QA outstanding | D |
| Collection / collection listing | Collection built; listing generic | [~] Main collection redesigned; list-collections and full D sign-off outstanding | D |
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
- [ ] Review the actual `templates/collection.liquid` and `assets/aster-collection.css`/JS against the 0.2 artwork, keeping real Liquid product pagination and SEO content intact.
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

The 12–19 November entries below reconcile V2 with the working code and remembered preview checks. They are **partial implementation checkpoints**, not blanket `[x]` acceptance or proof of Shopify production parity.

| Date | Milestone | Evidence / status | Next |
| --- | --- | --- | --- |
| 30 Oct 2026 | Aster 0.1 implementation state | Preserved in \`archive/ASTER_BUILD_ROADMAP_V0_1.md\`; many elements were signed off **against the old creative direction**. | Reframe for 0.2 |
| 11 Nov 2026 | Aster 0.2 rebrand direction | Private-club / affluent audience agreed; page transitions and ambitious GSAP experience requested; homepage deliberately deferred. | New master roadmap |
| 11 Nov 2026 | 0.1 documentation archived | Exact copies of old roadmap and old visual language retained in \`archive/\`; no storefront code or Shopify settings changed. | Create first navigation mock-ups |
| 11 Nov 2026 | Aster 0.2 master roadmap | All Shopify template families, commerce journeys, creative phases, admin, launch/QA and future supplement gate now inventoried. **Roadmap created; none of the 0.2 redesign work is falsely marked complete.** | B: Header/nav |
| 12–18 Nov 2026 | B: Header/navigation — V2 recovery checkpoint | Copper header, Aster branding, slide-down navigation, backdrop treatment, search-entry animation and responsive interaction iterated on unpublished Dawn 0.2. User soft-approved navigation presentation; final keyboard/zoom/reduced-motion and all-state sign-off unrecorded. | Retain and regression-test during D/E |
| 12–18 Nov 2026 | C/A2: Footer and global controls — V2 recovery checkpoint | Editorial footer with “A slower inbox”, newsletter, menu/social links and stripped-back payment icons implemented; global typography/colour controls centralised in Theme Settings. Some footer preview/code/Theme Check evidence reported in V2. Full consent/form/mobile/keyboard testing and formal sign-off remain outstanding. | Retain and regression-test during D/E |
| 18 Nov 2026 | D: Collection redesign — V2 recovery checkpoint | Bespoke desktop/mobile hero artwork, toned-down overlay, editorial chapter with arched portrait, “The Aster Memoir” copy, layered/parallax depth, independent GSAP grid entrance, 1600px content limit and selectable 4/3/2-column merchandising. Collection template and styles are on `aster-v02`; full variants/sorting/empty/accessibility/list-collections QA outstanding. | Finish product-card details |
| 19 Nov 2026 | D: Product cards and Choose options | Duplicate title over thumbnail removed; button stroke removed and CTA text bold; price/CTA alignment retained. Dawn standard quick-add modal and CSS z-index interception fix exist in `snippets/card-product.liquid`, `sections/main-collection-product-grid.liquid` and `assets/aster-house-collection.css` on `aster-v02`. V2 recorded a successful click test and desktop/mobile rendering check in unpublished theme. **End-to-end selected-variant/cart testing not yet signed off.** | Add colour/material swatches over thumbnails; then verify variant/image/price/cart/keyboard/touch behaviour |
| 19 Nov 2026 | D: Quick-add modal Aster styling | Implemented scoped `assets/aster-house-quick-add.css` and loaded it on `sections/main-collection-product-grid.liquid` only when standard quick-add is enabled. Uses Theme Settings colour/font tokens; designed ivory/Wine desktop split panel, accessible close, square variant/quantity controls, mobile sheet and reduced-motion support. GitHub branch `Dave-Minall/aster-shopify-v02` (`aster-v02`) at `0ed74490f68f879e7c3d5d135e7618aae873139e` (plus integration `9b5a6dd251b24f048095045dc5549086c3010920`). Saved on **unpublished** Aster 0.2 Shopify theme `205224673544`, version `b20ca3a4ed1e1b68ae4902f65ecca3cb640476ab`; post-save read verified both files. Desktop/mobile collection-page preview screenshots requested; screenshot service cannot open the modal, so **popup visual sign-off, keyboard/touch, variant-to-cart and payment-widget QA remain pending**. No product/price/JS modifications and no theme publication. | Preview and test open popup on desktop/mobile with real variant/quantity products; then add thumbnail swatches |

| 19 Nov 2026 | D: Quick-add modal styling rollback | User reported unwanted side gutters around collection sections and unchanged modal appearance. Reverted the immediately preceding Shopify Aster 0.2 draft-theme version (`b20ca3a4ed1e1b68ae4902f65ecca3cb640476ab`) by restoring `sections/main-collection-product-grid.liquid` to exact previous SHA `6fe94515aeedb8128c8253d674293d34ad38718e` and deleting `assets/aster-house-quick-add.css`. Shopify rollback version `5ad1a0fd79060442be52a0557faea3b9329cd124` saved successfully; post-save read verified file size 15966 bytes, absent new stylesheet and no pending changes. The GitHub working branch `aster-v02` automatically reflected this rollback. **Visual side-gutter issue is not established as fixed**: diagnose separately if still present. No other layout/theme files modified, no publication. | Obtain user visual confirmation; inspect actual collection width and modal separately before further changes |
| 19 Nov 2026 | D: Full-width collection surface correction | User recording confirmed persistent white gutters on **all three** collection stages while header/footer remained full width. Root cause: `assets/aster-house-collection.css` constrained outer Shopify section wrappers and stage surfaces with `max-width: var(--page-width)` (1600px, visibly narrower at browser zoom), rather than constraining only the content. Corrected the three outer wrapper/stage rules to full width while retaining `--page-width` on internal rails; updated `DESIGN.md`. Shopify Aster 0.2 **unpublished** version `9d58f6449c9330de3f269183dd1e4f5ac039457c`; post-save verified GitHub `aster-v02` source `bbcc329ef8cdeb70efacc58050642a54a8a1d474`, stylesheet syntax/braces, constrained rails, and no pending Shopify edits. Desktop/mobile collection captures requested, but exact viewport behaviour and interaction require user preview verification. Original Dawn Choose options modal deliberately untouched; prior modal restyle remains rolled back. | Confirm no white side gutters in user preview at their browser zoom; then separately inspect open Choose options modal before further styling |
| 19 Nov 2026 | D: Collection Choose options popup, scoped redesign v2 | Following the user's screenshot of the original white Dawn quick-add modal (Aster Pouch, Black/Chocolate/Oat, quantity and Shop Pay), saved an **isolated** redesign on Shopify unpublished Aster 0.2 theme `205224673544` version `21cb400f75b5e98040d9f9642e78b0e7fcfc66cf`. Adds `assets/aster-collection-quick-add.css` (12,504 bytes, balanced 62 CSS blocks), loads it only when collection standard quick-add is enabled in `sections/main-collection-product-grid.liquid`, and adds conditional `aster-collection-quick-add` class to the existing modal in `snippets/card-product.liquid`. Ivory/Wine theme-token styling, tighter desktop two-column layout, mobile bottom sheet, square option/quantity controls, stronger native ATC, refined close; no hard-coded product data or changes to Dawn quick-add/cart/Shop Pay logic. GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` auto-synchronised three files (CSS SHA `e474fd794102055a80b955fdd1aa02429e83d0b2`). **No edits to `aster-house-collection.css` or outer section widths**; post-save Shopify read shows full-bleed rules preserved and zero pending changes. Desktop/mobile collection captures requested; **open-modal appearance, Escape/focus, variant-to-cart and payment behaviour remain for user/browser sign-off**. Aster 0.1 live untouched. | Review open popup at desktop/mobile widths in draft theme; correct only modal issues, then D thumbnail variant swatches |
| 19 Nov 2026 | D: Quick-add modal layout repair after visual feedback | User screenshot exposed **missing product image**, very narrow options/purchase column, and off-brand white/black colour treatment after scoped modal redesign. Root cause in custom CSS: converting Dawn’s flex-based product grid to CSS grid without removing Dawn percentage widths. Repaired **only** `assets/aster-collection-quick-add.css`: restored native flex arrangement with high-specificity 44% image / 56% information widths, explicit media-gallery sizing, corrected mobile stacking, and inherited collection palette via `--ahp-paper` / `--ahp-wine`. Shopify **unpublished Aster 0.2** version `ac6cead43a1d6f881cf9864a1a85f49d6d37575f`, GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` CSS SHA `cd8c9a3a2aab964ed26f9527c92c225fd77271f2`. Verified saved source, balanced CSS, no pending edits, section full-bleed width declarations unchanged, quick-add class/link intact. **Open-modal appearance is not yet browser-verified**, so do not sign off. | Reopen Aster Pouch Choose options on desktop/mobile; confirm image, full-width variants/CTA, ivory/Wine and cart functionality; fix only modal findings |
| 19 Nov 2026 | D: Collection quick-add editorial treatment V3 | Following user visual feedback that the working Aster Pouch quick-add still looked “Shopify default”, added an explicit collection colour-scheme class to the existing modal (in `snippets/card-product.liquid`) and an isolated editorial treatment in `assets/aster-collection-quick-add.css`. Left stage: ivory/surface mat with outlined artefact frame and Aster monogram. Right stage: deep Wine correspondence panel, theme-derived foil rule, larger editorial title, ivory text/variant options and purchase action. Native Shop Pay remains unchanged. Preserves verified flex columns (47/53 desktop), mobile vertical layout, Shopify forms and existing full-bleed collection sections. Saved **unpublished** Aster 0.2 Shopify version `cf8d8a1e7802877f6806d2b5c807ef6f3980d5be`; post-save GitHub `aster-v02` CSS blob `57a8c431ecff34df32edd1973f0be6c6e61a7212`, 121 balanced CSS blocks, no pending Shopify edits. **Open-modal screenshot and end-to-end behavioural QA remain unverified by the read-only page screenshot tool**, so visual sign-off is pending. New styles are appended as a clearly marked V3 layer; after approval, consolidate into a single stylesheet without altering the result. | User to inspect Aster Pouch popup desktop/mobile; adjust isolated modal only if required, then proceed to thumbnail swatches |
| 19 Nov 2026 | D: Choose options, Editorial Folio V4 | User approved functional recovery and requested closer visual alignment with the beautiful Aster collection page. Replaced the previous 24 KB layered stylesheet with one consolidated **17.6 KB** `assets/aster-collection-quick-add.css` using collection cues: full Wine stage, arched ivory product portrait inspired by the chapter portrait, thin editorial letter-frame on ivory details panel, italic oversized display title, genuinely legible Wine/ivory variant and quantity controls, a Wine Add to Cart action and preserved native Shop Pay. Retained original Dawn quick-add modal, product data, price and variant events, and the colour-scheme class. Desktop uses 46% media / 54% details flex geometry; mobile stacks in a scrollable bottom sheet. Saved to **unpublished** Aster 0.2 theme version `6c490112a861c74c00b29169b6452b736e51dcd3`; GitHub `Dave-Minall/aster-shopify-v02` `aster-v02` asset SHA `28902e37a763488389d9ff4fb6b182bf631e7fd1`. Verified 82 balanced CSS blocks, unchanged outer collection max-width removal, intact quick-add link and scheme class, Shopify post-save read, zero pending edits. Collection-page screenshots attempted desktop/mobile; the **open modal and purchase interactions still require live preview sign-off** because tool cannot open it. The Aster 0.1 live theme remains untouched. | Inspect open popup for Aster Pouch on desktop/mobile: arch/photo crop, italic type, quantity control, variant selection, buy actions, focus and scrolling; fix scoped issues before D sign-off and thumbnail swatches |
| 19 Nov 2026 | D: Choose options V5 — remove arch, refine Shop Pay | User rejected the arched product image and oversized purple Shop Pay button, supplying a visual example. Modified **only** `assets/aster-collection-quick-add.css` in unpublished Shopify Aster 0.2 theme `205224673544`: removed arched gallery and monogram, returned to a square ivory product display on Wine with a light ruled border, maintained original native product/gallery/variant flex layout. Retained Shopify branded accelerated payment (Shop Pay colour cannot be overridden by theme per Shopify guidance); reduced its visual prominence via a centred 270px express checkout area, `EXPRESS CHECKOUT` label, Shopify-supported square corners and 46px button height. Shop Pay, other wallets, add-to-cart and checkout logic remain native. Shopify saved version `678acc54cd62fa1f2c48e2e90efb2adb600914e7`. GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` synchronised CSS SHA `0620bc76a289707c21b5b232835ea5c020d3bc27`, including explicit post-save Shopify/GitHub content equality, balanced CSS braces and zero pending changes. Full-width collection sections, header/footer, native form and Liquid all unchanged. **Open-modal appearance and cart interaction require user/browser verification**. | Review Aster Pouch desktop/mobile; confirm flat photo treatment and express checkout presentation; if a non-purple native Shop Pay button is essential, discuss replacing that branded wallet with a separately designed unbranded buy-now flow before implementation |
| 19 Nov 2026 | D: Choose options V6 — Buy now, scroll compensation and motion | User explicitly authorised replacement of purple Shop Pay inside **collection quick-add only** with bespoke Aster `Buy now`, defined to add selected variant/quantity and navigate to **cart** (not direct checkout). Implemented within existing Dawn `assets/quick-add.js` only for `.aster-collection-quick-add`: strips accelerated payment widget from injected modal product HTML; inserts native-looking secondary button; AJAX POST `FormData(form)` to Shopify `routes.cart_add_url`, cart redirect after successful response, error handling in original product-form alert, availability/disabled synchronisation, duplicate-click guard. The original Add to Cart, product pages, other wallet/checkouts remain untouched. CSS `assets/aster-collection-quick-add.css` replaces obsolete Shop Pay styles with theme-token Buy now button and adds **body scrollbar compensation** matching Aster cart drawer so opening modal does not alter background content width. Modal entrance is 300ms fade/lift; exit 180ms before Dawn releases focus and scrolling, with reduced-motion bypass; responsive mobile bottom sheet kept. Shopify unpublished theme `205224673544` version `d3bc7bc8d783c9e8d2b27c003b9033e51133f70e`. GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` saved code SHA `3c403447b1067e12f6a5608bc962ede8b276c58e`, CSS SHA `ff5193d31cb9a9b72b6202bb5d24b2cef74c1e46`; verified **exact Shopify/GitHub content match**, JS syntax compile, balanced CSS, no pending Shopify edits; desktop/mobile collection page captures completed. **Open-modal motion, no-shift at user's zoom, add-to-cart correctness and redirect remain interactive QA, not falsely signed off.** | User to test Aster Pouch in draft: open/close without page jump, variant/quantity, Add to Cart drawer, Buy now to cart, inventory errors, mobile/keyboard/reduced motion; then approve before swatches |
| 19 Nov 2026 | D: Choose options V7 — editorial keepsake folio | User still felt the V6 popup resembled generic ecommerce despite correct Aster colours, purchase buttons and motion. Reworked **only** `assets/aster-collection-quick-add.css` as a more distinctive extension of the collection's **three chapter cards, editorial captioning and physical paper**: Wine interior with graded illumination, `FROM THE HOUSE / THE COLLECTION` editorial rule, square ivory archival product photograph slightly rotated like a loose printed card with restrained paper-offset shadow and `THE ASTER COLLECTION` caption, established collection copy `For the story of a life.`, and elevated ivory selection folio with roman numeral `I.`, larger italic display title and more generous spacing. Genuine Shopify variant pills are paper-like selections with clear checked states; **Add to cart** and **Buy now** sit in a paired action row on desktop and stack on narrow mobile. Existing modal geometry/JS, accessibility controls, reduced-motion treatment and body width compensation preserved. No art images generated or product details hardcoded. Saved in unpublished Aster 0.2 Shopify version `1ee61396ea5db758b99f3bd9cc1884a274ec4df9`, synced GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` CSS blob `6fcb0c045d72df8221ad39284e3b6a03dc5cc838`, exact content match, balanced CSS and no pending theme edits. Desktop/mobile collection captures completed; **open modal visual design and full purchase/animation QA remain awaiting user confirmation**. | Ask for user desktop/mobile open-popup review, correct only scoped styling if required; then finish quick-add functional QA before thumbnail swatches |
| 19 Nov 2026 | D: Choose options V8 — cinematic Wine stage | V8 visual direction explicitly signed off: replace V7 polaroid/scrapbook treatment with premium upright catalogue photography in a subtly illuminated deep Wine stage, and reduce the ivory side from boxed Shopify controls to a quiet editorial purchase folio. Implemented **only** `assets/aster-collection-quick-add.css` on **unpublished Aster 0.2** Shopify theme `205224673544`: removed V7 captions, faux paper image border/rotation/shadow, Roman numeral and boxed variant pills; introduced theme-token Wine lighting/vignette, clean photo display, paper-toned panel with restrained foil spine, refined serif pricing/title hierarchy, underlined accessible variant choices, softened quantity controls, a strong full-width Add to Cart and a quieter underlined arrowed Buy now. Desktop/mobile styles updated. **No changes** to Shopify modal JavaScript, product data, quick-add purchase behaviour, scroll-lock compensation, close animation, header/footer or collection widths. Saved Shopify draft version `85b029c7a45bbecea66d07f7cd1021bf657b2e46`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` CSS blob `dfce5abed7e39b88accc996244042298fe0dc390`. Verified exact post-save GitHub/Shopify CSS match, 112 balanced CSS rules, existing JS SHA `3c403447b1067e12f6a5608bc962ede8b276c58e`, retained primary/secondary commerce controls, zero pending edits. Desktop/mobile *collection page* preview captures completed; **open-popup visual, purchase journey and animation remain interactive QA**. | Review the V8 popup at desktop/mobile sizes; correct scoped CSS only if needed, then complete quick-add functional sign-off before thumbnail variant swatches |
| 19 Nov 2026 | D: Choose options V9 — photographic collection reference | User rejected V8 as still looking generic, despite previous colour and spacing passes. Extracted a **text-free 850×1028 WebP crop** from the user-supplied luxury collection concept render (real crimson velvet, burgundy flowers, champagne still life) and uploaded it to Aster Shopify Files as `aster-collection-velvet-still-life-v9.webp`; this is a decorative backdrop, not a substitute for product photography. Within **unpublished** Aster 0.2 Shopify theme `205224673544`, added a scoped V9 visual layer to `assets/aster-collection-quick-add.css`: real photographic Wine environment, product image staged in front, raised asymmetric ivory folio overlapping the scene, restrained copper-toned borders/shadows, lightened native variant/quantity presentation, primary Add to Cart and subordinate Buy now. Mobile stacks into the existing bottom sheet. **No changes** to `quick-add.js`, product data, header, footer, full-width collection stages or live theme. Saved Shopify theme version `39008448663246288f7e490eb7322bca97225fc9`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` CSS SHA `d58b52995bde8a0efcf151bbe2ba97f01380af6f`. Verified CSS balanced, complete exact GitHub/Shopify contents match via two-part Shopify reads, collection desktop/mobile page renders, zero pending edits. **Open-popup visual, add-to-cart, Buy now, focus and no-jump QA still require live user/browser testing.** The V9 layer is currently appended to the previous CSS for controlled visual trial: **consolidate and remove obsolete V8 declarations after V9 sign-off** without altering its final appearance. | Review The Aster Pouch open quick-add in desktop/mobile preview, including visibility/crop of reference photography and contrast; then browser-test native cart and Buy now; consolidate CSS only after sign-off and proceed to thumbnail variant swatches |
| 19 Nov 2026 | D: Quick-add desktop image picker, 990 × 686 | User required the existing photographic image selectable through **Collection grid section settings**, as a **full popup background**, not a left-column photograph. Added `quick_add_popup_background` image picker to `sections/main-collection-product-grid.liquid`, with recommended 990 × 686px dimensions and desktop-only description. The selected Shopify image URL is passed as an inherited CSS property to all collection quick-add modals. The current V9 velvet image is preselected in `templates/collection.json` as `shopify://shop_images/aster-collection-velvet-still-life-v9.webp`; changing it in the theme editor is supported. Added desktop-only full-bleed background-size:cover styling behind the **entire** popup, including behind the existing floating ivory panel, to `assets/aster-collection-quick-add.css`. Desktop target width 990px and aspect ratio 990:686, with viewport-constrained size; **mobile remains V9 for a separate task**. Existing product images, Buy now/cart JavaScript, header/footer and collection widths unchanged. Saved on unpublished Aster 0.2 Shopify theme `205224673544` commit `7bed2256af1369e653fcec619405908e14f12f09`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` synchronised exact files: section SHA `53618847fbf2e91fac85fc63c6ffaf511f881584`, CSS SHA `f13ad742683a2d4ab3c945dbab5c16a94904bdbc`, template SHA `ab0759825081116114b86413dd86`. Section JSON schema and template JSON parsed successfully, CSS braces balanced; Shopify read-back exactly matches GitHub for all three files, no pending changes, desktop/mobile collection screenshots completed. **Open-popup photographic composition/viewport behaviour remain for user visual sign-off.** | User to check new desktop image setting and open Aster Pouch popup; then handle mobile redesign separately; continue collection swatches after modal QA |
| 19 Nov 2026 | D: Quick-add desktop scrollbar correction V10.1 | User screenshot exposed a vertical scrollbar within the 990×686 desktop modal: V10 constrained the outer popup's max-height but left `min-height: 625px` on its contents plus 29px paper-folio margins and padding. Fixed **only** `assets/aster-collection-quick-add.css` in unpublished Shopify Aster 0.2: explicit viewport-limited modal height (686px target), no outer overflow; remove the excessive desktop product/media minimum heights; compact the ivory panel and form spacing, with a shorter-window rule for heights up to 690px; allow longer or zoomed product forms to scroll inside the ivory panel without a visible scrollbar rather than clipping their controls. No change to mobile, image picker, selected velvet image, product/variant logic, Buy now, cart, modal animation, full-width collection layout, header/footer or live theme. Shopify saved version `72082be5e566ed8fec347f2ace976e9c6bf2bad4`. GitHub `Dave-Minall/aster-shopify-v02` `aster-v02` CSS SHA `a288bd282f817eee2a96b32bc3045d5ab637a6d0`; verified exact full CSS match to Shopify, balanced braces, zero pending changes, collection desktop/mobile page captures completed. **Actual open-modal appearance and all purchase flows remain unverified interactively; do not mark signed off.** The image picker is **Online Store → Themes → Aster 0.2 → Customise → Collections / Default collection → Aster collection grid → Choose options popup → Desktop popup background** (section settings, not global Theme Settings). | User to preview popup at original browser zoom and confirm no visible scrollbar, all CTA/details still accessible; mobile redesign remains deferred |
| 19 Nov 2026 | D: Quick-add desktop panel extension V10.2 | User screenshot of V10.1 reported an unwanted thin decorative line below product photo, and large empty strips below/right of the floating ivory purchase folio. Updated **only** `assets/aster-collection-quick-add.css` on Aster 0.2 draft: desktop-only `product__media-wrapper::after { content: none; }` removes the source pseudo-element line, and extends the ivory panel from 50% to 52% width with `height: calc(100% - 20px)` and 10px top/bottom, 8px right margin. Reordered the sizing rule after the previous grouped declaration to guarantee correct CSS cascade; matched the short viewport override to 10px. Preserved background image picker, 990×686 viewport-limited size, mobile rules, cart JS, animation and scroll protection, and all three collection widths. GitHub working branch `Dave-Minall/aster-shopify-v02` `aster-v02` commit `605309aa4427570f71aaef639a0c30902f2fbf5c` (CSS SHA `b64c3f4c829d3230545a17fbdc7c2b2fbcfda834`); same content written to Shopify theme `205224673544`, pre-save Shopify read verified exact new rules, desktop collection page capture completed, and Shopify theme version `2cd09f311800518480eebee2706feeb96ceaa9a7` saved without pending edits or errors. **Open-popup visual check still pending**; Shopify read-back after save was temporarily rate-limited, not assumed. | Preview Aster Pouch Choose options on desktop: confirm no line below image, ivory panel fills nearly to the right and bottom, all buttons and details visible; mobile remains deferred |
| 19 Nov 2026 | D: Quick-add missing height chain V10.3 | User screenshot showed the ivory purchase folio still ~60px short of the 990×686 popup bottom despite V10.2 `height: calc(100% - 20px)`. **Root cause inspected:** `sections/main-product.liquid` nests the rendered `.product` inside `<product-info><product-component><div class="page-width">...`, but V10.2 had set `height:100%` only on product-info and `.product`, leaving the two intervening wrappers at automatic height; the ivory folio was therefore resolving against content height. Fixed the missing height chain for **desktop only** inside `assets/aster-collection-quick-add.css`: `product-component` and its `.page-width` now use `display:block; height:100%; min-height:0`. The desktop folio retains a 10px bottom margin; no image resize or change to the background image picker. GitHub `Dave-Minall/aster-shopify-v02` `aster-v02` commit `eef1f4609ddf832f5c6bf3f75fcfabc8dfd89e18` / CSS SHA `c7881b3e003a9eda43e8ac5f5cb7695829e68918`, Shopify unpublished theme `205224673544` save version `736ef41cff02cbab76b5876c8452400164e17455`. Verified exact GitHub–Shopify CSS equality, balanced syntax braces, required height/folio rules, zero pending edits, desktop/mobile collection page captures. **The open modal is not directly capturable by the connected screenshot tool; user must confirm corrected bottom alignment and live cart actions.** | Preview Aster Pouch desktop Choose options; confirm ivory card extends to near popup bottom, controls remain visible and no scrollbar; then separate mobile pass |
| 19 Nov 2026 | D: Collection quick-add selected-image binding repair | User selected a new burgundy suede texture as **Desktop popup background** but the popup continued showing the older velvet still-life. Verified Shopify Files contains the newly uploaded `Suede.webp` (READY, 1506×1044) and **GitHub Aster 0.2 collection template** had saved `shopify://shop_images/Suede.webp`, while **Shopify draft `templates/collection.json` was still on the old velvet image**. Existing code applied the CSS variable indirectly on the collection outer wrapper and retained a hard-coded desktop fallback `var(--aq-still-life)`, creating a fragile binding and hiding missing values. Repaired direct data flow in **unpublished** Aster 0.2: `sections/main-collection-product-grid.liquid` now explicitly passes `quick_add_popup_background` to `snippets/card-product.liquid`; each collection quick-add modal receives the selected image URL on its own style attribute; `assets/aster-collection-quick-add.css` desktop background now resolves `var(--aster-quick-popup-background, none)` rather than the stale image fallback. Saved `templates/collection.json` on Shopify to the already chosen `shopify://shop_images/Suede.webp`; did not change user choice or product imagery. GitHub branch `Dave-Minall/aster-shopify-v02` `aster-v02` section commit `9e6d74d03000d9bb170b2579ed53e7094def8ac6`, snippet `d2a3245e4b3b2681b860aa65139b6876f7f067b2`, CSS `5df5aa1f15eb3515d445f1a285f8ae13795f450b`; Shopify unpublished theme version `b864f43076a23f861b3e2bd6b6309c7b018feb64` saved **all four files** with no pending edits or push errors. Post-save Shopify read verified the modal binding, selected Suede template value and removed desktop fallback; desktop/mobile collection-page screenshot calls passed. **Open-modal visual confirmation remains pending** due to screenshot tool limitations; mobile CSS and full-width collection/checkout behaviour otherwise unchanged. | Refresh draft preview, verify Suede texture appears behind the entire desktop popup; test changing collection picker without code edits; then separately style mobile |
| 19 Nov 2026 | D: Quick-add outlined actions V10.5 | User requested two styling changes to collection Choose options: **Buy now** must be a hollow button with the exact width/rectangular geometry of filled Add to Cart, and **View full details** must be a framed box. Updated only `assets/aster-collection-quick-add.css` on **unpublished Aster 0.2** theme `205224673544`: full-width, 55px minimum Buy now with a Wine 1px stroke, no arrow pseudo-element, hover colour inversion; full-width 44px bordered View full details link with retained native destination and native arrow; matching smaller controls for short desktop windows and reduced-motion support. No changes to `quick-add.js`, product images, selected Suede desktop background, collection widths, header/footer or live theme. Shopify saved version `d4a27808c9ae7999d9c41f1f35379a2e260a7432`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` commit `1c3418fd4f672a9599323a85a4e4d2e384b1979d`, asset SHA `55281597e41979a2be9056cee9c11ffda9999059`. Shopify CSS read back and GitHub synchronised, balanced braces, zero pending Shopify edits; collection page screenshots checked desktop/mobile. **Open-popup visual and click-path QA remain awaiting user approval.** | Confirm both outlined controls on desktop preview, Buy now redirects after adding to cart and View full details opens PDP; mobile refinement remains a later unit |
| 19 Nov 2026 | D: Collection 3 columns and footer-motion V10.6 | User requested desktop collection grid default **3 columns** instead of 4, undo boxed **View full details** popup button, and add footer-style hover motion for variant labels and details link. Inspected signed-off `assets/aster-editorial-footer.css`: hover/focus 4px `translateX` with 220ms `cubic-bezier(.22,1,.36,1)` and 0→100% underline drawing in 280ms. Updated current `templates/collection.json` product grid `columns_desktop=3` and section schema default `columns_desktop=3` in `sections/main-collection-product-grid.liquid`. In `assets/aster-collection-quick-add.css`, restored View full details to compact unboxed link (native arrow, full details navigation preserved); applied exact footer timings/movement/drawn underline to the link and clickable pill radio labels, retaining checked state as a permanent 2px underline, focus visibility and disabled/reduced-motion support. **Buy now remains full-width hollow and Add to Cart remains filled**; no JS, image picker, mobile redesign, header/footer or collection-wide layout other than grid count modified. Saved unpublished Shopify Aster 0.2 version `438b71d8e596d0cdbd84c760d745118ee9fba269`; GitHub `Dave-Minall/aster-shopify-v02` `aster-v02` section SHA `5f9c83e33033415be1f7e2820331ea2f6d613269`, template SHA `88de71673fe3aa4c1c5b907104a9557b32b8deae`, CSS SHA `f7ca2065f74f27ad0a438ed0f1228ed20d2e94a3`; **exact Shopify/GitHub Git blob hashes matched for all three files**, zero pending edits, desktop and mobile collection page screenshots completed. Open modal visual and interactive hover/variant/purchase QA remain for user review. | User to inspect three-column desktop grid and hover motion; after sign-off address mobile quick-add separately |
| 19 Nov 2026 | D: Quick-add variant hover-in and title animation V10.7 | User supplied a short screen recording showing the newly added variant underline only appearing after the pointer left the words. Corrected the **collection quick-add CSS only**: replaced the conflicting CSS background-size underline animation with an independent `label::after` rule animated using `scaleX(0 → 1)` on **hover-in**, retracting on hover-out while keeping `:checked` permanently underlined (2px). Preserved focus-visible/disabled semantics and reduced-motion handling. Added the signed-off footer navigation style (4px glide and 280ms drawn underline) to the clickable product title link and its italic heading; no title typography or destination changes. No edits to quick-add JavaScript, cart flow, Shopify product data, image picker, collection layout or mobile redesign. Saved to unpublished Aster 0.2 Shopify theme `205224673544` commit `324e32349d140c7a37ad398304d40737b2fc1a91`. GitHub `Dave-Minall/aster-shopify-v02` `aster-v02` commit `0684ba2b3dc05721410d46b99ad5d56ecd36f32c`, CSS blob `caef226d412cbb8407f761d64dc2aff8b3845f90`; exact Shopify/GitHub file blob SHA match, balanced CSS, zero pending edits verified. Collection-page screenshot tools were invoked; **open-modal live hover behaviour still needs user confirmation**. | Verify underline animates immediately on hover-in for Black/Chocolate/Oat and title moves/underlines; retain the three-column desktop grid and suede background |
| 19 Nov 2026 | D: Collection arch top-edge scroll clamp V10.8 | User supplied scroll recording showing the central arched chapter portrait moving behind the copper sticky header as the chapter scrolls upwards. Inspected source: the arch has `margin-top:-88px` within a sticky chapter, and the existing GSAP `aster-house-parallax.js` only animates its child image, never compensating the portrait frame against the header edge. Implemented a **desktop-only ScrollTrigger-driven clamp on the outer portrait** that reads its actual negative margin from computed CSS, tracks natural untransformed viewport top, and shifts the frame down only as needed once it reaches the sticky header bottom; capped correction at the overlapping margin. It keeps the initial arch/banner overlap and the separate inner-image parallax, and reverts automatically through the existing `gsap.context()` teardown on reload/facet rebuild. No product grid, quick-add, header, collection layout, image files or mobile rules modified. Saved unpublished Aster 0.2 Shopify theme `205224673544` commit `9113219e118d7923fdee814079e648a58cb924d3`. GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` commit `c980915f08ec29b3e3e930a097f588ab2f503bc7` asset SHA `417d6d284f32291fc5f54d10d2f92fa720dfe292`; verified exact GitHub/Shopify blob SHA, JavaScript syntax and zero pending edits; desktop/mobile collection page captures completed. **Scroll behaviour needs real-browser visual confirmation.** | Refresh unpublished collection, scroll until the arch reaches the bottom of the copper header and verify it holds that edge without rising behind it; ensure product grid still slides over the chapter; mobile unchanged |
| 19 Nov 2026 | D: Inner arch parallax stop correction V10.9 | User clarified previous arch stop had broken scroll: intended **the photo inside the arch** to stop its parallax when the arch frame reaches the **top of viewport (0px), behind copper header**; arch frame and chapter should continue moving normally. In `assets/aster-house-parallax.js` removed V10.8 `holdArchAtHeader` and all GSAP outer-portrait translation, leaving outer frame in normal chapter flow. Changed only desktop portrait **image** ScrollTrigger to `trigger: portrait`, `start:'top bottom'`, `end:'top top'`, `scrub:true` to stop internal photographic parallax exactly at viewport top without delayed scrub; original mobile chapter-triggered parallax retained. Reduced-motion and other chapter/grid animations unchanged. Unpublished Shopify Aster 0.2 theme `205224673544` saved as commit `6eaa2562244856e8999bfabfebf1aca8e83877dd`, GitHub `Dave-Minall/aster-shopify-v02` `aster-v02` commit `37da8fba5e7f4f4be74c3071463fe925e1f2c00b`, matching asset blob SHA `c5d9fce380fac65dbc45d5906de8a490921d5f90`, JavaScript compiled, desktop/mobile collection-page captures completed and no pending theme edits. **The scroll-specific effect requires real-browser user verification**; no changes to header, collection layout, mobile or commerce. | Refresh desktop draft, scroll through arch, confirm outer arch continues behind header but parallax inside stops when frame top touches viewport top; check reverse scrolling and chapter/grid layers |
| 19 Nov 2026 | D: Compact cart drawer line item controls V10.10 | User approved corrected arch parallax and requested tidier cart drawer item presentation. Existing Aster drawer kept Dawn's four-column table-derived grid, with a large quantity selector and conspicuous red remove icon beneath product information. Updated **only** `assets/aster-cart-drawer.css` on unpublished Aster 0.2: replaced row presentation with a compact three-column thumbnail / product information / line-price grid; quantity and remove controls align neatly in one subordinate row beneath item details. Quantity control reduced to 108px × 36px, native minus/plus/input left intact; remove action moved to far end with neutral theme-derived ink, subtle hover frame and 36px hit area. Item margins reduced and image constrained to 72px (62px on very narrow mobile), focus and reduced-motion support preserved. **No changes** to `snippets/cart-drawer.liquid`, cart JavaScript, quantity validation, stock rules, discounts, order values, checkout, drawer motion, header/footer or live theme. Shopify draft theme `205224673544` committed version `c91f8c7083ce34725ffba38f0301683a26782b12`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` commit `0ffb1a90c399d94396a091bf9fd733ba76bafd2c`, CSS SHA `e0a7980ca565e95a1c95901339d1efe87ac77ebd`. Verified exact GitHub/Shopify blob match, balanced CSS braces, no pending edits, desktop/mobile collection page preview rendered. **Cart drawer open-state and live quantity/remove interactions require browser QA.** | Review one-/multi-item drawer on desktop/mobile, quantity updates and removal, discount and inventory edge cases; iterate CSS only if alignment or spacing needs improvement |
| 19 Nov 2026 | D: Single line-price cart drawer V10.11 | User approved the tidier Aster cart drawer with its larger left thumbnail, but found two identical £29.99 prices redundant. Clarified left figure was **unit price** and right figure **line total** (reflecting quantity and discounts). User prefers retaining only the prominent right-hand total. Removed only the entire per-unit price Liquid conditional block from the Aster cart drawer's details cell in `snippets/cart-drawer.liquid`, not via `display:none`; right column still displays `item.original_line_price`/`item.final_line_price` with strikethrough and sale price for discounted line totals, and item discount labels remain. Left product name, variant/properties/selling plan, bigger thumbnail, compact quantity, remove action, quantity/cart JS and all surrounding layout unchanged. Saved Shopify **unpublished** Aster 0.2 theme `205224673544` version `894091e1414aabc8e0e3a97652a5e6d5409f0e3b`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` commit `092ad37a6aa9efec52bce706946d4f520cd72687`, blob `0df9932d922cd6c7d8b58b4859252a58c8a1c682`. Exact Shopify/GitHub blob equality verified, no pending edits; desktop/mobile collection renders succeeded. **Open cart drawer and discounted multi-quantity behaviour remain browser QA.** | Review draft drawer with quantity 1 and 3 and a discount: right line total should update correctly; confirm no redundant unit price and no unexpected spacing |
| 19 Nov 2026 | D: Cart thumbnail and remove icon proportions V10.12 | User approved removal of redundant per-unit price and requested the portrait thumbnail to match the title/variant/quantity stack height, with a larger trash SVG roughly as tall as the 36px quantity selector. Updated only `assets/aster-cart-drawer.css` on **unpublished Aster 0.2**: first grid column / thumbnail now 8.4rem high on desktop, 7.6rem on narrow mobile, preserving `object-fit:contain` and natural product aspect; remove button's `svg-wrapper` and `.icon-remove` expanded to 3.2rem within its unchanged 3.6rem accessible target, with tighter icon padding. Native remove button, quantity behaviour, right line total, product information and drawer motion unchanged. Shopify draft version `b23fb5c428417ac17d833b520375640b34c24c5b`, GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` commit `4ded7dac970ec7dc70c875a5b0a14afb959c0ae2`, matching CSS blob `b23f3e0124cc5d679d8e9265cd51d1beb6d7687e`. Exact GitHub/Shopify equality, balanced CSS and no pending edits verified. Screenshot service was rate-limited, so **open-cart visual testing remains outstanding**. | Refresh unpublished preview and inspect larger thumbnail / remove icon in cart drawer on desktop and mobile, test item removal and quantity; do not alter checkout or published theme |
| 19 Nov 2026 | D: Desktop collection grid setting override fixed V10.13 | User observed a four-column grid with a blank fourth slot although the theme editor correctly said three columns. Root cause verified in `assets/aster-house-collection.css`: an explicit desktop `grid-template-columns:repeat(4,minmax(0,1fr))` overrode Shopify's `grid--3-col-desktop` class; a second hard-coded 3-column breakpoint also ignored future editor choices. Removed both fixed desktop column counts and made the CSS use `repeat(var(--aster-collection-desktop-columns,3),minmax(0,1fr))`; `sections/main-collection-product-grid.liquid` passes the actual editor setting directly on the product-grid `ul`. Existing collection template already has `columns_desktop: 3` and section schema default is 3, so **desktop now uses three actual equal-width columns** and subsequent editor column changes will work. Preserved 2-column mobile rule, card dimensions/baselines, header/footer, popup, cart, animations and live theme. Saved **unpublished Aster 0.2** theme `205224673544`, Shopify commit `37a6507241dfee775ac806dce9319dcf400ae7e6`; GitHub `Dave-Minall/aster-shopify-v02` branch `aster-v02` section commit `5ac37444eb6bf9aa6ff3182d7009da5561bba425`, CSS commit `a795cb182c27307ad02fa57e6ff4d85daf37f57b`. Verified exact Shopify/GitHub blob hashes for both changed files, no pending edits; collection preview checks invoked desktop 1440px and mobile 390px. Open storefront visual confirmation remains for user. | Refresh draft collection and confirm first row has three equal-width cards without a reserved fourth column; optionally change editor setting to verify responsive desktop grid |
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

**Exact next action (19 Nov 2026):** Refresh the unpublished Aster 0.2 collection at desktop width and verify three cards fill the row equally without an empty fourth slot. The underlying hard-coded CSS override is removed; the `Aster collection grid` editor `Desktop columns` setting now controls real grid track count. Shopify and GitHub parity is verified, with zero pending edits. Keep two-column mobile layout, published theme, header/footer, cart drawer, popups, image picker and arch scroll unchanged. Later tasks remain mobile quick-add design and product-card swatches.
