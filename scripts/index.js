  let current = 0;
  const slides = document.querySelectorAll('.slide');
  let isScrolling = false;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  function nextSlide() {
    if (current < slides.length - 1) {
      current++;
      showSlide(current);
    }
  }

  function prevSlide() {
    if (current > 0) {
      current--;
      showSlide(current);
    }
  }

  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setTimeout(() => {
      isScrolling = false;
    }, 800);
  });   