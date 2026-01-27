document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.mySwiper')) return;

  new Swiper('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
    },
  });
});
