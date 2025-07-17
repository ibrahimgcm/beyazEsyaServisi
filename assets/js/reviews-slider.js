// Modern Reviews Slider
class ReviewsSlider {
  constructor() {
    this.slider = document.querySelector('.reviews-slider');
    this.track = document.querySelector('.reviews-track');
    this.cards = document.querySelectorAll('.review-card');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.dots = document.querySelectorAll('.dot');
    
    this.currentSlide = 0;
    this.totalSlides = this.cards.length; // Her kart bir slayt

    // Önceden hesaplanmış ve kullanılmayan boyutlar kaldırıldı
    
    this.init();
  }
  
  init() {
    if (!this.slider || !this.track || this.cards.length === 0) return;

    // İlk boyut hesaplaması
    this.computeDimensions();
    
    this.setupEventListeners();
    this.updateSlider();
    this.updateDots();
    this.updateButtons();
    
    // Resize event listener
    window.addEventListener('resize', () => {
      this.totalSlides = this.cards.length; // Her zaman toplam kart sayısı
      this.currentSlide = Math.min(this.currentSlide, this.totalSlides - 1);

      // Yeniden boyut hesapla (kart genişliği veya gap değişmiş olabilir)
      this.computeDimensions();
      this.updateSlider();
      this.updateDots();
      this.updateButtons();
    });
    
    // Touch/swipe support
    this.setupTouchEvents();
    
    // Auto-play (optional)
    this.setupAutoPlay();
  }
  
  getCardsPerView() {
    return 1; // Her zaman 1 kart göster
  }
  
  setupEventListeners() {
    this.prevBtn?.addEventListener('click', () => this.prevSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }
  
  setupTouchEvents() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    this.slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.track.style.transition = 'none';
    }, { passive: true });
    
    this.slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      
      currentX = e.touches[0].clientX;
      const diffX = currentX - startX;
      const currentTransform = this.currentSlide * -100;
      
      this.track.style.transform = `translateX(${currentTransform + (diffX / this.slider.offsetWidth) * 100}%)`;
    }, { passive: true });
    
    this.slider.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      
      isDragging = false;
      this.track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      
      const diffX = currentX - startX;
      const threshold = 50;
      
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      } else {
        this.updateSlider();
      }
    }, { passive: true });
  }
  
  setupAutoPlay() {
    let autoPlayInterval;
    
    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        if (this.currentSlide >= this.totalSlides - 1) {
          this.goToSlide(0);
        } else {
          this.nextSlide();
        }
      }, 5000);
    };
    
    const stopAutoPlay = () => {
      clearInterval(autoPlayInterval);
    };
    
    // Start auto-play
    startAutoPlay();
    
    // Pause on hover
    this.slider.addEventListener('mouseenter', stopAutoPlay);
    this.slider.addEventListener('mouseleave', startAutoPlay);
    
    // Pause on focus
    this.slider.addEventListener('focusin', stopAutoPlay);
    this.slider.addEventListener('focusout', startAutoPlay);
    
    // Pause when page is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });
  }
  
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1;
    }
    this.updateSlider();
    this.updateDots();
    this.updateButtons();
  }
  
  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.updateSlider();
    this.updateDots();
    this.updateButtons();
  }
  
  goToSlide(index) {
    this.currentSlide = Math.max(0, Math.min(index, this.totalSlides - 1));
    this.updateSlider();
    this.updateDots();
    this.updateButtons();
  }
  
  // Tek noktadan boyut hesaplama (offsetWidth / getComputedStyle sadece burada çağrılır)
  computeDimensions() {
    if (this.cards.length === 0) return;
    // this.cardWidth = this.cards[0].offsetWidth; // Kullanılmıyor ve yeniden düzenlemeye neden oluyor
    // this.gap = parseInt(window.getComputedStyle(this.track).gap) || 0; // Kullanılmıyor ve yeniden düzenlemeye neden oluyor
  }
  
  updateSlider() {
    // Use percentage-based transforms to avoid layout calculations
    const translateX = -this.currentSlide * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
  }
  
  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }
  
  updateButtons() {
    if (this.prevBtn) {
      this.prevBtn.disabled = false; // Always enabled for infinite loop
    }
    
    if (this.nextBtn) {
      this.nextBtn.disabled = false; // Always enabled for infinite loop
    }
  }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ReviewsSlider();
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe review cards for scroll animations - Optimized to prevent layout shift
document.addEventListener('DOMContentLoaded', () => {
  // Use requestAnimationFrame to batch DOM operations
  requestAnimationFrame(() => {
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
      // Batch style changes to prevent layout thrashing
      card.style.cssText += `
        opacity: 0;
        transform: translateY(20px) translateZ(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
        will-change: opacity, transform;
      `;
      
      // Stagger the observation to prevent simultaneous animations
      setTimeout(() => {
        observer.observe(card);
      }, index * 50);
    });
  });
});

// Performance optimization: Preload next slides
class SliderPreloader {
  constructor() {
    this.preloadedSlides = new Set();
  }
  
  preloadSlide(index) {
    if (this.preloadedSlides.has(index)) return;
    
    const cards = document.querySelectorAll('.review-card');
    const startIndex = index * 3; // Assuming 3 cards per slide on desktop
    
    for (let i = startIndex; i < Math.min(startIndex + 3, cards.length); i++) {
      const card = cards[i];
      if (card) {
        // Trigger any lazy loading or animations
        card.classList.add('preloaded');
      }
    }
    
    this.preloadedSlides.add(index);
  }
}

// Add smooth scrolling to slider section
function scrollToReviews() {
  const reviewsSection = document.getElementById('yorumlar');
  if (reviewsSection) {
    reviewsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ReviewsSlider, SliderPreloader };
}
