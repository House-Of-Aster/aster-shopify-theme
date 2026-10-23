# Aster Cart Drawer Reference

Phase 7 implementation reference: https://github.com/ColorlibHQ/Fashe

Reference architecture verified 23 October 2026:
- `sections/cart-drawer.liquid` — native `<dialog>` drawer shell with header, close action, empty state, line items and checkout/view-cart footer.
- `snippets/cart-items.liquid` — cart line-item rendering used by the drawer/cart experience.
- `snippets/cart-summary.liquid` — subtotal and cart-summary actions.
- `assets/theme.js` — `CartDrawer` custom element and AJAX cart interaction layer.
- `sections/header.liquid` — cart trigger uses `data-drawer-open="CartDrawer"` when drawer mode is enabled.

Aster implementation rule:
Use Fashe as an interaction and UX reference, not as a visual transplant. Rebuild the drawer into Aster’s palette, typography, spacing, motion, focus management, cart-data handling and accessibility system. Preserve native Shopify cart semantics and ensure quantity/remove/update states are robust before visual polish.
