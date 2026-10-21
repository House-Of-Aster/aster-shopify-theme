(() => {
  if (window.__asterFooterAccordionMotionBound) return;
  window.__asterFooterAccordionMotionBound = true;

  const mobile = window.matchMedia('(max-width: 749px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const running = new WeakMap();
  const paddingState = new WeakMap();

  const cleanup = (panel) => {
    panel.style.removeProperty('height');
    panel.style.removeProperty('overflow');
    panel.style.removeProperty('opacity');
    panel.style.removeProperty('transform');
    panel.style.removeProperty('will-change');
    running.delete(panel);
  };

  const preparePanel = (panel) => {
    if (paddingState.has(panel)) return;

    const content = panel.firstElementChild;
    if (!content) return;

    const panelStyle = getComputedStyle(panel);
    const panelPaddingBottom = parseFloat(panelStyle.paddingBottom) || 0;
    if (panelPaddingBottom <= 0) return;

    const contentStyle = getComputedStyle(content);
    const contentPaddingBottom = parseFloat(contentStyle.paddingBottom) || 0;

    paddingState.set(panel, {
      content,
      panelPaddingBottom: panel.style.paddingBottom,
      contentPaddingBottom: content.style.paddingBottom,
    });

    // Keep the visual spacing, but move it inside the animated content. This lets
    // the panel genuinely reach 0px instead of leaving its mobile bottom padding
    // behind for one frame before hidden is applied.
    panel.style.paddingBottom = '0px';
    content.style.paddingBottom = `${contentPaddingBottom + panelPaddingBottom}px`;
  };

  const restorePanel = (panel) => {
    const state = paddingState.get(panel);
    if (!state) return;

    if (state.panelPaddingBottom) panel.style.paddingBottom = state.panelPaddingBottom;
    else panel.style.removeProperty('padding-bottom');

    if (state.contentPaddingBottom) state.content.style.paddingBottom = state.contentPaddingBottom;
    else state.content.style.removeProperty('padding-bottom');

    paddingState.delete(panel);
  };

  const cancelRunning = (panel) => {
    const animation = running.get(panel);
    if (!animation) return null;

    const computed = getComputedStyle(panel);
    const snapshot = {
      height: panel.getBoundingClientRect().height,
      opacity: computed.opacity,
      transform: computed.transform === 'none' ? 'translateY(0)' : computed.transform,
    };

    animation.cancel();
    running.delete(panel);
    return snapshot;
  };

  const setImmediate = (toggle, panel, expanded) => {
    cancelRunning(panel);
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    panel.hidden = !expanded;
    cleanup(panel);
  };

  const expand = (toggle, panel) => {
    preparePanel(panel);
    const interrupted = cancelRunning(panel);
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;

    if (reduceMotion.matches) {
      cleanup(panel);
      return;
    }

    const targetHeight = panel.scrollHeight;
    const startHeight = interrupted?.height ?? 0;
    const startOpacity = interrupted?.opacity ?? 0;
    const startTransform = interrupted?.transform ?? 'translateY(-6px)';

    panel.style.overflow = 'hidden';
    panel.style.height = `${startHeight}px`;
    panel.style.opacity = `${startOpacity}`;
    panel.style.transform = startTransform;
    panel.style.willChange = 'height, opacity, transform';

    const animation = panel.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity, transform: startTransform },
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
  };

  const collapse = (toggle, panel) => {
    preparePanel(panel);
    const interrupted = cancelRunning(panel);
    toggle.setAttribute('aria-expanded', 'false');

    if (reduceMotion.matches) {
      panel.hidden = true;
      cleanup(panel);
      return;
    }

    const computed = getComputedStyle(panel);
    const startHeight = interrupted?.height ?? panel.getBoundingClientRect().height ?? panel.scrollHeight;
    const startOpacity = interrupted?.opacity ?? computed.opacity;
    const startTransform = interrupted?.transform ?? (computed.transform === 'none' ? 'translateY(0)' : computed.transform);

    panel.style.overflow = 'hidden';
    panel.style.height = `${startHeight}px`;
    panel.style.opacity = `${startOpacity}`;
    panel.style.transform = startTransform;
    panel.style.willChange = 'height, opacity, transform';

    const animation = panel.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity, transform: startTransform },
        { height: '0px', opacity: 0, transform: 'translateY(-4px)' },
      ],
      {
        duration: 300,
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

        if (mobile.matches) {
          preparePanel(panel);
          setImmediate(toggle, panel, false);
        } else {
          restorePanel(panel);
          setImmediate(toggle, panel, true);
        }
      });
    });
  };

  syncBreakpoint();

  if (mobile.addEventListener) mobile.addEventListener('change', syncBreakpoint);
  else mobile.addListener(syncBreakpoint);

  document.addEventListener('shopify:section:load', () => requestAnimationFrame(syncBreakpoint));
})();
