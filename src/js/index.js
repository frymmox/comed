const swiper = new Swiper('.swiper-carousel', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperPerView = new Swiper('.swiper-per-view', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1032: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const inputPhones = document.querySelectorAll('.input-phone');

if(inputPhones) {
  Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputPhones);
}
