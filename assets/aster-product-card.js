(() => {
  const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

  function normaliseState(value = '') {
    return value.toLowerCase().replace(/-/g, ' ').trim();
  }

  function setPrice(card, swatch) {
    const price = card.querySelector('[data-card-price]');
    if (!price) return;

    const current = document.createElement('span');
    current.className = 'aster-product-card__price-current';
    current.textContent = swatch.dataset.price || '';

    const comparePrice = swatch.dataset.comparePrice || '';
    price.replaceChildren(current);

    if (comparePrice) {
      current.classList.add('aster-product-card__price-current--sale');
      const compare = document.createElement('s');
      compare.className = 'aster-product-card__price-compare';
      compare.textContent = comparePrice;
      price.append(compare);
    }
  }

  function setBadge(card, available) {
    let badge = card.querySelector('[data-card-badge]');
    const defaultText = card.dataset.defaultBadge || '';
    const defaultTone = card.dataset.defaultBadgeTone || 'merchandising';
    const state = normaliseState(card.dataset.cardState);

    if (state === 'coming soon') {
      if (!badge) {
        badge = document.createElement('span');
        badge.dataset.cardBadge = '';
        card.querySelector('[data-card-media]')?.prepend(badge);
      }
      badge.className = `aster-product-card__badge aster-product-card__badge--${defaultTone}`;
      badge.textContent = defaultText || 'Coming soon';
      return;
    }

    if (available === 'false') {
      if (!badge) {
        badge = document.createElement('span');
        badge.dataset.cardBadge = '';
        card.querySelector('[data-card-media]')?.prepend(badge);
      }
      badge.className = 'aster-product-card__badge aster-product-card__badge--unavailable';
      badge.textContent = 'Sold out';
      return;
    }

    if (!defaultText) {
      badge?.remove();
      return;
    }

    if (!badge) {
      badge = document.createElement('span');
      badge.dataset.cardBadge = '';
      card.querySelector('[data-card-media]')?.prepend(badge);
    }

    badge.className = `aster-product-card__badge aster-product-card__badge--${defaultTone}`;
    badge.textContent = defaultText;
  }

  function setAction(card, swatch) {
    const variantInput = card.querySelector('[data-card-variant-input]');
    const action = card.querySelector('[data-card-action]');
    const label = card.querySelector('[data-card-action-label]');
    const actionPrice = card.querySelector('[data-card-action-price]');
    if (!action) return;

    if (variantInput && swatch.dataset.variantId) {
      variantInput.value = swatch.dataset.variantId;
    }

    if (actionPrice) {
      actionPrice.textContent = swatch.dataset.price || '';
    }

    const state = normaliseState(card.dataset.cardState);
    const available = swatch.dataset.available !== 'false';
    let mode = 'add';
    let text = 'Add to cart';
    let disabled = false;

    if (state === 'coming soon') {
      mode = 'coming-soon';
      text = 'Coming soon';
      disabled = true;
    } else if (!available) {
      mode = 'sold-out';
      text = 'Sold out';
      disabled = true;
    } else if (state === 'preorder' || state === 'pre order') {
      mode = 'preorder';
      text = 'Pre-order';
    }

    action.className = `aster-product-card__action aster-product-card__action--${mode}`;
    action.dataset.actionMode = mode;
    action.disabled = disabled;
    if (label) label.textContent = text;
  }

  function resetSecondary(media) {
    if (!media) return;
    media.classList.remove('is-hovering');
    const secondary = media.querySelector('[data-card-secondary-image]');
    if (secondary) {
      secondary.onload = null;
      secondary.removeAttribute('src');
    }
  }

  function preloadSecondary(media, src) {
    if (!media || !src || !hoverQuery.matches) return;
    const secondary = media.querySelector('[data-card-secondary-image]');
    if (!secondary) return;

    secondary.onload = null;
    secondary.src = src;
  }

  function selectSwatch(swatch) {
    const card = swatch.closest('[data-aster-product-card]');
    if (!card) return;

    card.querySelectorAll('[data-card-swatch]').forEach((button) => {
      const selected = button === swatch;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });

    const primary = card.querySelector('[data-card-primary-image]');
    const media = card.querySelector('[data-card-media]');

    if (primary && swatch.dataset.primarySrc) {
      primary.src = swatch.dataset.primarySrc;
      if (swatch.dataset.primarySrcset) primary.srcset = swatch.dataset.primarySrcset;
      primary.alt = swatch.dataset.primaryAlt || primary.alt;
    }

    resetSecondary(media);
    if (media) {
      if (swatch.dataset.hoverSrc) {
        media.dataset.hoverSrc = swatch.dataset.hoverSrc;
        preloadSecondary(media, swatch.dataset.hoverSrc);
      } else {
        delete media.dataset.hoverSrc;
      }
    }

    const variantUrl = swatch.dataset.variantUrl;
    if (variantUrl) {
      card.querySelectorAll('[data-card-link]').forEach((link) => {
        link.href = variantUrl;
      });
    }

    setPrice(card, swatch);
    setBadge(card, swatch.dataset.available);
    setAction(card, swatch);
  }

  document.addEventListener('click', (event) => {
    const swatch = event.target.closest('[data-card-swatch]');
    if (!swatch) return;
    event.preventDefault();
    selectSwatch(swatch);
  });

  document.addEventListener('pointerover', (event) => {
    if (!hoverQuery.matches) return;

    const mediaLink = event.target.closest?.('.aster-product-card__media-link');
    if (!mediaLink || mediaLink.contains(event.relatedTarget)) return;

    const media = mediaLink.closest('[data-card-media]');
    if (!media || !media.dataset.hoverSrc) return;

    const secondary = media.querySelector('[data-card-secondary-image]');
    if (!secondary) return;

    const hoverSrc = media.dataset.hoverSrc;
    const reveal = () => {
      if (media.dataset.hoverSrc === hoverSrc) media.classList.add('is-hovering');
    };

    if (secondary.getAttribute('src') === hoverSrc && secondary.complete) {
      reveal();
      return;
    }

    secondary.onload = reveal;
    secondary.src = hoverSrc;
  });

  document.addEventListener('pointerout', (event) => {
    const mediaLink = event.target.closest?.('.aster-product-card__media-link');
    if (!mediaLink || mediaLink.contains(event.relatedTarget)) return;

    const media = mediaLink.closest('[data-card-media]');
    media?.classList.remove('is-hovering');
  });
})();
