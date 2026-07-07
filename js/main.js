const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroupSkip: 1,
  cssMode: true,
  nested: true,
  passiveListeners: false,
  maxBackfaceHiddenSlides: 20,
  lazyPreloadPrevNext: 3,
  freeMode: {
    enabled: true
  },
  autoplay: {
    pauseOnMouseEnter: true
  }
});

const panoramaSwiper = new Swiper(".panorama-swiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
});
