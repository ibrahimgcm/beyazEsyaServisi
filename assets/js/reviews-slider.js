document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.reviews-slider-container');
    if (!sliderContainer) return;

    const track = sliderContainer.querySelector('.reviews-track');
    const cards = Array.from(track.children);
    const nextButton = sliderContainer.querySelector('.next-btn');
    const prevButton = sliderContainer.querySelector('.prev-btn');
    const dotsNav = sliderContainer.querySelector('.slider-dots');

    if (!track || !nextButton || !prevButton || cards.length === 0) {
        console.warn('Slider bileşenleri eksik, slider başlatılamadı.');
        return;
    }

    let cardWidth = 0;
    let currentIndex = 0;
    let autoPlayInterval;

    // Boyutları hesapla ve slider'ı kur
    const setupSlider = () => {
        // --- OKUMA ---
        // Layout thrashing'i önlemek için tüm okumaları bir kerede yap
        cardWidth = cards[0].getBoundingClientRect().width;
        
        // --- YAZMA ---
        // Tüm yazmaları bir kerede yap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Dot'ları oluştur
        if (dotsNav) {
            dotsNav.innerHTML = ''; // Öncekileri temizle
            cards.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.setAttribute('aria-label', `${i + 1}. yoruma git`);
                dot.addEventListener('click', () => {
                    moveToSlide(i);
                    stopAutoPlay(); // Kullanıcı etkileşiminde otomatik oynatmayı durdur
                });
                dotsNav.appendChild(dot);
            });
            updateDots();
        }
    };

    const moveToSlide = (targetIndex) => {
        const newIndex = (targetIndex + cards.length) % cards.length;
        
        // --- YAZMA ---
        track.style.transform = `translateX(-${newIndex * cardWidth}px)`;
        currentIndex = newIndex;
        updateDots();
    };

    const updateDots = () => {
        if (!dotsNav) return;
        const dots = Array.from(dotsNav.children);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    // Buton event'leri
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
        stopAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
        stopAutoPlay();
    });

    // Otomatik oynatma
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, 5000);
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Yeniden boyutlandırmayı yönet
    const handleResize = () => {
        // Yeniden boyutlandırmada slider'ı tekrar kur
        setupSlider();
    };

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    }, { passive: true });

    // Başlangıç kurulumu
    // Resimlerin ve fontların yüklenmesini beklemek için küçük bir gecikme
    setTimeout(() => {
        setupSlider();
        startAutoPlay();
    }, 100);

    // Sayfa görünürlüğü değiştiğinde otomatik oynatmayı durdur/başlat
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });
});
