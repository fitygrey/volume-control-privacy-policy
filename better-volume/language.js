(() => {
  const pageLanguage = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  const requested = new URLSearchParams(location.search).get('lang');
  let saved;
  try { saved = localStorage.getItem('better-volume-language'); } catch {}
  const supported = value => value === 'en' || value === 'zh';
  // Only the browser's primary language determines automatic selection.
  const primary = navigator.languages?.[0] || navigator.language || 'en';
  const language = supported(requested) ? requested : supported(saved) ? saved : /^zh(?:-|$)/i.test(primary) ? 'zh' : 'en';
  if (supported(requested)) {
    try { localStorage.setItem('better-volume-language', language); } catch {}
  }
  if (language !== pageLanguage) {
    const target = new URL(language === 'zh' ? 'zh.html' : 'index.html', location.href);
    target.search = location.search;
    target.hash = location.hash;
    location.replace(target.href);
    return;
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach(link => {
      const target = new URL(link.href);
      const params = new URLSearchParams(location.search);
      params.set('lang', link.dataset.language);
      target.search = params.toString();
      target.hash = location.hash;
      link.href = target.href;
    });
  });
})();
