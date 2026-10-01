
(() => {
  const BASE = '/calculadora-combustible/';
  const GA_ID = 'G-RGNDGLHEZR';

  window.RutaFuel = window.RutaFuel || {};
  window.RutaFuel.base = BASE;
  window.RutaFuel.money = (value, decimals = 2) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
  window.RutaFuel.num = (value, decimals = 1) => new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);

  function initNav() {
    const btn = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-main-nav]');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function loadAnalytics() {
    if (window.__rfAnalyticsLoaded) return;
    window.__rfAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(script);
  }

  function showConsent() {
    if (document.getElementById('cookie-banner')) return;
    const el = document.createElement('aside');
    el.id = 'cookie-banner';
    el.className = 'cookie-banner';
    el.setAttribute('aria-label', 'Preferencias de privacidad');
    el.innerHTML = `
      <strong>Privacidad primero</strong>
      <p class="small">La web funciona sin cookies de analítica. Si aceptas, cargaremos Google Analytics para medir uso agregado. No usamos analítica hasta que lo autorices.</p>
      <div class="cookie-actions">
        <button class="button primary" type="button" data-consent="yes">Aceptar analítica</button>
        <button class="button secondary" type="button" data-consent="no">Seguir sin analítica</button>
        <a class="button secondary" href="${BASE}politica-cookies/">Más información</a>
      </div>`;
    document.body.appendChild(el);
    el.querySelector('[data-consent="yes"]').addEventListener('click', () => { localStorage.setItem('rfAnalyticsConsent', 'granted'); loadAnalytics(); el.remove(); });
    el.querySelector('[data-consent="no"]').addEventListener('click', () => { localStorage.setItem('rfAnalyticsConsent', 'denied'); el.remove(); });
  }

  function initConsent() {
    const state = localStorage.getItem('rfAnalyticsConsent');
    if (state === 'granted') loadAnalytics();
    else if (state === null) showConsent();
  }

  document.addEventListener('DOMContentLoaded', () => { initNav(); initConsent(); });
})();
