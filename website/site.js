(() => {
  const storeLinks = window.ZOO_GUIDE_STORE_LINKS || {};

  document.querySelectorAll('[data-store-badge]').forEach((badge) => {
    const platform = badge.dataset.storeBadge;
    const rawUrl = storeLinks[platform];

    if (!rawUrl) return;

    let url;
    try {
      url = new URL(rawUrl);
    } catch {
      return;
    }
    if (url.protocol !== 'https:') return;

    const link = document.createElement('a');
    link.className = `${badge.className} is-available`;
    link.href = url.toString();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Open the app listing on ${platform === 'appStore' ? 'the App Store' : 'Google Play'}`);
    link.innerHTML = badge.innerHTML;
    const status = link.querySelector('.store-status');
    if (status) status.textContent = 'Get the app';
    badge.replaceWith(link);
  });

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !expanded);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
      });
    });
  }
})();
