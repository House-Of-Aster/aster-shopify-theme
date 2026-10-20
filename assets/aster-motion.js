(() => {
  const selector = '[data-aster-reveal], [data-aster-stagger]';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const bound = new WeakSet();
  let observer;

  const reveal = (element) => element.classList.add('is-visible');

  const getTargets = (scope) => {
    const targets = Array.from(scope.querySelectorAll(selector));

    if (scope instanceof Element && scope.matches(selector)) {
      targets.unshift(scope);
    }

    return targets;
  };

  const prepareStagger = (element) => {
    if (!element.hasAttribute('data-aster-stagger')) return;

    Array.from(element.children).forEach((child, index) => {
      child.style.setProperty('--aster-stagger-index', index);
    });
  };

  const init = (scope = document) => {
    getTargets(scope).forEach((element) => {
      if (bound.has(element)) return;

      bound.add(element);
      prepareStagger(element);

      if (reducedMotion.matches || !observer) {
        reveal(element);
        return;
      }

      observer.observe(element);
    });
  };

  const start = () => {
    document.documentElement.classList.add('aster-motion-ready');

    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            reveal(entry.target);
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.08,
        }
      );
    }

    init();

    if (window.Shopify?.designMode) {
      document.addEventListener('shopify:section:load', (event) => init(event.target));
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
