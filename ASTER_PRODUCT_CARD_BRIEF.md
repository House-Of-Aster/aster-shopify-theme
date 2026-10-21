# Aster Product Card Brief v1

Canonical design and architecture brief for Phase 3.1 of the Aster Shopify theme.

Status: design phase only. Do not implement the storefront component until the visual direction and state matrix are signed off.

## Purpose

The Aster product card is the shared commerce primitive for collection grids, homepage merchandising, recommendations, search/discovery and other product-list surfaces.

It must be commercially useful without becoming generic ecommerce furniture. The card should help a shopper answer three questions quickly:

1. What is this?
2. Is it relevant to me?
3. What does it cost / can I buy it now?

Everything else is optional and must earn its place.

## Launch reality and future-proofing

Aster launches with a planner ecosystem first:

- The Aster Planner
- refill / insert products
- a pouch / storage accessory

Supplements arrive later after development and regulatory work. Future supplement states may include:

- coming soon
- preorder
- normal one-time purchase
- Appstle subscription purchase

Refills may also become subscription products where replenishment cadence makes sense.

Longer term Aster may sell wholesale without relying on Shopify Plus. The product-card architecture must therefore avoid storefront-only catalogue hacks that make SKUs, inventory or product identity ambiguous.

## Product versus variant rule

Default rule:

- Separate product when the item has meaningfully different purpose, search intent, merchandising story, replenishment cadence or independent recommendation value.
- Variant when the shopper is choosing a minor form of essentially the same product, such as colour, finish or quantity where the core purpose is unchanged.

Do not create separate products purely to manufacture SEO landing pages.

For planner inserts this means functionally distinct refills should usually be modelled as separate products if they deserve their own page and can be independently merchandised or subscribed to.

## Information contract

### Required in the standard card

- Product media
- Product title
- Current price
- Compare-at price when genuinely on sale
- Availability state where it changes purchase expectations
- Crawlable product link

### Strong candidates

- One controlled contextual descriptor
- Review average plus review count once reviews exist
- One merchandising/status badge
- Secondary merchandising image on pointer hover

### Conditional only

- Subscription saving / replenishment cue
- Unit or per-serving price
- Variant indication
- Quick-buy / quick-view entry point

### Deliberately excluded from v1 by default

- Wishlist
- Product comparison
- multiple simultaneous badges
- low-stock urgency messaging
- full ingredient summaries
- unbounded marketing-claim copy
- permanent large Add to Cart button on every card

These can be revisited only when real catalogue or behaviour proves a need.

## Information hierarchy

Standard reading order:

1. Media
2. Availability or one controlled merchandising badge
3. Product title
4. Contextual descriptor
5. Reviews when available
6. Price / compare-at price
7. Optional quiet subscription or value cue

The contextual descriptor must be a controlled field, not free-form promotional copy. It should identify category, ritual, quantity, refill period or another concise factual differentiator.

Examples:

- Daily planning
- Three-month refill
- Planner accessory
- Morning ritual
- 30 servings

## Badge and state priority

Maximum one prominent badge in the base card.

Priority order:

1. Sold out / unavailable
2. Preorder
3. Coming soon
4. Other operational state that changes buying expectations
5. Merchandising badge such as New or Best seller

Sale should normally be communicated through price treatment rather than consuming the badge slot.

If a product is both Best seller and Sold out, Sold out wins.

If a product is New and reduced, New may remain the badge while the compare-at price communicates the reduction.

## Reviews

Reviews are part of the planned Aster commerce experience.

Current preferred direction: Judge.me for product-level reviews, with Trustpilot potentially added later as a separate brand-reputation layer if scale justifies it.

When ratings are shown on a card, show both:

- average rating
- review count

Do not show a star score without its sample size.

Cards must remain visually complete when review count is zero or the review provider is absent.

## Subscription architecture

Expected future provider: Appstle.

The base card must not depend on Appstle JavaScript to render core product information.

Subscription messaging should be progressively enhanced and optional. Potential compact cues:

- Subscribe & save
- Refill every 3 months
- From £X on subscription

Do not show subscription UI on products that do not support a selling plan.

Planner-refill subscriptions may use a different cadence and copy from supplement subscriptions.

## Preorder architecture

A future product may move through:

Coming soon → Preorder → Live

The card should treat these as states of one product rather than separate card designs.

Preorder status must be explicit enough that a shopper does not mistake it for immediate dispatch.

## Product-card modes

Build one shared commerce primitive with controlled presentation modes.

### Standard

Primary mode for:

- collection grids
- homepage featured-product grids
- related products
- recommendation sections

### Compact

Reserved for constrained contexts such as:

- predictive search
- search suggestions
- narrow recommendation rails
- cart cross-sells if later required

Do not create separate planner and supplement card components.

## Media direction

The first image should sell the product clearly.

Preferred desktop interaction candidate:

- primary image at rest
- soft transition to a deliberately curated lifestyle / ritual / detail image on hover
- no layout shift
- no dependency on hover for critical information

Do not blindly use `product.media[1]` as the hover image. A second PDP image may be packaging copy, a rear label or another unsuitable asset.

The implementation should later support a deliberate merchandising image source with a sensible fallback.

Mobile has no hover dependency. The primary image must stand alone.

## Motion

The card should feel calm and responsive rather than animated for spectacle.

Candidate motion:

- subtle media crossfade or restrained scale
- tiny card/media lift only where it improves tactility
- no bouncing
- no content reflow
- no hover-only information

Always respect `prefers-reduced-motion`.

## Visual constraints inherited from Aster

