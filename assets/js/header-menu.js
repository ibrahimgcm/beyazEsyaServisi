document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('main-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const submenuToggles = document.querySelectorAll('.submenu-toggle');

  if (toggle && menu && overlay) {
    const menuClassList = menu.classList;
    const overlayClassList = overlay.classList;
    const bodyClassList = document.body.classList;

    const closeMenu = () => {
      requestAnimationFrame(() => {
        menuClassList.remove('open');
        overlayClassList.remove('show');
        bodyClassList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    };

    const openMenu = () => {
      requestAnimationFrame(() => {
        menuClassList.add('open');
        overlayClassList.add('show');
        bodyClassList.add('menu-open');
        toggle.setAttribute('aria-expanded', 'true');
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

    const submenuHandler = (e) => {
      if (window.innerWidth <= 800) {
        e.preventDefault();
        const submenu = e.currentTarget.nextElementSibling;
        if (submenu) {
          const isSubmenuOpen = submenu.classList.toggle('submenu-open');
          e.currentTarget.setAttribute('aria-expanded', isSubmenuOpen.toString());
        }
      }
    };

    submenuToggles.forEach((btn) => {
      btn.setAttribute('aria-haspopup', 'true');
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', submenuHandler, { passive: false });
    });

    const menuLinks = menu.querySelectorAll('a:not(.submenu-toggle)');
    const linkHandler = (e) => {
      if (menuClassList.contains('open') && window.innerWidth <= 800) {
        const href = e.currentTarget.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          closeMenu();
          setTimeout(() => {
            window.location.href = href;
          }, 150);
        }
      }
    };

    menuLinks.forEach((link) => {
      link.addEventListener('click', linkHandler, { passive: false });
    });
  }

  const serviceLinks = document.querySelectorAll('.main-nav a[href^="/hizmet/"], .dropdown-content a[href^="/hizmet/"]');
  if (serviceLinks.length > 0) {
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
  }
});