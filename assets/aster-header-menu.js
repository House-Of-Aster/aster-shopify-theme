(() => {
  const rootSelector = '[data-aster-menu-root]';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const closeDuration = 260;
  const searchAffirmations = [
    'Find what feels right',
    'Search for what you need today',
    'Search with intention',
    'Find what belongs in your routine',
    'Find something worth slowing down for',
    'Search for what feels like you',
    'Choose what matters',
    'Find what works',
    'Find your rhythm',
    'Find your pace',
  ];
  const typingDelay = 44;
  const erasingDelay = 26;
  const affirmationHold = 1500;
  const affirmationGap = 180;

  const bind = (root) => {
    if (root.dataset.asterMenuBound === 'true') return;

    const opener = root.querySelector('[data-aster-menu-open]');
    const dialog = root.querySelector('[data-aster-menu-dialog]');
    const label = dialog?.querySelector('[data-aster-menu-label]');
    const searchInput = dialog?.querySelector('.aster-header__menu-search-input');
    const shell = root.closest('.aster-header-shell');

    if (!opener || !dialog) return;

    root.dataset.asterMenuBound = 'true';
    let closeTimer;
    let affirmationTimer;
    let affirmationRun = 0;
    let affirmationIndex = 0;

    const setCoveredContentInert = (isInert) => {
      if (!shell) return;

      let sibling = shell.nextElementSibling;

      while (sibling) {
        if (!['SCRIPT', 'STYLE'].includes(sibling.tagName)) {
          sibling.inert = isInert;
        }
        sibling = sibling.nextElementSibling;
      }
    };

    const syncMenuPosition = () => {
      const bottom = root.getBoundingClientRect().bottom;
      dialog.style.setProperty('--aster-menu-top', `${Math.max(0, Math.round(bottom))}px`);
    };

    const stopAffirmations = (resetPlaceholder = false) => {
      window.clearTimeout(affirmationTimer);
      affirmationRun += 1;

      if (resetPlaceholder && searchInput) {
        searchInput.placeholder = 'Search Aster';
      }
    };

    const startAffirmations = (randomStart = false) => {
      if (!searchInput || !dialog.open || searchInput.value) return;

      stopAffirmations();
      const run = affirmationRun;

      if (randomStart) {
        affirmationIndex = Math.floor(Math.random() * searchAffirmations.length);
      }

      if (reducedMotion.matches) {
        searchInput.placeholder = searchAffirmations[affirmationIndex];
        return;
      }

      searchInput.placeholder = '';

      const typePhrase = () => {
        if (run !== affirmationRun || !dialog.open || searchInput.value) return;

        const phrase = searchAffirmations[affirmationIndex];
        let character = 0;

        const typeNext = () => {
          if (run !== affirmationRun || !dialog.open || searchInput.value) return;

          character += 1;
          searchInput.placeholder = phrase.slice(0, character);

          if (character < phrase.length) {
            affirmationTimer = window.setTimeout(typeNext, typingDelay);
            return;
          }

          affirmationTimer = window.setTimeout(eraseNext, affirmationHold);
        };

        const eraseNext = () => {
          if (run !== affirmationRun || !dialog.open || searchInput.value) return;

          character -= 1;
          searchInput.placeholder = phrase.slice(0, Math.max(0, character));

          if (character > 0) {
            affirmationTimer = window.setTimeout(eraseNext, erasingDelay);
            return;
          }

          affirmationIndex = (affirmationIndex + 1) % searchAffirmations.length;
          affirmationTimer = window.setTimeout(typePhrase, affirmationGap);
        };

        typeNext();
      };

      typePhrase();
    };

    const openMenu = () => {
      window.clearTimeout(closeTimer);
      syncMenuPosition();

      opener.setAttribute('aria-expanded', 'true');
      opener.setAttribute('aria-label', 'Close navigation');
      opener.classList.add('is-active');
      setCoveredContentInert(true);

      if (!dialog.open) dialog.show();

      window.requestAnimationFrame(() => {
        syncMenuPosition();
        dialog.classList.add('is-visible');
        startAffirmations(true);
        (label || dialog).focus({ preventScroll: true });
      });
    };

    const finishClose = () => {
      if (dialog.open) dialog.close();
    };

    const closeMenu = () => {
      if (!dialog.open) return;

      stopAffirmations(true);
      dialog.classList.remove('is-visible');
      opener.classList.remove('is-active');
      opener.setAttribute('aria-expanded', 'false');
      opener.setAttribute('aria-label', 'Open navigation');
      setCoveredContentInert(false);

      if (reducedMotion.matches) {
        finishClose();
        return;
      }

      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(finishClose, closeDuration);
    };

    const toggleMenu = () => {
      if (dialog.open) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    opener.addEventListener('click', toggleMenu);

    searchInput?.addEventListener('input', () => {
      if (searchInput.value) {
        stopAffirmations();
      } else if (dialog.open) {
        startAffirmations();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && dialog.open) {
        event.preventDefault();
        closeMenu();
      }
    });

    dialog.addEventListener('close', () => {
      window.clearTimeout(closeTimer);
      stopAffirmations(true);
      dialog.classList.remove('is-visible');
      opener.classList.remove('is-active');
      opener.setAttribute('aria-expanded', 'false');
      opener.setAttribute('aria-label', 'Open navigation');
      setCoveredContentInert(false);
      opener.focus({ preventScroll: true });
    });

    reducedMotion.addEventListener?.('change', () => {
      if (dialog.open && !searchInput?.value) {
        startAffirmations(true);
      }
    });

    window.addEventListener('resize', () => {
      if (dialog.open) syncMenuPosition();
    });

    window.visualViewport?.addEventListener('resize', () => {
      if (dialog.open) syncMenuPosition();
    });
  };

  const init = (scope = document) => {
    const roots = [];

    if (scope instanceof Element && scope.matches(rootSelector)) roots.push(scope);
    roots.push(...scope.querySelectorAll(rootSelector));

    roots.forEach(bind);
  };

  init();

  if (window.Shopify?.designMode) {
    document.addEventListener('shopify:section:load', (event) => init(event.target));
  }
})();
