document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.reviews-slider-container');
  if (!sliderContainer) return;

  const track = sliderContainer.querySelector('.reviews-track');
  const slides = Array.from(track.children);
  const nextButton = sliderContainer.querySelector('.next-btn');
  const prevButton = sliderContainer.querySelector('.prev-btn');
  const dotsNav = sliderContainer.querySelector('.slider-dots');
  let dots = [];

  if (!track || !nextButton || !prevButton || slides.length === 0) {
    return;
  }

  let slideWidth = 0;
  let currentIndex = 0;
  let isMoving = false;
  let resizeTimeout;

  const setupDots = () => {
    if (dotsNav) {
      dotsNav.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-slide', i);
        dot.setAttribute('aria-label', `${i + 1}. yorum`);
        dotsNav.appendChild(dot);
      });
      dots = Array.from(dotsNav.children);
    }
  };

  const updateLayout = () => {
    // Batch reads
    const containerWidth = sliderContainer.getBoundingClientRect().width;
    slideWidth = containerWidth;

    // Batch writes
    requestAnimationFrame(() => {
      slides.forEach(slide => {
        slide.style.width = `${slideWidth}px`;
      });
      track.style.width = `${slideWidth * slides.length}px`;
      updateTrackPosition(false);
    });
  };

  const updateTrackPosition = (useTransition = true) => {
    const newPosition = -currentIndex * slideWidth;
    requestAnimationFrame(() => {
      track.style.transition = useTransition ? 'transform 0.4s ease-in-out' : 'none';
      track.style.transform = `translateX(${newPosition}px)`;
    });
  };

  const updateDots = () => {
    if (dots.length > 0) {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
  };

  const moveToSlide = (targetIndex) => {
    if (isMoving || targetIndex < 0 || targetIndex >= slides.length) return;
    isMoving = true;
    currentIndex = targetIndex;
    updateTrackPosition();
    updateDots();
  };

  const handleNext = () => moveToSlide((currentIndex + 1) % slides.length);
  const handlePrev = () => moveToSlide((currentIndex - 1 + slides.length) % slides.length);

  const handleDotClick = e => {
    const targetDot = e.target.closest('button.dot');
    if (targetDot) {
      const targetIndex = parseInt(targetDot.dataset.slide, 10);
      moveToSlide(targetIndex);
    }
  };

  // Event Listeners
  nextButton.addEventListener('click', handleNext, { passive: true });
  prevButton.addEventListener('click', handlePrev, { passive: true });
  if (dotsNav) {
    dotsNav.addEventListener('click', handleDotClick, { passive: true });
  }

  track.addEventListener('transitionend', () => {
    isMoving = false;
  }, { passive: true });

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateLayout, 200);
  }, { passive: true });

  // Initial setup
  setupDots();
  updateLayout();
});
