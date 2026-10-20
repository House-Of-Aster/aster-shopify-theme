(() => {
  const globalKey = 'AsterAnnouncementCountdown';

  const pad = (value) => String(Math.max(0, value)).padStart(2, '0');

  const formatterCache = new Map();

  const getFormatter = (timeZone) => {
    if (formatterCache.has(timeZone)) return formatterCache.get(timeZone);

    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    });

    formatterCache.set(timeZone, formatter);
    return formatter;
  };

  const getTimeZoneOffset = (timestamp, timeZone) => {
    const parts = {};

    getFormatter(timeZone)
      .formatToParts(new Date(timestamp))
      .forEach((part) => {
        if (part.type !== 'literal') parts[part.type] = Number(part.value);
      });

    const representedAsUtc = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );

    return representedAsUtc - timestamp;
  };

  const parseTarget = (dateValue, timeValue, timeZone) => {
    const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateValue || '');
    const timeMatch = /^(\d{2}):(\d{2})$/.exec(timeValue || '');

    if (!dateMatch || !timeMatch) return null;

    const year = Number(dateMatch[1]);
    const month = Number(dateMatch[2]);
    const day = Number(dateMatch[3]);
    const hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2]);

    if (
      month < 1 ||
      month > 12 ||
      day < 1 ||
      day > 31 ||
      hour > 23 ||
      minute > 59
    ) {
      return null;
    }

    const wallClockUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
    let offset = getTimeZoneOffset(wallClockUtc, timeZone);
    let target = wallClockUtc - offset;

    const correctedOffset = getTimeZoneOffset(target, timeZone);
    if (correctedOffset !== offset) {
      offset = correctedOffset;
      target = wallClockUtc - offset;
    }

    return target;
  };

  const setupCountdown = (countdown) => {
    if (countdown.dataset.asterCountdownBound === 'true') return;

    const target = parseTarget(
      countdown.dataset.date,
      countdown.dataset.time,
      countdown.dataset.timeZone || 'Europe/London'
    );

    if (target === null) {
      countdown.hidden = true;
      return;
    }

    countdown.dataset.asterCountdownBound = 'true';

    const days = countdown.querySelector('[data-countdown-days]');
    const hours = countdown.querySelector('[data-countdown-hours]');
    const minutes = countdown.querySelector('[data-countdown-minutes]');
    const seconds = countdown.querySelector('[data-countdown-seconds]');
    let timer;

    const finish = () => {
      window.clearInterval(timer);

      const bar = countdown.closest('[data-aster-announcement]');
      const hideBar = countdown.dataset.hideOnComplete === 'true';

      if (hideBar && bar) {
        bar.hidden = true;
      } else {
        countdown.hidden = true;
      }
    };

    const tick = () => {
      const remaining = target - Date.now();

      if (remaining <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        finish();
        return;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const dayValue = Math.floor(totalSeconds / 86400);
      const hourValue = Math.floor((totalSeconds % 86400) / 3600);
      const minuteValue = Math.floor((totalSeconds % 3600) / 60);
      const secondValue = totalSeconds % 60;

      days.textContent = pad(dayValue);
      hours.textContent = pad(hourValue);
      minutes.textContent = pad(minuteValue);
      seconds.textContent = pad(secondValue);
    };

    tick();
    timer = window.setInterval(tick, 1000);
  };

  const init = (scope = document) => {
    const countdowns = [];

    if (scope instanceof Element && scope.matches('[data-aster-countdown]')) {
      countdowns.push(scope);
    }

    countdowns.push(...scope.querySelectorAll('[data-aster-countdown]'));
    countdowns.forEach(setupCountdown);
  };

  if (window[globalKey]) {
    window[globalKey].init(document);
    return;
  }

  window[globalKey] = { init };
  init(document);

  if (window.Shopify?.designMode) {
    document.addEventListener('shopify:section:load', (event) => init(event.target));
  }
})();
