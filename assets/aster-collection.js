(() => {
  const toolbar = document.querySelector('[data-aster-collection-toolbar]');
  const grid = document.querySelector('[data-aster-collection-grid]');

  if (!toolbar || !grid) return;

  const columnButtons = Array.from(toolbar.querySelectorAll('[data-aster-grid-columns]'));
  const sortSelect = toolbar.querySelector('[data-aster-collection-sort]');
  const cardReveals = Array.from(grid.querySelectorAll('.aster-collection__card-reveal[data-aster-reveal]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const modeQueries = {
    mobile: window.matchMedia('(max-width: 749px)'),
    tablet: window.matchMedia('(min-width: 750px) and (max-width: 1099px)'),
    desktop: window.matchMedia('(min-width: 1100px)')
  };

  const defaults = {
    mobile: 2,
    tablet: 3,
    desktop: 4
  };

  const allowed = {
    mobile: [2],
    tablet: [2, 3],
    desktop: [2, 3, 4]
  };

  const currentMode = () => {
    if (modeQueries.mobile.matches) return 'mobile';
    if (modeQueries.tablet.matches) return 'tablet';
    return 'desktop';
  };

  const storageKey = (mode) => `aster-collection-columns-${mode}`;

  const readStoredColumns = (mode) => {
    try {
      const value = Number.parseInt(window.localStorage.getItem(storageKey(mode)), 10);
      return allowed[mode].includes(value) ? value : defaults[mode];
    } catch (_error) {
      return defaults[mode];
    }
  };

  const writeStoredColumns = (mode, columns) => {
    try {
      window.localStorage.setItem(storageKey(mode), String(columns));
    } catch (_error) {
      // Storage may be unavailable in privacy-restricted browsing contexts.
    }
  };

  const applyColumns = (columns, { persist = false } = {}) => {
    const mode = currentMode();
    const resolved = allowed[mode].includes(columns) ? columns : defaults[mode];

    grid.dataset.columns = String(resolved);

    columnButtons.forEach((button) => {
      const buttonColumns = Number.parseInt(button.dataset.asterGridColumns, 10);
      const selected = buttonColumns === resolved;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });

    if (persist) writeStoredColumns(mode, resolved);
  };

  const revealInitialViewportCards = () => {
    if (reducedMotion.matches || cardReveals.length === 0) return;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const initiallyVisible = cardReveals.filter((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top < viewportHeight && rect.bottom > 0;
    });

    initiallyVisible.forEach((card, index) => {
      card.classList.add('aster-collection__card-reveal--initial');
      card.style.setProperty('--aster-initial-card-index', String(index));
    });

    if (initiallyVisible.length === 0) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initiallyVisible.forEach((card) => card.classList.add('is-visible'));
      });
    });
  };

  columnButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyColumns(Number.parseInt(button.dataset.asterGridColumns, 10), { persist: true });
    });
  });

  Object.values(modeQueries).forEach((query) => {
    const handleChange = () => applyColumns(readStoredColumns(currentMode()));

    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', handleChange);
    } else {
      query.addListener(handleChange);
    }
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('sort_by', sortSelect.value);
      url.searchParams.delete('page');
      window.location.assign(url.toString());
    });
  }

  applyColumns(readStoredColumns(currentMode()));
  revealInitialViewportCards();
})();
