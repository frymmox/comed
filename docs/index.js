"use strict";var headerOpen=document.querySelector(".header__open"),headerClose=document.querySelector(".header__close"),headerList=document.querySelector(".header__collapse");headerOpen.addEventListener("click",(function(){headerList.classList.add("header__collapse--open"),scrollLock.disablePageScroll()})),headerClose.addEventListener("click",(function(){headerList.classList.remove("header__collapse--open"),scrollLock.enablePageScroll()}));var swiper=new Swiper(".swiper-carousel",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiperPerView=new Swiper(".swiper-per-view",{slidesPerView:1,spaceBetween:24,loop:!0,breakpoints:{768:{slidesPerView:2},1032:{slidesPerView:3},1300:{slidesPerView:4},1920:{slidesPerView:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),inputPhones=document.querySelectorAll(".input-phone");if(inputPhones&&Inputmask({mask:"+7(999) 999-99-99"}).mask(inputPhones),document.documentElement.clientWidth<1300){var languageButton=document.querySelector(".language"),languageList=document.querySelector(".language__dropdown");languageButton.addEventListener("click",(function(e){e.stopPropagation(),languageList.classList.toggle("language__dropdown--active")})),document.addEventListener("click",(function(e){var o=e.target,l=o==languageList||languageList.contains(o),a=o==languageButton,t=languageList.classList.contains("language__dropdown--active");l||a||!t||languageList.classList.toggle("language__dropdown--active")}))}document.documentElement.clientWidth<1300&&document.querySelectorAll(".js-collapse-toggle").forEach((function(e){e.addEventListener("click",(function(o){o.preventDefault();var l=e.getAttribute("data-target");document.querySelector(l).classList.toggle("menu-dropdown--show")}))}));var modalOpenDoctor=document.querySelector(".js-modal-doctor-open"),modalCloseDoctor=document.querySelector(".js-modal-doctor-close"),overlayDoctor=document.querySelector(".js-modal-doctor .modal__overlay"),modalDoctor=document.querySelector(".js-modal-doctor");modalOpenDoctor.addEventListener("click",(function(){modalDoctor.classList.add("modal--show"),scrollLock.disablePageScroll()})),modalCloseDoctor.addEventListener("click",(function(){modalDoctor.classList.remove("modal--show"),scrollLock.enablePageScroll()})),overlayDoctor.addEventListener("click",(function(){modalDoctor.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalDoctor.classList.remove("modal--show"),scrollLock.enablePageScroll())}));var modalOpenCall=document.querySelectorAll(".js-modal-call-open"),modalCloseCall=document.querySelector(".js-modal-call-close"),overlayCall=document.querySelector(".js-modal-call .modal__overlay"),modalCall=document.querySelector(".js-modal-call");modalOpenCall.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),modalCall.classList.add("modal--show"),scrollLock.disablePageScroll()}))})),modalCloseCall.addEventListener("click",(function(){modalCall.classList.remove("modal--show"),scrollLock.enablePageScroll()})),overlayCall.addEventListener("click",(function(){modalCall.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalCall.classList.remove("modal--show"),scrollLock.enablePageScroll())}));var modalOpenQuestion=document.querySelector(".js-modal-question-open"),modalCloseQuestion=document.querySelector(".js-modal-question-close"),overlayQuestion=document.querySelector(".js-modal-question .modal__overlay"),modalQuestion=document.querySelector(".js-modal-question");modalOpenQuestion.addEventListener("click",(function(e){e.preventDefault(),modalQuestion.classList.add("modal--show"),scrollLock.disablePageScroll()})),modalCloseQuestion.addEventListener("click",(function(){modalQuestion.classList.remove("modal--show"),scrollLock.enablePageScroll()})),overlayQuestion.addEventListener("click",(function(){modalQuestion.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalQuestion.classList.remove("modal--show"),scrollLock.enablePageScroll())}));