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
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const inputPhone = document.querySelector('.input-phone');
const inputPhoneModal = document.querySelector('.input-phone-modal');

if(inputPhone) {
  Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputPhone);
}

if(inputPhoneModal) {
  Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputPhoneModal);
}
