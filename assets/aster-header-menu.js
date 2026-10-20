(() => {
  const rootSelector = '[data-aster-menu-root]';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const closeDuration = 260;

  const bind = (root) => {
    if (root.dataset.asterMenuBound === 'true') return;

    const opener = root.querySelector('[data-aster-menu-open]');
    const dialog = root.querySelector('[data-aster-menu-dialog]');
    const label = dialog?.querySelector('[data-aster-menu-label]');
    const shell = root.closest('.aster-header-shell');

    if (!opener || !dialog) return;

    root.dataset.asterMenuBound = 'true';
    let closeTimer;

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
        (label || dialog).focus({ preventScroll: true });
      });
    };

    const finishClose = () => {
      if (dialog.open) dialog.close();
    };

    const closeMenu = () => {
      if (!dialog.open) return;

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

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && dialog.open) {
        event.preventDefault();
        closeMenu();
      }
    });

    dialog.addEventListener('close', () => {
      window.clearTimeout(closeTimer);
      dialog.classList.remove('is-visible');
      opener.classList.remove('is-active');
      opener.setAttribute('aria-expanded', 'false');
      opener.setAttribute('aria-label', 'Open navigation');
      setCoveredContentInert(false);
      opener.focus({ preventScroll: true });
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
