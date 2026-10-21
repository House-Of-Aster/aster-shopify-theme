(() => {
  const root = document.documentElement;
  const selector = 'dialog[scroll-lock][open], details[scroll-lock][open]';
  let isPainted = false;
  let previousInlineBackground = '';

  const resolveSurfaceBackground = (element) => {
    if (!(element instanceof Element)) return '';

    let current = element;

    while (current) {
      const background = window.getComputedStyle(current).backgroundColor;

      if (background && background !== 'rgba(0, 0, 0, 0)' && background !== 'transparent') {
        return background;
      }

      current = current.parentElement;
    }

    return window.getComputedStyle(document.body).backgroundColor;
  };

  const sync = () => {
    const openSurface = document.querySelector(selector);

    if (openSurface) {
      if (!isPainted) {
        previousInlineBackground = root.style.backgroundColor;
        isPainted = true;
      }

      const background = resolveSurfaceBackground(openSurface);
      if (background) root.style.backgroundColor = background;
      return;
    }

    if (!isPainted) return;

    root.style.backgroundColor = previousInlineBackground;
    previousInlineBackground = '';
    isPainted = false;
  };

  const observer = new MutationObserver(sync);
  observer.observe(root, {
    subtree: true,
    attributes: true,
    attributeFilter: ['open'],
  });

  sync();
})();
