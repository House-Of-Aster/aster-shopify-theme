(() => {
  const rootSelector = '[data-aster-menu-root]';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const closeDuration = 260;

  const bind = (root) => {
    if (root.dataset.asterMenuBound === 'true') return;

    const opener = root.querySelector('[data-aster-menu-open]');
    const dialog = root.querySelector('[data-aster-menu-dialog]');
    const closer = dialog?.querySelector('[data-aster-menu-close]');
    const label = dialog?.querySelector('[data-aster-menu-label]');

    if (!opener || !dialog || !closer) return;

    root.dataset.asterMenuBound = 'true';
    let closeTimer;

    const openMenu = () => {
      window.clearTimeout(closeTimer);
      opener.setAttribute('aria-expanded', 'true');

      if (!dialog.open) dialog.showModal();

      window.requestAnimationFrame(() => {
        dialog.classList.add('is-visible');
        (label || dialog).focus({ preventScroll: true });
      });
    };

    const closeMenu = () => {
      if (!dialog.open) return;

      dialog.classList.remove('is-visible');
      opener.setAttribute('aria-expanded', 'false');

      if (reducedMotion.matches) {
        dialog.close();
        return;
      }

      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        if (dialog.open) dialog.close();
      }, closeDuration);
    };

    opener.addEventListener('click', openMenu);
    closer.addEventListener('click', closeMenu);

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeMenu();
    });

    dialog.addEventListener('close', () => {
      window.clearTimeout(closeTimer);
      dialog.classList.remove('is-visible');
      opener.setAttribute('aria-expanded', 'false');
      opener.focus({ preventScroll: true });
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
