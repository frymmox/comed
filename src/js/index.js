const Swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
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

const inputPhone = document.querySelector('.input-phone');

Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputPhone);
