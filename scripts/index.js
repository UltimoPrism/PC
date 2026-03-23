let current = 0;
const slides = document.querySelectorAll(".slide");
let isScrolling = false;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  } else {
    current = 0;
    showSlide(current);
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    showSlide(current);
  }
}

window.addEventListener("wheel", (e) => {
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

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
slides.forEach((element) => {
  var gesuredZone = element;
  gesuredZone.addEventListener(
    "touchstart",
    function (event) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    },
    false,
  );

  gesuredZone.addEventListener(
    "touchend",
    function (event) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesure();
    },
    false,
  );
});

function handleGesure() {
  if (touchendY < touchstartY) {
    nextSlide();
  }
  if (touchendY > touchstartY) {
    prevSlide();
  }
}
