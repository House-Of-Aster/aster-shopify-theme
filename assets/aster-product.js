// Aster PDP interaction controller · refined gallery, variants and FAQ motion.
(() => {
  const roots = document.querySelectorAll('[data-aster-pdp]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  roots.forEach((root) => {
    const variantDataNode = root.querySelector('[data-aster-pdp-variants]');
    if (!variantDataNode) return;

    let variants = [];
    try {
      variants = JSON.parse(variantDataNode.textContent || '[]');
    } catch (error) {
      console.warn('Aster PDP: variant data could not be parsed.', error);
      return;
    }

    const optionButtons = Array.from(root.querySelectorAll('[data-aster-pdp-option]'));
    const variantInput = root.querySelector('[data-aster-pdp-variant-input]');
    const addButton = root.querySelector('[data-aster-pdp-add]');
    const addLabel = root.querySelector('[data-aster-pdp-add-label]');
    const addPrice = root.querySelector('[data-aster-pdp-add-price]');
    const heroImageFrame = root.querySelector('.aster-pdp__hero-image');
    const heroImage = heroImageFrame?.querySelector('img');
    const thumbnails = Array.from(root.querySelectorAll('[data-aster-pdp-thumbnail]'));
    const zoomButton = root.querySelector('[data-aster-pdp-zoom]');
    const lightbox = root.querySelector('[data-aster-pdp-lightbox]');
    const lightboxImage = root.querySelector('[data-aster-pdp-lightbox-image]');
    const lightboxClose = root.querySelector('[data-aster-pdp-lightbox-close]');
    const quantityInput = root.querySelector('[data-aster-quantity-input]');
    const quantityButtons = Array.from(root.querySelectorAll('[data-aster-quantity-change]'));
    const productUrl = root.dataset.productUrl || window.location.pathname;

    const selectedOptions = [];
    optionButtons.forEach((button) => {
      if (button.classList.contains('is-selected')) {
        selectedOptions[Number(button.dataset.optionIndex)] = button.dataset.optionValue;
      }
    });

    const variantByOptions = () => variants.find((variant) => {
      if (!Array.isArray(variant.options)) return false;
      return variant.options.every((value, index) => selectedOptions[index] === value);
    });

    const writeHeroImage = ({ src, alt } = {}) => {
      if (!heroImage || !src) return;

      heroImage.src = src;
      heroImage.removeAttribute('srcset');
      heroImage.removeAttribute('sizes');
      if (alt) heroImage.alt = alt;

      if (lightboxImage) {
        lightboxImage.src = src;
        lightboxImage.alt = alt || heroImage.alt || '';
      }
    };

    const setMainImage = ({ src, alt, imageId } = {}) => {
      if (!heroImage || !src) return;

      thumbnails.forEach((thumbnail) => {
        const active = imageId && thumbnail.dataset.imageId === String(imageId);
        thumbnail.classList.toggle('is-active', Boolean(active));
        thumbnail.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (reducedMotion.matches || !heroImageFrame) {
        writeHeroImage({ src, alt });
        return;
      }

      heroImageFrame.classList.add('is-switching');
      window.setTimeout(() => {
        writeHeroImage({ src, alt });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => heroImageFrame.classList.remove('is-switching'));
        });
      }, 110);
    };

    const updateOptionStates = (activeVariant) => {
      optionButtons.forEach((button) => {
        const index = Number(button.dataset.optionIndex);
        const selected = activeVariant && activeVariant.options[index] === button.dataset.optionValue;
        button.classList.toggle('is-selected', Boolean(selected));
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });
    };

    const applyVariant = (variant, { updateUrl = true, updateMedia = true } = {}) => {
      if (!variant) return;

      if (variantInput) variantInput.value = variant.id;
      if (addButton) addButton.disabled = !variant.available;
      if (addLabel) addLabel.textContent = variant.available ? 'Add to cart' : 'Sold out';

      if (addPrice) {
        addPrice.textContent = variant.available ? variant.price : '';
        addPrice.hidden = !variant.available;
      }

      const separator = root.querySelector('.aster-pdp__add-separator');
      if (separator) separator.hidden = !variant.available;

      updateOptionStates(variant);

      if (updateMedia && variant.imageSrc) {
        setMainImage({ src: variant.imageSrc, alt: variant.imageAlt, imageId: variant.imageId });
      }

      if (updateUrl && window.history && window.history.replaceState) {
        const nextUrl = new URL(productUrl, window.location.origin);
        nextUrl.searchParams.set('variant', String(variant.id).replace('gid://shopify/ProductVariant/', ''));
        window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}`);
      }

      root.dispatchEvent(new CustomEvent('aster:variant-change', {
        bubbles: true,
        detail: { variant }
      }));
    };

    optionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const optionIndex = Number(button.dataset.optionIndex);
        selectedOptions[optionIndex] = button.dataset.optionValue;

        optionButtons
          .filter((candidate) => Number(candidate.dataset.optionIndex) === optionIndex)
          .forEach((candidate) => {
            const selected = candidate === button;
            candidate.classList.toggle('is-selected', selected);
            candidate.setAttribute('aria-pressed', selected ? 'true' : 'false');
          });

        const variant = variantByOptions();
        if (variant) applyVariant(variant);
      });
    });

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        const colourValue = thumbnail.dataset.colourValue;
        const colourOptionIndex = Number(thumbnail.dataset.colourOptionIndex);

        if (colourValue && Number.isInteger(colourOptionIndex)) {
          selectedOptions[colourOptionIndex] = colourValue;
          const matchingVariant = variantByOptions();
          if (matchingVariant) {
            applyVariant(matchingVariant, { updateUrl: true, updateMedia: false });
          }
        }

        setMainImage({
          src: thumbnail.dataset.imageSrc,
          alt: thumbnail.dataset.imageAlt,
          imageId: thumbnail.dataset.imageId
        });
      });
    });

    quantityButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!quantityInput) return;
        const delta = Number(button.dataset.asterQuantityChange || 0);
        const current = Math.max(1, Number.parseInt(quantityInput.value || '1', 10) || 1);
        quantityInput.value = String(Math.max(1, current + delta));
        quantityInput.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });

    if (quantityInput) {
      quantityInput.addEventListener('change', () => {
        const value = Math.max(1, Number.parseInt(quantityInput.value || '1', 10) || 1);
        quantityInput.value = String(value);
      });
    }

    if (zoomButton && lightbox && typeof lightbox.showModal === 'function') {
      zoomButton.addEventListener('click', () => {
        if (heroImage && lightboxImage) {
          lightboxImage.src = heroImage.currentSrc || heroImage.src;
          lightboxImage.alt = heroImage.alt || '';
        }
        lightbox.showModal();
      });
    }

    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener('click', () => lightbox.close());
      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) lightbox.close();
      });
    }
  });

  const faqItems = Array.from(document.querySelectorAll('.aster-pdp__faq-item'));

  faqItems.forEach((item) => {
    const summary = item.querySelector('summary');
    const answer = item.querySelector('[data-aster-faq-answer]');
    if (!summary || !answer || reducedMotion.matches || typeof answer.animate !== 'function') return;

    summary.addEventListener('click', (event) => {
      event.preventDefault();
      if (item.dataset.asterAnimating === 'true') return;

      const opening = !item.open;
      item.dataset.asterAnimating = 'true';

      if (opening) {
        item.open = true;
        const targetHeight = answer.scrollHeight;
        const animation = answer.animate(
          [
            { height: '0px', opacity: 0, transform: 'translateY(-5px)' },
            { height: `${targetHeight}px`, opacity: 1, transform: 'translateY(0)' }
          ],
          { duration: 340, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );

        animation.onfinish = () => {
          item.dataset.asterAnimating = 'false';
        };
      } else {
        const startHeight = answer.getBoundingClientRect().height;
        const animation = answer.animate(
          [
            { height: `${startHeight}px`, opacity: 1, transform: 'translateY(0)' },
            { height: '0px', opacity: 0, transform: 'translateY(-5px)' }
          ],
          { duration: 260, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
        );

        animation.onfinish = () => {
          item.open = false;
          item.dataset.asterAnimating = 'false';
        };
      }
    });
  });
})();
