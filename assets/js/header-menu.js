const toggle = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('main-menu');
const overlay = document.getElementById('mobile-menu-overlay');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

if (toggle && menu && overlay) {
  const closeMenu = () => {
    menu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    menu.classList.add('open');
    overlay.classList.add('show');
    document.body.classList.add('menu-open');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });

  submenuToggles.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 800) {
        e.preventDefault();
        const submenu = btn.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('submenu-open');
        }
      }
    });
  });

  const menuLinks = menu.querySelectorAll('a:not(.submenu-toggle)');
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (menu.classList.contains('open') && window.innerWidth <= 800) {
        e.preventDefault();
        const href = link.getAttribute('href');
        closeMenu();
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
}

// SEO dostu hizmet linklerini dinamik parametreli URL'ye yönlendir
// Hem .main-nav hem .dropdown-content içindeki /hizmet/ ile başlayan linkler için

document.querySelectorAll('.main-nav a[href^="/hizmet/"], .dropdown-content a[href^="/hizmet/"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var href = link.getAttribute('href');
    // /hizmet/xyz.html veya hizmet/xyz.html formatını yakala
    var match = href.match(/\/?hizmet\/([^.\/]+)\.html$/);
    if (match) {
      e.preventDefault();
      var service = match[1]
        .replace(/-/g, ' ') // tireleri boşluğa çevir
        .replace(/\b\w/g, function(l) { return l.toUpperCase(); }); // baş harfleri büyüt
      window.location.href = 'hizmet.html?service=' + encodeURIComponent(service);
    }
  });
});