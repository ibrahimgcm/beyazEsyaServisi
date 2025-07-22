document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.reviews-slider-container');
  if (!sliderContainer) return;

  const track = sliderContainer.querySelector('.reviews-track');
  const slides = Array.from(track.children);
  const nextButton = sliderContainer.querySelector('.next-btn');
  const prevButton = sliderContainer.querySelector('.prev-btn');
  const dotsNav = sliderContainer.nextElementSibling;
  const dots = dotsNav ? Array.from(dotsNav.children) : [];

  let slideWidth = 0;
  let currentIndex = 0;
  let isMoving = false;

  function setSlideWidth() {
    // Read layout once
    const slideRect = slides[0].getBoundingClientRect();
    const containerRect = sliderContainer.getBoundingClientRect();
    slideWidth = slideRect.width;
    
    // Adjust track width for all slides
    track.style.width = `${slideWidth * slides.length}px`;
    
    // Apply width to each slide
    slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });
    
    // Update position without animation
    updateTrackPosition(false);
  }

  function updateTrackPosition(useTransition = true) {
    const newPosition = -currentIndex * slideWidth;
    // Write to layout
    requestAnimationFrame(() => {
      track.style.transition = useTransition ? 'transform 0.5s ease-in-out' : 'none';
      track.style.transform = `translateX(${newPosition}px)`;
    });
  }

  function updateDots(targetIndex) {
    const currentDot = dotsNav.querySelector('.active');
    if (currentDot) {
      currentDot.classList.remove('active');
    }
    const newDot = dots[targetIndex];
    if (newDot) {
      newDot.classList.add('active');
    }
  }

  function moveToSlide(targetIndex) {
    if (isMoving || targetIndex === currentIndex) return;
    isMoving = true;

    currentIndex = targetIndex;
    updateTrackPosition();
    updateDots(targetIndex);
  }

  // Event Listeners
  nextButton.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  });

  prevButton.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
  });

  dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    if (targetIndex !== -1) {
      moveToSlide(targetIndex);
    }
  });

  track.addEventListener('transitionend', () => {
    isMoving = false;
  });

  // Initial setup
  setSlideWidth();

  // Recalculate on resize, with debouncing to avoid excessive calls
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setSlideWidth();
    }, 250);
  });
});
