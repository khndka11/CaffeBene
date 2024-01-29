let currentSlide = 0;

function changeSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const translateValue = -currentSlide * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}