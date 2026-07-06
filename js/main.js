const swiper = new Swiper('.swiper', {
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