- Open composition, not boxed tile
- No decorative borders
- No default shadow
- 12px Aster media radius where framing is used
- Colours derive from the active colour scheme
- Product title consumes the dedicated Product Card Title typography role
- Supporting copy uses Body
- Buttons use Button typography if/when a button exists
- Whitespace and photography provide separation
- Commercially clear without looking templated

## Mobile grid assumption

Start by testing a two-column mobile product grid.

This is not locked until realistic content has been tested for:

- long titles
- review row
- compare-at prices
- badges
- subscription cues

Decision-critical information must not be removed simply to make two columns fit.

## Accessibility contract

The future implementation must provide:

- semantic product link using a real `href`
- visible keyboard focus
- meaningful image alt behaviour
- no nested conflicting interactive controls
- minimum touch targets for any buttons
- status text that is not communicated by colour alone
- correct price semantics for assistive technology
- reduced-motion support
- full baseline browsing without JavaScript

If quick buy is added later, focus management and error/state announcements become part of its acceptance criteria.

## SEO contract

- Product titles and product links are server-rendered in Liquid.
- Essential card content is not injected only by JavaScript.
- Product links are normal crawlable anchors.
- Card descriptors are written for shoppers, not keyword stuffing.
- Do not add Product rich-result JSON-LD to collection/list cards; product structured data belongs on the relevant PDP.
- Separate products should exist because they are genuinely distinct, not solely to create more indexable URLs.

## Performance contract

This component may repeat dozens of times on a page, so every cost multiplies.

Requirements for implementation:

- responsive image `srcset` and accurate `sizes`
- intrinsic media dimensions to prevent CLS
- lazy loading for non-critical card media
- explicit priority path controlled by the parent section for genuine above-fold/LCP candidates
- secondary hover media must not compete unnecessarily with initial load
- server-render essential title/price/link content
- do not iterate every variant when option/value data will suffice
- avoid one JavaScript instance per card
- use delegated behaviour for interactive enhancements where practical

## State matrix required before implementation sign-off

The approved visual direction must be tested against all of these:

1. Standard in-stock planner
2. Refill / insert product
3. Pouch / accessory
4. Sale product
5. Sold-out product
6. Coming-soon product
7. Preorder product
8. Subscription-eligible refill
9. Future subscription-eligible supplement
10. Product with reviews
11. Product without reviews
12. Single-variant product
13. Multiple meaningful variants
14. Long product title
15. Very short product title
16. No secondary merchandising image
17. Secondary image with different source aspect ratio
18. Price range where variants genuinely differ
19. Two-column mobile grid
20. Keyboard focus
21. Reduced-motion mode

A direction is not signed off if one of these states breaks the composition or requires a special-case redesign.

## Visual directions to prototype

### Direction A — Editorial First

Goal: maximum Aster restraint.

- imagery carries most of the selling work
- generous image-to-copy spacing
- minimal descriptor
- title and price dominate the text stack
- reviews are quiet
- no persistent quick-buy control
- hover uses lifestyle/detail media transition

Best fit if the brand experience should feel closest to an editorial lifestyle store.

### Direction B — Balanced Commerce

Goal: preserve editorial restraint while improving browse-stage decision support.

- strong imagery
- descriptor above or below title
- reviews visible but secondary
- clean sale/availability states
- quiet optional subscription/value line
- optional discreet quick-buy affordance only when relevant

This is the current leading direction to test first.

### Direction C — Commerce Forward

Goal: test the upper boundary of useful selling information without leaving Aster's visual language.

- clearer ratings and value cues
- stronger purchase-state communication
- quick-buy affordance more visible
- subscription saving surfaced when eligible
- still open, unboxed and image-led

This is deliberately a stress test. If it starts to feel like generic DTC, the useful elements should be harvested into Direction B rather than adopting the whole treatment.

## Mock content for design work

Use representative fixtures until real Aster products exist:

- The Aster Planner
- Daily Planning Refill
- Weekly Reset Refill
- The Aster Pouch
- Rise — future supplement
- Set — future supplement

Representative states can use invented prices solely for layout testing. These fixture prices are not merchant decisions and must never be published as real product data.

## Measurement plan for later analytics

When analytics is implemented, preserve the ability to measure:

- product-card impressions
- card → PDP click-through
- quick-buy usage if introduced
- card-originated add-to-cart rate
- collection → PDP progression
- revenue per collection session
- mobile versus desktop behaviour
- performance impact on LCP, CLS and INP

Do not instrument duplicate analytics events at component and section level.

## Sign-off gates

### Gate 1 — Brief

Agree this information architecture and feature boundary.

### Gate 2 — Visual direction

Compare Direction A, B and C using the same fixture products on desktop and mobile.

### Gate 3 — State matrix

Apply the winning direction to all required edge cases.

### Gate 4 — Technical architecture

Specify the Liquid API, data fallbacks, media source rules and optional integration hooks.

### Gate 5 — Implementation

Only after Gates 1–4 are signed off, build the shared Liquid/CSS component.

### Gate 6 — Real-catalogue validation

When Aster products exist, validate the component against live product objects and real merchandising media before calling Phase 3.1 complete.

## Research basis

The brief is informed by:

- Baymard product-list UX research on decision-critical list information, ratings, product variations, unit pricing, quick view and badge hierarchy.
- Shopify theme guidance on server-rendered essential product content, responsive media, LCP prioritisation, progressive enhancement, product variants and avoiding variant over-fetching.
- Current Shopify commerce patterns that distinguish standard and compact product-card contexts.
- Successful Shopify brand references including Represent, Gymshark, Healf, Tropeaka and Only Curls.
- Agende as a direct planner-system reference for separate functional insert products, planner accessories, preorder handling and refill subscriptions.

External references are research inputs, not templates to copy. Aster's visual language remains the design authority.
