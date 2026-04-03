window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.querySelector('#navbarMenu');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  if (window.bulmaCarousel) {
    window.bulmaCarousel.attach('.results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      autoplay: false,
      pagination: true,
      navigation: true
    });
  }
});
