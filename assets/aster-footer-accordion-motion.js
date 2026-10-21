(() => {
  if (window.__asterFooterAccordionMotionBound) return;
  window.__asterFooterAccordionMotionBound = true;

  const mobile = window.matchMedia('(max-width: 749px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const running = new WeakMap();

  const cleanup = (panel) => {
    panel.style.removeProperty('height');
    panel.style.removeProperty('overflow');
    panel.style.removeProperty('opacity');
    panel.style.removeProperty('transform');
    panel.style.removeProperty('will-change');
    running.delete(panel);
  };

  const cancelRunning = (panel) => {
    const animation = running.get(panel);
    if (!animation) return;
    animation.cancel();
    cleanup(panel);
  };

  const setImmediate = (toggle, panel, expanded) => {
    cancelRunning(panel);
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    panel.hidden = !expanded;
    cleanup(panel);
  };

  const expand = (toggle, panel) => {
    cancelRunning(panel);
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;

    if (reduceMotion.matches) {
      cleanup(panel);
      return;
    }

    const targetHeight = panel.scrollHeight;
    panel.style.overflow = 'hidden';
    panel.style.height = '0px';
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(-6px)';
    panel.style.willChange = 'height, opacity, transform';

    const animation = panel.animate(
      [
        { height: '0px', opacity: 0, transform: 'translateY(-6px)' },
        { height: `${targetHeight}px`, opacity: 1, transform: 'translateY(0)' },
      ],
      {
        duration: 340,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards',
      }
    );

    running.set(panel, animation);
    animation.addEventListener('finish', () => cleanup(panel), { once: true });
    animation.addEventListener('cancel', () => cleanup(panel), { once: true });
  };

  const collapse = (toggle, panel) => {
    cancelRunning(panel);
    toggle.setAttribute('aria-expanded', 'false');

    if (reduceMotion.matches) {
      panel.hidden = true;
      cleanup(panel);
      return;
    }

    const startHeight = panel.getBoundingClientRect().height || panel.scrollHeight;
    panel.style.overflow = 'hidden';
    panel.style.height = `${startHeight}px`;
    panel.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
    panel.style.willChange = 'height, opacity, transform';

    const animation = panel.animate(
      [
        { height: `${startHeight}px`, opacity: 1, transform: 'translateY(0)' },
        { height: '0px', opacity: 0, transform: 'translateY(-4px)' },
      ],
      {
        duration: 280,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards',
      }
    );

    running.set(panel, animation);
    animation.addEventListener(
      'finish',
      () => {
        panel.hidden = true;
        cleanup(panel);
      },
      { once: true }
    );
    animation.addEventListener('cancel', () => cleanup(panel), { once: true });
  };

  document.addEventListener(
    'click',
    (event) => {
      const toggle = event.target.closest('[data-aster-footer-toggle]');
      if (!toggle || !mobile.matches) return;

      const footer = toggle.closest('[data-aster-footer]');
      if (!footer) return;

      const panelId = toggle.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) collapse(toggle, panel);
      else expand(toggle, panel);
    },
    true
  );

  const syncBreakpoint = () => {
    document.querySelectorAll('[data-aster-footer]').forEach((footer) => {
      footer.querySelectorAll('[data-aster-footer-group]').forEach((group) => {
        const toggle = group.querySelector('[data-aster-footer-toggle]');
        const panel = group.querySelector('[data-aster-footer-panel]');
        if (!toggle || !panel) return;

        if (mobile.matches) setImmediate(toggle, panel, false);
        else setImmediate(toggle, panel, true);
      });
    });
  };

  if (mobile.addEventListener) mobile.addEventListener('change', syncBreakpoint);
  else mobile.addListener(syncBreakpoint);
})();
