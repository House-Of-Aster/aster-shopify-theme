# ASTER 0.2 — Visual Language & Motion Principles

**Effective:** 11 November 2026  
**Status:** Active 0.2 creative brief. Supersedes the original \`ASTER_VISUAL_LANGUAGE.md\` (archived unchanged at \`archive/ASTER_VISUAL_LANGUAGE_V0_1.md\`).  
**Canonical execution tracker:** \`ASTER_BUILD_ROADMAP.md\`. Record **all work status, approval and launch exceptions there**, not here.

## 1. The House of Aster: brand proposition

Aster is a **luxury lifestyle house**, beginning with journals/planners and accessories and extending later to supplements. It is not primarily a wellness shop with premium styling.

The storefront should feel like **gaining entry to an exclusive private club**: an assured, almost private world, beautifully art-directed, occasionally unexpected and effortless to explore.

The audience is affluent, socially connected, style-conscious women who value beautifully made things, quality, discretion, individuality and exclusive experiences. Relevant cultural cues are British private members' clubs, country-house weekends, elegant race-day hospitality and the Grand National social milieu, fashion editorials, fine personal stationery, richly material interiors and considered luxury retail. **"Ladies who lunch, with money" is the internal shorthand, not public-facing copy.**

Do **not** interpret this literally as a horse-racing, heritage-hotel or aristocratic parody. No default crowns, polo players, horses, champagne silhouettes or unnecessary gilded embellishments. Aster must be aspirational yet inviting, exclusive without false claims of membership or a manufactured history.

**Retired direction:** European café culture, ordinary everyday ritual and "generic calm wellness" are no longer core creative drivers. An existing café image may still be retained if the *specific composition* meets the new brief; it should not define the design system.

### Brand character

- Sophisticated, self-assured, quietly provocative and occasionally mischievous.
- Opulent where the imagery earns it; never vulgar or visually busy just to demonstrate wealth.
- Intimate, tactile, elegant, slightly theatrical and subtly mysterious.
- Warm and human rather than distant, preachy or clinically instructional.
- Editorial rather than assembled from familiar Shopify section blocks.
- Commercially excellent: essential shopping functions are immediately understandable.

**Core statement:** *The House of Aster is a world of considered luxury, not simply an online shop.*

## 2. Brand references and what they teach us

The supplied Aster imagery includes physical secret-message/ticket printing, handwritten notes and personal correspondence, intimate editorial treatments, tactile paper and metal, witty printed statements, crafted interiors and suggestive atmospheres.

These are **ways of thinking**, not universal decorative patterns.

- **Intrigue:** a private invitation, something discovered, a message intended for the visitor.
- **Physicality:** paper, textile, metal, velvet, leather, marble, shadow, imperfect reflections and dimensional photography.
- **Editorial wit:** knowing messages with personality and intelligence; no vapid inspirational slogans.
- **Discretion:** elegant restraint, negative space and confident imagery.
- **Occasion:** fashion, social lives, private settings and unhurried luxury.
- **Modernity:** sophisticated interactive execution rather than a faux-vintage website.

Bear artwork is a quiet signature, **never an animated mascot, omnipresent icon or gimmick**.

## 3. Colour and material direction

Retain the existing core palette until a newly approved central palette replaces it:

| Colour | Hex | Intent |
| --- | --- | --- |
| Ivory | \`#F8F6EB\` | Warm editorial canvas and breathable contrast |
| Aster Red | \`#A52D34\` | The clearest brand recognition, dramatic brand surfaces |
| Wine | \`#6B2331\` | Deep quiet confidence, rich contrast and text |
| Blush | \`#E8DAD2\` | Soft tonal relief and restrained product support |
| Blue | \`#3E6990\` | **Reserved**, not part of active storefront unless approved |

Physical luxury materials may supply *photographic* colour outside the tokens: copper, bronze, rich brown wood, warm light, muted brass, black shadow, textured burgundy textiles. These do **not** authorise random gold gradients or ad hoc CTA colours.

### Global colour governance

- Shopify **Theme Settings → Colours / colour schemes** remain the global source of truth.
- Normal components consume schemes/tokens, not local hard-coded colours or a stack of per-section colour pickers.
- Use Aster Red confidently but with carefully choreographed changes to ivory/wine scenes.
- Treat colour changes as part of editorial direction and motion.
- Avoid decorative frames, default shadow-heavy cards and generic rounded rectangles.
- The old colour/spacing system is a **working baseline**, not an unchangeable 0.2 design decree.

## 4. Typography

Typography helps create private-club authority, personality and scale.

- Elegant editorial serif headings with confident display moments.
- Crisp contemporary type for utility, body text, buttons and commerce.
- Sparing handwritten/lettering touches for genuine intimate notes or distinctive hero copy.
- Large/oversized statements and strong scale contrasts when appropriate; restrained type where shopping clarity needs it.
- Avoid pseudo-heritage overload, all-caps in every component and illegible animated body copy.

Preserve the existing global typography role architecture:

- **Body** for normal content, metadata, supporting navigation and microcopy.
- **Heading** for semantic titles.
- **Display** for selected art-directed editorial moments only.
- **Subheading** for deliberate supporting hierarchy.
- **Navigation** for primary top-level menu labels only; do not style whole \`nav\` ancestors with it.
- **Button** for actual controls.
- **Product Card Title** for shared commerce cards.

Existing fonts remain available: Garet Book (400), Garet Heavy (700) as real weights, Rufina Bold and British Poems. **Do not hard-code these into normal components** when role tokens suffice. A new handwriting/lettering treatment requires brand approval and appropriate font rights.

Every animation of text must be accessible and preserve a readable, unanimated fallback.

## 5. Photography, film and physical art direction

- Premium photography with cinematic lighting, nuanced shadow and confident art-directed crops.
- Architectural atmosphere, private environments, interior richness, editorial portraiture and polished still-life.
- Tactile product imagery: paper grain, edges, binding, inserts, personal objects and materials.
- Use original or appropriately licensed imagery, never lifted assets from inspiration sites.
- Allow occasional full-bleed cinematic scenes to escape the normal content container.
- Build separate **responsive crops/safe zones** for desktop and mobile rather than blindly shrinking assets.
- Product photographs must also remain clear enough to support price/variant/purchasing decisions.
- Subtle visual imperfections can signal physicality; avoid low-quality images, unreadable type or busy visual noise.
- Photography drives style; vector ornaments should not be needed to manufacture luxury.

For each visual-heavy section, specify original/source asset, rights, aspect ratio, intended viewport, mobile crop, alt behaviour, file-weight budget and fallback. **Do not generate/upload unsanctioned images.**

## 6. Page composition: immersive, not a long white sheet

Aster is neither a typical endless vertical ecommerce column nor a wall of motion effects.

Use a rhythm of:
- Bold scene openings, sometimes edge-to-edge.
- Informed editorial layout with considered negative space.
- Layering, interesting crops, purposeful asymmetry and scale changes.
- Selected pinned or horizontally progressing storytelling where it improves narrative.
- Moments of near-stillness and beautifully composed static photography.
- Commerce moments that reset visual complexity and provide confident clarity.

The existing layout baseline remains available:
- Maximum conventional content width **1400px**.
- Desktop/tablet gutters **20px**, mobile **15px**.
- Existing adjacent-component gaps \`clamp(22px, 2.5vw, 32px)\` and \`18px\` mobile.
- Existing frame-radius token \`--aster-radius: 12px\`.

Those are **defaults for interface/transactional areas**, not universal cages for immersive scenes. Full-screen experiences may intentionally go beyond 1400px and use art-directed edge treatments. Do not replace thoughtful layout with dozens of independent spacing and radius settings.

Avoid excessive borders, ornamental rules, generic cards, default shadows and heavy outlined secondary buttons. Functional borders, focus rings and legible inputs remain valid.

## 7. GSAP and immersive motion: sitewide grammar

**Primary interactive experience inspiration:** \`landonorris.com\` — take cues from the immersive quality, transitions, layering, scrolling as storytelling, responsiveness and coherence. Do **not** clone its visual identity, assets or exact scene choreography.

**The homepage is intentionally deferred.** It will eventually receive Aster's strongest GSAP sequence after the internal-page motion grammar and real assets are established.

Our active interior-page motion language may include:
- Masked image reveals and confident but controlled scale changes.
- Composed typography transitions, intelligent stagger and soft visual depth.
- Editorial images that subtly respond to pointer/scroll or change crop.
- Selected horizontal and pinned storytelling on appropriate product or editorial pages.
- Interaction feedback for menu, cards, galleries, filters/search and cart.
- Scene colour/background transitions where they support story and contrast.
- Page-to-page visual continuity with a consistent **Aster Veil** transition concept.

### Motion quality rules

- Rich motion can be daring, **but should feel expensive**, not frantic, bouncy, cartoonish or exhausting.
- Purpose, timing and spatial continuity matter more than number of effects.
- Essential content must never be inaccessible until a scroll animation completes.
- Native scrolling is the baseline; **no forced scroll-jacking**.
- Preserve stable layout; prefer transforms, opacity and selective clip-path, with measured exceptions.
- Be mindful of motion on mobile, touch and slower hardware; adapt the narrative, not just its scale.
- Reduce or eliminate movement for \`prefers-reduced-motion\`, with complete content still visible.
- Focus/keyboard/a11y must survive any animated DOM/route transition.
- Use GSAP/ScrollTrigger and optional heavier tools **only in approved components**, with proper lifecycle cleanup.
- No global performance penalty from loading a heavy library on every template unnecessarily.
- ScrollTrigger and responsive resize logic must clean up correctly on Theme Editor load/unload.

## 8. Signature internal navigation: The Aster Veil (candidate concept)

Intended feeling: a page changes **within the same House**, rather than abruptly ending and reloading into a disconnected store.

Story direction:
1. Intentional internal link activation.
2. Controlled outgoing veil/architectural or editorial mask in Aster Red/Wine.
3. Short branded transition moment.
4. The destination is revealed as a continuation of that visual language.
5. Focus, browser history and scroll are correct when the transition finishes.

**This is a prototype proposal, not yet signed off.** The Aster Veil must be mock-up approved and tested before adoption.

Implementation safeguards:
- Use real links and normal direct URLs.
- Handle browser back/forward, refresh, deep links, hash navigation, anchor semantics, keyboard and accessibility.
- Provide sensible fallbacks for unexpected network delays, cancelled navigation, repeated clicks and reduced motion.
- Avoid intercepting Shopify checkout, third-party, customer account, payment, downloads, new-tab or external links unless technically justified and safe.
- Do not promise a true seamless app transition if the Liquid architecture requires a safe native page load; use a reliable transition veil rather than a fragile faux-SPA.
- Preserve analytics, consent, SEO, Theme Editor and app behaviour.

## 9. Page family art direction

### Header/navigation
An invitation into the House. Distinctive full-screen or spatial menu treatment, cinematic opening and beautiful type. Must remain intuitive, accessible and clear about categories, search, accounts and basket.

### Footer
The closing scene of the publication. Heroic brand identity, intentional colour, an elevated newsletter invitation and polished social/legal links. Never an abandoned standard multi-column footer.

### Collection/merchandising
Products are curated objects, not anonymous store tiles. Editorial prelude, strong cards, occasional dramatic compositions and precise commerce information. Sorting and purchasing remain understandable.

### Planner PDP
The physical product is the hero. Excellent buying interface, galleries and variant fidelity above the fold; immersive material, use and emotional storytelling below. No mandatory animation between shopper and Add to Cart.

### Refill/accessory PDP
Same visual House, a lighter but still elevated narrative; reuse the common commerce contract, no needless duplicate layouts.

### Future supplements
Fit seamlessly into the luxury House. Clear, substantiated ingredient/benefit information and regulated presentation when real SKUs exist; never clinical-template drift or exaggerated claims.

### Cart, search and utility
Quieter echoes of the rich visual system. These pages are for action and recovery from errors, not long cinematic delays.

### Editorial/content
Pages read like carefully produced fashion/lifestyle publications. Consistent typography, strong photography, thoughtful navigation and curated cross-links.

### Homepage
**Not to be storyboarded or built yet.** Eventually the most immersive, GSAP-led brand experience, composed once interior pages, actual imagery and transitions establish the language. Do not invent the homepage as a dependency for work on interior pages.

## 10. Commerce, accessibility, performance and credibility

A luxury experience must also function flawlessly:
- Real correct product variant, price, stock, quantity and currency.
- Clear checkout, shipping, returns, policies, account and contact routes.
- Working cart/search across refresh, keyboard, screen readers and mobile.
- Stable page composition, sensible image budgets, good Core Web Vitals and progressive enhancement.
- SEO-crawlable text, links, product data and proper heading hierarchy.
- No fake ratings, false prestige claims, invented availability, speculative product data or hidden legal information.
- Appropriate UK compliance and future supplement substantiation; operational tasks tracked in the roadmap.
- Any Shopify-owned checkout/account surface should be branded **within supported platform constraints**, not hacked into an unreliable experience.

## 11. Creative review test

A concept is not approved just because it looks premium as a screenshot.

Ask:
1. Would this feel credible for a well-established luxury House without pretending to have an invented history?
2. Does it have meaningful spatial/interaction design, or is it simply another long set of stacked sections?
3. Does it feel distinctive and editorial instead of a generic Shopify luxury theme?
4. Do the Planner and future supplements both belong here?
5. Is it inviting rather than alienating or theatrical to the point of inconvenience?
6. Can a customer use it with keyboard, mobile, reduced motion and imperfect connectivity?
7. Does it look like the **same artist** designed header, footer, collection, PDP, search, cart and the future homepage?

If not, iterate mock-ups before introducing implementation complexity.

## 12. Approval and working discipline

- Build **navigation/header first**, then footer, collections/cards, PDPs, cart, search, content/utility, checkout handoff and finally homepage.
- Each section: review existing implementation, produce 0.2 desktop/mobile visual mock-ups and key interaction states, get user sign-off, storyboard motion, implement in controlled units and verify.
- Keep **all** progress, completed checks, decisions and launch exceptions in \`ASTER_BUILD_ROADMAP.md\`.
- Do not treat 0.1 approvals as 0.2 approvals.
- Preserve existing Shopify functionality and source content unless a change is explicitly agreed.
- No live-store publication or admin setting changes merely because a mock-up or design brief is approved.
