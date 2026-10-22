(() => {
  const page = document.getElementById('AsterPasswordPage');
  if (!page || page.dataset.asterMotionInitialised === 'true') return;
  page.dataset.asterMotionInitialised = 'true';

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

  let landing = null;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frame = null;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const setMotionVariables = () => {
    if (!landing) return;

    const focused = landing.classList.contains('aster-motion--focused');
    const focusStrength = focused ? 0.18 : 1;
    const x = currentX * focusStrength;
    const y = currentY * focusStrength;

    landing.style.setProperty('--aster-motion-scene-x', `${(-x * 8).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-scene-y', `${(-y * 5).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-canopy-x', `${(x * 10).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-canopy-y', `${(y * 6).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-logo-x', `${(x * 4).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-logo-y', `${(y * 2.5).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-panel-x', `${(x * 2.2).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-panel-y', `${(y * 1.6).toFixed(2)}px`);
    landing.style.setProperty('--aster-motion-panel-rotate-x', `${(-y * 0.34).toFixed(3)}deg`);
    landing.style.setProperty('--aster-motion-panel-rotate-y', `${(x * 0.38).toFixed(3)}deg`);
    landing.style.setProperty('--aster-motion-hotspot-x', `${(50 + x * 14).toFixed(2)}%`);
    landing.style.setProperty('--aster-motion-hotspot-y', `${(48 + y * 10).toFixed(2)}%`);
  };

  const tick = () => {
    frame = null;

    const easing = landing?.classList.contains('aster-motion--focused') ? 0.11 : 0.075;
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    if (Math.abs(targetX - currentX) < 0.001) currentX = targetX;
    if (Math.abs(targetY - currentY) < 0.001) currentY = targetY;

    setMotionVariables();

    if (currentX !== targetX || currentY !== targetY) {
      frame = window.requestAnimationFrame(tick);
    }
  };

  const scheduleTick = () => {
    if (reducedMotionQuery.matches || frame) return;
    frame = window.requestAnimationFrame(tick);
  };

  const resetPointer = () => {
    targetX = 0;
    targetY = 0;
    scheduleTick();
  };

  const onPointerMove = (event) => {
    if (!landing || reducedMotionQuery.matches || !finePointerQuery.matches) return;

    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);

    targetX = clamp((event.clientX / width - 0.5) * 2, -1, 1);
    targetY = clamp((event.clientY / height - 0.5) * 2, -1, 1);
    scheduleTick();
  };

  const updateFocusState = () => {
    if (!landing) return;

    const active = document.activeElement;
    const form = landing.querySelector('#AsterWaitingListForm');
    const passwordModal = landing.querySelector('[data-aster-password-modal]');
    const hasInteractiveFocus = Boolean(
      (form && active && form.contains(active)) ||
      (passwordModal && active && passwordModal.contains(active))
    );

    landing.classList.toggle('aster-motion--focused', hasInteractiveFocus);
    scheduleTick();
  };

  const bindLanding = () => {
    const nextLanding = page.querySelector('[data-aster-landing]');
    if (!nextLanding || nextLanding === landing) return;

    landing = nextLanding;
    landing.classList.add('aster-motion-ready');

    if (reducedMotionQuery.matches) {
      landing.classList.add('aster-motion-reduced');
      targetX = 0;
      targetY = 0;
      currentX = 0;
      currentY = 0;
    } else {
      landing.classList.remove('aster-motion-reduced');
    }

    setMotionVariables();
  };

  bindLanding();

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', resetPointer, { passive: true });
  window.addEventListener('blur', resetPointer, { passive: true });
  document.addEventListener('focusin', updateFocusState);
  document.addEventListener('focusout', () => window.requestAnimationFrame(updateFocusState));

  const handleMotionPreference = () => {
    bindLanding();
    if (!landing) return;

    landing.classList.toggle('aster-motion-reduced', reducedMotionQuery.matches);
    targetX = 0;
    targetY = 0;
    currentX = 0;
    currentY = 0;
    setMotionVariables();

    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = null;
    }
  };

  reducedMotionQuery.addEventListener?.('change', handleMotionPreference);
  finePointerQuery.addEventListener?.('change', resetPointer);

  const observer = new MutationObserver(bindLanding);
  observer.observe(page, { childList: true, subtree: true });
})();
