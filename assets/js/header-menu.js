const toggle = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('main-menu');
const overlay = document.getElementById('mobile-menu-overlay');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

if (toggle && menu && overlay) {
  // Cache classList operations
  const menuClassList = menu.classList;
  const overlayClassList = overlay.classList;
  const bodyClassList = document.body.classList;

  const closeMenu = () => {
    requestAnimationFrame(() => {
      menuClassList.remove('open');
      overlayClassList.remove('show');
      bodyClassList.remove('menu-open');
    });
  };

  const openMenu = () => {
    requestAnimationFrame(() => {
      menuClassList.add('open');
      overlayClassList.add('show');
      bodyClassList.add('menu-open');
    });
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menuClassList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }, { passive: true });

  overlay.addEventListener('click', closeMenu, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuClassList.contains('open')) {
      closeMenu();
    }
  }, { passive: true });

  // Batch submenu operations
  const submenuHandler = (e) => {
    if (window.innerWidth <= 800) {
      e.preventDefault();
      const submenu = e.currentTarget.nextElementSibling;
      if (submenu) {
        requestAnimationFrame(() => {
          submenu.classList.toggle('submenu-open');
        });
      }
    }
  };

  submenuToggles.forEach((btn) => {
    btn.addEventListener('click', submenuHandler, { passive: false });
  });

  // Optimize menu link clicks
  const menuLinks = menu.querySelectorAll('a:not(.submenu-toggle)');
  const linkHandler = (e) => {
    if (menuClassList.contains('open') && window.innerWidth <= 800) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      closeMenu();
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  };

  menuLinks.forEach((link) => {
    link.addEventListener('click', linkHandler, { passive: false });
  });
}

// SEO dostu hizmet linklerini optimize et
const serviceLinks = document.querySelectorAll('.main-nav a[href^="/hizmet/"], .dropdown-content a[href^="/hizmet/"]');
const serviceHandler = (e) => {
  const href = e.currentTarget.getAttribute('href');
  const match = href.match(/\/?hizmet\/([^.\/]+)\.html$/);
  if (match) {
    e.preventDefault();
    const service = match[1]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    window.location.href = `hizmet.html?service=${encodeURIComponent(service)}`;
  }
};

serviceLinks.forEach(link => {
  link.addEventListener('click', serviceHandler, { passive: false });
});