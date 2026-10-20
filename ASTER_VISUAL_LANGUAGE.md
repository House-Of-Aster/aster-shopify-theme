# ASTER Visual Language

Canonical art-direction companion to `ASTER_BUILD_ROADMAP.md`.

This file records the visual rules that should govern every Aster storefront component and template.

## Core direction

Aster should feel like an editorial lifestyle brand that happens to sell wellness products, not a conventional supplement store.

The visual language is:

- premium
- editorial
- warm
- European café influenced
- restrained
- cinematic where motion is used
- commercially clear without looking templated

The brand should feel composed, grown-up and distinctive rather than clinical, spa-like, maximalist or generic DTC.

## Brand hierarchy

- Ritual before function.
- Experience before ingredient-first messaging.
- Photography before decoration.
- Editorial composition before ecommerce furniture.
- Product remains commercially clear, but the store should feel designed rather than assembled.

## Colour

Core palette:

- Wine: `#6B2331`
- Cream: `#E6D3BD`

Wine and cream should dominate.

Use colour blocks and contrast between schemes to create structure rather than decorative UI chrome.

### Colour governance

The global **Theme settings → Colours** scheme system is the single source of truth for storefront colour.

Rules:

- New sections and components must consume the active colour-scheme variables.
- A section may expose a colour-scheme picker where a different scheme is useful.
- Do not add individual background, text, button or accent colour pickers to normal sections.
- Do not hard-code brand colours into reusable storefront components.
- Component states should derive from the scheme wherever practical.
- Add a new colour token to the global scheme only when the whole design system genuinely needs it.

The objective is that a palette change can be made centrally and propagate across the storefront without hunting through individual sections.

## Borders

Aster does **not** use borders as a decorative design language.

Rules:

- No bordered cards.
- No outlined panels purely for separation.
- No section boxes created by borders.
- No default outlined secondary buttons.
- Avoid divider lines unless there is a genuine functional/accessibility reason.
- Form-control borders may be used only where required for usability and clarity, and should remain extremely restrained.

Separation should come from:

- whitespace
- scale
- typography
- background colour changes
- image composition
- spacing rhythm

The target is a super-clean storefront.

## Surfaces and cards

Cards should feel editorial rather than boxed-in.

- Prefer open layouts.
- Avoid visible containers unless the composition truly requires one.
- Keep shadows absent by default.
- Tonal panels are exceptional, not the default structure.
- Let imagery, whitespace and typography define the component.
- Product cards should not resemble generic Shopify tiles.

## Spacing, measure and media

Use a fixed design rhythm rather than exposing spacing controls throughout Theme Settings.

- Standard section spacing: `clamp(72px, 8vw, 120px)`.
- Compact spacing: `clamp(48px, 5.5vw, 80px)`.
- Generous/editorial spacing: `clamp(96px, 10vw, 160px)`.
- Standard editorial copy measure: 62ch.
- Narrow editorial copy measure: 48ch.
- Use 12px image/media corners when a framed crop is wanted.
- Do not round every image automatically; full-bleed and art-directed imagery may remain square.
- Do not add spacing, radius or shadow Theme Settings unless a real component later proves a genuine need.

The page should feel spacious and intentional, not padded for the sake of padding.

## Typography

Typography should carry a significant share of the art direction.

- British Poems is the display voice.
- Body/navigation/UI typography stays restrained and highly readable.
- Use large editorial headings selectively.
- Allow generous negative space around important statements.
- Avoid overusing display typography in transactional UI.

## Buttons

Buttons should be designed by Aster rather than exposed as a large configurable system.

- Keep the global Theme Setting lean.
- Button colours inherit from the active colour scheme.
- Button typography inherits from Typography > Buttons.
- Avoid outlined secondary buttons as the default visual treatment.
- Prefer clean filled actions and quieter secondary/text actions.
- Hover motion should be subtle and polished.
- Mobile touch targets remain accessible.

## Forms

The password-page waiting-list form is the visual reference for the global Aster form language, but storefront forms should be simplified into reusable primitives rather than copying its section-specific treatment.

Rules:

- Use soft tonal fields derived from the active colour scheme.
- Standard text controls use a 52px minimum height and 12px radius.
- Use generous internal padding and restrained placeholder contrast.
- Do not use decorative field borders.
- Functional focus/error indicators are allowed where required for usability and accessibility.
- Checkbox/radio accents inherit from the active colour scheme.
- Form feedback uses scheme colours rather than hard-coded semantic colours.
- Do not add a global Forms Theme Settings group unless a genuinely useful control emerges later.
- Keep native browser affordances where they improve usability, especially quantity/date inputs, unless a later component provides a better accessible replacement.

The result should feel related to the signed-off password signup panel: calm, soft, minimal and unmistakably Aster.

## Photography

Photography should feel aspirational but natural, grounded in café culture, daily ritual, travel and ordinary life.

- Strong crops.
- Large images where appropriate.
- Lifestyle context over sterile product-only presentation.
- Product packshots should still be premium and commercially clear.
- Avoid gratuitous decorative imagery.

## The bear

The bear is a brand signature, not a mascot.

Before launch it can carry campaign storytelling.

After launch:

- it becomes a whisper, not a headline
- use sparingly
- no cartoon treatment
- no dancing/animated mascot behaviour
- no bear cursor
- no bear badges across the UI
- no repeated explanation of the concept

It should remain a recognition detail for people who understand the story.

## Motion / GSAP

Motion should support the brand idea of slowing down.

Use GSAP with restraint.

Good Aster motion:

- masked image reveals
- gentle text reveals
- subtle tracking/opacity transitions
- restrained parallax
- slow image scale
- considered stagger
- occasional pinned editorial storytelling
- section colour transitions where appropriate

Avoid:

- bouncy animation
- frantic motion
- constant movement
- novelty interactions
- motion that delays shopping
- scroll effects on transactional content

The homepage gets the strongest choreography. Product, collection, search, cart and content pages use quieter echoes of the same motion language.

Always respect `prefers-reduced-motion` and avoid CLS-inducing animation.

## Section composition

Aster sections should be composed, not boxed.

Use:

- generous whitespace
- strong editorial alignment
- asymmetric layouts where useful
- image/text splits
- full-bleed colour fields where appropriate
- open product/editorial groupings
- selective use of the recurring vertical-line motif from the brand decks, but only when it adds identity rather than decoration

## Cross-template consistency

The homepage can be more expressive, but every other page must feel like it came from the same artist.

Shared across the store:

- typography
- colour schemes
- spacing rhythm
- image treatment
- clean surfaces
- button language
- motion easing/timing
- content width/gutters

Product, collection, page, search, article and cart templates should be quieter versions of the homepage, not separate visual systems.

## Decision test

Before adding a visual treatment, ask:

1. Does it make Aster feel more editorial or more like generic ecommerce?
2. Is it helping hierarchy or merely decorating the page?
3. Can whitespace, typography or colour solve the problem more cleanly?
4. Does it support the calm/ritual-led brand idea?
5. Would the same artist plausibly have designed this and the homepage?

If the treatment adds furniture without adding meaning, remove it.
